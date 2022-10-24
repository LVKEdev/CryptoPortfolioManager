# import psycopg2
import re
import spacy
import nltk
import csv
import ssl

try:
    _create_unverified_https_context = ssl._create_unverified_context
except AttributeError:
    pass
else:
    ssl._create_default_https_context = _create_unverified_https_context

nlp = spacy.load('en_core_web_lg')
nltk.download('vader_lexicon')
from nltk.sentiment.vader import SentimentIntensityAnalyzer
sia = SentimentIntensityAnalyzer()
cryptolect_words = {
    'bear': -2.0,
    'bearish': -2.0,
    'bull': 2.0,
    'bullish': 2.0,
    'lambo': 2.0,
    'moon': 2.0,
    'rekt': -2.0,
    'shill': 2.0,
    'ath': 2.0,
    'fud': -2.0,
    'inflation': 2.0
}
sia.lexicon.update(cryptolect_words)

'''Example tweets used instead of PostgreSQL database'''
tweets = ["Bitcoin may not be going up in real price, dollars may just be inflating","Bitcoin reaching a new all time high today only makes it a good investment for investors if they sell it today","If Bitcoin is digital gold, Doge is digital transaction money.","If Dogecoin becomes (roughly) 20% of Bitcoin in terms of market cap, it would be approaching $3. \n\nThis is why I think $1 Doge is inevitable.","Ethereum is making same mistake, going PoS, it will end up badly","The epoch is 6,100. Civilization no longer counts years but instead epochs. Cardano is the global operating system and remains 100% open source."]
# conn = psycopg2.connect(
#     host="localhost",
#     database="crypto_database",
#     user="postgres",
#     password=""
# )
# cursor = conn.cursor()

stop_words = ['i', 'me', 'my', 'myself', 'we', 'our', 'ours', 'ourselves', 'you', "you're", "you've", "you'll", "you'd", 'your', 'yours', 'yourself', 'yourselves', 'he', 'him', 'his', 'himself', 'she', "she's", 'her', 'hers', 'herself', 'it', "it's", 'its', 'itself', 'they', 'them', 'their', 'theirs', 'themselves', 'what', 'which', 'who', 'whom', 'this', 'that', "that'll", 'these', 'those', 'am', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'having', 'do', 'does', 'did', 'doing', 'a', 'an', 'the', 'and', 'but', 'if', 'or', 'because', 'as', 'until', 'while', 'of', 'at', 'by', 'for', 'with', 'about', 'against', 'between', 'into', 'through', 'during', 'before', 'after', 'above', 'below', 'to', 'from', 'up', 'down', 'in', 'out', 'on', 'off', 'over', 'under', 'again', 'further', 'then', 'once', 'here', 'there', 'when', 'where', 'why', 'how', 'all', 'any', 'both', 'each', 'few', 'more', 'most', 'other', 'some', 'such', 'no', 'nor', 'not', 'only', 'own', 'same', 'so', 'than', 'too', 'very', 's', 't', 'can', 'will', 'just', 'don', "don't", 'should', "should've", 'now', 'd', 'll', 'm', 'o', 're', 've', 'y', 'ain', 'aren', "aren't", 'couldn', "couldn't", 'didn', "didn't", 'doesn', "doesn't", 'hadn', "hadn't", 'hasn', "hasn't", 'haven', "haven't", 'isn', "isn't", 'ma', 'mightn', "mightn't", 'mustn', "mustn't", 'needn', "needn't", 'shan', "shan't", 'shouldn', "shouldn't", 'wasn', "wasn't", 'weren', "weren't", 'won', "won't", 'wouldn', "wouldn't"]

'''Cashtags ignored for this example'''
# def contains_cashtag(t):
#     if not re.search('\$[a-zA-Z][a-zA-Z0-9]*', t):
#         return False
#     return True

def gen_polarity_scores(t):
    pos = sia.polarity_scores(t)['pos']
    neg = sia.polarity_scores(t)['neg']
    neu = sia.polarity_scores(t)['neu']
    label = "none"
    if pos > neg and pos > neu:
        label = "pos"
    elif neg > pos and neg > neu:
        label = "neg"
    elif neu > pos and neu > neg:
        label = "neu"
    return [pos, neg, neu, label]

def clean_tweet(t):
    t = t.lower()
    t = re.sub("[^a-z]", ' ',t)
    t = t.split()
    t = [word for word in t if not word in stop_words]
    t = " ".join(word for word in t)
    return t

'''The code below goes through the tweet database of each cryptocurrency, cleans each tweet, and adds sentiment and vector data to separate file
As this code is being used for demonstration purposes. This script still cleans each tweet and adds sentiment and vector data, but displays it
in the console.'''
# for currency in ('bitcoin','dogecoin','ethereum','cardano'):
#     f = open(f'{currency}_clean_tweets_final.csv', 'w')
#     writer = csv.writer(f)
#     query = f"SELECT * FROM {currency}_tweets_v2 ORDER BY timestamp;"
#         cursor.execute(query)
#         records = cursor.fetchall()
#         count = 1
#         header = ["tweet_id","tweet","pos","neg","neu","label"]
#         for i in range(0,300):
#             header.append(f"v{str(i)}")
#         writer.writerow(header)
#         print("Added header")
#         for row in records:
#         text = clean_tweet(row[1])
#         scores = gen_polarity_scores(text)
#         data = [
#             str(count),
#             text,
#             str(row[2]),
#             str(scores[0]),
#             str(scores[1]),
#             str(scores[2]),
#             str(scores[3])
#         ]
#         for i in range(0,300):
#             data.append(nlp(text).vector[i])
#         writer.writerow(data)
#         print(f"row {str(count)} added")
#         count+=1
#     f.close()
#     print(f"added all {currency} rows")
# print("finished")

for tweet in tweets:
    clean = clean_tweet(tweet)
    scores = gen_polarity_scores(clean)
    vector = nlp(clean).vector[0:5]
    print(f"\nOriginal Text: {' '.join(tweet.split())}\nClean Text: {clean}\nPolarity scores: {scores}\nVectors[0:5]: {vector}")