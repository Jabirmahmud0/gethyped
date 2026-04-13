import { useState } from 'react'

export const useMenuOpen = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen((isOpen) => !isOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return { isMenuOpen, toggleMenu, closeMenu }
}
