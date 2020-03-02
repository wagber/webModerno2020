//Pelo fato do JS não ter um operador de exponenciação podemos usar o objeto Math
// Aqui vamos usar o objeto Math para calcular uma circunferencia.

const raio = 5.6
const area = Math.PI * Math.pow(raio, 2) //raio , 2 = raio elevado ao quadrado

console.log(area)
console.log(area.toFixed(2)) // Posso add o toFixed
console.log(typeof Math)
