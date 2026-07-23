function Reels() {
  // Vertical 9:16 reels — placeholders + TikTok / FB / YouTube Shorts links
  // Users drop their actual reel thumbnails into the image-slots
  const reels = [
    { id: "reel-1", platform: "TikTok",   tag: "Worship Live",      title: "« Eternel mon Roc »",            views: "24,1K", href: "https://www.tiktok.com/@paroleternellengiringiri" },
    { id: "reel-2", platform: "TikTok",   tag: "Extrait prédication",title: "L'autorité du croyant",         views: "12,4K", href: "https://www.tiktok.com/@paroleternellengiringiri" },
    { id: "reel-3", platform: "TikTok",   tag: "Témoignage",        title: "Restaurée par Sa grâce",         views: "31,8K", href: "https://www.tiktok.com/@paroleternellengiringiri" },
    { id: "reel-4", platform: "Facebook", tag: "Reel · NextGen",    title: "Camp jeunesse 2026",             views: "8,9K",  href: "https://www.facebook.com/cepeng/videos" },
    { id: "reel-5", platform: "TikTok",   tag: "Lingala worship",   title: "Nzambe na ngai",                 views: "47,2K", href: "https://www.tiktok.com/@paroleternellengiringiri" },
    { id: "reel-6", platform: "YouTube",  tag: "Short",             title: "La prière qui change tout",      views: "16,5K", href: "https://www.youtube.com/channel/UCPmV9FMnv9imGbnxJdFiMcw/shorts" },
    { id: "reel-7", platform: "TikTok",   tag: "Coulisses",         title: "Avant le culte du dimanche",     views: "9,3K",  href: "https://www.tiktok.com/@paroleternellengiringiri" },
    { id: "reel-8", platform: "Facebook", tag: "Reel",              title: "Baptêmes · joie pure",           views: "21,7K", href: "https://www.facebook.com/cepeng/videos" },
  ];

  const platformBadge = (p) => {
    if (p === "TikTok") return { bg: "#000", color: "#fff", label: "TikTok" };
    if (p === "Facebook") return { bg: "#1877f2", color: "#fff", label: "Facebook" };
    return { bg: "#ff0000", color: "#fff", label: "YouTube" };
  };

  return (
    <section id="reels" data-screen-label="Reels" className="sec-light relative bg-ink-900 py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-14">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <Eyebrow className="mb-5">Reels · Coulisses · Extraits</Eyebrow>
            <Heading>
              La vie d'église
              <br/>en <em className="italic text-gold-200 font-light">vertical.</em>
            </Heading>
          </div>
          <div className="flex flex-wrap gap-3">
            <Btn variant="ghost" href="https://www.tiktok.com/@paroleternellengiringiri" icon={false}>
              <I.TT width="14" height="14"/> @paroleternellengiringiri
            </Btn>
            <Btn variant="ghost" href="https://www.facebook.com/cepeng/videos" icon={false}>
              <I.FB width="14" height="14"/> Facebook Reels
            </Btn>
          </div>
        </Reveal>

        <Reveal stagger className="-mx-6 sm:-mx-10 lg:-mx-14 overflow-x-auto pb-4 reels-scroll">
          <div className="flex gap-4 px-6 sm:px-10 lg:px-14" style={{ width: "max-content" }}>
            {reels.map((r, i) => <ReelCard key={i} {...r} idx={i+1} badge={platformBadge(r.platform)} />)}
          </div>
        </Reveal>

        {/* Bottom strip */}
        <Reveal className="mt-12 border-t border-white/10 pt-8 grid sm:grid-cols-3 gap-6">
          <SocialStat icon={<I.TT width="18" height="18"/>}  label="TikTok"    handle="@paroleternellengiringiri" count="12,4K"  href="https://www.tiktok.com/@paroleternellengiringiri"/>
          <SocialStat icon={<I.FB width="18" height="18"/>}  label="Facebook"  handle="cepeng"                  count="38,2K"  href="https://www.facebook.com/cepeng/"/>
          <SocialStat icon={<I.YT width="18" height="18"/>}  label="YouTube"   handle="Parole Eternelle TV"  count="9,8K"   href="https://www.youtube.com/channel/UCPmV9FMnv9imGbnxJdFiMcw"/>
        </Reveal>
      </div>

      <style>{`
        .reels-scroll{scrollbar-color:rgba(244,194,56,.3) transparent;}
        .reels-scroll::-webkit-scrollbar{height:8px}
        .reels-scroll::-webkit-scrollbar-thumb{background:rgba(244,194,56,.3);border-radius:8px}
      `}</style>
    </section>
  );
}

function ReelCard({ id, platform, tag, title, views, href, idx, badge }) {
  return (
    <a href={href} target="_blank" rel="noopener" className="group relative shrink-0 w-[220px] sm:w-[260px] block">
      <div className="relative" style={{ aspectRatio: "9 / 16" }}>
        <Photo tone="warm" className="absolute inset-0 ph">
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,.15) 0%, rgba(0,0,0,.0) 35%, rgba(0,0,0,.65) 75%, rgba(0,0,0,.92) 100%)" }}></div>
        </Photo>

        {/* The actual image-slot the user can drop a thumbnail into */}
        <image-slot
          id={id}
          shape="rect"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }}
          placeholder="Glissez la miniature">
        </image-slot>

        {/* Platform badge */}
        <div className="absolute top-3 left-3 z-10 px-2 py-1 font-mono text-[9px] tracking-[.18em] uppercase" style={{ background: badge.bg, color: badge.color }}>
          {badge.label}
        </div>

        {/* Play */}
        <div className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition z-10 pointer-events-none">
          <span className="w-14 h-14 rounded-full bg-white/95 text-ink-900 grid place-items-center">
            <I.Play width="18" height="18" style={{ marginLeft: 2 }}/>
          </span>
        </div>

        {/* Bottom info */}
        <div className="absolute bottom-3 left-3 right-3 z-10 pointer-events-none">
          <div className="font-mono text-[9px] tracking-[.22em] uppercase text-gold-300/90 mb-1">{tag}</div>
          <div className="font-display text-[18px] leading-tight text-white">{title}</div>
          <div className="mt-1 flex items-center gap-2 text-[10px] text-white/75 font-mono">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/><circle cx="12" cy="12" r="3"/></svg>
            {views}
          </div>
        </div>
      </div>
    </a>
  );
}

function SocialStat({ icon, label, handle, count, href }) {
  return (
    <a href={href} target="_blank" rel="noopener" className="group flex items-center gap-4 p-4 border border-white/10 hover:border-gold-400 transition bg-ink-700">
      <span className="w-12 h-12 rounded-full border border-gold-500/30 grid place-items-center text-gold-200 group-hover:bg-gold-500/10 transition shrink-0">{icon}</span>
      <div className="min-w-0 flex-1">
        <div className="font-mono text-[10px] tracking-[.22em] uppercase text-gold-300/80">{label}</div>
        <div className="font-display text-[20px] leading-none text-bone-50 mt-1 truncate">{handle}</div>
        <div className="text-[11px] text-bone-400 mt-1 tick">{count} abonnés</div>
      </div>
      <I.ArrowR width="16" height="16" className="text-bone-400 group-hover:text-gold-200 group-hover:translate-x-1 transition shrink-0" />
    </a>
  );
}

window.Reels = Reels;
