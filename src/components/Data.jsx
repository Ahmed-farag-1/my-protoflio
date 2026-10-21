import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MyPhoto from '../components/img/download.png'

function Data() {
  const [text, setText] = useState("")
  const fullText = "front End Developer"

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setText(fullText.slice(0, i))
      i++
      if (i > fullText.length) i = 0
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="Home">
      <div className="flex flex-col items-center justify-between min-h-screen gap-10 px-4 py-20 md:flex-row md:px-10">

        {/* النص */}
        <div className="flex flex-col justify-center w-full gap-5 md:w-1/2">

          <span className="px-4 py-2 text-white bg-blue-800 rounded w-fit">
            Welcome to my Portfolio
          </span>

          <h1 className="text-3xl font-bold leading-tight text-transparent md:text-5xl bg-gradient-to-r from-white via-blue-300 to-pink-300 bg-clip-text">
            Hi! I'm Ahmed Farg Badwy
          </h1>

          <span className="text-3xl font-bold leading-tight text-transparent md:text-5xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
            {text}
          </span>

          <p className="text-base text-gray-400 md:text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>

          <Link to="/contact" className="font-bold text-white w-fit">
            Let's Connect →
          </Link>
        </div>

        {/* الصورة */}
        <div className="flex justify-center w-full md:w-1/2 md:justify-end">
          <img
            src={MyPhoto}
            alt="profile"
            className="w-64 md:w-96 float-img"
          />
        </div>

      </div>
    </section>
  )
}

export default Data