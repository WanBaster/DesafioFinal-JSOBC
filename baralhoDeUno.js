let baralho = ["2", "4", "+2", "+4", "9", "7"];
let opcao = "";

do {
  let Cartas = "";
  for (let i = 0; i < baralho.length; i++) {
    Cartas += i + 1 + " = " + baralho[i] + "\n";
  }

  opcao = prompt(
    "Cartas:\n" +
      Cartas +
      "\nEscolha uma ação:\n1. Nova carta\n2. Puxar uma carta\n3. Sair"
  );

  switch (opcao) {
    case "1":
      const novaCarta = prompt("Qual carta deseja adicionar?");
      baralho.unshift(novaCarta);
      break;
    case "2":
      const cartaPuxada = baralho.shift();
      alert(cartaPuxada + " foi tirada do baralho");
      break;
    case "3":
      alert("Encerrando");
      break;
    default:
      alert("Opão Inválida");
  }
} while (opcao !== "3");

alert("Finalizando");
