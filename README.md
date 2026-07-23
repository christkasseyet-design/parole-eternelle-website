# HANDOFF — Webseite CE Parole Eternelle Ngiri-ngiri (Kinshasa)

## Was das hier ist
Eine **fertige, funktionierende statische Webseite** (HTML/CSS/JS, Tailwind via CDN, React nur für einzelne Sektionen). Sie ist das Produkt selbst — **nicht** in ein Framework umschreiben, sondern direkt deployen und gezielt verfeinern.

## Erste Schritte
1. Lokal testen: `npx serve .` im Projektordner, dann http://localhost:3000 öffnen (Direktes Öffnen der Datei per Doppelklick bricht die YouTube-Einbettung und fetch()-Aufrufe).
2. Aufgaben für Politur/Feinschliff: siehe `claude-code/PROMPT.md`.
3. Deployment & Domain: siehe `claude-code/ANLEITUNG.md` (7 Schritte, Netlify/Cloudflare Pages, kostenlos).

## Seitenstruktur
- `index.html` — Startseite (Hero, Programm, Médias-Tabs, Kontakt). Lädt `app.jsx` + `sections/*.jsx` via Babel.
- `predications.html` — Prédications-Archiv, großer YouTube-Player (Kanal-Playlist `UUPmV9FMnv9imGbnxJdFiMcw`) + Kartenliste aus `yt-real.js`.
- `videos.html` — Alle Videos + TikTok-Extraits (@paroleternellengiringiri).
- `bible.html` + `bible-app.js` + `bible-data.js` — Bibel-Leser (Louis Segond).
- `galerie.html` — Fotogalerie (Bilder in `uploads/`).
- `concours.html` + `concours-app.js` — Monatlicher Bibel-Quiz-Wettbewerb (Stand wird in localStorage gehalten).
- `yt-real.js` — gemeinsames Modul: holt echte Video-IDs/Titel/Thumbnails vom Kanal @paroleeternellengiri-ngiri, 24h-Cache in localStorage, Foto-Fallback bei Netzfehler.
- `i18n.js` — Sprachumschaltung FR/LN (Französisch ist Standard).
- `sections/`, `components/` — JSX-Sektionen der Startseite.
- `assets/logo-original.png` — Logo. `uploads/` — Fotos (WhatsApp-Bilder der Gemeinde, Galerie + Fallback-Thumbnails).
- `archive/`, `index-print.html`, `concours-standalone-src.html`, `tweaks-panel.jsx`, `image-slot.js`, `PROMPT.md` (Root), `CONTEXT.md` — Alt-/Hilfsdateien, fürs Deployment nicht nötig, können ignoriert werden.

## Bereits gelöst — nicht erneut anfassen
- YouTube-Fehler 153: alle Player senden `referrerpolicy="strict-origin-when-cross-origin"`. Beim Testen über `file://` erscheint der Fehler trotzdem — nur über http(s) testen.
- Videotitel kommen 1:1 von YouTube (keine künstlichen Präfixe).
- Leere Filterzustände zeigen Hinweistexte statt Leerraum.

## Design-Vorgaben
Farben, Typografie und Ton der bestehenden Seiten beibehalten (Palette aus `index.html`-Styles). Sprache der Inhalte: Französisch (mit Lingala-Umschaltung). Keine Emojis, kein Neu-Design — nur Feinschliff gemäß `claude-code/PROMPT.md`.
