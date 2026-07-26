function Temple() {
  // Real fundraising info from the church poster
  const methods = [{
    name: "Rawbank · USD",
    acc: "35101-01039913601-30-USD",
    intitule: "37e CADC ASBL V/C CEPE NGIRI-NGIRI",
    color: "#0a2563",
    logo: "RB"
  }, {
    name: "Equity BCDC",
    acc: "00018000070113471200045",
    intitule: "37e CADC | Parole Eternelle Ngiri-ngiri",
    color: "#ED1C24",
    logo: "EQ"
  }, {
    name: "Orange Money",
    acc: "085 100 59 15",
    intitule: "Mobile Money",
    color: "#ff7900",
    logo: "OM"
  }, {
    name: "M-Pesa · Vodacom",
    acc: "083 361 06 44",
    intitule: "Mobile Money",
    color: "#e60000",
    logo: "MP"
  }, {
    name: "Airtel Money",
    acc: "098 550 83 43",
    intitule: "Mobile Money",
    color: "#ED1C24",
    logo: "AM"
  }];

  // Slideshow — slide 1 is the current rendering; the rest are drop slots the
  // church fills with more photos over time (persist across reloads).
  const allSlides = [{
    type: "img",
    src: "assets/temple-projet.jpg",
    label: "Rendu 3D · Vue d’ensemble"
  }, {
    type: "slot",
    id: "temple-photo-2",
    label: "Façade principale",
    ph: "Déposez une photo · façade"
  }, {
    type: "slot",
    id: "temple-photo-3",
    label: "Intérieur · sanctuaire",
    ph: "Déposez une photo · intérieur"
  }, {
    type: "slot",
    id: "temple-photo-4",
    label: "Chantier en cours",
    ph: "Déposez une photo · chantier"
  }];
  // Visiteurs : uniquement les diapositives remplies (les emplacements vides
  // restent réservés au mode auteur).
  const editable = typeof window !== "undefined" && !!(window.omelette && window.omelette.writeFile);
  const [slotState, setSlotState] = React.useState(null);
  React.useEffect(() => {
    if (editable) {
      setSlotState({});
      return;
    }
    fetch(".image-slots.state.json").then(r => r.ok ? r.json() : {}).then(setSlotState).catch(() => setSlotState({}));
  }, []);
  const slides = allSlides.filter(s => s.type === "img" || editable || slotState && slotState[s.id] && slotState[s.id].u);
  const n = slides.length;
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    if (i >= n) setI(0);
  }, [n]);
  const [hover, setHover] = React.useState(false);
  const go = d => setI(x => (x + d + n) % n);

  // Autoplay (paused on hover / reduced-motion).
  React.useEffect(() => {
    if (hover || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI(x => (x + 1) % n), 5500);
    return () => clearInterval(t);
  }, [hover, n]);

  // Copy-to-clipboard for bank details.
  const [copied, setCopied] = React.useState(null);
  const copy = (txt, idx) => {
    navigator.clipboard?.writeText(txt);
    setCopied(idx);
    setTimeout(() => setCopied(null), 1500);
  };

  // Animated fundraising stats (count-up on first view).
  const [p, setP] = React.useState(0);
  const [donors, setDonors] = React.useState(0);
  const statsRef = React.useRef(null);
  React.useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    let ran = false;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const run = () => {
      if (ran) return;
      ran = true;
      cleanup();
      if (reduce) {
        setP(68);
        setDonors(1420);
        return;
      }
      const t0 = performance.now(),
        D = 1500;
      const tick = t => {
        const q = Math.min(1, (t - t0) / D),
          e = 1 - Math.pow(1 - q, 3);
        setP(68 * e);
        setDonors(Math.round(1420 * e));
        if (q < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    // IntersectionObserver is unreliable inside content-visibility:auto
    // sections — use the scroll + rect pattern of the page's reveal safety-net.
    const check = () => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.9 && r.bottom > 0) run();
    };
    const cleanup = () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
      clearTimeout(t1);
      clearTimeout(t2);
    };
    window.addEventListener("scroll", check, {
      passive: true
    });
    window.addEventListener("resize", check);
    const t1 = setTimeout(check, 400);
    const t2 = setTimeout(check, 1500);
    return cleanup;
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    id: "temple",
    "data-screen-label": "Temple",
    className: "sec-light relative bg-ink-900 py-24 md:py-32 overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-1/4 -right-40 w-[700px] h-[700px] rounded-full pointer-events-none",
    style: {
      background: "radial-gradient(circle, rgba(244,194,56,.10), transparent 70%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-14 relative"
  }, /*#__PURE__*/React.createElement(Reveal, {
    className: "grid lg:grid-cols-12 gap-8 lg:gap-14 items-end mb-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    className: "mb-5"
  }, "Grand Projet · Extension Bé Cape"), /*#__PURE__*/React.createElement(Heading, null, "Ensemble, ", /*#__PURE__*/React.createElement("em", {
    className: "italic text-gold-200 font-light"
  }, "bâtissons"), /*#__PURE__*/React.createElement("br", null), "un temple pour le ", /*#__PURE__*/React.createElement("em", {
    className: "italic text-gold-200 font-light"
  }, "Seigneur."))), /*#__PURE__*/React.createElement("p", {
    className: "lg:col-span-5 text-[15px] leading-relaxed text-bone-200/85"
  }, "Notre église grandit. Pour accueillir cette génération qui se transforme, nous construisons un nouveau temple à", /*#__PURE__*/React.createElement("strong", {
    className: "text-bone-50"
  }, " Avenue Monkoto, Ngiri-Ngiri"), " — une maison de prière digne, lumineuse, ouverte à tous. Chaque don, chaque prière, chaque main fait avancer ce rêve.")), /*#__PURE__*/React.createElement(Reveal, {
    className: "mb-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative aspect-[16/9] overflow-hidden glow",
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, slides.map((s, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    className: `temple-slide absolute inset-0 ${idx === i ? "is-active opacity-100" : "opacity-0 pointer-events-none"}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "temple-media absolute inset-0"
  }, s.type === "img" ? /*#__PURE__*/React.createElement("img", {
    src: s.src,
    alt: `Temple Parole Éternelle Ngiri-Ngiri — ${s.label}`,
    className: "absolute inset-0 w-full h-full object-cover",
    loading: "lazy"
  }) : /*#__PURE__*/React.createElement("image-slot", {
    id: s.id,
    shape: "rect",
    fit: "cover",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      display: "block"
    },
    placeholder: s.ph
  })))), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 pointer-events-none z-[5]",
    style: {
      background: "linear-gradient(180deg, rgba(0,0,0,.28) 0%, transparent 30%, transparent 52%, rgba(0,0,0,.9) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-5 left-5 z-[6] px-3 py-1.5 backdrop-blur-md border border-gold-500/40 font-mono text-[10px] tracking-[.22em] uppercase",
    style: {
      background: "rgba(10,10,12,.72)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#d8b66a"
    }
  }, slides[i].label)), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-5 right-5 z-[6] font-mono text-[11px] tracking-[.2em] text-white/85 tick"
  }, String(i + 1).padStart(2, "0"), " / ", String(n).padStart(2, "0")), n > 1 && /*#__PURE__*/React.createElement("button", {
    "aria-label": "Image précédente",
    onClick: () => go(-1),
    className: "tile-arrow absolute left-4 top-1/2 -translate-y-1/2 z-[7] w-11 h-11 rounded-full grid place-items-center transition"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M15 6l-6 6 6 6"
  }))), n > 1 && /*#__PURE__*/React.createElement("button", {
    "aria-label": "Image suivante",
    onClick: () => go(1),
    className: "tile-arrow absolute right-4 top-1/2 -translate-y-1/2 z-[7] w-11 h-11 rounded-full grid place-items-center transition"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 6l6 6-6 6"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-6 left-6 right-6 z-[6] flex items-end justify-between gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-display text-[24px] sm:text-[34px] leading-tight text-white"
  }, "Le nouveau temple — Avenue Monkoto"), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 text-[13px] text-white/80"
  }, "2 bis & 4, Av. Monkoto · C/Ngiri-Ngiri · Réf. Marché Kale")), /*#__PURE__*/React.createElement("div", {
    className: "hidden sm:flex items-center gap-2"
  }, slides.map((_, idx) => /*#__PURE__*/React.createElement("button", {
    key: idx,
    "aria-label": `Aller à l’image ${idx + 1}`,
    onClick: () => setI(idx),
    className: `h-2 rounded-full transition-all duration-300 ${idx === i ? "w-7 bg-gold-300" : "w-2 bg-white/45 hover:bg-white/80"}`
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "sm:hidden mt-4 flex items-center justify-center gap-2"
  }, slides.map((_, idx) => /*#__PURE__*/React.createElement("button", {
    key: idx,
    "aria-label": `Aller à l’image ${idx + 1}`,
    onClick: () => setI(idx),
    className: `h-2 rounded-full transition-all ${idx === i ? "w-7 bg-gold-300" : "w-2 bg-white/40"}`
  })))), /*#__PURE__*/React.createElement(Reveal, {
    className: "grid lg:grid-cols-12 gap-6 mb-10"
  }, /*#__PURE__*/React.createElement("div", {
    ref: statsRef,
    className: "lg:col-span-8 bg-ink-700 border border-gold-500/30 p-7 sm:p-9 glow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row sm:items-end gap-x-10 gap-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shrink-0"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    className: "mb-3"
  }, "Avancement du chantier"), /*#__PURE__*/React.createElement("div", {
    className: "font-display text-[56px] sm:text-[72px] leading-none text-bone-50 tick"
  }, Math.round(p), /*#__PURE__*/React.createElement("span", {
    className: "text-gold-300"
  }, "%")), /*#__PURE__*/React.createElement("div", {
    className: "text-[12px] text-bone-300 mt-1"
  }, "de l’objectif atteint — grâce à Dieu et à vous")), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 min-w-[200px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-2.5 bg-white/8 rounded-full overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-full bg-gold-300 rounded-full",
    style: {
      width: `${p}%`
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-6 mt-6"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-mono text-[10px] tracking-[.22em] uppercase text-bone-400"
  }, "Objectif"), /*#__PURE__*/React.createElement("div", {
    className: "font-display text-[26px] text-bone-50 mt-1 tick"
  }, "350K USD")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-mono text-[10px] tracking-[.22em] uppercase text-bone-400"
  }, "Donateurs"), /*#__PURE__*/React.createElement("div", {
    className: "font-display text-[26px] text-bone-50 mt-1 tick"
  }, donors.toLocaleString("fr-FR"), "+")))))), /*#__PURE__*/React.createElement("a", {
    href: "#donner",
    className: "lg:col-span-4 bg-gold-300 text-ink-900 p-7 sm:p-9 flex flex-col justify-between hover:bg-gold-200 transition group"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-display text-[26px] sm:text-[30px] leading-tight"
  }, "Devenez bâtisseur du temple"), /*#__PURE__*/React.createElement("p", {
    className: "mt-3 text-[13px] leading-relaxed opacity-80"
  }, "Chaque don rapproche notre communauté de sa maison de prière — construisons-la ensemble.")), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 inline-flex items-center gap-2 font-mono text-[10px] tracking-[.22em] uppercase font-bold"
  }, /*#__PURE__*/React.createElement(I.Heart, {
    width: "14",
    height: "14"
  }), " Soutenir le projet ", /*#__PURE__*/React.createElement(I.ArrowR, {
    width: "12",
    height: "12"
  })))), /*#__PURE__*/React.createElement(Reveal, {
    className: "bg-ink-700 border border-white/10 p-6 sm:p-8 md:p-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-end justify-between gap-4 mb-6"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    className: "mb-2"
  }, "Coordonnées de transfert"), /*#__PURE__*/React.createElement("div", {
    className: "font-display text-[26px] sm:text-[32px] leading-tight text-bone-50"
  }, "5 façons de donner pour le temple")), /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] font-mono tracking-[.18em] uppercase text-bone-400"
  }, "Cliquez pour copier")), /*#__PURE__*/React.createElement("div", {
    className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-3"
  }, methods.map((m, idx) => /*#__PURE__*/React.createElement("button", {
    key: idx,
    onClick: () => copy(m.acc, idx),
    className: "text-left p-5 border border-white/10 hover:border-gold-400/50 transition group bg-ink-800"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start justify-between mb-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-9 h-9 rounded-md grid place-items-center font-display text-[13px] font-bold",
    style: {
      background: m.color,
      color: "#fff"
    }
  }, m.logo), /*#__PURE__*/React.createElement("span", {
    className: `text-[10px] font-mono tracking-[.18em] uppercase transition ${copied === idx ? "text-gold-300" : "text-bone-400 opacity-0 group-hover:opacity-100"}`
  }, copied === idx ? "✓ Copié" : "Copier")), /*#__PURE__*/React.createElement("div", {
    className: "font-medium text-[14px] text-bone-50 mb-2"
  }, m.name), /*#__PURE__*/React.createElement("div", {
    className: "font-mono text-[13px] text-gold-200 break-all tick mb-2 leading-snug"
  }, m.acc), /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] text-bone-400 leading-snug"
  }, m.intitule))), /*#__PURE__*/React.createElement("a", {
    href: "#donner",
    className: "block p-5 bg-gold-300 text-ink-900 hover:bg-gold-200 transition group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display text-[20px] leading-tight"
  }, "Don ponctuel rapide"), /*#__PURE__*/React.createElement("div", {
    className: "mt-2 text-[12px] opacity-80 leading-relaxed"
  }, "Choisissez un montant suggéré et un moyen de paiement — 30 secondes."), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 inline-flex items-center gap-2 font-mono text-[10px] tracking-[.22em] uppercase font-bold"
  }, "Donner maintenant ", /*#__PURE__*/React.createElement(I.ArrowR, {
    width: "12",
    height: "12"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "mt-7 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[12px] text-bone-300 leading-relaxed max-w-xl"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-gold-200 font-mono tracking-[.1em] uppercase text-[10px] mr-2"
  }, "Verset"), "« Que chacun donne comme il l'a résolu en son cœur, sans tristesse ni contrainte ; car Dieu aime celui qui donne avec joie. » — 2 Cor. 9:7"), /*#__PURE__*/React.createElement("a", {
    href: "https://www.facebook.com/cepeng/",
    target: "_blank",
    rel: "noopener",
    className: "btn btn-ghost"
  }, /*#__PURE__*/React.createElement(I.FB, {
    width: "14",
    height: "14"
  }), " Voir l'affiche officielle")))));
}
window.Temple = Temple;