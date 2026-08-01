import "./Header.css";
import logo from "../../assets/image.png"

function Header(){
    return(
    <nav> 
      <div>
        <img src={logo} alt="logo" /> 
        </div>  
        
        <ul>
        {/* li = list item */}
        <a href="#sobre">
          <li>Sobre</li>
        </a>
        <a href="#servicos">
          <li>Serviços</li>
        </a>
        <a href="#areas-de-atuacao">
          <li>Áreas de atuação</li>
        </a>
        <a href="#depoimentos">
          <li>Depoimentos</li>
        </a>
        <a href="#contato">
          <li>Contato</li>
        </a>
      </ul>


<button> Agendar Consulta</button>
    </nav>);
}
export default Header;
