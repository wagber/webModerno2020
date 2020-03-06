const funcs = []

for (var i =0; i<10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]() //chamando a função 'funcs[]' e invocando usando os '()' -> funcs[]()
funcs[8]()

//Pelo fato da variável não ter escopo de bloco, quando executamos o resultado será 10 para qualquer chamada que se fizer. 
//Isso é um problema histórico do JS, que quando ao chamar uma variável que foi
//declarada usando o VAR e o mesmo não possui escopo de bloco, SEMPRE
//que for chamada a variável dentro do contexto acima citado, no caso
//uma função, o resultado será o mesmo que o declarado, no caso o valor 10.