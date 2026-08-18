import { lazy, Suspense, useEffect } from 'react'
import { MotionConfig } from 'framer-motion'
import './App.css'
import Navigation from './Layout/Navigation'
import Hero from './Components/Hero'
import Footer from './Layout/Footer'

const About = lazy(() => import('./Components/About'))
const Skills = lazy(() => import('./Components/Skills'))
const Projects = lazy(() => import('./Components/Projects'))
const Contact = lazy(() => import('./Components/Contact'))

function SectionFallback() {
  return (
    <div className="flex items-center justify-center py-32">
      <div className="w-10 h-10 border-2 border-orange-500/30 border-t-orange-500 rounded-full animate-spin" />
    </div>
  )
}

function App() {
  useEffect(() => {
    const warm = () => {
      import('./Components/About')
      import('./Components/Skills')
      import('./Components/Projects')
      import('./Components/Contact')
    }
    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(warm, { timeout: 2000 })
      return () => window.cancelIdleCallback(id)
    }
    const t = setTimeout(warm, 1500)
    return () => clearTimeout(t)
  }, [])

  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[80] focus:px-5 focus:py-3 focus:bg-orange-600 focus:text-white focus:rounded-full focus:font-semibold focus:shadow-lg"
      >
        Skip to content
      </a>
      <div className="bg-linear-to-br from-black via-gray-950 to-orange-950 overflow-x-clip relative">
        <Navigation />
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
        <Footer />
      </div>
    </MotionConfig>
  )
}

export default App
