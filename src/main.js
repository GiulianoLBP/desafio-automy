require("dotenv").config();
const { authenticate } = require("./services/authService");
const { getBateriasByEmail } = require("./services/queryService");
const { separarBaterias } = require("./services/bateriaService");

async function buscarBateriasPorEmail(email) {
  try {


    const token = await authenticate(process.env.API_USER, process.env.API_PASSWORD);


    //const query = `SELECT * FROM desafio.cadastro_baterias_desafio WHERE email = '${email}'`;
    const baterias = await getBateriasByEmail(token, email);
    //console.log(query,"query")
    const { futuras, passadas } = separarBaterias(baterias);

    return { futuras, passadas };
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = { buscarBateriasPorEmail };
