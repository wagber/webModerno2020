
/*var numero = 1
{
    var numero = 2
    console.log('dentro =', numero) //dentro = 2
}
console.log('fora =', numero) //fora = 1

//No exemplo acima ambas as variáveis serão imprimidas no consolo
//Logo fica evidandete que cada uma seguiu seu escopo.
//Contudo ao deixar apenas o console.log de 'fora' a variável que
//será impressa é a variável que está dentro do escopo. Isso prova que
//var não obedece ao escopo, uma vez que a mesmo não está dentro de uma função.*/

//Segue exemplo:
/*var numero = 1
{
    var numero = 2
    //console.log('dentro =', numero)
}
console.log('fora =', numero) //fora = 2*/

//Do mesmo modo se apenas o console.lo de dentro ficar
var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)
}
//console.log('fora =', numero)

//Agora levanto mais uma questão. O numero = 2 é impresso seja no
//exemplo de cima, seja no de baixo.
//Isso acontece porque o escopo busca sempre de dentro para fora, ou seja,
//o que está mais perto do escopo. Não achando ele pega o próximo escopo
//que encontrar.

//Outra boservação. O VAR é passível de ser declarado mais de uma vez
//Já com o uso do LET e do CONST isso não é aceitável no JS.