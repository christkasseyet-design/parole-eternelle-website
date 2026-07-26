function Hero({
  showLive = true,
  variant = "cinematic"
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "accueil",
    "data-screen-label": "Accueil",
    className: "relative w-full overflow-hidden bg-ink-900"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative min-h-[100svh] w-full flex flex-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0",
    style: {
      transform: "scale(1.02)"
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: "hero-bg",
    shape: "rect",
    src: "assets/photos/culte-assemblee-2.jpg",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      display: "block"
    },
    placeholder: "Photo de fond · culte dominical"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 z-[2] pointer-events-none",
    style: {
      background: "linear-gradient(180deg, rgba(6,7,10,.62) 0%, rgba(6,7,10,.24) 38%, rgba(6,7,10,.5) 70%, rgba(6,7,10,.94) 100%), radial-gradient(120% 95% at 50% 32%, transparent 42%, rgba(6,7,10,.55) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "grain"
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 pt-28 pb-20 hero-in"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#jubile",
    className: "group inline-flex items-center gap-2.5 mb-8 px-4 py-1.5 rounded-full border border-gold-300/40 bg-black/30 backdrop-blur-sm hover:border-gold-300/80 transition"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-1.5 h-1.5 rounded-full bg-gold-300"
  }), /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-[10px] sm:text-[11px] tracking-[.24em] uppercase text-gold-200"
  }, "Jubilé 2026 · L'année jubilaire")), /*#__PURE__*/React.createElement("h1", {
    className: "font-display text-[clamp(42px,6.5vw,96px)] leading-[1.02] text-white max-w-5xl",
    style: {
      textShadow: "0 2px 30px rgba(0,0,0,.5)"
    }
  }, "Bienvenue à la Parole Éternelle"), /*#__PURE__*/React.createElement("p", {
    className: "mt-6 text-[17px] sm:text-[19px] text-white/90 max-w-2xl",
    style: {
      textShadow: "0 1px 12px rgba(0,0,0,.6)"
    }
  }, "Une église vivante pour une génération transformée — Ngiri-Ngiri, Kinshasa"), /*#__PURE__*/React.createElement("div", {
    className: "mt-9 flex flex-wrap items-center justify-center gap-3"
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "gold",
    href: "#programmes"
  }, "Programme des cultes"), /*#__PURE__*/React.createElement("a", {
    href: "#a-propos",
    className: "inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm text-white text-[14px] font-semibold hover:bg-white/10 hover:border-white/60 transition"
  }, "Découvrir l'église")), showLive && /*#__PURE__*/React.createElement("div", {
    className: "mt-10 inline-flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "relative flex h-2 w-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75 animate-ping"
  }), /*#__PURE__*/React.createElement("span", {
    className: "relative inline-flex rounded-full h-2 w-2 bg-red-500"
  })), /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-[10px] sm:text-[11px] tracking-[.2em] uppercase text-white/80"
  }, "Dimanche · 07h30 & 10h00 · En direct"))), /*#__PURE__*/React.createElement("a", {
    href: "#welcome",
    className: "relative z-10 mx-auto mb-5 flex flex-col items-center gap-2 text-white/70 hover:text-gold-200 transition"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-[9px] tracking-[.32em] uppercase"
  }, "Découvrir"), /*#__PURE__*/React.createElement("span", {
    className: "w-px h-8 bg-gradient-to-b from-white/0 to-white/80 animate-pulse"
  }))), /*#__PURE__*/React.createElement("div", {
    id: "welcome",
    className: "sec-light relative bg-ink-800 border-y border-white/10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-[1480px] mx-auto px-6 sm:px-10 lg:px-14 py-14 sm:py-20 grid lg:grid-cols-12 gap-10 items-start"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    className: "mb-5"
  }, "Bienvenue à Parole Éternelle"), /*#__PURE__*/React.createElement("p", {
    className: "font-display text-[28px] sm:text-[36px] md:text-[44px] leading-[1.1] text-bone-50 max-w-3xl"
  }, "Que tu sois ", /*#__PURE__*/React.createElement("em", {
    className: "italic text-gold-200 font-light"
  }, "chercheur"), ", étudiant, en couple, parent,", /*#__PURE__*/React.createElement("br", {
    className: "hidden sm:block"
  }), " ou que tu rencontres Christ pour la première fois — ", /*#__PURE__*/React.createElement("em", {
    className: "italic text-gold-200 font-light"
  }, "il y a une place pour toi.")), /*#__PURE__*/React.createElement("div", {
    className: "mt-8 flex flex-wrap gap-3"
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "gold",
    href: "#a-propos"
  }, "Apprendre à nous connaître"), /*#__PURE__*/React.createElement(Btn, {
    variant: "ghost",
    href: "#programmes",
    icon: false
  }, "Voir nos cultes"))), /*#__PURE__*/React.createElement("aside", {
    className: "lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4"
  }, /*#__PURE__*/React.createElement(Pill, {
    kicker: "Dimanche",
    big: "07:30",
    caption: "Culte · 1ᵉʳ service"
  }), /*#__PURE__*/React.createElement(Pill, {
    kicker: "Dimanche",
    big: "10:00",
    caption: "Culte · 2ᵉ service"
  }), /*#__PURE__*/React.createElement(Pill, {
    kicker: "Mercredi",
    big: "17:00",
    caption: "Étude biblique"
  }), /*#__PURE__*/React.createElement(Pill, {
    kicker: "Vendredi",
    big: "17:00",
    caption: "Vendredi Ngomba"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "relative overflow-hidden border-b border-white/10 py-4",
    style: {
      background: "rgba(244,194,56,.05)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex marq whitespace-nowrap gap-12 text-gold-200 font-display text-[20px] sm:text-[24px]"
  }, Array.from({
    length: 4
  }).map((_, n) => /*#__PURE__*/React.createElement("span", {
    key: n,
    className: "flex items-center gap-12"
  }, /*#__PURE__*/React.createElement("span", {
    className: "italic"
  }, "Jubilé 2026"), /*#__PURE__*/React.createElement("span", {
    className: "text-gold-300/40"
  }, "✦"), /*#__PURE__*/React.createElement("span", null, "Une église vivante"), /*#__PURE__*/React.createElement("span", {
    className: "text-gold-300/40"
  }, "✦"), /*#__PURE__*/React.createElement("span", null, "Une génération transformée"), /*#__PURE__*/React.createElement("span", {
    className: "text-gold-300/40"
  }, "✦"), /*#__PURE__*/React.createElement("span", null, "Dimanche 07h30 & 10h00"), /*#__PURE__*/React.createElement("span", {
    className: "text-gold-300/40"
  }, "✦"))))));
}
function Pill({
  kicker,
  big,
  caption
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-ink-700 border border-white/10 p-5 flex flex-col gap-1 hover:border-gold-400/40 transition"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-mono text-[9px] tracking-[.28em] uppercase text-gold-300"
  }, kicker), /*#__PURE__*/React.createElement("div", {
    className: "font-display text-[36px] sm:text-[44px] leading-none text-bone-50 tick"
  }, big), /*#__PURE__*/React.createElement("div", {
    className: "text-[12px] text-bone-300"
  }, caption));
}
window.Hero = Hero;