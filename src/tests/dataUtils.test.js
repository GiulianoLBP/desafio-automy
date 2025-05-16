const { parseDataHora } = require("../utils/dataUtils");

describe("dataUtils", () => {
  it("deve converter data e hora em objeto Date corretamente", () => {
    const data = "20/04/2025";
    const hora = "14h";

    const result = parseDataHora(data, hora);

    expect(result).toBeInstanceOf(Date);
    expect(result.getFullYear()).toBe(2025);
    expect(result.getMonth()).toBe(3); // abril é mês 3 (zero-based)
    expect(result.getDate()).toBe(20);
    expect(result.getHours()).toBe(14);
  });
});
