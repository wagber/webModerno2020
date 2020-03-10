function area(largura, altura){
    const area = largura * altura
    if(area > 20){
        console.log(`Valor acima do permitido: ${area}m2.`)
    }else{
        return area
    }
}

console.log(area(2,2))//4
console.log(area(2))//Nan
console.log(area())//Nan
console.log(area(2, 3, 17, 22, 44))//6
console.log(area(5,5)) //undefined