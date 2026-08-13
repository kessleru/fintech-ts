import React from "react";

const semAnimacao = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function useContador(valor: number, duracao = 700) {
  const [atual, setAtual] = React.useState(0);
  const inicial = React.useRef(0);

  React.useEffect(() => {
    if (semAnimacao()) {
      setAtual(valor);
      return;
    }

    const de = inicial.current;
    const comeco = performance.now();
    let frame = requestAnimationFrame(function passo(agora) {
      const tempo = Math.min((agora - comeco) / duracao, 1);
      const suave = 1 - Math.pow(1 - tempo, 3);
      const proximo = de + (valor - de) * suave;
      inicial.current = proximo;
      setAtual(proximo);
      if (tempo < 1) frame = requestAnimationFrame(passo);
    });

    return () => cancelAnimationFrame(frame);
  }, [valor, duracao]);

  return atual;
}

export default useContador;
