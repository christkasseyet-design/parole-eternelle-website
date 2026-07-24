function PhotoWall() {
  // 6 fillable image slots — community life, like ICF lifestyle band
  const tiles = [
    { id: "wall-1", tag: "Dimanche",      title: "Culte · prédication",     src: "assets/photos/pasteur-predication-1.jpg", tone: "warm",  span: "row-span-2"        },
    { id: "wall-2", tag: "NextGen",       title: "Jeunesse & étude",       src: "assets/photos/jeunesse-etude.jpg",         tone: "warm",  span: ""                  },
    { id: "wall-3", tag: "Communauté",    title: "Après le culte",         src: "assets/photos/accueil-entree.jpg",         tone: "deep",  span: ""                  },
    { id: "wall-4", tag: "Louange",       title: "Toute l'assemblée",      src: "assets/photos/louange-assemblee-nb.jpg",   tone: "warm",  span: "col-span-2"        },
    { id: "wall-5", tag: "Sainte cène",   title: "À la table du Seigneur", src: "assets/photos/sainte-cene.jpg",            tone: "warm",  span: ""                  },
    { id: "wall-6", tag: "Enfants",       title: "Kids Royaume",           src: "assets/photos/enfants-mains-1.jpg",        tone: "warm",  span: ""                  },
  ];

  return (
    <section id="vie" data-screen-label="Vie d'église" className="sec-light relative bg-ink-800 py-20 md:py-28">
      <div className="max-w-[1480px] mx-auto px-6 sm:px-10 lg:px-14">

        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <Eyebrow className="mb-5">La vie de l'église</Eyebrow>
            <Heading>
              Une famille,
              <br/><em className="italic text-gold-200 font-light">tellement plus qu'une église.</em>
            </Heading>
          </div>
          <p className="max-w-md text-[15px] text-bone-300 leading-relaxed">
            Des moments vécus ensemble dimanche après dimanche, vendredi après vendredi —
            voici un aperçu de notre vie commune à Ngiri-Ngiri.
          </p>
        </Reveal>

        <Reveal stagger className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {tiles.map((t, i) => (
            <a key={t.id} href="videos.html" className="group relative overflow-hidden block" style={{ aspectRatio: "4/3" }}>
              <Photo tone={t.tone} className="absolute inset-0"/>
              <image-slot
                id={t.id}
                shape="rect"
                src={t.src}
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }}
                placeholder={`Glissez une photo · ${t.title.toLowerCase()}`}>
              </image-slot>
              <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition" style={{ background: "linear-gradient(180deg, transparent 35%, rgba(0,0,0,.85) 100%)" }}></div>
              <div className="absolute bottom-0 left-0 right-0 z-10 p-4 sm:p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition">
                <div className="font-mono text-[9px] tracking-[.22em] uppercase text-gold-300 mb-1">{t.tag}</div>
                <div className="font-display text-[18px] sm:text-[22px] leading-tight text-white">{t.title}</div>
              </div>
            </a>
          ))}
        </Reveal>

        <Reveal className="mt-10 flex items-center justify-center gap-3 flex-wrap">
          <span className="font-mono text-[10px] tracking-[.22em] uppercase text-bone-400 mr-2">Suivez-nous</span>
          <Btn variant="ghost" href="https://www.facebook.com/cepeng/" icon={false}><I.FB width="14" height="14"/> Facebook</Btn>
          <Btn variant="ghost" href="https://www.youtube.com/channel/UCPmV9FMnv9imGbnxJdFiMcw" icon={false}><I.YT width="14" height="14"/> YouTube</Btn>
          <Btn variant="ghost" href="https://www.tiktok.com/@paroleternellengiringiri" icon={false}><I.TT width="14" height="14"/> TikTok</Btn>
        </Reveal>
      </div>
    </section>
  );
}

window.PhotoWall = PhotoWall;
