//Outro contexto onde usamos o destructuring é ambito de uma função.
//Não só diretamente na atribuição, mas também como parametro de uma função.

//Usando na criação de uma função com um objeto
function rand({min = 0, max = 1000}){ //Aqui foi criada uma função chamada
    //rand que vai retornoar um número aleatório, que dentro dela foi
    //passado dois atributos só que dentro de um operador destructuring.
    // Essa operação significa que vai ser passado um objeto para essa função
    //e dentro dessa função randomica, ao invés de acessar obj.min, obj.max, eu quero
    //que ele tire de dentro do objeto o atributo mim e o atributo max e me entregue
    //esses dois atributos prontos, sem precisar usar a notação ponto pra acessar
    //de dentro do objeto.
    const valor = Math.random() * (max - min) + min //(max - min) + min -> quero dar um intervalor entre o máximo e o mínimo.
    // A função Math.random() retorna um número pseudo-aleatório no intervalo [0, 1[, ou seja,
    //de 0 (inclusivo) até, mas não incluindo, 1 (exclusivo), que depois você pode dimensionar
    //para um intervalo desejado.  A implementação seleciona uma semente para o algoritmo de geração
    //de números aleatórios; esta semente não pode ser escolhida ou reatribuída.
    //Este exemplo retorna um número entre dois valores definidos. O valor retornado será maior ou igual a min, e menor que max.
    return Math.floor(valor) //Retornando um arredondamento para menor usando a função Math.floor
    //Por floor ser um método estático de Math, você sempre irá usar como Math.floor(),e não como método do objeto Math que você criou.
}

//console.log(rand({max:50, min: 40})) //Note que aqui estou usando um objeto
//A forma usada a baixo faz o mesmo efeito que a de cima.
const obj = {max: 50, min: 40}
console.log(rand(obj))
console.log(rand({min: 955})) //Aqui informei apenas o mínimo, e o valor máximo por padrão ele assumiu 1000
console.log(rand({})) //Passado um objeto vazio - aqui fica navegando entre 0 e 1000
//console.log(rand()) //Error: Cannot read property 'min' of undefined
//Cuidado, aqui dará undefined ou null
