//O While é usado normalmente para quando você tem uma quantidade indeterminada de repetições.
//O While é focado em repetições.
//Posso usar o While também para uma determinado quantidade de repetições, contudo o mais indicado seria o for.

//É importante ter um senso crírico para usar a estrutura de controle
//que mais se adeque a sua necessidade.

//QUANDO USAR?

//Quantidade indeterminada de vezes - while
//Quantidade determinada de vezes - For
//Para seleções multiplas simples - Switch
//Para seleções multiplas complexas - If Else

//Criando uma função que retorna um inteiro aleatório
function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    //Entendendo o Math.random() - o Random gera um valor entre 0 e 1
    //Nesse algoritmo o valor gerado pelo radom é multiplicado pela diferença
    //entre o max e o mim para dar um hanger maior. E para conseguir ficar
    //dentro do intervalo desejado é preciso deslocar o valor obtido somando pelo min,
    //para que possa chegar do min até o max desejado.
    //Ex1. Max 10 - Min 5: random = 0 -> 0 * (10 - 5 = 5) + 5  => Resultado 5
    //Ex2. Max 10 - Min 5: random = 1 -> 1 * (10 - 5 = 5) + 5  => Resultado 10
    //Qualquer outro valor entre 0 e 1 fará com que o calculo fique dentro do intervalo.
    //Ex3. Max 10 - Min 5: random = 0.45 -> 0.45 * (10 - 5 = 5) + 5  => Resultado 7.25
    return Math.floor(valor) // Com o arredondamento para menor por causa do floor o valor
    //do exemplo acima será 7
    //Só lembrando que os valores dependem do Max e do Mim informados.

}

let opcao = 0 //Na lógica para o while funcionar é preciso declarar esa variável antes do while
//para o código não quebrar e também para poder receber a função criada.

//Assim como no IF o While precisa de uma expressão que retorne verdadeiro ou falso
//Isso quer dizer que, enquanto a condição for verdadeira continue efetuando o laço
//até que a condição seja falsa.

//Se a expressão comecasse com -1 já se daria como falsa e nunca a condição entraria no laço.

while (opcao != -1){
    opcao = getInteiroAleatorioEntre (-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}
console.log('Fim!')