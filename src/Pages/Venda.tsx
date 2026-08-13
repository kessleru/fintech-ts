import { Link, useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import { IVenda } from "../Context/DataContext";
import Loading from "../Components/Loading";
import Aviso from "../Components/Aviso";
import Status from "../Components/Status";
import { formatarPreco } from "../Helpers/format";

type VendaSemData = Omit<IVenda, "data">;

const pagamentos: Record<IVenda["pagamento"], string> = {
  boleto: "Boleto",
  pix: "Pix",
  cartao: "Cartão",
};

const Venda = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch<VendaSemData>(
    `https://data.origamid.dev/vendas/${id}`,
  );

  if (loading) return <Loading texto="Carregando venda..." />;
  if (error)
    return (
      <Aviso
        titulo="Não foi possível carregar a venda"
        texto="Verifique sua conexão e tente novamente."
      />
    );
  if (data === null) return null;

  return (
    <div className="pagina">
      <Link to="/vendas" className="voltar">
        ← Voltar para vendas
      </Link>
      <div className="box">
        <dl className="detalhe">
          <div>
            <dt>ID</dt>
            <dd className="venda-id">{data.id}</dd>
          </div>
          <div>
            <dt>Nome</dt>
            <dd>{data.nome}</dd>
          </div>
          <div>
            <dt>Preço</dt>
            <dd>{formatarPreco(data.preco)}</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>
              <Status status={data.status} />
            </dd>
          </div>
          <div>
            <dt>Pagamento</dt>
            <dd>{pagamentos[data.pagamento] ?? data.pagamento}</dd>
          </div>
          {data.parcelas !== null && (
            <div>
              <dt>Parcelas</dt>
              <dd>{data.parcelas}x</dd>
            </div>
          )}
        </dl>
      </div>
    </div>
  );
};

export default Venda;
