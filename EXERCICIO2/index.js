// Calcular a soma de todos os números dentro de uma lista
// ARRAY - > LISTA
// let e var = variaveis
// const = constante
function somaArray(array) {
    var soma = 0;
    for (var i = 0; i < array.length; i++) {
        soma += array[i];
        // soma = soma + array[i/]
    }
    return soma;
}
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var soma = somaArray(array);
console.log(soma);
