const valorMetros = prompt("Diga um valor em metros: ");
const valorMetrosInserido = parseFloat(valorMetros);
const medidaCovertida = prompt(
  "Em qual unidade você deseja converter o valor?\n" +
    "mm\n" +
    "cm\n" +
    "dm\n" +
    "dam\n" +
    "hm\n" +
    "km\n"
);

switch (medidaCovertida) {
  case "mm":
    alert("O valor é: " + valorMetrosInserido * 1000 + " milímetros");
    break;
  case "cm":
    alert("O valor é " + valorMetrosInserido * 100 + " Centímetros");
    break;
  case "dm":
    alert("O valor é " + valorMetrosInserido * 10 + " decímetro");
    break;
  case "dam":
    alert("O valor é " + valorMetrosInserido / 10 + " decâmetro");
    break;
  case "hm":
    alert("O valor é " + valorMetrosInserido / 100 + " hectômetro");
    break;
  case "km":
    alert("O valor é " + valorMetrosInserido / 1000 + " quilômetro");
    break;
  default:
    alert("Selecione uma Opção!");
}
