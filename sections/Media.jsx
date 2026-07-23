// YouTube channel — CE Parole Eternelle TV
const YT_CHANNEL_ID = "UCPmV9FMnv9imGbnxJdFiMcw";
const YT_CHANNEL_URL = "https://www.youtube.com/@paroleeternellengiri-ngiri";
const YT_VIDEOS_URL = `${YT_CHANNEL_URL}/videos`;
const YT_LIVE_EMBED = `https://www.youtube.com/embed/live_stream?channel=${YT_CHANNEL_ID}&autoplay=0&mute=1`;
const FB_PAGE_URL = "https://www.facebook.com/cepeng/";
const FB_VIDEOS_URL = "https://www.facebook.com/cepeng/videos";

// Extrait réel de prédication — chaîne officielle Parole Eternelle Ngiri-ngiri TV
const FEATURED_VIDEO = {
  id: "OBPAIOklLYg",
  title: "Extrait · Campagne « Épouse Parole »",
  speaker: "Past. Raphaël Kaseya Bin Moningo",
  series: "Extrait de prédication · Ngiri-Ngiri",
};

function Media() {
  const [tab, setTab] = React.useState("Prédications");
  const [sort, setSort] = React.useState("recent");
  const [realVids, setRealVids] = React.useState(null);
  const tabs = ["Prédications", "Worship", "Podcast", "Direct"];

  React.useEffect(() => {
    if (window.loadRealYtVideos) window.loadRealYtVideos(setRealVids);
  }, []);

  const sermons = [
    { date: "11 Mai 2026", title: "Bâtir sa maison sur le Roc",          speaker: "Past. Raphaël Kaseya", duration: "42:18", series: "Série · Fondations",   featured: true },
    { date: "04 Mai 2026", title: "L'autorité du croyant",                speaker: "Past. Grâce Lumba",       duration: "37:05", series: "Série · Identité" },
    { date: "27 Avr 2026", title: "La prière qui déplace les montagnes",  speaker: "Past. Daniel Nzuzi",      duration: "44:22", series: "Série · Prière" },
    { date: "20 Avr 2026", title: "Vivre par la foi, pas par la vue",     speaker: "Past. Esther Kalemba",    duration: "38:50", series: "Série · Marche de foi" },
    { date: "13 Avr 2026", title: "Pâques · Il est vivant !",             speaker: "Past. Raphaël Kaseya",  duration: "48:11", series: "Série · Pâques" },
    { date: "06 Avr 2026", title: "Le pardon, une libération",            speaker: "Past. Patrick Kabongo",   duration: "35:42", series: "Série · Cœur libre" },
  ];

  const worship = [
    { title: "Eternel, mon Roc",          duration: "5:42", album: "Live · Soirée d'adoration" },
    { title: "Tu es vivant",              duration: "6:18", album: "Live · Soirée d'adoration" },
    { title: "Nzambe na ngai (Lingala)",  duration: "7:02", album: "EP · Au cœur de Kinshasa" },
    { title: "Plus que vainqueurs",       duration: "5:30", album: "EP · Au cœur de Kinshasa" },
    { title: "Mon Dieu fidèle",           duration: "4:55", album: "Single" },
    { title: "Lève-toi, Église",          duration: "6:44", album: "Single" },
  ];

  // Vraies vidéos de la chaîne (via yt-real.js) — sinon feed exemple
  const realSermons = realVids ? realVids
    .filter(v => v.cat === "Prédications" || v.cat === "Cultes" || v.cat === "Conférences")
    .slice(0, 6)
    .map(v => ({ date: "Sur YouTube", title: v.title, speaker: v.speaker || "Parole Eternelle Ngiri-ngiri TV", duration: "", series: v.cat, vid: v.id, href: `https://www.youtube.com/watch?v=${v.id}` })) : null;
  const shownSermons = (realSermons && realSermons.length) ? realSermons : sermons.slice(1);

  const realWorship = realVids ? realVids
    .filter(v => v.cat === "Louange")
    .slice(0, 6)
    .map(v => ({ title: v.title, duration: "YouTube ↗", album: "Louange · Chaîne officielle", vid: v.id, href: `https://www.youtube.com/watch?v=${v.id}` })) : null;
  const shownWorship = (realWorship && realWorship.length) ? realWorship : worship;

  return (
    <section id="medias" data-screen-label="Médias" className="sec-light relative bg-ink-800 py-28 md:py-40">
      <div className="max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-14">

        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <Eyebrow className="mb-5">Messages & Médias</Eyebrow>
            <Heading>
              Nourrissez votre foi —
              <br/><em className="italic text-gold-200 font-light">partout, à toute heure.</em>
            </Heading>
          </div>
          <div className="flex gap-3 shrink-0">
            <Btn variant="ghost" href="videos.html">Toutes les vidéos</Btn>
            <Btn variant="ghost" href={YT_CHANNEL_URL} icon={false}><I.YT width="14" height="14"/> YouTube</Btn>
          </div>
        </Reveal>

        {/* Featured player — vraie vidéo YouTube de la chaîne */}
        <Reveal id="messages" data-screen-label="Messages" className="grid lg:grid-cols-12 gap-8 mb-16">
          <FeaturedPlayer video={FEATURED_VIDEO} />
          {/* Right column: live + stats */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <LiveCard />
            <div className="bg-ink-700 border border-white/10 p-6">
              <Eyebrow className="mb-3">Cette semaine</Eyebrow>
              <div className="space-y-3">
                <Mini k="Vues sur YouTube" v="34 218" />
                <Mini k="Nouveaux abonnés" v="+612" />
                <Mini k="Téléchargements podcast" v="1 847" />
                <Mini k="Pays touchés" v="27" />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Tabs */}
        <div className="flex items-center gap-2 mb-8 border-b border-white/10 pb-3 overflow-x-auto">
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)}
              className={`relative shrink-0 px-1 py-2 text-[14px] font-medium transition ${tab === t ? "text-bone-50" : "text-bone-400 hover:text-bone-200"}`}>
              {t}
              {tab === t && <span className="absolute -bottom-3 left-0 right-0 h-[2px] bg-gold-300"></span>}
            </button>
          ))}
          {tab === "Prédications" && (
            <div className="ml-auto flex items-center gap-3 text-[12px] text-bone-400">
              <span className="font-mono tracking-[.18em] uppercase">Trier</span>
              <select value={sort} onChange={(e) => setSort(e.target.value)} className="bg-transparent text-bone-200 text-[12px] outline-none cursor-pointer">
                <option value="recent">Plus récents</option>
                <option value="serie">Par série</option>
              </select>
            </div>
          )}
        </div>

        {tab === "Prédications" && (
          <>
          <Reveal stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(sort === "serie" ? [...shownSermons].sort((a, b) => a.series.localeCompare(b.series)) : shownSermons).map((s, i) => <SermonCard key={s.vid || i} {...s} />)}
          </Reveal>
          <div className="mt-10 flex justify-center">
            <Btn variant="ghost" href="predications.html">Voir toutes les prédications · 248 messages</Btn>
          </div>
          </>
        )}

        {tab === "Worship" && (
          <Reveal stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {shownWorship.map((w, i) => <WorshipCard key={w.vid || i} {...w} idx={i} />)}
          </Reveal>
        )}

        {tab === "Podcast" && <PodcastBlock realVids={realVids} />}
        {tab === "Direct" && <LiveStreamBlock />}

        {/* Marquee */}
        <div className="mt-20 -mx-6 sm:-mx-10 lg:-mx-14 overflow-hidden border-y border-white/10 py-6 bg-ink-900">
          <div className="flex marq whitespace-nowrap gap-12 text-bone-300/50">
            {[..."LA PAROLE QUI DEMEURE · ✦ · UNE GÉNÉRATION TRANSFORMÉE · ✦ · KINSHASA NGIRI-NGIRI · ✦ · CULTE DIMANCHE 07H30 & 10H00 · ✦ · ".repeat(4)].join("")}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedPlayer({ video }) {
  const [playing, setPlaying] = React.useState(false);
  return (
    <div className="lg:col-span-8">
      <div className="tile-dark relative aspect-[16/9] bg-ink-900 border border-white/10 overflow-hidden rounded-[2px]">
        {playing ? (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
            title={video.title}
            frameBorder="0"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
          </iframe>
        ) : (
          <button onClick={() => setPlaying(true)} className="group absolute inset-0 text-left" aria-label="Lire l'extrait">
            <img
              src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
              alt={video.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/95 via-ink-900/20 to-ink-900/30"></div>
            <div className="absolute inset-0 grid place-items-center">
              <span className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-bone-50 text-ink-900 grid place-items-center transition-transform group-hover:scale-105 glow">
                <span className="absolute inset-0 rounded-full animate-ping bg-gold-300/30"></span>
                <I.Play width="22" height="22" style={{marginLeft: 3}}/>
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
              <div className="font-mono text-[10px] tracking-[.28em] uppercase text-gold-300/90 mb-2">{video.series}</div>
              <div className="font-display text-[28px] md:text-[40px] leading-tight text-bone-50">{video.title}</div>
              <div className="mt-1 text-[13px] text-bone-300">par {video.speaker} · YouTube</div>
            </div>
          </button>
        )}
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <div className="font-mono text-[10px] tracking-[.22em] uppercase text-bone-400">Chaîne officielle · Parole Eternelle Ngiri-ngiri TV</div>
        <div className="flex gap-2">
          <Btn variant="ghost" href={`https://www.youtube.com/watch?v=${video.id}`} icon={false}><I.YT width="14" height="14"/> Voir sur YouTube</Btn>
          <Btn variant="ghost" href={FB_VIDEOS_URL} icon={false}><I.FB width="14" height="14"/> Vidéos Facebook</Btn>
        </div>
      </div>
    </div>
  );
}

function IconBtn({ children }) {
  return <button className="w-9 h-9 rounded-full bg-ink-900/70 border border-white/10 grid place-items-center text-bone-100 hover:bg-ink-900 hover:border-gold-300/40 transition">{children}</button>;
}

function LiveCard() {
  return (
    <div className="relative overflow-hidden bg-ink-700 border border-gold-500/30 p-6 glow">
      <div className="flex items-center gap-2 mb-3">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75 animate-ping"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
        </span>
        <span className="font-mono text-[10px] tracking-[.22em] uppercase text-bone-50">En direct dimanche</span>
      </div>
      <div className="font-display text-[26px] leading-tight text-bone-50">Vendredi Ngomba · Soirée de prière</div>
      <div className="mt-1.5 text-[12px] text-bone-300">Vendredi 15 mai · 17h00 · YouTube + Facebook</div>
      <div className="mt-5 grid grid-cols-4 gap-2 text-center">
        {[["03","Jours"],["12","Heures"],["44","Min."],["18","Sec."]].map(([n,l]) => (
          <div key={l} className="bg-ink-900 border border-white/5 py-2">
            <div className="font-display text-[24px] leading-none text-bone-50 tick">{n}</div>
            <div className="font-mono text-[9px] tracking-[.18em] uppercase text-bone-400 mt-0.5">{l}</div>
          </div>
        ))}
      </div>
      <Btn variant="gold" href={YT_CHANNEL_URL} className="!w-full mt-5 justify-center">Rejoindre le direct</Btn>
    </div>
  );
}

function Mini({ k, v }) {
  return <div className="flex items-baseline justify-between border-b border-white/5 pb-2">
    <span className="text-[12px] text-bone-300">{k}</span>
    <span className="font-display text-[22px] text-bone-50 tick">{v}</span>
  </div>;
}

function SermonCard({ date, title, speaker, duration, series, vid, href = YT_VIDEOS_URL }) {
  return (
    <a href={href} target="_blank" rel="noopener" className="group lift block">
      <Photo label="Vignette prédication" tone="warm" className="aspect-[4/3] rounded-[2px]">
        {vid && <img src={`https://i.ytimg.com/vi/${vid}/hqdefault.jpg`} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/95 via-ink-900/0 to-transparent"></div>
        <div className="absolute top-3 left-3 font-mono text-[9px] tracking-[.22em] uppercase text-gold-300/80">{series}</div>
        {duration ? <div className="absolute top-3 right-3 px-2 py-1 bg-ink-900/70 backdrop-blur-md text-[10px] font-mono text-bone-100 border border-white/10">{duration}</div> : null}
        <span className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition">
          <span className="w-14 h-14 rounded-full bg-gold-300 text-ink-900 grid place-items-center">
            <I.Play width="18" height="18" style={{marginLeft: 2}}/>
          </span>
        </span>
      </Photo>
      <div className="pt-4">
        <div className="font-mono text-[10px] tracking-[.22em] uppercase text-bone-400">{date}</div>
        <h4 className="font-display text-[22px] leading-tight text-bone-50 mt-1.5 group-hover:text-gold-200 transition">{title}</h4>
        <div className="mt-1 text-[12px] text-bone-300">{speaker}</div>
      </div>
    </a>
  );
}

function WorshipCard({ title, duration, album, idx, vid, href = YT_VIDEOS_URL }) {
  return (
    <article className="group bg-ink-700 border border-white/10 p-5 lift hover:border-gold-500/30">
      <div className="flex items-start gap-4">
        <div className="relative">
          <Photo tone="warm" className="w-20 h-20 rounded-[2px]">
            {vid
              ? <img src={`https://i.ytimg.com/vi/${vid}/hqdefault.jpg`} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
              : <div className="absolute inset-0 grid place-items-center text-gold-200/80">
                  <I.Music width="22" height="22"/>
                </div>}
          </Photo>
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-mono text-[10px] tracking-[.22em] uppercase text-gold-300/80">{album}</div>
          <h4 className="font-display text-[22px] leading-tight text-bone-50 truncate mt-1" title={title}>{title}</h4>
          <div className="mt-1 text-[12px] text-bone-400">{duration}</div>
        </div>
        <a href={href} target="_blank" rel="noopener" aria-label="Écouter sur YouTube" className="w-10 h-10 rounded-full border border-white/10 grid place-items-center text-bone-100 hover:bg-gold-300 hover:text-ink-900 hover:border-gold-300 transition shrink-0">
          <I.Play width="14" height="14" style={{marginLeft: 1}}/>
        </a>
      </div>
      {/* fake waveform */}
      <div className="mt-4 flex items-end gap-[2px] h-7">
        {Array.from({length: 60}).map((_, i) => {
          const h = 20 + 60 * Math.abs(Math.sin((i + idx*7) * 0.42));
          return <span key={i} className="w-[3px] bg-bone-300/30" style={{ height: h + "%" }}></span>;
        })}
      </div>
    </article>
  );
}

function PodcastBlock({ realVids }) {
  const fallback = [
    { n: "EP. 24", title: "Vivre dans la grâce, pas dans la performance", host: "Past. R. Kaseya + invité", duration: "52:08" },
    { n: "EP. 23", title: "La louange comme arme spirituelle",            host: "Min. Bénédicte",              duration: "38:42" },
    { n: "EP. 22", title: "Famille, identité, foi en RDC",                 host: "Past. Patrick Kabongo",       duration: "61:14" },
    { n: "EP. 21", title: "Pourquoi prier ne change pas seulement nos vies", host: "Past. Esther Kalemba",      duration: "44:30" },
  ];
  const eps = (realVids && realVids.length)
    ? realVids.slice(0, 4).map((v, i) => ({ n: "ÉCOUTE " + (i + 1), title: v.title, host: v.speaker || "Parole Eternelle Ngiri-ngiri TV", duration: v.cat, href: `https://www.youtube.com/watch?v=${v.id}`, vid: v.id }))
    : fallback;
  return (
    <Reveal stagger className="grid lg:grid-cols-2 gap-4">
      {eps.map((e, i) => (
        <article key={e.vid || i} className="group bg-ink-700 border border-white/10 p-6 lift hover:border-gold-500/30 flex gap-5 items-center">
          <Photo tone="deep" className="w-24 h-24 rounded-full shrink-0">
            {e.vid
              ? <img src={`https://i.ytimg.com/vi/${e.vid}/hqdefault.jpg`} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover rounded-full" />
              : <div className="absolute inset-0 grid place-items-center text-gold-200">
                  <I.Mic width="26" height="26"/>
                </div>}
          </Photo>
          <div className="flex-1 min-w-0">
            <div className="font-mono text-[10px] tracking-[.22em] uppercase text-gold-300/80">{e.n} · {e.duration}</div>
            <h4 className="font-display text-[22px] leading-tight text-bone-50 mt-1">{e.title}</h4>
            <div className="mt-1 text-[12px] text-bone-300">avec {e.host}</div>
          </div>
          <a href={e.href || YT_VIDEOS_URL} target="_blank" rel="noopener" aria-label="Écouter sur YouTube" className="w-12 h-12 rounded-full bg-gold-300 text-ink-900 grid place-items-center hover:bg-gold-200 transition shrink-0">
            <I.Play width="16" height="16" style={{marginLeft: 1}}/>
          </a>
        </article>
      ))}
    </Reveal>
  );
}

function LiveStreamBlock() {
  return (
    <Reveal className="relative">
      <div className="relative aspect-[16/9] bg-ink-900 border border-white/10 overflow-hidden">
        <iframe
          className="absolute inset-0 w-full h-full"
          src={YT_LIVE_EMBED}
          referrerPolicy="strict-origin-when-cross-origin"
          title="Direct YouTube · CE Parole Eternelle TV"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>
      </div>
      <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="font-mono text-[10px] tracking-[.22em] uppercase text-gold-300/80 mb-1">Chaîne officielle · CE Parole Eternelle TV</div>
          <div className="font-display text-[28px] md:text-[36px] leading-tight text-bone-50">Suivez tous les cultes en direct</div>
          <div className="mt-1 text-[13px] text-bone-300">Si aucun direct n'est en cours, retrouvez les rediffusions sur la chaîne.</div>
        </div>
        <div className="flex gap-3">
          <Btn variant="gold" href={YT_CHANNEL_URL}>S'abonner sur YouTube</Btn>
          <Btn variant="ghost" href={FB_PAGE_URL} icon={false}><I.FB width="14" height="14"/> Facebook</Btn>
        </div>
      </div>
    </Reveal>
  );
}

window.Media = Media;
