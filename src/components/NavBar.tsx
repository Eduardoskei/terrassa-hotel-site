'use client'

import { useState } from 'react'
import { MenuHamburguer } from './MenuHamburguer'
import { User, Menu } from 'lucide-react'

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-teal-700 px-4 py-3 flex justify-between items-center fixed top-0 left-0 w-full z-50">
      <User className="text-white w-6 h-6" />
      <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">
        <Menu className="text-white w-6 h-6" />
      </button>
      {menuOpen && <MenuHamburguer onClose={() => setMenuOpen(false)} />}
    </header>
  )
}