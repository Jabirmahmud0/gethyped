import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Results from './components/Results/Results'
import Expertises from './components/Expertises/Expertises'
import SelectedWork from './components/SelectedWork/SelectedWork'
import ClientMarquee from './components/ClientMarquee/ClientMarquee'
import MouseTrail from './components/MouseTrail/MouseTrail'
import Footer from './components/Footer/Footer'
import { useMenuOpen } from './hooks/useMenuOpen'

const App = () => {
  const lenisRef = useRef(null)
  const { isMenuOpen, toggleMenu, closeMenu } = useMenuOpen()

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      anchors: true,
      allowNestedScroll: true,
      lerp: 0.08,
      duration: 1.1,
      smoothWheel: true,
      syncTouch: true,
      syncTouchLerp: 0.1,
      touchMultiplier: 1.1,
      wheelMultiplier: 0.95,
    })
    lenisRef.current = lenis

    return () => {
      lenisRef.current = null
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    const lenis = lenisRef.current

    if (!lenis) {
      return
    }

    if (isMenuOpen) {
      lenis.stop()
      return
    }

    lenis.start()
    lenis.resize()
  }, [isMenuOpen])

  return (
    <main className="min-h-screen w-full max-w-full overflow-x-clip bg-[#faf4ec] font-[Inter] text-[#131313]">
      <Navbar
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        closeMenu={closeMenu}
      />
      <Hero />
      <Results />
      <Expertises />
      <SelectedWork />
      <ClientMarquee />
      <MouseTrail />
      <Footer />
    </main>
  )
}

export default App
