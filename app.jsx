// Main app

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accentHue": "gold",
  "ambiance": "hybride",
  "heroVariant": "cinematic",
  "showLiveBanner": true,
  "showSectionNav": true,
  "compact": false
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply accent hue as a CSS variable swap on root
  React.useEffect(() => {
    const map = {
      gold:    { c300: "#d8b66a", c400: "#cba255", c500: "#b8924f", c200: "#e3c98a" },
      copper:  { c300: "#d49872", c400: "#c47e54", c500: "#a86a44", c200: "#e0ad8a" },
      crimson: { c300: "#c47a7e", c400: "#a85a5f", c500: "#854347", c200: "#d49aa0" },
      sage:    { c300: "#a3b890", c400: "#88a274", c500: "#6e8459", c200: "#bccda9" },
    };
    const c = map[t.accentHue] || map.gold;
    const r = document.documentElement.style;
    r.setProperty('--gold-200', c.c200);
    r.setProperty('--gold-300', c.c300);
    r.setProperty('--gold-400', c.c400);
    r.setProperty('--gold-500', c.c500);
  }, [t.accentHue]);

  // Ambiance: "hybride" (sections claires + moments sombres) ou "sombre" (tout cinématique)
  React.useEffect(() => {
    const st = document.getElementById('hybrid-theme');
    if (st) st.disabled = t.ambiance === 'sombre';
  }, [t.ambiance]);

  return (
    <div className={t.compact ? "is-compact" : ""}>
      <Nav/>
      <SectionNav show={t.showSectionNav}/>
      <main>
        <Hero showLive={t.showLiveBanner} variant={t.heroVariant}/>
        <Jubile/>
        <PhotoWall/>
        <Explore/>
        <About/>
        <Program/>
        <Media/>
        <Concours/>
        <Reels/>
        <Temple/>
        <Bible/>
        <Ministries/>
        <Gallery/>
        <Donate/>
        <Contact/>
      </main>
      <Footer/>

      <TweaksPanel>
        <TweakSection label="Identité visuelle"/>
        <TweakColor
          label="Couleur d'accent"
          value={t.accentHue === "gold" ? "#d8b66a"
               : t.accentHue === "copper" ? "#d49872"
               : t.accentHue === "crimson" ? "#c47a7e"
               : "#a3b890"}
          options={[
            ["#d8b66a", "#b8924f", "#f7eed8"],
            ["#d49872", "#a86a44", "#f5e1d2"],
            ["#c47a7e", "#854347", "#e8c2c4"],
            ["#a3b890", "#6e8459", "#dde6cf"],
          ]}
          onChange={(v) => {
            const k = Array.isArray(v) ? v[0] : v;
            const m = { "#d8b66a": "gold", "#d49872": "copper", "#c47a7e": "crimson", "#a3b890": "sage" };
            setTweak('accentHue', m[k] || "gold");
          }}
        />
        <TweakRadio label="Ambiance" value={t.ambiance}
                    options={["hybride", "sombre"]}
                    onChange={(v) => setTweak('ambiance', v)}/>
        <TweakSection label="Hero"/>
        <TweakToggle label="Bandeau « En direct »" value={t.showLiveBanner}
                     onChange={(v) => setTweak('showLiveBanner', v)}/>
        <TweakRadio label="Style du hero" value={t.heroVariant}
                    options={["cinematic", "minimal"]}
                    onChange={(v) => setTweak('heroVariant', v)}/>
        <TweakSection label="Navigation"/>
        <TweakToggle label="Barre de sections" value={t.showSectionNav}
                     onChange={(v) => setTweak('showSectionNav', v)}/>
        <TweakSection label="Densité"/>
        <TweakToggle label="Mode compact" value={t.compact}
                     onChange={(v) => setTweak('compact', v)}/>
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
