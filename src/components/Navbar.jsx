import React from 'react'

function Navbar() {
  return (
    <nav className='flex items-center justify-between px-10 py-5 bg-slate-800'>
<h1 className="text-2xl font-bold">
  <span className="text-white">Badwy</span>
  <span className="text-purple-500">.dev</span>
</h1>      <ul className="flex gap-8 text-white list">
<a href="#Home"><li>Home</li></a>
       <a href="#skills"><li>Skills</li></a>
<a href="#Projects"> <li>Projects</li></a>
      </ul>
       <button className="px-6 py-2 text-white border border-white rounded btn1">
        Let's Connect
      </button>
    </nav>


  )
}

export default Navbar
