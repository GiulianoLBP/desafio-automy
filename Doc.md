# Documentação Técnica 

- Nome: Giuliano Libanio Beghini Percope
- CPF: 13322254623
- Email: giuliano2-0@hotmail.com
- Número: 31994535984

---

# Projeto Baterias Agendadas

## Descrição

Aplicação web para consulta de baterias agendadas por email, com API REST e interface simples para exibição das baterias futuras e passadas.

---
### Utilização da Aplicação

Com o container da aplicação em execução, abra seu navegador e acesse:

    ``bash
    http://localhost:3000


Na página inicial, você encontrará um campo para inserir seu endereço de e-mail. Informe seu e-mail e clique no botão **Buscar** para consultar as baterias agendadas.

O sistema exibirá as próximas baterias associadas ao e-mail informado.

Após visualizar as próximas baterias, será disponibilizado um botão chamado **Mostrar baterias passadas**. Clicando nele, você poderá consultar as baterias anteriores vinculadas ao mesmo e-mail.

Este fluxo permite uma navegação simples e eficiente para consultar tanto as baterias futuras quanto as já realizadas.


---

## Funcionalidades

- Buscar baterias agendadas através do email do usuário.
- Visualizar baterias futuras e opção para exibir baterias passadas.
- API REST para consulta de dados.
- Frontend leve e responsivo.

---

## Como rodar a aplicação

### Pré-requisitos

- Docker instalado na máquina

### Estrutura de Diretórios

- `DESAFIO-AUTOMY/`
  - `src/`
    - `front/` – Contém os arquivos de interface web
      - `index.html` – Página principal da aplicação
      - `script.js` – Lógica de interação com o backend via fetch
      - `style.css` – Estilos da aplicação
    - `services/` – Serviços de domínio da aplicação
      - `authService.js` – Lógica de autenticação (mock ou real)
      - `bateriaService.js` – Lógica principal relacionada às baterias
      - `queryService.js` – Manipulação de queries SQL
    - `tests/` – Testes unitários da aplicação
      - `authService.test.js`
      - `bateriaService.test.js`
      - `dataUtils.test.js`
      - `queryService.test.js`
    - `utils/`
      - `app.txt` – Dados ou entrada simulada para testes
      - `main.js` – Lógica de orquestração e acesso ao domínio
      - `server.js` – Ponto de entrada do servidor Express
  - `.env` – Variáveis de ambiente da aplicação
  - `.gitignore` – Arquivos e pastas ignorados pelo Git
  - `Dockerfile` – Dockerfile principal para rodar a aplicação
  - `Dockerfile.test` – Dockerfile usado exclusivamente para rodar testes
  - `docker-compose.yaml` – Orquestração dos serviços da aplicação e testes
  - `package.json` – Dependências e scripts npm
  - `package-lock.json` – Versões travadas das dependências npm
  - `README.md` – Instruções de uso e documentação
  - `Doc.md` – Documento técnico complementar (ex: análise, decisões, etc.)

### Passos para rodar localmente com Docker

1. Clone o repositório:

   ```bash
   git clone https://github.com/GiulianoLBP/desafio-automy/tree/main

2. Entre na pasta do projeto

    ```bash
    cd desafio-automy

3. Build da imagem Docker(tanto app quanto tests):

    ```bash
    docker-compose up --build

3. 1. Build da imagem Docker para o app:

    ```bash
    docker-compose up --build app

3. 2. Build da imagem Docker para o test:

    ```bash
    docker-compose up --build test

4. Acesse a aplicação pelo navegador:

    ```bash
    http://localhost:3000
    