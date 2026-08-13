import re
import json
from bs4 import BeautifulSoup

with open('page.html', 'r', encoding='utf-8') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')

# Let's search for Elementor widget data or counter numbers
counters = []
for el in soup.find_all(class_=re.compile(r'elementor-counter-number')):
    prefix = el.find_previous(class_=re.compile(r'prefix|title'))
    suffix = el.find_next(class_=re.compile(r'suffix|title'))
    counters.append(el.get_text(strip=True))

# Search elementor widgets
widgets = []
for w in soup.find_all(class_=re.compile(r'elementor-widget-container')):
    txt = w.get_text(" ", strip=True)
    if len(txt) > 10:
        widgets.append(txt)

# Find numbers near stats
# In report we saw:
# H2: Years of Experience
# H2: Trained
# H2: Webinar Attendees
# H2: Case Studies

stats_data = []
for counter_number in soup.find_all(class_=re.compile(r'elementor-counter-number-number|elementor-counter-title|elementor-counter')):
    stats_data.append(counter_number.get_text(" ", strip=True))

with open('site_inspection.json', 'w', encoding='utf-8') as f:
    json.dump({
        'counters': stats_data,
        'widgets_sample': widgets[:40]
    }, f, indent=2, ensure_ascii=False)

print("Saved site_inspection.json")
