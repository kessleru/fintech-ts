import React from "react";
import { useData } from "../Context/DataContext";
import VendaItem from "../Components/VendaItem";

const Vendas = () => {
  const { data } = useData();

  if (!data) return <div>Carregando...</div>;

  return (
    <section className="flex mb">
      <ul>
        {data.map((venda) => (
          <VendaItem key={venda.id} venda={venda} />
        ))}
      </ul>
    </section>
  );
};

export default Vendas;
