const axios = require("axios");
const { getBateriasByEmail } = require("../services/queryService");

jest.mock("axios");

describe("queryService", () => {
  it("deve retornar dados ao consultar com sucesso", async () => {
    const token = "fake-token";
    const email = "teste@example.com";
    const mockData = [{ id: 1 }];

    axios.post.mockResolvedValue({ data: mockData });

    const result = await getBateriasByEmail(token, email);

    expect(result).toEqual(mockData);
    expect(axios.post).toHaveBeenCalledWith(
      "https://appsaccess.automy.com.br/api/api/desafio/custom/do/query",
      {
        query: expect.stringContaining(email),
        db: "desafio"
      },
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

    await expect(getBateriasByEmail("token", "user@email.com"))
      .rejects.toThrow("Erro na query");
  });
});
