import { navLinks } from '../../data/data'

const FireIcon = () => (
  <svg
    aria-hidden="true"
    className="h-5 w-4 fill-current"
    viewBox="0 0 20 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.4906 11.0361C17.1898 10.6437 16.8237 10.3037 16.4837 9.96371C15.6075 9.17906 14.6136 8.61673 13.7766 7.79284C11.8281 5.88352 11.3965 2.73184 12.6389 0.3125C11.3965 0.613283 10.3111 1.29331 9.38256 2.03873C5.99549 4.75886 4.66158 9.55831 6.25704 13.6777C6.30935 13.8085 6.36166 13.9393 6.36166 14.1093C6.36166 14.397 6.16549 14.6585 5.90394 14.7632C5.60316 14.8939 5.2893 14.8155 5.04083 14.6062C4.96661 14.5441 4.90453 14.4687 4.85774 14.3839C3.37998 12.5138 3.14459 9.83294 4.13848 7.68822C1.95453 9.46676 0.764478 12.4746 0.934486 15.3124C1.01295 15.9663 1.09142 16.6202 1.31373 17.274C1.49682 18.0587 1.84991 18.8433 2.24224 19.5365C3.65461 21.7989 6.10011 23.4205 8.72869 23.7474C11.5273 24.1005 14.522 23.5905 16.6667 21.655C19.0599 19.4841 19.8969 16.0055 18.6676 13.0238L18.4976 12.6838C18.223 12.0823 17.4906 11.0361 17.4906 11.0361ZM13.3581 19.2749C12.992 19.5888 12.3904 19.9288 11.9196 20.0596C10.4549 20.5827 8.99024 19.8503 8.12712 18.9872C9.68335 18.621 10.6118 17.4702 10.8865 16.3063C11.1088 15.2601 10.6903 14.397 10.5203 13.39C10.3634 12.4223 10.3895 11.5984 10.7426 10.6961C10.9911 11.193 11.2526 11.6899 11.5665 12.0823C12.5735 13.39 14.1559 13.9654 14.4959 15.744C14.5482 15.9271 14.5743 16.1101 14.5743 16.3063C14.6136 17.3787 14.1428 18.5556 13.3581 19.2749Z" />
  </svg>
)

const MobileGetResultsButton = ({ onClick }) => (
  <a
    className="group inline-block overflow-hidden rounded-[0.75rem] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#131313] focus-visible:ring-offset-2 focus-visible:ring-offset-[#faf4ec]"
    href="#contact"
    onClick={onClick}
  >
    <span className="relative flex items-center">
      <span className="absolute inset-0 rounded-[0.75rem] bg-[#131313] transition-all duration-[450ms] ease-[cubic-bezier(0.34,2.27,0.64,1)] group-hover:w-[calc(100%-0.5rem)] group-hover:rounded-[0.5rem]" />
      <span className="relative z-10 flex items-center gap-2 px-5 py-4 text-[0.95rem] font-medium text-[#f0ece5] transition-transform duration-[450ms] ease-[cubic-bezier(0.34,2.27,0.64,1)] group-hover:scale-[1.02] group-hover:rotate-[-1deg] group-hover:skew-y-[-4deg]">
        <span>Get Results</span>
        <span className="text-[#f0ece5] transition-transform duration-150 ease-out group-hover:scale-90">
          <FireIcon />
        </span>
      </span>
    </span>
  </a>
)

const MenuLink = ({ href, label, ariaLabel, onClick }) => (
  <a
    aria-label={ariaLabel}
    className="group relative block overflow-hidden rounded-full px-5 py-3.5 text-[2rem] font-semibold leading-none tracking-normal text-[#131313] transition-transform duration-300 hover:scale-[0.985] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#131313]"
    href={href}
    onClick={onClick}
  >
    <span className="absolute inset-0 translate-y-full rounded-full bg-[#ff4c24] transition-transform duration-500 ease-out group-hover:translate-y-0" />
    <span className="absolute inset-0 translate-y-full rounded-full bg-[#131313] transition-transform duration-500 ease-out delay-75 group-hover:translate-y-0" />
    <span className="relative z-10 transition-colors duration-300 group-hover:text-[#f0ece5]">
      {label}
    </span>
  </a>
)

const HamburgerMenu = ({ isOpen, onToggle, onClose }) => {
  return (
    <>
      <button
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        className={`relative z-50 flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#131313] focus-visible:ring-offset-2 focus-visible:ring-offset-[#faf4ec] lg:hidden ${
          isOpen
            ? 'border-[#131313] bg-[#131313] text-[#f0ece5]'
            : 'border-[#131313]/10 bg-[#faf4ec] text-[#131313]'
        }`}
        onClick={onToggle}
        type="button"
      >
        <span className="relative h-3 w-6">
          <span
            className={`absolute left-0 top-0 h-[2px] w-6 rounded-full bg-current transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
              isOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : ''
            }`}
          />
          <span
            className={`absolute bottom-0 left-0 h-[2px] w-6 rounded-full bg-current transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
              isOpen ? 'bottom-1/2 translate-y-1/2 -rotate-45' : ''
            }`}
          />
        </span>
      </button>

      <div
        className={`fixed inset-0 z-40 bg-black/25 transition-opacity duration-500 lg:hidden ${
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed right-4 top-4 z-40 h-[calc(100vh-2rem)] w-[min(24rem,calc(100vw-2rem))] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-[115%]'
        }`}
      >
        <div className="absolute inset-0 translate-x-0 rounded-[2rem] bg-[#131313]" />
        <div
          className={`absolute inset-0 rounded-[2rem] bg-[#ff4c24] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            isOpen ? 'translate-x-0' : 'translate-x-[8%]'
          }`}
        />
        <aside className="absolute inset-0 rounded-[2rem] bg-[#faf4ec] px-5 pb-8 pt-20 text-[#131313] shadow-[0_24px_80px_rgba(19,19,19,0.18)]">
          <div className="flex h-full flex-col justify-between">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <MenuLink key={link.href} {...link} onClick={onClose} />
              ))}
            </div>

            <MobileGetResultsButton onClick={onClose} />
          </div>
        </aside>
      </div>
    </>
  )
}

export default HamburgerMenu
