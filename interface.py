import os
import yaml
import tweepy
import random
import re
import nltk
from binance.client import Client
from datetime import datetime,timedelta
import ssl
try:
    _create_unverified_https_context = ssl._create_unverified_context
except AttributeError:
    pass
else:
    ssl._create_default_https_context = _create_unverified_https_context
nltk.download('vader_lexicon')
from nltk.sentiment.vader import SentimentIntensityAnalyzer
sia = SentimentIntensityAnalyzer()
cryptolect_words = {
    'bear': -2.0,
    'bearish': -2.0,
    'bull': 2.0,
    'bullish': 2.0,
    'crash':-2.0,
    'lambo': 2.0,
    'moon': 2.0,
    'rekt': -2.0,
    'shill': 2.0,
    'ath': 2.0,
    'fud': -2.0,
    'inflation': 2.0
}
sia.lexicon.update(cryptolect_words)

api_key = 'kCd4bY3aZslz148w5xlLyzwCu91PRnzW4uwChCYudMBAarj0A8tGQuvN5sGlDQNN'
api_secret = 'IuwOHrHZSYXmFvpNC57Uz3pngnZ61LSq5W7iMw1AiyAHMp986YyIcZ1g5XSeYWF0'
print("Connecting to Binance API")
client = Client(api_key, api_secret)
bearer_token = 'AAAAAAAAAAAAAAAAAAAAAJN4UAEAAAAAd%2BUEfeosUiz%2BBofN1rwSXVnsuWI%3D3pSEAqrhdAThKIKtfqxxV8UEWv6QaRFJ9VqUolhLj6oRZIfCXG'
print("Connecting to Twitter API")
twitter = tweepy.Client(bearer_token=bearer_token)

def generate_labels(ph):
    return [(datetime.utcnow()-timedelta(days=len(ph)-x-1)).strftime("%Y-%m-%d") for x in range(0,len(ph))]

#opens yamls
with open('portfolio_info/portfolio.yaml') as f:
    p = yaml.safe_load(f)
with open('portfolio_info/portfolio_history.yaml') as f:
    ph = yaml.safe_load(f)

def generate_ap_data(ph, pair=None):
    if pair==None:
        return [ph[x]['total_value']/100 for x in range(0,len(ph))]
    return [ph[x][pair]['value']/100 for x in range(0,len(ph))]

def generate_historical_data(ph, client):
    data = {}
    for c in ('BTC','ETH','DOGE','ADA'):
        klines = client.get_historical_klines(f'{c}USDT',Client.KLINE_INTERVAL_1DAY,f"{len(ph)} days")
        initial_amount = 25/float(klines[0][1])
        data[c] = [initial_amount*float(klines[x][1]) for x in range(0,len(klines))]
    data['all'] = [data['BTC'][x]+data['ETH'][x]+data['DOGE'][x]+data['ADA'][x] for x in range(0,len(klines))]
    return data

def get_price(client, c):
    return float(client.get_symbol_ticker(symbol=f'{c}USDT')['price'])

def get_price_change(client,c):
    open = float(client.get_historical_klines(f'{c}USDT',Client.KLINE_INTERVAL_1DAY,'1 days')[0][1])
    current = get_price(client, c)
    return f'+{str(round((current/open-1)*100,2))}%' if current/open >= 1 else f'{str(round((current/open-1)*100,2))}%'

