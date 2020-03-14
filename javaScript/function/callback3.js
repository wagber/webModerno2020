//Exemplo de callback para ser usado no browser


document.getElementsByTagName('body')[0].onclick = function(e){
    console.log('O evento ocorreu!')
}

//document -> document é referência dentro do Browser disponível globalmente dentro do seu código
//que aponta para a sua página e para o DOM.

//getElementsByTagName('body')[0] -> getElementsByTagName é uma função que acessa os elementos a
//partir de uma Tag, então é o método getElementsByTagName. Esta função retorna vários elementos.
//A tag que queremos aqui é o 'bady', onde a resposta dessa função é um array. Para acessar um
//elemento específico tenho que acessar o indice do array. Nesse exemplo como quero primeiro o body,
//uso o indice zero, que é o primeiro indice do array. Associado a esse a esse elemento colocamos o
//onclik e  vou atribur para o onclik uma callback que será chamada sempre que o usuário clicar, no caso
//aqui no body. 

//onclick = function(e){console.log('O evento ocorreu!')} -> O onclick vai receber uma função. Essa função
//recebe como parametro um evento (e), contuno não é obrigado a declarar o evento, porque se usar o evento
//declaramos, más se não usar não precisa declarar. Após isso colocamos a chamada. Nessa chamada podemos ter
//algumas caracteristicas do evento como qual foi a tag que foi disparada, que é o evento.target.
//Nesse caso como foi apenas exibido o console.log e não foi usado nada do evento, você não é obrigado a declarar ele
//embora se quiser declara ele como no exemplo acima não tem problema.

//No browser
//Uma vez que a callback foi registrada o evento ele só vai ocorrer quando o click acontecer.
//Para cada click a callback vai aconter constantemente. Uma vez que a pagina for dada um refresh a função some e para ocorrer novamente
//a função deve ser novamente registrada.
//Nos outros exemplos anteriores o evento callback era chamado dentro das chamadas do forEach e do filter.