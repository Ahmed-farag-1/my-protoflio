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
    <section id="skills">
      <div
        className="px-4 py-12 md:px-10 md:py-20 text-center w-[90%] md:w-[80%] m-auto rounded-3xl"
        style={{ background: 'linear-gradient(135deg, #1a0533, #0d1b4b, #1a0533, #4a0080, #0d1b4b)' }}
        id="skills"
      >
        <h2 className="mb-4 text-3xl font-bold text-white md:text-6xl">Skills</h2>
        <p className="mb-10 text-sm text-gray-400 md:text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>

        <Swiper
          modules={[Navigation]}
          navigation
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
        >
          {skills.map((skill, index) => (
            <SwiperSlide key={skill.name}>
              <div className="flex flex-col items-center gap-4 p-6">

                {/* الدايرة */}
                <div className="relative w-28 h-28 md:w-32 md:h-32">
                  <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                    <circle cx="18" cy="18" r="15.9"
                      fill="none" stroke="#374151" strokeWidth="3" />
                    <circle cx="18" cy="18" r="15.9"
                      fill="none" stroke={`url(#grad-${index})`} strokeWidth="3"
                      strokeDasharray={`${skill.level}, 100`}
                      strokeLinecap="round" />
                    <defs>
                      <linearGradient id={`grad-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#EC4899" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-white md:text-xl">
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