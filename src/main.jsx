import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Hero from './components/hero'
import About from './components/about'
import Booking from './components/booking'
import Dining from './components/dining'
import Cta from './components/cta'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <Hero />
      <main>
        <About />
        <Booking />
        <Dining />
        <Cta />
      </main>
    </>
  </StrictMode>,
)
