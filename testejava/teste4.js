

//lista de numeros
let numeros = [1, 2, 3, 4];

//cria um loop que faz o total multiplicar o num (total é sempre somado)
let resultado = numeros.reduce(function(total, num) {
    return total * num;
}, 1);

//conta feito no calculo a cima
// total * num 
// 1 * 1 = 1
// 1 * 2 = 2
// 2 * 3 = 6 
// 6 * 4 = 24 

