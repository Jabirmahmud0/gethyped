import { navLinks } from '../../data/data';

// Social icon components
function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const socialLinks = [
  { icon: <LinkedInIcon />, href: 'https://www.linkedin.com/company/gethyped-nl', label: 'LinkedIn' },
  { icon: <TikTokIcon />, href: 'https://www.tiktok.com/@gethyped.nl', label: 'TikTok' },
  { icon: <InstagramIcon />, href: 'https://www.instagram.com/gethyped.nl', label: 'Instagram' },
  { icon: <YoutubeIcon />, href: 'https://www.youtube.com/@gethypednl', label: 'YouTube' },
];

// Reuse the same NavLink swoosh pattern from Navbar
const FooterNavLink = ({ href, label, ariaLabel }) => (
  <a
    aria-label={ariaLabel}
    className="group bg-white relative inline-flex items-center justify-center overflow-hidden rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#131313] focus-visible:ring-offset-2 focus-visible:ring-offset-[#faf4ec]"
    href={href}
  >
    {/* Background swoosh layers */}
    <span className="absolute inset-0 transition-transform duration-[600ms] ease-[cubic-bezier(0.32,0.72,0,1)] translate-y-full group-hover:translate-y-0">
      <span className="absolute inset-0 bg-[#ff4c24]" />
    </span>
    <span
      className="absolute inset-0 transition-transform duration-[600ms] ease-[cubic-bezier(0.32,0.72,0,1)] translate-y-full group-hover:translate-y-0"
      style={{ transitionDelay: '64ms' }}
    >
      <span className="absolute inset-0 bg-[#131313]" />
    </span>
    {/* Text swap layers */}
    <span className="relative z-10 flex items-center">
      <span className="px-4 py-2.5 text-[0.875rem] font-bold text-[#131313] transition-all duration-[750ms] ease-[cubic-bezier(0.34,2.27,0.64,1)] group-hover:-translate-y-8 group-hover:rotate-[-60deg] group-hover:opacity-0 [transform-origin:top_right]">
        {label}
      </span>
      <span className="absolute inset-0 flex items-center justify-center translate-y-8 rotate-[-30deg] opacity-0 transition-all duration-[750ms] ease-[cubic-bezier(0.34,2.27,0.64,1)] group-hover:translate-y-0 group-hover:rotate-0 group-hover:opacity-100 [transform-origin:top_right]">
        <span className="px-4 py-2.5 text-[0.875rem] font-bold text-[#f0ece5]">{label}</span>
      </span>
    </span>
  </a>
);

// Rotating sticker SVG
function Sticker() {
  return (
    <div className="w-24 h-24 md:w-[120px] md:h-[120px] animate-spin-slow flex-shrink-0">
      <svg viewBox="0 0 220 221" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="110" cy="110.5" r="109.5" fill="#FCB8FA" />
        <path
          id="circle-text-path"
          d="M110,110.5 m-85,0 a85,85 0 1,1 170,0 a85,85 0 1,1 -170,0"
          fill="none"
        />
        <text fontSize="13" fontWeight="700" fill="black" letterSpacing="3">
          <textPath href="#circle-text-path">
            • GET HYPED • GET RESULTS • GET NOTICED •
          </textPath>
        </text>
        <text
          x="110"
          y="118"
          textAnchor="middle"
          fontSize="32"
          fontWeight="900"
          fill="black"
        >
          GH
        </text>
      </svg>
    </div>
  );
}

// Big skewed GETHYPED logo — the full logo with beige bg shape from the original
function FooterLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 941 382"
      fill="none"
      className="w-[220px] md:w-[320px] lg:w-[450px]"
    >
      <path d="M940.689 83.6343V312.664C940.689 350.749 909.95 381.62 872.028 381.62H34.4602C15.8081 381.62 0.689453 366.436 0.689453 347.704V170.798C0.689453 153.889 12.8733 139.442 29.4979 136.669L843.838 1.14395C894.561 -7.29124 940.689 31.9954 940.689 83.6149" fill="#EAE4D8" />
      <path d="M855.114 363.741H253.594V117.356L844.9 24.2971C884.869 18.0143 921.014 49.0403 921.014 89.6843V297.558C921.014 334.111 891.511 363.741 855.114 363.741Z" fill="black" />
      <path d="M323.066 121.835V214.7L306.229 216.232V124.337L271.802 129.417V348.81L306.229 348.48V256.585L323.066 255.46V348.325L359.791 347.976V116.406L323.066 121.835Z" fill="white" />
      <path d="M429.128 106.148L419.339 194.223L418.875 201.766L417.948 201.863L417.485 194.416L407.85 109.289L368.132 115.164L398.543 264.69V347.607L438.763 347.239V262.363L471.8 99.826L429.128 106.148Z" fill="white" />
      <path d="M723.739 113.671V62.556L613.1 78.9223V345.591L723.739 344.543V293.448L666.488 295.425V232.714L720.417 229.146V178.477L666.488 183.402V120.71L723.739 113.671Z" fill="white" />
      <path d="M547.354 221.933L526.463 223.523V133.121L547.354 130.503V221.933ZM479.948 98.6237V346.851L526.115 346.405V265.951L547.528 264.807C575.526 263.314 597.46 240.083 597.46 211.927V142.564C597.46 110.258 568.884 85.4764 537.044 90.1885L479.948 98.6431V98.6237Z" fill="white" />
      <path d="M826.711 294.262L799.1 295.154V98.934L826.711 95.4629V294.262ZM738.027 60.4424V344.408L841.058 343.438C869.982 343.167 893.287 319.548 893.287 290.5V98.7982C893.287 66.4924 864.711 41.7105 832.871 46.4225L738.008 60.4618L738.027 60.4424Z" fill="white" />
      <path d="M98.1596 363.741H157.881V320.169L123.435 321.177V271.943L155.796 269.868V226.625L123.435 229.65V180.397L157.881 175.995V132.423L98.1596 141.808V363.741Z" fill="black" />
      <path d="M167.033 130.968V174.831L190.822 171.787V363.741H219.553V168.122L245.079 164.864V118.694L167.033 130.968Z" fill="black" />
      <path d="M65.0839 235.099V187.552L39.1138 190.868V324.9L65.0839 324.144V284.838L49.135 285.749V247.665L89.181 244.252V363.722H65.1032V351.253L60.9132 355.383C55.4875 360.735 48.1889 363.722 40.6006 363.722H36.4492C25.5206 363.722 16.6772 354.821 16.6772 343.865V177.275C16.6772 164.244 26.1384 153.133 38.9593 151.116L66.3582 146.811C78.3488 144.93 89.2003 154.238 89.2003 166.416V232.831L65.1224 235.08L65.0839 235.099Z" fill="black" />
    </svg>
  );
}

