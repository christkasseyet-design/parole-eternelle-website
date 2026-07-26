function Bible() {
  return /*#__PURE__*/React.createElement("section", {
    id: "bible",
    "data-screen-label": "Bible",
    className: "sec-light relative bg-ink-800 py-28 md:py-40 overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute -top-20 right-0 w-[500px] h-[500px]",
    style: {
      background: "radial-gradient(circle, rgba(216,182,106,.10), transparent 70%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-14 relative"
  }, /*#__PURE__*/React.createElement(Reveal, {
    className: "grid lg:grid-cols-12 gap-10 items-end mb-14"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    className: "mb-5"
  }, "La Bible · 5 langues · Hors-ligne"), /*#__PURE__*/React.createElement(Heading, null, "Lire & écouter la", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    className: "italic text-gold-200 font-light"
  }, "Parole éternelle."))), /*#__PURE__*/React.createElement("p", {
    className: "lg:col-span-5 text-[15px] text-bone-300 leading-relaxed"
  }, "La Bible complète, en français, lingala, swahili, kikongo et tshiluba — avec audio professionnel et lecture hors-ligne dès le premier téléchargement.")), /*#__PURE__*/React.createElement("div", {
    className: "grid lg:grid-cols-12 gap-8"
  }, /*#__PURE__*/React.createElement(Reveal, {
    className: "lg:col-span-7 bg-ink-700 border border-gold-500/30 p-7 md:p-10 glow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-mono text-[10px] tracking-[.22em] uppercase text-gold-300/80"
  }, "Jean · Chapitre 3 · LSG"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-2 h-2 rounded-full bg-gold-300"
  }), /*#__PURE__*/React.createElement("span", {
    className: "w-2 h-2 rounded-full bg-white/15"
  }), /*#__PURE__*/React.createElement("span", {
    className: "w-2 h-2 rounded-full bg-white/15"
  }))), /*#__PURE__*/React.createElement("p", {
    className: "font-display italic text-[28px] sm:text-[34px] leading-[1.35] text-bone-50"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-[12px] not-italic text-gold-300 align-top mr-2 tick"
  }, "16"), "Car Dieu a tant aimé le monde qu'il a donné son Fils unique, afin que quiconque croit en lui ne périsse point, mais qu'il ait la vie éternelle."), /*#__PURE__*/React.createElement("div", {
    className: "mt-8 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("a", {
    href: "bible.html",
    "aria-label": "Écouter la Bible audio",
    className: "w-12 h-12 rounded-full bg-gold-300 text-ink-900 grid place-items-center hover:scale-105 transition"
  }, /*#__PURE__*/React.createElement(I.Play, {
    width: "16",
    height: "16",
    style: {
      marginLeft: 2
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-[13px] text-bone-100 font-medium"
  }, "Audio · Voix française"), /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] text-bone-400 font-mono tracking-[.05em]"
  }, "02:14 / 12:48"))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("a", {
    href: "bible.html",
    className: "btn btn-gold"
  }, "Ouvrir la Bible"))), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 h-1 bg-white/5 rounded-full overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-full bg-gold-300",
    style: {
      width: "18%"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5 grid grid-cols-2 gap-px bg-white/5 border border-white/10"
  }, /*#__PURE__*/React.createElement(BibleFeat, {
    icon: /*#__PURE__*/React.createElement(I.Bible, {
      width: "20",
      height: "20"
    }),
    k: "Texte intégral",
    v: "66 livres · 1 189 chapitres"
  }), /*#__PURE__*/React.createElement(BibleFeat, {
    icon: /*#__PURE__*/React.createElement(I.Mic, {
      width: "20",
      height: "20"
    }),
    k: "Audio Bible",
    v: "Pro · 5 langues"
  }), /*#__PURE__*/React.createElement(BibleFeat, {
    icon: /*#__PURE__*/React.createElement(I.Sparkle, {
      width: "20",
      height: "20"
    }),
    k: "Hors-ligne",
    v: "124 Mo / langue"
  }), /*#__PURE__*/React.createElement(BibleFeat, {
    icon: /*#__PURE__*/React.createElement(I.Heart, {
      width: "20",
      height: "20"
    }),
    k: "Marque-pages",
    v: "Surligner & noter"
  }))), /*#__PURE__*/React.createElement(Reveal, {
    className: "mt-10 flex flex-wrap items-center justify-center gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-[10px] tracking-[.22em] uppercase text-gold-300/70 mr-2"
  }, "Disponible en"), [["🇫🇷", "Français", "Louis Segond"], ["🇨🇩", "Lingala", "Boyokana"], ["🌍", "Swahili", "Union Version"], ["🇨🇩", "Kikongo", "Bibila"], ["🇨🇩", "Tshiluba", "Mukanda"]].map(([flag, lang, ver]) => /*#__PURE__*/React.createElement("a", {
    key: lang,
    href: "bible.html",
    className: "px-4 py-2 bg-ink-700 border border-white/10 hover:border-gold-400 transition rounded-full flex items-center gap-2 group"
  }, /*#__PURE__*/React.createElement("span", null, flag), /*#__PURE__*/React.createElement("span", {
    className: "text-[13px] font-medium text-bone-50"
  }, lang), /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] text-bone-400 group-hover:text-gold-200 transition"
  }, "· ", ver))))));
}
function BibleFeat({
  icon,
  k,
  v
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-ink-700 p-6 flex items-start gap-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-10 h-10 rounded-full border border-gold-500/30 grid place-items-center text-gold-200 shrink-0"
  }, icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-mono text-[10px] tracking-[.22em] uppercase text-gold-300/80"
  }, k), /*#__PURE__*/React.createElement("div", {
    className: "font-display text-[18px] leading-tight text-bone-50 mt-1"
  }, v)));
}
window.Bible = Bible;