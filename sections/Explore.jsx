function Explore() {
  // Bento grid of content categories — real photography + tone fallback
  const tiles = [
    { kicker: "01 · Grand projet", title: "Le Temple", desc: "Ensemble, bâtissons un temple pour le Seigneur. Avancement 68%.", href: "#temple", tag: "Soutenir le projet", tone: "warm", img: "assets/photos/pasteur-temple-message.jpg", span: "sm:col-span-2 lg:col-span-2 lg:row-span-2", size: "hero" },
    { kicker: "02 · Lire & Écouter", title: "La Bible", desc: "Texte intégral + audio · 5 langues · hors-ligne.", href: "bible.html", tag: "FR · LN · SW · KG · TS", tone: "warm", img: "assets/photos/etude-bible-notes.jpg", span: "lg:col-span-1 lg:row-span-2", size: "tall" },
    { kicker: "03 · Vidéos & Live", title: "Vidéos", desc: "Cultes, lives, worship, conférences — chronologiquement.", href: "videos.html", tag: "YouTube · Facebook", tone: "warm", img: "assets/photos/culte-assemblee-1.jpg", span: "lg:col-span-1" },
    { kicker: "04 · La Parole", title: "Prédications", desc: "Plus de 248 messages classés par série et thème.", href: "predications.html", tag: "Voir l'archive", tone: "deep", img: "assets/photos/pasteur-predication-2.jpg", span: "lg:col-span-1" },
    { kicker: "05 · Rassemblements", title: "Conférences", desc: "Famille & Foi, Leaders, Réveil — les grands moments.", href: "#programmes", tag: "Calendrier", tone: "warm", img: "assets/photos/pasteur-jubile-pupitre.jpg", span: "lg:col-span-1" },
    { kicker: "06 · Vie d'église", title: "Événements", desc: "Cultes, Vendredi Ngomba, jeunesse, baptêmes — tout le mois.", href: "#programmes", tag: "31 dates · Mai 2026", tone: "warm", img: "assets/photos/culte-assemblee-2.jpg", span: "sm:col-span-2 lg:col-span-2", size: "wide" },
    { kicker: "07 · Adoration", title: "Worship", desc: "Chants en français et en lingala, originaux et live.", href: "videos.html", tag: "Voix d'Éternité", tone: "warm", img: "assets/photos/chorale-scene.jpg", span: "lg:col-span-1" },
    { kicker: "08 · Communauté", title: "Jeunesse", desc: "NextGen · 13–25 ans · samedis, camps, mentorat.", href: "#communaute", tag: "Rejoindre", tone: "warm", img: "assets/photos/mission-ecole-1.jpg", span: "lg:col-span-1" },
    { kicker: "09 · Soutenir", title: "Donner", desc: "Mobile Money, virement — la mission avance par la générosité.", href: "#donner", tag: "M-Pesa · Orange · Airtel · Rawbank", tone: "deep", span: "sm:col-span-2 lg:col-span-4", size: "band" },
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

        <Reveal stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[215px] xl:auto-rows-[235px] gap-3 sm:gap-4">
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

function Tile({ kicker, title, desc, href, tag, tone, img, span = "", size = "normal" }) {
  const isHero = size === "hero", isTall = size === "tall", isBand = size === "band";
  const titleCls = isHero ? "text-[34px] sm:text-[44px] lg:text-[52px]" : isTall ? "text-[32px] sm:text-[40px]" : isBand ? "text-[28px] sm:text-[34px]" : "text-[26px] sm:text-[28px]";

  return (
    <a href={href} className={`tile-dark group relative block overflow-hidden lift hover:border-amber-300/40 min-h-[230px] sm:min-h-[215px] ${isBand ? "lg:min-h-0 lg:!row-span-1" : ""} ${span}`} style={{ background: "#101014", border: "1px solid rgba(255,255,255,.08)" }}>
      {/* Image fill w/ slow zoom */}
      <div className="absolute inset-0 overflow-hidden">
        <Photo tone={tone} className="absolute inset-0"/>
        {img && <img src={img} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]" style={{ filter: "saturate(.92)" }} onError={(e)=>{e.currentTarget.style.display="none";}}/>}
        <div className="absolute inset-0" style={{ background: isBand ? "linear-gradient(90deg, rgba(7,7,8,.92) 0%, rgba(7,7,8,.55) 55%, rgba(7,7,8,.85) 100%)" : "linear-gradient(180deg, rgba(7,7,8,.42) 0%, rgba(7,7,8,.28) 40%, rgba(7,7,8,.94) 100%)" }}></div>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500" style={{ background: "radial-gradient(90% 70% at 50% 100%, rgba(216,182,106,.16), transparent 65%)" }}></div>
      </div>

      {/* Content */}
      <div className={`relative z-10 h-full p-5 sm:p-6 lg:p-7 flex ${isBand ? "flex-row items-center justify-between gap-6 flex-wrap" : "flex-col"}`} style={{ color: "#fafaf7" }}>
        {!isBand && (
          <div className="flex items-start justify-between gap-3">
            <span className="font-mono text-[10px] tracking-[.22em] uppercase" style={{ color: "#e3c98a" }}>{kicker}</span>
            <span className="tile-arrow w-9 h-9 shrink-0 rounded-full grid place-items-center transition duration-300 group-hover:-rotate-45"><I.ArrowR width="14" height="14" /></span>
          </div>
        )}
        <div className={isBand ? "" : "mt-auto"}>
          {isBand && <span className="font-mono text-[10px] tracking-[.22em] uppercase block mb-2" style={{ color: "#e3c98a" }}>{kicker}</span>}
          <h3 className={`font-display ${titleCls} leading-[1] tracking-mega`} style={{ color: "#fafaf7" }}>{title}</h3>
          <p className={`${isHero ? "max-w-md" : "max-w-xs"} mt-3 text-[13.5px] leading-relaxed ${isHero || isTall || isBand ? "" : "hidden sm:[display:-webkit-box] tile-clamp"}`} style={{ color: "rgba(250,249,247,.8)" }}>{desc}</p>
          <div className="mt-4 inline-flex items-center gap-2 text-[11px] font-mono tracking-[.18em] uppercase" style={{ color: "rgba(250,249,247,.75)" }}>
            <span className="w-1 h-1 rounded-full" style={{ background: "#e3c98a" }}></span>
            {tag}
          </div>
        </div>
        {isBand && <span className="tile-arrow w-11 h-11 shrink-0 rounded-full grid place-items-center transition duration-300 group-hover:-rotate-45"><I.ArrowR width="16" height="16" /></span>}
      </div>
    </a>
  );
}

window.Explore = Explore;
