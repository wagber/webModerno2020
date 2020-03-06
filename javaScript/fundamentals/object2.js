console.log(typeof Object) //aqui é uma função
console.log(typeof new Object) //aqui eu tenho um objeto criado a partir de uma função
//neste exemplo foi omitido os () de object -> ...new objetc()
//Fazendo um paralelo com Java, esta ação é como se estivesse chamando um construtor ao instanciar com NEW


const Cliente = function(){}
console.log(typeof Cliente)
console.log(typeof new Cliente()) //Aqui usei os parenteses apenas para mostrar que o efeito é o mesmo do exemplo acima

class Produto{} //ES6
console.log(typeof Produto) //função
//uma class chamada dessa maneiro é o que poderíamos chamar de Syntactic sugar
//que é uma naneira que ao invés de escrever da forma usual, eles usa uma sintaxe
//melhor para algo existente / Você pode fazer exatamente o mesmo escrevendo algo
// diferente na versão antiga.
console.log(typeof new Produto) //objeto
//Da mesma forma como posso instaciar uma função, ele pode me retornar um objeto a partir da instancia dessa função

//A forma de criar objetos em JavaScript é a partir de função e ter suas própria variáveis
//que pertencem aquela instancia criada a partir do new.
//Se analisarmos uma função também exerce o papel de uma classe, que é definir o molde de uma estrutura, definir suas funções e variáveis,
//e podemos ficar instanciando quantas vezes quisermos a partir dessa função ou a partir da classe usando os detalhes de sitaxe introduzida no ES6.

//Posso instanciar um Objeto a partir de uma função da própria API do JS, como de uma função definida/criada por mim, como de uma classe como os exemplos acima, usando o construtor NEW
//como tambem posso instanciar de forma literal conforme o exemplo abaixo

//Em JAVA se cria a classe e instancia um objeto a partir da classe
//Em JavaScript esse papel é da função. Por isso existe o termo função construtora.
casa = {
    numero: 1,
    end: 'abc',
    cep: '60000-00'
}
console.log(typeof casa)
