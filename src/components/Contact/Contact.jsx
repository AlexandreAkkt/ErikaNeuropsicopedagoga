import "./Contact.css";

function Contact() {
  return (
    <section id="contact">
      <div className="container">

        <div className="contact-title">
          <h2>Entre em Contato</h2>

          <p>
            Será um prazer conversar com você e esclarecer suas dúvidas.
            Entre em contato pelos canais abaixo.
          </p>
        </div>

        <div className="contact-content">

          <div className="contact-card">
            <h3>📱 WhatsApp</h3>
            <a
              href="https://wa.me/5511950501988"
              target="_blank"
              rel="noopener noreferrer"
            >
              (11) 95050-1988
            </a>
          </div>

          <div className="contact-card">
            <h3>📧 E-mail</h3>
            <a href="mailto:erikasantanaanjos@gmail.com">
              erikasantanaanjos@gmail.com
            </a>
          </div>

          <div className="contact-card">
            <h3>📸 Instagram</h3>
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