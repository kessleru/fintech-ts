import useContador from "../Hooks/useContador";
import { formatarPreco } from "../Helpers/format";

const ValorAnimado = ({ preco }: { preco: number }) => {
  const valor = useContador(preco);
  return <strong>{formatarPreco(valor)}</strong>;
};

export default ValorAnimado;
