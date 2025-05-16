const { separarBaterias } = require("../services/bateriaService");

jest.mock("../utils/dataUtils", () => ({
  parseDataHora: jest.fn(),
}));

const { parseDataHora } = require("../utils/dataUtils");

describe("bateriaService", () => {
  it("deve separar baterias futuras e passadas corretamente", () => {
    const baterias = [
      { data_agendamento: "20/04/2026", horario_agendamento: "10h" },
      { data_agendamento: "20/04/2023", horario_agendamento: "10h" },
    ];

    parseDataHora
      .mockReturnValueOnce(new Date("2026-04-20T10:00:00"))
      .mockReturnValueOnce(new Date("2023-04-20T10:00:00"));

    const { futuras, passadas } = separarBaterias(baterias);

    expect(futuras.length).toBe(1);
    expect(passadas.length).toBe(1);
  });
});
