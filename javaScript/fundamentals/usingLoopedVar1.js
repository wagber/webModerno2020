//Usando VAR dentro de um contexto de LOOP.
//É importante ressaltar que o Var não é suportado dentro de bloco

//Laço FOR
//O for é dividido em 3 poartes
//1º declaração de uma variável (var i = 0;)
//2º a condição utilizada para repetição do bloco (... i < 10;)
//3º o incremento (i++)
//Todo o FOR tem o ';' (ponto e vírgula) como separador
//e é fechado por '()' (parenteses), seguido de '{}' chaves abrinco o bloco de código

for(var i = 0; i < 10; i++){
    console.log(i) //1, 2, 3, 4, 5, 6, 7, 8, 9
}
//quando oresutado é identificado como falso o loop termina e sai do laço

console.log('i = ',i) // i = 10

//Como 'i' foi declarado usando o VAR e o VAR não possuir excopo de bloco, o 'i' está visível
//fora do laço FOR. Mesmo que aparentemente ele esteja dentro do escopo do FOR
//mas a realidade é que não está. Logo o 'i' pode ser visível e impresso fora do laço FOR.
//Esse é um dos pontos negativos de se usar o VAR.

//Uma observação interessante. O laço FOR faz a análise das condições dentro do bloco.
//Ao finalizar a condição do laço e identificado que a condição seguinte é falsa o mesmo fianliza
//laço e a condição falsa é automaticamente jogada para fora do mesmo. 