from fastapi import APIRouter, Query
import requests
from bs4 import BeautifulSoup
import os
import feedparser
router = APIRouter()

import openai
from openai import OpenAI
openai.api_key = os.getenv("OPENAI_API_KEY")
# Load GENAI API key from environment
GENAI_API_KEY = os.getenv("GENAI_API_KEY")  # replace with your dev key for testing

# ---------------------- Scraping ---------------------- #


def scrape_coindesk_rss():
    print("[DEBUG] Fetching CoinDesk RSS feed...")
    feed_url = "https://www.coindesk.com/arc/outboundfeeds/rss/"
    feed = feedparser.parse(feed_url)

    headlines = [entry.title for entry in feed.entries[:3]]
    print(f"[DEBUG] Headlines from RSS: {headlines}")
    return headlines




# ---------------------- Summarization ---------------------- #


client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

from openai import RateLimitError

def summarize_with_ai(text, model="gpt"):
    try:
        res = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "system", "content": "Summarize this news headline in one sentence."},
                      {"role": "user", "content": text}]
        )
        return res.choices[0].message.content.strip()
    except RateLimitError as e:
        print(f"[ERROR] OpenAI Rate Limit: {e}")
        return "API quota exceeded. Unable to summarize."


    

# ---------------------- API Route ---------------------- #

@router.get("/")
def summarize_news(source: str = Query("coindesk")):
    if source != "coindesk":
        return {"error": "Only 'coindesk' is supported currently."}

    headlines = scrape_coindesk_rss()  # <== use RSS version
    if not headlines:
        return {"error": "No headlines found from CoinDesk RSS."}

    summaries = [summarize_with_ai(h, model="gpt") for h in headlines]
    return {"source": source, "summaries": summaries}

