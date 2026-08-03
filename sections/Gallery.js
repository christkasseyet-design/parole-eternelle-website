// Galerie — mosaïque de diaporamas : chaque tuile fait défiler des dizaines de
// photos en fondu enchaîné + léger zoom (Ken Burns). Clic = plein écran.
const G_POOL = (() => {
  const mk = (tag, list) => list.map(s => {
    const i = s.indexOf('|'),
      f = s.slice(0, i),
      l = s.slice(i + 1);
    return {
      src: f.startsWith('assets/') ? f : 'assets/photos/' + f,
      label: l,
      tag
    };
  });
  return [].concat(mk("Culte", ["culte-assemblee-2.jpg|L'assemblée au culte", "culte-assemblee-1.jpg|Recueillement", "pasteur-predication-1.jpg|Prédication · Past. Raphaël Kaseya", "pasteur-predication-2.jpg|Past. Kaseya au pupitre", "sainte-cene.jpg|Sainte cène", "femmes-culte.jpg|Les sœurs au culte", "accueil-entree.jpg|L'accueil à l'entrée", "pasteurs-adoration.jpg|L'équipe pastorale", "couple-pastoral-sourire.jpg|Nos pasteurs · Raphaël & Denise", "accolade-pasteurs.jpg|Accueil d'un serviteur de Dieu", "serie/pe-21.jpg|L'assemblée, mains levées", "serie/pe-22.jpg|Le temple plein au culte", "serie/pe-23.jpg|Les sœurs dans l'assemblée", "serie/pe-17.jpg|Prédication au pupitre", "serie/pe-18.jpg|Interprétation en langue des signes", "serie/pe-08.jpg|La Parole prêchée", "serie/pe-72.jpg|La Bible ouverte au pupitre", "serie/pe-74.jpg|Avec sa Bible, dans l'assemblée", "serie/pe-76.jpg|Le message du dimanche", "serie/pe-02.jpg|Recueillement avant le culte"]), mk("Louange", ["chorale-danse.jpg|La chorale en mouvement", "chorale-scene.jpg|Sur scène", "chorale-femmes.jpg|Le chœur des sœurs", "orchestre-guitare.jpg|L'orchestre au service", "louange-assemblee-nb.jpg|Toute l'assemblée", "hommes-louange-nb.jpg|Les hommes dans la louange", "pasteur-adoration.jpg|Past. Kaseya dans l'adoration", "serie/pe-03.jpg|Dans l'adoration", "serie/pe-58.jpg|Les voix du chœur", "serie/pe-59.jpg|Le conducteur de louange", "serie/pe-67.jpg|Chant au pupitre", "serie/pe-20.jpg|L'équipe de louange", "serie/pe-13.jpg|Journée Louange & Adoration"]), mk("Enfants", ["enfants-mains-1.jpg|Mains levées", "enfants-mains-2.jpg|Évaluation · tous ensemble", "enfants-classe-1.jpg|Les petits en classe", "enfants-question.jpg|Une réponse !", "enfants-mains-nb.jpg|École du dimanche", "serie/pe-25.jpg|Prière d'un jeune", "serie/pe-26.jpg|La monitrice avec les petits", "serie/pe-27.jpg|Regard attentif", "serie/pe-28.jpg|À l'école du dimanche", "serie/pe-30.jpg|Mains jointes", "serie/pe-31.jpg|Sourires du Royaume", "serie/pe-32.jpg|La Bible entre les mains", "serie/pe-33.jpg|À l'écoute de la Parole", "serie/pe-34.jpg|Les garçons du Royaume", "serie/pe-35.jpg|Toute la classe", "serie/pe-36.jpg|Prière des enfants"]), mk("Jeunesse & Étude", ["jeunesse-etude.jpg|Jeunesse à l'écoute", "etude-bible-notes.jpg|La Parole ouverte", "pasteur-etude-biblique.jpg|Étude biblique · enseignement", "mission-ecole-1.jpg|Mission · dans les écoles", "mission-ecole-2.jpg|Évangélisation scolaire", "serie/pe-29.jpg|Les jeunes dans la prière", "serie/pe-06.jpg|NextGen · portrait", "serie/pe-41.jpg|« Jésus-Christ est Seigneur »"]), mk("Jubilé 2026", ["assets/jubile-affiche.jpg|Affiche officielle · Jubilé 2026", "pasteur-jubile-pupitre.jpg|Au pupitre du Jubilé", "serie/pe-09.jpg|Affiche · Jubilé 2026", "serie/pe-10.jpg|Past. Raphaël Kaseya Bin Moningo", "serie/pe-11.jpg|Past. Kondo Wa Kondo · invité", "serie/pe-12.jpg|Past. Dieudonné Mongu · invité", "serie/pe-14.jpg|Jubilé · Jour 6", "serie/pe-37.jpg|Jubilé · Jour 2", "serie/pe-15.jpg|Déblocage du mois de juillet", "serie/pe-40.jpg|L'écharpe du Jubilé", "serie/pe-42.jpg|Ferveur dans la prière", "serie/pe-44.jpg|Exhortation des sœurs", "serie/pe-50.jpg|Past. Mongu au micro", "serie/pe-51.jpg|La prédication du soir", "serie/pe-52.jpg|Sous les couleurs du Jubilé", "serie/pe-53.jpg|Moment solennel", "serie/pe-54.jpg|Les invitées d'honneur", "serie/pe-61.jpg|Enseignement · Jour 3", "serie/pe-62.jpg|Joie entre serviteurs", "serie/pe-63.jpg|Les hôtes du Jubilé", "serie/pe-64.jpg|La Parole au centre", "serie/pe-65.jpg|Le temple comble", "serie/pe-66.jpg|« Y a-t-il rien d'étonnant… »", "serie/pe-70.jpg|La banderole sur l'avenue Monkoto", "serie/pe-77.jpg|Ministration du Jubilé", "serie/pe-46.jpg|« Ni ton âge, ni ton corps »", "serie/pe-47.jpg|« Rien d'étonnant pour Dieu »", "serie/pe-48.jpg|« La grandeur de ton problème »", "serie/pe-49.jpg|« Celui qui a créé l'or »", "serie/pe-55.jpg|« Dieu parle toujours »", "serie/pe-56.jpg|« La bénédiction »", "serie/pe-57.jpg|« Une seule manière d'agir »"]), mk("Événements", ["mariage-ngomba.jpg|Mariage chrétien · Vendredi Ngomba", "couple-pastoral-priere.jpg|Couple pastoral dans la prière", "serie/pe-01.jpg|L'accolade fraternelle", "serie/pe-04.jpg|Arrivée des serviteurs de Dieu", "serie/pe-05.jpg|Prière de départ", "serie/pe-07.jpg|Le service dans l'humilité", "serie/pe-19.jpg|L'équipe d'accueil et parking", "serie/pe-24.jpg|Protocole au service", "serie/pe-38.jpg|Anniversaire · Sylver Beyo", "serie/pe-43.jpg|Devant le temple", "serie/pe-45.jpg|Élégance du dimanche", "serie/pe-60.jpg|En famille après le culte", "serie/pe-69.jpg|L'assistance en plein air", "serie/pe-71.jpg|Le public du soir", "serie/pe-73.jpg|Invités dans la joie", "serie/pe-75.jpg|Sur l'avenue, après le culte", "serie/pe-68.jpg|Témoignage au micro", "serie/pe-39.jpg|Exhortation du soir"]), mk("Temple", ["assets/temple-projet.jpg|Le futur temple · maquette", "temple-affiche.jpg|Coordonnées de transfert", "pasteur-temple-message.jpg|« Levons-nous et bâtissons »"]));
})();

