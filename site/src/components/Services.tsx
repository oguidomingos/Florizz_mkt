import { Syringe, Microscope, Droplets, Sun, Zap, Wind } from 'lucide-react'

interface Service {
  icon: React.ComponentType<{ size?: number }>
  name: string
  description: string
}

const services: Service[] = [
  {
    icon: Syringe,
    name: 'Mesoterapia Capilar',
    description: 'Microinjeções de ativos no couro cabeludo para estimular crescimento, fortalecer a raiz e controlar a queda.',
  },
  {
    icon: Microscope,
    name: 'Microagulhamento + Drug Delivery',
    description: 'Estímulo controlado com dermapen associado à entrega profunda de ativos de alta performance.',
  },
  {
    icon: Droplets,
    name: 'Peeling Capilar',
    description: 'Renovação celular e controle de oleosidade com peelings enzimáticos e esfoliantes suaves.',
  },
  {
    icon: Wind,
    name: 'Ozonioterapia',
    description: 'Tratamento com ozônio para couro cabeludo sensível, caspa e inflamações associadas à queda.',
  },
  {
    icon: Sun,
    name: 'Laser de Baixa Potência',
    description: 'Fotoestimulação que ativa a circulação no couro cabeludo e acelera o ciclo de crescimento capilar.',
  },
  {
    icon: Zap,
    name: 'Desintoxicação Capilar',
    description: 'Limpeza profunda com vapor de ozônio e blend de ativos para revitalizar o couro cabeludo.',
  },
]

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-champagne/30 lg:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center mb-16">
          <span className="text-sage text-sm font-semibold tracking-widest uppercase">Tratamentos</span>
          <h2 className="font-heading text-3xl font-semibold text-grafite mt-3 md:text-4xl">
            Tecnologia a serviço<br className="hidden sm:block" /> dos seus cabelos
          </h2>
          <p className="text-grafite/70 max-w-2xl mx-auto mt-4 text-lg">
            Cada procedimento é selecionado com base em evidências científicas e adaptado
            ao seu diagnóstico capilar personalizado.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={service.name}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-sage/10 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-verde-botanico text-white mb-4 group-hover:scale-110 transition-transform">
                <service.icon size={24} />
              </div>
              <h3 className="font-heading text-lg font-semibold text-grafite mb-2">{service.name}</h3>
              <p className="text-sm text-grafite/70 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
