const filaDeDentro = ["Jose", "Joao"];
const filaDeFora = ["Joana", "Felipe"];

const limiteFilaDentro = 5;

while (filaDeFora.length > 0 && filaDeDentro.length < limiteFilaDentro) {
    const cliente = filaDeFora.shift();
    filaDeDentro.push(cliente);
}
console.log(filaDeDentro);
console.log(filaDeFora);