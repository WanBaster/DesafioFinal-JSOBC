let escolha = "";
do {
  escolha = prompt(
    "Olá, para começar escolha uma opção:\n" +
      "opção 1\n" +
      "opção 2\n" +
      "opção 3\n" +
      "opção 4\n" +
      "encerrar"
  );

  switch (escolha) {
    case "opção 1":
      alert("Você escolheu a opção 1");
      break;
    case "opção 2":
      alert("Você escolheu a opção 2");
      break;
    case "opção 3":
      alert("Você escolheu a opção 3");
      break;
    case "opção 4":
      alert("Você escolheu a opção 4");
      break;
    case "encerrar":
      alert("Você escolheu encerrar!");
      break;
    default:
      alert("Valor inválido!");
  }
} while (escolha !== "encerrar");

alert("O sistema está sendo encerrado! Obrigado");
