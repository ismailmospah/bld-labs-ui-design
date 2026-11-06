# tools/

Scripts that generate some of the site's pages. They are **not** deployed: `.vercelignore` keeps this folder out of Vercel.

The site itself is plain HTML. Most pages are edited by hand. The pages below are **generated**, so change the script and rebuild rather than editing their HTML, or the next rebuild will overwrite your edit.

| Pages | Script |
| --- | --- |
| `/work/<slug>` and `/ar/work/<slug>` (case studies) | `build_<project>.py` + shared template `case_lib.py` |
| `/work`, `/ar/work` (all projects grid) | `build_work_index.py` |
| `/about`, `/ar/about`, `/ismail-mosbah`, `/ar/ismail-mosbah` | `build_about.py` |

## Rebuild everything

```bash
python3 tools/build_all.py
```

Run it from anywhere; it writes into this repo. Needs Python 3 and nothing else. If nothing changed, `git status` shows no changes.

## Files

- **`case_lib.py`**: the shared case-study template (head, nav, footer, sections, screens strip) plus:
  - `CASES`, the list of case studies used for each page's "More" links. Add new ones here, newest first.
  - `CSS_V`, the `style.css?v=` cache-busting number. Bump it together with every page's `?v=` when `css/style.css` changes.
- **`clean_links.py`**: turns internal links into clean, root-relative URLs (`services.html` → `/services`, `ar` → `/ar`). Every generator passes its output through it. You can also run it over the whole site: `python3 tools/clean_links.py .`
- **`build_asees.py`, `build_hom.py`, `build_top_tech.py`, `build_zabehaty.py`, `build_bld_site.py`, `build_carmax.py`**: one case study each, holding its English and Arabic text and its list of screen images.
- **`build_old.py`**: the older projects (Prince El-Lamma, Otlob, Wajba, Ghym Dashboard, Ghym Website) in one file.
- **`build_work_index.py`**: `/work`. It reads the cards from the home page's work slider (`index.html`, `ar/index.html`), so the slider is the source of truth for that list.
- **`build_about.py`**: the About and founder pages, including the founder's Person / ProfilePage structured data.
- **`scrape_behance.js`**: saves a Behance project's text and image list. Needs Playwright:
  `node tools/scrape_behance.js <out-folder> <behance-project-url>`
  It writes `<out-folder>/data.json` and `<out-folder>/rendered.html`.

## Adding a new case study

1. **Get the content.** Run `scrape_behance.js` on the Behance project and download its images.
2. **Make the images:**
   - `assets/img/work/<slug>/cover.webp`: 800×1000
   - `og.jpg`: 1200×630
   - the screens as `<name>-800.webp` and `<name>-1400.webp` (or `-1200` when the source is 1200px wide)
   - Files in `/assets` are cached for a year (`immutable`), so give a changed image a **new file name** instead of overwriting it.
3. **Write the page script.** Copy a `build_<project>.py` (for example `build_carmax.py`), change the text and the image list, and add the project to `CASES` in `case_lib.py`.
4. **Add the home card.** Add a card for it in the work slider in `index.html` and `ar/index.html`, and renumber the cards.
5. **Rebuild and list it.** Run `python3 tools/build_all.py`, then add both URLs to `sitemap.xml`.

Links inside pages are root-relative clean URLs (`/about`, `/ar/work/hom`). The canonical, hreflang, og:url, JSON-LD and sitemap use `https://bld-labs.com`, without `www`.
