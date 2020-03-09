function teste (num){
    if(num > 7)
        console.log(num)

    console.log('Final') //esta sentença de código está fora if, apesar de parecer dentro
    // este if tem tem apenas uma única senteça de código -> console.log(num)
    //logo este console.log('Final') será sempre executada após este if.
}
//O uso do bloco é opcional dentro de uma extrutura if,
// contudo ele fica apenas com uma única sentença de
// código associada aquele bloco if.

//Se você quer colocar várias sentenças associada a um bloco,
//você tem que colcoar chaves {}. Más se você quer apenas uma única
//sentença de código você pode ou não colocar as chaves.

//teste(6) //Com o teste(8) comentado o resultado será apenas do console.log('Final') //Final
//teste(8) //Se o teste(8) está comentado o resultado será Final, 8, Final

/*
function teste2(num){
    if (num > 7)
        ; //Apenas este ponto e vírgula é considerada uma sentença de código vazia.
    //Observe o ';'. Este ponto e vírgula quebra o código, anulando a condicional
    //e fazendo com que as duas chamadas de teste2 ao final seja executada. O ponto e vírgula aqui
    //faz com que a sentença do if seja finalizada sem ao menos fazer a execução da mesma.
    Em outras palavras o if foi finalizado com a sentença ; que não faz nada e o bloco por sua vez não faz
    //parte do if.
    { 
        console.log(num)
    }
}
teste2(6)
teste2(8)
*/

function teste2(num){
    if (num > 7){
        console.log(num)
    }
}
teste2(6)
teste2(8)

//Moral da histária: Não use ';' o ponto e vírgula na definição de
//extruturas de controle, como uma delas sendo do tipo if.