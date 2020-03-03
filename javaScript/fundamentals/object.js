// JavaScript é MULTIPARADIGMA, o que significa que
//podemos programar procedural, orientada a objetos,
//funcional.

//JSON - JavaScript Object Notation (Notação de Objeto JavaScript)
//Más atenção: Um OBJETO JS não é a mesma coisa que JSON
//JSON é um formato textual

//Vamos tratar aqui de um Notação literal de OBJETOS e não de JSON

//Um por de chaves representa um objeto de forma literal

const prod1 = {}
prod1.nome = 'Celular' //o nome foi criada dinamicamente dentro de objeto
//Um objeto em JS é uma coleção de pares CHAVE} VALOR. 
//Nome do atributo, ou seja, um identificador e passamos um valor para ele,
//podendo ser um texto, número, bollean, uma função ou até mesmo um outro objeto.
// CHAVE é o identificador (no caso do exemplo chamado NOME) e o VALOR(nesse caso chamado 'Celular') é o que é atribuido
//ao identificador, no caso chamado CHAVE.
prod1.preco = 4999.90

console.log(prod1) //Chamamos de chave porque um identificador deve ser único
//{CHAVE -- VALOR  , CHAVE -- VALOR}
//{nome:  'Celular', preco:   4999.9 }

//Podemos usar o nome de um identificador com espaço má devemos evitar
//'Desconto Legal' - observe o espaço entre desconto e legal, contudo não é uma boa prática
prod1['Desconto Legal'] = 0.40 // Observe que nesta forma usamos o colchete.
console.log(prod1)

const prod2 = { //Posso criar um objeto neste formato que dá o mesmo resultado
    nome: 'Camisa Polo', //colocando dentro da própria declaração do objeto
    preco: 79.90,
    obj: { //Este obj é único dentro de prod2
        blabla: 1,
        obj: { //este obj é único dentro de obj
            blabla: 2
        }

    }
}
prod2['Desconto Legal'] = 0.40
console.log(prod2)

//Em JS um objeto pode crescer de forma dinâmica, ou seja, adicionar dinamicamente novos atributos

//ATENÇÃO - A notação literal de objetos não é a mesma coisa que JSON

//Exemplo de JSON
//Transformando os exemplos superiores em JSON
//Json não é a mesma coisa que um objeto. Json é um formato TEXTUAL
//Os atributos de JSON são delimitados por aspas duplas ""

'{"nome": "Camisa Polo", "preco": 79.90}' //Isso é um JSON

//Validador de JSON - https://jsonlint.com/ para conferir