//Operadores unários

let num1 = 1
let num2 = 2

num1++ //acrescenta uma unidade para num1
console.log(num1)
--num1 //A forma pré fixed tem uma precedencia maior que a pós fixed
console.log(num1)

console.log(++num1 === num2--) //true
//Neste exemplo num1 = 1, quando o operador vem antes (pré fixed)
//primeiro se atribui o valor 1 ao operando, ficando num1 = 2.
//Após o num1 ter um novo valor é feita a comparação (===). Nessa hora num2 = 2.
//Após a comparação de num1 === num2 ser verdadeira a operação continua com o pós fixed.
//Nessa hora o num2 que é igual a 2 -> num2 =2 passa a valer 1.

//Obs - Mantenha seu código simples e limpo, pois é uma boa prática