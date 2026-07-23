# Upload auf GitHub — Schritt für Schritt (ca. 10 Minuten)

## 1. Alte Dateien löschen
1. Öffne https://github.com/christkasseyet-design/parole-eternelle-website
2. Gehe zu **Settings** (Zahnrad, oben rechts) → ganz unten **Danger Zone** ist NICHT nötig — wir löschen nur Dateien, nicht das Repo.
3. Einfacher Weg: Öffne im Repo jede Datei → Mülleimer-Symbol → **Commit changes**. Bei vielen Dateien ist Weg 2 schneller:

## 2. Schnellster Weg: Alles auf einmal ersetzen
1. Entpacke die Zip-Datei `parole-eternelle-upload.zip` auf deinem Computer.
2. Öffne das Repo auf github.com → Taste **Punkt (.)** drücken ODER gehe zu https://github.dev/christkasseyet-design/parole-eternelle-website — der Web-Editor öffnet sich.
3. Links im Datei-Baum: alle alten Dateien markieren → Rechtsklick → **Delete**.
4. Den entpackten Ordnerinhalt per **Drag & Drop** in den Datei-Baum ziehen.
5. Links auf das Quellcode-Symbol (3. Icon) → Commit-Nachricht eingeben (z. B. „Neue Website") → **Commit & Push**.
6. 2–3 Minuten warten, dann https://christkasseyet-design.github.io/parole-eternelle-website/ neu laden (Strg+F5).

## Wichtig
- Die Datei `.nojekyll` muss mit hochgeladen werden (sie ist im Zip enthalten, evtl. unsichtbar).
- Die Ordnerstruktur beibehalten: `assets/`, `sections/`, `components/` als Ordner, die HTML-Dateien direkt im Hauptverzeichnis.
- Nichts umbenennen.

## Danach prüfen
- Startseite: Fotos sichtbar? Logo statt „PE"-Kreis?
- Menü: Prédications, Vidéos, Bible, Galerie, Concours öffnen sich?
- Ein Link per WhatsApp an dich selbst schicken → Vorschaubild + Beschreibung erscheinen?

## Monatliche Pflege
- Quiz: `concours-app.js` bearbeiten (Fragen austauschen).
- Neue Fotos: in `assets/photos/` hochladen und in `galerie.html` eintragen.
