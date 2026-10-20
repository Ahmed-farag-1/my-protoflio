import { useEffect, useState } from 'react'
import MyPhoto from '../components/img/download.png'
function Data() {

  
const  [text,setText]=useState("")
const fullText="front End Developer"

useEffect(()=>{
  let i =0
  const interval =setInterval(() => {
    setText(fullText.slice(0,i))
    i++
    if (i > fullText.length) i = 0
  }, 500);
  
  return ()=> clearInterval(interval)
},[])
  
  return (
     
<section id='Home'> 
    <div className="flex justify-between min-h-screen px-10 py-20">
      
      
      <div className="flex flex-col justify-center w-1/2 gap-5">
        
        <span className="px-4 py-2 text-white bg-blue-800 rounded w-fit">
          Welcome to my Portfolio
        </span>

      
<h1 className="text-4xl font-bold leading-tight text-transparent bg-gradient-to-r from-white via-blue-800 via-blue-300 to-pink-300 bg-clip-text">
  Hi! I'm Ahmed Farg Badwy <br />
 
</h1>
  <span className="text-4xl font-bold leading-tight text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
            {text}</span>

        <p className="text-lg text-gray-400">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>

        <button className="flex items-center gap-2 font-bold text-white w-fit">
          Let's Connect →
        </button>

      </div>

      
      <div className="flex items-end justify-center w-1/2">

        <img src={MyPhoto} alt="profile"  className="w-96 float-img " />
      </div>

    </div>
    </section>
  )
}


export default Data