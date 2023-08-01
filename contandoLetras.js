const letras = ["A", "e", "E", "e", "L", "z"];
let quantidade = 0;

for (let letra of letras) {
    if (letra == "E" || letra == "e") {
        quantidade++;
    }    
} if (quantidade > 0) {
    console.log(`Foram encontradas ${quantidade} letras "E" ou "e".`);
  } else {
        console.log("Nenhuma letra E ou e foi encontrada.")
    }