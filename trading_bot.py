'''
trading_bot.py
'''

__author__ = 'lam045'
__version__ = '2.0'
__status__ = 'Production'

import os
import yaml
import requests
from binance.client import Client
from datetime import datetime, timedelta

with open('api_keys.yaml') as f:
    api_keys = yaml.safe_load(f)

api_key = api_keys['binance_api']
api_secret = api_keys['binance_secret']
client = Client(api_key, api_secret)

def code(currency):
    '''Returns three letter code used for each cryptocurrency (four letter in case of dogecoin)'''
    return 'DOGE' if currency == 'dogecoin' else 'ETH' if currency == 'ethereum' else 'BTC' if currency == 'bitcoin' else 'ADA'

def currency(code):
    '''Returns cryptocurrency name for each crypto code'''
    return 'dogecoin' if code =='DOGE' else 'ethereum' if code == 'ETH' else 'bitcoin' if code == 'BTC' else 'ADA'

def get_precision(currency):
    '''Returns the precision to which Binance allows trades to be made, e.g. Bitcoin can be bought to the nearest 0.00001BTC; Dogecoin can be bought to the nearest 1DOGE'''
    return 5 if currency=='bitcoin' else 4 if currency=='ethereum' else 1 if currency=='cardano' else 0

def exchange(currency):
    '''Returns trading code for currency vs USDT'''
    return f'{code(currency)}USDT'

def get_most_recent_datapoint(currency):
    '''Returns inputs to be used in machine learning file'''
    url = f'https://bitinfocharts.com/comparison/{currency}-tweets.html'
    source = requests.get(url, 'html.parser').text
    a = source.find((datetime.utcnow()-timedelta(days=2)).strftime("%Y/%m/%d"))
    b = source.find((datetime.utcnow()-timedelta(days=1)).strftime("%Y/%m/%d"))
    c = source[b:].find(']')
    d = source[a:b+c]
    d = source[a:b+c].split(',')
    pc = 100*(float(d[3])/float(d[1][:-1])-1)
    return(d[2][11:-2], d[1][:-1], pc)

def generate_temp_arff(data, c):
    '''Generates a hidden .arff file that is used by autoweka.jar machine learning model. Data must be in format ('%Y/%m/%d',int>=0,float>=-100.0) or error will be raised'''
    with open('.temp.arff','w') as f:
        f.write(f'@relation {c}_price\n\n@attribute date date yyyy/MM/dd\n@attribute tweets numeric\n@attribute tweet_change numeric\n@attribute price numeric\n\n@data\n')
        f.write(f'{data[0]},{data[1]},{data[2]},0')

def predict_price(c):
    '''Temporary .arff file and machine learning model stored in data folder'''
    stream = os.popen(f'java -cp autoweka.jar weka.classifiers.meta.AutoWEKAClassifier -T .temp.arff -l models/{code(c).lower()}dl.model -p 0')
    x = float(stream.read().split("\n")[5].split()[2])
    return x*100 if c in ('dogecoin','cardano') else x

def get_price(client, c, trading=False):
    '''Binance API is used to get current price of a cryptocurrency'''
    x = float(client.get_symbol_ticker(symbol=exchange(c))['price'])
    return x*100 if c in ('dogecoin','cardano') and not trading else x

def check_portfolio(client):
    '''Checks if portfolio exists yet - if it doesn't, one will be created so long as account has 100USDT'''
    if not os.path.isfile('portfolio_info/portfolio.yaml'):
        x = client.get_asset_balance(asset='USDT')['free']
        x = int(x[:x.find('.')]+x[x.find('.')+1:x.find('.')+3])
        if x < 100:
            raise Exception('Account does not have enough free USDT to create portfolio.')
        else:
            with open('portfolio_info/default_portfolio.yaml','r') as f:
                data = yaml.safe_load(f)
            with open('portfolio_info/portfolio.yaml','w') as f:
                yaml.dump(data,f)

def load_portfolio():
    '''Loads portfolio from config file'''
    with open('portfolio_info/portfolio.yaml','r') as f:
        data = yaml.safe_load(f)
    return data

