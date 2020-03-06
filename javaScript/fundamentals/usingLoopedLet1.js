for(let i=0;i<10;i++){
    console.log(i)
}
//console.log(i) //i is not defined

//Observe que o 'i' foi declarado usando o LET, que por sua vez possui escopo de bloco
//logo 'i' não pode ser visto fora do escopo ao qual foi atribuido. Por isso a razão
//de ter dado erro ao tentar visualizar e imprimir o 'i' fora do seu escopo.

//Observe que em um contexto de escopo o laço não joga para fora a condição que foi encontrada
//como falsa, diferentemente do VAR o LET não permite isso.