const axios = require("axios");
const { authenticate } = require("../authService");

jest.mock("axios");

describe("authService", () => {
  it("deve retornar token ao autenticar com sucesso", async () => {
    axios.post.mockResolvedValue({ data: { token: "fake-token" } });

    const token = await authenticate("user", "pass");

    expect(token).toBe("fake-token");
    expect(axios.post).toHaveBeenCalledWith(
      "https://appsaccess.automy.com.br/login",
      { username: "user", password: "pass" },
      { headers: { "Content-Type": "application/json" } }
    );
  });

  it("deve lançar erro quando a autenticação falha", async () => {
    axios.post.mockRejectedValue({
      response: { data: { message: "Credenciais inválidas" } },
    });

    await expect(authenticate("user", "wrongpass"))
      .rejects.toThrow("Credenciais inválidas");
  });
});
