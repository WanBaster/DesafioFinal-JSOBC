var nomeTurista = prompt("Olá, turista! Qual seu nome?");
let cidades = "";

let continuar = prompt(
  "Olá, " + nomeTurista + "! Você já visitou alguma cidade?" + "\nsim\n" + "não"
);

let cidadesVisitadas = 0;

while (continuar === "sim") {
  let cidade = prompt("Qual o nome da cidade que você já visitou?");
  continuar = prompt(
    "Legal, " + nomeTurista + "! Você já visitou alguma outra cidade?"
  );
  cidades += " - " + cidade + "\n";
  cidadesVisitadas++;
}
alert(
  "Turista: " +
    nomeTurista +
    "\nQuantidade de cidades visitadas: " +
    cidadesVisitadas +
    "\n Cidades visitadas: \n" +
    cidades
);

alert("Fim do programa!");
