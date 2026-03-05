import Navbar from './components/Navbar'
import WhatsAppButton from './components/WhatsAppButton'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import ServicesSection from './sections/ServicesSection'
import SedationSection from './sections/SedationSection'
import CEOSection from './sections/CEOSection'
import ScheduleSection from './sections/ScheduleSection'
import StatsSection from './sections/StatsSection'
import TestimonialsSection from './sections/TestimonialsSection'
import ContactSection from './sections/ContactSection'
import Footer from './sections/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <SedationSection />
        <CEOSection />
        <ScheduleSection />
        <StatsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
