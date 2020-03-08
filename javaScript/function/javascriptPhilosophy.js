//Entendendo a filosofia por trás do JavaScript

let retorno = function minhaFuncao(){
    console.log('Isso é uma função')
    return true;
    //returns equivalentes para true ou 1, ou false ou 0
    //return true;
    //return 0;
    //return false;
}
if (retorno(1 || true)){
    console.log('Entrou no IF')
}else{
    console.log('False')
}

//---------------------------------------------------------------------------//

//Exemplo equivalente ao exemplo de cima - retorno
//Assim não funciona
//retorno() //Error: retorno is not a function

let retorno1 = function minhaFuncao1(){
    console.log('Esta é a função 1')
    return retorno;
}
//Assim funciona
retorno1()

//Em uma situação onde uma função é passada para
//uma expressão o retorno só é visto após e a função
//nunca antes, uma vez que o JS tem retorno antes como
//Error: retorno is not a function.

//---------------------------------------------------------------------------//

//função como argumento de outra função

let retorno2 = function minhaFuncao2(){
    console.log('Esta é a função 2')
}

function minhaOutraFuncao(funcParametro){
    funcParametro()
}
minhaOutraFuncao(retorno2)

//---------------------------------------------------------------------------//

//função como um Valor - função como uma propriedade de um objeto (valor)

let retorno3 = function minhaFuncao3(){
    console.log('Esta é a função 3')
    //return
    //ou posso usar nada
    //ou posso usar o return com o 1 ou o true
    //ou posso usar 1
    //ou posso usar true
}

let obj = {
    objretorno: retorno3
}

obj.objretorno()

//---------------------------------------------------------------------------//

//Função com comportamento diferente
//Uma função como instrução sempre é “hospedada”
//no escopo onde foi definida. Logo, não é desnecessário
// definir a função antes do uso.
//Funciona assim
minhaFuncao4()

function minhaFuncao4(){
    console.log('Esta é a função 4')
}
//Funciona assim
//minhaFuncao4()