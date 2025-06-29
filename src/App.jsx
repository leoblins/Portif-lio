import Header from './components/Header'
import Hero from './components/Hero'
import Projetos from './components/Projetos'
import Certificados from './components/Certificados'
import Sobre from './components/Sobre'
import Contato from './components/Contato'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <div style={{ height: '80px' }}></div>
      <Hero />
      <Projetos />
      <Certificados />
      <Sobre />
      <Contato />
      <Footer />
    </>
  )
}

export default App
