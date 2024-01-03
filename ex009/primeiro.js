//Estruturas condicionais simples
//Estrutaras condicionais compostas 
//Estruturas condicionais aninhadas

var idade = 17
console.log(`A sua idade é de ${idade} anos`)
if (idade < 16){
    console.log("Não é obrigatorio votar")
} else if (idade < 18 || idade >= 65){
        console.log("Voto Opcional")
 } else {
        console.log("Voto obrigatorio")
}
