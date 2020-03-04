//Sobre o convceito de Null pelo conceito de atribuição por valor e atribuição por referencia.

//

const a = {name: 'Teste'} //a contante a não tem o conteúdo deste objeto,
//más ela tem o endereço onde esse objeto está localizado. A tem o endereço apontando para esse objeto.
console.log(a)
const b = a //quando b recebe a quer dizer estamos igualando os endereços, ou seja, que ela está recebendo o mesmo enredeço que a constante a está apontando.
//logo b e a apontam para o mesmo lugar na memória.
console.log(b)
//Más ao mudar em b, a também será alterado
b.name = 'Opa' //alterando o valor de name em a através de b
console.log(b) 
console.log(a)
// Qualquer mudando será refletido em ambos, logo isso chamomos de 
//ATRIBUIÇÃO POR REFEÊNCIA. 
//ATENÇÂO -  A atribuição por referencia se dá para valores não primitivos.
//ou seja, objetos

//Tipos primitivos: String, Number, Boolean, Null, undefined, Symbol
//Tipos não primitivos: Objetos, Funções, Arrays, Regexp, Date, JSON, Literal


//Usamo o Object.freeze quando queremos bloquear qualquer mudando em uma variável ou constante.
// EX: const a = Object.freeze({nome:'Ana'})

//Por referencia para objetos
function mudar(obj){
    obj.nome = 'Gui'
}

mudar(b)
console.log(a)

//por valor para números primitivos
let a1 = 3
function mudar1(valor1){
    valor1++
}
mudar1(a1)
console.log(a1)

/*Observer que o valor de 3 não foi alterado, porque para valores primitivos sempre
  é passada uma cópia desse valor
*/

//Conceito de null - referência
let valor //não inicializada
console.log(valor) //undefined

valor = null //aqui ela não tem nenhum valor, nem primitivo e nem um endereço 
//- aqui null quer dizer ausencia de valor, só que existe uma diferença. 
//Aqui ela foi definida dizendo que ela não foi apontado para nenhum lugar na memória.
console.log(valor) //null

//Quando usamos o null? Quando queremos dizer que uma determinada variável está vazia.
//Quando queremos que uma determnada variável que aponta para um determinado endereço
//de memória que tem um objeto pessoa e não quero mais que a variável aponte para mais ninguém
//então atribuimos o valor nulo. 

//Deixemos o undefined para própria linguagem quando ela entende que uma variável não foi inicializada.
//Não é uma boa prática nós mesmos atribuirmos o undefined a uma variável.

//cuidados ao acessar uma variável que não aponta para nada?
//console.log(valor.toString()) //Erro - Cannot read property 'toString' of null

const produto = {}
console.log(produto.preco)
//Aqui dará preço não exite dentro do produto, contudo não dará erro e sim undefined
//console.log(produto.preco.a) - já aqui dará erro porque a não pode existe em algo que não existe dentro de produto.
console.log(produto) //objeto vazio

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evitar atribuir undefined
console.log(produto.preco)
console.log(!!produto.preco)
console.log(produto)

//caso queira deletar um produto basta usar o delete
//delete produto.preco

//dizer que um produto está sem preço - podemos usar o NULL
produto.preco = null //sem preço
console.log(produto.preco)
console.log(!!produto.preco) //Testando se preço está setado convertendo para boolean - produto.preco está setado? 
console.log(produto)

//Passagem por valor é feita uma CÓPIA do valor, tendo cada variável seu valor independente
//Passagem por referência, ou seja, copiando o ENDEREÇO de memória, é feito um APONTAMENTO para endereço de memória.

// Caso eu não queira mais apontar para essa memória posso usar o null, contudo não poderei mais acessar
//nada desta variável como membro, função ou atributo poderá ser acessada.

//Contextualizando imutabilidade

const event = 'Passagem por valor'
console.log(event)

const eventUpperCase = event.toUpperCase()
console.log(eventUpperCase)
console.log(event.toUpperCase()) //???
console.log(event)
/* 
Porque na passagem por VALOR de número PRIMITIVO
que é um número IMUTÁVEL, o mesmo sofre uma mudança
direta?
*/
console.log(typeof eventUpperCase)

let event2 = 'const'
console.log(event2)
event2 = 'let'
console.log(event2)

//Prova de imutabilidade em números primitivos

let texto = 'alfa'
console.log(texto) //alfa
console.log(texto[0] = 'b') //b
console.log(texto) //alfa - Observe que o valor de texto não sofreu alteração