def clean_tweet(t):
    t = t.lower()
    t = re.sub('[()!?]', ' ',t)
    t = re.sub('\[.*?\]', ' ',t)
    t = re.sub("[^a-z0-9]", ' ',t)
    t = t.split()
    t = [word for word in t if not word in ['i', 'me', 'my', 'myself', 'we', 'our', 'ours', 'ourselves', 'you', "you're", "you've", "you'll", "you'd", 'your', 'yours', 'yourself', 'yourselves', 'he', 'him', 'his', 'himself', 'she', "she's", 'her', 'hers', 'herself', 'it', "it's", 'its', 'itself', 'they', 'them', 'their', 'theirs', 'themselves', 'what', 'which', 'who', 'whom', 'this', 'that', "that'll", 'these', 'those', 'am', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'having', 'do', 'does', 'did', 'doing', 'a', 'an', 'the', 'and', 'but', 'if', 'or', 'because', 'as', 'until', 'while', 'of', 'at', 'by', 'for', 'with', 'about', 'against', 'between', 'into', 'through', 'during', 'before', 'after', 'above', 'below', 'to', 'from', 'up', 'down', 'in', 'out', 'on', 'off', 'over', 'under', 'again', 'further', 'then', 'once', 'here', 'there', 'when', 'where', 'why', 'how', 'all', 'any', 'both', 'each', 'few', 'more', 'most', 'other', 'some', 'such', 'no', 'nor', 'not', 'only', 'own', 'same', 'so', 'than', 'too', 'very', 's', 't', 'can', 'will', 'just', 'don', "don't", 'should', "should've", 'now', 'd', 'll', 'm', 'o', 're', 've', 'y', 'ain', 'aren', "aren't", 'couldn', "couldn't", 'didn', "didn't", 'doesn', "doesn't", 'hadn', "hadn't", 'hasn', "hasn't", 'haven', "haven't", 'isn', "isn't", 'ma', 'mightn', "mightn't", 'mustn', "mustn't", 'needn', "needn't", 'shan', "shan't", 'shouldn', "shouldn't", 'wasn', "wasn't", 'weren', "weren't", 'won', "won't", 'wouldn', "wouldn't"]]
    t = " ".join(word for word in t)
    return t

def gather_tweets(twitter):
    tweets = []
    for currency in ('bitcoin','ethereum','cardano','dogecoin'):
        q = f'lang:en {currency} -has:links -is:retweet -has:hashtags -has:mentions -giveaway'
        tweets_temp = twitter.search_recent_tweets(query=q, tweet_fields=['context_annotations','created_at'],max_results=15)
        for tweet in tweets_temp.data:
            tweet = " ".join((tweet.text.encode("ascii","ignore").decode()).split())
            t = clean_tweet(tweet)
            tweets.append((tweet,t))
    random.shuffle(tweets)
    return tweets
    
print("Generating portfolio data")
hd = generate_historical_data(ph, client)
print("Generating Twitter data")
tweets = gather_tweets(twitter)
tdict = {}
count=0
print("Analysing tweets")
for tweet in tweets:
    tdict[count]={
        'tweet': tweet[0],
        'pos': sia.polarity_scores(tweet[1])['pos'],
        'neg': sia.polarity_scores(tweet[1])['neg'],
        'neu': sia.polarity_scores(tweet[1])['neu']
    }
    count-=-1

DATA = {
    'chart_info': {
        'labels': generate_labels(ph),
        'all': {
            'bh_data': hd['all'],
            'ap_data': generate_ap_data(ph)
        },
        'bitcoin': {
            'bh_data': hd['BTC'],
            'ap_data': generate_ap_data(ph,'BTCUSDT')
        },
        'ethereum': {
            'bh_data': hd['ETH'],
            'ap_data': generate_ap_data(ph,'ETHUSDT')
        },
        'cardano': {
            'bh_data': hd['ADA'],
            'ap_data': generate_ap_data(ph,'ADAUSDT')
        },
        'dogecoin': {
            'bh_data': hd['DOGE'],
            'ap_data': generate_ap_data(ph,'DOGEUSDT')
        }
    },
    'table_info': {
        'bitcoin': {
            'price': get_price(client, 'BTC'),
            'price_change': get_price_change(client, 'BTC'),
            'hodling': 'No' if p['BTCUSDT']['currency'] == 'USDT' else 'Yes'
        },
        'ethereum': {
            'price': get_price(client, 'ETH'),
            'price_change': get_price_change(client, 'ETH'),
            'hodling': 'No' if p['ETHUSDT']['currency'] == 'USDT' else 'Yes'
        },
        'cardano': {
            'price': get_price(client, 'ADA'),
            'price_change': get_price_change(client, 'ADA'),
            'hodling': 'No' if p['ADAUSDT']['currency'] == 'USDT' else 'Yes'
        },
        'dogecoin': {
            'price': get_price(client, 'DOGE'),
            'price_change': get_price_change(client, 'DOGE'),
            'hodling': 'No' if p['DOGEUSDT']['currency'] == 'USDT' else 'Yes'
        }
    },
    'tweets': tdict
}

print("Rewriting JavaScript files")
with open('./assets/interface_script.js','r') as f:
    script = f.readlines()
script[0] = "const data = "+str(DATA)+"\n"
with open('./assets/interface_script.js','w') as f:
    f.write("".join(script))

os.popen("open assets/interface.html")
print("Done")
