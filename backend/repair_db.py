import os
import django
from django.db import connection

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

def add_columns():
    with connection.cursor() as cursor:
        print("Checking for missing columns...")
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
                # Use a safer SQL approach for existing columns
                cursor.execute(f"ALTER TABLE api_project ADD COLUMN IF NOT EXISTS {col_name} {col_type} DEFAULT '';")
                print(f"Verified/Added column: {col_name}")
            except Exception as e:
                print(f"Status for {col_name}: {e}")
        
    print("Database schema repair complete.")

if __name__ == "__main__":
    add_columns()
