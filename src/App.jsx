import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Results from './components/Results/Results'
import Expertises from './components/Expertises/Expertises'
import SelectedWork from './components/SelectedWork/SelectedWork'
import ClientMarquee from './components/ClientMarquee/ClientMarquee'
import MouseTrail from './components/MouseTrail/MouseTrail'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <main className="min-h-screen w-full max-w-full overflow-x-clip bg-[#faf4ec] font-[Inter] text-[#131313]">
      <Navbar />
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
