import React from 'react';

export default function Results() {
  return (
    <section className="py-24 px-4 md:px-8 max-w-[1400px] mx-auto overflow-x-hidden">
      {/* Top Large Text */}
      <div className="mb-24 max-w-5xl">
        <h2 className="text-4xl sm:text-5xl md:text-xl lg:text-6xl font-bold leading-[1.05] tracking-[-0.02em] text-[#131313]">
          Wij maken content die opvalt. Die blijft hangen. Die jouw doelgroep raakt en jouw merk in beweging brengt. Snel, krachtig en energiek.
        </h2>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-end justify-between gap-12 md:gap-8">
        {/* Left: Image */}
        <div className="w-full md:w-auto flex justify-center md:justify-start">
          <div className="rounded-3xl overflow-hidden aspect-[4/5] w-full max-w-[320px]">
            <video muted loop playsInline autoPlay className="w-full h-full object-cover md:hidden">
              <source src="https://gethyped.b-cdn.net/New%20Reach/new-reach-loop.mp4" type="video/mp4" />
            </video>
            <img src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/6894757aa6dd3f84f6e463a2_Anniek%20Bril.webp" alt="Anniek Bril" className="w-full h-full object-cover hidden md:block" />
          </div>
        </div>

        {/* Middle: Text & Button */}
        <div className="w-full md:max-w-md flex flex-col items-start pb-2">
          <p className="text-xl md:text-2xl font-bold text-[#131313] leading-tight mb-8">
            We stoppen niet bij mooie plaatjes en vette beelden. We maken het meetbaar. Zo weet je precies wat werkt en wat niet. Nooit meer content zonder strategie. Nooit meer content zonder resultaat.
          </p>
          
          <a href="/about" className="button-default">
            <div className="button-default__inner px-0 py-0">
              <div className="button-default__background border border-black/20 bg-transparent"></div>
              <div className="flex items-center justify-between pl-5 pr-1.5 py-1 w-full">
                <span className="button-default__text !mr-4 text-sm text-[#131313]">Leer ons kennen</span>
                <div className="button-default__icon !ml-0 bg-[#131313] text-white rounded-full p-2 flex items-center justify-center">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Right: Scroll Down Button */}
        <div className="hidden md:flex pb-2">
          <button className="button-default">
            <div className="button-default__inner !w-12 !h-12 !p-0">
              <div className="button-default__background border border-black/20 bg-transparent"></div>
              <div className="button-default__icon !m-0 text-[#FF4C24]">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
