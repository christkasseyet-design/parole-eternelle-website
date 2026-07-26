function Ministries() {
  const items = [{
    name: "Jeunesse",
    fr: "NextGen",
    text: "13–25 ans · samedis énergiques, mentorat et grands rendez-vous.",
    icon: /*#__PURE__*/React.createElement(I.Sparkle, {
      width: "20",
      height: "20"
    }),
    lead: "Min. Reagan & Sandra",
    count: "260+",
    tone: "warm",
    img: "assets/photos/jeunesse-etude.jpg"
  }, {
    name: "Femmes",
    fr: "Filles du Roi",
    text: "Café-prière, retraites, ateliers — bâties dans la grâce.",
    icon: /*#__PURE__*/React.createElement(I.Heart, {
      width: "20",
      height: "20"
    }),
    lead: "Past. Esther Kalemba",
    count: "180+",
    tone: "warm",
    img: "assets/photos/femmes-culte.jpg"
  }, {
    name: "Hommes",
    fr: "Fils de la maison",
    text: "Lever d'hommes, mentorat, fraternité authentique.",
    icon: /*#__PURE__*/React.createElement(I.People, {
      width: "20",
      height: "20"
    }),
    lead: "Past. Patrick Kabongo",
    count: "140+",
    tone: "deep",
    img: "assets/photos/hommes-louange-nb.jpg"
  }, {
    name: "Enfants",
    fr: "Kids Royaume",
    text: "0–12 ans · l'évangile rendu vivant, créatif et joyeux.",
    icon: /*#__PURE__*/React.createElement(I.Sparkle, {
      width: "20",
      height: "20"
    }),
    lead: "Min. Naomi",
    count: "210+",
    tone: "warm",
    img: "assets/photos/enfants-classe-1.jpg"
  }, {
    name: "Chorale",
    fr: "Voix d'Éternité",
    text: "80 voix, un orchestre, une seule passion : la louange.",
    icon: /*#__PURE__*/React.createElement(I.Music, {
      width: "20",
      height: "20"
    }),
    lead: "Min. Bénédicte",
    count: "80",
    tone: "warm",
    img: "assets/photos/chorale-scene.jpg"
  }, {
    name: "Intercession",
    fr: "Sentinelles",
    text: "Veillées, chaînes 24/7, jeûne et prière prophétique.",
    icon: /*#__PURE__*/React.createElement(I.Flame, {
      width: "20",
      height: "20"
    }),
    lead: "Pasteure Marthe",
    count: "60+",
    tone: "deep",
    img: "assets/photos/pasteurs-adoration.jpg"
  }, {
    name: "Évangélisation",
    fr: "Mission Kinshasa",
    text: "Marchés, écoles, communes — Christ partagé sans complexe.",
    icon: /*#__PURE__*/React.createElement(I.Dove, {
      width: "20",
      height: "20"
    }),
    lead: "Min. Évangile",
    count: "120+",
    tone: "warm",
    img: "assets/photos/mission-ecole-1.jpg"
  }];
  const [active, setActive] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    id: "communaute",
    "data-screen-label": "Communauté",
    className: "sec-light relative bg-ink-900 py-28 md:py-40"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-14"
  }, /*#__PURE__*/React.createElement(Reveal, {
    className: "grid lg:grid-cols-12 gap-10 items-end mb-14"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    className: "mb-5"
  }, "Communauté · Ministères"), /*#__PURE__*/React.createElement(Heading, null, "Trouvez votre place,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    className: "italic text-gold-200 font-light"
  }, "servez avec passion."))), /*#__PURE__*/React.createElement("p", {
    className: "lg:col-span-5 text-[15px] text-bone-300 leading-relaxed"
  }, "Aucun chrétien n'est appelé à grandir seul. Sept équipes pour servir, apprendre et rayonner ensemble.")), /*#__PURE__*/React.createElement(Reveal, {
    className: "grid lg:grid-cols-12 gap-8 lg:gap-14"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5 divide-y divide-white/10 border-y border-white/10"
  }, items.map((m, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => setActive(i),
    onMouseEnter: () => setActive(i),
    className: `w-full text-left grid grid-cols-[auto_1fr_auto] gap-5 items-center py-5 transition group ${active === i ? "" : ""}`
  }, /*#__PURE__*/React.createElement("span", {
    className: `w-11 h-11 grid place-items-center rounded-full border transition ${active === i ? "bg-gold-300 text-ink-900 border-gold-300" : "border-white/15 text-bone-200 group-hover:border-gold-400/50"}`
  }, m.icon), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "block font-display text-[26px] sm:text-[30px] leading-none text-bone-50"
  }, m.name), /*#__PURE__*/React.createElement("span", {
    className: "block font-mono text-[10px] tracking-[.22em] uppercase text-gold-300/70 mt-1.5"
  }, "« ", m.fr, " » · ", m.count, " membres")), /*#__PURE__*/React.createElement("span", {
    className: `text-bone-400 transition ${active === i ? "translate-x-1 text-gold-300" : "group-hover:translate-x-1"}`
  }, /*#__PURE__*/React.createElement(I.ArrowR, {
    width: "18",
    height: "18"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7 relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:sticky lg:top-28"
  }, /*#__PURE__*/React.createElement(Photo, {
    label: `Ministère · ${items[active].name}`,
    tone: items[active].tone,
    className: "aspect-[4/3] rounded-[2px]"
  }, /*#__PURE__*/React.createElement("img", {
    src: items[active].img,
    alt: `Ministère ${items[active].name}`,
    loading: "lazy",
    className: "absolute inset-0 w-full h-full object-cover"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/30 to-transparent"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-6 left-6 right-6 flex items-start justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-[10px] tracking-[.22em] uppercase text-gold-300/90"
  }, "Ministère · ", String(active + 1).padStart(2, '0'), " / 07"), /*#__PURE__*/React.createElement("span", {
    className: "px-3 py-1 bg-ink-900/70 backdrop-blur-md border border-white/10 font-mono text-[10px] tracking-[.18em] uppercase text-bone-100"
  }, items[active].count, " membres")), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-7 left-7 right-7"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-mono text-[10px] tracking-[.28em] uppercase text-gold-300/90 mb-2"
  }, "« ", items[active].fr, " »"), /*#__PURE__*/React.createElement("div", {
    className: "font-display text-[44px] sm:text-[60px] leading-none text-bone-50"
  }, items[active].name), /*#__PURE__*/React.createElement("p", {
    className: "mt-3 max-w-md text-[14px] text-bone-200/85"
  }, items[active].text), /*#__PURE__*/React.createElement("div", {
    className: "mt-5 flex items-center gap-3"
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "gold",
    href: `https://wa.me/243897297625?text=${encodeURIComponent(`Bonjour Parole Éternelle 🙏 Je souhaite rejoindre le ministère ${items[active].name} (« ${items[active].fr} »).`)}`
  }, "Rejoindre"), /*#__PURE__*/React.createElement(Btn, {
    variant: "ghost",
    href: "#contact",
    icon: false
  }, items[active].lead)))))))));
}
window.Ministries = Ministries;