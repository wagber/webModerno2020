/*

Função em JS é First Class Object, First Class Citizen, First Line Citizen
Função em JS no paradigma funcional é Higher Order Function

Função é muito importante. Em JavaScript função é tratada como um cidadão de primeira linha.
Em JS é possível passar uma função como parametro, retornar uma função a partir de outra função,
declarar uma função dentro de outra função, criar uma função de forma literal que é a forma padrão
de se criar função, armazenar uma função dentro de uma variável.

Função é muito associado com algoritimos, pois função recebe parametros e retorna um determinado valor.

Função pode ser tratada como sendo um dado, e como sendo dado é possível passar essa função como parametro,
além de ser possível retornar essa função como resposta de uma função.

JavaScript é multifuncional. Nela é possível aplicar desde procedural, orientação a objetos como também funcional.
*/

function fun1(){ }//Bloco é obrigatório em uma função tradicional e não é possível omitir.


//Armazenar uma função em uma variável - Expressão de função
const fun2 = function(){ } //Função anonima -> function(){ }
//A partir de uma atribuição de uma função anônima a uma constante é possível referenciar essa função aonima através dessa constante.
//Se chamarmos o nome da constante com os parenteses() nós estaremos INVOCANDO a função. Se passarmos a constante
//passando ela como parametros para uma função ou fazer qualquer tipo de operação você estará invocando diretamente a função em si.
//Mas para invocar não podemos esquecer dos parenteses().


//Armazenando uma função dentro de uma Array.
const array = [function(a, b){return a + b}, fun1, fun2]
console.log(array[0](2,3)) //Exemplo de chamada dessa função através do array

//Armazenando uma função dentro de atributos de objetos
//Podemos criar um objeto e pegar um atributo desse objeto, mesmo que esse atributo não exista, dinamicamente você associar, atribuir uma função
//para esse atributo.
const obj = {}
obj.falar = function() {return 'Opa!'}
console.log(obj.falar()) //invocando essa função em uma chamada.
//Chamando essa função e invocando a mesma passando os parenteses .falar()


//Passando uma função como parametro para outra função
function run(fun){ //Foi criada uma função chamada run e passado um parametro chamado fun QUE SE ESPERA QUE SEJA UMA FUNÇÃO, 
    fun() //Aqui é uma função, más sempre verifique se a passagem no parametro realmente é uma função, porque se não dará erro esta chamada.
    // Sendo uma função podemos executala a partir do parametro que ela recebeu.
    //Não se esqueça dos parenteses, pois sem elas a fun não será invocada e tão pouco executada.
    //sendo uma função é possível executá-la a partir do parametro que você recebeu
}
run(function(){console.log('Executando...')})
//Aqui foi chamado run() e dentro dela foi passada uma função. Essa função pode ser uma que já exista ou você pode criar uma função diretamente dentro dessa chamada de função.
//Foi passando como parametro uma função. Más ATENÇÃO. Nesse momento -> run(function(){console.log('Executando...')}) a função não está sendo executada aqui fora neste run(),
//ou seja, a chamada, más ela está sendo executanda dentro de fun() que por sua vez está dentro da function run(fun){fun()}
//Essa informação é importante para entender um dos funcionamentos de uma chamada de função quando ela é passado como parametro para outra função e onde ela começa a ser executada.


//Retornando uma função como parametro
//Uma função pode retorar uma outra função. Uma vez que estamos retornando uma função que foi criada dentro de uma função
//isso significa que uma função também pode conter uma outra função.
function soma (a, b){
    return function(c){
        console.log(a + b + c)
    }
}
//Lendo esse algoritmo
//Temos aqui uma função soma que recebe dois parametro (a, b). Só que ao invés de retornar o resultado, ela irá retornar uma segunda função que recebeu como parametro (c)
//e só após ter os três parametros é que vou invocar e passar (a + b + c), ou seja, somar os três valores.
//Chamando as funções:
//soma(2,3)(4) //ou poderia chamar assim:
soma(2,3)
const cincoMais = soma(2,3)//Aqui foi pegue o resultado dessa função e armazenado em uma contante variável.
cincoMais(4)//depois foi chamada essa constante variável para chamar novamente a função atribuindo mais um valor.

//Retornarnado várias funções como parametro
//Abaixo segue 3 exemplos que fazem a mesma coisa mas que dá para se trabalhar de formas diferentes quanto ao retorno delas.

function soma1 (a, b){
    return function(c){
        return function(d){
            return function(e){
        console.log((a + b + c)*(d)/e)
            }
        }
    }
}
soma1(3,2)(5)(2)(3)

function soma2 (a, b){
    return function(c){
        return function(d){
            return function(e){
        return ((a + b + c)*(d)/e)
            }
        }
    }
}
console.log(soma2(3,3)(5)(2)(3).toFixed(2))

function soma3 (a, b){
    return function(c){
        return function(d){
            return function(e){
        return ((a + b + c)*(d)/e)
            }
        }
    }
}
let resultado = soma3
console.log(resultado(3,4)(5)(2)(3).toFixed(2))

//Observe como JS suporta e se comporta