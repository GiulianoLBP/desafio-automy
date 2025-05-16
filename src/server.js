const express = require("express");
const path = require("path");
const { buscarBateriasPorEmail } = require("./main");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "front")));

// Rota para servir o index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "front", "index.html"));
});

// Rota API para buscar baterias por email
app.post("/api/baterias", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "Email é obrigatório" });

  try {
    const resultado = await buscarBateriasPorEmail(email);
    res.json(resultado);
  } catch (error) {
    res.status(500).json({ error: "Erro interno" });
  }
});


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});