# Übergabe-Prüfliste — Parole Éternelle Webseite

Für die Person, die die Seite prüft und optimiert. Stand: 20.07.2026.

## ✅ Geprüft und funktionierend (automatisierter Browser-Test)

- **Alle 48 Bilder laden** (0 × 404, 0 defekte Bilder) — echte Gemeindefotos in Hero, Photo-Wall, Découvrir, À propos, Prédications, Reels, Temple, Ministères und Galerie.
- **Keine JavaScript-Fehler** beim Laden, Scrollen und Klicken.
- **Alle internen Anker-Links** führen auf existierende Sektionen.
- **Interaktionen getestet:** Programm-Filter, Liste/Kalender-Umschalter, Médias-Tabs (Prédications/Worship/Podcast/Direct), Ministères-Auswahl, Galerie-Lightbox mit ◀/▶, Kopier-Buttons der Spendenkonten, Mobile-Menü.

## ✅ Echte, verifizierte Links

| Button/Ort | Ziel |
|---|---|
| Alle YouTube-Buttons (Hero, Médias, Reels, Contact, Footer) | `youtube.com/channel/UCPmV9FMnv9imGbnxJdFiMcw` (CE Parole Eternelle TV) |
| Live-Embed im Tab „Direct" | YouTube-Live-Stream des Kanals (zeigt Rediffusionen, wenn kein Live läuft) |
| Alle Facebook-Buttons | `facebook.com/cepeng` (+ /videos, /photos) |
| Alle TikTok-Buttons | `tiktok.com/@paroleternellengiringiri` |
| „Ajouter au calendrier" (alle 24 Programmeinträge) | Öffnet Google Calendar mit korrektem Datum, Uhrzeit, Dauer, Adresse, Zeitzone Africa/Kinshasa |
| „Itinéraire" + Adresse im Footer | Google-Maps-Suche „Av. Monkoto Ngiri-Ngiri Kinshasa" |
| „Ouvrir la Bible" + Sprach-Pills | bible.com (Jean 3, LSG) |
| WhatsApp (Floating-Button, Contact, Footer) | `wa.me/243999000222` — ⚠️ Nummer ist Platzhalter, siehe unten |

## ⚠️ Vor dem Livegang zu ersetzen (Platzhalter)

1. **Telefon:** `+243 999 000 111` · **WhatsApp:** `+243 999 000 222` — in `index.html` suchen & ersetzen (kommt je 2–3× vor, auch im `wa.me/…`-Link).
2. **E-Mail:** `contact@paroleeternelle.cd`.
3. **Instagram:** Die Kirche hat lt. Flyer ein Instagram-Konto, das Handle war aber nicht ermittelbar. IG-Buttons sind darum aktuell **ausgeblendet**. Sobald das Handle bekannt ist: in Contact die 3-Spalten-Sozialreihe um einen `ContactChannel` ergänzen und im Footer ein `<Social>` mit dem IG-Icon einfügen.
4. **„Mentions légales" & „Confidentialité"** im Footer zeigen auf `#` — die einzigen bewusst toten Links. Rechtsseiten müssen erstellt werden.
5. **Demo-Zahlen:** Follower (12,4K/38,2K/9,8K), Wochen-Statistiken, Spendenstand **68 % / 350K USD / 1 420 Spender**, Transparenz-Prozente — alles Designwerte, durch echte ersetzen.
6. **Programm Mai 2026:** Wochenrhythmus ist echt (Di 07h30+10h00 · Mi 17h · Ve 12h30 + Ngomba 17h), die konkreten Themen/Zuordnungen pro Datum sind redaktionell erfunden.
7. **Predigt-/Worship-/Podcast-Titel** sind Beispielinhalte; Player sind UI-Demos ohne echte Audio/Video-Dateien.
8. **Formulare** (Kontakt, Gebet, Newsletter, Spende) haben **kein Backend** — sie validieren nur im Browser. Anbindung nötig: z. B. Formspree/Web3Forms für Kontakt+Gebet, Mailchimp/Brevo für Newsletter; Spendenformular ist informativ (echte Zahlung läuft über die angezeigten Mobile-Money-Nummern/Konten).
9. **Spendenkonten** (Rawbank, Equity BCDC, Orange, M-Pesa, Airtel) wurden 1:1 vom offiziellen Temple-Plakat übernommen — vor Livegang gegenprüfen.
10. **Ministères-Leiter:** Pasteurs-Namen stammen von den Jubilé-2026-Flyern (Kaseya, Mongu, Kondo Wa Kondo, Mugusho, N'Landu); die „Min."-Namen (Reagan & Sandra, Naomi, Bénédicte, Marthe) sind Platzhalter.
11. **`pasteur-couple.jpg`** zeigt nur Pasteur Raphaël Kaseya (aus Flyer ausgeschnitten) — gegen echtes Foto des Ehepaars tauschen, wenn vorhanden.

## 🔧 Empfohlene technische Optimierungen (für den Reviewer)

- **Build-Setup:** Die Seite nutzt React + Babel im Browser (Prototyp-Architektur, eine Datei). Für Produktion: nach Vite/Next.js portieren oder zumindest JSX vorkompilieren — spart ~1,5 s Ladezeit.
- **Tailwind:** Play-CDN durch gebautes CSS ersetzen (`npx tailwindcss`), Config steht im `<head>`.
- **Bilder:** JPGs sind bereits auf ≤1600 px/~80 % komprimiert (Gesamt ~9 MB). Optional WebP/AVIF + `srcset`.
- **Fonts** self-hosten (aktuell Google Fonts CDN).
- **SEO:** Meta-Description vorhanden; ergänzen: Open-Graph-Tags, Favicon, `sitemap.xml`, strukturierte Daten (LocalBusiness/Church).
- **Karte:** Die stilisierte SVG-Karte in Contact ggf. durch echtes Google-Maps-Embed mit exakten Koordinaten ersetzen.
- **Unterseiten** aus dem Originaldesign (bible.html, videos.html, predications.html) existieren noch nicht — Nav verlinkt stattdessen auf Sektionen bzw. extern. Bei Bedarf mit `PROMPT.md` regenerieren.
