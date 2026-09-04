/**
 * Recebe os leads das landings de campanha e grava numa planilha do Google.
 *
 * Este arquivo NÃO faz parte do build do site. É código para colar no editor
 * de Apps Script da planilha. Passo a passo em docs/campanha/planilha.md.
 */

// Deixe vazio para não receber aviso por e-mail a cada lead.
var EMAIL_AVISO = '';

var COLUNAS = [
  'enviadoEm',
  'origem',
  'idioma',
  'nome',
  'whatsapp',
  'site',
  'pais',
  'cidade',
  'gclid',
  'wbraid',
  'gbraid',
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'pagina',
  'referencia',
  'userAgent'
];

function doPost(e) {
  try {
    var dados = JSON.parse(e.postData.contents);
    var planilha = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

    // Na primeira execução, escreve o cabeçalho.
    if (planilha.getLastRow() === 0) {
      planilha.appendRow(COLUNAS);
      planilha.setFrozenRows(1);
    }

    var linha = COLUNAS.map(function (coluna) {
      return dados[coluna] || '';
    });

    planilha.appendRow(linha);

    if (EMAIL_AVISO) {
      avisar(dados);
    }

    return responder({ ok: true });
  } catch (erro) {
    return responder({ ok: false, erro: String(erro) });
  }
}

function avisar(dados) {
  var assunto = 'Lead novo na campanha (' + (dados.origem || 'sem origem') + '): ' + (dados.nome || 'sem nome');
  var corpo = [
    'Nome: ' + (dados.nome || ''),
    'WhatsApp: ' + (dados.whatsapp || ''),
    'Site: ' + (dados.site || ''),
    'Onde fica: ' + (dados.cidade || '') + ', ' + (dados.pais || ''),
    'Origem: ' + (dados.origem || ''),
    'Idioma do site: ' + (dados.idioma || ''),
    'Campanha: ' + (dados.utm_campaign || 'não informada'),
    'gclid: ' + (dados.gclid || 'não informado')
  ].join('\n');

  MailApp.sendEmail(EMAIL_AVISO, assunto, corpo);
}

function responder(objeto) {
  return ContentService
    .createTextOutput(JSON.stringify(objeto))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Rode esta função uma vez, direto no editor (seletor de função > Executar),
 * para duas coisas: disparar o prompt de autorização por um caminho mais
 * confiável que o fluxo do Deploy, e confirmar que a escrita na planilha
 * funciona. Se der certo, uma linha de teste aparece na planilha.
 */
function testeConfiguracao() {
  var e = {
    postData: {
      contents: JSON.stringify({
        origem: 'teste-editor',
        nome: 'Linha de teste (pode apagar)',
        whatsapp: '000',
        site: 'etuos.com',
        pais: 'Brasil',
        cidade: 'Teste',
        enviadoEm: new Date().toISOString()
      })
    }
  };
  var resultado = doPost(e).getContent();
  Logger.log('Resultado: ' + resultado);
}
