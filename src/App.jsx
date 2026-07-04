import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Gallery from './components/Gallery.jsx'
import BookingSection from './components/BookingSection.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppFloat from './components/WhatsAppFloat.jsx'

/**
 * Estructura de la página.
 * El orden de las secciones también define el flujo de venta:
 * presentar → mostrar servicios → mostrar trabajos → invitar a agendar.
 */
export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <BookingSection />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
