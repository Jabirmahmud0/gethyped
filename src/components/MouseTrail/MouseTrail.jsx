import { useRef, useEffect, useCallback } from 'react';

const LOGOS = [
  'https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3404e57460370b97757c_7719b29e960423bac19acd325c901392_gh-logo-blue.svg',
  'https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3415233f03ab6c1143fa_gh-logo-pink.svg',
  'https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3415e192971624995445_gh-logo-green.svg',
  'https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3415b3eecf81e4b1d9a7_gh-logo-red.svg',
];

export default function MouseTrail() {
  const sectionRef = useRef(null);
  const indexRef = useRef(0);
  const incrRef = useRef(0);
  const oldXRef = useRef(0);
  const oldYRef = useRef(0);

  const createLogo = useCallback((x, y, deltaX, deltaY) => {
    const section = sectionRef.current;
    if (!section) return;

    const img = document.createElement('img');
    img.src = LOGOS[indexRef.current % LOGOS.length];
    indexRef.current += 1;

    // Random tilt
    const rotation = (Math.random() - 0.5) * 20;
    const offsetX = (Math.random() - 0.5) * 40;

    // Position at cursor
    img.style.cssText = `
      position: absolute;
      width: 25vw;
      max-width: 350px;
      min-width: 180px;
      pointer-events: none;
      z-index: 50;
      left: ${x + offsetX}px;
      top: ${y}px;
      transform: translate(-50%, -50%) rotate(${rotation}deg) scale(1.2);
      transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease;
      opacity: 1;
    `;

    section.appendChild(img);

    // Bounce in
    requestAnimationFrame(() => {
      img.style.transform = `translate(-50%, -50%) rotate(${rotation}deg) scale(1)`;
    });

    // Drift in direction of mouse movement
    setTimeout(() => {
      img.style.left = `${x + offsetX + deltaX * 4}px`;
      img.style.top = `${y + deltaY * 4}px`;
      img.style.transition = 'left 1.5s ease-out, top 1.5s ease-out, transform 0.3s ease, opacity 0.3s ease';
    }, 50);

    // Shrink and remove
    setTimeout(() => {
      img.style.transform = `translate(-50%, -50%) rotate(${rotation}deg) scale(0)`;
      img.style.opacity = '0';
    }, 700);

    setTimeout(() => {
      if (section.contains(img)) section.removeChild(img);
    }, 1100);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const resetDist = window.innerWidth / 3;

    const handleMove = (e) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      incrRef.current +=
        Math.abs(e.clientX - oldXRef.current) +
        Math.abs(e.clientY - oldYRef.current);

      if (incrRef.current > resetDist) {
        incrRef.current = 0;
        createLogo(
          x,
          y,
          e.clientX - oldXRef.current,
          e.clientY - oldYRef.current
        );
      }

      oldXRef.current = e.clientX;
      oldYRef.current = e.clientY;
    };

    section.addEventListener('mousemove', handleMove);
    return () => section.removeEventListener('mousemove', handleMove);
  }, [createLogo]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#FAF4EC] overflow-hidden hidden md:flex flex-col items-center justify-center pt-58 pb-32 gap-8"
      style={{ minHeight: '50vh' }}
    >
      {/* Hidden logo pool — not visible */}
      <div className="hidden">
        {LOGOS.map((src, i) => (
          <img key={i} src={src} alt="" />
        ))}
      </div>

      {/* Heading */}
      <h2 className="text-5xl md:text-8xl font-extrabold text-black text-center z-10 relative pointer-events-none select-none">
        Let's Get Hyped!
      </h2>

      {/* Buttons */}
      <div className="flex items-center gap-4 z-10 relative">

      <a
          href="mailto:info@gethyped.nl"
          className="cursor-pointer inline-flex items-center gap-3 border-2 border-black bg-[#FAF4EC] text-black px-6 py-3 rounded-lg font-semibold text-sm hover:bg-black hover:text-white transition-all hover:-rotate-3"
        >
          Mail ons direct
          <span className="bg-black text-white rounded-md w-8 h-8 flex items-center justify-center border-2 border-black">
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </span>
        </a>

        <a
          href="/contact"
          className="cursor-pointer inline-flex items-center gap-3 bg-[#FF4800] text-white px-6 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-all hover:rotate-3"
        >
          Get Results
          <span className="bg-white text-black rounded-md w-8 h-8 flex items-center justify-center">
            🔥
          </span>
        </a>
      </div>
    </section>
  );
}