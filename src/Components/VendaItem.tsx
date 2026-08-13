import React from "react";
import type { IVenda } from "../Context/DataContext";

const VendaItem = ({ venda }: { venda: IVenda }) => {
  return (
    <li className="venda box">
      <div>
        <a href={venda.id} style={{ fontFamily: "monospace" }}>
          {venda.id}
        </a>
      </div>
      <div>
        <strong>Produto:</strong> {venda.nome}
      </div>
      <div>
        <strong>Preço:</strong> R${" "}
        {venda.preco.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
    </li>
  );
};

export default VendaItem;
