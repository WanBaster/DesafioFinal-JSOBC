let fila = ["pedro", "matheus", "talita", "bruno", "joao"];
let opcao = "";

do {
  let pacientes = "";
  for (let i = 0; i < fila.length; i++) {
    pacientes += i + 1 + "º - " + fila[i] + "\n";
  }

  opcao = prompt(
    "Pacientes:\n" +
      pacientes +
      "\nEscolha uma ação:\n1. Novo paciente\n2. Consultar paciente\n3. Sair"
  );

  switch (opcao) {
    case "1":
      const novoPaciente = prompt("Qual o nome do paciente: ");
      fila.push(novoPaciente);
      break;
    case "2":
      const pacienteConsutado = fila.shift();
      alert(pacienteConsutado + " foi atendido!");
      break;
    case "3":
      alert("Encerrando");
      break;
    default:
      alert("Opção Inválida");
  }
} while (opcao !== "3");
