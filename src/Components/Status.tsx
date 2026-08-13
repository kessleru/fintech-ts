import { IVenda } from "../Context/DataContext";

const Status = ({ status }: { status: IVenda["status"] }) => {
  return <span className={`status status-${status}`}>{status}</span>;
};

export default Status;
