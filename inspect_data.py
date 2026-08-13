import json
from bs4 import BeautifulSoup

with open('page.html', 'r', encoding='utf-8') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')

print("=== ALL HEADINGS ===")
for h in soup.find_all(['h1', 'h2', 'h3', 'h4']):
    text = h.get_text(strip=True)
    if text:
        print(f"{h.name.upper()}: {text}")

print("\n=== ALL UNIQUE IMAGES ===")
seen = set()
for img in soup.find_all('img'):
    src = img.get('src') or img.get('data-src') or ''
    alt = img.get('alt', '')
    if src and src not in seen and not src.endswith('.svg') and 'gravatar' not in src:
        seen.add(src)
        print(f"SRC: {src} | ALT: {alt}")

print("\n=== PARAGRAPHS & CONTENT BLOCKS ===")
for p in soup.find_all(['p', 'div', 'li']):
    # Only direct text or small containers
    if len(p.find_all(['p', 'div'])) == 0:
        txt = p.get_text(strip=True)
        if len(txt) > 20:
            print(f"- {txt}")
