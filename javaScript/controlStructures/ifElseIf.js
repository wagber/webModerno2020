//Usamos o IF quando quero fazer algo quando for absolutamente verdadeiro e absolutamente nada quando for falso
//Usamos o IF com o ELSE quando quero fazer algo quando for absolutamente verdadeiro e outra coisa quando for falso
//Usamos o IF com o ELSE IF encadeado quando temos multiplas seleções.

Number.prototype.entre = function(inicio, fim){ //Expressão que recebe uma função
    return this >= inicio && fim //o This neste escopo é o Number
    //e com isso a partir da variável this posso acessar a nota atual e verifico se
    //nota atual está entre inicio e fim e retorno um valor booleano.
}
//Criando uma constante e atribuindo a esta contante uma função
const imprimirResultado = function(nota){
    if (nota.entre(9, 10)){
        console.log('Quadro de honra!')
    }else if (nota.entre(7, 8.99)){
        console.log('Aprovado!')
    }else if (nota.entre(5, 6.99)){
        console.log('Recuperação')
    }else if (nota.entre(0, 4.00)){
        console.log('Reprovado')
    }else{
        console.log('Valor inválido')
    }
    console.log('Fim!')
}

//ATENÇAO:
//A condição só cairá dentro do ELSE IF se a condição que lhe cabe for verdadeira.
//Não sendo, a condição passa para a condição seguinte caso ainda tenha. Não tendo,
//a sentença acaba e o laço acaba.
//Apenas uma condição pode cair dentro do laço. Quando isso acontecer o laço acaba.

imprimirResultado(10)
imprimirResultado(8)
imprimirResultado(5.99)
imprimirResultado(3)
imprimirResultado(-1)
imprimirResultado(-11)