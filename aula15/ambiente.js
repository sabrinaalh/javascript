let num = [5, 8, 2, 9, 3]
// console.log(`Nosso vetor é o ${num}`)
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} tantas posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log('-----------------------------------')

//-------------------------------
//O jeito + difícil:
// console.log(num[0])
// console.log(num[1])
// console.log(num[2])
// console.log(num[3])
// console.log(num[4])
// console.log(num[5])


let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
console.log('RECEBA!')
console.log('Feita executando for (let pos = 0; pos < valores; pos++)')
for(let pos = 0; pos < valores.length; pos++ ){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
console.log('-----------------------------------')

//OU

console.log('Feita executando for (let pos in valores)')
for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
console.log('-----------------------------------')
//------------------------------------------------

let pos = valores.indexOf(8)
if(pos == -1){
    console.log('O valor 8 não foi encontrado.')
}else{
    console.log(`O valor 8 está na posição ${pos}.`)
}

