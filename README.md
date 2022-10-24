Created for my University of Birmingham dissertation.

**Requirements:**
- Python 3.9.1, with the following libraries:
  - Tweepy (pip install tweepy)
  - YAML (pip install pyyaml)
  - Binance-Python (pip install python-binance)
  - NLTK (pip install nltk)
  - Psycopg2 (pip install psycopg2) is referenced; though is commented out as it is not included in this demonstration version;
   - SpaCy (pip install spacy), requires follow up vocab download that can be run using python -m spacy download en_core_web_lg
- Java 11.0.9.1
  - WEKA 3.9.0 with Auto-WEKA: `weka.jar` and `autoweka.jar` have been included, so files should run on any machine with Java installed. Files will need unzipping, run `java -jar weka.jar` and `java -jar autoweka.jar`. Please view https://waikato.github.io/weka-wiki/downloading_weka/ and https://www.cs.ubc.ca/labs/beta/Projects/autoweka/manual.pdf for documentation.
- Jupyter Notebooks 6.4.6
- UNIX shell command compatability: Windows users may need to install PowerShell for these commands to work.

API keys can be inserted into api_keys.yaml file.

**Runnable files**:

**_tweet_collector_demo.py_**


This file is a demonstration version of the file orginally used to collect tweets
and store them in a PostgreSQL database. The functionality has been changed somewhat
for demonstration purposes. Where applicable, old code has been commented out in the file
so it is available to view in its originally format.

Running this file prints a collection of tweets posted from the
previous day about Bitcoin, Ethereum, Dogecoin, and Cardano.

Needs to be run where console outputs can be viewed.



**_trading_bot_demo.ipynb_**

This file is Jupyter Notebook version of trading_bot.py that displays this shows the functionality of trading_bot.py and how trades are made using the automated script. Run each cell sequentially.

**_interface.py_**

Running this file will load the interface in the browser.

**Other files**:
- weka.jar: java package for WEKA functionality
- assets/interface.html: interface HTML face
- assets/stylesheet.css: CSS stylesheet for interface.html
- assets/interface_script.js: JavaScript for interface.html, edited by interface.py
- portfolio/default_portfolio.yaml: a configuration file used as a starting portfolio, used by trading_bot.py and trading_bot_demo.ipynb
- portfolio/portfolio_history.yaml: a configuration file used to store/append data concerning previous portfolio holdings, used by trading_bot.py and interface.py
- portfolio/portfolio.yaml: a configuration file used to store the current portfolio holdings, used by trading_bot.py, trading_bot_demo.ipynb and interface.py
- portfolio/portfolio_DEMO.yaml: a demo version of portfolio.yaml for use in trading_bot_demo
- portfolio/portfolio_history_DEMO.yaml: a demo version of portfolio_history.yaml for use in trading_bot_demo.ipynb
- models/...: ,model files used by WEKA 
