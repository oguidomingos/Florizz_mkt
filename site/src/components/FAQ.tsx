import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'A avaliação inicial é gratuita?',
    answer:
      'Sim! A primeira avaliação com tricoscopia é cortesia. Nela, analisamos seu couro cabeludo em detalhe e montamos seu plano personalizado.',
  },
  {
    question: 'Quantas sessões são necessárias para ver resultado?',
    answer:
      'Depende do seu diagnóstico, mas a maioria dos clientes nota melhoras visíveis entre a 3ª e a 6ª sessão. O acompanhamento fotográfico mostra a evolução com clareza.',
  },
  {
    question: 'Os procedimentos são dolorosos?',
    answer:
      'Não. Utilizamos técnicas minimamente invasivas com conforto máximo. O microagulhamento, por exemplo, usa um dermapen com profundidade ajustável e é precedido de anestesia tópica quando necessário.',
  },
  {
    question: 'Quais são os cuidados pós-procedimento?',
    answer:
      'Você recebe um guia completo de cuidados pós-sessão. Em geral, recomendamos evitar exposição solar direta por 24h e usar os produtos indicados. O acompanhamento via WhatsApp garante suporte nos dias seguintes.',
  },
  {
    question: 'Posso fazer tratamento durante a gravidez?',
    answer:
      'Alguns procedimentos precisam ser adaptados durante a gestação. Na avaliação inicial, informamos quais tratamentos são seguros para cada fase e criamos um protocolo adequado.',
  },
  {
    question: 'Aceita convênio ou plano de saúde?',
    answer:
      'Atualmente trabalhamos com pagamento particular — Pix, cartões de débito e crédito (até 3x sem juros). Nossos valores são pensados para tornar o cuidado capilar acessível.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 bg-white lg:py-28">
      <div className="mx-auto max-w-3xl px-5">
        <div className="text-center mb-12">
          <span className="text-sage text-sm font-semibold tracking-widest uppercase">Dúvidas</span>
          <h2 className="font-heading text-3xl font-semibold text-grafite mt-3 md:text-4xl">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className="rounded-2xl border border-sage/15 bg-champagne/20 overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-grafite pr-4">{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-verde-botanico transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-grafite/70 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
