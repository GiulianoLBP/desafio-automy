const { parse } = require("date-fns");
const ptBR = require("date-fns/locale/pt-BR");

/**
 * Converte data e hora em string para um objeto Date
 * Ex: "20/04/2025", "20h" → Date
 */
function parseDataHora(data, hora) {
  return parse(`${data} ${hora}`, "dd/MM/yyyy HH'h'", new Date(), { locale: ptBR });
}

module.exports = { parseDataHora };
