"""Normalise internal page links to root-relative clean URLs (matching the sitemap):
services.html -> /services, index.html -> /, ar/index.html -> /ar, ar -> /ar, ar/work -> /ar/work.
External URLs, assets, mailto/tel and pure #anchors are left alone."""
import re, sys, glob, os

ASSET = re.compile(r'\.(css|js|png|jpe?g|webp|svg|ico|gif|pdf|xml|txt|webmanifest|json|woff2?|ttf|mp4)$', re.I)

def clean(v):
    if re.match(r'^[a-z]+:|^//|^#|^\{', v, re.I) or v == "":
        return v
    m = re.match(r'^([^#?]*)([?#].*)?$', v)
    path, tail = m.group(1), m.group(2) or ""
    if ASSET.search(path):
        return v
    if not path.startswith("/"):
        path = "/" + path
    if path.endswith("/index.html"):
        path = path[: -len("index.html")]
    elif path.endswith(".html"):
        path = path[: -len(".html")]
    if len(path) > 1 and path.endswith("/"):
        path = path[:-1]
    return (path or "/") + tail

def fix_html(text):
    return re.sub(r'(<a\b[^>]*?\bhref=")([^"]*)(")', lambda m: m.group(1) + clean(m.group(2)) + m.group(3), text)

if __name__ == "__main__":
    root = sys.argv[1]; changed = 0
    for f in glob.glob(os.path.join(root, "**/*.html"), recursive=True):
        rel = os.path.relpath(f, root)
        if rel.startswith(("v2/", "concepts/")):
            continue
        t = open(f, encoding="utf-8").read(); n = fix_html(t)
        if n != t:
            open(f, "w", encoding="utf-8").write(n); changed += 1
    print("pages changed:", changed)
