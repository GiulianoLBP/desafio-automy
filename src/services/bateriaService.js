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

module.exports = { separarBaterias };
