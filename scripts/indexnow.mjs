#!/usr/bin/env node
/**
 * Avisa o IndexNow (Bing, Yandex, Seznam, Naver e outros; o Google nao usa)
 * das URLs do sitemap que mudaram nos ultimos dias, para o post novo entrar no
 * indice do Bing (e no que o Copilot e o ChatGPT buscam la) sem esperar o
 * rastreamento.
 *
 * Le o sitemap ja publicado em producao, entao deve rodar depois do deploy (o
 * workflow .github/workflows/indexnow.yml roda uma hora depois do deploy
 * diario). O site continua 100% estatico: a chave e um arquivo em public/.
 *
 * Uso:
 *   node scripts/indexnow.mjs              URLs com lastmod nos ultimos 2 dias
 *   node scripts/indexnow.mjs --dias 7     janela maior
 *   node scripts/indexnow.mjs --todas      todas as URLs do sitemap (carga inicial)
 *   node scripts/indexnow.mjs --simular    so lista, sem enviar
 *
 * Reenviar uma URL que nao mudou e inofensivo; a janela de 2 dias cobre tanto
 * o deploy diario quanto os deploys de push do dia anterior.
 */

const HOST = "etuos.com";
const CHAVE = "d84ce942284b424cb057669e2200518f";
const SITEMAP = `https://${HOST}/sitemap.xml`;
const ENDPOINT = "https://api.indexnow.org/indexnow";

const args = process.argv.slice(2);
const todas = args.includes("--todas");
const simular = args.includes("--simular");
const iDias = args.indexOf("--dias");
const dias = iDias >= 0 ? Number(args[iDias + 1]) : 2;

const resposta = await fetch(SITEMAP, { headers: { "Cache-Control": "no-cache" } });
if (!resposta.ok) throw new Error(`Sitemap respondeu ${resposta.status}`);
const xml = await resposta.text();

const limite = Date.now() - dias * 24 * 60 * 60 * 1000;
const urls = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)]
  .map(([, bloco]) => ({
    loc: bloco.match(/<loc>([^<]+)<\/loc>/)?.[1],
    lastmod: bloco.match(/<lastmod>([^<]+)<\/lastmod>/)?.[1],
  }))
  .filter(({ loc, lastmod }) => {
    if (!loc) return false;
    if (todas) return true;
    return lastmod !== undefined && Date.parse(lastmod) >= limite;
  })
  .map(({ loc }) => loc);

console.log(`${urls.length} URL(s) ${todas ? "no sitemap" : `com lastmod nos ultimos ${dias} dia(s)`}`);
for (const u of urls) console.log(`  ${u}`);

if (urls.length > 0 && !simular) {
  // O protocolo aceita ate 10.000 URLs por envio; o sitemap inteiro cabe folgado.
  const envio = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: HOST,
      key: CHAVE,
      keyLocation: `https://${HOST}/${CHAVE}.txt`,
      urlList: urls,
    }),
  });

  // 200 = recebido; 202 = recebido, chave ainda em validacao.
  console.log(`IndexNow respondeu ${envio.status} ${envio.statusText}`);
  if (envio.status !== 200 && envio.status !== 202) {
    console.error(await envio.text());
    process.exitCode = 1;
  }
}
