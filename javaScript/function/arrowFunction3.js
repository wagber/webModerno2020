//Dentro do contexto do NODE

let comparaComThis = function(param){
    console.log(this === param)
}
comparaComThis(global) //true -> Objeto global
comparaComThis(this) //flse -> Aqui não aponta mais para o global

//Temos que ter muito cuidado ao chamar o this
//porque estamos mexendo no escopo global.

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) //False -> não aponta mais para global
comparaComThis(obj) //true -> O this dentro dessa função agora aponta
// para objeto por conta do bind()

//Agora testando o comportamento dentro do arrow function

let comparaComThisArrow = param => console.log(this === param)
//Será se o this vai continuar apontando para uma função global
//como uma função normal apontaria? NÃO!
//Porque essa função foi definida dentro de uma módulo do Node.
//Cadda arquivo do node representa um módulo, logo foi escrito dentro do módulo.
//Logo o dono, o this dessa função seria o módulo atual.
comparaComThisArrow(global) //False nesse caso de arrow function
comparaComThisArrow(module.exports) //true
comparaComThisArrow(this) //equivalente ao module.exports //true

//Teste mais radical

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) //False -> De fato não aponta para o objeto que foi tentado mudar a referencia do this. 
//Arrow function é mais forte que o bind. O This aponta para o qual o objeto no qual a função foi escrita.
comparaComThisArrow(module.exports) // true