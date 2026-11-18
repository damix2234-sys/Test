import sys, re, json, urllib.request, urllib.parse, http.cookiejar
slug = sys.argv[1]
cj = http.cookiejar.CookieJar()
op = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(cj))
op.addheaders = [('User-Agent', 'Mozilla/5.0')]
base = f'https://quaternius.itch.io/{slug}'
html = op.open(base, timeout=40).read().decode()
csrf = re.search(r'name="csrf_token" value="([^"]+)"', html) or re.search(r'csrf_token["\']?\s*[:=]\s*["\']([^"\']+)', html)
tok = csrf.group(1)
r = op.open(base + '/download_url', urllib.parse.urlencode({'csrf_token': tok}).encode(), timeout=40).read().decode()
url = json.loads(r)['url']
page = op.open(url, timeout=40).read().decode()
ups = re.findall(r'data-upload_id="(\d+)"', page)
names = re.findall(r'title="([^"]+)" class="name"', page)
tok2 = (re.search(r'name="csrf_token" value="([^"]+)"', page) or csrf).group(1)
for uid, nm in zip(ups, names):
    print(uid, nm)
    if len(sys.argv) > 2 and sys.argv[2] in nm:
        key = urllib.parse.unquote(url.rstrip('/').split('/')[-1])
        j = json.loads(op.open(f'{base}/file/{uid}?source=view_game&as_props=1&after_download_lightbox=true', urllib.parse.urlencode({'csrf_token': tok2}).encode(), timeout=40).read().decode())

        data = op.open(j['url'], timeout=300).read()
        open(sys.argv[3], 'wb').write(data); print('saved', len(data))
