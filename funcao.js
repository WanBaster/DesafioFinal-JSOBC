/* function venda(name, price) {
  const produto = { name, price };

  return produto;
}

const notebook = venda("Samsung i3", 2500);
const pcGamer = venda("Asus com nvdia", 5000);

console.log(notebook);
console.log(pcGamer);
 */

function produtos(tipo, cor, valor) {
  const produto = {
    tipo,
    cor,
    valor,
  };
  return produto;
}

const mesa = produtos("Mesa 4 pessoas", "branca", 3500);
console.log(mesa);
const sofa = produtos("Sofá 4 lugares", "Cinza", 3000);
console.log(sofa);
