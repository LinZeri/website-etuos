"""Exporta dados do Search Console (sc-domain:etuos.com) para docs/gsc/.
Uso: python scripts/gsc-export.py [dias=90]
Credencial: service account em ~/.config/claude-seo/service_account.json (somente leitura)."""
import json, os, sys, datetime
from google.oauth2 import service_account
from googleapiclient.discovery import build

SITE = "sc-domain:etuos.com"
dias = int(sys.argv[1]) if len(sys.argv) > 1 else 90
cred = service_account.Credentials.from_service_account_file(
    os.path.expanduser("~/.config/claude-seo/service_account.json"),
    scopes=["https://www.googleapis.com/auth/webmasters.readonly"])
sc = build("searchconsole", "v1", credentials=cred, cache_discovery=False)
fim = datetime.date.today() - datetime.timedelta(days=2)
ini = fim - datetime.timedelta(days=dias)


def q(dims, limit=500):
    body = {"startDate": ini.isoformat(), "endDate": fim.isoformat(),
            "dimensions": dims, "rowLimit": limit}
    return sc.searchanalytics().query(siteUrl=SITE, body=body).execute().get("rows", [])


out = {"periodo": [ini.isoformat(), fim.isoformat()],
       "paginas": q(["page"]), "queries": q(["query"]),
       "query_pagina": q(["query", "page"], 1000),
       "paises": q(["country"], 20), "dias": q(["date"], 200)}
os.makedirs("docs/gsc", exist_ok=True)
dest = f"docs/gsc/gsc-{fim.isoformat()}.json"
json.dump(out, open(dest, "w", encoding="utf-8"), ensure_ascii=False, indent=1)


def tot(k, r):
    return sum(x[k] for x in r)


print(dest, "periodo", ini, fim)
print("cliques", tot("clicks", out["dias"]), "impressoes", tot("impressions", out["dias"]))
print("paginas", len(out["paginas"]), "queries", len(out["queries"]))
