import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
} from "recharts";
import { IVenda } from "../Context/DataContext";
import { formatarPreco } from "../Helpers/format";

type VendaDia = {
  data: string;
  pago: number;
  processando: number;
  falha: number;
};

const cores = {
  pago: "#A36AF9",
  processando: "#FBCB21",
  falha: "#463220",
};

function transformData(data: IVenda[]): VendaDia[] {
  const dias = data.reduce((acc: { [key: string]: VendaDia }, item) => {
    const dia = item.data.split(" ")[0];
    if (!acc[dia]) {
      acc[dia] = {
        data: dia,
        pago: 0,
        falha: 0,
        processando: 0,
      };
    }
    acc[dia][item.status] += item.preco;
    return acc;
  }, {});

  return Object.values(dias).map((dia) => ({
    ...dia,
    data: dia.data.substring(5).split("-").reverse().join("/"),
  }));
}

const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="grafico-tooltip">
      <strong>{label}</strong>
      <ul>
        {payload.map((item) => (
          <li key={item.dataKey}>
            <i style={{ background: item.color }} />
            {item.dataKey}: {formatarPreco(Number(item.value))}
          </li>
        ))}
      </ul>
    </div>
  );
};

const GraficoVendas = ({ data }: { data: IVenda[] }) => {
  const transformedData = transformData(data);

  return (
    <ResponsiveContainer width="99%" height={400}>
      <LineChart data={transformedData} margin={{ top: 4, right: 8, bottom: 0, left: 0 }}>
        <CartesianGrid stroke="#eceadd" vertical={false} />
        <XAxis
          dataKey="data"
          tick={{ fill: "#66593c", fontSize: 12 }}
          tickLine={false}
          axisLine={{ stroke: "#eceadd" }}
          tickMargin={8}
        />
        <YAxis
          tick={{ fill: "#66593c", fontSize: 12 }}
          tickLine={false}
          axisLine={false}
          width={80}
          tickFormatter={(valor: number) =>
            valor.toLocaleString("pt-br", {
              notation: "compact",
              style: "currency",
              currency: "BRL",
              maximumFractionDigits: 1,
            })
          }
        />
        <Tooltip content={<CustomTooltip />} cursor={{ stroke: "#eceadd", strokeWidth: 2 }} />
        <Legend iconType="circle" iconSize={8} />
        <Line
          type="monotone"
          dataKey="pago"
          stroke={cores.pago}
          strokeWidth={3}
          dot={false}
          animationDuration={900}
          animationEasing="ease-out"
          activeDot={{ r: 5, strokeWidth: 2, stroke: "#fff" }}
        />
        <Line
          type="monotone"
          dataKey="processando"
          stroke={cores.processando}
          strokeWidth={3}
          dot={false}
          animationDuration={900}
          animationEasing="ease-out"
          activeDot={{ r: 5, strokeWidth: 2, stroke: "#fff" }}
        />
        <Line
          type="monotone"
          dataKey="falha"
          stroke={cores.falha}
          strokeWidth={3}
          dot={false}
          animationDuration={900}
          animationEasing="ease-out"
          activeDot={{ r: 5, strokeWidth: 2, stroke: "#fff" }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default GraficoVendas;
