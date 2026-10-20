function Footer() {
  return (
    <div className="px-10 pb-10 bg-black">

      {/* Newsletter */}
      <div className="flex items-center justify-between px-16 py-10 mb-10 bg-white rounded-3xl">
        <h2 className="w-1/2 text-2xl font-bold text-gray-900">
          Subscribe to our Newsletter <br />
          & Never miss latest updates
        </h2>
        <div className="flex w-1/2 overflow-hidden border-2 border-purple-600 rounded-xl">
          <input type="email" placeholder="Email Address"
            className="flex-1 px-6 py-4 text-gray-700 outline-none" />
          <button className="px-8 py-4 font-bold text-white transition duration-300 bg-purple-600 hover:bg-purple-700">
            Submit
          </button>
        </div>
      </div>

      {/* Footer Bottom */}<span className="text-white">Badwy</span>
  <span className="text-purple-500">.dev</span>      
      <div className="flex items-center justify-between pt-6 border-t border-gray-800">
   <p className="text-sm text-gray-400">
          Copyright 2025. All Rights Reserved By Ahmed Farg Badwy
        </p>
        <div className="flex gap-4">
          {['in', 'f', 'ig'].map((icon) => (
            <div key={icon}
              className="flex items-center justify-center w-10 h-10 text-white transition duration-300 border border-gray-600 rounded-full cursor-pointer hover:border-purple-500">
              {icon}
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Footer