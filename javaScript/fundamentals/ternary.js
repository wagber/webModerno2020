//Operador ternário - Três operandos
//const resultado -> uma constante chamada resultado
//nome do parametro -> nome
//Função arrow =>
//Expressão relacional nota >= 7
// sinal de interrogação ? é o sinal da primeira condição ternária
// sinal de dois pontos : é o sinal da segunda condição ternária

const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
//O return é implícito em funções de uma só linha
//Se nota for >= 7 a primeira condição (?) por padrão é 'Aprovado'
//Se não a segunda condição (:) por padrão será 'Reprovado'

//nota >= 7 (Primeira parte do operador ternário (>=) é uma expressão realcional)
//? 'Aprovado' (Segunda parte do operador ternário (?) se for verdadeiro retorna o valor padrão atribuído)
//: 'Reprovado' (Terceira parte do operador ternário (:) se for falso retorna o valor padrão atribuído)

console.log(resultado(7.1))
console.log(resultado(6.1))


//ATENÇÃO em um operador ternário só existem duas condição boolean, ou seja, verdadeiro ou falso.
//Por existir apenas duas condições a primeira sempre será true e a segunda sempre será false.
//Contudo a ordem das condições estão sujeitas a lógica do programa.

//Também podemos armazenar a resposta de um operador ternário em uma constante
//const status = nota >= 7 ? 'Aprovado' : 'Reprovado'
// OU fazendo assim
/*
const resultado = nota =>{
    return nota >= 7 ? 'Aprovado' : 'Reprovado'
}

const status = resultado(7.1)
console.log(status)
*/