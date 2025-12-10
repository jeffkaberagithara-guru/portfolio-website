import './App.css'
import Navigation from './Layout/Navigation'
import Hero from './Components/Hero'
import About from './Components/About'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import Footer from './Layout/Footer'

function App() {

  return (
    <div className="bg-linear-to-br from-black via-gray-900 to-orange-900 overflow-x-hidden overflow-y-auto">
      <>
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
     </div>
  )
}

export default App
