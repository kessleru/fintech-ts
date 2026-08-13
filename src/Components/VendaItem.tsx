import { NavLink } from "react-router-dom";
import { IVenda } from "../Context/DataContext";
import { formatarPreco } from "../Helpers/format";
import Status from "./Status";

const VendaItem = ({ venda }: { venda: IVenda }) => {
  return (
    <NavLink to={`/vendas/${venda.id}`} className="venda box">
      <span className="venda-id">{venda.id}</span>
      <span className="venda-nome">{venda.nome}</span>
      <Status status={venda.status} />
      <span className="venda-preco">{formatarPreco(venda.preco)}</span>
    </NavLink>
  );
};

export default VendaItem;
