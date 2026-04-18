import React, { useState } from 'react';

export default function Hero() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const cards = [
    {
      type: 'stat',
      theme: 'theme-blue',
      title: '10M+',
      subtitle: 'Organische views',
      paragraph: 'Groei door slimme content',
    },
    {
      type: 'video',
      src: 'https://gethyped.b-cdn.net/Salontopper/Loop%20Salontopper.mp4',
      poster: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/69c40296636e683096701cda_video-thumb-01.avif',
    },
    {
      type: 'stat',
      theme: 'theme-green',
      title: '30+',
      subtitle: 'Merken geholpen',
      paragraph: 'Van start-up tot multinational',
      hideClass: 'hide-mobile',
    },
    {
      type: 'video',
      src: 'https://gethyped.b-cdn.net/Petrol%20Head/petrolhead-loop.mp4',
      poster: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/69c402fa5b2a05b98200d317_video-thumb-02.avif',
      hideClass: 'hide-tablet-mobile',
    },
  ];

  const rotations = [-6, 3, -3, 6];

  const getCardStyle = (index) => {
    const isHovered = hoveredIndex === index;
    const isLeft = hoveredIndex !== null && index < hoveredIndex;
    const isRight = hoveredIndex !== null && index > hoveredIndex;
    const defaultRotate = rotations[index] || 0;

    let translateX = "0";
    let scale = 1;
    let translateY = 0;
    let rotate = defaultRotate;

    if (isHovered) {
      scale = 1.05;
      translateY = -16;
      rotate = 0;
    } else if (isLeft) {
      translateX = "-40%";
    } else if (isRight) {
      translateX = "40%";
    }

    return {
      transform: `translateX(${translateX}) translateY(${translateY}px) scale(${scale}) rotate(${rotate}deg)`,
      zIndex: isHovered ? 50 : 4 - index,
    };
  };

  return (
    <section className="section_hero overflow-x-hidden">
      <div className="padding-global">
        <div className="container-col-12">
          <div className="hero">
            {/* Hero Title */}
            <div className="hero-title">
              <h1 className="heading-xxl">
                Get Hyped. Get<br />Noticed. Get Results.
              </h1>
              <div className="max-width-60ch">
                <p className="paragraph-l">
                  Klaar met gokken op content<br />die niets oplevert?
                </p>
              </div>
            </div>

            {/* Cards */}
            <div className="mwg_effect025">
              <div className="container-col-12">
                <div className="container is-mwg_effect025">
                  {cards.map((card, index) => {
                    const cardClasses = [
                      'results-card',
                      card.theme || '',
                      card.hideClass || '',
                    ].filter(Boolean).join(' ');

                    if (card.type === 'stat') {
                      return (
                        <div
                          key={index}
                          className={cardClasses}
                          style={getCardStyle(index)}
                          onMouseEnter={() => setHoveredIndex(index)}
                          onMouseLeave={() => setHoveredIndex(null)}
                        >
                          <div className="results-card_content">
                            <div className="results-card_title">{card.title}</div>
                            <div className="results-card_body">
                              <h2 className="results-card_subtitle">{card.subtitle}</h2>
                              <div className="results-card_divider"></div>
                              <p className="results-card_paragraph">{card.paragraph}</p>
                            </div>
                          </div>
                        </div>
                      );
                    }

                    return (
                      <div
                        key={index}
                        className={cardClasses}
                        style={getCardStyle(index)}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                      >
                        {card.poster && (
                          <img
                            src={card.poster}
                            alt=""
                            className="image"
                            loading="lazy"
                          />
                        )}
                        <video
                          muted
                          loop
                          playsInline
                          autoPlay
                          className="video"
                        >
                          <source src={card.src} type="video/mp4" />
                        </video>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
