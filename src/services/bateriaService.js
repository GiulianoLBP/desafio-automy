const { isBefore, isAfter } = require("date-fns");
const { parseDataHora } = require("../utils/dataUtils");

function separarBaterias(baterias) {
  const hoje = new Date();

  const futuras = [];
  const passadas = [];

  baterias.forEach((bateria) => {
    const dataBateria = parseDataHora(bateria.data_agendamento, bateria.horario_agendamento);

    if (isAfter(dataBateria, hoje)) {
      futuras.push(bateria);
    } else {
      passadas.push(bateria);
    }
  });

  return { futuras, passadas };
}

function gerarMensagem(bateriasFuturas, bateriasPassadas = []) {
  let mensagem = "🔔 *Suas próximas baterias agendadas:*\n\n";

  if (bateriasFuturas.length === 0) {
    mensagem += "_Nenhuma bateria agendada._\n";
  } else {
    bateriasFuturas.forEach((b) => {
      mensagem += `🗓️ ${b.data_agendamento} às ${b.horario_agendamento} - ${b.qtde_pessoas} pessoas\n`;
    });
  }

  if (bateriasPassadas.length > 0) {
    mensagem += `\n📚 *Histórico de baterias anteriores:*\n\n`;
    bateriasPassadas.forEach((b) => {
      mensagem += `🗓️ ${b.data_agendamento} às ${b.horario_agendamento} - ${b.qtde_pessoas} pessoas\n`;
    });
  } else {
    mensagem += `\nDeseja visualizar suas baterias anteriores? 😊`;
  }

  return mensagem;
}

module.exports = { separarBaterias, gerarMensagem };
