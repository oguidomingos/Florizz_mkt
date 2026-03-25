import { Leaf, Heart, Shield, Sparkles } from 'lucide-react'

const highlights = [
  {
    icon: Leaf,
    title: 'Abordagem Natural',
    text: 'Protocolos com ativos naturais e tecnologia de ponta para resultados visíveis.',
  },
  {
    icon: Heart,
    title: 'Cuidado Humanizado',
    text: 'Cada protocolo é montado sob medida para a sua necessidade capilar.',
  },
  {
    icon: Shield,
    title: 'Ciência Aplicada',
    text: 'Tricoscopia e acompanhamento fotográfico da evolução a cada sessão.',
  },
  {
    icon: Sparkles,
    title: 'Experiência Sensorial',
    text: 'Aromaterapia, toalhas quentes e mimos que transformam o cuidado em ritual.',
  },
]

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white lg:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center mb-16">
          <span className="text-sage text-sm font-semibold tracking-widest uppercase">Sobre a Florizz</span>
          <h2 className="font-heading text-3xl font-semibold text-grafite mt-3 md:text-4xl">
            Onde ciência e bem-estar<br className="hidden sm:block" /> se encontram
          </h2>
          <p className="text-grafite/70 max-w-2xl mx-auto mt-4 text-lg">
            A Florizz Hair &amp; Scalp Clinic é um espaço dedicado exclusivamente à saúde capilar.
            Combinamos tecnologia avançada, ativos de alta performance e um atendimento acolhedor
            para devolver a confiança de quem busca cabelos mais fortes e saudáveis.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, i) => (
            <div
              key={item.title}
              className="bg-champagne/40 rounded-2xl p-6 text-center animate-scale-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-verde-botanico/10 text-verde-botanico mb-4">
                <item.icon size={28} />
              </div>
              <h3 className="font-heading text-lg font-semibold text-grafite mb-2">{item.title}</h3>
              <p className="text-sm text-grafite/70 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
