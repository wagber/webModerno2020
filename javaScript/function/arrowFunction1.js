//Sintaxe reduzida do Arrow Function


let dobre = function (a){
    return 2 * a
}

dobro = (a) =>{
    return 2 * a
}

//Função arrow sempre é uma função anonima. Se quisermos
//chamar uma função arrow depois nós temos que armazená-la
//em uma variável ou constante.   

//Forma mais reduzida, função de uma única linha
dobro = a => 2 * a //return implícito

console.log(dobro(Math.PI))

let ola = function(){
    return 'Olá'
}

ola = () => 'Olá'
console.log(ola())
ola = _ => 'Olá' //equivalentes - Possui sim um parametro _
console.log(ola())
