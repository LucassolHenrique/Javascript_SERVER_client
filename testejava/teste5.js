

let numeros = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121];

// feito em arrow
let dobro = numeros.map(num => num * 2);
let metade = numeros.map(num => num/2);
let raiz = numeros.map(num => Math.sqrt(num));

console.log("tabela de numeros sem alterção", numeros)

console.log("METADE DA TABELA",metade)

console.log("RAIZ DA TABELA",raiz)

console.log("DOBRO DA TABELA",dobro)


