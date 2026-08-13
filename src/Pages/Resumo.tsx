import React from "react";
import { useData } from "../Context/DataContext";

const Resumo = () => {
  const { data } = useData();

  if (!data) return <p>Carregando...</p>;
  return (
    <section>
      <div className="resumo flex mb">
        <div className="box">
          <h2 className="title">Vendas</h2>
          <span>
            {data
              .filter((item) => item.status !== "falha")
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
          </span>
        </div>
        <div className="box">
          <h2 className="title">Recebido</h2>
          <span>
            {data
              .filter((item) => item.status === "pago")
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
          </span>
        </div>
        <div className="box">
          <h2 className="title">Processando</h2>
          <span>
            {data
              .filter((item) => item.status === "processando")
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
          </span>
        </div>
      </div>
      <div className="box mb">
        <h2 className="title">Gráficos</h2>
      </div>
    </section>
  );
};

export default Resumo;
