import re
import json
from bs4 import BeautifulSoup

with open('page.html', 'r', encoding='utf-8') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')

data = {}

# Images
images = []
for img in soup.find_all('img'):
    src = img.get('src') or img.get('data-src') or ''
    srcset = img.get('srcset') or img.get('data-srcset') or ''
    alt = img.get('alt', '')
    if src:
        images.append({'src': src, 'alt': alt, 'srcset': srcset})

data['images'] = images

# Headings
headings = []
for h in soup.find_all(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']):
    txt = h.get_text(strip=True)
    if txt:
        headings.append({'tag': h.name, 'text': txt})

data['headings'] = headings

# All structured text sections
sections = []
for sec in soup.find_all(['section', 'article', 'div']):
    # get element class if any
    cls = sec.get('class', [])
    txt = sec.get_text(separator=' | ', strip=True)
    if len(txt) > 50 and not sec.find(['section', 'article']):
        sections.append({'class': cls, 'text': txt})

data['raw_sections'] = sections[:100]

with open('extracted_data.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

print(f"Extracted {len(images)} images, {len(headings)} headings, {len(sections)} sections.")
