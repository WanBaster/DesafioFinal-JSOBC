function areaDoTriangulo() {
  const baseTri = prompt("Informe o valor da base!");
  const alturaTri = prompt("Informe o valor da altura!");
  return (baseTri * alturaTri) / 2;
}

function areaDoRetangulo() {
  const baseRet = prompt("Informe o valor da base!");
  const alturaRet = prompt("Informe o valor da altura");
  return baseRet * alturaRet;
}

function areaDoQuadrado() {
  const lado = prompt("Informe o valor do lado do quadrado");
  return lado * lado;
}

function areaDoTrapezio() {
  const baseMaiorTra = parseFloat(prompt("Informe o valor da base maior!"));
  const baseMenorTra = parseFloat(prompt("Informe o valor da base menor!"));
  const alturaTra = prompt("Informe o valor da altura do trapézio!");

  return ((baseMaiorTra + baseMenorTra) * alturaTra) / 2;
}

function areaDoCirculo() {
  const raio = prompt("Informe o raio do círculo");
  return 3.14 * raio * raio;
}

function executar() {
  let opcao = "";

  do {
    opcao = prompt(
      "Escolha uma opção para calcular a área:\n1. Área do triângulo\n2. Área do retângulo\n3. Área do quadrado\n4. Área do trapézio\n5. Área do circulo\n6. Sair"
    );
    let resultado;

    switch (opcao) {
      case "1":
        resultado = areaDoTriangulo();
        break;
      case "2":
        resultado = areaDoRetangulo();
        break;
      case "3":
        resultado = areaDoQuadrado();
        break;
      case "4":
        resultado = areaDoTrapezio();
        break;
      case "5":
        resultado = areaDoCirculo();
        break;
      case "6":
        alert("Saindoo");
        break;
      default:
    }

    if (resultado) {
      alert("Resultado: " + resultado);
    }
  } while (opcao !== "6");
}

executar();
