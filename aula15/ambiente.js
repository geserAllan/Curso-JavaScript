/*let num = [5, 4 ,6, 2 ,8]
console.log(`Nossa array é ${num}`)*/


let num = [5, 4 ,6, 2 ,8]
num.push(3)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
let pos = num.indexOf(1)

if (pos == -1) {
    console.log ('Valor não encontrado')
}else {
    console.log (`O valor está na posição ${pos}`)
}