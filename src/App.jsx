import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Data from './components/Data'
import Skills from './components/Skills'
import Project from './components/Project'
import Footer from './components/Footer'
import Contact from './components/Contact'

/* ---------- Background decorations ---------- */

// Regular twinkling stars
const STARS = [
  { size: 'w-1 h-1', top: '5%',  left: '10%', delay: '0s' },
  { size: 'w-2 h-2', top: '15%', left: '25%', delay: '0.5s' },
  { size: 'w-1 h-1', top: '25%', left: '60%', delay: '1s' },
  { size: 'w-2 h-2', top: '40%', left: '85%', delay: '1.5s' },
  { size: 'w-1 h-1', top: '55%', left: '45%', delay: '2s' },
  { size: 'w-2 h-2', top: '70%', left: '15%', delay: '0.8s' },
  { size: 'w-1 h-1', top: '80%', left: '70%', delay: '1.2s' },
  { size: 'w-2 h-2', top: '90%', left: '35%', delay: '0.3s' },
]

// Pulsing stars
const PULSE_STARS = [
  { size: 'w-1 h-1', top: '10%', left: '75%', delay: '0.5s' },
  { size: 'w-2 h-2', top: '35%', left: '20%', delay: '1s' },
  { size: 'w-1 h-1', top: '65%', left: '90%', delay: '1.5s' },
]

// Shooting stars
const SHOOTING_STARS = [
  { top: '10%', left: '20%', delay: '0s' },
  { top: '30%', left: '50%', delay: '1.5s' },
  { top: '60%', left: '10%', delay: '3s' },
  { top: '10%', left: '30%', delay: '0s' },
  { top: '25%', left: '60%', delay: '0.7s' },
  { top: '50%', left: '10%', delay: '1.4s' },
  { top: '70%', left: '80%', delay: '2s' },
  { top: '15%', left: '45%', delay: '1s' },
]

const position = ({ top, left, delay }) => ({
  top,
  left,
  animationDelay: delay,
})

function Background() {
  return (
    <>
      {STARS.map((s, i) => (
        <div key={`star-${i}`} className={`${s.size} star`} style={position(s)} />
      ))}
      {PULSE_STARS.map((s, i) => (
        <div key={`pulse-${i}`} className={`${s.size} star-pulse`} style={position(s)} />
      ))}
      {SHOOTING_STARS.map((s, i) => (
        <div key={`shoot-${i}`} className="shooting-star" style={position(s)} />
      ))}
    </>
  )
}

/* ---------- Pages ---------- */

function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <Background />
      <Navbar />
      <Data />
      <Skills />
      <Project />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
