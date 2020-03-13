//Ex. sem callback

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0] 
//Gerar um novo array com todas as notas menores do que 7

const notasBaixas1 = []
for(let i in notas){
    if (notas[i] < 7){
    notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)

//Ex. com callback
//filter() é uma função que vai filtrar os elementos de um array em cima de uma determinado critério que vai ser uma função callback que vai retornar true ou false.
//Essa função, quando passar para cada elemento ela vai chamar essa função. Se a função retornar true, significa que aquele elemento deve ser adicionado no array que está sendo gerado.
//Se a função retornar falso, quer dizer que aquele elemento não será adicionado no array que é a resposta dessa função. 
//Aqui eu tenho um array notas. Depois que for chamada a função filter o resultado dela vai ser um outro array. O que vai dizer se o elemento vai entrar ou não no array final
// é se o resultado dessa função callback é verdadeiro ou falso.
//Essa função filter não altera o array original. O Array notas permanece do mesmo jeito que ele é.
//Más o array que é respondido pela função filter, esse sim vai ter um conjunto de notas, que seria um sub-array.
//se todas as chamadas da função callback forem verdadeiras então o array será o mesmo, mas caso tenha algum falso o novo array será diferente com base no que foi filtrado,
//uma vez que os elementos falsos não entraram no array resultante.
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
}) //passando uma função callback dentro do filter

console.log(notasBaixas2)

const notasBaixas3 = notas.filter(nota => nota < 7)
 //passando uma função arrow - callback dentro do filter
 //Essa callback recebe como parametro o elemento atual (nota), ela retorna como resposta um verdadeiro ou falso (nota < 7)
 //e ela é chamada (filter()) para cada um elemento para saber se vai está presente ou não no array que é dado como resposta da função filter. 

console.log(notasBaixas3)

const notasMenorQue7 = nota => nota < 7
const notasBaixas4 = notas.filter(notasMenorQue7)

console.log(notasBaixas4)


