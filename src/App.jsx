import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Results from './components/Results/Results'
import Expertises from './components/Expertises/Expertises'
import SelectedWork from './components/SelectedWork/SelectedWork'

const App = () => {
  return (
    <main className="min-h-screen bg-[#faf4ec] font-[Inter] text-[#131313]">
      <Navbar />
      <Hero />
      <Results />
      <Expertises />
      <SelectedWork />
    </main>
  )
}

export default App
