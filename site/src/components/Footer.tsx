import { AtSign, MapPin, Clock, Phone } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-grafite text-white/70 pt-16 pb-8">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* Brand */}
          <div>
            <img
              src={`${import.meta.env.BASE_URL}logo-champagne.png`}
              alt="Florizz"
              className="h-16 w-auto mb-4"
            />
            <p className="text-sm leading-relaxed">
              Terapia capilar premium e personalizada. Ciência, cuidado e bem-estar em cada sessão.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-champagne font-semibold mb-4 text-sm tracking-wide uppercase">Navegação</h4>
            <nav className="space-y-2">
              {['Sobre', 'Serviços', 'Planos', 'Diferenciais', 'FAQ'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
                  className="block text-sm hover:text-champagne transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-champagne font-semibold mb-4 text-sm tracking-wide uppercase">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 shrink-0 text-sage" />
                <span>(00) 00000-0000</span>
              </li>
              <li className="flex items-start gap-2">
                <AtSign size={16} className="mt-0.5 shrink-0 text-sage" />
                <span>@florizzhairscalp</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-champagne font-semibold mb-4 text-sm tracking-wide uppercase">Horário</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Clock size={16} className="mt-0.5 shrink-0 text-sage" />
                <div>
                  <p>Seg–Sex: 9h–19h</p>
                  <p>Sáb: 9h–14h</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-sage" />
                <span>Endereço a definir</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-xs text-white/40">
          <p>&copy; {year} Florizz Hair &amp; Scalp Clinic. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
