/** Palette der hellen Seiten (bible.html, videos.html) — creme/koralle. */
module.exports = {
  content: ["./bible.html", "./videos.html", "./bible-app.js"],
  theme: {
    extend: {
      fontFamily: {
        display: ['Archivo','sans-serif'],
        serif: ['"Cormorant Garamond"','serif'],
        sans: ['Manrope','sans-serif'],
        mono: ['"JetBrains Mono"','ui-monospace'],
      },
      colors: {
        ink:   { 900:'#0d0d10', 800:'#161618', 700:'#1f1f22', 600:'#2a2a2f', 500:'#3a3a40', 400:'#5a5853', 300:'#857f72' },
        paper: { DEFAULT:'#fbf8f1', 2:'#f4eee2', 3:'#ece4d3', 4:'#e0d4ba' },
        coral: { DEFAULT:'#e4593a', soft:'#fbe6dd', deep:'#c44424' },
        gold:  { 200:'#cfa75a', 300:'#b8924f', 400:'#967641' },
      },
      letterSpacing: { mega: '-0.04em' },
      spacing: { 18: '4.5rem' },
      opacity: { 8:'0.08', 12:'0.12', 15:'0.15' },
    }
  },
};
