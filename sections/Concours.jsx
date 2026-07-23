// Bandeau promo — Concours biblique du mois
function Concours() {
  return (
    <section id="concours" className="relative bg-ink-800 border-y border-white/10 overflow-hidden">
      <div className="absolute inset-0 opacity-50 pointer-events-none" style={{ background: "radial-gradient(70% 120% at 85% 50%, rgba(216,182,106,.16), transparent 60%)" }}></div>
      <div className="relative max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-14 py-12 md:py-14 flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
        <div className="flex-none font-display tracking-mega text-[64px] md:text-[84px] leading-none text-gold-300 select-none" aria-hidden="true">?</div>
        <div className="flex-1 min-w-0">
          <div className="font-mono text-[10px] tracking-[.28em] uppercase text-gold-300 mb-2">✦ Nouveau · chaque mois</div>
          <h3 className="font-display text-[28px] sm:text-[36px] leading-[1.05] tracking-tight text-bone-50">Le concours biblique du mois — avez-vous bien écouté ?</h3>
          <p className="mt-2 text-[14px] leading-relaxed text-bone-300 max-w-[560px]">8 questions sur les prédications et événements du mois. À gagner : des livres — et en fin d'année, un voyage en Israël ou en Éthiopie.</p>
        </div>
        <div className="flex-none">
          <a href="concours.html" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gold-300 text-ink-900 text-[14px] font-bold uppercase tracking-[.08em] hover:bg-gold-200 transition">Participer →</a>
        </div>
      </div>
    </section>
  );
}

window.Concours = Concours;
