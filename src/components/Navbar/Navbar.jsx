import { useState, useEffect } from 'react'
import { navLinks } from '../../data/data'
import { useMenuOpen } from '../../hooks/useMenuOpen'
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'

const Logo = () => (
  <svg
    aria-hidden="true"
    className="h-full w-full"
    viewBox="0 0 208 84"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path className="fill-[#FAF4EC]" d="M207.793 18.4091V68.8219C207.793 77.2049 200.998 84 192.615 84H7.46524C3.34207 84 0 80.6579 0 76.5348V37.5951C0 33.8732 2.69331 30.6933 6.36831 30.0829L186.384 0.251801C197.596 -1.60491 207.793 7.04266 207.793 18.4049" />
    <path className="fill-black" d="M188.876 80.0646H55.9061V25.8317L186.618 5.34814C195.454 3.96521 203.444 10.7945 203.444 19.7408V65.4969C203.444 73.5427 196.922 80.0646 188.876 80.0646Z" />
    <path className="fill-white" d="M71.2635 26.8177V47.2585L67.5415 47.5957V27.3683L59.9312 28.4866V76.7781L67.5415 76.7055V56.478L71.2635 56.2305V76.6714L79.3818 76.5945V25.6226L71.2635 26.8177Z" />
    <path className="fill-white" d="M94.7092 23.3646L92.5452 42.7512L92.4427 44.4116L92.2378 44.4329L92.1354 42.7939L90.0055 24.0561L81.2256 25.3494L87.9482 58.2622V76.5134L96.8391 76.4323V57.75L104.142 21.9731L94.7092 23.3646Z" />
    <path className="fill-white" d="M159.835 25.0207V13.7695L135.377 17.3719V76.0695L159.835 75.839V64.5921L147.179 65.0274V51.2238L159.101 50.4384V39.2854L147.179 40.3695V26.5701L159.835 25.0207Z" />
    <path className="fill-white" d="M120.844 48.8506L116.226 49.2006V29.3018L120.844 28.7256V48.8506ZM105.943 21.7085V76.347L116.149 76.2488V58.5396L120.882 58.2878C127.071 57.9591 131.92 52.8457 131.92 46.6482V31.3805C131.92 24.2695 125.603 18.8146 118.565 19.8518L105.943 21.7128V21.7085Z" />
    <path className="fill-white" d="M182.598 64.7713L176.494 64.9677V21.7768L182.598 21.0128V64.7713ZM162.993 13.3042V75.8091L185.769 75.5957C192.163 75.536 197.315 70.3372 197.315 63.9433V21.7469C197.315 14.636 190.998 9.18108 183.959 10.2183L162.989 13.3085L162.993 13.3042Z" />
    <path className="fill-black" d="M21.5464 80.0646H34.7482V70.4738L27.1336 70.6957V59.8585L34.2873 59.4018V49.8835L27.1336 50.5494V39.7079L34.7482 38.739V29.1481L21.5464 31.214V80.0646Z" />
    <path className="fill-black" d="M36.7714 28.828V38.4829L42.03 37.8128V80.0646H48.3812V37.0061L54.0239 36.289V26.1262L36.7714 28.828Z" />
    <path className="fill-black" d="M14.2348 51.7488V41.2829L8.49394 42.0128V71.5152L14.2348 71.3488V62.6969L10.7092 62.8976V54.5146L19.5616 53.7634V80.0604H14.2391V77.3159L13.3128 78.225C12.1134 79.4031 10.5 80.0604 8.8226 80.0604H7.90491C5.48905 80.0604 3.53418 78.1012 3.53418 75.6896V39.0207C3.53418 36.1524 5.62563 33.7067 8.45978 33.2628L14.5165 32.3152C17.1671 31.9012 19.5659 33.95 19.5659 36.6305V51.2494L14.2433 51.7445L14.2348 51.7488Z" />
  </svg>
)

const FireIcon = () => (
  <svg
    aria-hidden="true"
    className="h-[1.125rem] w-[1rem] fill-current"
    viewBox="0 0 20 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.4906 11.0361C17.1898 10.6437 16.8237 10.3037 16.4837 9.96371C15.6075 9.17906 14.6136 8.61673 13.7766 7.79284C11.8281 5.88352 11.3965 2.73184 12.6389 0.3125C11.3965 0.613283 10.3111 1.29331 9.38256 2.03873C5.99549 4.75886 4.66158 9.55831 6.25704 13.6777C6.30935 13.8085 6.36166 13.9393 6.36166 14.1093C6.36166 14.397 6.16549 14.6585 5.90394 14.7632C5.60316 14.8939 5.2893 14.8155 5.04083 14.6062C4.96661 14.5441 4.90453 14.4687 4.85774 14.3839C3.37998 12.5138 3.14459 9.83294 4.13848 7.68822C1.95453 9.46676 0.764478 12.4746 0.934486 15.3124C1.01295 15.9663 1.09142 16.6202 1.31373 17.274C1.49682 18.0587 1.84991 18.8433 2.24224 19.5365C3.65461 21.7989 6.10011 23.4205 8.72869 23.7474C11.5273 24.1005 14.522 23.5905 16.6667 21.655C19.0599 19.4841 19.8969 16.0055 18.6676 13.0238L18.4976 12.6838C18.223 12.0823 17.4906 11.0361 17.4906 11.0361ZM13.3581 19.2749C12.992 19.5888 12.3904 19.9288 11.9196 20.0596C10.4549 20.5827 8.99024 19.8503 8.12712 18.9872C9.68335 18.621 10.6118 17.4702 10.8865 16.3063C11.1088 15.2601 10.6903 14.397 10.5203 13.39C10.3634 12.4223 10.3895 11.5984 10.7426 10.6961C10.9911 11.193 11.2526 11.6899 11.5665 12.0823C12.5735 13.39 14.1559 13.9654 14.4959 15.744C14.5482 15.9271 14.5743 16.1101 14.5743 16.3063C14.6136 17.3787 14.1428 18.5556 13.3581 19.2749Z" />
  </svg>
)

