function fatorial(número){          //função que receberá um número como parâmetro
    let fat = 1                     
    for(let c = número; c > 1; c--){ //para cada loop a variável c(número), enquanto for maior que 1 c perderá um número a cada loop.
        fat *= c   //fat recebe fat multiplicado por c (já com -1 número em cada loop) 
    }
    return fat  //retorna o resultado da multiplicação a cada loop até restar 1
} 
console.log(fatorial(5))   
