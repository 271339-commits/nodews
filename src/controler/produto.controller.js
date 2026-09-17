/* a classe controller recebe as requisições e devevolve respostas - direciona onde as coisas devem ser feitas.
    ela lê parametros e o body (quando você preenche um formulário, os dados são encapsulados para o servidor ler)
    define status HTTP (200, 404)
    retorna JSON
*/

/*
const produtos = [
  { id: 1, nome: "Notebook", preco: 3500 },
  { id: 2, nome: "Notebook 2", preco: 4000 },
];

exports.listar = (req, res) => {
  res.json(produtos);
};

exports.criar = (req, res) => {
  const produto = { id: 2, ...req.body };
  produtos.push(produto);
  res.status(201).json(produto);
}; */


const service = require("../services/produto.service");

exports.listar = (req, res) => {
  const produtos = service.listar();
  res.status(200).json(produtos);
};

exports.buscarPorId = (req, res) => {
  const produto = service.buscarPorId(req.params.id);

  if (!produto) {
    return res.status(404).json({
      mensagem: "Produto não encontrado"
    });
  }

  res.status(200).json(produto);
};

exports.criar = (req, res) => {
  try {
    const produto = service.criar(req.body);
    res.status(201).json(produto);
  } catch (error) {
    res.status(400).json({ mensagem: error.message });
  }
};