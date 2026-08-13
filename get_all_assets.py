import json
import urllib.request
import os
from bs4 import BeautifulSoup

with open('page.html', 'r', encoding='utf-8') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')

images = []
for img in soup.find_all('img'):
    src = img.get('src') or img.get('data-src') or ''
    alt = img.get('alt', '')
    if src and not src.startswith('data:') and not src.endswith('.svg') and 'facebook' not in src:
        images.append({'src': src, 'alt': alt})

print("Found", len(images), "images")
with open('images_list.json', 'w', encoding='utf-8') as f:
    json.dump(images, f, indent=2)

# Also let's inspect testimonial images:
# Yashovanthi-Review.jpg, Lavanya-Sistla.jpg, Latha-Review.jpg
# Certificates: Annamalai_University_logo.png, Ayush-Ministry.png, Namaste-India.png
# Hero & About: MohiniRaj-5-1.png, MohiniRaj-About.jpg, Mohini-2nd.webp, Clarity-Mohini.jpg, Release.jpg, Transformation.jpg
# Outcomes: 1-Outcome.jpg to 6-Outcome.jpg
# Case studies: Aditya.jpg, Udaya.jpg, Pavani-1.jpeg, Abhijna.jpg
# Challenges: Constant-stress-overthinking.jpg, Repetitive-Negative-Thoughts.jpg, Difficulty-letting-go-of-past-regrets.jpg, Low-self-worth-confidence.jpg, Relationship-struggles.jpg, Lack-of-clarity.jpg
# Audience icons: businesswoman.png, businessman-2.png, mother-1.png, graduated.png
