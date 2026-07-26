function Donate() {
  const [method, setMethod] = React.useState(0);
  const [amount, setAmount] = React.useState(10000);
  const [purpose, setPurpose] = React.useState("Dîme");
  const methods = [{
    name: "M-Pesa · Vodacom",
    op: "Mobile Money",
    num: "083 361 06 44",
    color: "#e60000"
  }, {
    name: "Orange Money",
    op: "Mobile Money",
    num: "085 100 59 15",
    color: "#ff7900"
  }, {
    name: "Airtel Money",
    op: "Mobile Money",
    num: "098 550 83 43",
    color: "#ed1c24"
  }, {
    name: "Rawbank · USD",
    op: "37e CADC ASBL V/C CEPE NGIRI-NGIRI",
    num: "35101-01039913601-30-USD",
    color: "#0a2563"
  }, {
    name: "Equity BCDC",
    op: "37e CADC · Parole Eternelle Ngiri-ngiri",
    num: "00018000070113471200045",
    color: "#ED1C24"
  }];
  const amounts = [5000, 10000, 25000, 50000, 100000, 200000];
  const purposes = ["Dîme", "Offrande", "Mission", "Bâtiment · Temple", "Aide sociale"];
  return /*#__PURE__*/React.createElement("section", {
    id: "donner",
    "data-screen-label": "Donner",
    className: "relative bg-ink-900 py-28 md:py-40 overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 right-0 w-[600px] h-[600px]",
    style: {
      background: "radial-gradient(circle, rgba(216,182,106,.10), transparent 70%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-14 relative"
  }, /*#__PURE__*/React.createElement(Reveal, {
    className: "grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-16"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    className: "mb-5"
  }, "Donner · Soutenir l'œuvre"), /*#__PURE__*/React.createElement(Heading, null, "Semer dans la ", /*#__PURE__*/React.createElement("em", {
    className: "italic text-gold-200 font-light"
  }, "joie,"), /*#__PURE__*/React.createElement("br", null), "moissonner dans la ", /*#__PURE__*/React.createElement("em", {
    className: "italic text-gold-200 font-light"
  }, "grâce."))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-display italic text-[22px] leading-snug text-bone-100"
  }, "« Que chacun donne comme il l'a résolu en son cœur, sans tristesse ni contrainte ; car Dieu aime celui qui donne avec joie. »"), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 font-mono text-[10px] tracking-[.22em] uppercase text-gold-300/80"
  }, "— 2 Corinthiens 9 : 7"))), /*#__PURE__*/React.createElement(Reveal, {
    className: "grid lg:grid-cols-12 gap-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7 bg-ink-700 border border-white/10 p-7 md:p-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-7"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-mono text-[10px] tracking-[.22em] uppercase text-bone-400 mb-3"
  }, "1 · Affectation"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2"
  }, purposes.map(p => /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => setPurpose(p),
    className: `px-4 py-2 text-[13px] rounded-full border transition ${purpose === p ? "bg-gold-300 text-ink-900 border-gold-300" : "border-white/15 text-bone-200 hover:border-gold-400/50"}`
  }, p)))), /*#__PURE__*/React.createElement("div", {
    className: "mb-7"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-mono text-[10px] tracking-[.22em] uppercase text-bone-400 mb-3"
  }, "2 · Montant (FC)"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-3 sm:grid-cols-6 gap-2 mb-3"
  }, amounts.map(a => /*#__PURE__*/React.createElement("button", {
    key: a,
    onClick: () => setAmount(a),
    className: `py-3 text-[13px] border transition tick ${amount === a ? "bg-bone-50 text-ink-900 border-bone-50" : "border-white/10 text-bone-200 hover:border-white/30"}`
  }, a.toLocaleString('fr-FR')))), /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: amount,
    onChange: e => setAmount(+e.target.value || 0),
    className: "w-full bg-ink-900 border border-white/10 rounded-none px-5 py-4 text-[18px] tick text-bone-50 focus:outline-none focus:border-gold-400"
  }), /*#__PURE__*/React.createElement("span", {
    className: "absolute right-5 top-1/2 -translate-y-1/2 font-mono text-[12px] tracking-[.18em] uppercase text-bone-400"
  }, "Francs Congolais")), /*#__PURE__*/React.createElement("div", {
    className: "mt-2 text-[12px] text-bone-400"
  }, "≈ ", (amount / 2800).toFixed(2), " USD au cours indicatif")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-mono text-[10px] tracking-[.22em] uppercase text-bone-400 mb-3"
  }, "3 · Mode de paiement"), /*#__PURE__*/React.createElement("div", {
    className: "grid sm:grid-cols-2 gap-2"
  }, methods.map((m, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => setMethod(i),
    className: `text-left p-4 border transition ${method === i ? "border-gold-400 bg-gold-500/[.06]" : "border-white/10 hover:border-white/25"}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-2.5 h-2.5 rounded-full",
    style: {
      background: m.color
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "font-medium text-bone-50"
  }, m.name)), /*#__PURE__*/React.createElement("div", {
    className: "mt-1.5 text-[12px] text-bone-400"
  }, m.op), /*#__PURE__*/React.createElement("div", {
    className: "mt-0.5 font-mono text-[12px] text-bone-200 tick"
  }, m.num))))), /*#__PURE__*/React.createElement("div", {
    className: "mt-8 flex flex-wrap items-center gap-4"
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "gold",
    href: `https://wa.me/243897297625?text=${encodeURIComponent(`Bonjour Parole Éternelle 🙏 Je confirme mon don :\n• Affectation : ${purpose}\n• Montant : ${amount.toLocaleString('fr-FR')} FC\n• Moyen : ${methods[method].name} — ${methods[method].num}\nMerci de me confirmer la réception.`)}`
  }, "Confirmer · ", amount.toLocaleString('fr-FR'), " FC"), /*#__PURE__*/React.createElement("span", {
    className: "text-[12px] text-bone-400"
  }, "Confirmation par WhatsApp · Reçu envoyé par e-mail"))), /*#__PURE__*/React.createElement("aside", {
    className: "lg:col-span-5 flex flex-col gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-ink-700 border border-gold-500/30 p-7 glow"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    className: "mb-3"
  }, "Transparence"), /*#__PURE__*/React.createElement("div", {
    className: "font-display text-[28px] leading-tight text-bone-50"
  }, "Où vont vos dons"), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 space-y-4"
  }, /*#__PURE__*/React.createElement(Bar, {
    label: "Mission & évangélisation",
    value: 32
  }), /*#__PURE__*/React.createElement(Bar, {
    label: "Pastorat & enseignement",
    value: 24
  }), /*#__PURE__*/React.createElement(Bar, {
    label: "Louange & équipement",
    value: 18
  }), /*#__PURE__*/React.createElement(Bar, {
    label: "Bâtiment & charges",
    value: 16
  }), /*#__PURE__*/React.createElement(Bar, {
    label: "Aide sociale",
    value: 10
  })), /*#__PURE__*/React.createElement("a", {
    href: "https://www.facebook.com/cepeng/",
    target: "_blank",
    rel: "noopener",
    className: "mt-6 inline-flex items-center gap-2 text-[12px] font-mono tracking-[.18em] uppercase text-gold-300 hover:text-gold-200 transition"
  }, "Rapport annuel 2025 ", /*#__PURE__*/React.createElement(I.ArrowR, {
    width: "12",
    height: "12"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "bg-ink-700 border border-white/10 p-7"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    className: "mb-3"
  }, "Engagement mensuel"), /*#__PURE__*/React.createElement("p", {
    className: "text-[14px] text-bone-300 leading-relaxed"
  }, "Devenez « Partenaire de la Vision » : un don mensuel régulier pour soutenir la mission à long terme."), /*#__PURE__*/React.createElement(Btn, {
    variant: "ghost",
    className: "mt-5",
    href: `https://wa.me/243897297625?text=${encodeURIComponent("Bonjour Parole Éternelle 🙏 Je souhaite devenir « Partenaire de la Vision » avec un don mensuel régulier. Merci de me contacter.")}`
  }, "Devenir partenaire"))))));
}
function Bar({
  label,
  value
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between text-[13px] text-bone-200 mb-1.5"
  }, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-bone-400 tick"
  }, value, "%")), /*#__PURE__*/React.createElement("div", {
    className: "h-1.5 bg-white/5 rounded-full overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-full bg-gold-300",
    style: {
      width: value + "%"
    }
  })));
}
window.Donate = Donate;