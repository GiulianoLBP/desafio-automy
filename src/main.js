require("dotenv").config();
const { authenticate } = require("./services/authService");
const { fetchBaterias } = require("./services/queryService");
const { separarBaterias, gerarMensagem } = require("./services/bateriaService");

async function main() {
  try {
    const token = await authenticate(process.env.API_USER, process.env.API_PASSWORD);
    console.log("✅ Autenticado com sucesso!");

    const query = `SELECT * FROM desafio.cadastro_baterias_desafio WHERE email = '${process.env.EMAIL_CLIENTE}'`;
    const baterias = await fetchBaterias(token, query);
    console.log(baterias)
    const { futuras, passadas } = separarBaterias(baterias);
    const mensagem = gerarMensagem(futuras, []); // aqui mostramos só futuras

    console.log("\n📨 Mensagem para o cliente:");
    console.log(mensagem);
  } catch (error) {
    console.error("❌ Erro:", error.message);
  }
}

main();
