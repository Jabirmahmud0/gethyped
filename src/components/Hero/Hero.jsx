import React, { useState } from 'react';

export default function Hero() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const cards = [
    {
      type: 'stat',
      bg: 'bg-[#0052FF]',
      title: '10M+',
      subtitle: 'Organische views',
      paragraph: 'Groei door slimme content',
      dividerColor: 'bg-white/30',
      zIndex: 30,
      hidden: false,
    },
    {
      type: 'video',
      src: 'https://gethyped.b-cdn.net/Salontopper/Loop%20Salontopper.mp4',
      poster: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/69c40296636e683096701cda_video-thumb-01.avif',
      zIndex: 20,
      hidden: false,
    },
    {
      type: 'stat',
      bg: 'bg-[#00D084]',
      title: '30+',
      subtitle: 'Merken geholpen',
      paragraph: 'Van start-up tot multinational',
      dividerColor: 'bg-black/30',
      zIndex: 10,
      hidden: 'hidden sm:flex',
    },
    {
      type: 'video',
      src: 'https://gethyped.b-cdn.net/Petrol%20Head/petrolhead-loop.mp4',
      poster: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/69c402fa5b2a05b98200d317_video-thumb-02.avif',
      zIndex: 0,
      hidden: 'hidden md:block',
    },
  ];

  const rotations = [-6, 3, -3, 6];

  const getCardStyle = (index) => {
    const isHovered = hoveredIndex === index;
    const isLeft = hoveredIndex !== null && index < hoveredIndex;
    const isRight = hoveredIndex !== null && index > hoveredIndex;
    const defaultRotate = rotations[index] || 0;

    let translateX = 0;
    let scale = 1;
    let translateY = 0;
    let rotate = defaultRotate;

    if (isHovered) {
      scale = 1.06;
      translateY = -20;
      rotate = 0;
    } else if (isLeft) {
      translateX = -100;
    } else if (isRight) {
      translateX = 100;
    }

    return {
      transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale}) rotate(${rotate}deg)`,
      transition: 'all 0.45s cubic-bezier(0.34, 2.27, 0.64, 1)',
      zIndex: isHovered ? 50 : cards[index].zIndex,
      boxShadow: isHovered ? '0 30px 60px -15px rgba(0, 0, 0, 0.4)' : undefined,
    };
  };

  return (
    <section className="pt-40 pb-16 px-4 sm:px-6 lg:px-10">
      <div className="max-w-[1920px] mx-auto">
        <div className="mb-20">
          <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[5.5rem] lg:text-[7.5rem] leading-[0.95] font-bold tracking-[-0.04em] mb-8">
            Get Hyped.<br className="sm:hidden"/> Get <br className="hidden sm:block"/>
            Noticed.<br className="sm:hidden"/> Get Results.
          </h1>
          <p className="text-2xl md:text-3xl font-medium text-[#131313] max-w-xl leading-tight">
            Klaar met gokken op content<br className="hidden md:block"/> die niets oplevert?
          </p>
        </div>

        {/* Cards container - shifted right on large screens */}
        <div className="flex flex-row gap-3 md:gap-0 md:-space-x-16 lg:-space-x-20 lg:ml-20 items-center relative z-10 py-8 overflow-x-auto md:overflow-visible scrollbar-hide">
          {cards.map((card, index) => {
            if (card.type === 'stat') {
              return (
                <div
                  key={index}
                  className={`${card.hidden || ''} hero-card rounded-2xl p-4 md:p-10 w-[160px] sm:w-[200px] md:w-[28rem] h-[180px] sm:h-[220px] md:h-[32rem] shadow-xl cursor-pointer flex-shrink-0`}
                  style={getCardStyle(index)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className={`hero-card__bg ${card.bg}`}></div>
                  <div className="hero-card__content">
                    <div className="text-4xl sm:text-5xl md:text-8xl font-bold hero-card__text-group">{card.title}</div>
                    <div className="hero-card__text-group">
                      <h2 className="text-base sm:text-lg md:text-2xl font-bold mb-2 md:mb-4">{card.subtitle}</h2>
                      <div className={`w-full h-px ${card.dividerColor} mb-2 md:mb-4`}></div>
                      <p className="text-sm md:text-lg">{card.paragraph}</p>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={index}
                className={`${card.hidden || ''} hero-card rounded-2xl w-[160px] sm:w-[200px] md:w-[28rem] h-[180px] sm:h-[220px] md:h-[32rem] shadow-xl cursor-pointer flex-shrink-0`}
                style={getCardStyle(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Video fills entire card with no white space */}
                <div className="relative w-full h-full overflow-hidden rounded-2xl bg-[#131313]">
                  {card.poster && (
                    <img
                      src={card.poster}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                  )}
                  <video
                    muted
                    loop
                    playsInline
                    autoPlay
                    className="absolute inset-0 w-full h-full object-cover z-10"
                  >
                    <source src={card.src} type="video/mp4" />
                  </video>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
