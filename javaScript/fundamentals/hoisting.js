//Hoisting é o ato de jagar para cima, de elevar, de içamento, de jagar para o topo. Considerando sempre o seu escopo.

/*Conceitualmente, por exemplo, uma definição estrita de elevação
sugere que as declarações de variáveis e funções são fisicamente
movidas para o topo do seu código, mas isso não é realmente o que
acontece. Em vez disso, as declarações de variável e função são
colocadas na memória durante a fase de compilação, mas permanecem
exatamente onde você as digitou no seu código.
*/
//Toda sentença de código é lida de cima para baixo. De tal forma 
//que para usar uma variável temos que declarar ela.
//Só que em JS isso não acontece 100%. No caso do VAR, quando 
//declaramos uma variável usando o VAR, ele sofre o hoisting, sofre o içamento.
//O próprio interpretador do JS pega a variável e joga para cima.

//Ex1.
console.log('a =', a) //a = undefined - primeiro disse que a variável a é undefined, más ela existe
var a = 2 //se eu retirar o var a = 2 dará erro - a is not defined - ou seja, dirá que a não existe.
console.log('a =', a) //a = 2 - aqui ouve um içamento da variável a

/*Em outras palavras o que aconteceu foi iiso:
var a
console.log('a =', a)
a = 2
console.log('a =', a)
*/

//Ex2. Dentro de uma função e repetindo a mesma ação do primeiro exemplo.
function teste(){
    console.log('a = ', a)
    var a = 3
    console.log('a = ', a)
}
teste() //chamando a função a variável também sofre o içamento, indo para cima da função e ela vem 
//antes de qualquer outra senteça de código
//Em suma isso não é uma boa prática e nunca devemos usar isso

/*Usando o LET para com os exemplos acima

console.log('a =', a) //Error: Identifier 'a' has already been declared
let a =2 //Aqui diz que o identificador 'a' já foi declarado, logo vemos que não houve o içamento como é feito com o var
console.log('a =', a) //Logo tudo dará erro
*/
