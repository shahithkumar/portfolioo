import psycopg2
from urllib.parse import urlparse

db_url = "postgresql://postgres:Shahith%2030@localhost:5432/porfolio_db"
result = urlparse(db_url)
username = result.username
password = result.password
database = result.path[1:]
hostname = result.hostname
port = result.port

try:
    conn = psycopg2.connect(
        database=database,
        user=username,
        password=password,
        host=hostname,
        port=port
    )
    cur = conn.cursor()
    
    print("Adding columns...")
    columns = [
        ("problem_statement", "TEXT"),
        ("solution_overview", "TEXT"),
        ("features", "TEXT"),
        ("architecture_description", "TEXT"),
        ("technical_breakdown", "TEXT"),
        ("problem_hook", "TEXT")
    ]
    
    for col_name, col_type in columns:
        try:
            cur.execute(f"ALTER TABLE api_project ADD COLUMN {col_name} {col_type} DEFAULT '';")
            print(f"Added column: {col_name}")
        except psycopg2.errors.DuplicateColumn:
            conn.rollback()
            print(f"Column already exists: {col_name}")
        except Exception as e:
            conn.rollback()
            print(f"Error adding {col_name}: {e}")
        else:
            conn.commit()

    # Also update description field if needed (Django would have done this via AlterField)
    # But adding the columns is the main blocker.
    
    cur.close()
    conn.close()
    print("Done.")
except Exception as e:
    print(f"Connection failed: {e}")
