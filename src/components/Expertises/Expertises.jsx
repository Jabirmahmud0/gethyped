import { useRef } from 'react';

const expertises = [
  {
    id: 1,
    number: '01',
    label: 'Expertise',
    title: 'Social strategy',
    subtitle: 'Slimme strategie. Sterke start.',
    description: 'We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt.',
    buttonText: 'Meer over social strategie',
    link: '/expertises/social-strategie',
    videoUrl: 'https://gethyped.b-cdn.net/MD/MD%20Loop%20Schaken.mp4',
    bg: 'bg-white',
    textColor: 'text-black',
    numberColor: 'text-black/10',
    labelBg: 'bg-[#f0ebe3]',
  },
  {
    id: 2,
    number: '02',
    label: 'Expertise',
    title: 'Content creation',
    subtitle: 'Content die opvalt en raakt.',
    description: 'We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Creatief, snel en energiek. Altijd met het doel voor ogen.',
    buttonText: 'Meer over content creatie',
    link: '/expertises/content-creatie',
    videoUrl: 'https://gethyped.b-cdn.net/Expertises/Loop%20BTS%20comp.mp4',
    bg: 'bg-[#f0a8f0]',
    textColor: 'text-black',
    numberColor: 'text-black/10',
    labelBg: 'bg-white',
  },
  {
    id: 3,
    number: '03',
    label: 'Expertise',
    title: 'Activation',
    subtitle: 'Zichtbaar waar en wanneer het telt.',
    description: 'De juiste content verdient het om gezien te worden. We verspreiden de content waar jouw doelgroep is. Zo raakt jouw merk de juiste mensen, precies waar en wanneer het telt.',
    buttonText: 'Meer over activatie',
    link: '/expertises/activatie',
    videoUrl: 'https://gethyped.b-cdn.net/Over%20de%20Top/overdetop-loop.mp4',
    bg: 'bg-[#2ecc8e]',
    textColor: 'text-black',
    numberColor: 'text-black/10',
    labelBg: 'bg-white',
  },
  {
    id: 4,
    number: '04',
    label: 'Expertise',
    title: 'Data',
    subtitle: 'Inzichten die impact maken.',
    description: 'We duiken in de cijfers om te snappen wat écht werkt. En sturen jouw content scherp bij.',
    buttonText: 'Meer over data',
    link: '/expertises/data',
    videoUrl: 'https://gethyped.b-cdn.net/Expertises/Data%20comp.mp4',
    bg: 'bg-[#a8c8f8]',
    textColor: 'text-black',
    numberColor: 'text-black/10',
    labelBg: 'bg-white',
  },
];

function ArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 0 22 21" fill="none">
      <path d="M11.2832 20.9176L9.14509 18.8002L15.5491 12.3962L-0.00939941 12.3962L-0.00939941 9.30322L15.5491 9.30322L9.14509 2.9096L11.2832 0.78186L21.3511 10.8497L11.2832 20.9176Z" fill="currentColor" />
    </svg>
  );
}

function ExpertiseCard({ item, index }) {
  return (
    <div
      className="sticky top-0 h-screen w-full overflow-hidden px-4 sm:px-6 lg:px-10 py-4"
      style={{ zIndex: index + 1 }}
    >
      <div className={`w-full h-full ${item.bg} ${item.textColor} rounded-[2rem] px-5 sm:px-6 md:px-12 py-8 md:py-10 flex flex-col justify-between overflow-hidden`}>

        {/* TOP ROW — label + title + number */}
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="flex max-w-full flex-col gap-5">
            {/* Label badge */}
            <span className={`inline-block ${item.labelBg} text-black text-base font-semibold px-5 py-2 rounded-lg w-fit`}>
              {item.label}
            </span>
            {/* Big title */}
            <h2 className="max-w-full break-words text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-extrabold leading-none tracking-tight">
              {item.title}
            </h2>
          </div>

          {/* Big faded number — top right */}
          <div className={`self-end md:self-auto text-6xl sm:text-7xl md:text-[12rem] font-extrabold ${item.numberColor} leading-none select-none`}>
            {item.number}
          </div>
        </div>

        {/* BOTTOM ROW — left text + right video */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">

          {/* Bottom left — subtitle + desc + button */}
          <div className="w-full md:w-1/2 flex flex-col gap-5">
            <h3 className="max-w-full break-words text-2xl md:text-3xl font-bold">
              {item.subtitle}
            </h3>
            <p className="max-w-md text-base sm:text-lg md:text-xl opacity-80 leading-relaxed">
              {item.description}
            </p>

            <a
              href={item.link}
              className={`inline-flex max-w-full items-center gap-3 text-base sm:text-lg font-bold px-5 sm:px-7 py-3.5 rounded-xl w-fit hover:opacity-80 transition-opacity ${
                item.id === 1
                  ? 'bg-[#FF4C24] text-white'
                  : 'bg-white text-black'
              }`}
            >
              <span className="break-words leading-tight">{item.buttonText}</span>
              <span className={`flex items-center justify-center rounded-lg p-2 border ${
                item.id === 1
                  ? 'bg-white text-[#FF4C24] border-white'
                  : 'bg-black text-white border-black/20'
              }`}>
                <ArrowIcon />
              </span>
            </a>
          </div>

          {/* Bottom right — video */}
          <div className="w-full md:w-[380px] lg:w-[440px] flex-shrink-0">
            <div className="rounded-2xl overflow-hidden aspect-[4/5] w-full shadow-lg">
              <video
                muted
                loop
                autoPlay
                playsInline
                className="w-full h-full object-cover"
                src={item.videoUrl}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default function Expertises() {
  return (
    <section id="expertises" className="relative w-full overflow-x-hidden">
      {expertises.map((item, i) => (
        <ExpertiseCard
          key={item.id}
          item={item}
          index={i}
        />
      ))}
    </section>
  );
}
