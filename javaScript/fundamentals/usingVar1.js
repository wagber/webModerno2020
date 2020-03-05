//Escopo é o local onde a variável é visivel.

/*//EX. 1 - Usando o VAR
{
    {
        {
            {
                var sera1 = 'Ex.1 - Será?'
            }
        }
    }
}
console.log(sera1) //EX. 1 - Será?
//JS permite que o VAR ainda dentro do seu escopo ela seja vista pelo console.log, ainda que o mesmo esteja fora do escopo de var.
//Logo VAR é vista globalmente, o que dá uma grande margem para erros em seu sistema.
//Como boa prática não é aconselhavel usar o VAR para declaração de variável */

/*//Ex. 2 - Usando o LET
{
    {
        {
            {
                let sera2 = 'Ex.2 - Será?'
            }
        }
    }
}
console.log(sera2) // Error: sera2 is not defined */

//JS não permite que o LET seja visto fora do seu escopo, ou seja, o console.log não consegui vê e assim imprimir pois é davo como
//Error: sera2 is not defined

//Ex. 3 - Usando o LET

{
    {
        {
            {
                let sera3 = 'Ex.3 - Será?'
                console.log(sera3) //Ex.3 - Será
            }
        }
    }
}

//Quando o escopo é obedecido nete que o LET agora é visto pelo console.log, contudo a responsabilidade não recai sobre o let,
//mas sobre o console.lo que deveria atender ao escopo onde o let se faz presente.

/*//Ex. 4 - Usando o CONST
{
    {
        {
            {
                const sera4 = 'Ex.4 - Será?'
            }
        }
    }
}
console.log(sera4) //Error: sera4 is not defined

//Tanto para o LET quanto para o CONST é obrigatório obedecer o escopo para que aquele que o invoca seja capaz de visualizá-lo */

//Ex. 5 - Usando o CONST

{
    {
        {
            {
                let sera5 = 'Ex.5 - Será?'
                console.log(sera5) //Ex.5 - Será?
            }
        }
    }
}

//Do mesmo modo que o LET, no CONST, quando o escopo é obedecido ele se torna visível pelo console.log, contudo a responsabilidade não recai sobre o const,
//mas sobre o console.lo que deveria atender ao escopo onde o const se faz presente.

//Uma variável ou o ato de invocar algo deve SEMPRE obedecer o escopo, caso contrário erros existirão.

//Usando função
//Ex. 6 - usando VAR, LET ou CONST dentro de uma função obedecendo o escopo
function teste(){
    var local1 = 123
    let local2 = 456
    const local3 = 789
    console.log(local1, local2, local3)
}
teste() // 123
//Neste exemplo a variável é visível pelo escopo que o invoca.

//Ex. 7 - usando VAR, LET ou CONST dentro de uma função desobedecendo o escopo
/*function teste(){
    var local1 = 123
    let local2 = 456
    const local3 = 789
}
teste()
console.log(local1, local2, local3)*/ //Error: local is not defined

//Observe - Error: local is not defined, ou seja, a variável local não está definida fora do escopo.

//Problemas do VAR
//Facilmente o VAR é visto globalmente (objeto window - no browser) quando definida fora de uma função
//Facilmente a variável VAR também é sobrescrita, causando uma mutação em seu código

//BOA PRÁTICA
//É importante fugir do escopo global, porque quando se cria uma variável em um escopo global facilmente ela poderá ser
//sobrescrita, gerando bugs em seu sistema. Ainda que seja visto como uma vantagem por ser possível de usá-la em todo
//o seu sistema, não se engane, ISSO NÃO É UMA VANTAGEM, isso é um sério PROBLEMA.