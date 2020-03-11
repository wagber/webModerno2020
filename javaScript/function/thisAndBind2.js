function Pessoa(){
    this.idade = 0

    const self = this //ao fazer isso eu posso substituir o this dentro de setInterval para driblar erros quanto ao uso com o this.
    //Aqui a constante self está sendo executada dentro da função pessoa
    //Isso significa que this é o objeto que quero apontar, que é a instancia atual que está executando esse código (new Pessoa)
     

    setInterval(function(){
        //this.idade++
        self.idade++ //Acessando essa constante dentro da função significa que não não importa que esteja chamando a função, pois o self
        //sempre vai apontar para pessoa
        //console.log(this.idade)
        console.log(self.idade)
        //setInterval() dispara uma outra função a partir de
    // um determinado intervalor que foi passado.
    //Dentro dos parenteses do setInterval posso passar uma função anonima
    }/*.bind(this)*/, 1000) //Amarrando o this do objeto a chamada dessa função
    //O setInterval além de receber a função ele ainda recebe um
    //intervalo representa que a cada x milissegundos essa função vai ser disparada novamente.    
    //setInterval() dispara uma outra função a partir de
    // um determinado intervalor que foi passado.
    //Dentro dos parenteses do setInterval posso passar uma função anonima
}
//Para que tudo funcione temos que instanciar a partir da função Pessoa
//para criar um objeto.

new Pessoa
