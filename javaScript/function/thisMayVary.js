/*
//Apenas comentários para serem escritos no console do browser

//No contexto do Browser o this pode variar

//O This é uma forma de refenciar o ATUAL daquela execução
//O this acessa o dono do código que está sendo executado naquele momento.
//Em JS o this pode variar de acordo como a função é chamada.

function f1(){
    console.log(this === window) //window é o mesmo que global na IDE
}
undefined
f1() //chamando a função no excopo global
true //Quando uso a palavra this nesse contexto de fato o this aponta para o objto global do browser.
//já que estou executando dentro de um contexto global. This é sempre o objeto que está sendo referenciado
//naquele contexto de execução, que é o dono daquela função que está sendo executado naquele contexto. Por isso que o this em JS pode variar.
//Dependendo da forma como que chamamos a função o this pode não mais apontar para window e apontar para uma coisa totalmente diferente.
undefined

//Variando o this chamando a partir de um click, neste exemplo o this não aponta mais para o objeto global
//document representa o elemento da pagina
//Só lembrando que é esperado que sua página tenha pelo menos um bady, por isso que au chamar usando o getElementsByTagName o retorno será um array.
// Logo a posição do indice é zero, uma vez que estou comecando do primeiro indice.

document.getElementsByTagName('body')[0].onclick = f1 //quando associo o onclick a função f1, ao clicar na pagina podemos perceber que ela está chamando essa função. E imprimindo o resultado falso
function f1() {
    console.log(this === window)
}
false //ao clicar na pagina podemos perceber que ela está chamando essa função. E imprimindo o resultado falso

function f2(){
    console.log(this === document) //no contexto global this não aponta para document
}
undefined
f2()
false //no contexto global this não aponta para document
undefined
document.getElementsByTagName('body')[0].onclick = f2
function f2(){
    console.log(this === document)
}
false //no contexto global this não aponta para document

const body = document.getElementsByTagName('body')[0]
undefined
function f2(){console.log(this === body)}
undefined
document.getElementsByTagName('body')[0].onclick = f2
function f2(){console.log(this === body)}
true //Nesse caso é verdadeiro. Nesse caso quem representa o this na função f2 a partir do click na pagina é o proprio elemento que estou clicando.
f2 //Mas chamando o f2 aqui veremos que não é o body que está apontando para o this e sim o objeto window.
false //resposta da chamada do f2 
undefined
//Usando o arrow function
//Dois motivos para se ter criado o arrow function foram:
//Diminuir a sintaxe ... () =>
//Ex. abaixo
const f3 = () => console.log(this === window)
undefined
f3()
true
undefined

//Outra razão é porque o this não varia com arrow function
//Ex. abaixo pegando ainda o gancho da função f3.
document.getElementsByTagName('body')[0].onclick = f3
() => console.log(this === window) //Após clicar vemos que continua verdadeiro
true //reposta do click no body e continua verdadeiro
f3()
true //chamando a função diretamente e dá como verdadeiro
undefined
true //chamando a função a partir do click no body e dá também como verdadeiro
//Com uma função normal (tradicional) deu falso, mas com uma função com arrow deu verdadeira
//Quando chamamos uma função tradicional definida com function o this pode variar de acordo com quem está chamando. É preciso entender o contexto.
//Quando chamamos uma função definida com arrow function o this não varia nunca.
//O this vai ser definido no momento que a função for definida. Nessa hora a função vai pegar o this associada ao contexto na qual a função foi definida. É o que chamamos de this léxico.
//Contexto léxico é o contexto no qual a função foi escrita.

this === window
true //this === window
//O this é igual a window por causa do contexto que foi definida a função.

*/