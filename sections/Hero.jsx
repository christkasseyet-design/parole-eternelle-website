function Hero({ showLive = true, variant = "cinematic" }) {
  return (
    <section id="accueil" data-screen-label="Accueil" className="relative w-full overflow-hidden bg-ink-900">

      {/* ─── FULL-BLEED CENTERED HERO — photo pasteur en prédication ── */}
      <div className="relative min-h-[100svh] w-full flex flex-col">
        {/* Photo background — léger flou volontaire pour absorber la basse résolution */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0" style={{ transform: "scale(1.02)" }}>
            <image-slot
              id="hero-bg"
              shape="rect"
              src="assets/photos/culte-assemblee-2.jpg"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }}
              placeholder="Photo de fond · culte dominical">
            </image-slot>
          </div>
        </div>
        <div className="absolute inset-0 z-[2] pointer-events-none" style={{
          background: "linear-gradient(180deg, rgba(6,7,10,.62) 0%, rgba(6,7,10,.24) 38%, rgba(6,7,10,.5) 70%, rgba(6,7,10,.94) 100%), radial-gradient(120% 95% at 50% 32%, transparent 42%, rgba(6,7,10,.55) 100%)"
        }}></div>
        <div className="grain"></div>

        {/* Centered welcome */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 pt-28 pb-20 hero-in">
          <a href="#jubile" className="group inline-flex items-center gap-2.5 mb-8 px-4 py-1.5 rounded-full border border-gold-300/40 bg-black/30 backdrop-blur-sm hover:border-gold-300/80 transition">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-300"></span>
            <span className="font-mono text-[10px] sm:text-[11px] tracking-[.24em] uppercase text-gold-200">Jubilé 2026 · L'année jubilaire</span>
          </a>
          <h1 className="font-display text-[clamp(42px,6.5vw,96px)] leading-[1.02] text-white max-w-5xl" style={{ textShadow: "0 2px 30px rgba(0,0,0,.5)" }}>
            Bienvenue à la Parole Éternelle
          </h1>
          <p className="mt-6 text-[17px] sm:text-[19px] text-white/90 max-w-2xl" style={{ textShadow: "0 1px 12px rgba(0,0,0,.6)" }}>
            Une église vivante pour une génération transformée — Ngiri-Ngiri, Kinshasa
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Btn variant="gold" href="#programmes">Programme des cultes</Btn>
            <a href="#a-propos" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm text-white text-[14px] font-semibold hover:bg-white/10 hover:border-white/60 transition">Découvrir l'église</a>
          </div>
          {showLive && (
            <div className="mt-10 inline-flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span className="font-mono text-[10px] sm:text-[11px] tracking-[.2em] uppercase text-white/80">Dimanche · 07h30 &amp; 10h00 · En direct</span>
            </div>
          )}
        </div>

        {/* Scroll hint */}
        <a href="#welcome" className="relative z-10 mx-auto mb-5 flex flex-col items-center gap-2 text-white/70 hover:text-gold-200 transition">
          <span className="font-mono text-[9px] tracking-[.32em] uppercase">Découvrir</span>
          <span className="w-px h-8 bg-gradient-to-b from-white/0 to-white/80 animate-pulse"></span>
        </a>
      </div>

      {/* ─── WELCOME STRIP — like ICF "Willkommen" ─────────────────────────── */}
      <div id="welcome" className="sec-light relative bg-ink-800 border-y border-white/10">
        <div className="max-w-[1480px] mx-auto px-6 sm:px-10 lg:px-14 py-14 sm:py-20 grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <Eyebrow className="mb-5">Bienvenue à Parole Éternelle</Eyebrow>
            <p className="font-display text-[28px] sm:text-[36px] md:text-[44px] leading-[1.1] text-bone-50 max-w-3xl">
              Que tu sois <em className="italic text-gold-200 font-light">chercheur</em>, étudiant, en couple, parent,
              <br className="hidden sm:block"/> ou que tu rencontres Christ pour la première fois — <em className="italic text-gold-200 font-light">il y a une place pour toi.</em>
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Btn variant="gold" href="#a-propos">Apprendre à nous connaître</Btn>
              <Btn variant="ghost" href="#programmes" icon={false}>Voir nos cultes</Btn>
            </div>
          </div>

          <aside className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4">
            <Pill kicker="Dimanche" big="07:30" caption="Culte · 1ᵉʳ service"/>
            <Pill kicker="Dimanche" big="10:00" caption="Culte · 2ᵉ service"/>
            <Pill kicker="Mercredi" big="17:00" caption="Étude biblique"/>
            <Pill kicker="Vendredi" big="17:00" caption="Vendredi Ngomba"/>
          </aside>
        </div>
      </div>

      {/* ─── Continuous scrolling banner ───────────────────────────────────── */}
      <div className="relative overflow-hidden border-b border-white/10 py-4" style={{ background: "rgba(244,194,56,.05)" }}>
        <div className="flex marq whitespace-nowrap gap-12 text-gold-200 font-display text-[20px] sm:text-[24px]">
          {Array.from({ length: 4 }).map((_, n) => (
            <span key={n} className="flex items-center gap-12">
              <span className="italic">Jubilé 2026</span>
              <span className="text-gold-300/40">✦</span>
              <span>Une église vivante</span>
              <span className="text-gold-300/40">✦</span>
              <span>Une génération transformée</span>
              <span className="text-gold-300/40">✦</span>
              <span>Dimanche 07h30 &amp; 10h00</span>
              <span className="text-gold-300/40">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pill({ kicker, big, caption }) {
  return (
    <div className="bg-ink-700 border border-white/10 p-5 flex flex-col gap-1 hover:border-gold-400/40 transition">
      <div className="font-mono text-[9px] tracking-[.28em] uppercase text-gold-300">{kicker}</div>
      <div className="font-display text-[36px] sm:text-[44px] leading-none text-bone-50 tick">{big}</div>
      <div className="text-[12px] text-bone-300">{caption}</div>
    </div>
  );
}

window.Hero = Hero;
