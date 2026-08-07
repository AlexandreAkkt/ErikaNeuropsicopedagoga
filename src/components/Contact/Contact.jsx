import Title from "../Text/Title";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-title">
          <Title
            title="Contato"
            description="Entre em contato para agendar uma consulta ou obter mais informações."
          />
        </div>

        <div className="contact-content">
          <div className="contact-card">
            <h3> WhatsApp</h3>
            <a
              href="https://wa.me/5511950501988"
              target="_blank"
              rel="noopener noreferrer"
            >
              (11) 95050-1988
            </a>
          </div>

          <div className="contact-card">
            <h3> E-mail</h3>
            <a href="mailto:erikasantanaanjos@gmail.com">
              erikasantanaanjos@gmail.com
            </a>
          </div>

          <div className="contact-card">
            <h3>Instagram</h3>
            <a
              href="https://www.instagram.com/erikaanjos.neuropp"
              target="_blank"
              rel="noopener noreferrer"
            >
              @erikaanjos.neuropp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
