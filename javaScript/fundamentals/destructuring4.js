//Ausando Array dentro dos parametros de uma função

function rand([min = 0, max = 1000]){ //Uma vez que desestruturamos um array, não recebemos um novo array e sim dois atributos, no caso deste exemplo citado.
    if (min > max) [min, max] = [max, min] //Observe a ordem:
    //Aqui estou criando um array [max, min] com os dois atributos ([min = 0, max = 1000]) que foram desestruturados de um array.
    // acessando o operador destructuring [min, max] = ...
    // acessando o array ... = [max, min] - criando um array
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) //arredondo para baixo
    //return Math.floor(valor) ////arredondo para cima
}

console.log(rand([50, 40])) //máximo e mínimo
console.log(rand([992])) //mínimo e por padrão pega o valor máximo informado
console.log(rand([, 10])) //mínimo por padrão pegará o 0 (zero) e o máximo será o 10 que foi informado.
console.log(rand([])) //Array vazio pega do mínimo informado [0] até o máximo informado [1000]
//console.log(rand()) //Error: undefined is not iterable
