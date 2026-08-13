import React from "react";
import { useData } from "../Context/DataContext";

const style: React.CSSProperties = {
  padding: "var(--gap) var(--gap-s)",
  background: "var(--color-3)",
  borderRadius: "var(--gap)",
  color: "var(--color-2)",
  fontWeight: "bold",
  border: "none",
  textTransform: "capitalize",
};

function nomeMes(n: number) {
  const date = new Date();
  date.setMonth(date.getMonth() + n);
  return date.toLocaleString("pt-BR", { month: "long" });
}


function formatDate(date: Date) {
  return date.toISOString().split("T")[0];
}

const MesBtn = ({ n }: { n: number }) => {
  const {setInicio, setFinal} = useData();


  function setMes(n: number) {
    const date = new Date();
    date.setMonth(date.getMonth() + n);

    const fisrtDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    setInicio(formatDate(fisrtDay));
    setFinal(formatDate(lastDay));
  }

  return (
    <button style={style} onClick={() => setMes(n)}>
      {nomeMes(n)}
    </button>
  );
};

export default MesBtn;
