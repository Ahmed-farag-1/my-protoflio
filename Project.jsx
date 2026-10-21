import { useState } from 'react'

const projects = {
  tab1: [
    { title: "Business Startup", desc: "Design & Development", img:'project2.png'},
    { title: "Business Startup", desc: "Design & Development", img:'project3.png'},
    { title: "Boost Startup", desc: "Development", img: "project4.png" },
  ],
  tab3: [
    { title: "Project 7", desc: "Description", img: "project2.png" },
    { title: "Project 8", desc: "Description", img: "project3.png" },
    { title: "Project 9", desc: "Description", img: "project4.png" },
  ],
}

const inputClass = "px-4 py-3 text-white placeholder-gray-300 bg-purple-800 bg-opacity-50 outline-none rounded-xl transition duration-300 focus:bg-white focus:text-gray-800"

function Project() {
  const [activeTab, setActiveTab] = useState('tab1')

  return (
    <section id='Projects'>
      
    
    <div className="px-10 py-20" id="projects">

      <div className="flex justify-center mb-10">
        <div className="flex p-1 bg-gray-900 rounded-full">
          {['tab1', 'tab2', 'tab3'].map((tab, i) => (
            <button key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-10 py-3 rounded-full font-bold transition duration-300 ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white'
                  : 'text-gray-400'
              }`}>
              Tab {i + 1}
            </button>
          ))}
        </div>
      </div>

      {activeTab === 'tab1' && (
        <div className="grid grid-cols-3 gap-6">
          {projects['tab1'].map((project, index) => (
            <div key={`tab1-${index}`} className="relative overflow-hidden cursor-pointer rounded-2xl">
              <img src={project.img} alt={project.title} className="object-cover w-full h-64" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-60">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-gray-300">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'tab2' && (
        <div className="flex items-center gap-10 p-10 rounded-3xl"
          style={{background: 'linear-gradient(135deg, #7c3aed, #9333ea, #6d28d9)'}}>

          <div className="w-1/2">
            <img src="/img3.png" alt="contact" className="w-full" />
          </div>

          <div className="flex flex-col w-1/2 gap-4">
            <h2 className="text-4xl font-bold text-white">Get In Touch</h2>

            <div className="flex gap-4">
              <input type="text" placeholder="First Name" className={`w-1/2 ${inputClass}`} />
              <input type="text" placeholder="Last Name" className={`w-1/2 ${inputClass}`} />
            </div>

            <div className="flex gap-4">
              <input type="email" placeholder="Email Address" className={`w-1/2 ${inputClass}`} />
              <input type="text" placeholder="Phone Number" className={`w-1/2 ${inputClass}`} />
            </div>

            <textarea placeholder="Message" rows={5} className={`resize-none ${inputClass}`} />

            <button className="py-3 font-bold text-purple-700 transition duration-300 bg-white rounded-xl hover:bg-gray-100">
              Send
            </button>
          </div>
        </div>
      )}

      {activeTab === 'tab3' && (
        <div className="grid grid-cols-3 gap-6">
          {projects['tab3'].map((project, index) => (
            <div key={`tab3-${index}`} className="relative overflow-hidden cursor-pointer rounded-2xl">
              <img src={project.img} alt={project.title} className="object-cover w-full h-64" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-60">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-gray-300">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
    </section>
  )
}

export default Project