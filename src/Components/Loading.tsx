const Loading = ({ texto = "Carregando..." }: { texto?: string }) => {
  return (
    <div className="loading" role="status" aria-live="polite">
      <div className="loading-spinner" />
      <span>{texto}</span>
    </div>
  );
};

export default Loading;
