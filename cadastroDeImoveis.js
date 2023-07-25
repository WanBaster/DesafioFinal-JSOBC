const imoveis = [];
let opcao = "";

do {
  opcao = prompt(
    "Seja bem vindo(a) ao cadastro de imóveis!\n" +
      "Total de imóveis cadastrados: " +
      imoveis.length +
      "\n\nEscolha uma opção:\n1. Novo imóvel\n2. Lista imóveis\n3. sair"
  );

  switch (opcao) {
    case "1":
      const imovel = {};
      imovel.proprietario = prompt("Qual o nome do proprietário?");
      imovel.quartos = prompt("Quantos quartos tem na casa?");
      imovel.banheiros = prompt("Quantos banheiros tem na casa?");
      imovel.garagem = prompt("A casa possui garagem?");
      const confirmacao = confirm(
        "Deseja adicionar o imóvel?\n" +
          "\nProprietário: " +
          imovel.proprietario +
          "\nQuartos: " +
          imovel.quartos +
          "\nBanheiros: " +
          imovel.banheiros +
          "\nGaragem: " +
          imovel.garagem
      );

      if (confirmacao) {
        imoveis.push(imovel);
      }

      alert("Imóvel cadastrado com sucesso!");
      break;
    case "2":
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          "Imóvel " +
            (i + 1) +
            "\nProrpietário: " +
            imoveis[i].proprietario +
            "\nQuartos: " +
            imoveis[i].quartos +
            "\nBanheiros: " +
            imoveis[i].banheiros +
            "\nGarasem: " +
            imoveis[i].garagem
        );
      }
      break;
    default:
      alert("Opção Inválida");
      break;
  }
} while (opcao !== "3");
alert("Encerrando o programa!");
