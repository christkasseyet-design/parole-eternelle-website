function Temple() {
  // Real fundraising info from the church poster
  const methods = [
    { name: "Rawbank · USD",      acc: "35101-01039913601-30-USD",    intitule: "37e CADC ASBL V/C CEPE NGIRI-NGIRI",   color: "#0a2563", logo: "RB" },
    { name: "Equity BCDC",        acc: "00018000070113471200045",     intitule: "37e CADC | Parole Eternelle Ngiri-ngiri", color: "#ED1C24", logo: "EQ" },
    { name: "Orange Money",       acc: "085 100 59 15",               intitule: "Mobile Money", color: "#ff7900", logo: "OM" },
    { name: "M-Pesa · Vodacom",   acc: "083 361 06 44",               intitule: "Mobile Money", color: "#e60000", logo: "MP" },
    { name: "Airtel Money",       acc: "098 550 83 43",               intitule: "Mobile Money", color: "#ED1C24", logo: "AM" },
  ];

  const [copied, setCopied] = React.useState(null);
  const copy = (txt, idx) => {
    navigator.clipboard?.writeText(txt);
    setCopied(idx);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <section id="temple" data-screen-label="Temple" className="sec-light relative bg-ink-900 py-24 md:py-32 overflow-hidden">
      {/* gold halo */}
      <div className="absolute top-1/4 -right-40 w-[700px] h-[700px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(244,194,56,.10), transparent 70%)" }}></div>

      <div className="max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-14 relative">

        <Reveal className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-end mb-12">
          <div className="lg:col-span-7">
            <Eyebrow className="mb-5">Grand Projet · Extension Bé Cape</Eyebrow>
            <Heading>
              Ensemble, <em className="italic text-gold-200 font-light">bâtissons</em>
              <br/>un temple pour le <em className="italic text-gold-200 font-light">Seigneur.</em>
            </Heading>
          </div>
          <p className="lg:col-span-5 text-[15px] leading-relaxed text-bone-200/85">
            Notre église grandit. Pour accueillir cette génération qui se
            transforme, nous construisons un nouveau temple à
            <strong className="text-bone-50"> Avenue Monkoto, Ngiri-Ngiri</strong> —
            une maison de prière digne, lumineuse, ouverte à tous.
            Chaque don, chaque prière, chaque main fait avancer ce rêve.
          </p>
        </Reveal>

        {/* Featured image of the building */}
        <Reveal className="relative grid lg:grid-cols-12 gap-6 lg:gap-8 mb-10">
          {/* Big rendering */}
          <div className="lg:col-span-8 relative aspect-[16/10] overflow-hidden glow">
            <img src="assets/temple-projet.jpg" alt="Temple Parole Éternelle Ngiri-Ngiri — Extension Bé Cape" className="absolute inset-0 w-full h-full object-cover" loading="lazy"/>
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 60%, rgba(0,0,0,.85) 100%)" }}></div>
            <div className="absolute top-5 left-5 px-3 py-1.5 bg-ink-900/80 backdrop-blur-md border border-gold-500/40 font-mono text-[10px] tracking-[.22em] uppercase text-gold-300">
              Rendu 3D · Projet en cours
            </div>
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
              <div>
                <div className="font-display text-[24px] sm:text-[32px] leading-tight text-white">Le nouveau temple — Avenue Monkoto</div>
                <div className="mt-1 text-[13px] text-white/80">2 bis &amp; 4, Av. Monkoto · C/Ngiri-Ngiri · Réf. Marché Kale</div>
              </div>
            </div>
          </div>

          {/* Progress card */}
          <div className="lg:col-span-4 bg-ink-700 border border-gold-500/30 p-6 sm:p-7 flex flex-col gap-5 glow">
            <div>
              <Eyebrow className="mb-3">Avancement</Eyebrow>
              <div className="font-display text-[44px] sm:text-[56px] leading-none text-bone-50 tick">68<span className="text-gold-300">%</span></div>
              <div className="text-[12px] text-bone-300 mt-1">de l'objectif atteint, grâce à Dieu et à vous</div>
            </div>
            <div className="h-2 bg-white/8 rounded-full overflow-hidden">
              <div className="h-full bg-gold-300 transition-all duration-1000" style={{ width: "68%" }}></div>
            </div>
            <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-5">
              <div>
                <div className="font-mono text-[10px] tracking-[.22em] uppercase text-bone-400">Objectif</div>
                <div className="font-display text-[22px] text-bone-50 mt-1 tick">350K USD</div>
              </div>
              <div>
                <div className="font-mono text-[10px] tracking-[.22em] uppercase text-bone-400">Donateurs</div>
                <div className="font-display text-[22px] text-bone-50 mt-1 tick">1 420+</div>
              </div>
            </div>
            <a href="#donner" className="btn btn-gold !w-full justify-center mt-auto">
              <I.Heart width="14" height="14"/> Soutenir le projet
            </a>
          </div>
        </Reveal>

        {/* Bank transfer coordinates — REAL data from poster */}
        <Reveal className="bg-ink-700 border border-white/10 p-6 sm:p-8 md:p-10">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
            <div>
              <Eyebrow className="mb-2">Coordonnées de transfert</Eyebrow>
              <div className="font-display text-[26px] sm:text-[32px] leading-tight text-bone-50">5 façons de donner pour le temple</div>
            </div>
            <div className="text-[11px] font-mono tracking-[.18em] uppercase text-bone-400">Cliquez pour copier</div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {methods.map((m, i) => (
              <button key={i} onClick={() => copy(m.acc, i)}
                className="text-left p-5 border border-white/10 hover:border-gold-400/50 transition group bg-ink-800">
                <div className="flex items-start justify-between mb-3">
                  <span className="w-9 h-9 rounded-md grid place-items-center font-display text-[13px] font-bold" style={{ background: m.color, color: "#fff" }}>{m.logo}</span>
                  <span className={`text-[10px] font-mono tracking-[.18em] uppercase transition ${copied === i ? "text-gold-300" : "text-bone-400 opacity-0 group-hover:opacity-100"}`}>
                    {copied === i ? "✓ Copié" : "Copier"}
                  </span>
                </div>
                <div className="font-medium text-[14px] text-bone-50 mb-2">{m.name}</div>
                <div className="font-mono text-[13px] text-gold-200 break-all tick mb-2 leading-snug">{m.acc}</div>
                <div className="text-[11px] text-bone-400 leading-snug">{m.intitule}</div>
              </button>
            ))}
            {/* CTA tile */}
            <a href="#donner" className="block p-5 bg-gold-300 text-ink-900 hover:bg-gold-200 transition group">
              <div className="font-display text-[20px] leading-tight">Don ponctuel rapide</div>
              <div className="mt-2 text-[12px] opacity-80 leading-relaxed">Choisissez un montant suggéré et un moyen de paiement — 30 secondes.</div>
              <div className="mt-4 inline-flex items-center gap-2 font-mono text-[10px] tracking-[.22em] uppercase font-bold">
                Donner maintenant <I.ArrowR width="12" height="12"/>
              </div>
            </a>
          </div>

          <div className="mt-7 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="text-[12px] text-bone-300 leading-relaxed max-w-xl">
              <span className="text-gold-200 font-mono tracking-[.1em] uppercase text-[10px] mr-2">Verset</span>
              « Que chacun donne comme il l'a résolu en son cœur, sans tristesse ni contrainte ; car Dieu aime celui qui donne avec joie. » — 2 Cor. 9:7
            </div>
            <a href="https://www.facebook.com/cepeng/" target="_blank" rel="noopener" className="btn btn-ghost">
              <I.FB width="14" height="14"/> Voir l'affiche officielle
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

window.Temple = Temple;
