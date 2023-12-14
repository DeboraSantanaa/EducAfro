var numeros = [100, 3, 50, 15];


function listaNumeros (valores){
let maiorNumero =0;
for(let i=0; i<numeros.length; i++){
    if (maiorNumero<numeros[i]) {
        maiorNumero = numeros[i]
    }
}
console.log(maiorNumero)

}


listaNumeros(numeros);

