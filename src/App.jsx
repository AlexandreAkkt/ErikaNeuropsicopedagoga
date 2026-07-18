import Header from "./components/Header/Header" 
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Services from "./components/Services/Services"
import Areas from "./components/Areas/Areas"
import Contact from "./components/Contact/Contac"

function App() {
  

  return (
    <>
      <Header/>
      
      <Hero/>

      <About/>

      <Services/>

      <Areas/>   {/* areas de atendimento: Autismo, TDH e ETc */}

      <Contact/>
      
      <Footer/>
    </>
  )
}

export default App
