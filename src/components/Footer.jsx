const SOCIAL_ICONS = ['in', 'f', 'ig']

function Newsletter() {
  return (
    <div className="flex flex-col items-center justify-between gap-6 px-6 py-10 mb-10 bg-white md:flex-row md:px-16 rounded-3xl">
      <h2 className="w-full text-xl font-bold text-center text-gray-900 md:w-1/2 md:text-2xl md:text-left">
        Subscribe to our Newsletter <br />
        & Never miss latest updates
      </h2>

      <div className="flex w-full overflow-hidden border-2 border-purple-600 md:w-1/2 rounded-xl">
        <input
          type="email"
          placeholder="Email Address"
          className="flex-1 min-w-0 px-4 py-3 text-gray-700 outline-none md:px-6 md:py-4"
        />
        <button className="px-4 py-3 font-bold text-white transition duration-300 bg-purple-600 md:px-8 md:py-4 hover:bg-purple-700">
          Submit
        </button>
      </div>
    </div>
  )
}

function SocialIcon({ label }) {
  return (
    <div className="flex items-center justify-center w-10 h-10 text-white transition duration-300 border border-gray-600 rounded-full cursor-pointer hover:border-purple-500">
      {label}
    </div>
  )
}

function Footer() {
  return (
    <footer className="px-4 pb-10 bg-black md:px-10">
      <Newsletter />

      <h3 className="mb-4 text-2xl font-bold">
        <span className="text-white">Badwy</span>
        <span className="text-purple-500">.dev</span>
      </h3>

      <div className="flex flex-col items-center justify-between gap-4 pt-6 border-t border-gray-800 md:flex-row">
        <p className="text-sm text-center text-gray-400 md:text-left">
          Copyright 2025. All Rights Reserved By Ahmed Farg Badwy
        </p>

        <div className="flex gap-4">
          {SOCIAL_ICONS.map((icon) => (
            <SocialIcon key={icon} label={icon} />
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
