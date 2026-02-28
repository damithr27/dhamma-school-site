export default function Footer() {
  return (
    <footer className="bg-[#dddddd] text-black pt-12">

      {/* TOP ROW: PHONE | ADDRESS | EMAIL */}
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">

          {/* Phone */}
          <div>
            <div className="text-3xl mb-2">📱</div>
            <p className="text-sm font-medium">0788661982</p>
          </div>

          {/* Address */}
          <div>
            <div className="text-3xl mb-2">📍</div>
            <p className="text-sm font-medium leading-relaxed uppercase">
              Sri Bodhirajaraama Viharaya<br />
              Pilawala South<br />
              Sri Lanka
            </p>
          </div>

          {/* Email */}
          <div>
            <div className="text-3xl mb-2">✉️</div>
            <p className="text-sm font-medium">
              <a href="mailto:sribodhirajaramadahampasala@gmail.com" className="hover:text-amber-600">
                sribodhirajaramadahampasala@gmail.com
              </a>
            </p>
          </div>

        </div>
      </div>

      {/* SEPARATOR */}
      <div className="max-w-6xl mx-auto mt-10 border-t border-gray-400"></div>

      {/* NAV LINKS + SOCIAL ICONS */}
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 items-center">
        
        {/* Links */}
        <ul className="flex flex-wrap justify-center md:justify-start gap-6 text-sm font-semibold uppercase tracking-wide">
          <li><a href="/" className="hover:text-amber-600">Home</a></li>
          <li><a href="/about" className="hover:text-amber-600">About</a></li>
          <li><a href="/gallery" className="hover:text-amber-600">Gallery</a></li>
          <li><a href="/events" className="hover:text-amber-600">Events</a></li>
          <li><a href="/contact" className="hover:text-amber-600">Contact Us</a></li>
        </ul>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-end gap-6 text-2xl text-black">
          <a className="hover:text-amber-600" href="#">📘</a>
          <a className="hover:text-amber-600" href="#">💬</a>
          <a className="hover:text-amber-600" href="#">▶️</a>
          <a className="hover:text-amber-600" href="#">📸</a>
          <a className="hover:text-amber-600" href="#">🔗</a>
        </div>

      </div>

      {/* BOTTOM DARK BAR */}
      <div className="bg-black text-gray-400 text-center py-4 text-xs tracking-wide">
        © {new Date().getFullYear()} Sri Bodhirajaraama Dhamma School — All Rights Reserved.
      </div>

    </footer>
  );
}
