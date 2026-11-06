"""Rebuild every generated page: the /work case studies, /work itself, /about and /ismail-mosbah (EN + AR).

    python3 tools/build_all.py

Run it from anywhere; it writes into the repo this file lives in.
"""
import os, subprocess, sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
# case studies first (they register in case_lib.CASES), then the pages that list them
SCRIPTS = ["build_asees.py", "build_hom.py", "build_top_tech.py", "build_zabehaty.py", "build_bld_site.py",
           "build_old.py", "build_carmax.py", "build_work_index.py", "build_about.py"]

for s in SCRIPTS:
    print(f"== {s}")
    subprocess.run([sys.executable, "-I", os.path.join(HERE, s), ROOT], check=True)
print("done")
