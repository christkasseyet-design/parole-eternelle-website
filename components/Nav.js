function Nav() {
  const SectionNavRow = typeof window !== "undefined" && window.SectionNav || null;
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  // Barre compacte + masquage automatique : on libère l'écran quand le
  // visiteur descend, la navigation revient dès qu'il remonte.
  React.useEffect(() => {
    const root = document.documentElement;
    let last = window.scrollY;
    let ticking = false;
    const update = () => {
      ticking = false;
      const y = window.scrollY;
      const past = y > window.innerHeight * 0.75;
      setScrolled(past);
      root.classList.toggle("nav-compact", past);

      // Masquer seulement en descendant, hors du Hero et hors menu ouvert.
      const goingDown = y > last + 6;
      const goingUp = y < last - 6;
      if (!past || open) {
        root.classList.remove("nav-hidden");
      } else if (goingDown) {
        root.classList.add("nav-hidden");
      } else if (goingUp) {
        root.classList.remove("nav-hidden");
      }
      last = y;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      root.classList.remove("nav-compact", "nav-hidden");
    };
  }, [open]);

  // Fermer avec Échap + bloquer le défilement quand le menu est ouvert.
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  // Menu complet, regroupé — remplace l'ancienne rangée de liens en haut.
  const groups = [{
    title: "L'église",
    links: [["Accueil", "#accueil"], ["À propos", "#a-propos"], ["Ministères", "#communaute"], ["Vie d'église", "#vie"], ["Galerie", "#galerie"]]
  }, {
    title: "La Parole",
    links: [["Programme des cultes", "#programmes"], ["Prédications", "predications.html"], ["Médias & vidéos", "#medias"], ["Bible", "bible.html"], ["Concours biblique", "concours.html"]]
  }, {
    title: "Participer",
    links: [["Jubilé 2026", "#jubile"], ["Projet du temple", "#temple"], ["Faire un don", "#donner"], ["Nous contacter", "#contact"]]
  }];
  const socials = [["Facebook", "https://www.facebook.com/cepeng/"], ["YouTube", "https://www.youtube.com/channel/UCPmV9FMnv9imGbnxJdFiMcw"], ["TikTok", "https://www.tiktok.com/@paroleternellengiringiri"]];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    className: `fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "nav-scrolled" : ""}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-bar max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-14 flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#accueil",
    className: "flex items-center gap-3.5 group"
  }, /*#__PURE__*/React.createElement(Logo, null), /*#__PURE__*/React.createElement("div", {
    className: "nav-title font-display tracking-tight text-bone-50 leading-none"
  }, "Parole Éternelle")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#donner",
    className: "hidden sm:inline-flex items-center px-6 py-2.5 rounded-full bg-gold-300 text-ink-900 text-[13px] font-bold uppercase tracking-[.08em] hover:bg-gold-200 transition"
  }, "Donation"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(!open),
    "aria-label": "Menu",
    "aria-expanded": open,
    className: "nav-burger w-11 h-11 grid place-items-center rounded-full border border-white/15 text-bone-50 hover:border-gold-300 hover:text-gold-200 transition"
  }, open ? /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18"
  })) : /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "19",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 7h16M4 12h16M4 17h16"
  }))))), SectionNavRow ? /*#__PURE__*/React.createElement(SectionNavRow, null) : null), /*#__PURE__*/React.createElement("div", {
    className: `nav-menu ${open ? "is-open" : ""}`,
    onClick: () => setOpen(false)
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-menu-inner",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-14"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-9"
  }, groups.map(g => /*#__PURE__*/React.createElement("div", {
    key: g.title
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow mb-5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), g.title), /*#__PURE__*/React.createElement("ul", {
    className: "space-y-1"
  }, g.links.map(([label, href]) => /*#__PURE__*/React.createElement("li", {
    key: href
  }, /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: () => setOpen(false),
    className: "nav-link"
  }, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 12h16M14 6l6 6-6 6"
  }))))))))), /*#__PURE__*/React.createElement("div", {
    className: "mt-10 pt-7 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-5"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#donner",
    onClick: () => setOpen(false),
    className: "inline-flex items-center justify-center px-7 py-3 rounded-full bg-gold-300 text-ink-900 text-[13px] font-bold uppercase tracking-[.08em] hover:bg-gold-200 transition"
  }, "Faire un don"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2.5 flex-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-[10px] tracking-[.22em] uppercase text-bone-400 mr-1"
  }, "Suivez-nous"), socials.map(([label, href]) => /*#__PURE__*/React.createElement("a", {
    key: label,
    href: href,
    target: "_blank",
    rel: "noopener",
    className: "px-3.5 py-1.5 rounded-full border border-white/15 text-[12px] text-bone-200 hover:border-gold-300 hover:text-gold-200 transition"
  }, label)))), /*#__PURE__*/React.createElement("div", {
    className: "mt-7 text-[12px] text-bone-400 leading-relaxed"
  }, "2 bis & 4, Av. Monkoto · C/Ngiri-Ngiri, Kinshasa · Cultes dimanche 07h30 & 10h00")))));
}
function Logo() {
  return /*#__PURE__*/React.createElement("image-slot", {
    id: "church-logo",
    shape: "circle",
    src: "assets/logo-parole-eternelle.jpg",
    style: {
      display: "inline-block"
    },
    placeholder: "Logo"
  });
}
window.Nav = Nav;
window.Logo = Logo;