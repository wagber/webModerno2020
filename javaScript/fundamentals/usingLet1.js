/*let numero = 1
{
    //let tem tem escopo de bloco
    let numero = 2
    console.log('dentro =', numero) //dentro = 2
}
console.log('fora =', numero) //fora = 1
//Note que dentro e fora foi impresso corretamente com seus respectivos valores*/

let numero = 1
{
    //let tem tem escopo de bloco
    let numero2 = 2
    console.log('dentro =', numero) //dentro = 1
}
console.log('fora =', numero) //fora = 1
//Note que agora não foi impresso corretamente as chamadas das variáveis.
//let numero2 não foi chamada.
//Existe uma coisa chamada PREFERÊNCIA
//Pelo fato de let numero2 não ter sido chamada, o console.log de dentro do escopo procurou o escopo mais próximo.
//Procurou no escopo interno e não encontrou, procurou no escopo mais abrangente e encontrou.
//A preferência é dada para o escopo menor, não encontrando dará preferência ao escopo mais abrangente.
//sendo assim, imprimiu o let dentro = 1

//Variáveis definidas com a palavra reservada VAR tem escopo GLOBAL e escopo de FUNÇÃO.
//Variáveis definidas com a palavra reservada LET ou CONST tem escopo GLOBAL e escopo de FUNÇÃO e escopo de BLOCO.