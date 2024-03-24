import psycopg2
import requests
from uf_website_scraper import get_links

def truncateTable(cur):
    cur.execute("TRUNCATE TABLE url,error,alert,structure,aria,contrast,feature")


def insert_into_url(cur,response):
    cur.execute(
        "INSERT INTO url (url,wave_url,title,error_count,feature_count,structure_count,aria_count,alert_count,contrast_count) "
        "VALUES (%s, %s, %s, %s, %s, %s,%s, %s, %s) RETURNING url_id",
        (
            response['statistics']['pageurl'],
            response['statistics']['waveurl'],
            response['statistics']['pagetitle'],
            response['categories']['error']['count'],
            response['categories']['feature']['count'],
            response['categories']['structure']['count'],
            response['categories']['aria']['count'],
            response['categories']['alert']['count'],
            response['categories']['contrast']['count'],

        ))

    page_id = cur.fetchone()[0]
    return page_id

def insert_into_error(cur,response,page_id):
    if (response['categories']['error']['count'] != 0):
        for key, inner_dict in response['categories']['error']['items'].items():
            cur.execute(
                "INSERT INTO error (url_id,name,description,count) VALUES (%s, %s, %s, %s)",
                (
                    page_id,
                    inner_dict['description'],
                    key,
                    inner_dict['count']
                ))

def insert_into_alert(cur,response,page_id):
    if (response['categories']['alert']['count'] != 0):
        for key, inner_dict in response['categories']['alert']['items'].items():
            cur.execute(
                "INSERT INTO alert (url_id,name,description,count) VALUES (%s, %s, %s, %s) ",
                (
                    page_id,
                    inner_dict['description'],
                    key,
                    inner_dict['count']
                ))

def insert_into_feature(cur,response,page_id):
    if (response['categories']['feature']['count'] != 0):
        for key, inner_dict in response['categories']['feature']['items'].items():
            cur.execute(
                "INSERT INTO feature (url_id,name,description,count) VALUES (%s, %s, %s, %s) ",
                (
                    page_id,
                    inner_dict['description'],
                    key,
                    inner_dict['count']
                ))

def insert_into_structure(cur,response,page_id):
    if (response['categories']['feature']['count'] < 2):
        for key, inner_dict in response['categories']['structure']['items'].items():
            cur.execute(
                "INSERT INTO structure (url_id,name,description,count) VALUES (%s, %s, %s, %s) ",
                (
                    page_id,
                    inner_dict['description'],
                    key,
                    inner_dict['count']
                ))

def insert_into_aria(cur,response,page_id):
    if(response['categories']['aria']['count'] != 0):
        count = 0
        for key, inner_dict in response['categories']['aria']['items'].items():
            if count > 50:
                break
            count += 1
            cur.execute(
                "INSERT INTO aria (url_id,name,description,count) VALUES (%s, %s, %s, %s) ",
                (
                    page_id,
                    inner_dict['description'],
                    key,
                    inner_dict['count']
                ))


def insert_into_contrast(cur,response,page_id):
    if(response['categories']['contrast']['count'] != 0):
        for key, inner_dict in response['categories']['contrast']['items'].items():
            cur.execute(
                "INSERT INTO error (url_id,name,description,count) VALUES (%s, %s, %s, %s) ",
                (
                    page_id,
                    inner_dict['description'],
                    key,
                    inner_dict['count']
                ))


def insertData(cur,response):
    try:
        page_id = insert_into_url(cur,response)
        insert_into_error(cur,response,page_id)
        insert_into_alert(cur, response, page_id)
        insert_into_feature(cur, response, page_id)
        insert_into_structure(cur, response, page_id)
        insert_into_aria(cur, response, page_id)
        insert_into_contrast(cur,response,page_id)


        # Commit the transaction

    except (psycopg2.Error) as error:
        print("Error while connecting to PostgreSQL:", error)


def main():
    conn = psycopg2.connect("host=34.135.71.145 dbname=oschack user=postgres password=BestPasswordEver")
    cur = conn.cursor()
    truncateTable(cur)
    links = get_links()
    for link in links:
        api_url = f"https://wave.webaim.org/api/request?key={"MU7HUc153725"}&reporttype=2&url={link}"
        response = requests.get(api_url)

        # Check if the request was successful (status code 200)
        if response.status_code == 200:
            data = response.json()
            insertData(cur,data)
        else:
            # Print an error message if the request was not successful
            print(f"Error: {response.status_code} - {response.reason}")

    conn.commit()
    cur.close()
    conn.close()

def create_post(post_text : str):
    conn = psycopg2.connect("host=34.135.71.145 dbname=oschack user=postgres password=BestPasswordEver")
    cursor = conn.cursor()
    cursor.execute("INSERT INTO blog_posts(post_content) VALUES(%s)",(
        post_text,
    ))
    conn.commit()
    cursor.close()
    conn.close()

create_post("test")