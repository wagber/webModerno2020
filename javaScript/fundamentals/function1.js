//Uma função é um verbo, uma ação
//que tem um bloco de código nomeado delimitado por chaves
//Recebe parametros de entrada. 
//Pode também não receber nenhum parametro

//Função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)    
}
imprimirSoma(2, 3)
imprimirSoma(2) // aqui será a soma de 2 com undefined = NaN
imprimirSoma(2, 10, 4, 5, ) // Esta soma vai funcionar e vai ignorar todo o resto não declarados como parametro na função
imprimirSoma()

//Função com retorno
function soma(a, b = 1){//poderia atribuir um valor padrão também para o parametro a -> EX. a = 1
    return a + b //estou RETORNANDO esse valor em resposta a chamada dessa função
}
console.log(soma(2,4)) //Estou chamando dentro do console a função soma
//chamar a função fora do console nesta situação dará erro NaN
console.log(soma(2)) //como b recebia um valor padrão não houve a necessidade de passar o segundo parametro
