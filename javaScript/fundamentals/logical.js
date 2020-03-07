//Operadores lógicos => && ('i'); || ('ou'); ! ('não'); ^ ('Ou Exclusivo')

//v e v -> v
//v e f -> f
//f e ? -> f
//v ou ? -> v
//f ou v -> v
//f ou f -> f
//v xor v -> f
//f xor f -> f
//v xor f -> v
//f xor v -> v
//!v -> f
//!f -> v
//!!f -> v
//!!v -> f

//Ex. 1 -> op1 e op2 e op3 e op4 -> v Todos terão que ser verdadeiros para dar a sentença como verdadeira
//Ex. 1 -> op1 ou op2 e op3 e op4 -> v Basta um apenas está certo para que toda a sentença seja dada como verdadeira

function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2 //aqui qualquer uma das duas podem ser verdade para toda a sentença ser verdade
    const comprarTv50 = trabalho1 && trabalho2 //aqui as duas sentenças tem que ser verdade para tudo ser verdade
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete //Operador unário

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}//Em JS só é suportado um único retorno, logo podemos jogar todas as sentenças dentro de um único objeto
    //Observe: Todo objeto é uma coleção de par chave / valor, contudo com o novo ES6, quando eu tenho o nome de uma constante igual ao valor que quero atribuir, posso então usá-la como chave igual ao valor
    //podendo usar uma única vez o mesmo nome, logo conforme o exemplo acima: comprarSorvete: comprarSorvete posso simplesmente usar apenas um único nome que a linguagem
    //irá enteder.
}

console.log(compras(true, true)) //Primeiro caso
console.log('----------------------------------')
console.log(compras(true, false)) //Segundo caso
console.log('----------------------------------')
console.log(compras(false, true)) //terceiro caso
console.log('----------------------------------')
console.log(compras(false, false)) //Quarto caso
console.log('----------------------------------')