const numeros = [8, 11, 4, 1];

let maior = Math.max(...numeros);
let menor = Math.min(...numeros);

const maiorDiferenca = maior - menor;
console.log(maiorDiferenca);