import { useEffect, useRef } from 'react'

const BASE = import.meta.env.BASE_URL

function FlorizzSymbol({ className = '', color = 'currentColor' }) {
  return (
    <svg viewBox="0 0 120 160" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M60 160 C60 120, 60 100, 60 85" strokeWidth="2.5"/>
      <path d="M60 120 C45 115, 35 105, 38 95 C40 88, 50 90, 55 100" strokeWidth="1.8"/>
      <path d="M60 110 C75 105, 82 95, 78 87 C76 82, 68 85, 65 93" strokeWidth="1.8"/>
      <path d="M60 80 C45 72, 30 55, 35 35 C38 22, 48 15, 55 20" strokeWidth="2"/>
      <path d="M60 80 C75 72, 90 55, 85 35 C82 22, 72 15, 65 20" strokeWidth="2"/>
      <path d="M55 20 C57 10, 63 10, 65 20" strokeWidth="2"/>
      <path d="M52 65 C50 50, 48 35, 50 25" strokeWidth="1.2" opacity="0.6"/>
      <path d="M60 68 C60 52, 60 38, 60 22" strokeWidth="1.2" opacity="0.6"/>
      <path d="M68 65 C70 50, 72 35, 70 25" strokeWidth="1.2" opacity="0.6"/>
    </svg>
  )
}

function useScrollReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )
    const elements = ref.current?.querySelectorAll('.fade-section')
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
  return ref
}

/* ===== NAVIGATION ===== */
function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-verde-botanico/95 backdrop-blur-md border-b border-sage/20">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <FlorizzSymbol className="w-6 h-8" color="#A7C4B5" />
          <span className="font-playfair text-champagne text-lg font-semibold tracking-wide">FLORIZZ</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-sage/80">
          <a href="#cores" className="hover:text-champagne transition-colors">Cores</a>
          <a href="#tipografia" className="hover:text-champagne transition-colors">Tipografia</a>
          <a href="#logos" className="hover:text-champagne transition-colors">Logos</a>
          <a href="#aplicacoes" className="hover:text-champagne transition-colors">Aplicacoes</a>
          <a href="#diretrizes" className="hover:text-champagne transition-colors">Diretrizes</a>
        </div>
      </div>
    </nav>
  )
}

/* ===== HERO ===== */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-verde-botanico overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10"><FlorizzSymbol className="w-32 h-44" color="#fff" /></div>
        <div className="absolute top-20 right-20"><FlorizzSymbol className="w-24 h-32" color="#fff" /></div>
        <div className="absolute bottom-20 left-1/4"><FlorizzSymbol className="w-20 h-28" color="#fff" /></div>
        <div className="absolute bottom-10 right-10"><FlorizzSymbol className="w-28 h-38" color="#fff" /></div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-verde-dark/30 via-transparent to-verde-dark/50" />

      <div className="relative text-center px-6 fade-section visible">
        <FlorizzSymbol className="w-24 h-32 md:w-32 md:h-44 mx-auto mb-8" color="#F4EDE0" />
        <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl text-champagne font-bold tracking-wide mb-2">
          FLORIZZ
        </h1>
        <p className="font-montserrat text-sage text-sm md:text-base tracking-[0.3em] uppercase mb-6">
          Hair & Scalp Clinic
        </p>
        <div className="w-16 h-px bg-sage/40 mx-auto mb-6" />
        <p className="font-playfair text-champagne/80 text-lg md:text-2xl italic">
          Crescimento com ciencia e beleza
        </p>
        <p className="mt-12 text-sage/60 text-xs tracking-[0.2em] uppercase">
          Manual de Identidade Visual
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-sage/50">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-sage/30 animate-pulse" />
      </div>
    </section>
  )
}

