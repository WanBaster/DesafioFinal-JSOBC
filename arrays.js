const listaDeCompras = ["arroz", "feijao", "pao", "carne", "cebola", "tomate"];
console.log(listaDeCompras);

for (let indice = 0; indice < listaDeCompras.length; indice++) {
  const elemento = listaDeCompras[indice];
  alert(elemento + " se encontra na posição " + indice);
}
