function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = [
    ["A propos", "#a-propos"],
    ["Prédication", "predications.html"],
    ["Construction", "#temple"],
    ["Ministères", "#communaute"],
    ["Event", "#jubile"],
    ["Bible", "bible.html"],
    ["Concours", "concours.html"],
  ];

  return (
    <>
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "nav-scrolled" : ""}`}>
        <div className="max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-14 flex items-center justify-between h-[88px]">
          <a href="#accueil" className="flex items-center gap-3.5 group">
            <Logo />
            <div className="font-display text-[24px] sm:text-[28px] md:text-[30px] tracking-tight text-bone-50 leading-none">
              Parole Éternelle
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {items.map(([label, href]) => (
              <a key={href} href={href} className="relative text-[13px] font-medium text-bone-200/80 hover:text-bone-50 transition group">
                {label}
                <span className="absolute left-0 right-0 -bottom-1 h-px bg-gold-300 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="#donner" className="hidden sm:inline-flex items-center px-6 py-2.5 rounded-full bg-gold-300 text-ink-900 text-[13px] font-bold uppercase tracking-[.08em] hover:bg-gold-200 transition">Donation</a>
            <button onClick={() => setOpen(!open)} className="lg:hidden w-10 h-10 grid place-items-center rounded-full border border-white/10 text-bone-50">
              {open ? <I.Close width="18" height="18"/> : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div className="lg:hidden border-t border-white/10 bg-ink-900/95 backdrop-blur-xl">
            <div className="px-6 py-6 grid grid-cols-2 gap-x-6 gap-y-3">
              {items.map(([label, href]) => (
                <a key={href} href={href} onClick={() => setOpen(false)} className="text-[15px] py-2 text-bone-100 border-b border-white/5">{label}</a>
              ))}
              <a href="#donner" onClick={() => setOpen(false)} className="text-[15px] py-2 text-gold-200 font-semibold border-b border-white/5">Donation</a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

function Logo() {
  return (
    <image-slot
      id="church-logo"
      shape="circle"
      src="assets/logo-parole-eternelle.jpg"
      style={{ width: "44px", height: "44px", display: "inline-block" }}
      placeholder="Logo">
    </image-slot>
  );
}

window.Nav = Nav;
window.Logo = Logo;
