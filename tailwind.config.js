/** Konfiguration für die vorkompilierte CSS-Datei (ersetzt das CDN). */
module.exports = {
  content: ["./index.html","./galerie.html","./concours.html","./predications.html","./app.js","./galerie-app.js","./concours-app.js","./yt-real.js","./tweaks-panel.js","./sections/*.js","./components/*.js","./sections/*.jsx","./components/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['Manrope', 'ui-sans-serif', 'system-ui'],
        mono: ['"JetBrains Mono"', 'ui-monospace'],
      },
      colors: {
        ink:  { 900:'#070708', 800:'#0a0a0c', 700:'#101014', 600:'#15161b', 500:'#1c1d24', 400:'#23242c', 300:'#2d2e37' },
        bone: { 50:'#fafaf7', 100:'#f3f2ec', 200:'#dcdad1', 300:'#a3a2a0', 400:'#6c6c6e', 500:'#4a4a4d' },
        gold: { 50:'#f7eed8', 100:'#ecdcae', 200:'#e3c98a', 300:'#d8b66a', 400:'#cba255', 500:'#b8924f', 600:'#967641', 700:'#6e5630' },
        paper: { DEFAULT:'#061a44', 2:'#04132f', 3:'#0a2257' },
        coral: { DEFAULT:'#f4c238', soft:'rgba(244,194,56,.18)', deep:'#d9a823' },
        surface: '#0e2862',
      },
      letterSpacing: { mega: '-0.04em' },
      spacing: { 18: '4.5rem' },
      opacity: { 8: '0.08', 12: '0.12', 15: '0.15' },
    }
  },
  corePlugins: { preflight: true },
};
