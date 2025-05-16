document.getElementById("btnBuscar").addEventListener("click", async () => {
  const email = document.getElementById("email").value.trim();
  if (!email) {
    alert("❗ Por favor, digite um email válido.");
    return;
  }

  const resultadoDiv = document.getElementById("resultado");
  const btnMostrarPassadas = document.getElementById("btnMostrarPassadas");
  btnMostrarPassadas.style.display = "none";
  resultadoDiv.textContent = "⏳ Carregando...";

  try {
    const response = await fetch("/api/baterias", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      const err = await response.json();
      resultadoDiv.textContent = `❌ Erro: ${err.error || "Desconhecido"}`;
      return;
    }

    const data = await response.json();

    if (data.futuras.length === 0) {
      resultadoDiv.textContent = "📭 Nenhuma bateria agendada.";
    } else {
      resultadoDiv.innerHTML = "<h3>🚀 Próximas baterias agendadas:</h3>" +
        data.futuras.map(b =>
          `<div class="card">📆 ${b.data_agendamento} às 🕖 ${b.horario_agendamento}<br>🧑‍🤝‍🧑 ${b.qtde_pessoas} pessoas</div>`
        ).join("");
    }

    if (data.passadas.length > 0) {
      btnMostrarPassadas.style.display = "inline-block";

      btnMostrarPassadas.onclick = () => {
        resultadoDiv.innerHTML += "<h3>📦 Histórico de baterias anteriores:</h3>" +
          data.passadas.map(b =>
            `<div class="card">📆 ${b.data_agendamento} às 🕖 ${b.horario_agendamento}<br>🧑‍🤝‍🧑 ${b.qtde_pessoas} pessoas</div>`
          ).join("");

        btnMostrarPassadas.style.display = "none";
      };
    }
  } catch (error) {
    resultadoDiv.textContent = `💥 Erro: ${error.message || "Erro desconhecido"}`;
  }
});
