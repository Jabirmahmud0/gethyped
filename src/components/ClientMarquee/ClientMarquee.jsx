import { clients } from '../../data/data';

export default function ClientMarquee() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-10 mb-12">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight">
          These brands<br />
          got hyped.
        </h2>
      </div>
      
      <div className="relative w-full flex overflow-hidden">
        <div 
          className="flex whitespace-nowrap animate-marquee"
          style={{ animationDuration: '40s' }}
        >
          {[...clients, ...clients].map((client, index) => (
            <div 
              key={index} 
              className="flex-none w-60 md:w-80 h-60 md:h-80 mx-4 md:mx-8 border-2 border-black/10 rounded-2xl flex items-center justify-center hover:border-black/30 transition-colors"
            >
              <img src={client} alt="Client Logo" className="w-40 md:w-56 h-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
      
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 mt-24">
        <div className="w-full h-px bg-gray-300"></div>
      </div>
    </section>
  );
}
