import { useState } from 'react'
import { Link } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Home', href: '#Home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#Projects' },
]

const CONNECT_BUTTON = 'px-6 py-2 text-white border border-white rounded btn1'

function Logo() {
  return (
    <h1 className="text-2xl font-bold md:text-4xl">
      <span className="text-white">Badwy</span>
      <span className="text-purple-500">.dev</span>
    </h1>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const closeMenu = () => setOpen(false)

  return (
    <nav className="px-4 py-4 md:px-10 bg-slate-800">
      <div className="flex items-center justify-between">
        <Logo />

        {/* Desktop links */}
        <ul className="hidden gap-8 text-white md:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>

        {/* Desktop button */}
        <Link to="/contact" className={`hidden md:block ${CONNECT_BUTTON}`}>
          Let's Connect
        </Link>

        {/* Mobile hamburger */}
        <button
          className="text-3xl text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="flex flex-col gap-4 pt-4 text-white md:hidden">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={href} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <Link to="/contact" onClick={closeMenu} className={`w-fit ${CONNECT_BUTTON}`}>
            Let's Connect
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
