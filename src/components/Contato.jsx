function Contato() {
    return (
      <section id="contato" className="contato">
        <h3>Entre em Contato</h3>
        <div className="contato-links">
          <p>
            <i className="fas fa-envelope"></i>{' '}
            <a href="mailto:leoblins@gmail.com">leoblins@gmail.com</a>
          </p>
          <p>
            <i className="fab fa-linkedin"></i>{' '}
            <a href="https://www.linkedin.com/in/leonardo-barbosa-54a22023a/" target="_blank" rel="noreferrer">
              linkedin.com/in/leonardo-barbosa
            </a>
          </p>
          <p>
            <i className="fab fa-whatsapp"></i>{' '}
            <a href="https://wa.me/5521989036236" target="_blank" rel="noreferrer">
              (21) 98903-6236
            </a>
          </p>
          <p>
            <i className="fas fa-file-download"></i>{' '}
            <a href="/Imagens/Arquivos/Leonardo_Lins_CV_Junho.pdf" download>
              Baixar meu currículo
            </a>
          </p>
        </div>
      </section>
    )
  }
  
  export default Contato;
  