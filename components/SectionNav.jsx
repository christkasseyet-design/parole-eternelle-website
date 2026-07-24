// Quick section-jump banner under the header + slim scroll-progress line.
// Desktop (lg+) only — on smaller screens the header drawer handles navigation.

function SectionNav({ show = true }) {
  const links = [
    ["Accueil", "#accueil"],
    ["Jubilé", "#jubile"],
    ["Vie d'église", "#vie"],
    ["Découvrir", "#decouvrir"],
    ["À propos", "#a-propos"],
    ["Programme", "#programmes"],
    ["Médias", "#medias"],
    ["Concours", "#concours"],
    ["Reels", "#reels"],
    ["Temple", "#temple"],
    ["Bible", "#bible"],
    ["Ministères", "#communaute"],
    ["Galerie", "#galerie"],
    ["Donner", "#donner"],
    ["Contact", "#contact"],
  ];

  const [active, setActive] = React.useState("accueil");
  const [progress, setProgress] = React.useState(0);
  const [past, setPast] = React.useState(false);
  const railRef = React.useRef(null);

  // Visible only after scrolling past the Hero.
  React.useEffect(() => {
    const onS = () => setPast(window.scrollY > window.innerHeight * 0.8);
    onS();
    window.addEventListener("scroll", onS, { passive: true });
    window.addEventListener("resize", onS);
    return () => { window.removeEventListener("scroll", onS); window.removeEventListener("resize", onS); };
  }, []);

  // Scroll-spy — the section nearest the top wins.
  React.useEffect(() => {
    const secs = links.filter(l => l[1].startsWith("#")).map(l => document.getElementById(l[1].slice(1))).filter(Boolean);
    if (!secs.length) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: "-150px 0px -55% 0px", threshold: 0 });
    secs.forEach(s => io.observe(s));
    return () => io.disconnect();
  }, []);

  // Top scroll-progress bar.
  React.useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const y = window.scrollY || h.scrollTop || 0;
      setProgress(max > 0 ? Math.min(1, y / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, []);

  // Keep the active chip scrolled into view within the rail.
  React.useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    const el = rail.querySelector(`[data-sec="${active}"]`);
    if (el) rail.scrollTo({ left: el.offsetLeft - rail.clientWidth / 2 + el.clientWidth / 2, behavior: "smooth" });
  }, [active]);

  return (
    <>
      <div className="fixed top-0 inset-x-0 z-[60] h-[3px] pointer-events-none">
        <div className="h-full bg-gold-300 origin-left" style={{ transform: `scaleX(${progress})`, transition: "transform .15s linear" }}></div>
      </div>

      {show && (
        <div className={`section-nav ${past ? "sn-in" : "sn-out"} fixed top-[88px] inset-x-0 z-40`}>
          <div className="max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-14">
            <div ref={railRef} className="no-scrollbar flex items-center gap-1.5 overflow-x-auto h-[46px]">
              {links.map(([label, href]) => {
                const anchor = href.startsWith("#");
                const id = anchor ? href.slice(1) : href;
                return (
                  <a key={href} href={href} data-sec={id}
                     onClick={anchor ? () => setActive(id) : undefined}
                     className={`section-nav-chip ${anchor && active === id ? "is-active" : ""}`}>
                    {label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

window.SectionNav = SectionNav;
