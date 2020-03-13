//Callback -> chamar de volta
//O padrão de projto mais utilizado na web é o Observer (WEB -> JAVASCRIPT -> OBSERVER)
//Event Handler

//A ideia do callback é de você passar uma função para outra função e como determinado
//evento acontecer essa função que foi passada vai ser chamada de volta.
//Essa função callback pode ser chamada várias vezes ou pode ser chamada uma única vez. Vai depender do contexto ao qual está sendo chamada.
const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice){ //Atenção nesta sentença -> essa assinatura é de uma função que pode ser passada para uma função foreach
    console.log(`${indice + 1}. ${nome}`) //Atenção nesta sentença -> essa assinatura é de uma função que pode ser passada para uma função foreach
    //indice + 1 é para começar do indice 1
    /* Observe os número na frente dos elementos do aaray.
    Por isso adicionammos o + 1
    1. Mercedes
    2. Audi
    3. BMW
    */
    
}

/*
Antes de continuar quero abordar sobre a ordem dos parametro e no quanto ele influencia na chamada
A escrita correta
O primeiro parametro realmente corresponde ao nome dos elementos do array
O segundo parametro realmente corresponde ao indice do array
function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`) //Já aqui a posição de como virá a resposta vai depender da ordem definida nos parametro e no nome de cada parametro
trás esse formato de resposta
1. Mercedes
2. Audi
3. BMW
-----------------------------------------------
A escrita errada
function imprimir(indice, nome){
    console.log(`${nome}. ${indice + 1}`)
trás esse formato de resposta
0. Mercedes1
1. Audi1
2. BMW1
----------------------------------------------
A escrita errada
function imprimir(nome, indice){
    console.log(`${nome}. ${indice + 1}`)
trás esse formato de resposta
Mercedes. 1
Audi. 2
BMW. 3
-----------------------------------------------
A escrita errada
function imprimir(indice, nome){
    console.log(`${indice + 1}. ${nome}`)
trás esse formato de resposta
Mercedes1. 0
Audi1. 1
BMW1. 2
-----------------------------------------------

Podemos concluir que:
Em a escrita da função ( function imprimir(nome, indice) ) o primeiro parametro se refere ao elemento contido dentro do array, enquanto o segundo elemento corresponde ao indice
Pode parecer óbvio pelo uso do nome, mas não está ligado ao nome escrito e sim a ordem dos parametro na linguagem
Já na chamada ( console.log(`${indice + 1}. ${nome}`) ) o processo é proporcionalmente inverso. O indice vem como primeiro parametro e o nome dos elementos como segundo parametro.

Para comprovar que o nome não tem nada haver com isso vamos trocar o nome por (nom) e o indice por (ind)

Escrita correta
function imprimir(nom, ind){
    console.log(`${ind + 1}. ${nom}`)
trás esse formato de respposta
1. Mercedes
2. Audi
3. BMW

*/



fabricantes.forEach(imprimir) //forEach é uma função de fabricantes onde fabricantes é um array.
//Dentro do array tenho agora uma função forEach. Para cada elemento do array o forEach vai chamar a função imprimir.
 //O forEach vai passar como parametro para essa função, o NOME do elemento que ele está percorrendo e como segundo parametro
 //ele vai passar o INDICE.
 //Para cada elemento que o forEach achar dentro do array ele vai chamar de volta, por isso se chama callback, daí ele passa os parametros corretos
 //e imprime no console o valor de indice e nome.

 //Poderia também passar uma nova função como parametro e ainda assim trazer o resultado esperado. Más atenção: Neste exemplo é passado a
fabricantes.forEach(fabricante => console.log(fabricante)) //Chamada da função fabricante
/* Porque o retorno foi sem os números na frente?
Mercedes
Audi
BMW

Porque estamos chamando diretamente do array fabricante e não de uma função, no caso a função imprimir. 
*/

//O evento que o callback faz é um loop, que quando ele encontra um novo elemento ele dispara um evento que no caso é a função que foi chamda.
//Então o evento nesse caso é cada um dos elementos percorridos no array. Para cada elemento ele chama o callback passando o próprio elemento
//e o indice. Encontrou um novo elemento ele chama novamente o callback, a função que foi passada e chama o indice, encontrou outro ele passa
//o nome do elemento que ele está percorrendo e o indice dele e vai chamando isso pra cada um dos elementos do array. Por isso se chama callback.

//Outro exemplo de callback é quando fazemos uma requisição AJAX, você vai lá no servidor aí é passado pra essa requisição uma callback, uma função
//que será chamada quando a resposta chegar. Seja uma resposta de sucesso, seja uma resposta de erro.
//Então nesse exemplo podemos passar duas funções. Uma função de sucesso, uma função de erro e faça uma requisição AJAX para www.meusite.com.br/clientes
//para trazer a lista de clientes do meu site.
//Ai você passa a URL e passa a callback de sucesso e a callback de erro. Se de fato a lista de clientes foi pega ele vai chamar a callback de sucesso passando
//a lista de clientes pra vocês. Se deu algum erro na hora de pegar os dados no seu site ele vai chamar a callback de erro, passando a mensagem de erro
//que porventura tenha vindo a partir da resposta.