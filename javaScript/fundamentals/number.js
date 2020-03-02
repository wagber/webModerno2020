const peso1 = 1.0
const peso2 = Number('2.1')
console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) //testando se o valor de peso1 é inteiro ou não
//isInteger verifica se um valor é inteiro ou não dizendo se é verdadeiro ou falso
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
//toFixed(número de casas que quero que apresente)
//Para reduzir ou ampliar o número de casas númericas após a vírgula
//usamos o toFixed()

console.log(media.toString())
//Para converter um valor numérico em String usamos toString
//Contudo para valores numéricos o valor é constante e o retorno é o valor com todas as casas decimais
console.log(media.toString(2))
//converter para binário
console.log(typeof media)
console.log(typeof Number)

//----------------------------------------------------------------------------------------//

//ALGUNS CUIDADOS PARA SEREM CONSIDERADOS

console.log(7 / 0.00001) //Quanto mais o número de zeros, maior será o número
console.log(7 / 0)
//Operação do tipo Infinity
console.log("10" / 2) // O JS considera o conteúdo interno da string e verifica se dá para converter para valor numérico.
console.log("10,2" / 2)
console.log("show!" / 2) // Isso não funciona
console.log(0.1 + 0.7) // Por causa da especificação do tipo de operação de ponto flutuante que o JS suporta, essa operação não terá uma precisão
// Essa especificação é mais rápida, contudo não tão precisa. Se fosse a especificação precisa a operação seria mais lenta.

//console.log(10.toString()) // Error Unexpected token
console.log((10.345).toFixed(2)) // É possível chamar o literal dentro dos parenteses
