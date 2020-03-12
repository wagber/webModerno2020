//Assim quando você trabalha com funções normais você
//pode nomear funções e você pode criar uma função
//anônima e passar ela para ser executado por outra função.
//Também pode armazenar uma função anônima dentro de uma variável.

//Função anônima é uma função que não tem nome.

//Uma função normal é antecedida pela palavra reservada function e em seguida o
//nome que será dado para essa função. Ex funcao1. Logo em seguida os parenteses
//com ou sem parametros.
//na função anonima isso não acontece. A função é composta pela palavra reservada
//functio e em seguida os parentes com ou sem parametros.
//Nos exemplos abaixo as funções anonimas estão sendo atribuidas a uma constante.

const soma = function(x, y){ 
    return x + y
}

const imprimirResultado = function(a, b, operacao = soma){ //três parametros
    console.log(operacao(a, b)) //Aqui vai chamar a operação passada por parametro e dentro do parametro operação
    //será lancado os dois primeiros parametros a, b da função anonima também.
    //Observer que o parametro operacao é o terceiro parametro e mesmo assim veio na frente da chamada sem nenhum problema
    //e dentro desse parametro foi passado dois parametros que antecederam a ele.
    //Observe que operação recebe a funçao soma. Dentro dessa função requer dois parametros, por isso que os parametro
    //da função imprimirResultado foram dentro de operacao, pois operacao resema a função soma que por sua vez requer dois parametros.
}

imprimirResultado(3, 4) //7
imprimirResultado(5, 6, soma)//Observe que eu poderia chamar a função diretamente aqui que não haveria problemas
//Poderia criar uma nova função diretamente dentro de imprimirResultado
imprimirResultado(7, 8, function(x, y){
    return x - y
}) //Nesta situação vale falar dois pontos. 
//O primeiro é que a função imprimirResultado requer 3 parametros
//O segundo que ao lançar uma nova função dentro da chamada da função imprimirResultado
//eu descosiderei a função soma e considerei a função que fez a subtração.
//Ressalto que isso é mais comum do que se imagina

//Agora usando uma arrow function e 100% uma função anonima.
//a mesma forma que o exemplo acima o terceiro parametro que é uma arrow function ao criá-la foi desconsiderada
//a função soma.
imprimirResultado(3, 4, (x, y) => x * y)

//Criando uma função anonima dentro de uma objeto
const pessoa = {
    falar: function(){
        console.log('Oba')
    }
}
pessoa.falar() //essa é a forma correta de chamar para o exemplo acima.

//Função equivalente ao exemplo de cima más usando uma arrow function
const pessoa2 = {
    falar2: ()=> {
        console.log('Epa!')
    }
}
pessoa2.falar2() //Acessamos essa modelo de função anonima através do atributo do objto que foi definido de chave / valor

//Com a nova versão ES6 também é possível fazer o aexmplo acima assim:
const pessoa3 = {
    falar3(){
        console.log('Nova versão do JS - ES6!!!')
    }
}
pessoa3.falar3()

//Só lembrando que função dentro de objeto é chamado de método.
