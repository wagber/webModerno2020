const pessoa = {
    saudacao: 'Bom dia', //atributo
    falar(){ //Uma função dentro de um objeto chamamos de método
        console.log(this.saudacao)
    }
}

pessoa.falar() //Chamando o método
//Armazenando a função falar em uma variável

const falar = pessoa.falar //neste exato minuto ao armazenar pessoa.falar em
//uma constante estou colocando o método falar em um outro contexto que não
//mais o contexto do objeto pessoa.
falar() //Saudação está apontando para um this diferente que não é mais o objeto pessoa
//e esse objeto que está sendo apontado a partir dessa função falar() não tem saudação dentro dele
//e o resultado deu undefined, ou seja, temos aqui um conflito entre paradigmas funcional e OO
//Porque o fato de está apontando essa função para uma variável, nesse contexto chamando aqui direto
//não estou chamando a função falar a partir do contexto pessoa. Falar() chamado diretamentene dentro de uma função do node
//ele está em outro contexto e por isso deu um problema no this.
//falar() está apontando para o objeto errado. Não aponta mais para objeto pessoa

//Usando o Bind para resolver o problema do this
const falarDePessoa = pessoa.falar.bind(pessoa) //Associada a essa função falar()
//existe uma função ter outras funções por padrão associada, e uma delas é o bind()
//O bind você passa um objeto no qual você quer que seja resolvido o this.
//Então o this vai ser a contante pessoa.
//Ao passar pessoa como argumento pra função bind significa que sempre a partir dessa função
//o this será resolvido para pessoa.
falarDePessoa() //Bom dia -> agora voltou a apontar para o objeto certo
//O resultado de const falarDePessoa = pessoa.falar.bind(pessoa) está amarrado ao this com o objeto pessoa.
