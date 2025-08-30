import About from "./sections/About"
import Hero from "./sections/Hero"
import Navbar from "./sections/Navbar"
import Projects from "./sections/Projects"

const App = () => {
  
  return (
    <div className="contaier mx-auto max-w-7xl">
      <Navbar/>
      <Hero/> 
      <About/>
      <Projects/>
      <section className="min-h-screen"/>
      <section className="min-h-screen"/>
      <section className="min-h-screen"/>
      <section className="min-h-screen"/> 
      {/* experience */}
      {/* testimonial */}
      {/* contact */}
      {/* footer */}

    </div>
  )
}
export default App