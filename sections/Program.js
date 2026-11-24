function Program() {
  // Le programme vient de content/events.json (événements datés) et de
  // content/weekly.json (rythme hebdomadaire) — tous deux modifiables depuis /admin.
  const MONTHS = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
  const MON_ABBR = ["JANV", "FÉVR", "MARS", "AVR", "MAI", "JUIN", "JUIL", "AOÛT", "SEPT", "OCT", "NOV", "DÉC"];
  const DAY_ABBR = ["DIM", "LUN", "MAR", "MER", "JEU", "VEN", "SAM"];
  const WEEKDAY = {
    dim: 0,
    lun: 1,
    mar: 2,
    mer: 3,
    jeu: 4,
    ven: 5,
    sam: 6
  };
  const ICONS = {
    "Culte": I.Cross,
    "Prière": I.Flame,
    "Étude": I.Bible,
    "Conférence": I.Mic,
    "Séminaire": I.Mic,
    "Jeunesse": I.Sparkle,
    "Enfants": I.Sparkle,
    "Louange": I.Music,
    "Mission": I.People
  };

  // Filet de sécurité si content/weekly.json est illisible
  const WEEKLY_FALLBACK = {
    weekly: [{
      weekday: "mer",
      time: "17:00",
      title: "Étude biblique",
      category: "Étude",
      duration: "2h00",
      ministers: "Équipe pastorale"
    }, {
      weekday: "ven",
      time: "17:00",
      title: "Vendredi Ngomba · Soirée de puissance",
      category: "Prière",
      duration: "2h30",
      ministers: "Tous les pasteurs"
    }, {
      weekday: "dim",
      time: "07:30",
      title: "Culte dominical · 1ᵉʳ service",
      category: "Culte",
      duration: "2h00",
      ministers: "Équipe pastorale"
    }, {
      weekday: "dim",
      time: "10:00",
      title: "Culte dominical · 2ᵉ service",
      category: "Culte",
      duration: "2h00",
      ministers: "Équipe pastorale"
    }]
  };
  const today = new Date();
  const [cur, setCur] = React.useState({
    y: today.getFullYear(),
    m: today.getMonth()
  });
  const [data, setData] = React.useState(null);
  const [filter, setFilter] = React.useState("Tous");
  const [view, setView] = React.useState("liste"); // liste | calendrier

  React.useEffect(() => {
    let alive = true;
    Promise.all([window.peContent("events", {
      events: []
    }), window.peContent("weekly", WEEKLY_FALLBACK)]).then(([ev, wk]) => {
      if (alive) setData({
        events: ev && ev.events || [],
        weekly: wk && wk.weekly || []
      });
    });
    return () => {
      alive = false;
    };
  }, []);

  // Construit la liste d'un mois : événements datés + rythme hebdomadaire
  // (un événement daté remplace le rythme hebdomadaire au même jour et à la même heure)
  const monthEvents = React.useMemo(() => {
    if (!data) return [];
    const {
      y,
      m
    } = cur;
    const items = [];
    const taken = {};
    const mk = (d, e) => {
      const category = e.category || "Culte";
      return {
        d,
        day: DAY_ABBR[new Date(y, m, d).getDay()],
        h: String(e.time || "").slice(0, 5),
        title: e.title || "",
        tag: category,
        icon: ICONS[category] || I.Cross,
        duration: e.duration || "2h00",
        ministers: e.ministers || "",
        link: e.link || ""
      };
    };
    (data.events || []).forEach(e => {
      const mm = /^(\d{4})-(\d{2})-(\d{2})/.exec(String(e.date || ""));
      if (!mm || +mm[1] !== y || +mm[2] - 1 !== m) return;
      const it = mk(+mm[3], e);
      taken[it.d + "|" + it.h] = true;
      items.push(it);
    });
    const dim = new Date(y, m + 1, 0).getDate();
    (data.weekly || []).forEach(w => {
      const wd = WEEKDAY[String(w.weekday || "").toLowerCase().slice(0, 3)];
      if (wd === undefined) return;
      for (let d = 1; d <= dim; d++) {
        if (new Date(y, m, d).getDay() !== wd) continue;
        const it = mk(d, w);
        if (taken[it.d + "|" + it.h]) continue;
        items.push(it);
      }
    });
    return items.sort((a, b) => a.d - b.d || a.h.localeCompare(b.h));
  }, [data, cur]);

  // Seulement les catégories présentes ce mois-ci — pas de filtre vide
  const events = monthEvents;
  const filters = ["Tous", ...Array.from(new Set(events.map(e => e.tag)))];
  const activeFilter = filters.includes(filter) ? filter : "Tous";
  const filtered = activeFilter === "Tous" ? events : events.filter(e => e.tag === activeFilter);
  const monthLabel = MONTHS[cur.m] + " " + cur.y;
  const goMonth = delta => {
    setFilter("Tous");
    setCur(({
      y,
      m
    }) => {
      const n = new Date(y, m + delta, 1);
      return {
        y: n.getFullYear(),
        m: n.getMonth()
      };
    });
  };
  const tagColor = t => ({
    "Culte": "text-gold-200 border-gold-500/40 bg-gold-500/[.06]",
    "Prière": "text-rose-200 border-rose-300/30 bg-rose-300/[.04]",
    "Étude": "text-sky-200 border-sky-300/30 bg-sky-300/[.04]",
    "Jeunesse": "text-violet-200 border-violet-300/30 bg-violet-300/[.04]",
    "Louange": "text-gold-200 border-gold-500/40 bg-gold-500/[.06]",
    "Mission": "text-emerald-200 border-emerald-300/30 bg-emerald-300/[.04]",
    "Conférence": "text-gold-200 border-gold-500/40 bg-gold-500/[.06]",
    "Séminaire": "text-gold-200 border-gold-500/40 bg-gold-500/[.06]",
    "Enfants": "text-violet-200 border-violet-300/30 bg-violet-300/[.04]"
  })[t] || "text-gold-200 border-gold-500/40 bg-gold-500/[.06]";

  // Lien « Ajouter au calendrier » — Google Calendar, fuseau Kinshasa
  const gcal = e => {
    const [hh, mm] = (e.h || "10:00").split(":").map(Number);
    const [dh, dmRaw] = String(e.duration).split("h");
    const mins = (parseInt(dh) || 2) * 60 + (parseInt(dmRaw) || 0);
    const start = new Date(Date.UTC(cur.y, cur.m, e.d, hh || 0, mm || 0));
    const end = new Date(start.getTime() + mins * 60000);
    const f = d => d.toISOString().replace(/[-:]/g, "").slice(0, 15);
    return "https://calendar.google.com/calendar/render?action=TEMPLATE" + "&text=" + encodeURIComponent(e.title + " — Parole Éternelle Ngiri-Ngiri") + "&dates=" + f(start) + "/" + f(end) + "&ctz=Africa/Kinshasa" + "&location=" + encodeURIComponent("2 bis & 4, Av. Monkoto, Ngiri-Ngiri, Kinshasa") + "&details=" + encodeURIComponent(e.tag + " · " + e.ministers + " · En direct sur YouTube : https://www.youtube.com/@paroleeternellengiri-ngiri");
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "programmes",
    "data-screen-label": "Programmes",
    className: "sec-light relative bg-ink-900 py-28 md:py-40"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-14"
  }, /*#__PURE__*/React.createElement(Reveal, {
    className: "flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    className: "mb-5"
  }, "Programme du mois · ", monthLabel), /*#__PURE__*/React.createElement(Heading, null, "Un mois pour", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    className: "italic text-gold-200 font-light"
  }, "rencontrer Dieu"), " ensemble.")), /*#__PURE__*/React.createElement("p", {
    className: "max-w-md text-[15px] text-bone-300 leading-relaxed"
  }, "Cultes, veillées, études, jeunesse, mission. Notre vie d'église rythmée par la présence de Christ.")), /*#__PURE__*/React.createElement(Reveal, {
    className: "mb-10 flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between border-y border-white/10 py-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 overflow-x-auto pb-1 -mx-1 px-1"
  }, filters.map(f => /*#__PURE__*/React.createElement("button", {
    key: f,
    onClick: () => setFilter(f),
    className: `shrink-0 text-[12px] font-mono tracking-[.18em] uppercase px-3 py-1.5 rounded-full border transition ${activeFilter === f ? "bg-gold-300 text-ink-900 border-gold-300" : "border-white/10 text-bone-300 hover:text-bone-100 hover:border-white/30"}`
  }, f))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 shrink-0"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => goMonth(-1),
    "aria-label": "Mois précédent",
    className: "text-[12px] px-3 py-1.5 rounded-full border border-white/10 text-bone-300 hover:border-white/30 transition"
  }, "‹"), /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-[10px] tracking-[.22em] uppercase text-bone-400 px-1"
  }, MONTHS[cur.m]), /*#__PURE__*/React.createElement("button", {
    onClick: () => goMonth(1),
    "aria-label": "Mois suivant",
    style: {
      marginRight: 12
    },
    className: "text-[12px] px-3 py-1.5 rounded-full border border-white/10 text-bone-300 hover:border-white/30 transition"
  }, "›"), /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-[10px] tracking-[.22em] uppercase text-bone-400 mr-2"
  }, "Vue"), ["liste", "calendrier"].map(v => /*#__PURE__*/React.createElement("button", {
    key: v,
    onClick: () => setView(v),
    className: `text-[12px] px-3 py-1.5 rounded-full border transition capitalize ${view === v ? "bg-bone-50 text-ink-900 border-bone-50" : "border-white/10 text-bone-300 hover:border-white/30"}`
  }, v)))), view === "liste" ? filtered.length === 0 ? /*#__PURE__*/React.createElement(Reveal, {
    className: "border border-dashed border-white/15 py-16 px-6 text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display text-[24px] md:text-[28px] text-bone-100 mb-2"
  }, data === null ? "Chargement du programme…" : `Le programme de ${MONTHS[cur.m].toLowerCase()} sera publié bientôt`), /*#__PURE__*/React.createElement("p", {
    className: "text-[13px] text-bone-400 max-w-md mx-auto leading-relaxed"
  }, "Revenez bientôt ou consultez les autres mois avec les flèches."), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setFilter("Tous");
      setCur({
        y: today.getFullYear(),
        m: today.getMonth()
      });
    },
    className: "mt-6 text-[12px] font-mono tracking-[.18em] uppercase px-4 py-2 rounded-full border border-gold-500/40 text-gold-200 hover:bg-gold-500/10 transition"
  }, "Revenir au mois en cours")) : /*#__PURE__*/React.createElement(Reveal, {
    stagger: true,
    className: "grid gap-0 divide-y divide-white/5"
  }, filtered.map((e, i) => /*#__PURE__*/React.createElement("article", {
    key: i,
    className: "group grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr_auto] gap-6 md:gap-10 items-center py-6 hover:bg-white/[.02] -mx-4 px-4 transition cursor-default"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center md:text-left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display text-[44px] md:text-[56px] leading-none text-bone-50 tick"
  }, String(e.d).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
    className: "font-mono text-[10px] tracking-[.28em] uppercase text-gold-300/80 mt-1"
  }, e.day, " · ", MON_ABBR[cur.m])), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center gap-2 mb-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: `inline-flex items-center gap-1.5 text-[10px] font-mono tracking-[.18em] uppercase px-2 py-1 rounded-full border ${tagColor(e.tag)}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "opacity-90"
  }, React.createElement(e.icon, {
    width: 11,
    height: 11
  })), e.tag), /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-[10px] tracking-[.22em] uppercase text-bone-400"
  }, e.h, " · ", e.duration)), /*#__PURE__*/React.createElement("h4", {
    className: "font-display text-[24px] md:text-[28px] leading-snug text-bone-50"
  }, e.title), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 text-[12px] text-bone-400"
  }, e.ministers)), /*#__PURE__*/React.createElement("div", {
    className: "hidden md:flex flex-col items-end gap-2"
  }, /*#__PURE__*/React.createElement("a", {
    href: gcal(e),
    target: "_blank",
    rel: "noopener",
    className: "btn btn-ghost !py-2 !px-4 text-[11px] !gap-2"
  }, /*#__PURE__*/React.createElement(I.Calendar, {
    width: "12",
    height: "12"
  }), "Ajouter"), /*#__PURE__*/React.createElement("a", {
    href: e.link || "https://www.facebook.com/cepeng/",
    target: "_blank",
    rel: "noopener",
    className: "text-[11px] font-mono tracking-[.18em] uppercase text-bone-400 hover:text-gold-200 transition"
  }, "Détails ▸"))))) : /*#__PURE__*/React.createElement(CalendarView, {
    events: events,
    tagColor: tagColor,
    y: cur.y,
    m: cur.m
  }), /*#__PURE__*/React.createElement(Reveal, {
    className: "mt-16 relative overflow-hidden border border-gold-500/20 p-8 md:p-10 bg-gradient-to-br from-ink-700 to-ink-800"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 opacity-30",
    style: {
      background: "radial-gradient(60% 90% at 100% 0%, rgba(216,182,106,.3), transparent 60%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative flex flex-col md:flex-row md:items-center gap-6 justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    className: "mb-2"
  }, "Abonnez-vous"), /*#__PURE__*/React.createElement("div", {
    className: "font-display text-[28px] md:text-[34px] text-bone-50 leading-snug"
  }, "Recevez le programme mensuel par e-mail")), /*#__PURE__*/React.createElement("form", {
    className: "flex gap-2 w-full md:w-auto",
    onSubmit: e => {
      e.preventDefault();
      const em = e.target.elements.nl.value;
      window.location.href = "mailto:paroleternellengiringiri@gmail.com?subject=" + encodeURIComponent("Abonnement au programme mensuel") + "&body=" + encodeURIComponent("Bonjour, je souhaite recevoir le programme mensuel par e-mail.\nMon adresse : " + em);
    }
  }, /*#__PURE__*/React.createElement("input", {
    name: "nl",
    required: true,
    type: "email",
    placeholder: "votre@email.cd",
    className: "flex-1 md:w-72 bg-ink-900 border border-white/10 rounded-full px-5 py-3 text-[14px] text-bone-50 placeholder-bone-400 focus:outline-none focus:border-gold-400"
  }), /*#__PURE__*/React.createElement(Btn, {
    variant: "gold",
    type: "submit"
  }, "S'abonner"))))));
}
function CalendarView({
  events,
  tagColor,
  y,
  m
}) {
  // Grille du mois affiché, alignée sur le lundi
  const offset = (new Date(y, m, 1).getDay() + 6) % 7; // 0 = lundi
  const days = new Date(y, m + 1, 0).getDate();
  const evByDay = events.reduce((acc, e) => {
    (acc[e.d] = acc[e.d] || []).push(e);
    return acc;
  }, {});
  const now = new Date();
  return /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-7 gap-px bg-white/5 border border-white/10"
  }, ["LUN", "MAR", "MER", "JEU", "VEN", "SAM", "DIM"].map(d => /*#__PURE__*/React.createElement("div", {
    key: d,
    className: "bg-ink-700 py-3 text-center font-mono text-[10px] tracking-[.22em] uppercase text-bone-400"
  }, d)), Array.from({
    length: offset
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: "e" + i,
    className: "bg-ink-800 min-h-[64px] sm:min-h-[110px]"
  })), Array.from({
    length: days
  }).map((_, i) => {
    const d = i + 1;
    const evs = evByDay[d] || [];
    // Marque le vrai jour courant, seulement dans le mois affiché.
    const isToday = now.getFullYear() === y && now.getMonth() === m && now.getDate() === d;
    return /*#__PURE__*/React.createElement("div", {
      key: d,
      className: `bg-ink-700 min-h-[64px] sm:min-h-[110px] p-1 sm:p-2 flex flex-col gap-1 ${isToday ? "ring-1 ring-gold-400 ring-inset" : ""}`
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between"
    }, /*#__PURE__*/React.createElement("span", {
      className: `font-mono text-[11px] ${isToday ? "text-gold-300 font-bold" : "text-bone-300"}`
    }, d), isToday && /*#__PURE__*/React.createElement("span", {
      className: "text-[8px] font-mono tracking-[.2em] uppercase text-gold-300"
    }, "Auj.")), /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col gap-1 mt-0.5"
    }, evs.slice(0, 2).map((e, j) => /*#__PURE__*/React.createElement("div", {
      key: j,
      className: `text-[9px] leading-snug rounded-sm px-1.5 py-1 border ${tagColor(e.tag)} truncate`,
      title: e.title
    }, /*#__PURE__*/React.createElement("span", {
      className: "font-mono opacity-70"
    }, e.h), " ", e.tag)), evs.length > 2 && /*#__PURE__*/React.createElement("div", {
      className: "text-[9px] text-bone-400 font-mono"
    }, "+", evs.length - 2)));
  })));
}
window.Program = Program;
