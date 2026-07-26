function Contact() {
  const [tab, setTab] = React.useState("contact"); // contact | priere

  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    "data-screen-label": "Contact",
    className: "sec-light relative bg-ink-800 py-28 md:py-40"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-14"
  }, /*#__PURE__*/React.createElement(Reveal, {
    className: "grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-14"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    className: "mb-5"
  }, "Contact · Visite · Prière"), /*#__PURE__*/React.createElement(Heading, null, "Venez tels que vous êtes —", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    className: "italic text-gold-200 font-light"
  }, "repartez transformés."))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5 text-[15px] text-bone-300 leading-relaxed"
  }, "Que ce soit votre première visite, une demande de prière ou simplement une question, écrivez-nous. Une équipe répond sous 24 heures.")), /*#__PURE__*/React.createElement("div", {
    className: "grid lg:grid-cols-12 gap-8"
  }, /*#__PURE__*/React.createElement(Reveal, {
    className: "lg:col-span-7"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative aspect-[16/10] overflow-hidden bg-ink-700 border border-white/10"
  }, /*#__PURE__*/React.createElement(MapPlaceholder, null), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-5 left-5 right-5 sm:right-auto sm:max-w-xs bg-ink-900/95 backdrop-blur-md border border-gold-500/30 p-5 glow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-mono text-[10px] tracking-[.22em] uppercase text-gold-300/80 mb-2"
  }, "Notre adresse · Toujours ouvert"), /*#__PURE__*/React.createElement("div", {
    className: "font-display text-[20px] leading-tight text-bone-50"
  }, "C.E. Parole Éternelle Ngiri-Ngiri"), /*#__PURE__*/React.createElement("div", {
    className: "mt-2 text-[13px] text-bone-200 leading-relaxed"
  }, "2 bis & 4, Avenue Monkoto", /*#__PURE__*/React.createElement("br", null), "C/Ngiri-Ngiri · Réf. Marché Kale", /*#__PURE__*/React.createElement("br", null), "Kinshasa · RDC"), /*#__PURE__*/React.createElement("a", {
    href: "https://www.google.com/maps/search/?api=1&query=Av.+Monkoto+Ngiri-Ngiri+Kinshasa",
    target: "_blank",
    rel: "noopener",
    className: "mt-4 inline-flex items-center gap-2 text-[12px] font-mono tracking-[.18em] uppercase text-gold-300 hover:text-gold-200 transition"
  }, "Itinéraire ", /*#__PURE__*/React.createElement(I.ArrowR, {
    width: "12",
    height: "12"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "grid sm:grid-cols-3 gap-px bg-white/5 border border-white/10 border-t-0"
  }, /*#__PURE__*/React.createElement(Info, {
    icon: /*#__PURE__*/React.createElement(I.Calendar, {
      width: "16",
      height: "16"
    }),
    label: "Culte dominical",
    v: "07h30 · 10h00"
  }), /*#__PURE__*/React.createElement(Info, {
    icon: /*#__PURE__*/React.createElement(I.Bible, {
      width: "16",
      height: "16"
    }),
    label: "Étude biblique",
    v: "Mer. 17h00"
  }), /*#__PURE__*/React.createElement(Info, {
    icon: /*#__PURE__*/React.createElement(I.Flame, {
      width: "16",
      height: "16"
    }),
    label: "Module de prière",
    v: "Ven. 12h30"
  })), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 grid sm:grid-cols-3 gap-3"
  }, /*#__PURE__*/React.createElement(ContactChannel, {
    icon: /*#__PURE__*/React.createElement(I.Phone, {
      width: "16",
      height: "16"
    }),
    label: "Téléphone",
    v: "+243 897 297 625",
    href: "tel:+243897297625"
  }), /*#__PURE__*/React.createElement(ContactChannel, {
    icon: /*#__PURE__*/React.createElement(I.Whatsapp, {
      width: "16",
      height: "16"
    }),
    label: "WhatsApp",
    v: "+243 897 297 625",
    href: "https://wa.me/243897297625"
  }), /*#__PURE__*/React.createElement(ContactChannel, {
    icon: /*#__PURE__*/React.createElement(I.Mail, {
      width: "16",
      height: "16"
    }),
    label: "E-mail",
    v: "paroleternellengiringiri@gmail.com",
    href: "mailto:paroleternellengiringiri@gmail.com"
  })), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 grid grid-cols-2 sm:grid-cols-4 gap-3"
  }, /*#__PURE__*/React.createElement(ContactChannel, {
    icon: /*#__PURE__*/React.createElement(I.YT, {
      width: "16",
      height: "16"
    }),
    label: "YouTube",
    v: "Parole Eternelle Ngiri-ngiri TV",
    href: "https://www.youtube.com/@paroleeternellengiri-ngiri"
  }), /*#__PURE__*/React.createElement(ContactChannel, {
    icon: /*#__PURE__*/React.createElement(I.FB, {
      width: "16",
      height: "16"
    }),
    label: "Facebook",
    v: "cepeng",
    href: "https://www.facebook.com/cepeng/"
  }), /*#__PURE__*/React.createElement(ContactChannel, {
    icon: /*#__PURE__*/React.createElement(I.TT, {
      width: "16",
      height: "16"
    }),
    label: "TikTok",
    v: "@paroleternellengiringiri",
    href: "https://www.tiktok.com/@paroleternellengiringiri"
  }), /*#__PURE__*/React.createElement(ContactChannel, {
    icon: /*#__PURE__*/React.createElement(I.IG, {
      width: "16",
      height: "16"
    }),
    label: "Instagram",
    v: "@paroleternellengiringiri",
    href: "https://www.instagram.com/paroleternellengiringiri/"
  }))), /*#__PURE__*/React.createElement(Reveal, {
    className: "lg:col-span-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-ink-700 border border-white/10 p-7 md:p-9"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex border-b border-white/10 mb-7 gap-6"
  }, [["contact", "Écrire un message"], ["priere", "Demande de prière"]].map(([k, label]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setTab(k),
    className: `relative pb-3 text-[14px] font-medium transition ${tab === k ? "text-bone-50" : "text-bone-400 hover:text-bone-200"}`
  }, label, tab === k && /*#__PURE__*/React.createElement("span", {
    className: "absolute -bottom-px left-0 right-0 h-[2px] bg-gold-300"
  })))), tab === "contact" ? /*#__PURE__*/React.createElement(FormContact, null) : /*#__PURE__*/React.createElement(FormPrayer, null))))), /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/243897297625?text=Bonjour%20Parole%20%C3%89ternelle%20%F0%9F%99%8F",
    target: "_blank",
    rel: "noopener",
    "aria-label": "WhatsApp",
    className: "fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white grid place-items-center shadow-2xl transition hover:scale-105"
  }, /*#__PURE__*/React.createElement(I.Whatsapp, {
    width: "22",
    height: "22"
  })));
}
function MapPlaceholder() {
  // Stylized abstract Kinshasa-ish map with grid + pin
  return /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0",
    style: {
      background: "linear-gradient(135deg, #0a0c10 0%, #11141a 50%, #0a0b10 100%)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    className: "absolute inset-0 w-full h-full opacity-25",
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
    id: "g",
    width: "50",
    height: "50",
    patternUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 50 0 L 0 0 0 50",
    fill: "none",
    stroke: "#cba255",
    strokeWidth: "0.4"
  }))), /*#__PURE__*/React.createElement("rect", {
    width: "100%",
    height: "100%",
    fill: "url(#g)"
  })), /*#__PURE__*/React.createElement("svg", {
    className: "absolute inset-0 w-full h-full",
    viewBox: "0 0 800 500",
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("g", {
    stroke: "#cba255",
    strokeOpacity: ".35",
    fill: "none",
    strokeWidth: "1.5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 80 Q300 100 500 60 T800 90"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 200 Q200 230 450 210 T800 240"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 340 Q250 360 480 330 T800 360"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M120 0 Q140 180 100 320 T130 500"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M340 0 Q360 200 320 350 T370 500"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M580 0 Q600 200 560 340 T610 500"
  })), /*#__PURE__*/React.createElement("g", {
    stroke: "#cba255",
    strokeOpacity: ".15",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 130 L800 150"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 270 L800 290"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 410 L800 430"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M220 0 L240 500"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M460 0 L480 500"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M700 0 L720 500"
  })), /*#__PURE__*/React.createElement("g", {
    fill: "#a3a2a0",
    fontFamily: "JetBrains Mono",
    fontSize: "9",
    letterSpacing: "2"
  }, /*#__PURE__*/React.createElement("text", {
    x: "180",
    y: "155",
    opacity: ".55"
  }, "NGIRI-NGIRI"), /*#__PURE__*/React.createElement("text", {
    x: "540",
    y: "285",
    opacity: ".4"
  }, "KASA-VUBU"), /*#__PURE__*/React.createElement("text", {
    x: "80",
    y: "395",
    opacity: ".4"
  }, "BANDALUNGWA"), /*#__PURE__*/React.createElement("text", {
    x: "600",
    y: "80",
    opacity: ".4"
  }, "LINGWALA")), /*#__PURE__*/React.createElement("g", {
    transform: "translate(360 220)"
  }, /*#__PURE__*/React.createElement("circle", {
    r: "60",
    fill: "#cba255",
    opacity: ".08"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "r",
    values: "40;80;40",
    dur: "3s",
    repeatCount: "indefinite"
  }), /*#__PURE__*/React.createElement("animate", {
    attributeName: "opacity",
    values: ".12;.02;.12",
    dur: "3s",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("circle", {
    r: "22",
    fill: "#cba255",
    opacity: ".18"
  }), /*#__PURE__*/React.createElement("circle", {
    r: "10",
    fill: "#d8b66a"
  }), /*#__PURE__*/React.createElement("circle", {
    r: "3",
    fill: "#0a0a0c"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-5 right-5 w-12 h-12 rounded-full border border-gold-500/30 grid place-items-center font-mono text-[10px] tracking-[.22em] text-gold-300/70"
  }, "N"));
}
function Info({
  icon,
  label,
  v
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-ink-700 p-5 flex items-center gap-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-9 h-9 rounded-full border border-gold-500/30 grid place-items-center text-gold-200 shrink-0"
  }, icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-mono text-[10px] tracking-[.22em] uppercase text-bone-400"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "font-display text-[20px] leading-none text-bone-50 mt-1 tick"
  }, v)));
}
function ContactChannel({
  icon,
  label,
  v,
  href = "#"
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    target: href.startsWith("http") ? "_blank" : undefined,
    rel: "noopener",
    className: "group bg-ink-700 border border-white/10 p-4 flex items-center gap-3 lift hover:border-gold-500/30"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-9 h-9 rounded-full bg-ink-900 grid place-items-center text-gold-200 shrink-0 group-hover:bg-gold-500/10 transition"
  }, icon), /*#__PURE__*/React.createElement("div", {
    className: "min-w-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-mono text-[9px] tracking-[.22em] uppercase text-bone-400"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "text-[13px] text-bone-50 truncate"
  }, v)));
}
function FormContact() {
  const submit = e => {
    e.preventDefault();
    const f = e.target.elements;
    window.location.href = "mailto:paroleternellengiringiri@gmail.com?subject=" + encodeURIComponent("[Site] " + (f.sujet.value || "Message")) + "&body=" + encodeURIComponent("Nom : " + f.nom.value + "\nE-mail : " + f.email.value + "\n\n" + f.message.value);
  };
  return /*#__PURE__*/React.createElement("form", {
    className: "space-y-4",
    onSubmit: submit
  }, /*#__PURE__*/React.createElement(Field, {
    name: "nom",
    label: "Nom",
    placeholder: "Jean Mboyo"
  }), /*#__PURE__*/React.createElement(Field, {
    name: "email",
    label: "E-mail",
    type: "email",
    placeholder: "jean@email.cd"
  }), /*#__PURE__*/React.createElement(Field, {
    name: "sujet",
    label: "Sujet",
    placeholder: "Première visite, baptême, info…"
  }), /*#__PURE__*/React.createElement(FieldArea, {
    name: "message",
    label: "Message",
    placeholder: "Dites-nous comment nous pouvons vous accueillir…"
  }), /*#__PURE__*/React.createElement("label", {
    className: "flex items-start gap-2.5 text-[12px] text-bone-400 cursor-pointer"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    className: "mt-0.5 accent-[#d8b66a]"
  }), "Je souhaite recevoir le programme mensuel par e-mail."), /*#__PURE__*/React.createElement(Btn, {
    variant: "gold",
    type: "submit",
    className: "!w-full justify-center"
  }, "Envoyer le message"));
}
function FormPrayer() {
  const submit = e => {
    e.preventDefault();
    const f = e.target.elements;
    window.location.href = "mailto:paroleternellengiringiri@gmail.com?subject=" + encodeURIComponent("[Confidentiel] Demande de prière") + "&body=" + encodeURIComponent("Prénom : " + f.prenom.value + "\nQuartier : " + f.quartier.value + "\n\nDemande :\n" + f.demande.value);
  };
  return /*#__PURE__*/React.createElement("form", {
    className: "space-y-4",
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("div", {
    className: "px-4 py-3 bg-gold-500/[.06] border border-gold-500/20 text-[12px] text-bone-200 leading-relaxed"
  }, "Toutes les demandes de prière sont ", /*#__PURE__*/React.createElement("span", {
    className: "text-gold-200"
  }, "strictement confidentielles"), ". L'équipe d'intercession prie pour vous chaque vendredi (Module de prière · 12h30) et le pasteur reçoit personnellement chaque mardi de 10h00 à 17h00."), /*#__PURE__*/React.createElement(Field, {
    name: "prenom",
    label: "Prénom (ou anonyme)",
    placeholder: "Grâce"
  }), /*#__PURE__*/React.createElement(Field, {
    name: "quartier",
    label: "Quartier (optionnel)",
    placeholder: "Ngiri-Ngiri"
  }), /*#__PURE__*/React.createElement(FieldArea, {
    name: "demande",
    label: "Votre demande",
    placeholder: "Partagez ce qui est sur votre cœur…"
  }), /*#__PURE__*/React.createElement("label", {
    className: "flex items-start gap-2.5 text-[12px] text-bone-400 cursor-pointer"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    className: "mt-0.5 accent-[#d8b66a]"
  }), "Je souhaite être recontacté(e) par un membre de l'équipe pastorale."), /*#__PURE__*/React.createElement(Btn, {
    variant: "gold",
    type: "submit",
    className: "!w-full justify-center"
  }, /*#__PURE__*/React.createElement(I.Flame, {
    width: "14",
    height: "14"
  }), " Soumettre à la prière"));
}
function Field({
  label,
  type = "text",
  placeholder,
  name
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "font-mono text-[10px] tracking-[.22em] uppercase text-bone-400 block mb-1.5"
  }, label), /*#__PURE__*/React.createElement("input", {
    name: name,
    type: type,
    placeholder: placeholder,
    className: "w-full bg-ink-900 border border-white/10 px-4 py-3 text-[14px] text-bone-50 placeholder-bone-400 focus:outline-none focus:border-gold-400 transition"
  }));
}
function FieldArea({
  label,
  placeholder,
  name
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "font-mono text-[10px] tracking-[.22em] uppercase text-bone-400 block mb-1.5"
  }, label), /*#__PURE__*/React.createElement("textarea", {
    name: name,
    rows: "4",
    placeholder: placeholder,
    className: "w-full bg-ink-900 border border-white/10 px-4 py-3 text-[14px] text-bone-50 placeholder-bone-400 focus:outline-none focus:border-gold-400 transition resize-none"
  }));
}
window.Contact = Contact;