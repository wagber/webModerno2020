var a = 3  //Dê bons nomes, claros e se possível diretamente ligados ao negócio
let b = 4  //Existe diferença entre var e let. Evite uso do var. let é moderno

//let - palavra reservada
//b - identificador - nome da variável
// = - sinal de atribuição
//4 - valor a ser atribuido

var a = 30
//let b = 40 assim dará erro
b = 40

console.log(a, b) // aqui dará erro na variável let
// b = 40 - retirando a palavra reservada não dará mais erro
//o var aceita alterar, o let não ao continuar usando a palavra reservada

const c = 5
// c = 50
console.log(c)
//a palavra reservada const declara que a variável nunca será alterada