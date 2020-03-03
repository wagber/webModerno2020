console.log('---false------------')
let isAtivo = false
console.log(isAtivo)

console.log('---true------------')
isAtivo = true
console.log(isAtivo)

// Uma boa prática é sempre usar const para constantes, contudo se
//realmente você precisa alterar o valor de uma
// variável, então usar sempre o let e não o var.
console.log('---1------------')
isAtivo = 1
console.log(isAtivo) // Ao usar a negação podemos tornar um valor boolean
// ! negação
// !! não negação tornando em verdadeiro pois mata o efeito da primeira negação
console.log('---!isAtivo------------')
console.log(!isAtivo) //nesse contexto a negação do isAtivo diz que o número 1 não
// é verdadeiro. Más ele é, logo a resposta será falsa
console.log('---!!isAtivo------------')
console.log(!!isAtivo) //agora nesse contexto a segunda negação anula e primeiro
// e confirma que o número 1 é verdadeiro
console.log('---!true------------')
console.log(!true) //negação - A pergunta seria assim: não é verdade - A resposta é:
// falso, pois afirmei com o true que é versade, contudo a negação tenta anular.
console.log('---!!true------------')
console.log(!!true) //não negação - De mesmo modo a segunda negação anula a
//primeira que tenta dizer que o true não é verdade, logo seria assim: não é
// verdade que o true é falso. - Logo é verdadeiro que true é verdade
console.log('---!false------------')
console.log(!false) //negação
console.log('---!!false------------')
console.log(!!false) //não negação

console.log('---!3------------')
console.log(!3)

//Números verdadeiros
console.log('Os verdadeiros')

console.log('---!!3---------------')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!Infinity)
console.log(!!(isAtivo = true))
console.log(!!(isAtivo = Infinity))

console.log('Os falsos') //todos que resolvem pra falso
console.log(!0) //prova que o zero é falso
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false)) // Ao fazer uma atribuição e o estiver
//do lado direito da atribuição for um valor que retorna falso,
//que resolve para falso, o resultado da atribuição toda será falsa ou verdadeira
//pois depende do valor que é atribuído e não se a operação deu ou não certo.

//Expressão lógica com || OU
console.log('Expressão lógica com || OU') //Aqui irá retornar o único valor verdadeiro
// ou o primeiro que encontrar.
console.log(!!('' || null || 0 || ' '))
console.log(!!('' || null || 0 || 'epa'))
console.log(!!('' || null || 0 || 123))
console.log(!!('' || null || 0 || ' '))
console.log(!!('' || null || 0 || 'epa' || 123))

let nome = ''
console.log(nome || 'Desconhecido') // o primeiro nome deu falso e retorna a segunda opção
let nome1 = 'Lucas'
console.log(nome1 || 'Desconhecido') //caso a primeiro opção não seja válida use a segunda opção
//como valor padrão

//OBS - Todos os números inteiros são verdadeiros com exeção do zero.
//A estrutura de controle if irá requerer o contexto de verdadeiro ou falso