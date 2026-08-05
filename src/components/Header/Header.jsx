import "./Header.css";
import logo from "../../assets/mineLogo.png";

function Header() {
  return (
    <nav>
      <div>
        <img src={logo} alt="Logo" />
      </div>

      <ul>
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
          <a href="#depoimentos">Depoimentos</a>
        </li>

        <li>
          <a href="#contact">Contato</a>
        </li>
      </ul>

      <a href="#contato">
        <button>Agendar Consulta</button>
      </a>
    </nav>
  );
}

export default Header;
