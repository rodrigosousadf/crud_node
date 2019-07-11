const sequence = {
  _id: 1, //atributo interno
  get id() {
    //aqui retorna o id de fato
    return this._id++;
  }
};

const produtos = {}; //objeto com colecao de chaves

function salvarProduto(produto) {
  if (!produto.id) produto.id = sequence.id; //se o id não estiver setado,
  produtos[produto.id] = produto; // se tiver setado substitui, senão cria um produto
  return produto; //retorna o produto com id
}

function getProduto(id) {
  return produtos[id] || {}; //retorna o produto passando o id ou retorna um objeto vazio(poderia retornar qualquer cois)
}

function getProdutos() {
  return Object.values(produtos); //aqui retorna todos os valores do produto. chave é o id, valor é o produto
}

function excluirProduto(id) {
  const produto = produtos[id];
  delete produtos[id];
  return produto;
}
module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto }; //aqui torna as função visiveis pra fora do arquivo
