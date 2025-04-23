# Não fui eu que ordenei a você? Seja forte e corajoso! Não se apavore nem desanime, 
# pois o Senhor, o seu Deus, estará com você por onde você andar 
# Josué 1:9


# API Faculdade

Esta é uma API desenvolvida com **Node.js** e **Express** para gerenciar posts. A API utiliza um banco de dados SQLite para armazenar os dados e inclui documentação interativa com **Swagger**.

---

## **1. Funcionalidades**
A API permite:
- Criar posts.
- Listar todos os posts.
- Buscar um post específico pelo ID.
- Atualizar um post pelo ID.
- Excluir um post pelo ID.

---

## **2. Tecnologias Utilizadas**
- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework para criação de APIs.
- **SQLite**: Banco de dados relacional leve.
- **Swagger UI**: Documentação interativa da API.
- **Helmet**: Middleware para segurança HTTP.
- **Joi**: Validação de dados.
- **Better-SQLite3**: Biblioteca para interação com o SQLite.

---

## **3. Endpoints da API**

### **GET /** (Rota raiz)
- **Descrição**: Verifica se a API está funcionando.
- **URL**: `/`
- **Resposta**:
  ```text
  API com Express e Node.js