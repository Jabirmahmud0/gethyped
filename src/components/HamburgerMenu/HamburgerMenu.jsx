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

const HamburgerMenu = ({ isOpen, onToggle, onClose }) => {
  return (
    <>
      <button
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        onClick={onToggle}
        type="button"
        className="relative z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#faf4ec] text-black transition-transform duration-300 hover:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#faf4ec] focus-visible:ring-offset-2 focus-visible:ring-offset-black lg:hidden"
      >
        <span className="relative h-3 w-6">
          <span
            className={`absolute left-0 top-0 h-0.5 w-6 rounded-full bg-current transition-transform duration-300 ${
              isOpen ? 'translate-y-1.5 rotate-45' : ''
            }`}
          />
          <span
            className={`absolute bottom-0 left-0 h-0.5 w-6 rounded-full bg-current transition-transform duration-300 ${
              isOpen ? '-translate-y-1.5 -rotate-45' : ''
            }`}
          />
        </span>
      </button>

      <div
        className={`fixed inset-0 z-40 bg-black/55 transition-opacity duration-300 lg:hidden ${
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
      />

      <aside
        className={`fixed right-0 top-0 z-40 flex h-screen w-full max-w-[24rem] flex-col bg-black px-5 pb-8 pt-5 text-[#faf4ec] transition-transform duration-500 lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-end">
          <button
            aria-label="Close menu"
            onClick={onClose}
            type="button"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[#faf4ec]/20 bg-[#111111] text-[#faf4ec] transition-transform duration-300 hover:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#faf4ec]"
          >
            <span className="relative h-5 w-5">
              <span className="absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full bg-current" />
              <span className="absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full bg-current" />
            </span>
          </button>
        </div>

        <div className="flex flex-1 flex-col justify-between pt-10">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                aria-label={link.ariaLabel}
                className="block rounded-full px-5 py-3 text-4xl font-semibold leading-none text-[#faf4ec] transition-colors duration-300 hover:bg-[#faf4ec] hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[#faf4ec]"
                href={link.href}
                onClick={onClose}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#faf4ec] px-5 py-4 text-base font-semibold text-black transition-transform duration-300 hover:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#faf4ec] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            href="#contact"
            onClick={onClose}
          >
            <span>Get Results</span>
            <FireIcon />
          </a>
        </div>
      </aside>
    </>
  )
}

export default HamburgerMenu
