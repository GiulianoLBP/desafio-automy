const axios = require("axios");

const queryEndpoint = "https://appsaccess.automy.com.br/api/api/desafio/custom/do/query";

/**
 * Busca baterias de um usuário a partir do e-mail
 * @param {string} token - Token de autenticação
 * @param {string} email - E-mail do usuário
 * @returns {Promise<Array>} Lista de baterias
 */
async function getBateriasByEmail(token, email) {
  const query = `
    SELECT * 
    FROM desafio.cadastro_baterias_desafio 
    WHERE email = '${email}'
  `;

  try {
    const response = await axios.post(
      queryEndpoint,
      {
        query,
        db: "desafio"
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Erro ao consultar dados");
  }
}

module.exports = { getBateriasByEmail };
