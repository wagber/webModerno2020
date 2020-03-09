//Começando com o while e uma quantidade determinada de repetições.

let contador = 1 //um contador - que é a variável que vai controlar o laço
while(contador <= 10){ //expressão
        console.log(`contador = ${contador}`)
        contador++ //incremento
}

//Agora convertendo o exemplo while em for.

for(let i = 1; i <= 10; i++){
    console.log(`contador = ${i}`)
}

//Percorrendo um array de notas com o For
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(let i=0; i < notas.length; i++){ // O i sempre será menor que o tamanho do Array. 
    //se o array tivar 5 posições [0,1,2,3,4], o i vai ter no máximo 4 elementos, porque ele
    //começa a contar do 0 até o 4 para um array de 5 posições.
    console.log(`Notas ${notas[i]}`) //ATENÇÃO notas[i]
}