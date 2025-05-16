require("dotenv").config();
const { authenticate } = require("./services/authService");
const { getBateriasByEmail } = require("./services/queryService");
const { separarBaterias } = require("./services/bateriaService");

async function buscarBateriasPorEmail(email) {
  try {


    const token = await authenticate(process.env.API_USER, process.env.API_PASSWORD);
    const baterias = await getBateriasByEmail(token, email);
    const { futuras, passadas } = separarBaterias(baterias);

    return { futuras, passadas };
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = { buscarBateriasPorEmail };
