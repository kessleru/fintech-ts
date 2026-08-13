export function formatarPreco(preco: number) {
  return preco.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
}
