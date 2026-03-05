import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Feastables from './components/Feastables'
import Stats from './components/Stats'
import Philanthropy from './components/Philanthropy'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Feastables />
        <Philanthropy />
      </main>
      <Footer />
    </div>
  )
}

export default App
