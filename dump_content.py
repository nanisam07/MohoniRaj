import json
from bs4 import BeautifulSoup

with open('page.html', 'r', encoding='utf-8') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')

out = []

out.append("=== HEADINGS ===")
for h in soup.find_all(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']):
    text = h.get_text(strip=True)
    if text:
        out.append(f"{h.name.upper()}: {text}")

out.append("\n=== IMAGES ===")
seen = set()
for img in soup.find_all('img'):
    src = img.get('src') or img.get('data-src') or img.get('srcset') or ''
    alt = img.get('alt', '')
    if src and src not in seen and not src.endswith('.svg') and 'gravatar' not in src:
        seen.add(src)
        out.append(f"SRC: {src} | ALT: {alt}")

out.append("\n=== PARAGRAPHS & CONTENT BLOCKS ===")
for p in soup.find_all(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li', 'span']):
    # Only direct text or container with text
    txt = p.get_text(" ", strip=True)
    if len(txt) > 15:
        out.append(f"[{p.name.upper()}]: {txt}")

with open('full_content_report.txt', 'w', encoding='utf-8') as f:
    f.write('\n'.join(out))

print("Saved full_content_report.txt")
