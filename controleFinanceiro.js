let dinheiroInicial = prompt("Qual a quantidade de dinheiro inicial?");
let escolha = "";
dinheiroInicial = parseFloat(dinheiroInicial);
do {
  escolha = prompt(
    "Você tem " +
      dinheiroInicial +
      "R$" +
      " Você deseja: \n" +
      "adicionar dinheiro\n" +
      "remover dinheiro\n" +
      "sair"
  );
  switch (escolha) {
    case "adicionar dinheiro":
      dinheiroInicial += parseFloat(prompt("Quanto deseja adicionar?"));
      break;
    case "remover dinheiro":
      dinheiroInicial -= parseFloat(prompt("Quanto deseja retirar?"));
      break;
    case "sair":
      alert("Você escolheu Sair!");
      break;
    default:
      alert("Escolha uma opção, por favor!");
  }
} while (escolha !== "sair");

alert("Programa encerrado! Obrigado.");
