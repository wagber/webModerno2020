//Tratamento de Erro (Try / Catch / Throw)

//Para vê os erros em ação basta descomentar o throw que deseja e
//o erro contido no final dos exemplos: const obj = {nome: 'Roberta'}

function tratarErroELancar(erro){ //essa função recebe por parametro um erro que foi capturado pelo catch
    //throw new Error('...aqui você coloca uma mensagem sobre o erro') //pode ser lançado assim
    //throw 10 //pode lançar número
    //throw true //pode lançar verdadeiro ou falso
    //throw 'messagem' //pode laçar só uma string
    
    //throw significa lançar
    //pode tbm colocar um id para identificar que um determinado erro tem um id
    //pode lançar um objeto
    throw { 
        nome: erro.name,
        msg: erro.mensagem,
        date: new Date
        
    }

}

//Os exemplos dos erros acontecem quando o objeto é chamado
//Veja no final do exemplo o const obj = {nome: 'Roberta'} como a palavra nome ao invéz de name.

function imprimirNomeGritado(obj){
    //try significa tentar
    try{ //aqui dentro eu coloco o código que julgo que poderá dar erro
        console.log(obj.name.toUpperCase() + '!!!') //toUpperCase converte todas as letras para maiúsculo
    }catch (e) { //caso seja erro o código do try ele cai automaticamente dentro do catch
        tratarErroELancar(e) //aqui foi usado uma função
    }finally{ //mesmo que ocorra erro ou não esse bloco será chamado - OPCIONAL
        console.log('final')
    }


    
}

//const obj = {nome: 'Roberta'} //mesmo dando erro ele mostra o erro
const obj = {name: 'Roberta'} //passando com o name correto
imprimirNomeGritado(obj)

//ATENÇÃO

//Tente evitar mostrar para o usuário do sistema detalhes de infraestrutura, de stacks,
//erros em inglês que não faça sentido.
//Gere um rash ou um erro genério para o usuário entender o suficiente o que causou o erro no sistema