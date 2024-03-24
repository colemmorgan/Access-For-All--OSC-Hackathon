from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from populate_db import create_post
from fetch_db import get_all_sites, get_specific_site, get_posts_from_db
from pydantic import BaseModel


app = FastAPI()


class UserData(BaseModel):
    content: str


@app.post("/api/createpost")
def create_user(user_data: UserData):
    # Process the user data
    create_post(user_data.content)
    return {"message": "User data received successfully", "received": user_data.content}


@app.get("/api/posts")
async def get_posts():
    return get_posts_from_db()


@app.get("/get_sites")
async def get_sites():
    return get_all_sites()


@app.get("/api/{title:str}")
async def get_single_site(title: str):
    return get_specific_site(title)


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/favicon.ico")
async def get_favicon():
    raise HTTPException(status_code=404, detail="Favicon not found")


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, port=8000)
