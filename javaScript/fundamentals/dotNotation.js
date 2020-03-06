console.log(typeof console) //só por curiosidade
//Math é um object em JS
console.log(typeof Math) //object
console.log(Math.ceil(6.1)) //ceil faz o arredondamento pra cima

const obj1 = {} //criando um objeto
obj1.nome = 'Bola' //criando dinamicamente um atributo usamos a notação PONTO '.'
//mesmo que o atributo não esteja no objeto nome do objeto + . + nome do atributo
//Também poderia ser criado usando os colchetes

/*obj1['nome'] = 'Bola2' //- O JS até permite você colocar os atributos com espaço, mas não pe uma boa prática.
//Por isso é uma boa prática usar a notação ponto '.'
console.log(obj1)//{ nome: 'Bola2' }*/
//Observe que o primeiro atributo criado não é mais impresso, pois ainda que ambos estejam corretos
//nesse caso o JS irá considerar na sequencia o ultimo criado, ou seja, o mais próximo da chamada,
//sobrescrevendo o anterior. Ambas as expressões são equivalentes.
console.log(obj1.nome) //{ nome: 'Bola' } - Bola

function Obj(nome){
    this.nome = nome //o this é uma palavra reservada que ao ser chamada juntamente com a notação, no caso nome,
    //fica o nome associiado ao objeto criado a partir desta função. Já vimos que função funciona como uma classe em OO. E com isso é
    //possível instaciar uma função.
    //Ao usar this.nome = nome estou querendo dizer que estarei recebendo o atributo nome por parametro, atribuindo a this.nome, onde
    //o mesmo ficará visível para quem instaciar um objeto, no caso do tipo Obj.
    //A grosso modo ficará PÚBLICO.
    //Posso também criar aqui dentro outras funções e torná-las públicas usando o this.nome
    this.exec = function(){
        console.log('Exec...')
    }
}
//Caso aqui nesta função fosse usando o VAR ficaria dentro do escopo da função, contudo, por usar o this juntamente com a notação ponto, isso não ocorreria e o VAR ficaria público também.

const obj2 = new Obj('Cadeira')//Aqui preciso passar um parametro porque se não ficará undefined, más não dará erro.
//Neste exemplo a string 'Cadeira' será atribuida para this.nome, que por sua vez o obj2 vai ter um atributo chamado nome,
//que ficará visível, PÚBLICO, porque foi associiado ao this.
const obj3 = new Obj('Mesa')

console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()
//Com a notação ponto você pode acessar atributos, pode acessar eventualmente algum tipo de funções, ou qualquer outra membro que seja possível acessar.