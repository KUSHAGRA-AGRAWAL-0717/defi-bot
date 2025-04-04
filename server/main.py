from fastapi import FastAPI
from routers import content, market
from fastapi.middleware.cors import CORSMiddleware
from routers import news, schedule, watchlist
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(content.router, prefix="/generate-content")
app.include_router(market.router, prefix="/market-insights")

app.include_router(news.router, prefix="/summarize-news")
app.include_router(schedule.router, prefix="/schedule-post")
# app.include_router(watchlist.router, prefix="/watchlist")


@app.get("/")
def root():
    return {"message": "DeFi Insights API is running."}