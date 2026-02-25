import os
import django
from django.db import connection

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

def sync_schema():
    with connection.cursor() as cursor:
        print("Starting Manual Schema Sync...")
        
        # Check current columns
        cursor.execute("SELECT column_name FROM information_schema.columns WHERE table_name = 'api_project';")
        existing_cols = [row[0] for row in cursor.fetchall()]
        print(f"Existing columns: {existing_cols}")
        
        required_cols = [
            ("problem_statement", "TEXT"),
            ("solution_overview", "TEXT"),
            ("features", "TEXT"),
            ("architecture_description", "TEXT"),
            ("technical_breakdown", "TEXT"),
            ("problem_hook", "TEXT")
        ]
        
        for col, col_type in required_cols:
            if col not in existing_cols:
                try:
                    cursor.execute(f"ALTER TABLE api_project ADD COLUMN {col} {col_type} DEFAULT '';")
                    print(f"Successfully added column: {col}")
                except Exception as e:
                    print(f"Error adding {col}: {e}")
            else:
                print(f"Column {col} already exists.")
                
    print("Schema sync finished.")

if __name__ == "__main__":
    sync_schema()
