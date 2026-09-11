import Title from "../Text/Title";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-title">
          <Title
            title="Entre em contato"
            description="Estou à disposição para esclarecer dúvidas e fornecer mais informações."
          />
        </div>

        <div className="contact-content">
          <div className="contact-card">
            <div className="contact-icon">
              <span>WhatsApp</span>
            </div>

            <h3>WhatsApp</h3>

            <p>Fale comigo pelo WhatsApp</p>

            <a
              href="https://wa.me/5511950501988"
              target="_blank"
              rel="noopener noreferrer"
            >
              (11) 95050-1988
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <span>E-mail</span>
            </div>

            <h3>E-mail</h3>

            <p>Envie sua mensagem por e-mail</p>

            <a href="mailto:erikasantanaanjos@gmail.com">
              erikasantanaanjos@gmail.com
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <span>Instagram</span>
            </div>

            <h3>Instagram</h3>

            <p>Acompanhe meu trabalho</p>

            <a
              href="https://www.instagram.com/erikaanjos.neuropp"
              target="_blank"
              rel="noopener noreferrer"
            >
              @erikaanjos.neuropp
            </a>
          </div>
        </div>

        <div className="contact-cta">
          <h3>Vamos conversar?</h3>

          <p>
            Entre em contato para saber mais sobre a avaliação e o
            acompanhamento.
          </p>

          <a
            href="https://wa.me/5511950501988"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            Falar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
