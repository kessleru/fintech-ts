import { useData } from "../Context/DataContext";
import VendaItem from "../Components/VendaItem";
import Loading from "../Components/Loading";
import Aviso from "../Components/Aviso";

const Vendas = () => {
  const { data, loading, error } = useData();

  if (loading) return <Loading texto="Carregando vendas..." />;
  if (error)
    return (
      <Aviso
        titulo="Não foi possível carregar as vendas"
        texto="Verifique sua conexão e tente novamente."
      />
    );
  if (data === null) return null;
  if (data.length === 0)
    return (
      <Aviso
        titulo="Nenhuma venda no período"
        texto="Selecione outro intervalo de datas para ver os resultados."
      />
    );

  return (
    <ul className="vendas-lista">
      {data.map((venda, index) => (
        <li
          key={venda.id}
          style={{ animationDelay: `${Math.min(index, 12) * 35}ms` }}
        >
          <VendaItem venda={venda} />
        </li>
      ))}
    </ul>
  );
};

export default Vendas;
