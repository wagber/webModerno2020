//Switch é uma seleção multipla;
//Switch não é uma expressão relacional que retorna verdadeiro ou falso
//Por padrão usa-se o break e se não colocar uma vez que ele entra no case
//ele executa todos os casos.
//Posso colocar o default em qualquer posição, contudo
//preciso colocar o break logo após o default caso eu coloque o default em outra posição

const imprimirResultado = function(nota){
    switch (Math.floor(nota)){
        case 10: //JS aceita o case um abaixo do outro
        case 9:
            console.log('Quadro de honra')
            break //Nunca esquecer do kreak
        case 8: case 7: { // O case aceita bloco de código, contudo não é usual nem uma boa prática
            console.log('Aprovado')
            break
        }
        case 6: case 5: case 4: //Não é suportado ',' vírgula entre os números retirando o case
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0: //É permitido usar vários case a uma única sentença de código, no caso -> console.log('Reprovado')
        //Isso é possível porque após cada case está vazio e não há um break para tirar a sequencia do mesmo. Se tivesse um break logo após -> case 3: break
        //o case 2: não seria executado. Más como não há um break quando chega no case 3: ele verifica que após ele está vazio e pula para o case 2:,
        //estanco vazio cai no case 1:, vazio cai no case 0: 
            console.log('Reprovado')
            break
        default: //Aqui não requer o break, más caso mude de posição ele deve ser seguido pelo break
            console.log('Nota inválida')
    }
    console.log('Fim!')
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(-11)
