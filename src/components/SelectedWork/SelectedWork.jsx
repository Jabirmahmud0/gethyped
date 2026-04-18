import React from 'react';

const works = [
  {
    id: 1,
    title: 'Van nul naar vol, binnen 3 weken',
    client: 'Bullit',
    link: '/work/bullit',
    colorCode: '#e84524', // Original Brand Orange
    videoUrl: 'https://gethyped.b-cdn.net/Bullit/Bullit%20%7C%20Loop.mp4',
    thumbUrl: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/69c3d06cc7a0b07e150a671d_Bullit%20branded%20placeholder_2.1.1.avif',
    offsetY: 'mt-0',
  },
  {
    id: 2,
    title: 'Zacht in smaak, sterk in beeld',
    client: 'Roasta',
    link: '/work/roasta',
    colorCode: '#1a47df', // Original Brand Blue
    videoUrl: 'https://gethyped.b-cdn.net/Roasta/roasta-loop.mp4',
    thumbUrl: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/68716a54a3bf63bf25c2ae92_roasta-placeholder.avif',
    offsetY: '-mt-12',
  },
  {
    id: 3,
    title: 'Content die écht smaakt (en raakt)',
    client: 'Loco',
    link: '/work/loco',
    colorCode: '#00a463', // Original Brand Green
    videoUrl: 'https://gethyped.b-cdn.net/Loco/loco-bites-loop.mp4',
    thumbUrl: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/68716b4e8982337b1d3d1bd7_loco-loco-placeholder.avif',
    offsetY: '-mt-24',
  },
];

function ArrowUpRight() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7"></line>
      <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="12" x2="20" y2="12"></line>
      <polyline points="13 5 20 12 13 19"></polyline>
    </svg>
  );
}

function WorkCard({ work }) {
  return (
    <a
      href={work.link}
      className="group block relative w-full max-w-full aspect-[3/4.5] md:aspect-[3/4] rounded-4xl overflow-hidden transition-all duration-200 will-change-transform shadow-md border-[8px] md:hover:-translate-y-3 md:hover:-rotate-[2.5deg] md:hover:scale-[1.03]"
      style={{ borderColor: work.colorCode }}
    >
      {/* Background Image / Video Container */}
      <div className="absolute inset-0 w-full h-full bg-[#f4f4f4]">
        <img
          src={work.thumbUrl}
          alt={work.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <video
          muted
          loop
          autoPlay
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          src={work.videoUrl}
        />
      </div>

      {/* Bottom info bar - Floating with gaps and rounded top-left curved shape using SVG inline */}
      <div 
        className="absolute bottom-3 left-3 right-3 max-w-[calc(100%-1.5rem)] text-white overflow-hidden rounded-b-xl"
        style={{ color: work.innerColor || work.colorCode }}
      >
        {/* Background rounded slanted polygon from original design */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="100%" 
          height="100%" 
          viewBox="0 0 429 174" 
          fill="none" 
          className="absolute inset-0 w-full h-full object-fill drop-shadow-sm"
          preserveAspectRatio="none"
        >
          <path d="M428.625 35.0943V136.589C428.625 152.326 428.625 167.249 428.625 173.088L1.03513e-06 173.082C-1.56688e-05 170.148 0.000175319 166.808 0.000175319 159.068V77.9695C0.000175319 70.9826 5.03458 65.0132 11.904 63.8674L388.605 1.00885C409.565 -2.47661 428.625 13.7568 428.625 35.0862" fill="currentColor"></path>
        </svg>

        <div className="relative z-10 flex min-w-0 flex-col items-start pt-[76px] pb-6 px-5 sm:px-8 min-h-[140px]">
          <div className="absolute top-[32px] right-4 sm:right-6 bg-white rounded-full w-10 h-10 flex items-center justify-center text-black shadow-sm overflow-hidden transition-transform duration-200 ease-out md:group-hover:scale-110">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* First arrow - slides out top right */}
              <div className="absolute transition-transform duration-200 ease-out md:group-hover:translate-x-[150%] md:group-hover:-translate-y-[150%]">
                <ArrowUpRight />
              </div>
              {/* Second arrow - slides in from bottom left */}
              <div className="absolute transition-transform duration-200 ease-out -translate-x-[150%] translate-y-[150%] md:group-hover:translate-x-0 md:group-hover:translate-y-0">
                <ArrowUpRight />
              </div>
            </div>
          </div>
          <h3 className="relative mb-4 max-w-full pr-10 text-white font-[800] text-[20px] sm:text-[22px] leading-[1.2] drop-shadow-sm break-words">
            {work.title}
          </h3>
          <span className="inline-block bg-white/20 text-white text-[12px] font-bold px-4 py-1.5 rounded-full relative">
            {work.client}
          </span>
        </div>
      </div>
    </a>
  );
}

export default function SelectedWork() {
  return (
    <section className="bg-[#FAF4EC] py-16 md:py-24 px-4 sm:px-6 md:px-12 overflow-x-clip">
      <div className="max-w-[1500px] mx-auto min-w-0 overflow-x-clip">

        <div className="grid min-w-0 grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 xl:gap-20 items-end">
          
          {/* Col 1 */}
          <div className="flex min-w-0 flex-col justify-between h-full">
            <div className="mb-12 mt-4 md:mt-0 md:pt-10">
              <h2 className="text-[clamp(2.9rem,14vw,3.5rem)] md:text-[4.5rem] lg:text-[5rem] font-[800] leading-[1.05] mb-6 text-[#1A1A1A] tracking-tight max-w-full break-words">
                Content<br />dat scoort.
              </h2>
              <p className="text-[1.1rem] text-gray-700 font-medium leading-relaxed mb-10 max-w-[320px]">
                Wij vertellen jouw verhaal. Op een manier die écht past bij jouw doelgroep. Met creatieve content die werkt en het verschil maakt.
              </p>
              
              <a
                href="/work"
                className="inline-flex max-w-full items-center gap-3 border-[2px] border-[#1A1A1A] pl-5 pr-2 py-2 rounded-lg font-[700] text-sm hover:bg-[#1A1A1A] hover:text-white transition-all duration-[450ms] ease-[cubic-bezier(0.34,2.27,0.64,1)] group md:hover:-skew-y-[4deg] md:hover:-rotate-[1deg] md:hover:scale-[1.02]"
              >
                <span className="break-words">Bekijk al ons werk</span>
                <span className="bg-[#1A1A1A] text-white rounded-lg w-8 h-8 flex items-center justify-center group-hover:bg-white group-hover:text-[#1A1A1A] transition-colors">
                  <ArrowRight />
                </span>
              </a>
            </div>
            
            <WorkCard work={works[0]} />
          </div>

          {/* Col 2 */}
          <div className="flex min-w-0 flex-col justify-end h-full md:pb-24 lg:pb-32">
            <WorkCard work={works[1]} />
          </div>

          {/* Col 3 */}
          <div className="flex min-w-0 flex-col justify-end h-full md:pb-48 lg:pb-64">
            <WorkCard work={works[2]} />
          </div>

        </div>

      </div>
    </section>
  );
}
