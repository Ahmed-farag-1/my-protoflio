import React from 'react'

function Navbar() {
  return (
    <nav className='flex-col items-center justify-between px-4 py-5 md:flex-row md:px-10 bg-slate-800'>
<h1 className="text-3xl font-bold md:text-6xl">
  <span className="text-white">Badwy</span>
  <span className="text-purple-500">.dev</span>
</h1>      <ul className="flex gap-8 text-white list">
<a href="#Home"><li>Home</li></a>
       <a href="#skills"><li>Skills</li></a>
<a href="#Projects"> <li>Projects</li></a>
      </ul>
       <button className="px-4 text-white border border-white rounded md:px-10py-2 btn1">
        Let's Connect
      </button>
    </nav>


  )
}

export default Navbar
