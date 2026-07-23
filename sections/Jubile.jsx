// Événement phare — Jubilé 2026
function Jubile() {
  return (
    <section id="jubile" data-screen-label="Jubilé 2026" className="sec-light relative bg-ink-900 overflow-hidden border-b border-white/10">
      {/* gold ambience */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(216,182,106,.14), transparent 70%)" }}></div>
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(216,182,106,.08), transparent 70%)" }}></div>

      <div className="relative max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-14 py-20 md:py-28 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">

        {/* Poster */}
        <Reveal className="lg:col-span-5 order-2 lg:order-1">
          <div className="relative aspect-[7/10] max-w-[440px] mx-auto lg:mx-0 overflow-hidden glow" style={{ borderRadius: "16px", border: "1px solid rgba(216,182,106,.3)" }}>
            <image-slot
              id="jubile-poster"
              shape="rect"
              src="assets/jubile-affiche.jpg"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }}
              placeholder="Affiche officielle Jubilé 2026">
            </image-slot>
          </div>
        </Reveal>

        {/* Copy */}
        <Reveal className="lg:col-span-7 order-1 lg:order-2">
          <Eyebrow className="mb-6">Événement de l'année · C.E. Parole Éternelle</Eyebrow>
          <h2 className="font-display text-[clamp(52px,8vw,116px)] leading-[0.9] tracking-[-0.02em] text-bone-50 flex flex-wrap items-baseline gap-x-[0.3em]">
            <span>Jubilé</span>
            <span className="text-gold-300">2026</span>
          </h2>
          <p className="mt-3 font-display text-[22px] sm:text-[28px] text-gold-200">
            « Y a-t-il rien qui soit étonnant de la part de l'Éternel ? »
          </p>
          <p className="mt-2 font-mono text-[11px] tracking-[.2em] uppercase text-bone-300">Genèse 18:14 · Thème de l'année</p>
          <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-bone-200">
            Du 8 juillet au 2 août, un mois de célébration, de louange et de
            prédication à Ngiri-Ngiri — avec le Proph. Prospère Mugusho,
            le Past. Kondo Wa Kondo, le Past. Dieudonné Mongu, le Past. Dede N'Landu,
            et le Past. Raphaël Kaseya comme hôte.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-[11px] tracking-[.18em] uppercase text-bone-300">
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold-300"></span> 08 juillet – 02 août 2026</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold-300"></span> Mer · Jeu · Ven 17h00–19h30 · Dim aux deux cultes</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold-300"></span> 2 bis & 4, Av. Monkoto · Ngiri-Ngiri</span>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Btn variant="gold" href="#programmes">Voir le programme</Btn>
            <Btn variant="ghost" href="#contact" icon={false}>Nous visiter</Btn>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

window.Jubile = Jubile;
