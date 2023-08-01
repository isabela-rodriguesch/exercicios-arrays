const letras = ["A", "a", "B", "C", "L", "z"];
let quantidade = 0;

for (let letra of letras) {
    if (letra == "E" || letra == "e") {
        quantidade++;
        console.log(`Foram encontradas ${quantidade} letras "E" ou "e".`);
    }
} 