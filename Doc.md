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

## Funcionalidades

- Buscar baterias agendadas através do email do usuário.
- Visualizar baterias futuras e opção para exibir baterias passadas.
- API REST para consulta de dados.
- Frontend leve e responsivo.

---

## Como rodar a aplicação

### Pré-requisitos

- Docker instalado na máquina

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

3. 2. Build da imagem Docker para o tests:

    ```bash
    docker-compose up --build tests

4. Acesse a aplicação pelo navegador:

    ```bash
    docker-compose up --build
