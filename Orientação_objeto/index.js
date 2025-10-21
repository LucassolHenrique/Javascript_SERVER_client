//07/10/2025

const num1 = 2;
const num2 = 4;
const operacao = 'soma'; 

if (operacao === 'soma') {
    console.log(num1 + num2);
} else if (operacao == 'multiplicação'){
    console.log(num1 * num2);
} else {
    console.log('Operação não indentificada');
}

const salario = 12000;

if (salario >= 11000) {
    console.log('3% de bônus');
} else if (salario < 11000 && salario >= 7000){
    console.log('5% de bônus');
} else if (salario > 7000 && salario >= 4000) {
    console.log('7% de Bônus ');
} else {
    console.log('9% de bônus');
}
