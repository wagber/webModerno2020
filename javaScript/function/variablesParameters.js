//O EXEMPLO ABAIXO USA O ARGUMENTS, TAL MÉTODO VEM ANTES DO ES6
//SUBSTITUINDO O ARGUMENTS JÁ A PARTIR DA VERSÃO DO ES6 TEMOS O REST/SPREAD

function soma(){ //Essa função não irá receber nenhum parametro, mas isso não significa que não é possível passar nenhum parametro.
    //E dentro da função tem como recuperar esses parametros usando uma propriedade chamada Arguments
    let soma = 0
    //Criando um FOR IN vamos através do i in arguments, onde arguments é um Array interno de uma função, que tem todos os argumentos
        //que foram passados e através do i vamos pegar o indice de cada elemento do Array. A partir desse indice é possível fazer arguments[] e acessando
        //o indice de cada um dos elementos que foram passados como argumento dessa função.
        //Posso pegar cada um dos elementos e ir somando com a variável criada chamada soma.
    for (i in arguments){ 
        soma += arguments[i] //pego cada um dos argumentos e somo
    }
    return soma //passo como retorno
}
//Chamando a função
console.log(soma())//não passando nenhum valor o retorno será zero 0, porque ele não vai ter nenhum argumento e logo não entrará no for
console.log(soma(1))//Somou o único parametro passado
console.log(soma(1.1, 2.2, 3.3).toFixed(1))
console.log(soma(1, 2))

console.log(soma(1.1, 2.2, ' Teste'))
console.log(soma(' a, b, c'))

//Quando nenhum parametro é passado este array interno que possui o arguments está vazio. Más temos a possibilidade de pegar todos os parametros que foram
//chamados a partir da chamada da função e fazer qualquer tipo de operação, incluse a do exemplo acima, que foi pegar cada um dos parametros e somar.

//Qual a finalidade do ARGUMENTS?

//Com o arguments quando uma pessoa desejar passar quantos parametros quiser o arguments irá lê todos eles e irá somar (no caso desta fançãosoma).
//Se não existisse o arguments teríamos que criar um algorítmo com n parametros o que seria inviável, uma vez que não sabemos quantos parametros o
//usuários deseja passar. A ideia do arguments é simples, capturar todos os parametros facilintando a vida do programadar.

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

/* Ex. Esclarecendo com outras palavras.

Antes de falar do uso de 'arguments', vamos avaliar o problema que ele resolve.
Então, esqueça 'arguments' por um momento, e siga comigo:

Se eu crio uma função de soma, posso limitar com quantos parâmetros ela vai trabalhar -- e
limitando o número de parâmetros com que ela trabalha (manipula), simplesmente qualquer outro parâmetro recebido será ignorado. Veja:

function soma(a, b) {
    return a + b
}
console.log( soma(1, 2) )       // imprime: 3
console.log( soma(4, 5, 6) )    // ignora os excedentes, imprime: 9

Prevendo que o usuário poderia querer entrar com 3 parâmetros ao invés de 2, poderíamos reescrever a função:

function soma(a, b, terceiroParametro) {
    return a + b + terceiroParametro
}
console.log( soma(1, 2) )       // imprime: NaN    <--- problema!!
console.log( soma(4, 5, 6) )    // imprime: 15

Veja que tivemos um problema quando ele informou apenas 2 parâmetros, então podemos
apenas reescrever a função para corrigir isso, colocando uma variável  para receber o total:

function soma(a, b, terceiroParametro) {
    let total = 0
    total = a + b
    if (terceiroParametro) {
        total = total + terceiroParametro
    }
    return total;
}
console.log( soma(1, 2) )       // imprime:3
console.log( soma(4, 5, 6) )    // imprime: 15
Show! Mas e se o usuário entrasse com 4 (ou mais!) parâmetros? Vish... são muitas
possibilidades para cobrir. Precisaríamos ter algum mecanismo para capturar qualquer
quantidade de parâmetros que o usuário passasse. Por acaso temos, ele se chama: arguments!
Ele está presente em todas as funções nativamente (você vai entender melhor ao final do capítulo 6,
sobre objetos) e registra todos os ARGUMENTOS* (oh!) da chamada!

Quando estamos montando a função, nos referimos aos dados de input da estrutura
dela como "parâmetros", mas o termo técnico para nos referirmos ao input que
o usuário faz quando chama essa função é ARGUMENTOS; ou seja, PARÂMETROS e ARGUMENTOS
referem-se a mesma coisa num contexto diferente; igual o operador ... sendo rest/spread.

Então, como solução efetiva:

function soma() {
    let total = 0            // criação de VARIÁVEL LOCAL com valor 0
 
    // abaixo, ITERA em todos os ARGUMENTOS da chamada da função!
    for (indiceDoArgumentoPassadoPeloUsuario in arguments) {
        total += arguments[indiceDoArgumentoPassadoPeloUsuario]
    }
 
    return total
} 
console.log( soma(1, 2) )       // imprime:3
console.log( soma(4, 5, 6) )    // imprime: 15
*/
