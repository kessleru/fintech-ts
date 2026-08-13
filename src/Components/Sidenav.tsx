import React from "react";
import fintech from "../../public/fintech.svg";


const Sidenav = () => {
  return <nav className="sidenav">
    <img src={fintech} alt="Fintech" />
    <ul>
      <li>
        <a href="">Resumo</a>
      </li>
      
    </ul>
  </nav>;
};

export default Sidenav;
