import { Gift, Camera, Headphones, MessageCircle, FileText, Flower2 } from 'lucide-react'

const items = [
  {
    icon: Gift,
    title: 'Kit de Mimos',
    text: 'Sachês de produtos profissionais, cartão escrito à mão e amostras exclusivas a cada sessão.',
  },
  {
    icon: Flower2,
    title: 'Aromaterapia & Toalhas Quentes',
    text: 'Cada sessão começa com um ritual sensorial que transforma o tratamento em momento de autocuidado.',
  },
  {
    icon: Camera,
    title: 'Registro de Evolução',
    text: 'Fotos profissionais padronizadas a cada visita para que você veja seu progresso real.',
  },
  {
    icon: FileText,
    title: 'Relatório Pós-Consulta',
    text: 'Relatório em PDF com detalhes do procedimento, recomendações e plano de cuidados domiciliares.',
  },
  {
    icon: MessageCircle,
    title: 'Acompanhamento WhatsApp',
    text: 'Check-ins nos 7 dias seguintes para garantir que tudo vai bem com seu couro cabeludo.',
  },
  {
    icon: Headphones,
    title: 'Playlist Exclusiva',
    text: 'Trilha sonora personalizada para relaxar durante a sessão — porque o cuidado começa de dentro.',
  },
]

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="py-20 bg-champagne/30 lg:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center mb-16">
          <span className="text-sage text-sm font-semibold tracking-widest uppercase">Experiência</span>
          <h2 className="font-heading text-3xl font-semibold text-grafite mt-3 md:text-4xl">
            Muito mais que<br className="hidden sm:block" /> um tratamento capilar
          </h2>
          <p className="text-grafite/70 max-w-2xl mx-auto mt-4 text-lg">
            Na Florizz, cada detalhe é pensado para que você se sinta acolhida e especial do início ao fim.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="flex gap-4 bg-white rounded-2xl p-5 shadow-sm border border-sage/10 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="shrink-0 w-11 h-11 rounded-xl bg-verde-botanico/10 text-verde-botanico flex items-center justify-center">
                <item.icon size={22} />
              </div>
              <div>
                <h3 className="font-heading text-base font-semibold text-grafite mb-1">{item.title}</h3>
                <p className="text-sm text-grafite/70 leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
