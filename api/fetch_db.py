import psycopg2


def get_posts_from_db():
    conn = psycopg2.connect(
        host="34.135.71.145",
        dbname="oschack",
        user="postgres",
        password="BestPasswordEver",
    )
    cursor = conn.cursor()

    cursor.execute("SELECT * FROM blog_posts")
    rows = cursor.fetchall()
    filtered_rows = []
    for row in rows:
        id, post_content, timestamp = row
        row_dict = {"id": id, "post_content": post_content, "timestamp": timestamp}
        filtered_rows.append(row_dict)
    return filtered_rows


def get_errors(cursor, title):
    cursor.execute(
        f"SELECT name,description, count FROM url LEFT JOIN error USING(url_id) where title='{title}'"
    )
    rows = cursor.fetchall()
    filtered_rows = []
    for row in rows:
        name, description, count = row
        row_dict = {"name": name, "description": description, "count": count}
        filtered_rows.append(row_dict)
    return filtered_rows


def get_alerts(cursor, title):
    cursor.execute(
        f"SELECT name,description, count FROM url LEFT JOIN alert USING(url_id) where title='{title}'"
    )
    rows = cursor.fetchall()
    filtered_rows = []
    for row in rows:
        name, description, count = row
        row_dict = {"name": name, "description": description, "count": count}
        filtered_rows.append(row_dict)
    return filtered_rows


def get_features(cursor, title):
    cursor.execute(
        f"SELECT name,description, count FROM url LEFT JOIN feature USING(url_id) where title='{title}'"
    )
    rows = cursor.fetchall()
    filtered_rows = []
    for row in rows:
        name, description, count = row
        row_dict = {"name": name, "description": description, "count": count}
        filtered_rows.append(row_dict)
    return filtered_rows


def get_structures(cursor, title):
    cursor.execute(
        f"SELECT name,description, count FROM url LEFT JOIN structure USING(url_id) where title='{title}'"
    )
    rows = cursor.fetchall()
    filtered_rows = []
    for row in rows:
        name, description, count = row
        row_dict = {"name": name, "description": description, "count": count}
        filtered_rows.append(row_dict)
    return filtered_rows


def get_aria(cursor, title):
    cursor.execute(
        f"SELECT name,description, count FROM url LEFT JOIN aria USING(url_id) where title='{title}'"
    )
    rows = cursor.fetchall()
    filtered_rows = []
    for row in rows:
        name, description, count = row
        row_dict = {"name": name, "description": description, "count": count}
        filtered_rows.append(row_dict)
    return filtered_rows


def get_contrast(cursor, title):
    cursor.execute(
        f"SELECT name,description, count FROM url LEFT JOIN contrast USING(url_id) where title='{title}'"
    )
    rows = cursor.fetchall()
    filtered_rows = []
    for row in rows:
        name, description, count = row
        row_dict = {"name": name, "description": description, "count": count}
        filtered_rows.append(row_dict)
    return filtered_rows


def get_all_sites():
    conn = psycopg2.connect(
        "host=34.135.71.145 dbname=oschack user=postgres password=BestPasswordEver"
    )
    cursor = conn.cursor()

    cursor.execute("SELECT * FROM url")

    # Fetch all rows from the result set
    rows = cursor.fetchall()
    cursor.close()
    conn.close()
    filtered_rows = []
    for row in rows:
        (
            id,
            url,
            wave_url,
            title,
            error_count,
            feature_count,
            structure_count,
            aria_count,
            alert_count,
            contrast_count,
        ) = row
        row_dict = {
            "id": id,
            "url": url,
            "wave_url": wave_url,
            "title": title,
            "error_count": error_count,
            "feature_count": feature_count,
            "structure_count": structure_count,
            "aria_count": aria_count,
            "alert_count": alert_count,
            "contrast_count": contrast_count,
        }
        filtered_rows.append(row_dict)
    return filtered_rows


def get_specific_site(title):
    conn = psycopg2.connect(
        "host=34.135.71.145 dbname=oschack user=postgres password=BestPasswordEver"
    )
    cursor = conn.cursor()
    errors = []
    errors.append(get_errors(cursor, title))
    errors.append(get_alerts(cursor, title))
    errors.append(get_features(cursor, title))
    errors.append(get_structures(cursor, title))
    errors.append(get_aria(cursor, title))
    errors.append(get_contrast(cursor, title))

    cursor.close()
    conn.close()

    return errors
