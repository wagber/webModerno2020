const funcs = []

for(let i = 0; i<10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()
funcs[9]()
//Esta operação agora possue uma "memória" para entender que a chamada usando o indice
//a mesma irá entender e trazer a resposta correta.
//Um dos conceitos envolvidos nesse algoritimo é o conceito de closures
//Um closure (fechamento) é uma função que se "lembra" do ambiente — ou escopo léxico — em que ela foi criada.