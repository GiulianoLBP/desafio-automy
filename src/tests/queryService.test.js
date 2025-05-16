const axios = require("axios");
const { fetchBaterias } = require("../queryService");

jest.mock("axios");

describe("queryService", () => {
  it("deve retornar dados ao consultar com sucesso", async () => {
    const token = "fake-token";
    const query = "SELECT * FROM baterias";
    const mockData = [{ id: 1 }];

    axios.post.mockResolvedValue({ data: mockData });

    const result = await fetchBaterias(token, query);

    expect(result).toEqual(mockData);
    expect(axios.post).toHaveBeenCalledWith(
      "https://appsaccess.automy.com.br/api/api/desafio/custom/do/query",
      { query, db: "desafio" },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
  });

  it("deve lançar erro ao falhar na consulta", async () => {
    axios.post.mockRejectedValue({
      response: { data: { message: "Erro na query" } },
    });

    await expect(fetchBaterias("token", "query"))
      .rejects.toThrow("Erro na query");
  });
});
