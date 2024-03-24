from fastapi import FastAPI
from fetch_db import get_all_sites, get_specific_site


url = "http://www.admissions.ufl.edu/"

api_url = f"https://wave.webaim.org/api/request?key={"w82Pnirp3723"}&reporttype=2&url={url}"
app = FastAPI()


@app.get("/all_sites")
def get_sites():
    return get_all_sites()

@app.get("/api/{title}")
def get_single_site(title : str):
    return get_specific_site(title)

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/hello/{name}")
async def say_hello(name: str):
    return {"message": f"Hello {name}"}

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, port=5000)