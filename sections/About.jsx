function About() {
  const pillars = [
    {
      icon: <I.Bible width="22" height="22"/>,
      kicker: "01",
      title: "La Parole",
      text: "Une foi enracinée dans l'Écriture, enseignée avec clarté pour transformer notre quotidien."
    },
    {
      icon: <I.Flame width="22" height="22"/>,
      kicker: "02",
      title: "La Prière",
      text: "Veillées, intercessions et chaînes de prière qui élèvent Kinshasa et la nation."
    },
    {
      icon: <I.Music width="22" height="22"/>,
      kicker: "03",
      title: "La Louange",
      text: "Adorer Dieu en esprit et en vérité, avec créativité et avec authenticité."
    },
    {
      icon: <I.Heart width="22" height="22"/>,
      kicker: "04",
      title: "L'Évangélisation",
      text: "Annoncer la bonne nouvelle dans nos rues, nos écoles, nos familles."
    },
  ];

  return (
    <section id="a-propos" data-screen-label="A propos" className="sec-light relative bg-ink-800 py-28 md:py-40 overflow-hidden">
      {/* gold ambient */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(216,182,106,.08), transparent 70%)" }}></div>

      <div className="max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-14">
        <Reveal className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-20">
          <div className="lg:col-span-7">
            <Eyebrow className="mb-6">À propos · Notre histoire</Eyebrow>
            <Heading>
              Une maison <em className="italic text-gold-200 font-light">spirituelle</em>
              <br/>au cœur de <span className="italic text-gold-200 font-light">Kinshasa.</span>
            </Heading>
          </div>
          <div className="lg:col-span-5 lg:pb-4">
            <p className="text-[17px] leading-relaxed text-bone-200/85">
              Parole Éternelle est une église chrétienne évangélique implantée à
              Ngiri-Ngiri, affiliée aux <span className="text-gold-200">Assemblées de Dieu</span> et
              fille spirituelle de l'église <span className="text-gold-200">Laborne</span>.
              Depuis nos premières assemblées, nous portons une seule conviction :
              Jésus-Christ change tout. Tout commence ici.
            </p>
            <p className="mt-5 font-display italic text-[22px] leading-snug text-bone-100">
              « Le ciel et la terre passeront, mais mes paroles ne passeront point. »
              <span className="block mt-2 font-sans not-italic text-[11px] font-mono tracking-[.22em] uppercase text-gold-300/80">— Matthieu 24 : 35</span>
            </p>
          </div>
        </Reveal>

        {/* Two-column visual + figures */}
        <div className="grid lg:grid-cols-12 gap-8 mb-24">
          <Reveal className="lg:col-span-7 relative">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Photo label="Couple pastoral — culte dominical" tone="warm" className="absolute inset-0" animated />
              <image-slot
                id="about-sanctuary"
                shape="rect"
                src="assets/photos/couple-pastoral-culte.jpg"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }}
                placeholder="Couple pastoral — culte dominical">
              </image-slot>
            </div>
            {/* overlay quote card */}
            <div className="absolute -bottom-10 -right-6 lg:-right-10 max-w-sm bg-ink-700/90 backdrop-blur-md border border-gold-500/30 p-7 glow">
              <div className="eyebrow mb-3">Couple pastoral</div>
              <p className="font-display text-[22px] leading-snug text-bone-50">« Nous ne sommes pas une église pour les parfaits, mais une famille pour les transformés. »</p>
              <div className="mt-5 flex items-center gap-3">
                <image-slot
                  id="pastor-photo"
                  shape="circle"
                  src="assets/photos/couple-pastoral-avatar.png"
                  style={{ width: "44px", height: "44px", display: "inline-block", flexShrink: 0 }}
                  placeholder="Pasteurs">
                </image-slot>
                <div>
                  <div className="text-[13px] font-medium text-bone-50">Pasteur Raphaël Kaseya &amp; Denise Kaseya</div>
                  <div className="text-[11px] text-bone-300">Couple pastoral fondateur</div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-5 lg:pl-6 flex flex-col justify-between mt-16 lg:mt-0">
            <div>
              <div className="font-mono text-[10px] tracking-[.28em] uppercase text-gold-300/70 mb-3">Fille de</div>
              <div className="font-display text-[44px] leading-none text-bone-50">Laborne</div>
              <p className="mt-4 text-[15px] text-bone-300 leading-relaxed">
                Église-mère qui nous a vus naître, formée à la doctrine
                solide et à la mission. Nous portons le même feu, dans notre
                ville, à notre génération.
              </p>
            </div>
            <div className="mt-10 space-y-4 border-t border-white/10 pt-8">
              <Row k="Fondation" v="Janvier 2019" />
              <Row k="Adresse" v="2 bis & 4, Av. Monkoto" />
              <Row k="Localité" v="C/Ngiri-Ngiri · Réf. Marché Kale" />
              <Row k="Affiliation" v="Assemblées de Dieu · Laborne" />
              <Row k="Langues" v="Français · Lingala" />
            </div>
          </div>
        </div>

        {/* Vision pillars */}
        <div id="vision" data-screen-label="Vision" className="pt-12 border-t border-white/10">
          <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <Eyebrow className="mb-5">Notre vision · 4 piliers</Eyebrow>
              <Heading as="h3">
                Quatre fondations,
                <br/><em className="italic text-gold-200 font-light">une seule famille.</em>
              </Heading>
            </div>
            <p className="max-w-md text-[15px] text-bone-300 leading-relaxed">
              Tout ce que nous bâtissons repose sur ces piliers — vécus
              ensemble, semaine après semaine.
            </p>
          </Reveal>

          <Reveal stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/10 overflow-hidden">
            {pillars.map((p, i) => (
              <div key={i} className="group p-8 lg:p-10 bg-ink-700 hover:bg-ink-600 lift transition cursor-default">
                <div className="flex items-start justify-between mb-12">
                  <div className="w-12 h-12 rounded-full border border-gold-500/30 grid place-items-center text-gold-200 group-hover:bg-gold-500/10 transition">{p.icon}</div>
                  <span className="font-mono text-[11px] tracking-[.22em] text-bone-400">{p.kicker}</span>
                </div>
                <div className="font-display text-[34px] leading-tight text-bone-50">{p.title}</div>
                <p className="mt-3 text-[14px] leading-relaxed text-bone-300">{p.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Row({ k, v }) {
  return (
    <div className="flex items-center justify-between gap-6">
      <span className="font-mono text-[10px] tracking-[.22em] uppercase text-bone-400">{k}</span>
      <span className="text-[14px] text-bone-100">{v}</span>
    </div>
  );
}

window.About = About;
