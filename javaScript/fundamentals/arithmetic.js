//Operadores Aritiméticos
//O operadores são classificados como aritiméticos, de atribuição, relacionais, lógicos, contudo,
//eles também podem ser classificados a partir da quantidade de operandos.
//Os operadores aritiméticos são operadores binários, ou seja, operam em cima de dois operandos.

//operando++(o Sinal é um operador) => post fixed -> Ex. a++
//++operando => pré fixed -> Ex. ++a
//operando + operando => in fixed -> Ex. a + b
//-operando (unário) => Ex. -a

const [a, b, c, d] = [3, 5, 1, 15]

const soma = a + b + c + d
const subtracao = d - b
const multiplicacao = a * b
const divisao = d / a
const modulo = a % 2
console.log(soma, subtracao, multiplicacao, divisao, modulo)
console.log(-soma, -subtracao, -multiplicacao, -divisao, -modulo) //Aplicando um operador unária (tornando negativa)