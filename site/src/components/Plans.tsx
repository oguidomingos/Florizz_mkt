import { Check, Star } from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/5500000000000?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20plano%20'

interface Plan {
  name: string
  price: string
  frequency: string
  description: string
  features: string[]
  popular?: boolean
}

const plans: Plan[] = [
  {
    name: 'Couro Sensível',
    price: 'R$ 197',
    frequency: '/sessão',
    description: 'Para quem sofre com irritação, caspa ou sensibilidade no couro cabeludo.',
    features: [
      'Avaliação tricoscópica',
      'Ozonioterapia',
      'Peeling enzimático suave',
      'Protocolo de 4 a 6 sessões',
      'Acompanhamento fotográfico',
    ],
  },
  {
    name: 'Anti-Queda',
    price: 'R$ 247',
    frequency: '/sessão',
    description: 'Protocolo intensivo semanal para frear a queda e fortalecer os fios.',
    features: [
      'Avaliação tricoscópica',
      'Mesoterapia capilar',
      'Laser de baixa potência',
      '4 sessões/mês (1x/semana)',
      'Relatório de evolução mensal',
      'Acompanhamento WhatsApp',
    ],
    popular: true,
  },
  {
    name: 'Crescimento',
    price: 'R$ 347',
    frequency: '/sessão',
    description: 'Para estimular fios novos e aumentar a densidade capilar de forma acelerada.',
    features: [
      'Avaliação tricoscópica detalhada',
      'Microagulhamento + Drug Delivery',
      'Mesoterapia com blend premium',
      '2 sessões/mês',
      'Plano de cuidados domiciliares',
      'Check-in semanal via WhatsApp',
    ],
  },
  {
    name: 'Premium',
    price: 'R$ 497',
    frequency: '/sessão',
    description: 'A experiência completa: todos os tratamentos + mimos exclusivos.',
    features: [
      'Avaliação tricoscópica completa',
      'Mesoterapia + Microagulhamento',
      'Laser de baixa potência',
      'Peeling capilar',
      'Kit de mimos exclusivo',
      'Relatório PDF personalizado',
      'Acompanhamento VIP 7 dias',
    ],
  },
]

export default function Plans() {
  return (
    <section id="planos" className="py-20 bg-white lg:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center mb-16">
          <span className="text-sage text-sm font-semibold tracking-widest uppercase">Planos</span>
          <h2 className="font-heading text-3xl font-semibold text-grafite mt-3 md:text-4xl">
            O plano ideal para<br className="hidden sm:block" /> a sua jornada capilar
          </h2>
          <p className="text-grafite/70 max-w-2xl mx-auto mt-4 text-lg">
            Todos os planos incluem avaliação inicial completa e acompanhamento da evolução.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 flex flex-col animate-fade-in-up ${
                plan.popular
                  ? 'bg-verde-botanico text-white ring-2 ring-verde-botanico shadow-xl'
                  : 'bg-champagne/40 border border-sage/15'
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-champagne text-verde-botanico text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <Star size={12} fill="currentColor" /> MAIS POPULAR
                </div>
              )}

              <h3 className={`font-heading text-xl font-semibold mb-1 ${plan.popular ? 'text-white' : 'text-grafite'}`}>
                {plan.name}
              </h3>

              <div className="flex items-baseline gap-1 mb-3">
                <span className={`text-3xl font-bold ${plan.popular ? 'text-champagne' : 'text-verde-botanico'}`}>
                  {plan.price}
                </span>
                <span className={`text-sm ${plan.popular ? 'text-white/70' : 'text-grafite/50'}`}>
                  {plan.frequency}
                </span>
              </div>

              <p className={`text-sm mb-5 leading-relaxed ${plan.popular ? 'text-white/80' : 'text-grafite/60'}`}>
                {plan.description}
              </p>

              <ul className="space-y-2.5 mb-6 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check
                      size={16}
                      className={`mt-0.5 shrink-0 ${plan.popular ? 'text-champagne' : 'text-verde-botanico'}`}
                    />
                    <span className={plan.popular ? 'text-white/90' : 'text-grafite/70'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`${WHATSAPP_URL}${encodeURIComponent(plan.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center font-semibold py-3 rounded-full transition-colors text-sm ${
                  plan.popular
                    ? 'bg-champagne text-verde-botanico hover:bg-champagne-dark'
                    : 'bg-verde-botanico text-white hover:bg-verde-botanico-dark'
                }`}
              >
                Quero Este Plano
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
