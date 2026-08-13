import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
function Contact() {
  const [tab, setTab] = React.useState("contact"); // contact | priere

  return /*#__PURE__*/_jsxDEV("section", {
    id: "contact",
    "data-screen-label": "Contact",
    className: "sec-light relative bg-ink-800 py-28 md:py-40",
    children: [/*#__PURE__*/_jsxDEV("div", {
      className: "max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-14",
      children: [/*#__PURE__*/_jsxDEV(Reveal, {
        className: "grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-14",
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "lg:col-span-7",
          children: [/*#__PURE__*/_jsxDEV(Eyebrow, {
            className: "mb-5",
            children: "Contact · Visite · Prière"
          }, void 0, false), /*#__PURE__*/_jsxDEV(Heading, {
            children: ["Venez tels que vous êtes —", /*#__PURE__*/_jsxDEV("br", {}, void 0, false), /*#__PURE__*/_jsxDEV("em", {
              className: "italic text-gold-200 font-light",
              children: "repartez transformés."
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          className: "lg:col-span-5 text-[15px] text-bone-300 leading-relaxed",
          children: "Que ce soit votre première visite, une demande de prière ou simplement une question, écrivez-nous. Une équipe répond sous 24 heures."
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        className: "grid lg:grid-cols-12 gap-8",
        children: [/*#__PURE__*/_jsxDEV(Reveal, {
          className: "lg:col-span-7",
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: "relative aspect-[16/10] overflow-hidden bg-ink-700 border border-white/10",
            children: [/*#__PURE__*/_jsxDEV(MapPlaceholder, {}, void 0, false), /*#__PURE__*/_jsxDEV("div", {
              className: "absolute top-5 left-5 right-5 sm:right-auto sm:max-w-xs bg-ink-900/95 backdrop-blur-md border border-gold-500/30 p-5 glow",
              children: [/*#__PURE__*/_jsxDEV("div", {
                className: "font-mono text-[10px] tracking-[.22em] uppercase text-gold-300/80 mb-2",
                children: "Notre adresse · Toujours ouvert"
              }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
                className: "font-display text-[20px] leading-tight text-bone-50",
                children: "C.E. Parole Éternelle Ngiri-Ngiri"
              }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
                className: "mt-2 text-[13px] text-bone-200 leading-relaxed",
                children: ["2 bis & 4, Avenue Monkoto", /*#__PURE__*/_jsxDEV("br", {}, void 0, false), "C/Ngiri-Ngiri · Réf. Marché Kale", /*#__PURE__*/_jsxDEV("br", {}, void 0, false), "Kinshasa · RDC"]
              }, void 0, true), /*#__PURE__*/_jsxDEV("a", {
                href: "https://www.google.com/maps/search/?api=1&query=Av.+Monkoto+Ngiri-Ngiri+Kinshasa",
                target: "_blank",
                rel: "noopener",
                className: "mt-4 inline-flex items-center gap-2 text-[12px] font-mono tracking-[.18em] uppercase text-gold-300 hover:text-gold-200 transition",
                children: ["Itinéraire ", /*#__PURE__*/_jsxDEV(I.ArrowR, {
                  width: "12",
                  height: "12"
                }, void 0, false)]
              }, void 0, true)]
            }, void 0, true)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            className: "grid sm:grid-cols-3 gap-px bg-white/5 border border-white/10 border-t-0",
            children: [/*#__PURE__*/_jsxDEV(Info, {
              icon: /*#__PURE__*/_jsxDEV(I.Calendar, {
                width: "16",
                height: "16"
              }, void 0, false),
              label: "Culte dominical",
              v: "07h30 · 10h00"
            }, void 0, false), /*#__PURE__*/_jsxDEV(Info, {
              icon: /*#__PURE__*/_jsxDEV(I.Bible, {
                width: "16",
                height: "16"
              }, void 0, false),
              label: "Étude biblique",
              v: "Mer. 17h00"
            }, void 0, false), /*#__PURE__*/_jsxDEV(Info, {
              icon: /*#__PURE__*/_jsxDEV(I.Flame, {
                width: "16",
                height: "16"
              }, void 0, false),
              label: "Module de prière",
              v: "Ven. 12h30"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            className: "mt-4 grid sm:grid-cols-3 gap-3",
            children: [/*#__PURE__*/_jsxDEV(ContactChannel, {
              icon: /*#__PURE__*/_jsxDEV(I.Phone, {
                width: "16",
                height: "16"
              }, void 0, false),
              label: "Téléphone",
              v: "+243 897 297 625",
              href: "tel:+243897297625"
            }, void 0, false), /*#__PURE__*/_jsxDEV(ContactChannel, {
              icon: /*#__PURE__*/_jsxDEV(I.Whatsapp, {
                width: "16",
                height: "16"
              }, void 0, false),
              label: "WhatsApp",
              v: "+243 897 297 625",
              href: "https://wa.me/243897297625"
            }, void 0, false), /*#__PURE__*/_jsxDEV(ContactChannel, {
              icon: /*#__PURE__*/_jsxDEV(I.Mail, {
                width: "16",
                height: "16"
              }, void 0, false),
              label: "E-mail",
              v: "paroleternellengiringiri@gmail.com",
              href: "mailto:paroleternellengiringiri@gmail.com"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            className: "mt-3 grid grid-cols-2 sm:grid-cols-4 gap-3",
            children: [/*#__PURE__*/_jsxDEV(ContactChannel, {
              icon: /*#__PURE__*/_jsxDEV(I.YT, {
                width: "16",
                height: "16"
              }, void 0, false),
              label: "YouTube",
              v: "Parole Eternelle Ngiri-ngiri TV",
              href: "https://www.youtube.com/@paroleeternellengiri-ngiri"
            }, void 0, false), /*#__PURE__*/_jsxDEV(ContactChannel, {
              icon: /*#__PURE__*/_jsxDEV(I.FB, {
                width: "16",
                height: "16"
              }, void 0, false),
              label: "Facebook",
              v: "cepeng",
              href: "https://www.facebook.com/cepeng/"
            }, void 0, false), /*#__PURE__*/_jsxDEV(ContactChannel, {
              icon: /*#__PURE__*/_jsxDEV(I.TT, {
                width: "16",
                height: "16"
              }, void 0, false),
              label: "TikTok",
              v: "@paroleternellengiringiri",
              href: "https://www.tiktok.com/@paroleternellengiringiri"
            }, void 0, false), /*#__PURE__*/_jsxDEV(ContactChannel, {
              icon: /*#__PURE__*/_jsxDEV(I.IG, {
                width: "16",
                height: "16"
              }, void 0, false),
              label: "Instagram",
              v: "@paroleternellengiringiri",
              href: "https://www.instagram.com/paroleternellengiringiri/"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true), /*#__PURE__*/_jsxDEV(Reveal, {
          className: "lg:col-span-5",
          children: /*#__PURE__*/_jsxDEV("div", {
            className: "bg-ink-700 border border-white/10 p-7 md:p-9",
            children: [/*#__PURE__*/_jsxDEV("div", {
              className: "flex border-b border-white/10 mb-7 gap-6",
              children: [["contact", "Écrire un message"], ["priere", "Demande de prière"]].map(([k, label]) => /*#__PURE__*/_jsxDEV("button", {
                onClick: () => setTab(k),
                className: `relative pb-3 text-[14px] font-medium transition ${tab === k ? "text-bone-50" : "text-bone-400 hover:text-bone-200"}`,
                children: [label, tab === k && /*#__PURE__*/_jsxDEV("span", {
                  className: "absolute -bottom-px left-0 right-0 h-[2px] bg-gold-300"
                }, void 0, false)]
              }, k, true))
            }, void 0, false), tab === "contact" ? /*#__PURE__*/_jsxDEV(FormContact, {}, void 0, false) : /*#__PURE__*/_jsxDEV(FormPrayer, {}, void 0, false)]
          }, void 0, true)
        }, void 0, false)]
      }, void 0, true)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("a", {
      href: "https://wa.me/243897297625?text=Bonjour%20Parole%20%C3%89ternelle%20%F0%9F%99%8F",
      target: "_blank",
      rel: "noopener",
      "aria-label": "WhatsApp",
      className: "fixed right-6 z-40 w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white grid place-items-center shadow-2xl transition hover:scale-105",
      style: {
        bottom: "calc(1.5rem + env(safe-area-inset-bottom, 0px))"
      },
      children: /*#__PURE__*/_jsxDEV(I.Whatsapp, {
        width: "22",
        height: "22"
      }, void 0, false)
    }, void 0, false)]
  }, void 0, true);
}
function MapPlaceholder() {
  // Stylized abstract Kinshasa-ish map with grid + pin
  return /*#__PURE__*/_jsxDEV("div", {
    className: "absolute inset-0",
    children: [/*#__PURE__*/_jsxDEV("div", {
      className: "absolute inset-0",
      style: {
        background: "linear-gradient(135deg, #0a0c10 0%, #11141a 50%, #0a0b10 100%)"
      }
    }, void 0, false), /*#__PURE__*/_jsxDEV("svg", {
      className: "absolute inset-0 w-full h-full opacity-25",
      preserveAspectRatio: "none",
      children: [/*#__PURE__*/_jsxDEV("defs", {
        children: /*#__PURE__*/_jsxDEV("pattern", {
          id: "g",
          width: "50",
          height: "50",
          patternUnits: "userSpaceOnUse",
          children: /*#__PURE__*/_jsxDEV("path", {
            d: "M 50 0 L 0 0 0 50",
            fill: "none",
            stroke: "#cba255",
            strokeWidth: "0.4"
          }, void 0, false)
        }, void 0, false)
      }, void 0, false), /*#__PURE__*/_jsxDEV("rect", {
        width: "100%",
        height: "100%",
        fill: "url(#g)"
      }, void 0, false)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("svg", {
      className: "absolute inset-0 w-full h-full",
      viewBox: "0 0 800 500",
      preserveAspectRatio: "none",
      children: [/*#__PURE__*/_jsxDEV("g", {
        stroke: "#cba255",
        strokeOpacity: ".35",
        fill: "none",
        strokeWidth: "1.5",
        children: [/*#__PURE__*/_jsxDEV("path", {
          d: "M0 80 Q300 100 500 60 T800 90"
        }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
          d: "M0 200 Q200 230 450 210 T800 240"
        }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
          d: "M0 340 Q250 360 480 330 T800 360"
        }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
          d: "M120 0 Q140 180 100 320 T130 500"
        }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
          d: "M340 0 Q360 200 320 350 T370 500"
        }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
          d: "M580 0 Q600 200 560 340 T610 500"
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("g", {
        stroke: "#cba255",
        strokeOpacity: ".15",
        fill: "none",
        children: [/*#__PURE__*/_jsxDEV("path", {
          d: "M0 130 L800 150"
        }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
          d: "M0 270 L800 290"
        }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
          d: "M0 410 L800 430"
        }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
          d: "M220 0 L240 500"
        }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
          d: "M460 0 L480 500"
        }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
          d: "M700 0 L720 500"
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("g", {
        fill: "#a3a2a0",
        fontFamily: "JetBrains Mono",
        fontSize: "9",
        letterSpacing: "2",
        children: [/*#__PURE__*/_jsxDEV("text", {
          x: "180",
          y: "155",
          opacity: ".55",
          children: "NGIRI-NGIRI"
        }, void 0, false), /*#__PURE__*/_jsxDEV("text", {
          x: "540",
          y: "285",
          opacity: ".4",
          children: "KASA-VUBU"
        }, void 0, false), /*#__PURE__*/_jsxDEV("text", {
          x: "80",
          y: "395",
          opacity: ".4",
          children: "BANDALUNGWA"
        }, void 0, false), /*#__PURE__*/_jsxDEV("text", {
          x: "600",
          y: "80",
          opacity: ".4",
          children: "LINGWALA"
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("g", {
        transform: "translate(360 220)",
        children: [/*#__PURE__*/_jsxDEV("circle", {
          r: "60",
          fill: "#cba255",
          opacity: ".08",
          children: [/*#__PURE__*/_jsxDEV("animate", {
            attributeName: "r",
            values: "40;80;40",
            dur: "3s",
            repeatCount: "indefinite"
          }, void 0, false), /*#__PURE__*/_jsxDEV("animate", {
            attributeName: "opacity",
            values: ".12;.02;.12",
            dur: "3s",
            repeatCount: "indefinite"
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("circle", {
          r: "22",
          fill: "#cba255",
          opacity: ".18"
        }, void 0, false), /*#__PURE__*/_jsxDEV("circle", {
          r: "10",
          fill: "#d8b66a"
        }, void 0, false), /*#__PURE__*/_jsxDEV("circle", {
          r: "3",
          fill: "#0a0a0c"
        }, void 0, false)]
      }, void 0, true)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
      className: "absolute bottom-5 right-5 w-12 h-12 rounded-full border border-gold-500/30 grid place-items-center font-mono text-[10px] tracking-[.22em] text-gold-300/70",
      children: "N"
    }, void 0, false)]
  }, void 0, true);
}
function Info({
  icon,
  label,
  v
}) {
  return /*#__PURE__*/_jsxDEV("div", {
    className: "bg-ink-700 p-5 flex items-center gap-4",
    children: [/*#__PURE__*/_jsxDEV("span", {
      className: "w-9 h-9 rounded-full border border-gold-500/30 grid place-items-center text-gold-200 shrink-0",
      children: icon
    }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "font-mono text-[10px] tracking-[.22em] uppercase text-bone-400",
        children: label
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        className: "font-display text-[20px] leading-none text-bone-50 mt-1 tick",
        children: v
      }, void 0, false)]
    }, void 0, true)]
  }, void 0, true);
}
function ContactChannel({
  icon,
  label,
  v,
  href = "#"
}) {
  return /*#__PURE__*/_jsxDEV("a", {
    href: href,
    target: href.startsWith("http") ? "_blank" : undefined,
    rel: "noopener",
    className: "group bg-ink-700 border border-white/10 p-4 flex items-center gap-3 lift hover:border-gold-500/30",
    children: [/*#__PURE__*/_jsxDEV("span", {
      className: "w-9 h-9 rounded-full bg-ink-900 grid place-items-center text-gold-200 shrink-0 group-hover:bg-gold-500/10 transition",
      children: icon
    }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
      className: "min-w-0",
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "font-mono text-[9px] tracking-[.22em] uppercase text-bone-400",
        children: label
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        className: "text-[13px] text-bone-50 truncate",
        children: v
      }, void 0, false)]
    }, void 0, true)]
  }, void 0, true);
}
function FormContact() {
  const submit = e => {
    e.preventDefault();
    const f = e.target.elements;
    window.location.href = "mailto:paroleternellengiringiri@gmail.com?subject=" + encodeURIComponent("[Site] " + (f.sujet.value || "Message")) + "&body=" + encodeURIComponent("Nom : " + f.nom.value + "\nE-mail : " + f.email.value + "\n\n" + f.message.value);
  };
  return /*#__PURE__*/_jsxDEV("form", {
    className: "space-y-4",
    onSubmit: submit,
    children: [/*#__PURE__*/_jsxDEV(Field, {
      name: "nom",
      label: "Nom",
      placeholder: "Jean Mboyo"
    }, void 0, false), /*#__PURE__*/_jsxDEV(Field, {
      name: "email",
      label: "E-mail",
      type: "email",
      placeholder: "jean@email.cd"
    }, void 0, false), /*#__PURE__*/_jsxDEV(Field, {
      name: "sujet",
      label: "Sujet",
      placeholder: "Première visite, baptême, info…"
    }, void 0, false), /*#__PURE__*/_jsxDEV(FieldArea, {
      name: "message",
      label: "Message",
      placeholder: "Dites-nous comment nous pouvons vous accueillir…"
    }, void 0, false), /*#__PURE__*/_jsxDEV("label", {
      className: "flex items-start gap-2.5 text-[12px] text-bone-400 cursor-pointer",
      children: [/*#__PURE__*/_jsxDEV("input", {
        type: "checkbox",
        className: "mt-0.5 accent-[#d8b66a]"
      }, void 0, false), "Je souhaite recevoir le programme mensuel par e-mail."]
    }, void 0, true), /*#__PURE__*/_jsxDEV(Btn, {
      variant: "gold",
      type: "submit",
      className: "!w-full justify-center",
      children: "Envoyer le message"
    }, void 0, false)]
  }, void 0, true);
}
function FormPrayer() {
  const submit = e => {
    e.preventDefault();
    const f = e.target.elements;
    window.location.href = "mailto:paroleternellengiringiri@gmail.com?subject=" + encodeURIComponent("[Confidentiel] Demande de prière") + "&body=" + encodeURIComponent("Prénom : " + f.prenom.value + "\nQuartier : " + f.quartier.value + "\n\nDemande :\n" + f.demande.value);
  };
  return /*#__PURE__*/_jsxDEV("form", {
    className: "space-y-4",
    onSubmit: submit,
    children: [/*#__PURE__*/_jsxDEV("div", {
      className: "px-4 py-3 bg-gold-500/[.06] border border-gold-500/20 text-[12px] text-bone-200 leading-relaxed",
      children: ["Toutes les demandes de prière sont ", /*#__PURE__*/_jsxDEV("span", {
        className: "text-gold-200",
        children: "strictement confidentielles"
      }, void 0, false), ". L'équipe d'intercession prie pour vous chaque vendredi (Module de prière · 12h30) et le pasteur reçoit personnellement chaque mardi de 10h00 à 17h00."]
    }, void 0, true), /*#__PURE__*/_jsxDEV(Field, {
      name: "prenom",
      label: "Prénom (ou anonyme)",
      placeholder: "Grâce"
    }, void 0, false), /*#__PURE__*/_jsxDEV(Field, {
      name: "quartier",
      label: "Quartier (optionnel)",
      placeholder: "Ngiri-Ngiri"
    }, void 0, false), /*#__PURE__*/_jsxDEV(FieldArea, {
      name: "demande",
      label: "Votre demande",
      placeholder: "Partagez ce qui est sur votre cœur…"
    }, void 0, false), /*#__PURE__*/_jsxDEV("label", {
      className: "flex items-start gap-2.5 text-[12px] text-bone-400 cursor-pointer",
      children: [/*#__PURE__*/_jsxDEV("input", {
        type: "checkbox",
        className: "mt-0.5 accent-[#d8b66a]"
      }, void 0, false), "Je souhaite être recontacté(e) par un membre de l'équipe pastorale."]
    }, void 0, true), /*#__PURE__*/_jsxDEV(Btn, {
      variant: "gold",
      type: "submit",
      className: "!w-full justify-center",
      children: [/*#__PURE__*/_jsxDEV(I.Flame, {
        width: "14",
        height: "14"
      }, void 0, false), " Soumettre à la prière"]
    }, void 0, true)]
  }, void 0, true);
}
function Field({
  label,
  type = "text",
  placeholder,
  name
}) {
  return /*#__PURE__*/_jsxDEV("div", {
    children: [/*#__PURE__*/_jsxDEV("label", {
      className: "font-mono text-[10px] tracking-[.22em] uppercase text-bone-400 block mb-1.5",
      children: label
    }, void 0, false), /*#__PURE__*/_jsxDEV("input", {
      name: name,
      type: type,
      placeholder: placeholder,
      className: "w-full bg-ink-900 border border-white/10 px-4 py-3 text-[14px] text-bone-50 placeholder-bone-400 focus:outline-none focus:border-gold-400 transition"
    }, void 0, false)]
  }, void 0, true);
}
function FieldArea({
  label,
  placeholder,
  name
}) {
  return /*#__PURE__*/_jsxDEV("div", {
    children: [/*#__PURE__*/_jsxDEV("label", {
      className: "font-mono text-[10px] tracking-[.22em] uppercase text-bone-400 block mb-1.5",
      children: label
    }, void 0, false), /*#__PURE__*/_jsxDEV("textarea", {
      name: name,
      rows: "4",
      placeholder: placeholder,
      className: "w-full bg-ink-900 border border-white/10 px-4 py-3 text-[14px] text-bone-50 placeholder-bone-400 focus:outline-none focus:border-gold-400 transition resize-none"
    }, void 0, false)]
  }, void 0, true);
}
window.Contact = Contact;
