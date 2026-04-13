const HamburgerMenu = ({ isOpen, onToggle }) => {
  return (
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
  )
}

export default HamburgerMenu
