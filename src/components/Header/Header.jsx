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
      // 1200 = 1,2 segundos
      const duration = 1200;

      // Registra o momento em que a animação começa
      const startTime = performance.now();

      // Função responsável pela animação da rolagem
      const animation = (currentTime) => {
        // Calcula o tempo que já passou
        const elapsed = currentTime - startTime;

        // Calcula o progresso da animação
        const progress = Math.min(elapsed / duration, 1);

        // Deixa o movimento mais suave no início e no final
        const ease =
          progress < 0.5
            ? 2 * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 2) / 2;

        // Move a página gradualmente até a seção
        window.scrollTo(
          0,
          startPosition + (targetPosition - startPosition) * ease
        );

        // Continua a animação até chegar ao destino
        if (progress < 1) {
          requestAnimationFrame(animation);
        }
      };

      // Inicia a animação
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

      <a
        href="#contact"
        onClick={(event) => handleScroll(event, "contact")}
      >
        <button>Agendar Consulta</button>
      </a>
    </nav>
  );
}

export default Header;