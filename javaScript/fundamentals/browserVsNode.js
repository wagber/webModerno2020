//Browser VS Node
//O Window é o objeto global do Browser
//Assim como o global é para o Node
//Em node cada arquivo é um módulo

let a = 3

global.b = 123
this.c = 456 //Ao fazer isso estou exportando esse valor para fora do arquivo,
//pois dentro de node cada arquivo é um módulo.
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this) //true
console.log(module.exports) //{ c: 456, d: false, e: 'teste' } -> Observe que ele retornou um objeto para fora
//isso seria equivalente a:
//module.exports = {e: 456, f: false, g: 'teste'}

//This dentro de um arquivo é o module.exports

//Criando uma variável global sem var ou let - CUIDADO
abc = 3 //Nunca faça isso
console.log(global.abc)
//Quando se cria uma variável desta forma pensando que é inofenciva, você está colocando
//uma variável diretamente no objeto global do node.

/*
//no browser
//thiss === window
//var é global (node) window (browser)
//let e const é de acesso global mas não poderá ser tocada, alterada no contexto global
//funções nomeadas estará disponível no contexto global e será visualizada
//agora uma função arrow não irão para o objeto global como o var e funções nomeadas.

/*para fugir do escopo global é criando objetos. Está no escopo do objeto pessoa e não no global. Logo consigo visualizar e alterar.
let pessoa = {nome: 'Ana', falar: function() {return `Eu sou ${this.nome}`}}
pessoa.falar()
this.nome é undefined
this === Window true
pessoa está no escopo global
*/