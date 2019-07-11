const porta = 3003;

const express = require("express"); //importando o express
const app = express(); //instanciando o express na variavel app
const bodyParser = require("body-parser");
const bancoDeDados = require("./bancoDeDados"); //aquui eu importo o arquivo banco de dados

//função middleware

/* app.get("/produtos", (req, res, next) => {
  console.log("Middleware 1...");
  next(); // sem o next, ele não jogaria para o proximo e não teria resposta do servidor
});
 */

app.use(bodyParser.urlencoded({ extended: true })); //use é pra todas requisicoes, ele faz um parser pra transformar
//urlencoder

app.get("/produtos", (req, res, next) => {
  //obter a lista de produtos
  res.send(bancoDeDados.getProdutos()); //converter para json
});

app.get("/produtos/:id", (req, res, next) => {
  //parametro id = :id, digita /1 pra acessar o produto 1
  res.send(bancoDeDados.getProduto(req.params.id)); //params vem da req, no caso só tem o id
});

app.post("/produtos", (req, res, next) => {
  //post, submeter
  const produto = bancoDeDados.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco
  });
  res.send(produto); //aqui eu recebo a resposta, um json
});

app.put("/produtos/:id", (req, res, next) => {
  //put é alterar
  const produto = bancoDeDados.salvarProduto({
    id: req.params.id,
    nome: req.body.nome,
    preco: req.body.preco
  });
  res.send(produto); //aqui eu recebo a resposta, um json
});

app.delete("/produtos/:id", (req, res, next) => {
  const produto = bancoDeDados.excluirProduto(req.params.id);
  res.send(produto); //aqui eu recebo a resposta, um json
});

app.listen(porta, () => {
  console.log(`Servidor executando na porta ${porta}.`);
});
