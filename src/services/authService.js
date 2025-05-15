const axios = require("axios");

const loginUrl = "https://appsaccess.automy.com.br/login";

async function authenticate(username, password) {
  try {
    const response = await axios.post(
      loginUrl,
      { username, password },
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data.token;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Erro ao autenticar");
  }
}

module.exports = { authenticate };
