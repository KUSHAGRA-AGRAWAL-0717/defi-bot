# server/routers/schedule.py
from fastapi import APIRouter, Request
import redis
import uuid
import json
from datetime import datetime

router = APIRouter()
r = redis.Redis(host='localhost', port=6379, db=0)

@router.post("/")
async def schedule_post(request: Request):
    data = await request.json()
    platform = data.get("platform")
    content = data.get("content")
    post_time = data.get("post_time")  # ISO format

    if not platform or not content or not post_time:
        return {"error": "Missing required fields"}

    task_id = str(uuid.uuid4())
    r.set(task_id, json.dumps({
        "platform": platform,
        "content": content,
        "post_time": post_time
    }))
    return {"message": "Post scheduled", "task_id": task_id}
