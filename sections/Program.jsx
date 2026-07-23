function Program() {
  // Juillet 2026 — mois du Jubilé (08 juillet – 02 août) + rythme hebdomadaire réel
  const events = [
    { d: 1,  day: "MER", h: "17:00", title: "Étude biblique · La Parole qui demeure",   tag: "Étude",      color: "azur",   icon: <I.Bible/>,   duration: "2h00", ministers: "Équipe pastorale" },
    { d: 3,  day: "VEN", h: "12:30", title: "Module de prière · Intercession",         tag: "Prière",     color: "rose",   icon: <I.Flame/>,   duration: "2h30", ministers: "Min. Intercession" },
    { d: 3,  day: "VEN", h: "17:00", title: "Vendredi Ngomba · Soirée de puissance",   tag: "Prière",     color: "rose",   icon: <I.Flame/>,   duration: "2h30", ministers: "Tous les pasteurs" },
    { d: 5,  day: "DIM", h: "07:30", title: "Culte dominical · 1ᵉʳ service",           tag: "Culte",      color: "gold",   icon: <I.Cross/>,   duration: "2h00", ministers: "Past. Raphaël Kaseya Bin Moningo" },
    { d: 5,  day: "DIM", h: "10:00", title: "Culte dominical · 2ᵉ service",            tag: "Culte",      color: "gold",   icon: <I.Cross/>,   duration: "2h00", ministers: "Équipe pastorale" },
    { d: 8,  day: "MER", h: "17:00", title: "Jubilé 2026 · Ouverture officielle",      tag: "Conférence", color: "or",     icon: <I.Mic/>,     duration: "3h00", ministers: "Past. Raphaël Kaseya Bin Moningo" },
    { d: 10, day: "VEN", h: "12:30", title: "Module de prière · Spécial Jubilé",       tag: "Prière",     color: "rose",   icon: <I.Flame/>,   duration: "2h30", ministers: "Min. Intercession" },
    { d: 10, day: "VEN", h: "17:00", title: "Soirée du Jubilé · Louange & Parole",     tag: "Conférence", color: "or",     icon: <I.Mic/>,     duration: "3h00", ministers: "Past. Kondo Wa Kondo · invité" },
    { d: 12, day: "DIM", h: "07:30", title: "Culte du Jubilé · 1ᵉʳ service",           tag: "Culte",      color: "gold",   icon: <I.Cross/>,   duration: "2h00", ministers: "Past. Raphaël Kaseya Bin Moningo" },
    { d: 12, day: "DIM", h: "10:00", title: "Culte du Jubilé · 2ᵉ service",            tag: "Culte",      color: "gold",   icon: <I.Cross/>,   duration: "2h00", ministers: "Past. Kondo Wa Kondo · invité" },
    { d: 15, day: "MER", h: "17:00", title: "Étude biblique · Genèse 18:14",           tag: "Étude",      color: "azur",   icon: <I.Bible/>,   duration: "2h00", ministers: "Équipe pastorale" },
    { d: 17, day: "VEN", h: "17:00", title: "Soirée du Jubilé · Y a-t-il rien d'étonnant ?", tag: "Conférence", color: "or", icon: <I.Mic/>,  duration: "3h00", ministers: "Past. Dieudonné Mongu · invité" },
    { d: 18, day: "SAM", h: "16:00", title: "Jeunesse · Soirée NextGen",               tag: "Jeunesse",   color: "violet", icon: <I.Sparkle/>, duration: "3h00", ministers: "Équipe NextGen" },
    { d: 19, day: "DIM", h: "07:30", title: "Culte du Jubilé · 1ᵉʳ service",           tag: "Culte",      color: "gold",   icon: <I.Cross/>,   duration: "2h00", ministers: "Past. Dieudonné Mongu · invité" },
    { d: 19, day: "DIM", h: "10:00", title: "Culte du Jubilé · 2ᵉ service",            tag: "Culte",      color: "gold",   icon: <I.Cross/>,   duration: "2h00", ministers: "Past. Raphaël Kaseya Bin Moningo" },
    { d: 22, day: "MER", h: "17:00", title: "Étude biblique · Les promesses de Dieu",  tag: "Étude",      color: "azur",   icon: <I.Bible/>,   duration: "2h00", ministers: "Équipe pastorale" },
    { d: 24, day: "VEN", h: "12:30", title: "Module de prière · Pour les familles",    tag: "Prière",     color: "rose",   icon: <I.Flame/>,   duration: "2h30", ministers: "Min. Intercession" },
    { d: 24, day: "VEN", h: "17:00", title: "Soirée du Jubilé · Action de grâce",      tag: "Conférence", color: "or",     icon: <I.Mic/>,     duration: "3h00", ministers: "Tous les pasteurs" },
    { d: 25, day: "SAM", h: "14:00", title: "École des enfants · Kids Royaume",        tag: "Enfants",    color: "violet", icon: <I.Sparkle/>, duration: "3h00", ministers: "Min. Kids" },
    { d: 26, day: "DIM", h: "07:30", title: "Culte du Jubilé · 1ᵉʳ service",           tag: "Culte",      color: "gold",   icon: <I.Cross/>,   duration: "2h00", ministers: "Past. Raphaël Kaseya Bin Moningo" },
    { d: 26, day: "DIM", h: "10:00", title: "Culte du Jubilé · 2ᵉ service",            tag: "Culte",      color: "gold",   icon: <I.Cross/>,   duration: "2h00", ministers: "Équipe pastorale" },
    { d: 29, day: "MER", h: "17:00", title: "Étude biblique · Préparer la clôture",    tag: "Étude",      color: "azur",   icon: <I.Bible/>,   duration: "2h00", ministers: "Équipe pastorale" },
    { d: 31, day: "VEN", h: "17:00", title: "Veillée du Jubilé · Vers la clôture",     tag: "Prière",     color: "rose",   icon: <I.Flame/>,   duration: "3h00", ministers: "Tous les pasteurs" },
  ];

  const [filter, setFilter] = React.useState("Tous");
  const [view, setView] = React.useState("liste"); // liste | calendrier

  const filters = ["Tous", "Culte", "Prière", "Étude", "Jeunesse", "Louange", "Mission", "Conférence", "Séminaire", "Enfants"];
  const filtered = filter === "Tous" ? events : events.filter(e => e.tag === filter);

  const tagColor = (t) => ({
    "Culte":      "text-gold-200 border-gold-500/40 bg-gold-500/[.06]",
    "Prière":     "text-rose-200 border-rose-300/30 bg-rose-300/[.04]",
    "Étude":      "text-sky-200 border-sky-300/30 bg-sky-300/[.04]",
    "Jeunesse":   "text-violet-200 border-violet-300/30 bg-violet-300/[.04]",
    "Louange":    "text-gold-200 border-gold-500/40 bg-gold-500/[.06]",
    "Mission":    "text-emerald-200 border-emerald-300/30 bg-emerald-300/[.04]",
    "Conférence": "text-gold-200 border-gold-500/40 bg-gold-500/[.06]",
    "Séminaire":  "text-gold-200 border-gold-500/40 bg-gold-500/[.06]",
    "Enfants":    "text-violet-200 border-violet-300/30 bg-violet-300/[.04]",
  }[t]);

  // Lien « Ajouter au calendrier » — Google Calendar, fuseau Kinshasa
  const gcal = (e) => {
    const [hh, mm] = e.h.split(":").map(Number);
    const [dh, dmRaw] = e.duration.split("h");
    const mins = (parseInt(dh) || 2) * 60 + (parseInt(dmRaw) || 0);
    const start = new Date(Date.UTC(2026, 6, e.d, hh, mm));
    const end = new Date(start.getTime() + mins * 60000);
    const f = (d) => d.toISOString().replace(/[-:]/g, "").slice(0, 15);
    return "https://calendar.google.com/calendar/render?action=TEMPLATE"
      + "&text=" + encodeURIComponent(e.title + " — Parole Éternelle Ngiri-Ngiri")
      + "&dates=" + f(start) + "/" + f(end)
      + "&ctz=Africa/Kinshasa"
      + "&location=" + encodeURIComponent("2 bis & 4, Av. Monkoto, Ngiri-Ngiri, Kinshasa")
      + "&details=" + encodeURIComponent(e.tag + " · " + e.ministers + " · En direct sur YouTube : https://www.youtube.com/@paroleeternellengiri-ngiri");
  };

  return (
    <section id="programmes" data-screen-label="Programmes" className="sec-light relative bg-ink-900 py-28 md:py-40">
      <div className="max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-14">

        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <Eyebrow className="mb-5">Programme du mois · Juillet 2026</Eyebrow>
            <Heading>
              Trente jours pour
              <br/><em className="italic text-gold-200 font-light">rencontrer Dieu</em> ensemble.
            </Heading>
          </div>
          <p className="max-w-md text-[15px] text-bone-300 leading-relaxed">
            Cultes, veillées, études, jeunesse, mission. Notre vie d'église
            rythmée par la présence de Christ.
          </p>
        </Reveal>

        {/* Controls bar */}
        <Reveal className="mb-10 flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between border-y border-white/10 py-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 -mx-1 px-1">
            {filters.map(f => (
              <button key={f} onClick={() => setFilter(f)} className={`shrink-0 text-[12px] font-mono tracking-[.18em] uppercase px-3 py-1.5 rounded-full border transition ${filter === f ? "bg-gold-300 text-ink-900 border-gold-300" : "border-white/10 text-bone-300 hover:text-bone-100 hover:border-white/30"}`}>
                {f}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="font-mono text-[10px] tracking-[.22em] uppercase text-bone-400 mr-2">Vue</span>
            {["liste", "calendrier"].map(v => (
              <button key={v} onClick={() => setView(v)} className={`text-[12px] px-3 py-1.5 rounded-full border transition capitalize ${view === v ? "bg-bone-50 text-ink-900 border-bone-50" : "border-white/10 text-bone-300 hover:border-white/30"}`}>{v}</button>
            ))}
          </div>
        </Reveal>

        {view === "liste" ? (
          filtered.length === 0 ? (
            <Reveal className="border border-dashed border-white/15 py-16 px-6 text-center">
              <div className="font-display text-[24px] md:text-[28px] text-bone-100 mb-2">Aucun événement « {filter} » en juillet</div>
              <p className="text-[13px] text-bone-400 max-w-md mx-auto leading-relaxed">Cette catégorie est réservée aux programmes des prochains mois. Revenez bientôt ou consultez toutes les activités.</p>
              <button onClick={() => setFilter("Tous")} className="mt-6 text-[12px] font-mono tracking-[.18em] uppercase px-4 py-2 rounded-full border border-gold-500/40 text-gold-200 hover:bg-gold-500/10 transition">Voir tout le programme</button>
            </Reveal>
          ) : (
          <Reveal stagger className="grid gap-0 divide-y divide-white/5">
            {filtered.map((e, i) => (
              <article key={i} className="group grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr_auto] gap-6 md:gap-10 items-center py-6 hover:bg-white/[.02] -mx-4 px-4 transition cursor-default">
                <div className="text-center md:text-left">
                  <div className="font-display text-[44px] md:text-[56px] leading-none text-bone-50 tick">{String(e.d).padStart(2,'0')}</div>
                  <div className="font-mono text-[10px] tracking-[.28em] uppercase text-gold-300/80 mt-1">{e.day} · JUIL</div>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className={`inline-flex items-center gap-1.5 text-[10px] font-mono tracking-[.18em] uppercase px-2 py-1 rounded-full border ${tagColor(e.tag)}`}>
                      <span className="opacity-90">{React.cloneElement(e.icon, { width: 11, height: 11 })}</span>
                      {e.tag}
                    </span>
                    <span className="font-mono text-[10px] tracking-[.22em] uppercase text-bone-400">{e.h} · {e.duration}</span>
                  </div>
                  <h4 className="font-display text-[24px] md:text-[28px] leading-snug text-bone-50">{e.title}</h4>
                  <div className="mt-1 text-[12px] text-bone-400">{e.ministers}</div>
                </div>

                <div className="hidden md:flex flex-col items-end gap-2">
                  <a href={gcal(e)} target="_blank" rel="noopener" className="btn btn-ghost !py-2 !px-4 text-[11px] !gap-2">
                    <I.Calendar width="12" height="12"/>
                    Ajouter
                  </a>
                  <a href="https://www.facebook.com/cepeng/" target="_blank" rel="noopener" className="text-[11px] font-mono tracking-[.18em] uppercase text-bone-400 hover:text-gold-200 transition">Détails ▸</a>
                </div>
              </article>
            ))}
          </Reveal>
          )
        ) : (
          <CalendarView events={events} tagColor={tagColor} />
        )}

        {/* Subscribe strip */}
        <Reveal className="mt-16 relative overflow-hidden border border-gold-500/20 p-8 md:p-10 bg-gradient-to-br from-ink-700 to-ink-800">
          <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(60% 90% at 100% 0%, rgba(216,182,106,.3), transparent 60%)" }}></div>
          <div className="relative flex flex-col md:flex-row md:items-center gap-6 justify-between">
            <div>
              <Eyebrow className="mb-2">Abonnez-vous</Eyebrow>
              <div className="font-display text-[28px] md:text-[34px] text-bone-50 leading-snug">Recevez le programme mensuel par e-mail</div>
            </div>
            <form className="flex gap-2 w-full md:w-auto" onSubmit={(e)=>{e.preventDefault(); const em = e.target.elements.nl.value; window.location.href = "mailto:paroleternellengiringiri@gmail.com?subject=" + encodeURIComponent("Abonnement au programme mensuel") + "&body=" + encodeURIComponent("Bonjour, je souhaite recevoir le programme mensuel par e-mail.\nMon adresse : " + em);}}>
              <input name="nl" required type="email" placeholder="votre@email.cd" className="flex-1 md:w-72 bg-ink-900 border border-white/10 rounded-full px-5 py-3 text-[14px] text-bone-50 placeholder-bone-400 focus:outline-none focus:border-gold-400"/>
              <Btn variant="gold" type="submit">S'abonner</Btn>
            </form>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

function CalendarView({ events, tagColor }) {
  // Juillet 2026 : commence un mercredi
  const firstDay = 3; // 0=Dim, 3=Mer
  const days = 31;
  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= days; d++) cells.push(d);

  const evByDay = events.reduce((acc, e) => { (acc[e.d] = acc[e.d] || []).push(e); return acc; }, {});

  return (
    <Reveal>
      <div className="grid grid-cols-7 gap-px bg-white/5 border border-white/10">
        {["LUN","MAR","MER","JEU","VEN","SAM","DIM"].map(d => (
          <div key={d} className="bg-ink-700 py-3 text-center font-mono text-[10px] tracking-[.22em] uppercase text-bone-400">{d}</div>
        ))}
        {/* Alignement lundi : le 1ᵉʳ juillet 2026 est un mercredi → décalage de 2 */}
        {Array.from({length: 2}).map((_, i) => <div key={"e"+i} className="bg-ink-800 min-h-[110px]"></div>)}
        {Array.from({length: 31}).map((_, i) => {
          const d = i + 1;
          const evs = evByDay[d] || [];
          const isToday = d === 11;
          return (
            <div key={d} className={`bg-ink-700 min-h-[110px] p-2 flex flex-col gap-1 ${isToday ? "ring-1 ring-gold-400 ring-inset" : ""}`}>
              <div className="flex items-center justify-between">
                <span className={`font-mono text-[11px] ${isToday ? "text-gold-300 font-bold" : "text-bone-300"}`}>{d}</span>
                {isToday && <span className="text-[8px] font-mono tracking-[.2em] uppercase text-gold-300">Auj.</span>}
              </div>
              <div className="flex flex-col gap-1 mt-0.5">
                {evs.slice(0,2).map((e, j) => (
                  <div key={j} className={`text-[9px] leading-snug rounded-sm px-1.5 py-1 border ${tagColor(e.tag)} truncate`} title={e.title}>
                    <span className="font-mono opacity-70">{e.h}</span> {e.tag}
                  </div>
                ))}
                {evs.length > 2 && <div className="text-[9px] text-bone-400 font-mono">+{evs.length - 2}</div>}
              </div>
            </div>
          );
        })}
      </div>
    </Reveal>
  );
}

window.Program = Program;
