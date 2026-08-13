const Aviso = ({ titulo, texto }: { titulo: string; texto: string }) => {
  return (
    <div className="aviso box">
      <h2>{titulo}</h2>
      <p>{texto}</p>
    </div>
  );
};

export default Aviso;
