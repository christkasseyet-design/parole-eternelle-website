# Remise du site — C.E. Parole Éternelle Ngiri-Ngiri

Site en ligne : https://christkasseyet-design.github.io/parole-eternelle-website/

## 1. Voir le nombre de visiteurs (5 minutes)

1. Créez un compte gratuit sur **https://www.goatcounter.com** (choisissez un code, par ex. `parole-eternelle`).
2. Ouvrez `index.html` et cherchez `var CODE = "";`
3. Mettez votre code entre les guillemets : `var CODE = "parole-eternelle";`
4. Faites la même chose dans : `predications.html`, `videos.html`, `bible.html`, `galerie.html`, `concours.html`.
5. Enregistrez et publiez. Les statistiques apparaissent sur `https://VOTRECODE.goatcounter.com`.

GoatCounter n'utilise **aucun cookie** → pas de bannière de consentement nécessaire, et le script est très léger (~3 Ko), important pour les connexions lentes.

## 2. Entretien mensuel

| Quoi | Où | Quand |
|---|---|---|
| Programme des cultes | `sections/Program.jsx` | chaque mois |
| Questions du concours | `concours-app.js` | chaque mois |
| Nouvelles photos | `assets/photos/` + `galerie.html` | selon les événements |
| Coordonnées de dons | `sections/Temple.jsx` | à vérifier |

## 3. Points techniques à connaître

- **Tailwind et Babel sont chargés depuis un CDN** et compilés dans le navigateur. Cela fonctionne, mais ralentit le premier affichage. Pour un vrai site de production, il faudrait précompiler une fois (Vite ou esbuild). C'est l'amélioration technique la plus utile à prévoir.
- **L'assistant « Ange » fonctionne hors ligne** : il répond à partir d'une base de questions/réponses locale (`components/SupportBot.jsx`, tableau `SB_FAQ`). Pour ajouter une réponse, ajoutez une entrée avec ses mots-clés. Il n'utilise aucune IA en ligne.
- **Traductions** : le fichier `i18n.js` contient un dictionnaire (`window.I18N_DICT`).
  - L'**anglais** couvre maintenant la navigation, les boutons, les libellés et les textes principaux.
  - Le **lingala** ne couvre que ~80 expressions vérifiées. **À compléter par un locuteur natif** : ajoutez `ln: "..."` aux entrées existantes. Ne pas traduire automatiquement — la qualité compte pour une église.
  - Les grands titres artistiques restent en français (ils sont découpés en fragments dans le code ; les traduire mot à mot casserait la grammaire anglaise).
- **Les emplacements photo vides** (`image-slot`) sont invisibles pour les visiteurs et ne s'ouvrent qu'en mode auteur — les visiteurs ne peuvent pas ouvrir de boîte de dialogue de fichier.

## 4. Vérifications avant de partager largement

- [ ] Numéros de dons (Rawbank, Equity, Orange, M-Pesa, Airtel) confirmés avec la trésorerie
- [ ] Numéro WhatsApp de contact correct
- [ ] Programme du mois en cours à jour
