const personagemAtaque = prompt("Qual o nome do seu personagem de ataque?");
const poderDeAtaque = parseFloat(
  prompt("Quantos pontos de ataque tem seu personagem?")
);
const personagemDefesa = prompt("Qual o nome do seu personagem de defesa");
let pontosDeVidaDefesa = parseFloat(
  prompt("Quantos pontos de vida tem seu personagem?")
);
const pontosDeDefesa = parseFloat(
  prompt("Quantos pontos de defesa tem o personagem de defesa?")
);
const escudoDefesa = prompt(
  "O personagem de defesa possui um escudo? (sim/não"
);

let dano = 0;

if (poderDeAtaque > pontosDeDefesa && escudoDefesa == "não") {
  dano = poderDeAtaque - pontosDeDefesa;
  alert("o dano causado é de: " + dano);
} else if (poderDeAtaque > pontosDeDefesa && escudoDefesa == "sim") {
  dano = (poderDeAtaque - pontosDeDefesa) / 2;
  alert("o dano causado é de: " + dano);
} else {
  alert("Dano igual a zero!");
}

pontosDeVidaDefesa -= dano;

alert(
  personagemAtaque +
    " causou " +
    dano +
    " pontos de dano em " +
    personagemDefesa
);
alert(
  personagemAtaque +
    "\nPoder de ataque: " +
    poderDeAtaque +
    "\n\n" +
    personagemDefesa +
    "\nPontos de vida: " +
    pontosDeVidaDefesa +
    "\nPoder de defesa: " +
    pontosDeDefesa +
    "\nPossui escudo: " +
    escudoDefesa
);
