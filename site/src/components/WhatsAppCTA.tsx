import { MessageCircle } from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/5500000000000?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20minha%20avalia%C3%A7%C3%A3o%20na%20Florizz.'

export default function WhatsAppCTA() {
  return (
    <>
      {/* Full CTA Section */}
      <section className="py-20 bg-verde-botanico relative overflow-hidden lg:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-72 h-72 bg-sage rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-56 h-56 bg-champagne rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl px-5 text-center">
          <h2 className="font-heading text-3xl font-semibold text-white mb-4 md:text-4xl">
            Pronta para transformar<br className="hidden sm:block" /> a saúde dos seus cabelos?
          </h2>
          <p className="text-sage-light text-lg mb-8 max-w-xl mx-auto">
            Agende sua avaliação gratuita pelo WhatsApp e comece sua jornada de revitalização capilar.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-champagne text-verde-botanico font-bold px-8 py-4 rounded-full text-lg hover:bg-champagne-dark transition-colors shadow-xl"
          >
            <MessageCircle size={24} />
            Falar no WhatsApp
          </a>
        </div>
      </section>

      {/* Floating WhatsApp button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </>
  )
}
