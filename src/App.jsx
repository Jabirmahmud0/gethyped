import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Results from './components/Results/Results'

const App = () => {
  return (
    <main className="min-h-screen bg-[#faf4ec] font-[Inter] text-[#131313]">
      <Navbar />
      <Hero />
      <Results />
    </main>
  )
}

export default App
