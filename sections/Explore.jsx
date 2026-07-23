function Explore() {
  // Bento grid of content categories — ICF-inspired homepage discovery
  const tiles = [
    {
      kicker: "01 · Grand projet",
      title: "Le Temple",
      desc: "Ensemble, bâtissons un temple pour le Seigneur. Avancement 68%.",
      href: "#temple",
      tag: "Soutenir le projet",
      tone: "warm",
      span: "lg:col-span-2 lg:row-span-2",
      size: "hero",
    },
    {
      kicker: "02 · Lire & Écouter",
      title: "La Bible",
      desc: "Texte intégral + audio · 5 langues · hors-ligne.",
      href: "bible.html",
      tag: "FR · LN · SW · KG · TS",
      tone: "warm",
      span: "lg:col-span-1 lg:row-span-2",
      size: "tall",
    },
    {
      kicker: "03 · Vidéos & Live",
      title: "Vidéos",
      desc: "Cultes, lives, worship, conférences — chronologiquement.",
      href: "videos.html",
      tag: "YouTube · Facebook",
      tone: "warm",
      span: "lg:col-span-1",
    },
    {
      kicker: "04 · La Parole",
      title: "Prédications",
      desc: "Plus de 248 messages classés par série et thème.",
      href: "predications.html",
      tag: "Voir l'archive",
      tone: "deep",
      span: "lg:col-span-1",
    },
    {
      kicker: "05 · Rassemblements",
      title: "Conférences",
      desc: "Famille & Foi, Leaders, Réveil — les grands moments.",
      href: "#programmes",
      tag: "Calendrier",
      tone: "warm",
      span: "lg:col-span-1",
    },
    {
      kicker: "06 · Vie d'église",
      title: "Événements",
      desc: "Cultes, Vendredi Ngomba, jeunesse, baptêmes — tout le mois.",
      href: "#programmes",
      tag: "31 dates · Mai 2026",
      tone: "warm",
      span: "lg:col-span-2",
    },
    {
      kicker: "07 · Adoration",
      title: "Worship",
      desc: "Chants en français et en lingala, originaux et live.",
      href: "videos.html",
      tag: "Voix d'Éternité",
      tone: "warm",
      span: "lg:col-span-1",
    },
    {
      kicker: "08 · Communauté",
      title: "Jeunesse",
      desc: "NextGen · 13–25 ans · samedis, camps, mentorat.",
      href: "#communaute",
      tag: "Rejoindre",
      tone: "warm",
      span: "lg:col-span-1",
    },
    {
      kicker: "09 · Soutenir",
      title: "Donner",
      desc: "Mobile Money, virement — la mission avance par la générosité.",
      href: "#donner",
      tag: "M-Pesa · Orange · Airtel · Rawbank",
      tone: "deep",
      span: "lg:col-span-1",
    },
  ];

  return (
    <section id="decouvrir" data-screen-label="Découvrir" className="sec-light relative bg-ink-800 py-20 md:py-28">
      <div className="max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-14">

        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
          <div>
            <Eyebrow className="mb-5">Découvrir · Toutes nos offres</Eyebrow>
            <Heading>
              Trouvez ce que vous
              <br/>cherchez en <em className="italic text-gold-200 font-light">un clic.</em>
            </Heading>
          </div>
          <p className="max-w-md text-[15px] text-bone-300 leading-relaxed">
            Cultes, prédications, podcast, conférences, Bible, jeunesse — chaque
            facette de la vie de l'église en quelques secondes.
          </p>
        </Reveal>

        <Reveal stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[240px] gap-4">
          {tiles.map((t, i) => <Tile key={i} {...t} idx={i+1}/>)}
        </Reveal>

        {/* Tag row */}
        <Reveal className="mt-12 flex flex-wrap items-center gap-3 justify-center">
          <span className="font-mono text-[10px] tracking-[.22em] uppercase text-gold-300/70 mr-2">Mots-clés</span>
          {["Famille", "Identité", "Foi", "Prière", "Mission", "Louange", "Jeunesse", "Couples", "Baptême", "Délivrance"].map(k => (
            <a key={k} href="predications.html" className="px-3 py-1.5 bg-ink-700 border border-white/10 rounded-full text-[12px] text-bone-200 hover:border-gold-400 hover:text-gold-200 transition">
              #{k}
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function Tile({ kicker, title, desc, href, tag, tone, span = "", size = "normal", idx }) {
  const isHero = size === "hero";
  const isTall = size === "tall";

  return (
    <a href={href} className={`tile-dark group relative block overflow-hidden lift hover:border-amber-300/40 ${span}`} style={{ background: "#101014", border: "1px solid rgba(255,255,255,.08)" }}>
      {/* Image fill */}
      <div className="absolute inset-0">
        <Photo tone={tone} className="absolute inset-0">
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(7,7,8,.25) 0%, rgba(7,7,8,.6) 60%, rgba(7,7,8,.95) 100%)" }}></div>
        </Photo>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full p-6 lg:p-7 flex flex-col" style={{ color: "#fafaf7" }}>
        <div className="flex items-start justify-between">
          <span className="font-mono text-[10px] tracking-[.22em] uppercase" style={{ color: "#e3c98a" }}>{kicker}</span>
          <span className="w-9 h-9 rounded-full grid place-items-center transition" style={{ border: "1px solid rgba(255,255,255,.2)", background: "rgba(7,7,8,.55)", backdropFilter: "blur(8px)", color: "#fafaf7" }}>
            <I.ArrowR width="14" height="14" />
          </span>
        </div>

        <div className="mt-auto">
          <h3 className={`font-display ${isHero ? "text-[36px] sm:text-[48px] lg:text-[56px]" : isTall ? "text-[36px] sm:text-[44px]" : "text-[30px]"} leading-[1] tracking-mega`} style={{ color: "#fafaf7" }}>
            {title}
          </h3>
          {(isHero || isTall) && (
            <p className={`${isHero ? "max-w-md mt-4" : "max-w-xs mt-3"} text-[14px] leading-relaxed`} style={{ color: "rgba(250,249,247,.82)" }}>{desc}</p>
          )}
          <div className="mt-4 inline-flex items-center gap-2 text-[11px] font-mono tracking-[.18em] uppercase" style={{ color: "rgba(250,249,247,.75)" }}>
            <span className="w-1 h-1 rounded-full" style={{ background: "#e3c98a" }}></span>
            {tag}
          </div>
        </div>
      </div>
    </a>
  );
}

window.Explore = Explore;
