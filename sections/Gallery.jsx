// Galerie — vraies photos de la vie de l'église, par albums.
// Chaque album peut être enrichi : les cases « + » acceptent le glisser-déposer.
function Gallery() {
  const albums = ["Tous", "Culte", "Louange", "Enfants", "Jeunesse & Étude", "Événements"];

  const items = [
    { src: "assets/photos/culte-assemblee-2.jpg",      label: "Culte dominical · l'assemblée",        tag: "Culte" },
    { src: "assets/photos/pasteur-predication-1.jpg",  label: "Prédication · Past. Raphaël Kaseya",   tag: "Culte" },
    { src: "assets/photos/chorale-danse.jpg",          label: "Chorale · louange en mouvement",       tag: "Louange" },
    { src: "assets/photos/enfants-mains-1.jpg",        label: "Kids Royaume · mains levées",          tag: "Enfants" },
    { src: "assets/photos/jeunesse-etude.jpg",         label: "Jeunesse · à l'écoute",                tag: "Jeunesse & Étude" },
    { src: "assets/photos/mariage-ngomba.jpg",         label: "Mariage chrétien · Vendredi Ngomba",   tag: "Événements" },
    { src: "assets/photos/louange-assemblee-nb.jpg",   label: "Adoration · toute l'assemblée",        tag: "Louange" },
    { src: "assets/photos/culte-assemblee-1.jpg",      label: "Culte dominical · recueillement",      tag: "Culte" },
    { src: "assets/photos/chorale-femmes.jpg",         label: "Voix d'Éternité · chœur",              tag: "Louange" },
    { src: "assets/photos/enfants-question.jpg",       label: "École du dimanche · participation",    tag: "Enfants" },
    { src: "assets/photos/sainte-cene.jpg",            label: "Sainte cène",                          tag: "Culte" },
    { src: "assets/photos/etude-bible-notes.jpg",      label: "Étude biblique · la Parole ouverte",   tag: "Jeunesse & Étude" },
    { src: "assets/photos/pasteur-adoration.jpg",      label: "Adoration · Past. Kaseya",             tag: "Louange" },
    { src: "assets/photos/enfants-classe-1.jpg",       label: "Kids Royaume · les petits",            tag: "Enfants" },
    { src: "assets/photos/hommes-louange-nb.jpg",      label: "Les hommes dans la louange",           tag: "Louange" },
    { src: "assets/photos/mission-ecole-1.jpg",        label: "Mission · dans les écoles",            tag: "Jeunesse & Étude" },
    { src: "assets/photos/femmes-culte.jpg",           label: "Filles du Roi · au culte",             tag: "Culte" },
    { src: "assets/photos/enfants-mains-2.jpg",        label: "Kids Royaume · évaluation",            tag: "Enfants" },
    { src: "assets/photos/orchestre-guitare.jpg",      label: "Orchestre · au service",               tag: "Louange" },
    { src: "assets/photos/couple-pastoral-priere.jpg", label: "Couple pastoral · dans la prière",     tag: "Événements" },
    { src: "assets/photos/mission-ecole-2.jpg",        label: "Mission · évangélisation scolaire",    tag: "Jeunesse & Étude" },
    { src: "assets/photos/pasteurs-adoration.jpg",     label: "L'équipe pastorale · adoration",       tag: "Culte" },
    { src: "assets/photos/chorale-scene.jpg",          label: "Chorale · sur scène",                  tag: "Louange" },
    { src: "assets/photos/enfants-mains-nb.jpg",       label: "École du dimanche",                    tag: "Enfants" },
    { src: "assets/photos/pasteur-etude-biblique.jpg", label: "Étude biblique · enseignement",        tag: "Jeunesse & Étude" },
    { src: "assets/photos/accolade-pasteurs.jpg",      label: "Accueil d'un serviteur de Dieu",       tag: "Événements" },
    { src: "assets/photos/accueil-entree.jpg",         label: "Bienvenue · l'entrée du temple",       tag: "Culte" },
    { src: "assets/photos/pasteur-jubile-pupitre.jpg", label: "Jubilé 2026 · au pupitre",             tag: "Événements" },
    { src: "assets/photos/couple-pastoral-sourire.jpg",label: "Nos pasteurs · Raphaël & Denise",      tag: "Événements" },
  ];

  const [album, setAlbum] = React.useState("Tous");
  const [open, setOpen] = React.useState(null);

  const shown = album === "Tous" ? items : items.filter((it) => it.tag === album);

  return (
    <section id="galerie" data-screen-label="Galerie" className="sec-light relative bg-ink-800 py-28 md:py-40">
      <div className="max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-14">

        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
          <div>
            <Eyebrow className="mb-5">Galerie · Vie de l'église</Eyebrow>
            <Heading>
              Capturer la <em className="italic text-gold-200 font-light">présence,</em>
              <br/>raconter la <em className="italic text-gold-200 font-light">famille.</em>
            </Heading>
          </div>
          <div className="flex gap-3">
            <Btn variant="gold" href="galerie.html">Tous les albums</Btn>
            <Btn variant="dark" href="https://www.facebook.com/cepeng/" icon={false}><I.FB width="14" height="14"/> Facebook</Btn>
          </div>
        </Reveal>

        {/* Album filters */}
        <Reveal className="flex flex-wrap gap-2 mb-10">
          {albums.map((a) => (
            <button key={a} onClick={() => { setAlbum(a); setOpen(null); }}
              className={`px-4 py-2 rounded-full font-mono text-[10px] tracking-[.18em] uppercase border transition ${album === a ? "bg-gold-300 text-ink-900 border-gold-300" : "border-white/15 text-bone-200 hover:border-gold-400/60"}`}>
              {a}
            </button>
          ))}
        </Reveal>

        <Reveal stagger className="masonry">
          {shown.map((it, i) => (
            <button key={it.src} onClick={() => setOpen(i)} className="group relative w-full block overflow-hidden rounded-[2px]">
              <img src={it.src} alt={it.label} loading="lazy" className="w-full h-auto block transition duration-700 group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-ink-900/0 group-hover:bg-ink-900/45 transition"></div>
              <div className="absolute top-3 left-3 px-2 py-1 font-mono text-[9px] tracking-[.22em] uppercase bg-ink-900/60 backdrop-blur-md border border-white/10 text-bone-100 opacity-0 group-hover:opacity-100 transition">
                {it.tag}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition" style={{ background: "linear-gradient(180deg, transparent, rgba(0,0,0,.8))" }}>
                <span className="text-[13px] text-white">{it.label}</span>
              </div>
            </button>
          ))}

          {/* Drop zone — ajoutez vos propres photos, elles restent en place */}
          {album === "Tous" && [1, 2, 3].map((n) => (
            <div key={n} className="relative w-full overflow-hidden rounded-[2px] border border-dashed border-white/20 hover:border-gold-400/60 transition" style={{ aspectRatio: "4/3" }}>
              <image-slot
                id={`gallery-drop-${n}`}
                shape="rect"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }}
                placeholder="Glissez une photo ici — elle sera conservée">
              </image-slot>
            </div>
          ))}
        </Reveal>

        {open !== null && shown[open] && (
          <div className="lightbox" onClick={() => setOpen(null)}>
            <button onClick={() => setOpen(null)} className="absolute top-6 right-6 w-12 h-12 rounded-full bg-bone-50 text-ink-900 grid place-items-center"><I.Close width="20" height="20"/></button>
            <button onClick={(e) => { e.stopPropagation(); setOpen((open - 1 + shown.length) % shown.length); }} className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/20 text-bone-50 grid place-items-center hover:bg-white/10 z-10">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M15 18l-6-6 6-6"></path></svg>
            </button>
            <button onClick={(e) => { e.stopPropagation(); setOpen((open + 1) % shown.length); }} className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/20 text-bone-50 grid place-items-center hover:bg-white/10 z-10">
              <I.ArrowR width="20" height="20"/>
            </button>
            <div onClick={(e) => e.stopPropagation()} className="relative max-w-[86vw] max-h-[86vh]">
              <img src={shown[open].src} alt={shown[open].label} className="max-w-[86vw] max-h-[74vh] w-auto h-auto object-contain block mx-auto" />
              <div className="mt-4 flex items-center justify-between gap-6 text-bone-200">
                <div>
                  <div className="font-display text-[22px] text-bone-50">{shown[open].label}</div>
                  <div className="font-mono text-[10px] tracking-[.22em] uppercase text-gold-300/80 mt-1">{shown[open].tag}</div>
                </div>
                <div className="font-mono text-[11px] text-bone-400">{String(open + 1).padStart(2, '0')} / {String(shown.length).padStart(2, '0')}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

window.Gallery = Gallery;
