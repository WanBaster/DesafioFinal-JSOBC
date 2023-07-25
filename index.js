const veiculo1 = prompt("Qual o nome do primeiro veículo?");
var velocidade_v1 = parseFloat(prompt("Quantos km/h está o veículo 1?"));

const veiculo2 = prompt("Qual o nome do segundo veículo?");
var velocidade_v2 = parseFloat(prompt("Quantos km/h está o veículo 2?"));

if (velocidade_v1 > velocidade_v2) {
  alert(veiculo1 + " é mais rápido que " + veiculo2);
} else if (velocidade_v2 > velocidade_v1) {
  alert(veiculo2 + " é mais rápido que " + veiculo1);
} else {
  alert(veiculo1 + " e" + veiculo2 + "possuem velocidades iguas.");
}