/* ===== PALETA DE CORES ===== */
function ColorSwatch({ name, hex, textDark = false, large = false }) {
  return (
    <div className={`group ${large ? 'col-span-2 md:col-span-1' : ''}`}>
      <div
        className="rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl overflow-hidden"
        style={{ backgroundColor: hex }}
      >
        <div className={`p-6 ${large ? 'h-44' : 'h-36'} flex flex-col justify-end`}>
          <p className={`font-playfair text-lg font-semibold ${textDark ? 'text-grafite' : 'text-white'}`}>
            {name}
          </p>
          <p className={`font-montserrat text-sm mt-1 font-mono tracking-wider ${textDark ? 'text-grafite/70' : 'text-white/70'}`}>
            {hex}
          </p>
        </div>
      </div>
    </div>
  )
}

function PaletaDeCores() {
  const colors = [
    { name: 'Verde Botanico', hex: '#0E4F3D', textDark: false, large: true },
    { name: 'Sage', hex: '#A7C4B5', textDark: true },
    { name: 'Champagne Rose', hex: '#F4EDE0', textDark: true },
    { name: 'Branco', hex: '#FFFFFF', textDark: true },
    { name: 'Grafite', hex: '#2F2F2F', textDark: false },
  ]

  return (
    <section id="cores" className="py-24 md:py-32 bg-branco">
      <div className="max-w-6xl mx-auto px-6">
        <div className="fade-section">
          <p className="text-verde-botanico font-montserrat text-sm tracking-[0.2em] uppercase mb-3">01</p>
          <h2 className="font-playfair text-4xl md:text-5xl text-grafite font-bold mb-4">Paleta de Cores</h2>
          <p className="font-montserrat text-grafite/60 max-w-xl mx-auto mb-16 leading-relaxed">
            Cores inspiradas na natureza e na ciencia capilar. O verde botanico transmite expertise e confianca,
            enquanto o champagne rose traz delicadeza e acolhimento.
          </p>
        </div>
        <div className="fade-section grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {colors.map((c) => (
            <ColorSwatch key={c.hex} {...c} />
          ))}
        </div>

        {/* Color usage guide */}
        <div className="fade-section mt-16 grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-champagne/50 rounded-xl p-6">
            <div className="w-4 h-4 rounded-full bg-verde-botanico mb-3" />
            <h3 className="font-playfair text-lg text-grafite font-semibold mb-2">Primaria</h3>
            <p className="text-sm text-grafite/60 leading-relaxed">
              Usada em elementos principais: logotipo, titulos, botoes de acao e backgrounds nobres.
            </p>
          </div>
          <div className="bg-champagne/50 rounded-xl p-6">
            <div className="w-4 h-4 rounded-full bg-sage mb-3" />
            <h3 className="font-playfair text-lg text-grafite font-semibold mb-2">Secundaria</h3>
            <p className="text-sm text-grafite/60 leading-relaxed">
              Complemento suave para fundos, bordas, icones e elementos de apoio visual.
            </p>
          </div>
          <div className="bg-champagne/50 rounded-xl p-6">
            <div className="w-4 h-4 rounded-full bg-champagne border border-champagne-dark mb-3" />
            <h3 className="font-playfair text-lg text-grafite font-semibold mb-2">Neutra</h3>
            <p className="text-sm text-grafite/60 leading-relaxed">
              Backgrounds de secoes, cartoes, embalagens e materiais impressos.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ===== TIPOGRAFIA ===== */
