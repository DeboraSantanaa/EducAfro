

function verificaNota(nota1, nota2, nota3) {

    var media = (nota1 + nota2 + nota3) / 3;
    var resultado = '';


    if (media >= 6) {
        resultado = "Passou de Ano"
    } else {
        resultado = "Recuperação"
    }

    return resultado;

}

console.log(verificaNota(7, 9, 5));





