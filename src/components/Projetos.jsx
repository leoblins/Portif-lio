import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

function Projetos() {
  return (
    <section id="projetos" className="projetos">
      <h3>Projetos em Destaque</h3>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          }
        }}
        className="swiper"
      >
        <SwiperSlide className="swiper-slide card">
          <img src="/Imagens/biblioteca.png" alt="Biblioteca" className="card-img" />
          <h4>Projeto Biblioteca</h4>
          <p>Projeto de acervo digital de livro em html css e javascript.</p>
          <a href="https://github.com/leoblins/-Minha-Biblioteca"target="_blank" >Ver no GitHub</a>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide card">
          <img src="/Imagens/doaçaoamor.png" alt="Biblioteca" className="card-img" />
          <h4>Projeto Doação de amor</h4>
          <p>Projeto para uma ONG Chamada Doação de Amorde livro em html css e javascript.</p>
          <a href="https://github.com/leoblins/WEB3" target="_blank">Ver no GitHub</a>
        </SwiperSlide>
        
        <SwiperSlide className="swiper-slide card">
          <img src="/Imagens/manha_beneficente.png" alt="Projeto 2" className="card-img" />
          <h4>Projeto Manha Beneficente</h4>
          <p>Site para Ação Social "Manha Beneficente" em html css e javascript.</p>
          <a href="https://github.com/leoblins/Projeto_Manha_Beneficente" target="_blank">Ver no GitHub</a>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide card">
          <img src="/Imagens/php.png" alt="Projeto 3" className="card-img" />
          <h4>Projeto Crud com PHP</h4>
          <p>Crud completo em PHP</p>
          <a href="https://github.com/leoblins/Teste_Tecnico" target="_blank">Ver no GitHub</a>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide card">
          <img src="/Imagens/bianca.png" alt="Projeto 3" className="card-img" />
          <h4>Projeto Portofólio - Bianca</h4>
          <p>Portofólio acadêmico em html css e javascript.</p>
          <a href="https://github.com/leoblins/Bianca" target="_blank">Ver no GitHub</a>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide card">
          <img src="/Imagens/leo.png" alt="Projeto 3" className="card-img" />
          <h4>Meu portifólio</h4>
          <p>Meu portifólio em react.</p>
          <a href="https://github.com/leoblins/Meu_Portfolio" target="_blank">Ver no GitHub</a>
        </SwiperSlide>

        {/* Adicione mais <SwiperSlide> conforme necessário */}
      </Swiper>
    </section>
  )
}

export default Projetos
