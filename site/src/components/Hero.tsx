import { ArrowDown } from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/5500000000000?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20tratamentos%20da%20Florizz.'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-verde-botanico overflow-hidden">
      {/* Botanical pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sage rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-champagne rounded-full blur-3xl -translate-x-1/4 translate-y-1/4" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-sage-light rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-5 py-32 text-center lg:py-40">
        <img
          src={`${import.meta.env.BASE_URL}logo-branco.png`}
          alt="Florizz"
          className="mx-auto h-28 w-auto mb-8 animate-fade-in lg:h-36"
        />

        <h1 className="font-heading text-4xl font-semibold text-white leading-tight mb-6 animate-fade-in-up delay-200 md:text-5xl lg:text-6xl">
          Terapia Capilar<br />
          <span className="text-champagne">Premium & Personalizada</span>
        </h1>

        <p className="text-lg text-sage-light max-w-2xl mx-auto mb-10 animate-fade-in-up delay-400 md:text-xl">
          Tratamentos avançados para queda, crescimento e saúde do couro cabeludo.
          Uma experiência sensorial única pensada para o seu bem-estar.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-600">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-champagne text-verde-botanico font-semibold px-8 py-4 rounded-full text-lg hover:bg-champagne-dark transition-colors shadow-lg"
          >
            Agendar Avaliação Gratuita
          </a>
          <a
            href="#servicos"
            className="text-white/80 font-medium flex items-center gap-2 hover:text-white transition-colors"
          >
            Conhecer Tratamentos
            <ArrowDown size={18} />
          </a>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 40C360 80 720 0 1080 40C1260 60 1380 60 1440 40V80H0V40Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
