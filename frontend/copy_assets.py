import shutil
import os

source_logo = r"C:\Users\shahi\.gemini\antigravity\brain\8f0feee3-75cc-4a9d-a130-c25228dc1c2a\shahith_kumar_premium_logo_v2_1770040995476.png"
source_favicon = r"C:\Users\shahi\.gemini\antigravity\brain\8f0feee3-75cc-4a9d-a130-c25228dc1c2a\shahith_kumar_favicon_1770041171371.png"

dest_logo = r"c:\Users\shahi\OneDrive\Documents\Portfolio_\frontend\public\logo.png"
dest_favicon = r"c:\Users\shahi\OneDrive\Documents\Portfolio_\frontend\public\favicon.png"

try:
    shutil.copy2(source_logo, dest_logo)
    print(f"Copied logo to {dest_logo}")
    shutil.copy2(source_favicon, dest_favicon)
    print(f"Copied favicon to {dest_favicon}")
except Exception as e:
    print(f"Error copying files: {e}")
