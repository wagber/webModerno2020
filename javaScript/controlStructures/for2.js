//For In - percorre os atributos de uma extrutura.
//É possível fazer um for in em cima de um objeto como também em cima um array.
//Existe outras formas mais interessantes e até melhores de percorrer um array usando ao invés do for e do for in,
//o forEach, o Map, o reduce, o filter.
//Só uma observação: o forEach, o Map, o reduce, o filter não são estruturas de controle.

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

//O FOR IN não vai dar as notas em si, ele dará os indices de cada um dos elementos. É como se fosse os atributos do array.
//Como um array é uma extrutura indexida, então os atributos de um arrya é o primeiro elemento de um array = 0,
//o segundo elemento de um array = 1, então ele vai percorrer pelos indices e não pelos valores.

//for (i in notas) forma tradicional sem o let. Forma moderna e mais segura para manter o escopo é usando o LET.
for (let i in notas){ //para cada elemento do array nota, ele vai me retornar um indice i
    console.log(i, notas[i])
    //console.log(`${i} = ${notas[i]}`) //Forma mais organizada
}

//Da mesma forma que é possível pegar os atributos de um array que são seus indices
//também é possível pegar os atributos de um objeto.

//Para objetos o FOR IN faz mais sentido do que para array.
const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for(let atributo in pessoa){ //Uma boa prática é usar o let para atributo para que o mesmo mantenha-se dentro do escopo.
    console.log(`${atributo} = ${pessoa[atributo]}`)
    //console.log(atributo, pessoa[atributo]) //Desta forma também é possivel chamar, contudo o resultado fica deserganizado
}
