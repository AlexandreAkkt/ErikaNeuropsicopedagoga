
import "./Header.css";
import logo from "../../assets/EA.png";

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
          <a
            className="agendar-btn"
            href="https://wa.me/5511950501988?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta."
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar Consulta
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
