import React, { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="px-4 py-4 md:px-10 bg-slate-800">
      <div className="flex items-center justify-between">

        {/* اللوجو */}
        <h1 className="text-2xl font-bold md:text-4xl">
          <span className="text-white">Badwy</span>
          <span className="text-purple-500">.dev</span>
        </h1>

        {/* الروابط (كمبيوتر) */}
        <ul className="hidden gap-8 text-white md:flex">
          <li><a href="#Home">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#Projects">Projects</a></li>
        </ul>

        {/* الزرار (كمبيوتر) */}
       {/* كمبيوتر */}
<a href="#contact" className="hidden px-6 py-2 text-white border border-white rounded md:block btn1">
  Let's Connect
</a>

{/* موبايل (جوه القايمة) */}
{/* كمبيوتر */}

        {/* زرار الهمبرجر (موبايل) */}
        <button
          className="text-3xl text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* القايمة (موبايل) */}
      {open && (
        <div className="flex flex-col gap-4 pt-4 text-white md:hidden">
          <a href="#Home" onClick={() => setOpen(false)}>Home</a>
          <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
          <a href="#Projects" onClick={() => setOpen(false)}>Projects</a>
        
          
        </div>
      )}
    </nav>
  )
}

export default Navbar