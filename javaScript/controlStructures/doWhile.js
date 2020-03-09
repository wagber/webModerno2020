//No Do While é garantigo que pelo menos uma única vez a repetição do laço aconteça.

function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1 //Mesmo que a condição seja -1, no Do While a repetição
//irá acontecer pelo menos uma única vez.

//No Do While o do vem antes do bloco de código {} e o while após o bloco de código
//Seu fluxo de repetição independente de verdadeiro ou falso agora terá ao menos
//uma única vez de execção.
//do = faz - faça ao menos uma vez
//while = enquanto for verdadeiro faça, caso contrário saia do laço
do{ 
    opcao =getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)    
}while (opcao != -1) //o teste só aconcerá após executar a primeira repetição. 

console.log('Fim!')