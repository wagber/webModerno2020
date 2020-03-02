// Aspas duplas - Se começar com duplas terminar com duplas
// Aspas simples - Se começar com simples termina com simples
// ES6 - Crase - Backtick - Tamplate String

const escola = "Cod3r"
// charAt(retorna a letra na posição do indice que quero que retorne)
console.log(escola.charAt(4))
console.log(escola.charAt(5)) // Retornou um valor vazio
console.log(escola.charCodeAt(3)) // charCodeAt retorna o valor da tabela Ask / Unicode
console.log(escola.indexOf('3'))// com o indexOf() podemos descobrir em qual indice um digito existe dentro de uma palavra.
console.log(escola.substring(1)) // Nesse caso um parametro é uma declaração de onde não deve começar, apenas um valor o retorno será de todos os indices com exceção do primeiro indice - no caso indice zero.
console.log(escola.substring(0, 3)) // Nesse caso dois parametros declara os indices, passando dois valores o primeiro diz de onde o retorno irá começar (incluindo o primeiro indice) indo até o ultimo informado, contudo não retorna o ultimo, más o que antecede, no caso o indice dois.
console.log('Escola '.concat(escola).concat("!")) // Concatenando literal e variável
// Uma literal é um valor direto que você usa, é um dado sem está armazenado em uma variável.
console.log('Escola '+ escola +"!") // Usando o sinal + para concatenar
console.log(escola.replace(3, 'e')) // O replace substitui um valor por outro
console.log(escola.replace(/\d/, 'e')) //Regex
// /\d/ - Substituir todos os digitos
// /\w/g - Substituir todas as letras e digitos - g é de global
// Através do replace ou do match posso pegar todos os e-mails contidos em um texto
console.log('Ana,Maria,Pedro'.split(',')) // Separador ( ',' ) - Alterar uma string separada por vírgula e converter para Array usando split
console.log('Ana,Maria,Pedro'.split(/,/)) // Regex(/,/)
console.log('Ana,Maria,Pedro'.split(/./))// Regex(/./)
