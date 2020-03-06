//Par nome / valor
const saudacao = 'Olá!' //constexto léxico 1 - é o local onde a variável foi definida físicamente no código
//Léxico tem haver com palavra.
//Neste exemplo o contexto léxico está para o arquivo que estamos trabalhando - keyValuePair.js
//Poderia também ser definido no browser em um contexto global, ou seja, no contexto do objeto window, que é o objeto global

function exec(){
    const saudacao = 'falaaa' //constexto léxico 2 - dentro da função
    return saudacao //essa saudação irá buscar dentro do contexto mais interno. Não achando irá buscar no mais externo.
}

//const saudacao = 'Epa!!!' //Error: Identifier 'saudacao' has already been declared
//ou seja, este identificador já foi definido dentro deste contexto léxico

//Objetos são grupos aninhados de pares nome/valor
const cliente = { //criando objeto de forma literal
    nome:'Pedro',
    idade: 32,
    peso: 90,
    endereco:{
        logradouro:'Rua legal',
        numero: 123
        //Aqui eu poderia ter os mesmo nomes do contexto de fora de endereço e dentro de cliente que não daria erro,
        //uma vez que aqui os contextos também são diferentes. Um está no contexto cliente e o outro no contexto endereço.
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)