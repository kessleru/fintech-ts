import GraficoVendas from "../Components/GraficoVendas";
import Loading from "../Components/Loading";
import Aviso from "../Components/Aviso";
import { useData, IVenda } from "../Context/DataContext";
import ValorAnimado from "../Components/ValorAnimado";

function total(vendas: IVenda[]) {
  return vendas.reduce((acc, item) => acc + item.preco, 0);
}

function plural(n: number, singular: string, plural: string) {
  return `${n} ${n === 1 ? singular : plural}`;
}

const Resumo = () => {
  const { data, loading, error } = useData();

  if (loading) return <Loading texto="Carregando resumo..." />;
  if (error)
    return (
      <Aviso
        titulo="Não foi possível carregar o resumo"
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

  const vendas = data.filter((i) => i.status !== "falha");
  const recebido = data.filter((i) => i.status === "pago");
  const processando = data.filter((i) => i.status === "processando");

  return (
    <section className="pagina">
      <div className="resumo mb">
        <div className="box">
          <h2>
            <i className="ponto" />
            Vendas
          </h2>
          <ValorAnimado preco={total(vendas)} />
          <small>{plural(vendas.length, "transação", "transações")}</small>
        </div>
        <div className="box">
          <h2>
            <i className="ponto ponto-pago" />
            Recebido
          </h2>
          <ValorAnimado preco={total(recebido)} />
          <small>{plural(recebido.length, "pagamento", "pagamentos")}</small>
        </div>
        <div className="box">
          <h2>
            <i className="ponto ponto-processando" />
            Processando
          </h2>
          <ValorAnimado preco={total(processando)} />
          <small>{plural(processando.length, "aguardando", "aguardando")}</small>
        </div>
      </div>
      <div className="box">
        <h2 className="grafico-titulo">Vendas por dia</h2>
        <GraficoVendas data={data} />
      </div>
    </section>
  );
};

export default Resumo;
