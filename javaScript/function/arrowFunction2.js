//This dentro de uma função arrow é um this fixo, baseado no contexto no qual
// a função foi escrita. O fato da função está sendo chamada de locais
// diferentes não influencia no valor do this. 

function Pessoa(){
    this.idade = 0

    setInterval(() =>{
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa