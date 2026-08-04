import "./Services.css";

function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="services-header">
          <span className="section-subtitle">Serviços</span>

          <h2>Serviços Oferecidos</h2>

          <p>
            Atendimento neuropsicopedagógico personalizado para crianças,
            adolescentes e suas famílias.
          </p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon"></div>

            <h3>Avaliação Neuropsicopedagógica</h3>

            <p>
              Investigação das habilidades cognitivas e da aprendizagem para
              identificar dificuldades e potencialidades.
            </p>
          </div>

          <div className="service-card">
            <h3>Intervenção Neuropsicopedagógica</h3>

            <p>
              Atendimento individualizado com estratégias voltadas ao
              desenvolvimento da aprendizagem.
            </p>
          </div>

          <div className="service-card">
            <h3>Orientação Familiar</h3>

            <p>
              Apoio aos pais e responsáveis com orientações para estimular o
              desenvolvimento da criança.
            </p>
          </div>

          <div className="service-card">
            <h3>Assessoria Escolar</h3>

            <p>
              Parceria com escolas para auxiliar no acompanhamento e na evolução
              do aluno.
            </p>
          </div>

          <div className="service-card">
            <h3>Atendimento para TDAH e TEA</h3>

            <p>
              Intervenção especializada para crianças e adolescentes com foco no
              desenvolvimento integral.
            </p>
          </div>

          <div className="service-card">
            <h3>Estimulação Cognitiva</h3>

            <p>
              Atividades para fortalecer memória, atenção, linguagem, raciocínio
              e funções executivas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
