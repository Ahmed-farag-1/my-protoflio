import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const skills = [
  { name: 'Web Development', level: 95 },
  { name: 'React', level: 80 },
  { name: 'JavaScript', level: 90 },
  { name: 'Tailwind', level: 85 },
  { name: 'CSS', level: 88 },
]

function Skills() {
  return (
    <section id='skills'>
<div className="px-4 md:px-10 py-20 text-center w-[80%] m-auto rounded-3xl" 
  style={{background: 'linear-gradient(135deg, #1a0533, #0d1b4b, #1a0533, #4a0080, #0d1b4b)'}}
  id="skills">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-6xl">Skills</h2>
      <p className="mb-10 text-gray-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

      <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView={3}
        spaceBetween={30}
      >
        {skills.map((skill) => (
          <SwiperSlide key={skill.name}>
            <div className="flex-col items-center gap-4 p-6 md:flex-row">
              
              {/* الدايرة */}
              <div className="relative w-32 h-32">
                <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                  <circle cx="18" cy="18" r="15.9"
                    fill="none" stroke="#374151" strokeWidth="3" />
                  <circle cx="18" cy="18" r="15.9"
                    fill="none" stroke="url(#grad)" strokeWidth="3"
                    strokeDasharray={`${skill.level}, 100`}
                    strokeLinecap="round" />
                  <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#EC4899" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="absolute inset-0 flex-col items-center justify-center text-xl font-bold text-white md:flex-row">
                  {skill.level}%
                </span>
              </div>

              <p className="font-bold text-white">{skill.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </section>
  )
}

export default Skills