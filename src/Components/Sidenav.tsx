import resumo from "../assets/icons/resumo.svg";
import vendas from "../assets/icons/vendas.svg";
import webhooks from "../assets/icons/webhooks.svg";
import configuracoes from "../assets/icons/configuracoes.svg";
import contato from "../assets/icons/contato.svg";
import sair from "../assets/icons/sair.svg";
import FintechSVG from "../assets/FintechSVG";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", icone: resumo, texto: "Resumo", fim: true },
  { to: "/vendas", icone: vendas, texto: "Vendas", fim: false },
];

const emBreve = [
  { icone: webhooks, texto: "Webhooks" },
  { icone: configuracoes, texto: "Configurações" },
  { icone: contato, texto: "Contato" },
  { icone: sair, texto: "Sair" },
];

const Sidenav = () => {
  return (
    <nav className="sidenav box bg-3">
      <FintechSVG title="Fintech Logo" />
      <ul>
        {links.map(({ to, icone, texto, fim }) => (
          <li key={texto}>
            <NavLink to={to} end={fim} className="sidenav-item">
              <span>
                <img src={icone} alt="" />
              </span>
              {texto}
            </NavLink>
          </li>
        ))}
        {emBreve.map(({ icone, texto }) => (
          <li key={texto}>
            <span className="sidenav-item" aria-disabled="true" title="Em breve">
              <span>
                <img src={icone} alt="" />
              </span>
              {texto}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidenav;
