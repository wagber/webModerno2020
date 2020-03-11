//Antes do ES6
//Estratégia 1 para gerar valor padrão
function soma1(a, b, c){
    a = a || 1 //se a for um valor que retorne falso ele irá retornar por padrão o segundo operando dessa operação ou.
    b = b || 1 //Usando o operador ou '||' podemos ter essa estratégia de trazer um valor padrão para uma variável que resolveu para um valor falso.
    c = c || 1 //Contudo esse formato pode trazer algumas efeitos colaterais.
    return a + b + c //Aqui não tem perigo de ser null ou undefined, más pode até ser um valor diferente de um inteiro ou numérico. 
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))

//Estratégia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c){
    a = a !== undefined ? a : 1 //Estratágia 1 -> Usando uma condição ternária. se a for diferente de undefined o a vai receber a, mas se não tiver passado o valor de a irá receber 1 por padrão
    b = 1 in arguments ? b : 1 //Estratégia 2 -> Existe o segundo argumento dentro do que foi passado para função soma2? Já que o primeiro argumento é de incide zero e o segundo é de indice 1 então pergunto.
    //Dentro de arguments existe o indice 1? Se existe pegue o valor de b, senão pegue o valor 1. Observe que se essa estratégia fosse usada para variável a o indice seria o zero,
    //logo ficaria assim: b = 0 in arguments ? b : 1. Ou seja, dependendo de onde queremos colocar a estratégia devemos considerar ajustar o indice. 
    c = isNaN(c) ? 1 : c // o isNaN determina se o valor é NaN ou não, ou seja, Se c for isNaN retorne 1, se não retorne C. O isNaN verifica se um operação aritimética tem como valores: undefined ou Null.
    //De todas as 3 estratégias essa ultima é a melhor e mais segura.
    //Fica como lembrete que existe o Number isNaN no ES6
    return a + b + c
      
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

//Usando o valor padrão do ES6

function soma3(a = 1, b = 1, c = 1){ //Código extremamente claro para recebimento de valores padrão.
    return a + b + c
    //Atenção: O valor padrão serve para ser colocado em parametros de uma função, más não se tiver sido criada uma variável dentro de uma função.
    //Nesse caso se foi criada uma variável dentro de uma função e quer ter um valor padrão, normalmente usamos a estrageia usada nas primeiras linhas
    //destes exemplos -> a = a || 1, b = b || 1, c = c || 1 
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))
