import urllib.request
import re
import json

url = 'https://go.mohiniraj.in/'
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
}

req = urllib.request.Request(url, headers=headers)

try:
    with urllib.request.urlopen(req) as resp:
        html = resp.read().decode('utf-8')
        print(f"HTML size: {len(html)}")
        with open('page.html', 'w', encoding='utf-8') as f:
            f.write(html)
            
except Exception as e:
    print(f"Error: {e}")
