const numeros = [54, 0, 14, 87, 10];
let indice = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] == 10){
        indice = i;

    }
} if (indice >= 0) {
    console.log(indice);
} else {
    console.log('-1');
}
