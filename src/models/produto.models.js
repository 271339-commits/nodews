/* quando não se tem banco e  se utiliza array em memória:
é uma classe opcional pois o array já funciona como armazenamento
*/

/* quando possui banco, a classe model passa ter um papel + importante
o service passa usar o model/repository para persistencia
fazer essa separação facilita testes e evolução
*/ 


class Produto {
  constructor({ id, nome, preco }) {
    this.id = id;
    this.nome = nome;
    this.preco = preco;
  }

  estaEmPromocao() {
    return this.preco < 100;
  }
}

module.exports = Produto;