const ALBUMS = [{
  key: "culte",
  name: "Culte dominical",
  desc: "Dimanche 07h30 & 10h00 — prédication, communion et famille.",
  cover: "assets/photos/culte-assemblee-2.jpg",
  photos: [{
    src: "assets/photos/culte-assemblee-2.jpg",
    label: "L'assemblée au culte"
  }, {
    src: "assets/photos/culte-assemblee-1.jpg",
    label: "Recueillement"
  }, {
    src: "assets/photos/pasteur-predication-1.jpg",
    label: "Prédication · Past. Raphaël Kaseya"
  }, {
    src: "assets/photos/pasteur-predication-2.jpg",
    label: "Past. Kaseya au pupitre"
  }, {
    src: "assets/photos/sainte-cene.jpg",
    label: "Sainte cène"
  }, {
    src: "assets/photos/femmes-culte.jpg",
    label: "Les sœurs au culte"
  }, {
    src: "assets/photos/accueil-entree.jpg",
    label: "L'accueil à l'entrée"
  }, {
    src: "assets/photos/pasteurs-adoration.jpg",
    label: "L'équipe pastorale"
  }, {
    src: "assets/photos/couple-pastoral-sourire.jpg",
    label: "Nos pasteurs · Raphaël & Denise"
  }, {
    src: "assets/photos/accolade-pasteurs.jpg",
    label: "Accueil d'un serviteur de Dieu"
  }, {
    src: "assets/photos/serie/pe-21.jpg",
    label: "L'assemblée, mains levées"
  }, {
    src: "assets/photos/serie/pe-22.jpg",
    label: "Le temple plein au culte"
  }, {
    src: "assets/photos/serie/pe-23.jpg",
    label: "Les sœurs dans l'assemblée"
  }, {
    src: "assets/photos/serie/pe-17.jpg",
    label: "Prédication au pupitre"
  }, {
    src: "assets/photos/serie/pe-18.jpg",
    label: "Interprétation en langue des signes"
  }, {
    src: "assets/photos/serie/pe-08.jpg",
    label: "La Parole prêchée"
  }, {
    src: "assets/photos/serie/pe-72.jpg",
    label: "La Bible ouverte au pupitre"
  }, {
    src: "assets/photos/serie/pe-74.jpg",
    label: "Avec sa Bible, dans l'assemblée"
  }, {
    src: "assets/photos/serie/pe-76.jpg",
    label: "Le message du dimanche"
  }, {
    src: "assets/photos/serie/pe-02.jpg",
    label: "Recueillement avant le culte"
  }]
}, {
  key: "louange",
  name: "Louange & Chorale",
  desc: "Voix d'Éternité, orchestre et toute l'assemblée dans l'adoration.",
  cover: "assets/photos/chorale-danse.jpg",
  photos: [{
    src: "assets/photos/chorale-danse.jpg",
    label: "La chorale en mouvement"
  }, {
    src: "assets/photos/chorale-scene.jpg",
    label: "Sur scène"
  }, {
    src: "assets/photos/chorale-femmes.jpg",
    label: "Le chœur des sœurs"
  }, {
    src: "assets/photos/orchestre-guitare.jpg",
    label: "L'orchestre au service"
  }, {
    src: "assets/photos/louange-assemblee-nb.jpg",
    label: "Toute l'assemblée"
  }, {
    src: "assets/photos/hommes-louange-nb.jpg",
    label: "Les hommes dans la louange"
  }, {
    src: "assets/photos/pasteur-adoration.jpg",
    label: "Past. Kaseya dans l'adoration"
  }, {
    src: "assets/photos/serie/pe-03.jpg",
    label: "Dans l'adoration"
  }, {
    src: "assets/photos/serie/pe-58.jpg",
    label: "Les voix du chœur"
  }, {
    src: "assets/photos/serie/pe-59.jpg",
    label: "Le conducteur de louange"
  }, {
    src: "assets/photos/serie/pe-67.jpg",
    label: "Chant au pupitre"
  }, {
    src: "assets/photos/serie/pe-20.jpg",
    label: "L'équipe de louange"
  }, {
    src: "assets/photos/serie/pe-13.jpg",
    label: "Affiche · Journée Louange & Adoration"
  }]
}, {
  key: "enfants",
  name: "Kids Royaume",
  desc: "0–12 ans — l'école du dimanche, vivante et joyeuse.",
  cover: "assets/photos/enfants-mains-1.jpg",
  photos: [{
    src: "assets/photos/enfants-mains-1.jpg",
    label: "Mains levées"
  }, {
    src: "assets/photos/enfants-mains-2.jpg",
    label: "Évaluation · tous ensemble"
  }, {
    src: "assets/photos/enfants-classe-1.jpg",
    label: "Les petits en classe"
  }, {
    src: "assets/photos/enfants-question.jpg",
    label: "Une réponse !"
  }, {
    src: "assets/photos/enfants-mains-nb.jpg",
    label: "École du dimanche"
  }, {
    src: "assets/photos/serie/pe-25.jpg",
    label: "Prière d'un jeune"
  }, {
    src: "assets/photos/serie/pe-26.jpg",
    label: "La monitrice avec les petits"
  }, {
    src: "assets/photos/serie/pe-27.jpg",
    label: "Regard attentif"
  }, {
    src: "assets/photos/serie/pe-28.jpg",
    label: "À l'école du dimanche"
  }, {
    src: "assets/photos/serie/pe-30.jpg",
    label: "Mains jointes"
  }, {
    src: "assets/photos/serie/pe-31.jpg",
    label: "Sourires du Royaume"
  }, {
    src: "assets/photos/serie/pe-32.jpg",
    label: "La Bible entre les mains"
  }, {
    src: "assets/photos/serie/pe-33.jpg",
    label: "À l'écoute de la Parole"
  }, {
    src: "assets/photos/serie/pe-34.jpg",
    label: "Les garçons du Royaume"
  }, {
    src: "assets/photos/serie/pe-35.jpg",
    label: "Toute la classe"
  }, {
    src: "assets/photos/serie/pe-36.jpg",
    label: "Prière des enfants"
  }]
}, {
  key: "jeunesse",
  name: "Jeunesse & Étude biblique",
  desc: "NextGen, étude de la Parole et mission dans les écoles.",
  cover: "assets/photos/jeunesse-etude.jpg",
  photos: [{
    src: "assets/photos/jeunesse-etude.jpg",
    label: "Jeunesse à l'écoute"
  }, {
    src: "assets/photos/etude-bible-notes.jpg",
    label: "La Parole ouverte"
  }, {
    src: "assets/photos/pasteur-etude-biblique.jpg",
    label: "Étude biblique · enseignement"
  }, {
    src: "assets/photos/mission-ecole-1.jpg",
    label: "Mission · dans les écoles"
  }, {
    src: "assets/photos/mission-ecole-2.jpg",
    label: "Évangélisation scolaire"
  }, {
    src: "assets/photos/serie/pe-29.jpg",
    label: "Les jeunes dans la prière"
  }, {
    src: "assets/photos/serie/pe-06.jpg",
    label: "NextGen · portrait"
  }, {
    src: "assets/photos/serie/pe-41.jpg",
    label: "« Jésus-Christ est Seigneur »"
  }]
}, {
  key: "jubile",
  name: "Jubilé 2026",
  desc: "08 juillet – 02 août 2026 · « Y a-t-il rien qui soit étonnant de la part de l'Éternel ? »",
  cover: "assets/photos/pasteur-jubile-pupitre.jpg",
  photos: [{
    src: "assets/jubile-affiche.jpg",
    label: "Affiche officielle · Jubilé 2026"
  }, {
    src: "assets/photos/pasteur-jubile-pupitre.jpg",
    label: "Au pupitre du Jubilé"
  }, {
    src: "assets/photos/serie/pe-09.jpg",
    label: "Affiche · Jubilé 2026"
  }, {
    src: "assets/photos/serie/pe-10.jpg",
    label: "Past. Raphaël Kaseya Bin Moningo · hôte"
  }, {
    src: "assets/photos/serie/pe-11.jpg",
    label: "Past. Kondo Wa Kondo · invité"
  }, {
    src: "assets/photos/serie/pe-12.jpg",
    label: "Past. Dieudonné Mongu · invité"
  }, {
    src: "assets/photos/serie/pe-14.jpg",
    label: "Jubilé · Jour 6"
  }, {
    src: "assets/photos/serie/pe-37.jpg",
    label: "Jubilé · Jour 2"
  }, {
    src: "assets/photos/serie/pe-15.jpg",
    label: "Déblocage du mois de juillet"
  }, {
    src: "assets/photos/serie/pe-40.jpg",
    label: "L'écharpe du Jubilé au pupitre"
  }, {
    src: "assets/photos/serie/pe-42.jpg",
    label: "Ferveur dans la prière"
  }, {
    src: "assets/photos/serie/pe-44.jpg",
    label: "Exhortation des sœurs"
  }, {
    src: "assets/photos/serie/pe-50.jpg",
    label: "Past. Mongu au micro"
  }, {
    src: "assets/photos/serie/pe-51.jpg",
    label: "La prédication du soir"
  }, {
    src: "assets/photos/serie/pe-52.jpg",
    label: "Sous les couleurs du Jubilé"
  }, {
    src: "assets/photos/serie/pe-53.jpg",
    label: "Moment solennel"
  }, {
    src: "assets/photos/serie/pe-54.jpg",
    label: "Les invitées d'honneur"
  }, {
    src: "assets/photos/serie/pe-61.jpg",
    label: "Enseignement · Jour 3"
  }, {
    src: "assets/photos/serie/pe-62.jpg",
    label: "Joie entre serviteurs"
  }, {
    src: "assets/photos/serie/pe-63.jpg",
    label: "Les hôtes du Jubilé"
  }, {
    src: "assets/photos/serie/pe-64.jpg",
    label: "La Parole au centre"
  }, {
    src: "assets/photos/serie/pe-65.jpg",
    label: "Le temple comble"
  }, {
    src: "assets/photos/serie/pe-66.jpg",
    label: "« Y a-t-il rien d'étonnant… »"
  }, {
    src: "assets/photos/serie/pe-70.jpg",
    label: "La banderole sur l'avenue Monkoto"
  }, {
    src: "assets/photos/serie/pe-77.jpg",
    label: "Ministration du Jubilé"
  }, {
    src: "assets/photos/serie/pe-46.jpg",
    label: "Citation · « Ni ton âge, ni ton corps »"
  }, {
    src: "assets/photos/serie/pe-47.jpg",
    label: "Citation · « Rien d'étonnant pour Dieu »"
  }, {
    src: "assets/photos/serie/pe-48.jpg",
    label: "Citation · « La grandeur de ton problème »"
  }, {
    src: "assets/photos/serie/pe-49.jpg",
    label: "Citation · « Celui qui a créé l'or »"
  }, {
    src: "assets/photos/serie/pe-55.jpg",
    label: "Citation · « Dieu parle toujours »"
  }, {
    src: "assets/photos/serie/pe-56.jpg",
    label: "Citation · « La bénédiction »"
  }, {
    src: "assets/photos/serie/pe-57.jpg",
    label: "Citation · « Une seule manière d'agir »"
  }]
}, {
  key: "evenements",
  name: "Vendredi Ngomba & Événements",
  desc: "Mariages, prières et grands moments de la maison.",
  cover: "assets/photos/mariage-ngomba.jpg",
  photos: [{
    src: "assets/photos/mariage-ngomba.jpg",
    label: "Mariage chrétien · Vendredi Ngomba"
  }, {
    src: "assets/photos/couple-pastoral-priere.jpg",
    label: "Couple pastoral dans la prière"
  }, {
    src: "assets/photos/serie/pe-01.jpg",
    label: "L'accolade fraternelle"
  }, {
    src: "assets/photos/serie/pe-04.jpg",
    label: "Arrivée des serviteurs de Dieu"
  }, {
    src: "assets/photos/serie/pe-05.jpg",
    label: "Prière de départ"
  }, {
    src: "assets/photos/serie/pe-07.jpg",
    label: "Le service dans l'humilité"
  }, {
    src: "assets/photos/serie/pe-19.jpg",
    label: "L'équipe d'accueil et parking"
  }, {
    src: "assets/photos/serie/pe-24.jpg",
    label: "Protocole au service"
  }, {
    src: "assets/photos/serie/pe-38.jpg",
    label: "Anniversaire · Sylver Beyo"
  }, {
    src: "assets/photos/serie/pe-43.jpg",
    label: "Devant le temple"
  }, {
    src: "assets/photos/serie/pe-45.jpg",
    label: "Élégance du dimanche"
  }, {
    src: "assets/photos/serie/pe-60.jpg",
    label: "En famille après le culte"
  }, {
    src: "assets/photos/serie/pe-69.jpg",
    label: "L'assistance en plein air"
  }, {
    src: "assets/photos/serie/pe-71.jpg",
    label: "Le public du soir"
  }, {
    src: "assets/photos/serie/pe-73.jpg",
    label: "Invités dans la joie"
  }, {
    src: "assets/photos/serie/pe-75.jpg",
    label: "Sur l'avenue, après le culte"
  }, {
    src: "assets/photos/serie/pe-68.jpg",
    label: "Témoignage au micro"
  }, {
    src: "assets/photos/serie/pe-39.jpg",
    label: "Exhortation du soir"
  }]
}, {
  key: "temple",
  name: "Projet du temple",
  desc: "« Ensemble bâtissons un temple pour le Seigneur. »",
  cover: "assets/temple-projet.jpg",
  photos: [{
    src: "assets/temple-projet.jpg",
    label: "Le futur temple · maquette"
  }, {
    src: "assets/photos/temple-affiche.jpg",
    label: "Coordonnées de transfert · affiche"
  }, {
    src: "assets/photos/pasteur-temple-message.jpg",
    label: "« Levons-nous et bâtissons »"
  }]
}];
const DROP_SLOTS = typeof window !== "undefined" && window.omelette && window.omelette.writeFile ? 6 : 0;
function readHash() {
  const m = window.location.hash.match(/album=([a-z]+)/);
  return m && ALBUMS.some(a => a.key === m[1]) ? m[1] : null;
}
function TopBar() {
  return /*#__PURE__*/React.createElement("header", {
    className: "sticky top-0 z-40 border-b border-white/10",
    style: {
      background: "rgba(7,7,8,.85)",
      backdropFilter: "blur(16px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-[1380px] mx-auto px-6 sm:px-10 flex items-center justify-between h-16"
  }, /*#__PURE__*/React.createElement("a", {
    href: "index.html",
    className: "flex items-center gap-3 text-bone-50 hover:text-gold-200 transition",
    style: {
      color: "#fafaf7"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-[11px] tracking-[.2em] uppercase"
  }, "← Accueil")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2.5"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/logo-parole-eternelle.jpg",
    alt: "Logo Parole Éternelle",
    className: "w-8 h-8 rounded-full object-cover",
    style: {
      boxShadow: "0 0 0 1px rgba(255,255,255,.15)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "font-display text-[16px] tracking-tight text-bone-50"
  }, "Parole Éternelle ", /*#__PURE__*/React.createElement("span", {
    className: "text-gold-300"
  }, "· Galerie"))), /*#__PURE__*/React.createElement("nav", {
    className: "hidden sm:flex items-center gap-5 font-mono text-[10px] tracking-[.18em] uppercase"
  }, /*#__PURE__*/React.createElement("a", {
    href: "predications.html"
  }, "Prédications"), /*#__PURE__*/React.createElement("a", {
    href: "videos.html"
  }, "Vidéos"))));
}
function AlbumCard({
  a,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => onOpen(a.key),
    className: "group relative text-left overflow-hidden rounded-[3px] border border-white/10 hover:border-gold-400/50 transition bg-ink-700"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative overflow-hidden",
    style: {
      aspectRatio: "4/3"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: a.cover,
    alt: a.name,
    loading: "lazy",
    className: "absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-[1.04]"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0",
    style: {
      background: "linear-gradient(180deg, transparent 40%, rgba(7,7,8,.9) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-3 right-3 px-2.5 py-1 rounded-full bg-ink-900/70 backdrop-blur-md border border-white/10 font-mono text-[10px] tracking-[.16em] text-bone-100"
  }, a.photos.length, " photos"), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-0 left-0 right-0 p-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display text-[24px] leading-tight text-white"
  }, a.name), /*#__PURE__*/React.createElement("p", {
    className: "mt-1 text-[13px] text-bone-200/85 leading-snug"
  }, a.desc))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between px-5 py-3 border-t border-white/10"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-[10px] tracking-[.22em] uppercase text-gold-300"
  }, "Ouvrir l'album"), /*#__PURE__*/React.createElement("span", {
    className: "text-gold-300 transition group-hover:translate-x-1"
  }, "→")));
}
function AlbumView({
  a,
  onBack
}) {
  const [open, setOpen] = React.useState(null);
  React.useEffect(() => {
    if (open === null) return;
    const prevOv = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = e => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen(o => (o + 1) % a.photos.length);
      if (e.key === "ArrowLeft") setOpen(o => (o - 1 + a.photos.length) % a.photos.length);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOv;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, a]);
  return /*#__PURE__*/React.createElement("div", {
    className: "fade-in",
    "data-screen-label": `Album ${a.name}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    className: "font-mono text-[11px] tracking-[.2em] uppercase text-gold-300 hover:text-gold-200 transition mb-5 inline-flex items-center gap-2"
  }, "← Tous les albums"), /*#__PURE__*/React.createElement("h1", {
    className: "font-display text-[clamp(34px,5vw,60px)] leading-[1] text-bone-50"
  }, a.name), /*#__PURE__*/React.createElement("p", {
    className: "mt-3 max-w-xl text-[15px] text-bone-300"
  }, a.desc)), /*#__PURE__*/React.createElement("div", {
    className: "font-mono text-[11px] tracking-[.18em] uppercase text-bone-400"
  }, a.photos.length, " photos · glissez-en d'autres ci-dessous")), /*#__PURE__*/React.createElement("div", {
    className: "masonry"
  }, a.photos.map((p, i) => /*#__PURE__*/React.createElement("button", {
    key: p.src,
    onClick: () => setOpen(i),
    className: "group relative w-full block overflow-hidden rounded-[2px]"
  }, /*#__PURE__*/React.createElement("img", {
    src: p.src,
    alt: p.label,
    loading: "lazy",
    className: "w-full h-auto block transition duration-700 group-hover:scale-[1.03]"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-ink-900/0 group-hover:bg-ink-900/40 transition"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition",
    style: {
      background: "linear-gradient(180deg, transparent, rgba(0,0,0,.8))"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[13px] text-white"
  }, p.label)))), Array.from({
    length: DROP_SLOTS
  }).map((_, n) => /*#__PURE__*/React.createElement("div", {
    key: n,
    className: "relative w-full overflow-hidden rounded-[2px] border border-dashed border-white/20 hover:border-gold-400/60 transition",
    style: {
      aspectRatio: "4/3"
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: `alb-${a.key}-slot-${n + 1}`,
    shape: "rect",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      display: "block"
    },
    placeholder: `Glissez une photo · ${a.name}`
  })))), open !== null && /*#__PURE__*/React.createElement("div", {
    className: "lightbox",
    onClick: () => setOpen(null)
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(null),
    className: "absolute top-6 right-6 w-12 h-12 rounded-full bg-bone-50 text-ink-900 grid place-items-center text-[18px]"
  }, "✕"), /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      setOpen((open - 1 + a.photos.length) % a.photos.length);
    },
    className: "absolute left-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/25 text-bone-50 grid place-items-center hover:bg-white/10 z-10"
  }, "←"), /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      setOpen((open + 1) % a.photos.length);
    },
    className: "absolute right-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/25 text-bone-50 grid place-items-center hover:bg-white/10 z-10"
  }, "→"), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    className: "relative max-w-[88vw]"
  }, /*#__PURE__*/React.createElement("img", {
    src: a.photos[open].src,
    alt: a.photos[open].label,
    className: "max-w-[88vw] max-h-[76vh] w-auto h-auto object-contain block mx-auto"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 flex items-center justify-between gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display text-[20px] text-bone-50"
  }, a.photos[open].label), /*#__PURE__*/React.createElement("div", {
    className: "font-mono text-[11px] text-bone-400"
  }, String(open + 1).padStart(2, '0'), " / ", String(a.photos.length).padStart(2, '0'))))));
}
function App() {
  const [albumKey, setAlbumKey] = React.useState(readHash());
  React.useEffect(() => {
    const onHash = () => setAlbumKey(readHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  const openAlbum = key => {
    window.location.hash = key ? `album=${key}` : "";
    window.scrollTo(0, 0);
  };
  const album = ALBUMS.find(a => a.key === albumKey);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TopBar, null), /*#__PURE__*/React.createElement("main", {
    className: "max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-14 py-14 md:py-20"
  }, !album && /*#__PURE__*/React.createElement("div", {
    className: "fade-in",
    "data-screen-label": "Albums"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow mb-4"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      width: 5,
      height: 5,
      background: "currentColor",
      borderRadius: 99,
      marginRight: 10,
      verticalAlign: "middle"
    }
  }), "Galerie · C.E. Parole Éternelle Ngiri-Ngiri"), /*#__PURE__*/React.createElement("h1", {
    className: "font-display text-[clamp(38px,6vw,72px)] leading-[0.98] text-bone-50"
  }, "Les albums de la maison"), /*#__PURE__*/React.createElement("p", {
    className: "mt-4 max-w-2xl text-[16px] text-bone-300 leading-relaxed"
  }, "Cultes, louange, enfants, jeunesse, Jubilé 2026, projet du temple — chaque album peut être enrichi : ouvrez-le et glissez vos photos dans les cases prévues.")), /*#__PURE__*/React.createElement("div", {
    className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
  }, ALBUMS.map(a => /*#__PURE__*/React.createElement(AlbumCard, {
    key: a.key,
    a: a,
    onOpen: openAlbum
  })))), album && /*#__PURE__*/React.createElement(AlbumView, {
    a: album,
    onBack: () => openAlbum(null)
  })), /*#__PURE__*/React.createElement("footer", {
    className: "border-t border-white/10 py-10 mt-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-14 flex flex-col md:flex-row items-center justify-between gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-mono text-[11px] tracking-[.18em] uppercase text-bone-400"
  }, "© 2026 C.E. Parole Éternelle Ngiri-Ngiri · 2 bis & 4, Av. Monkoto · Kinshasa"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-5 font-mono text-[10px] tracking-[.18em] uppercase"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://www.facebook.com/cepeng/",
    target: "_blank",
    rel: "noopener"
  }, "Facebook"), /*#__PURE__*/React.createElement("a", {
    href: "https://www.youtube.com/channel/UCPmV9FMnv9imGbnxJdFiMcw",
    target: "_blank",
    rel: "noopener"
  }, "YouTube")))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));