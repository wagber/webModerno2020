//Estrutura de controle IF

function soBoaNoticia(nota){
    if(nota >= 7){ //Se esta expressão (nota >= 7) for verdadeira esse bloco será executado, senão o bloco associado ao if não será chamado.
        console.log('Aprovado com '+ nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6)

function seForVerdadeEuFalo(valor){
    if(valor){ //O valor aqui independe do tipo, podendo ser um array, um objeto, uma string, Number. Sempre é esperado um valor que convertido seja verdadeiro
        console.log('E verdade... '+ valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1,2])
seForVerdadeEuFalo({})
