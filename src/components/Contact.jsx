import { Link } from 'react-router-dom'

const PHONE = '201070399316'

const BACKGROUND = 'linear-gradient(135deg, #7c3aed, #9333ea, #6d28d9)'

const BUTTON_BASE =
  'w-full px-8 py-4 font-bold transition duration-300 sm:w-auto rounded-xl'

function Contact() {
  return (
    <section id="contact" className="flex items-center justify-center min-h-screen px-4 bg-black">
      <div
        className="w-full max-w-4xl p-8 mx-auto text-center md:p-14 rounded-3xl"
        style={{ background: BACKGROUND }}
      >
        <h2 className="mb-3 text-3xl font-bold text-white md:text-5xl">Let's Connect</h2>
        <p className="mb-8 text-sm text-purple-100 md:text-base">
          تواصل معي مباشرة عبر واتساب أو اتصال هاتفي
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={`https://wa.me/${PHONE}`}
            target="_blank"
            rel="noreferrer"
            className={`${BUTTON_BASE} text-white bg-green-500 hover:bg-green-600`}
          >
            WhatsApp
          </a>

          <a
            href={`tel:+${PHONE}`}
            className={`${BUTTON_BASE} text-purple-700 bg-white hover:bg-gray-100`}
          >
            Call Me
          </a>
        </div>

        <p className="mt-6 text-sm text-purple-100" dir="ltr">
          +{PHONE}
        </p>

        <Link to="/" className="inline-block mt-6 text-sm text-purple-100 underline">
          ← Back to Home
        </Link>
      </div>
    </section>
  )
}

export default Contact
