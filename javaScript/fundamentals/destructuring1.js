// Operador Destructuring - ES6
// Este operador é de desestruturação, ele tira da estrutura alguma coisa
//tipo um objeto,ou seja, tirar de dentro de um objeto seus atributos.
//tipo um array, ou seja, tirar elementos de um array a partir dessa forma de extrair.
//No ambito de objeto o operador destructuring usa na sua sintaxe as chaves {}
//No ambito de array o operador destructuring usa na sua sintaxe os colchetes []

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 100
    }
}
//Tirando de forma padrão os atributos de dentro de um objeto:
// - pessoa.nome
// - pessoa.idade
//ou criando uma variável
// let nome = pessoa.nome
// const idade = pessoa.idade
//Posso usar o let ou o const

//Tirando de fomra simplificada de tirar de dentro de uma estrutua, no caso um OBJETO, dois atributos.
const {nome, idade} = pessoa //Tire os atributos nome e idade de dentro do objeto pessoa. Observe que para objetos usamos as chaves.
console.log(nome, idade) //Usando uma única linha é possível tirar vários atributos de um objeto

//Mas não quero ficar amarrado.
//Mudando por ex. o nome da variável.
const {nome: n, idade: i} = pessoa //criei a variável n e i.
console.log(n, i)

//Tirando um atributo qua não existe dentro de objeto
const {sobrenome, bemHumorada = true} = pessoa //Passando um valor padrão para o atributo bemHumorada. Caso não venha nada de dentro de objeto, este atributo assume o valor padrão como verdadeiro
console.log(sobrenome, bemHumorada) //undefined, true - Observe que nessa condição não vem a palavra bemHumorada, mas vem o valor que foi atribuído

//Acessando logradouro e numero que estão dentro de endereco
const {endereco: {logradouro: l, numero: nu, cep: c}} = pessoa
console.log(l, nu, c) //Rua ABC 100 undefined

//criando o destructuring em apenas endereco
const {endereco} = pessoa
console.log(endereco) //{ logradouro: 'Rua ABC', numero: 100 }

//CUIDADO - Acessar atributos que não existe e estão de forma aninhada dará erro.
//const {conta: {ag, num}} = pessoa
//console.log(ag, num) //Error: Cannot read property 'ag' of undefined