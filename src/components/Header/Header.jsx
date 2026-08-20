import "./Header.css";
import logo from "../../assets/mineLogo.png";

function Header() {
  // Função para controlar a rolagem suave entre as seções
  const handleScroll = (event, id) => {
    // Impede o pulo automático do link
    event.preventDefault();

    // Localiza a seção pelo ID
    const section = document.getElementById(id);

    if (section) {
      // Altura do Header para a seção não ficar escondida atrás dele
      const headerHeight = 80;

      // Posição atual da página
      const startPosition = window.scrollY;

      // Calcula a posição da seção na página
      const sectionPosition =
        section.getBoundingClientRect().top + window.scrollY;

      // Define a posição final descontando a altura do Header
      const targetPosition = sectionPosition - headerHeight;

      // Define a duração da animação
      const duration = 1200;

      // Registra o momento em que a animação começa
      const startTime = performance.now();

      // Função responsável pela animação da rolagem
      const animation = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const ease =
          progress < 0.5
            ? 2 * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 2) / 2;

        window.scrollTo(
          0,
          startPosition + (targetPosition - startPosition) * ease
        );

        if (progress < 1) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }
  };

  return (
    <nav>
      <div>
        <img src={logo} alt="Logo" />
      </div>

      <ul>
        <li>
          <a
            href="#about"
            onClick={(event) => handleScroll(event, "about")}
          >
            Sobre
          </a>
        </li>

        <li>
          <a
            href="#services"
            onClick={(event) => handleScroll(event, "services")}
          >
            Serviços
          </a>
        </li>

        <li>
          <a
            href="#areas"
            onClick={(event) => handleScroll(event, "areas")}
          >
            Áreas de atuação
          </a>
        </li>

        <li>
          <a
            href="#contact"
            onClick={(event) => handleScroll(event, "contact")}
          >
            Contato
          </a>
        </li>
      </ul>

      <button>Agendar Consulta</button>
    </nav>
  );
}

export default Header;