function Tipografia() {
  return (
    <section id="tipografia" className="py-24 md:py-32 bg-champagne">
      <div className="max-w-6xl mx-auto px-6">
        <div className="fade-section">
          <p className="text-verde-botanico font-montserrat text-sm tracking-[0.2em] uppercase mb-3">02</p>
          <h2 className="font-playfair text-4xl md:text-5xl text-grafite font-bold mb-4">Tipografia</h2>
          <p className="font-montserrat text-grafite/60 max-w-xl mx-auto mb-16 leading-relaxed">
            A combinacao entre serif e sans-serif transmite sofisticacao e clareza,
            equilibrando o cientifico e o estetico.
          </p>
        </div>

        <div className="fade-section grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Playfair Display */}
          <div className="bg-branco rounded-2xl p-8 md:p-10 shadow-lg text-left">
            <p className="text-verde-botanico font-montserrat text-xs tracking-[0.15em] uppercase mb-4">Titulos & Destaques</p>
            <h3 className="font-playfair text-5xl md:text-6xl text-grafite font-bold mb-2">Playfair</h3>
            <h3 className="font-playfair text-5xl md:text-6xl text-grafite font-bold mb-6">Display</h3>
            <div className="w-12 h-px bg-sage mb-6" />
            <div className="space-y-3">
              <p className="font-playfair text-2xl text-grafite font-bold">Bold 700 — Titulos Principais</p>
              <p className="font-playfair text-xl text-grafite font-semibold">SemiBold 600 — Subtitulos</p>
              <p className="font-playfair text-lg text-grafite font-medium">Medium 500 — Destaques</p>
              <p className="font-playfair text-lg text-grafite italic">Italic — Slogans e Citacoes</p>
            </div>
            <div className="mt-8 pt-6 border-t border-champagne">
              <p className="font-playfair text-3xl text-verde-botanico">Aa Bb Cc Dd Ee</p>
              <p className="font-playfair text-xl text-grafite/50 mt-2">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p className="font-playfair text-xl text-grafite/50">abcdefghijklmnopqrstuvwxyz</p>
              <p className="font-playfair text-xl text-grafite/50">0123456789</p>
            </div>
          </div>

          {/* Montserrat */}
          <div className="bg-branco rounded-2xl p-8 md:p-10 shadow-lg text-left">
            <p className="text-verde-botanico font-montserrat text-xs tracking-[0.15em] uppercase mb-4">Corpo & Interface</p>
            <h3 className="font-montserrat text-5xl md:text-6xl text-grafite font-bold mb-8">Montserrat</h3>
            <div className="w-12 h-px bg-sage mb-6" />
            <div className="space-y-3">
              <p className="font-montserrat text-lg text-grafite font-bold">Bold 700 — Botoes e CTAs</p>
              <p className="font-montserrat text-lg text-grafite font-semibold">SemiBold 600 — Labels</p>
              <p className="font-montserrat text-lg text-grafite font-medium">Medium 500 — Corpo Principal</p>
              <p className="font-montserrat text-lg text-grafite font-light">Light 300 — Texto Secundario</p>
            </div>
            <div className="mt-8 pt-6 border-t border-champagne">
              <p className="font-montserrat text-3xl text-verde-botanico">Aa Bb Cc Dd Ee</p>
              <p className="font-montserrat text-xl text-grafite/50 mt-2">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p className="font-montserrat text-xl text-grafite/50">abcdefghijklmnopqrstuvwxyz</p>
              <p className="font-montserrat text-xl text-grafite/50">0123456789</p>
            </div>
          </div>
        </div>

        {/* Usage examples */}
        <div className="fade-section mt-12 bg-verde-botanico rounded-2xl p-8 md:p-10 text-left">
          <p className="text-sage/60 font-montserrat text-xs tracking-[0.15em] uppercase mb-6">Exemplo de Hierarquia</p>
          <h3 className="font-playfair text-3xl md:text-4xl text-champagne font-bold mb-3">Tratamento Capilar Avancado</h3>
          <p className="font-playfair text-xl text-sage italic mb-4">Recupere a vitalidade dos seus fios</p>
          <p className="font-montserrat text-champagne/70 leading-relaxed max-w-2xl">
            Na Florizz, combinamos ciencia e natureza para oferecer tratamentos personalizados
            que respeitam a saude do seu couro cabeludo. Cada protocolo e desenvolvido com base
            em analise tricologica individual.
          </p>
          <button className="mt-6 bg-champagne text-verde-botanico font-montserrat font-semibold px-8 py-3 rounded-full text-sm tracking-wider uppercase hover:bg-branco transition-colors">
            Agendar Consulta
          </button>
        </div>
      </div>
    </section>
  )
}

