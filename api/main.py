from fastapi import FastAPI
from populate_db import create_post
from fetch_db import get_all_sites, get_specific_site


app = FastAPI()

@app.post("/api/makepost")
async def make_post(post_text : str):
    return create_post(post_text)

@app.get("/get_sites")
async def get_sites():
    return get_all_sites()

@app.get("/api/{title}")
def get_single_site(title : str):
    return get_specific_site(title)

@app.get("/")
async def root():
    return {"message": "Hello World"}


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, port=8000)