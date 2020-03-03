const nome = 'Rebeca'
const concat = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`
// `` backtick é a cráse dupla, chamamos de template string
// usamos o dolar $ com chaves {} para não precisar usar o sinal de + ou a palavra reservada concat
//para concatenar palavras e ou dígitos
console.log(concat, template)

//expressões...
console.log(`1 + 1 = ${1 + 1}`)

//função mínima com arrow (=>)
const up = texto => texto.toUpperCase() //O toUpperCase converte todas as letras de minúsculo para maiúsculo
console.log(`Ei... ${up('cuidado')}!`)
