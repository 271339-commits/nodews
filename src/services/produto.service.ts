// 1. Importa a classe Produto do Model
const Produto = require("../models/produto.models");

// 2. Inicializa a lista instanciando os objetos com a classe Produto
const produtos = [
  new Produto({ id: 1, nome: "Notebook", preco: 3500 }),
  new Produto({ id: 2, nome: "Mouse", preco: 120 })
];

function listar() {
  return produtos;
}

function buscarPorId(id) {
  return produtos.find(p => p.id === Number(id));
}

function criar(dados) {
  // Validação de regra de negócio
  if (!dados.nome || dados.preco == null) {
    throw new Error("nome e preco são obrigatórios");
  }

  // Instancia um novo Produto usando o Model
  const produto = new Produto({
    id: produtos.length + 1,
    nome: dados.nome,
    preco: dados.preco
  });

  produtos.push(produto);
  return produto;
}

function atualizar(id, dados) {
  const produto = produtos.find(p => p.id === Number(id));

  if (!produto) {
    return null;
  }

  if (!dados.nome || dados.preco == null) {
    throw new Error("nome e preco são obrigatórios");
  }

  produto.nome = dados.nome;
  produto.preco = dados.preco;

  return produto;
}

function deletar(id) {
  const index = produtos.findIndex(p => p.id === Number(id));

  if (index === -1) {
    return null;
  }

  const produtoRemovido = produtos.splice(index, 1);

  return produtoRemovido[0];
}

function atualizarParcial(id, dados) {
  const produto = produtos.find(p => p.id === Number(id));

  if (!produto) {
    return null;
  }

  if (dados.nome !== undefined) {
    produto.nome = dados.nome;
  }

  if (dados.preco !== undefined) {
    produto.preco = dados.preco;
  }

  return produto;
}



module.exports = { listar, buscarPorId,criar, atualizar, deletar,atualizarParcial};