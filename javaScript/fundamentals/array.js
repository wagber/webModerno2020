// ARRAY é uma estrutura unidirecional, onde posso agrupar várias variáveis respectivamente com seus identificadores, são multiplos valores de uma forma linear. É um elemento atrás do outro.
//Essa extrutura é uma estrutura indexado, acessando cada elemento de um array a partir de um número em sua posição chamado de indice.
// Em JavaScript a extrutura do array é heterogênio [pode conter vários tipos diferentes como string, inteiros, boleanos] e não possue tamanho fixo, ou seja, pode crescer ou diminuir de acordo com sua necessidade.

const valores = [7.7, 8.9, 6.3, 9.2] //declaração de forma literal. A vírgula é o separador dos elementos. Este array possue 4 posições.
console.log(valores[0], valores[3])
console.log(valores[4]) // Este indice não está presente nesse array.
//Outras linguágens daria erro, mas em JS não gera um erro, mas na lógica sim e pode gerar um efeito colateral.
//O JS permite isso mas não é indicado

//Adicionando mais um elemento ao array, más podemos usar o PUSH
valores[4] = 10
console.log(valores)

//O JS aceita colocar um indice bem superior
valores[10] = 30 //o JS coloca entre os indices não declarados tal informação: <5 empty items>
console.log(valores)

//acessando ou conhecendo a quantidade ou tamanho (respectivamente) de um array com o length
console.log(valores.length) //o length diz quantos elementos ha em um ARRAY
//Observe que o tamanho do array é de 11 posições, contudo só ha 6 posições visíveis
//pois as outra 5 são dos número não declarados mas que está relacionada ao indice 10 que colocamos no exemplo.
//Logo temos que ter atenção ao adicionar indices em um array.

// Usando o push adicionamos um novo elementos ao final do array.
valores.push({id: 3}, false, null, 'teste')
console.log(valores)
//No exemplo acima temos dentro do array um objeto, um boolean, um null e uma strig.
//O JS aceita tudo isso, contudo não é uma boa prática assim fazer. É indicado ter um
//array com cada tipo de dados homogênios.

//Usando o pop tiramos um elemento do final do array.
console.log(valores.pop())
//Também possu usar o DELETE
delete valores[0] //o Delete funciona no contexto de objeto para tirar um atributo de dentro de um objeto
console.log(valores)

//Em JS um ARRAY é do tipo OBJECT
console.log(typeof valores)

//Array é dinamico, indexada e heterogênia mesmo não sendo uma boa prática.
