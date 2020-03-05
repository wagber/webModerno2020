//Armazenando uma função em uma variável

const imprimirSoma = function(a, b){ //função anônima
    console.log(a + b)
}

imprimirSoma(2, 3)

//Armazenando uma função Arrow em uma variável ES6

const soma = (a, b) => {
    return a + b
}

console.log(soma(3, 4))

//Retorno Implícito
const subtracao = (a, b) => a - b //Função de apenas uma
//única setença de código / linha, logo o resultado desta
//sentença de código irá retornar o resultado desta operação.
console.log(subtracao(4,5))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')