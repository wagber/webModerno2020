//Destructuring em Arrays usando colchetes
const [a] = [10] //Na desestruturação a sintaxe é:
//O identificador de variável - const ou let
//Os colchetes [] com o que deseja desestruturar
//O sinal de atribuição
//Por fim o array que deseja desestruturar

//ATENÇÃO
//O Array fica do lado direito da minha expressão,
//enquanto a desestruturação fica do meu lado esquerdo da expressão.

console.log(a)

const [n1, ,n3, ,n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6) //10 9 undefined 0

//Desestruturação aninhada
const [, [,nota]] = [[, 8, 8],[9, 6, 8]]
console.log(nota)