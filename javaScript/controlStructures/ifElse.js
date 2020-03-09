//imprimirResultado(6) //ATENÇÃO - O Hoisting não funciona aqui

const imprimirResultado = function(nota){
    if(nota >= 7){
        console.log('Aprovado!')
    }else{
        console.log('Reprovado!')
    }
}

imprimirResultado(8)
imprimirResultado(4)
imprimirResultado('Epa!') //Tenha cuidado pois o JS aceita isso más não faz parte da lógica do código
//Por ser fracamento tipado o JS tentou converter essa string para Number, e como não deu ele passou
//para o else.