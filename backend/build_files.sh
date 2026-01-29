#!/bin/bash

echo "BUILD START"

# Create a virtual environment if needed (Vercel does this automatically usually, but good for local testing)
# python3.12 -m venv venv
# source venv/bin/activate

# Install dependencies
python3.12 -m pip install -r requirements.txt

# Collect static files
python3.12 manage.py collectstatic --noinput --clear

# Run migrations
python3.12 manage.py migrate --noinput

echo "BUILD END"