def check_tradable(c):
    '''As Binance trades must be worth a minimum of 10USDT, a check is put in place to make sure the value of each sub-portfolio has not slipped below 10USDT'''
    data = load_portfolio()
    if data[exchange(c)]['currency']=='USDT':
        if data[exchange(c)]['amount'] >= 1000:
            return True
        return False
    else:
        price = get_price(client, c)
        if data[exchange(c)]['amount']*price >= 1000:
            return True
        return False

def trade(price, prediction, portfolio, c, client):
    '''Makes buy/sell/hodl decision and executes trades (see buy() and sell() methods)'''
    if prediction > price and portfolio[exchange(c)]['currency']=='USDT':
        buy(portfolio, c, client)
    elif price > price and portfolio[exchange(c)]['currency']!='USDT':
        sell(portfolio, c, client)

def buy(portfolio, c, client):
    '''USE WITH CAUTION
        Executes a buy decision and updates portfolio variable accordingly; p!=q due to trading fees and imprecision between converting between currencies'''
    q = str((portfolio[exchange(c)]['amount']/100)/get_price(client,c,trading=True))
    q = q[:q.find('.')+get_precision(c)+1]
    if q[-1]=='.':
        q=int(q[:-1])
    else:
        q=float(q)
    if q>float(client.get_asset_balance(asset='USDT')['free'])/get_price(client, c, trading=True):
        raise Exception("Insufficient funds to carry out transaction - too much USDT has been withdrawn")
    client.order_market_buy(
        symbol=exchange(c),
        quantity=q
    )
    p = client.get_asset_balance(asset=code(c))['free']
    p = p[:p.find('.')+get_precision(c)+1]
    if p[-1]=='.':
        p = p[:-1]
    portfolio[exchange(c)]['amount'] = float(p)
    portfolio[exchange(c)]['currency'] = code(c)

def sell(portfolio, c, client):
    '''USE WITH CAUTION
        Executes sell decision and updates portfolio variable accordingly; p!=q due to trading fees and imprecision between converting between currencies'''
    a = client.get_asset_balance(asset='USDT')['free']
    usdt_before = int(a[:a.find('.')]+a[a.find('.')+1:a.find('.')+3])
    quantity=client.get_asset_balance(asset=code(c))
    client.order_market_sell(
        symbol=exchange(c),
        quantity=quantity
    )
    b = client.get_asset_balance(asset='USDT')['free']
    usdt_after = int(b[:b.find('.')]+b[b.find('.')+1:b.find('.')+3])
    portfolio[exchange(c)]['amount'] = usdt_after-usdt_before
    portfolio[exchange(c)]['currency'] = 'USDT'

def add_to_history(portfolio, client):
    '''Updates portfolio.yaml file and appends new information to portfolio_history.yaml'''
    with open('portfolio_info/portfolio.yaml','w') as f:
        yaml.dump(portfolio,f)
    total_value = 0
    for k in portfolio:
        portfolio[k]['value'] = portfolio[k]['amount'] if portfolio[k]['currency']=='USDT' else round(portfolio[k]['amount']*get_price(client,currency(portfolio[k]['currency']),trading=True)*100)
        round(portfolio[k]['amount']*get_price(client, currency(portfolio[k]['currency']),trading=True))
        total_value+=portfolio[k]['value']
    portfolio['total_value'] = total_value
    with open('portfolio_info/portfolio_history.yaml','r') as f:
        data = yaml.safe_load(f)
        data[len(data)] = portfolio
    with open('portfolio_info/portfolio_history.yaml','w') as f:
        yaml.dump(data,f)
        

check_portfolio(client) #Checks if portfolio.yaml exists
portfolio = load_portfolio() #Loads portfolio.yaml from previous day
for c in ('dogecoin', 'ethereum', 'bitcoin', 'cardano'):
    data = get_most_recent_datapoint(c)
    generate_temp_arff(data,c)
    prediction = predict_price(c)
    price = get_price(client, c) 
    if check_tradable(c): #checks to see that the USDT value of the asset has not slipped below 10 USDT (whether held as USDT or not)
        trade(price, prediction, portfolio, c, client) #a trade will not necessary be executed !
add_to_history(portfolio,client) #updated portfolio impormation added to config files