// Background diagonal shape SVG — exact path from demo/index.html
function FooterBgShape() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      viewBox="0 0 1860 386"
      fill="none"
      className="absolute bottom-0 left-0 w-full"
      preserveAspectRatio="none"
    >
      <path
        d="M1859.06 34.8264V349.463C1859.06 365.199 1859.06 380.122 1859.06 385.962L0.642595 385.955C0.642578 383.021 0.642769 379.682 0.642769 371.941V290.843C0.642769 283.856 5.67717 277.887 12.5466 276.741L1819.04 0.740997C1840 -2.74446 1859.06 13.489 1859.06 34.8184"
        fill="#EAE4D8"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#FAF4EC] relative w-full">

      {/* The diagonal beige background — exact SVG from original */}
      <FooterBgShape />

      {/* ---- ALL FOOTER CONTENT sits on top of the bg shape ---- */}
      <div className="relative z-10 px-6 md:px-10 lg:px-16 pt-16 pb-8">

        {/* Flex container for the layout */}
        <div className="flex flex-col xl:flex-row justify-between xl:items-end gap-12 lg:gap-16">

          {/* LEFT SIDE: Logo only (restricted to its area) */}
          <div className="flex-shrink-0 self-end" style={{ transform: 'translateY(32px)' }}>
            <FooterLogo />
          </div>

          {/* RIGHT SIDE: Two columns + Sticker */}
          <div className="flex flex-col sm:flex-row xl:justify-end gap-10 sm:gap-16 lg:gap-24 relative" style={{ transform: 'translateY(40px)' }}>

            {/* Sticker positioned top right relative to this right container */}
            <div className="absolute -top-32 right-0 sm:-right-8 md:-top-40 md:-right-8">
              <Sticker />
            </div>

            {/* Column 1: Links & Follow us & Copyright */}
            <div className="flex flex-col items-start relative z-10 mt-12 sm:mt-0 justify-between">
              
              {/* Top part: Navigation and Socials */}
              <div className="flex flex-col gap-6">
                {/* Nav pills */}
                <div className="flex flex-wrap items-center gap-2">
                  {navLinks.map((link) => (
                    <FooterNavLink key={link.href} {...link} />
                  ))}
                </div>

                {/* Follow us + social icons */}
                <div className="flex items-center gap-4">
                  <span className="text-sm font-bold text-black">Follow us</span>
                  <div className="flex items-center gap-2">
                    {socialLinks.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="w-9 h-9 rounded-full bg-white hover:bg-black hover:text-white transition-colors flex items-center justify-center text-black"
                      >
                        {s.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom part: Copyright (below Follow us) */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 text-xs text-black/50 font-medium mt-12 xl:mt-24">
                <span>© 2025 Get Hyped</span>
                <a
                  href="https://dylanbrouwer.design/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors"
                >
                  © Design by Dylan
                </a>
              </div>
            </div>

            {/* Column 2: Contact, Adres stacked & Privacy */}
            <div className="flex flex-col shrink-0 items-start relative z-10 justify-between">
              
              {/* Top part: Contact and Adres */}
              <div className="flex flex-col gap-6 text-sm">
                {/* Contact */}
                <div className="flex flex-col gap-1">
                  <p className="font-bold text-black mb-1">Contact</p>
                  <a href="mailto:info@gethyped.nl" className="text-black hover:opacity-70 transition-opacity">
                    info@gethyped.nl
                  </a>
                  <a href="tel:+31615337496" className="text-black hover:opacity-70 transition-opacity">
                    +31 6 1533 7496
                  </a>
                </div>
                
                {/* Adres */}
                <div className="flex flex-col gap-1">
                  <p className="font-bold text-black mb-1">Adres</p>
                  <p className="text-black">Beltrumsestraat 6,</p>
                  <p className="text-black">7141 AL Groenlo</p>
                </div>
              </div>

              {/* Bottom part: Privacyvoorwaarden (below Adres) */}
              <div className="mt-12 xl:mt-24">
                <a href="/privacyvoorwaarden" className="text-xs text-black/50 font-medium hover:text-black transition-colors">
                  Privacyvoorwaarden
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}