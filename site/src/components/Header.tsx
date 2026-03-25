import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#planos', label: 'Planos' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#faq', label: 'FAQ' },
]

const WHATSAPP_URL = 'https://wa.me/5500000000000?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20tratamentos%20da%20Florizz.'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-sage/20">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-5 py-3 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <img
            src={`${import.meta.env.BASE_URL}logo-verde.png`}
            alt="Florizz Hair & Scalp Clinic"
            className="h-10 w-auto"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-grafite/70 hover:text-verde-botanico transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-verde-botanico text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-verde-botanico-dark transition-colors"
          >
            Agendar Avaliação
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-grafite p-2"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden bg-white border-t border-sage/20 px-5 pb-5 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-grafite/70 hover:text-verde-botanico font-medium border-b border-champagne last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block text-center bg-verde-botanico text-white font-semibold px-5 py-3 rounded-full"
          >
            Agendar Avaliação
          </a>
        </nav>
      )}
    </header>
  )
}