/* ===== VARIACOES DO LOGO ===== */
function LogoCard({ title, filename, bgClass = 'bg-branco', description }) {
  return (
    <div className="group">
      <div className={`${bgClass} rounded-2xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1`}>
        <div className="aspect-square flex items-center justify-center p-8">
          <img
            src={`${BASE}logos/${filename}`}
            alt={`Logo Florizz - ${title}`}
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <div className="px-5 py-4 bg-champagne/50 border-t border-champagne-dark/30">
          <p className="font-playfair text-grafite font-semibold text-sm">{title}</p>
          <p className="font-montserrat text-grafite/50 text-xs mt-1">{description}</p>
        </div>
      </div>
    </div>
  )
}

function VariacoesLogo() {
  const layouts = [
    { title: 'Standard', filename: 'florizz-standard-verde-botanico.png', description: 'Uso principal, vertical' },
    { title: 'Simbolo', filename: 'florizz-symbol-verde-botanico.png', description: 'Icone isolado' },
    { title: 'Horizontal', filename: 'florizz-horizontal-verde-botanico.png', description: 'Cabecalhos e assinaturas' },
    { title: 'Horizontal + Tagline', filename: 'florizz-horizontal-tagline-verde-botanico.png', description: 'Versao completa horizontal' },
    { title: 'Inline', filename: 'florizz-inline-verde-botanico.png', description: 'Texto corrido e rodapes' },
    { title: 'Icon', filename: 'florizz-icon-verde-botanico.png', description: 'Redes sociais e favicon' },
  ]

  const colorVariations = [
    { name: 'Verde Botanico', suffix: 'verde-botanico', bgClass: 'bg-branco' },
    { name: 'Sage', suffix: 'sage', bgClass: 'bg-verde-botanico' },
    { name: 'Branco', suffix: 'branco', bgClass: 'bg-verde-botanico' },
    { name: 'Grafite', suffix: 'grafite', bgClass: 'bg-champagne' },
    { name: 'Negativa', suffix: 'negativa', bgClass: 'bg-grafite' },
  ]

  return (
    <section id="logos" className="py-24 md:py-32 bg-branco">
      <div className="max-w-6xl mx-auto px-6">
        <div className="fade-section">
          <p className="text-verde-botanico font-montserrat text-sm tracking-[0.2em] uppercase mb-3">03</p>
          <h2 className="font-playfair text-4xl md:text-5xl text-grafite font-bold mb-4">Variacoes do Logo</h2>
          <p className="font-montserrat text-grafite/60 max-w-xl mx-auto mb-16 leading-relaxed">
            Seis layouts adaptaveis para diferentes contextos de aplicacao,
            garantindo consistencia visual em todos os pontos de contato.
          </p>
        </div>

        {/* Main layouts in verde-botanico */}
        <div className="fade-section grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-16">
          {layouts.map((l) => (
            <LogoCard key={l.filename} {...l} />
          ))}
        </div>

        {/* Color variations */}
        <div className="fade-section">
          <h3 className="font-playfair text-2xl text-grafite font-semibold mb-8">Variacoes de Cor</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {colorVariations.map((cv) => (
              <div key={cv.suffix} className="group">
                <div className={`${cv.bgClass} rounded-xl shadow-md overflow-hidden transition-all duration-300 group-hover:shadow-lg ${cv.bgClass === 'bg-branco' ? 'border border-champagne-dark/30' : ''}`}>
                  <div className="aspect-square flex items-center justify-center p-6">
                    <img
                      src={`${BASE}logos/florizz-standard-${cv.suffix}.png`}
                      alt={`Logo ${cv.name}`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
                <p className="font-montserrat text-xs text-grafite/60 mt-2 text-center">{cv.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ===== APLICACOES ===== */
function MockupCard({ title, filename, description }) {
  return (
    <div className="group">
      <div className="bg-branco rounded-2xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={`${BASE}mockups/${filename}`}
            alt={`Mockup - ${title}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-5">
          <p className="font-playfair text-grafite font-semibold">{title}</p>
          <p className="font-montserrat text-grafite/50 text-sm mt-1">{description}</p>
        </div>
      </div>
    </div>
  )
}

function Aplicacoes() {
  const mockups = [
    { title: 'Cartao de Visita', filename: 'mockup-business-card.png', description: 'Frente e verso, papel texturizado' },
    { title: 'Sinalizacao', filename: 'mockup-clinic-signage.png', description: 'Fachada da clinica' },
    { title: 'Embalagem', filename: 'mockup-product-packaging.png', description: 'Linha de produtos capilares' },
    { title: 'Uniforme', filename: 'mockup-uniform.png', description: 'Jaleco da equipe clinica' },
    { title: 'Instagram', filename: 'mockup-instagram-profile.png', description: 'Perfil e feed profissional' },
    { title: 'Story', filename: 'mockup-social-media-story.png', description: 'Template para stories' },
  ]

  return (
    <section id="aplicacoes" className="py-24 md:py-32 bg-champagne">
      <div className="max-w-6xl mx-auto px-6">
        <div className="fade-section">
          <p className="text-verde-botanico font-montserrat text-sm tracking-[0.2em] uppercase mb-3">04</p>
          <h2 className="font-playfair text-4xl md:text-5xl text-grafite font-bold mb-4">Aplicacoes</h2>
          <p className="font-montserrat text-grafite/60 max-w-xl mx-auto mb-16 leading-relaxed">
            Visualize a marca em diferentes materiais e contextos, do impresso ao digital,
            mantendo sempre a essencia Florizz.
          </p>
        </div>

        <div className="fade-section grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockups.map((m) => (
            <MockupCard key={m.filename} {...m} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ===== DIRETRIZES DE USO ===== */
function GuidelineCard({ title, items, type }) {
  const isGood = type === 'do'
  return (
    <div className={`rounded-2xl p-6 md:p-8 ${isGood ? 'bg-verde-botanico/5 border-2 border-verde-botanico/20' : 'bg-red-50 border-2 border-red-200/50'}`}>
      <div className="flex items-center gap-3 mb-5">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-lg ${isGood ? 'bg-verde-botanico text-branco' : 'bg-red-400 text-branco'}`}>
          {isGood ? '\u2713' : '\u2717'}
        </div>
        <h3 className="font-playfair text-xl text-grafite font-semibold">{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className={`mt-1 text-sm ${isGood ? 'text-verde-botanico' : 'text-red-400'}`}>
              {isGood ? '\u2713' : '\u2717'}
            </span>
            <span className="font-montserrat text-sm text-grafite/70 leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Diretrizes() {
  const dos = [
    'Manter a area de protecao minima de 1x a altura do simbolo ao redor do logo',
    'Usar as versoes de cor oficiais conforme o fundo da aplicacao',
    'Aplicar o logo sobre fundos limpos e sem ruido visual',
    'Respeitar o tamanho minimo de 24mm (impresso) ou 80px (digital)',
    'Utilizar as fontes Playfair Display e Montserrat em todas as comunicacoes',
    'Manter a proporcao original do logo — nao distorcer',
  ]

  const donts = [
    'Alterar as cores do logo fora da paleta oficial',
    'Aplicar o logo sobre imagens muito complexas sem overlay',
    'Rotacionar, distorcer ou modificar a proporcao do simbolo',
    'Usar tamanhos abaixo do minimo (24mm impresso / 80px digital)',
    'Adicionar sombras, brilhos ou efeitos ao logo',
    'Combinar com fontes que nao pertencem ao sistema tipografico',
  ]

  return (
    <section id="diretrizes" className="py-24 md:py-32 bg-branco">
      <div className="max-w-6xl mx-auto px-6">
        <div className="fade-section">
          <p className="text-verde-botanico font-montserrat text-sm tracking-[0.2em] uppercase mb-3">05</p>
          <h2 className="font-playfair text-4xl md:text-5xl text-grafite font-bold mb-4">Diretrizes de Uso</h2>
          <p className="font-montserrat text-grafite/60 max-w-xl mx-auto mb-16 leading-relaxed">
            Regras para garantir a integridade e a consistencia da identidade visual
            em todas as suas aplicacoes.
          </p>
        </div>

        <div className="fade-section grid md:grid-cols-2 gap-6 md:gap-8">
          <GuidelineCard title="Faca" items={dos} type="do" />
          <GuidelineCard title="Nao Faca" items={donts} type="dont" />
        </div>

        {/* Spacing diagram */}
        <div className="fade-section mt-16 bg-champagne rounded-2xl p-8 md:p-12">
          <h3 className="font-playfair text-2xl text-grafite font-semibold mb-8 text-center">Area de Protecao</h3>
          <div className="max-w-sm mx-auto">
            <div className="relative border-2 border-dashed border-sage p-12 rounded-xl">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-champagne px-2">
                <span className="font-montserrat text-xs text-verde-botanico">1x</span>
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-champagne px-2">
                <span className="font-montserrat text-xs text-verde-botanico">1x</span>
              </div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-champagne py-1">
                <span className="font-montserrat text-xs text-verde-botanico">1x</span>
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-champagne py-1">
                <span className="font-montserrat text-xs text-verde-botanico">1x</span>
              </div>
              <div className="flex items-center justify-center">
                <FlorizzSymbol className="w-16 h-20" color="#0E4F3D" />
              </div>
            </div>
            <p className="font-montserrat text-xs text-grafite/50 text-center mt-4">
              Margem minima igual a altura do simbolo em todos os lados
            </p>
          </div>
        </div>

        {/* Minimum sizes */}
        <div className="fade-section mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-champagne rounded-2xl p-8 text-center">
            <p className="font-montserrat text-xs text-verde-botanico tracking-[0.15em] uppercase mb-4">Impresso</p>
            <div className="flex items-end justify-center gap-6">
              <div>
                <FlorizzSymbol className="w-6 h-8 mx-auto" color="#0E4F3D" />
                <p className="font-montserrat text-xs text-grafite/50 mt-2">24mm min</p>
              </div>
              <div>
                <FlorizzSymbol className="w-12 h-16 mx-auto" color="#0E4F3D" />
                <p className="font-montserrat text-xs text-grafite/50 mt-2">48mm ideal</p>
              </div>
            </div>
          </div>
          <div className="bg-champagne rounded-2xl p-8 text-center">
            <p className="font-montserrat text-xs text-verde-botanico tracking-[0.15em] uppercase mb-4">Digital</p>
            <div className="flex items-end justify-center gap-6">
              <div>
                <FlorizzSymbol className="w-5 h-7 mx-auto" color="#0E4F3D" />
                <p className="font-montserrat text-xs text-grafite/50 mt-2">80px min</p>
              </div>
              <div>
                <FlorizzSymbol className="w-10 h-14 mx-auto" color="#0E4F3D" />
                <p className="font-montserrat text-xs text-grafite/50 mt-2">160px ideal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ===== FOOTER ===== */
function Footer() {
  return (
    <footer className="bg-verde-botanico py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <FlorizzSymbol className="w-12 h-16 mx-auto mb-4" color="#A7C4B5" />
        <p className="font-playfair text-champagne text-2xl font-semibold mb-1">FLORIZZ</p>
        <p className="font-montserrat text-sage/60 text-xs tracking-[0.2em] uppercase mb-6">Hair & Scalp Clinic</p>
        <div className="w-12 h-px bg-sage/30 mx-auto mb-6" />
        <p className="font-playfair text-sage/40 italic text-sm">
          Crescimento com ciencia e beleza
        </p>
        <p className="font-montserrat text-sage/30 text-xs mt-8">
          Manual de Identidade Visual &mdash; 2026
        </p>
      </div>
    </footer>
  )
}

/* ===== APP ===== */
function App() {
  const containerRef = useScrollReveal()

  return (
    <div ref={containerRef} className="min-h-screen">
      <Nav />
      <Hero />
      <PaletaDeCores />
      <Tipografia />
      <VariacoesLogo />
      <Aplicacoes />
      <Diretrizes />
      <Footer />
    </div>
  )
}

export default App
