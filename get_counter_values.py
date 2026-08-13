import re

with open('page.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Find data-to-value or data-settings in elementor counter elements
counter_vals = re.findall(r'data-to-value=[\"\']?(\d+)', html)
print("Data to values:", counter_vals)

# Find all occurrences of numbers before/after "Years of Experience", "Trained", "Webinar Attendees", "Case Studies"
for phrase in ["Years of Experience", "Trained", "Webinar Attendees", "Case Studies"]:
    idx = html.find(phrase)
    if idx != -1:
        snippet = html[max(0, idx-500):min(len(html), idx+300)]
        # find digits in snippet
        print(f"\n--- {phrase} snippet ---")
        clean_snip = re.sub(r'<[^>]+>', ' ', snippet)
        print(re.sub(r'\s+', ' ', clean_snip))
