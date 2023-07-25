const palavra = prompt("Informe uma palavra:");
let palavraIvertida = "";

for (let i = palavra.length - 1; i >= 0; i--) {
  palavraIvertida += palavra[i];
}

if (palavra === palavraIvertida) {
  alert(palavra + " é um palíndromo");
} else {
  alert(
    palavra + " não é um palíndromo!\n\n" + palavra + " !=" + palavraIvertida
  );
}
