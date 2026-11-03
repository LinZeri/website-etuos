import json, re, sys, urllib.request
from html.parser import HTMLParser

URLS = sys.argv[1:]


class P(HTMLParser):
    def __init__(self):
        super().__init__()
        self.title = ""; self._in_title = False
        self.meta = {}; self.links = []; self.h1 = []; self._in_h1 = False
        self.imgs = []; self.ld = []; self._in_ld = False; self._buf = ""
        self.scripts = []; self.html_lang = None; self.text = []; self._skip = 0
        self.anchors = []

    def handle_starttag(self, tag, a):
        a = dict(a)
        if tag == "html": self.html_lang = a.get("lang")
        if tag == "title": self._in_title = True
        if tag == "meta":
            k = a.get("name") or a.get("property")
            if k: self.meta.setdefault(k, []).append(a.get("content"))
        if tag == "link": self.links.append(a)
        if tag == "h1": self._in_h1 = True; self.h1.append("")
        if tag == "img": self.imgs.append(a)
        if tag == "a": self.anchors.append(a.get("href"))
        if tag == "script":
            self.scripts.append(a)
            if a.get("type") == "application/ld+json": self._in_ld = True; self._buf = ""
            else: self._skip += 1
        if tag == "style": self._skip += 1

    def handle_endtag(self, tag):
        if tag == "title": self._in_title = False
        if tag == "h1": self._in_h1 = False
        if tag == "script":
            if self._in_ld:
                self._in_ld = False
                try: self.ld.append(json.loads(self._buf))
                except Exception as e: self.ld.append({"_error": str(e)})
            else: self._skip = max(0, self._skip - 1)
        if tag == "style": self._skip = max(0, self._skip - 1)

    def handle_data(self, d):
        if self._in_title: self.title += d
        if self._in_h1: self.h1[-1] += d
        if self._in_ld: self._buf += d
        elif not self._skip: self.text.append(d)


def types(obj, out):
    if isinstance(obj, dict):
        t = obj.get("@type")
        if t: out.append(t if isinstance(t, str) else "/".join(t))
        for v in obj.values(): types(v, out)
    elif isinstance(obj, list):
        for v in obj: types(v, out)


for u in URLS:
    req = urllib.request.Request(u, headers={"User-Agent": "Mozilla/5.0 (Linux; Android 10) compatible; Googlebot/2.1"})
    r = urllib.request.urlopen(req)
    raw = r.read(); html = raw.decode("utf-8", "replace")
    p = P(); p.feed(html)
    canon = [l.get("href") for l in p.links if l.get("rel") == "canonical"]
    alts = [(l.get("hreflang"), l.get("href")) for l in p.links if l.get("rel") == "alternate" and l.get("hreflang")]
    t = []; [types(x, t) for x in p.ld]
    words = len(re.findall(r"\w+", " ".join(p.text)))
    no_alt = [i.get("src") for i in p.imgs if i.get("alt") is None]
    nonwebp = [i.get("src") for i in p.imgs if i.get("src") and not re.search(r"webp|svg|_next/image", i.get("src"))]
    first_loading = [(i.get("loading"), i.get("fetchpriority")) for i in p.imgs[:2]]
    print("=" * 8, u, r.status)
    print(" bytes", len(raw), "| lang", p.html_lang, "| words", words)
    print(" title", len(p.title), repr(p.title))
    d = (p.meta.get("description") or [""])[0] or ""
    print(" desc", len(d), repr(d[:90]))
    print(" robots", p.meta.get("robots"), "| viewport", p.meta.get("viewport"))
    print(" canonical", canon)
    print(" hreflang", alts)
    print(" og:image", p.meta.get("og:image"), "| og:locale", p.meta.get("og:locale"))
    print(" h1", [h.strip()[:70] for h in p.h1])
    print(" jsonld", t)
    print(" imgs", len(p.imgs), "no-alt-attr", no_alt[:3], "non-webp", nonwebp[:3], "first-imgs", first_loading)
    print(" scripts", len(p.scripts), "pushState", "pushState" in html, "gtag", "gtag" in html)
    print(" internal links", len([a for a in p.anchors if a and (a.startswith("/") or "etuos.com" in a)]))
