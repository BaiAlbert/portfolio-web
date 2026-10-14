import { useTheme } from './hooks/useTheme'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const { dark, toggle } = useTheme()

  return (
    <>
      <Header dark={dark} onToggleTheme={toggle} />

      <main>
        <Hero />
        <About />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
