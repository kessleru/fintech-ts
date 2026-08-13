import { useData } from "../Context/DataContext";

function nomeMes(n: number) {
  const date = new Date();
  date.setDate(1);
  date.setMonth(date.getMonth() + n);
  return new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(date);
}

function formatDate(date: Date) {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  return `${yyyy}-${mm}-${dd}`;
}

function limitesDoMes(n: number) {
  const date = new Date();
  date.setDate(1);
  date.setMonth(date.getMonth() + n);
  return {
    primeiro: formatDate(new Date(date.getFullYear(), date.getMonth(), 1)),
    ultimo: formatDate(new Date(date.getFullYear(), date.getMonth() + 1, 0)),
  };
}

const MesBtn = ({ n }: { n: number }) => {
  const { inicio, final, setInicio, setFinal } = useData();
  const { primeiro, ultimo } = limitesDoMes(n);
  const ativo = inicio === primeiro && final === ultimo;

  return (
    <button
      type="button"
      className="mes-btn"
      aria-pressed={ativo}
      onClick={() => {
        setInicio(primeiro);
        setFinal(ultimo);
      }}
    >
      {nomeMes(n)}
    </button>
  );
};

export default MesBtn;
