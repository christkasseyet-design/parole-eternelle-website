// Événement phare — bandeau modifiable depuis /admin (content/highlight.json).
// Valeur de secours si le fichier est illisible : le Jubilé 2026 d'origine.
const HIGHLIGHT_FALLBACK = {
  visible: true,
  eyebrow: "Événement de l'année · C.E. Parole Éternelle",
  title_main: "Jubilé",
  title_accent: "2026",
  quote: "« Y a-t-il rien qui soit étonnant de la part de l'Éternel ? »",
  reference: "Genèse 18:14 · Thème de l'année",
  text: "Du 8 juillet au 2 août, un mois de célébration, de louange et de prédication à Ngiri-Ngiri — avec le Proph. Prospère Mugusho, le Past. Kondo Wa Kondo, le Past. Dieudonné Mongu, le Past. Dede N'Landu, et le Past. Raphaël Kaseya comme hôte.",
  infos: ["08 juillet – 02 août 2026", "Mer · Jeu · Ven 17h00–19h30 · Dim aux deux cultes", "2 bis & 4, Av. Monkoto · Ngiri-Ngiri"],
  poster: "assets/jubile-affiche.jpg",
  poster_label: "Affiche officielle Jubilé 2026",
  button1_label: "Voir le programme",
  button1_link: "#programmes",
  button2_label: "Nous visiter",
  button2_link: "#contact"
};
function Jubile() {
  const [h, setH] = React.useState(null);
  React.useEffect(() => {
    let alive = true;
    window.peContent("highlight", HIGHLIGHT_FALLBACK).then(d => {
      if (alive) setH(d && typeof d === "object" ? d : HIGHLIGHT_FALLBACK);
    });
    return () => {
      alive = false;
    };
  }, []);

  // Pendant le chargement : un cadre vide de même hauteur (pas de saut de page)
  if (h === null) return /*#__PURE__*/React.createElement("section", {
    id: "jubile",
    "data-screen-label": "Événement",
    className: "sec-light relative bg-ink-900 border-b border-white/10",
    style: {
      minHeight: 640
    }
  });
  if (h.visible === false) return null;
  const infos = Array.isArray(h.infos) ? h.infos.filter(Boolean) : [];
  return /*#__PURE__*/React.createElement("section", {
    id: "jubile",
    "data-screen-label": (h.title_main || "Événement") + " " + (h.title_accent || ""),
    className: "sec-light relative bg-ink-900 overflow-hidden border-b border-white/10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none",
    style: {
      background: "radial-gradient(circle, rgba(216,182,106,.14), transparent 70%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none",
    style: {
      background: "radial-gradient(circle, rgba(216,182,106,.08), transparent 70%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-14 py-20 md:py-28 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center"
  }, /*#__PURE__*/React.createElement(Reveal, {
    className: "lg:col-span-5 order-2 lg:order-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative aspect-[7/10] max-w-[440px] mx-auto lg:mx-0 overflow-hidden glow",
    style: {
      borderRadius: "16px",
      border: "1px solid rgba(216,182,106,.3)"
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: "jubile-poster",
    shape: "rect",
    src: h.poster || HIGHLIGHT_FALLBACK.poster,
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      display: "block"
    },
    placeholder: h.poster_label || "Affiche"
  }))), /*#__PURE__*/React.createElement(Reveal, {
    className: "lg:col-span-7 order-1 lg:order-2"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    className: "mb-6"
  }, h.eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "font-display text-[clamp(52px,8vw,116px)] leading-[0.9] tracking-[-0.02em] text-bone-50 flex flex-wrap items-baseline gap-x-[0.3em]"
  }, /*#__PURE__*/React.createElement("span", null, h.title_main), h.title_accent ? /*#__PURE__*/React.createElement("span", {
    className: "text-gold-300"
  }, h.title_accent) : null), h.quote ? /*#__PURE__*/React.createElement("p", {
    className: "mt-3 font-display text-[22px] sm:text-[28px] text-gold-200"
  }, h.quote) : null, h.reference ? /*#__PURE__*/React.createElement("p", {
    className: "mt-2 font-mono text-[11px] tracking-[.2em] uppercase text-bone-300"
  }, h.reference) : null, h.text ? /*#__PURE__*/React.createElement("p", {
    className: "mt-6 max-w-xl text-[16px] leading-relaxed text-bone-200"
  }, h.text) : null, infos.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-[11px] tracking-[.18em] uppercase text-bone-300"
  }, infos.map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-1.5 h-1.5 rounded-full bg-gold-300"
  }), " ", t))), /*#__PURE__*/React.createElement("div", {
    className: "mt-9 flex flex-wrap items-center gap-3"
  }, h.button1_label && h.button1_link ? /*#__PURE__*/React.createElement(Btn, {
    variant: "gold",
    href: h.button1_link
  }, h.button1_label) : null, h.button2_label && h.button2_link ? /*#__PURE__*/React.createElement(Btn, {
    variant: "ghost",
    href: h.button2_link,
    icon: false
  }, h.button2_label) : null))));
}
window.Jubile = Jubile;
