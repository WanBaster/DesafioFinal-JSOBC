const numeroInformado = prompt("Informe um número para ser multiplicado: ");
let resultado = "";

for (let fator = 1; fator <= 20; fator++) {
  resultado +=
    " -> " +
    numeroInformado +
    " * " +
    fator +
    " = " +
    numeroInformado * fator +
    "\n";
}

alert("Resultado da tabuada de " + numeroInformado + ":\n\n" + resultado);
