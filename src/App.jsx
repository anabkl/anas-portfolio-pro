import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import CustomCursor from './components/CustomCursor'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      <CustomCursor />
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Skills />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  )
}

export default App
