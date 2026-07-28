import "./Areas.css";

function Areas() {
  return (
    <section id="areas">
      <div className="container">
        <div className="container-title">
            <h2>Áreas de Atuação</h2>
            <p>
               Atendimento especializado para diversas dificuldades e transtornos
            </p>
         </div>

        <div className="areas-grid">
          <div className="area-card">Dislexia</div>
          <div className="area-card">Discalculia</div>
          <div className="area-card">Disgrafia</div>
          <div className="area-card">TDAH</div>

          <div className="area-card">TEA (Autismo)

          </div>
          <div className="area-card">Dificuldade de Aprendizagem</div>
          <div className="area-card">Transtornos de Linguagem</div>
          <div className="area-card">Deficiência Intelectual</div>
        </div>
      </div>
    
    </section>
  );
}

export default Areas;