// button-color-swoosh animation for nav links (matching original)
const NavLink = ({ href, label, ariaLabel, onClick }) => (
  <a
    aria-label={ariaLabel}
    className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#131313] focus-visible:ring-offset-2 focus-visible:ring-offset-[#faf4ec]"
    href={href}
    onClick={onClick}
  >
    {/* Background swoosh layers */}
    <span className="absolute inset-0 transition-transform duration-[600ms] ease-[cubic-bezier(0.32,0.72,0,1)] translate-y-[101%] group-hover:translate-y-0">
      <span className="absolute inset-0 bg-[#ff4c24]" />
    </span>
    <span
      className="absolute inset-0 transition-transform duration-[600ms] ease-[cubic-bezier(0.32,0.72,0,1)] translate-y-[101%] group-hover:translate-y-0"
      style={{ transitionDelay: '64ms' }}
    >
      <span className="absolute inset-0 bg-[#131313]" />
    </span>
    {/* Text swap layers */}
    <span className="relative z-10 flex items-center">
      <span className="px-4 py-2.5 text-[0.92rem] font-bold text-[#131313] transition-all duration-[750ms] ease-[cubic-bezier(0.34,2.27,0.64,1)] group-hover:-translate-y-8 group-hover:rotate-[-60deg] group-hover:opacity-0 [transform-origin:top_right]">
        {label}
      </span>
      <span className="absolute inset-0 flex items-center justify-center translate-y-8 rotate-[-30deg] opacity-0 transition-all duration-[750ms] ease-[cubic-bezier(0.34,2.27,0.64,1)] group-hover:translate-y-0 group-hover:rotate-0 group-hover:opacity-100 [transform-origin:top_right]">
        <span className="px-4 py-2.5 text-[0.92rem] font-bold text-[#f0ece5]">{label}</span>
      </span>
    </span>
  </a>
)

// button-default is-nav (desktop Get Results) - matching original structure
const DesktopGetResultsButton = () => (
  <div className="hidden lg:block">
    <a
      className="group inline-block overflow-hidden rounded-[0.75rem] no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#131313] focus-visible:ring-offset-2 focus-visible:ring-offset-[#faf4ec] transition-transform duration-[450ms] ease-[cubic-bezier(0.34,2.27,0.64,1)] hover:-skew-y-[4deg] hover:-rotate-[1deg] hover:scale-[1.02] active:scale-95"
      href="#contact"
    >
      {/* button-default__inner */}
      <span className="relative block">
        {/* button-default__background */}
        <span className="absolute inset-0 rounded-[0.75rem] bg-[#ffb8eb] transition-all duration-[450ms] ease-[cubic-bezier(0.34,2.27,0.64,1)] group-hover:w-[calc(100%-0.5rem)] group-hover:rounded-[0.5rem]" />
        {/* button-default__text + icon */}
        <span className="relative z-10 flex items-center gap-2 px-5 py-3 text-[0.92rem] font-bold text-[#131313]">
          <span>Get Results</span>
          <span className="flex items-center justify-center rounded-lg bg-white p-1.5 transition-transform duration-[300ms] ease-[cubic-bezier(0.34,2.27,0.64,1)] group-hover:scale-90">
            <FireIcon />
          </span>
        </span>
      </span>
    </a>
  </div>
)

const Navbar = () => {
  const { isMenuOpen, toggleMenu, closeMenu } = useMenuOpen()
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Always show if menu is open or at the very top
      if (isMenuOpen || currentScrollY < 10) {
        setIsVisible(true)
        setLastScrollY(currentScrollY)
        return
      }

      // Scrolling down: hide. Scrolling up: show.
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, isMenuOpen])

  return (
    <nav className={`fixed left-0 top-0 z-40 w-full px-4 py-4 font-[Inter] sm:px-6 lg:px-10 transition-transform duration-500 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="mx-auto flex max-w-[1920px] items-center justify-between gap-4">
        <a
          aria-current="page"
          aria-label="Home link"
          className="relative z-50 block h-[3.75rem] w-[9.25rem] shrink-0 no-underline transition-transform duration-300 hover:scale-95 sm:h-[4.5rem] sm:w-[11rem] lg:h-[5.25rem] lg:w-[13rem]"
          href="/"
          onClick={closeMenu}
        >
          <Logo />
        </a>

        {/* Desktop nav links pill */}
        <div className="hidden items-center gap-1 rounded-2xl bg-white p-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </div>

        <div className="relative z-50 flex items-center gap-3">
          <DesktopGetResultsButton />
          <HamburgerMenu
            isOpen={isMenuOpen}
            onToggle={toggleMenu}
            onClose={closeMenu}
          />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
