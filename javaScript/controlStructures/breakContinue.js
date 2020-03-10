const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let x in nums){
    if (x == 5) break //Apesar do break estar na mesma linha, o que poderia ter aqui um bloco com break dentro.
    //O Break não vai agir sobre um bloco IF. O break age sobre blocos mais próximo dele, que sejam do tipo for, do tipo while, do tipo switch.
    //Aqui o bloco mais próximo dele é o bloco associado ao for - for(x in nums). Então o break irá desviar o fluxo da aplicação para fora do bloco.
    //Não para fora do bloco if porque ele não age sobre o IF, mas para fora do bloco mais próximo dele, que no caso é o for.
    console.log(`${x} = ${nums[x]}`)
    
    //O break vai interromper o laço e sair para próxima sentença de código fora do laço corrente. Fora do laço que ele está relacionado.
    //O Break age sobre as estruturas de repetição For e While como também na estrutura condicional Switch.
}

for(let y in nums){
    if (y == 5) {
        continue //O continue não age sobre o if, más age sobre o for e o while.
    }
    console.log(`${y} = ${nums[y]}`)

    //O continue age interrompendo a execução atual, no caso pulando o indice y == 5 e continua para repetição seguinte, no caso continua do indice 6.

}

//A duas palavras reservados break e continue causam desvio de fluxo. O break causa um desvio de fluxo para fora do laço,
//enquanto o continue interrompe o laço corrente e vai para a próxima repetição.
//É importante ressaltar que o continue só faz sentido para estruturas de repetição.

//Criando um nome RÓTULO para o for (a in nums) - Atenção: Este exemplo é apenas para exemplificar. Nunca use, pois não é uma boa prática.
//nome do rótulo - externo
externo: 
for (a in nums){
    for (b in nums){
        if(a == 2 && b == 3) break externo //O break antes desse rótulo iria agir sobre o for mais interno. Agora com o rótulo ele irá agira apenas no for mais externo.
        console.log(`Par = ${a},${b}`) //os pares 2,3 não serão impressos porque o break externo não permitirá e irá sair do laço.
    }
}
console.log('Fím!')