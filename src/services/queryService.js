const axios = require("axios");

const queryEndpoint = "https://appsaccess.automy.com.br/api/api/desafio/custom/do/query";

async function fetchBaterias(token, query) {
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

module.exports = { fetchBaterias };
