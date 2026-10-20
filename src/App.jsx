import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Data from './components/Data'
import Skills from './components/Skills'
import Project from './components/Project'
import Footer from './components/Footer'

function App() {


  
  return (
    <>
     
     <div className="relative min-h-screen overflow-hidden bg-black">


  {/* نجوم عادية */}
<div className="w-1 h-1 star" style={{top:'5%', left:'10%', animationDelay:'0s'}}></div>
<div className="w-2 h-2 star" style={{top:'15%', left:'25%', animationDelay:'0.5s'}}></div>
<div className="w-1 h-1 star" style={{top:'25%', left:'60%', animationDelay:'1s'}}></div>
<div className="w-2 h-2 star" style={{top:'40%', left:'85%', animationDelay:'1.5s'}}></div>
<div className="w-1 h-1 star" style={{top:'55%', left:'45%', animationDelay:'2s'}}></div>
<div className="w-2 h-2 star" style={{top:'70%', left:'15%', animationDelay:'0.8s'}}></div>
<div className="w-1 h-1 star" style={{top:'80%', left:'70%', animationDelay:'1.2s'}}></div>
<div className="w-2 h-2 star" style={{top:'90%', left:'35%', animationDelay:'0.3s'}}></div>

{/* نجوم بـ pulse */}
<div className="w-1 h-1 star-pulse" style={{top:'10%', left:'75%', animationDelay:'0.5s'}}></div>
<div className="w-2 h-2 star-pulse" style={{top:'35%', left:'20%', animationDelay:'1s'}}></div>
<div className="w-1 h-1 star-pulse" style={{top:'65%', left:'90%', animationDelay:'1.5s'}}></div>

{/* نجوم ساقطة */}
<div className="shooting-star" style={{top:'10%', left:'20%', animationDelay:'0s'}}></div>
<div className="shooting-star" style={{top:'30%', left:'50%', animationDelay:'1.5s'}}></div>
<div className="shooting-star" style={{top:'60%', left:'10%', animationDelay:'3s'}}></div>
<div className="shooting-star" style={{top:'10%', left:'30%', animationDelay:'0s'}}></div>
<div className="shooting-star" style={{top:'25%', left:'60%', animationDelay:'0.7s'}}></div>
<div className="shooting-star" style={{top:'50%', left:'10%', animationDelay:'1.4s'}}></div>
<div className="shooting-star" style={{top:'70%', left:'80%', animationDelay:'2s'}}></div>
<div className="shooting-star" style={{top:'15%', left:'45%', animationDelay:'1s'}}></div>
  <Navbar />
  <Data />
  <Skills/>
   <Project />  
   <Footer/>
</div>
   
    </>
  
    
    )
}

export default App
