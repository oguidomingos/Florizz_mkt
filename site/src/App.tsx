import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Plans from './components/Plans'
import Diferenciais from './components/Diferenciais'
import FAQ from './components/FAQ'
import WhatsAppCTA from './components/WhatsAppCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Plans />
        <Diferenciais />
        <FAQ />
        <WhatsAppCTA />
      </main>
      <Footer />
    </>
  )
}
