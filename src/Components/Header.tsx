import React from "react";
import DateRange from "./DateRange";
import Meses from "./Meses";
import { useLocation } from "react-router-dom";
import { useData } from "../Context/DataContext";

function paraData(valor: string) {
  const [ano, mes, dia] = valor.split("-").map(Number);
  if (!ano || !mes || !dia) return null;
  return new Date(ano, mes - 1, dia);
}

function mesAbreviado(data: Date) {
  return new Intl.DateTimeFormat("pt-BR", { month: "short" })
    .format(data)
    .replace(".", "");
}

function formatarPeriodo(inicio: string, final: string) {
  const de = paraData(inicio);
  const ate = paraData(final);
  if (!de || !ate) return `${inicio} — ${final}`;

  const mesmoAno = de.getFullYear() === ate.getFullYear();
  const inicioTexto = `${de.getDate()} ${mesAbreviado(de)}${
    mesmoAno ? "" : ` ${de.getFullYear()}`
  }`;
  const finalTexto = `${ate.getDate()} ${mesAbreviado(ate)} ${ate.getFullYear()}`;
  return `${inicioTexto} — ${finalTexto}`;
}

const Header = () => {
  const [title, setTitle] = React.useState("Resumo");
  const location = useLocation();
  const { inicio, final } = useData();

  React.useEffect(() => {
    if (location.pathname === "/") {
      setTitle("Resumo");
      document.title = "Fintech | Resumo";
    } else if (location.pathname === "/vendas") {
      setTitle("Vendas");
      document.title = "Fintech | Vendas";
    } else if (location.pathname.startsWith("/vendas/")) {
      setTitle("Venda");
      document.title = "Fintech | Venda";
    }
  }, [location]);

  return (
    <header className="mb">
      <div className="daterange mb">
        <DateRange />
        <div className="box bg-3 titulo">
          <h1>{title}</h1>
          <span>{formatarPeriodo(inicio, final)}</span>
        </div>
      </div>
      <Meses />
    </header>
  );
};

export default Header;