// mélange déterministe (même ordre à chaque visite, pas de saut au re-render)
function gShuffle(arr, seed) {
  const a = arr.slice();
  let s = seed || 7;
  for (let i = a.length - 1; i > 0; i--) {
    s = s * 1103515245 + 12345 & 0x7fffffff;
    const j = s % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function SlideTile({
  queue,
  delay,
  interval,
  playing,
  onOpen,
  className,
  cover
}) {
  const [pair, setPair] = React.useState({
    cur: 0,
    prev: null
  });
  const [hover, setHover] = React.useState(false);
  const n = queue.length;
  React.useEffect(() => {
    setPair({
      cur: 0,
      prev: null
    });
  }, [queue]);
  React.useEffect(() => {
    if (!playing || hover || n < 2) return;
    let iv;
    const to = setTimeout(() => {
      const step = () => setPair(p => ({
        cur: (p.cur + 1) % n,
        prev: p.cur
      }));
      step();
      iv = setInterval(step, interval);
    }, delay);
    return () => {
      clearTimeout(to);
      clearInterval(iv);
    };
  }, [playing, hover, n, interval, delay, queue]);
  React.useEffect(() => {
    const nx = queue[(pair.cur + 1) % n];
    if (nx) {
      const im = new Image();
      im.src = nx.src;
    }
  }, [pair.cur, queue, n]);
  const it = queue[pair.cur],
    pv = pair.prev !== null ? queue[pair.prev] : null;
  if (!it) return null;
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => onOpen(it),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    className: `gtile group relative overflow-hidden rounded-[3px] bg-ink-700 ${className || ""}`
  }, pv && /*#__PURE__*/React.createElement("img", {
    key: "p" + pair.prev,
    src: pv.src,
    alt: "",
    "aria-hidden": "true",
    className: "absolute inset-0 w-full h-full object-cover"
  }), /*#__PURE__*/React.createElement("img", {
    key: "c" + pair.cur,
    src: it.src,
    alt: it.label,
    loading: "lazy",
    decoding: "async",
    className: "gshow-fade gshow-kb absolute inset-0 w-full h-full object-cover"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0",
    style: {
      background: "linear-gradient(180deg, rgba(7,7,8,0) 45%, rgba(7,7,8,.82) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-3 left-3 px-2 py-1 font-mono text-[9px] tracking-[.22em] uppercase bg-ink-900/55 backdrop-blur-md border border-white/10 text-bone-100"
  }, it.tag), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-0 left-0 right-0 p-4 text-left"
  }, /*#__PURE__*/React.createElement("div", {
    className: `text-white leading-snug ${cover ? "font-display text-[19px] md:text-[22px]" : "text-[13px]"}`
  }, it.label), /*#__PURE__*/React.createElement("div", {
    className: "mt-1.5 flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-[2px] flex-1 bg-white/20 overflow-hidden rounded-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-full bg-gold-300/80",
    style: {
      width: `${(pair.cur + 1) / n * 100}%`,
      transition: "width .8s ease"
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-[9px] text-bone-300"
  }, pair.cur + 1, "/", n))), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 border border-white/0 group-hover:border-gold-400/50 transition"
  }));
}
function Gallery() {
  const albums = ["Tous", "Culte", "Louange", "Enfants", "Jeunesse & Étude", "Jubilé 2026", "Événements", "Temple"];
  const [album, setAlbum] = React.useState("Tous");
  const [playing, setPlaying] = React.useState(true);
  const [awake, setAwake] = React.useState(true); // onglet actif + section proche de l'écran
  const secRef = React.useRef(null);
  const [open, setOpen] = React.useState(null);
  React.useEffect(() => {
    const check = () => {
      const el = secRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const near = r.bottom > -600 && r.top < window.innerHeight + 600;
      setAwake(!document.hidden && near);
    };
    check();
    window.addEventListener("scroll", check, {
      passive: true
    });
    window.addEventListener("resize", check);
    document.addEventListener("visibilitychange", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
      document.removeEventListener("visibilitychange", check);
    };
  }, []);
  const shown = React.useMemo(() => album === "Tous" ? G_POOL : G_POOL.filter(p => p.tag === album), [album]);

  // 6 files d'attente réparties sur les tuiles
  const queues = React.useMemo(() => {
    const mixed = gShuffle(shown, shown.length * 31 + 5);
    const k = Math.min(6, Math.max(1, mixed.length));
    const out = Array.from({
      length: k
    }, () => []);
    mixed.forEach((p, i) => out[i % k].push(p));
    return out;
  }, [shown]);
  React.useEffect(() => {
    if (open === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = e => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen(o => (o + 1) % shown.length);
      if (e.key === "ArrowLeft") setOpen(o => (o - 1 + shown.length) % shown.length);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, shown]);
  const openPhoto = it => setOpen(Math.max(0, shown.findIndex(p => p.src === it.src)));
  const spans = ["gt-a", "gt-b", "gt-c", "gt-d", "gt-e", "gt-f"];
  return /*#__PURE__*/React.createElement("section", {
    id: "galerie",
    ref: secRef,
    "data-screen-label": "Galerie",
    className: "sec-light relative bg-ink-800 py-28 md:py-40"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-14"
  }, /*#__PURE__*/React.createElement(Reveal, {
    className: "flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    className: "mb-5"
  }, "Galerie · ", G_POOL.length, " photos en diaporama"), /*#__PURE__*/React.createElement(Heading, null, "Capturer la ", /*#__PURE__*/React.createElement("em", {
    className: "italic text-gold-200 font-light"
  }, "présence,"), /*#__PURE__*/React.createElement("br", null), "raconter la ", /*#__PURE__*/React.createElement("em", {
    className: "italic text-gold-200 font-light"
  }, "famille."))), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-3"
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "gold",
    href: "galerie.html"
  }, "Tous les albums"), /*#__PURE__*/React.createElement(Btn, {
    variant: "dark",
    href: "https://www.facebook.com/cepeng/",
    icon: false
  }, /*#__PURE__*/React.createElement(I.FB, {
    width: "14",
    height: "14"
  }), " Facebook"), /*#__PURE__*/React.createElement(Btn, {
    variant: "dark",
    href: "https://www.instagram.com/paroleternellengiringiri/",
    icon: false
  }, /*#__PURE__*/React.createElement(I.IG, {
    width: "14",
    height: "14"
  }), " Instagram"))), /*#__PURE__*/React.createElement(Reveal, {
    className: "flex flex-wrap items-center gap-2 mb-8"
  }, albums.map(a => /*#__PURE__*/React.createElement("button", {
    key: a,
    onClick: () => {
      setAlbum(a);
      setOpen(null);
    },
    className: `px-4 py-2 rounded-full font-mono text-[10px] tracking-[.18em] uppercase border transition ${album === a ? "bg-gold-300 text-ink-900 border-gold-300" : "border-white/15 text-bone-200 hover:border-gold-400/60"}`
  }, a)), /*#__PURE__*/React.createElement("button", {
    onClick: () => setPlaying(!playing),
    className: "ml-auto inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 text-bone-200 hover:border-gold-400/60 font-mono text-[10px] tracking-[.18em] uppercase transition"
  }, playing ? /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "6",
    y: "5",
    width: "4",
    height: "14",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "5",
    width: "4",
    height: "14",
    rx: "1"
  })) : /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 5l11 7-11 7z"
  })), playing ? "Pause" : "Lecture")), /*#__PURE__*/React.createElement(Reveal, {
    className: "gmosaic"
  }, queues.map((q, i) => /*#__PURE__*/React.createElement(SlideTile, {
    key: album + "-" + i,
    queue: q,
    delay: i * 850,
    interval: 5600 + i * 700,
    playing: playing && awake,
    onOpen: openPhoto,
    className: spans[i],
    cover: i === 0
  }))), /*#__PURE__*/React.createElement("p", {
    className: "mt-6 font-mono text-[10px] tracking-[.18em] uppercase text-bone-400"
  }, shown.length, " photos dans cette sélection · cliquez une tuile pour l'ouvrir en grand"), open !== null && shown[open] && ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    className: "lightbox",
    onClick: () => setOpen(null)
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(null),
    className: "absolute top-6 right-6 w-12 h-12 rounded-full bg-bone-50 text-ink-900 grid place-items-center"
  }, /*#__PURE__*/React.createElement(I.Close, {
    width: "20",
    height: "20"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      setOpen((open - 1 + shown.length) % shown.length);
    },
    className: "absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/20 text-bone-50 grid place-items-center hover:bg-white/10 z-10"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M15 18l-6-6 6-6"
  }))), /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      setOpen((open + 1) % shown.length);
    },
    className: "absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/20 text-bone-50 grid place-items-center hover:bg-white/10 z-10"
  }, /*#__PURE__*/React.createElement(I.ArrowR, {
    width: "20",
    height: "20"
  })), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    className: "relative max-w-[86vw] max-h-[86vh]"
  }, /*#__PURE__*/React.createElement("img", {
    src: shown[open].src,
    alt: shown[open].label,
    className: "max-w-[86vw] max-h-[74vh] w-auto h-auto object-contain block mx-auto"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 flex items-center justify-between gap-6 text-bone-200"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-display text-[22px] text-bone-50"
  }, shown[open].label), /*#__PURE__*/React.createElement("div", {
    className: "font-mono text-[10px] tracking-[.22em] uppercase text-gold-300/80 mt-1"
  }, shown[open].tag)), /*#__PURE__*/React.createElement("div", {
    className: "font-mono text-[11px] text-bone-400"
  }, String(open + 1).padStart(2, '0'), " / ", String(shown.length).padStart(2, '0'))))), document.body)));
}
window.Gallery = Gallery;
window.SlideTile = SlideTile;