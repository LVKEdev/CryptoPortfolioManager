'''
Demonstration version of tweet_collector.py
'''

__author__  = 'lam045'
__version__ = '2.1'
__status__ = 'demonstration'

'''
IMPORTANT NOTICE:
This code was originally designed to collect tweets and store them in a PostgreSQL database.
The functionality has been changed somewhat for demonstration purposes. Where applicable, old
code has been commented out so it is available to view.
'''

import tweepy
import time
import yaml

with open('.api_keys.yaml') as f:
    api_keys = yaml.safe_load(f)

bearer_token = api_keys['twitter']
client = tweepy.Client(bearer_token=bearer_token)


'''Commented out section to connect to PostgreSQL database in original code'''
# import psycopg2
# conn = psycopg2.connect(
#     host="localhost",
#     database="crypto_database",
#     user="postgres",
#     password=""
# )
# cursor = conn.cursor()

'''This section has been added so that code will work whenever it is tested.
The original version of this code hardcoded the dates used in start_time and end_time'''
from datetime import date
from datetime import timedelta
yday    = date.today()-timedelta(days=1)
day     = str(yday.day).zfill(2)
month   = str(yday.month).zfill(2)
year    = str(yday.year)
demo    = []

for currency in ('dogecoin','bitcoin','ethereum','cardano'):
    for i in range (0,24,4): #original version uses range(0,24) - 4 step increment added to improve run-time for demonstration
        hour = str(i).zfill(2)
        tweets = client.search_recent_tweets(
            query = f'lang:en {currency} -has:mentions -has:links -is:retweet -has:hashtags -is:quote -donate -giveaway',
            tweet_fields = ['context_annotations', 'created_at'],
            start_time = f'{year}-{month}-{day}T{hour}:00:00Z',
            end_time = f'{year}-{month}-{day}T{hour}:59:59Z',
            max_results = 10 #reduced from 100 in original code 
        ) 
        if (tweets.data != None):
            for tweet in tweets.data:
                '''Commented out section used to add tweets to PostgreSQL database'''
                # text = tweet.text.replace("'","''").replace('"','""')
                # cursor.execute(f"INSERT INTO {currency}_tweets_verified (tweet, timestamp) VALUES ('{text}', '{str(tweet.created_at)[:19]}');")
                # conn.commit()
                demo.append(tweet.text)
        print(f"added {currency} tweets to database for i={i}")
    print(f"added all {currency} tweets from {str(yday)}")
print(f"added all {currency} tweets")

'''This section removes line breaks from the demo tweet array
Original code ends on line 66'''
for i in range(0,len(demo)):
    demo[i] = demo[i].replace('\n',' ')
print(f'\nExample tweets:')
for i in range(0,len(demo)//16):
    print(f"Tweet {str(i+1)}: {demo[i*4+i%4]}")