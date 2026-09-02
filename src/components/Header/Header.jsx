import "./Header.css";
import logo from "../../assets/mineLogo.png";

function Header() {
  return (
    <nav className="site-header" id="top">
      <a className="site-logo" href="#top" aria-label="Ir para o início">
        <img src={logo} alt="Logo" />
      </a>

      <input className="menu-checkbox" type="checkbox" id="menu-toggle" />
      <label className="menu-toggle" htmlFor="menu-toggle">
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </label>

      <ul className="site-menu">
        <li>
          <a href="#about">Sobre</a>
        </li>

        <li>
          <a href="#services">Serviços</a>
        </li>

        <li>
          <a href="#areas">Áreas de atuação</a>
        </li>

        <li>
          <a href="#contact">Contato</a>
        </li>

        <li className="agendar-item">
          <button className="agendar-btn">Agendar Consulta</button>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
