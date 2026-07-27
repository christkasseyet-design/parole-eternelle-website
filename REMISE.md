# Remise du site — C.E. Parole Éternelle Ngiri-Ngiri

Site en ligne : https://christkasseyet-design.github.io/parole-eternelle-website/

Ce document s'adresse à la personne qui reprend l'entretien du site.
Tout y est expliqué simplement, étape par étape.

---

## 1. La règle la plus importante : recompiler après chaque modification

Le site ne compile plus rien dans le navigateur — c'est ce qui le rend rapide.
En contrepartie, **les fichiers que le navigateur lit ne sont pas ceux que
vous modifiez.**

| Vous modifiez | Le navigateur lit | Donc il faut |
|---|---|---|
| `sections/Program.jsx` | `sections/Program.js` | recompiler le JavaScript |
| une classe Tailwind | `assets/tailwind.css` | recompiler le CSS |
| `bible-app.js`, `concours-app.js`, `i18n.js`, `image-slot.js` | le même fichier | rien à faire |

**Si vous oubliez cette étape, votre modification n'apparaîtra pas** — même si
le code source semble correct. C'est l'erreur la plus facile à commettre.

### Recompiler le JavaScript (fichiers .jsx)

```bash
npx @babel/cli --presets @babel/preset-react sections/Program.jsx -o sections/Program.js
```

### Recompiler le CSS Tailwind

```bash
npm install -D tailwindcss@3.4.17
echo '@tailwind base;@tailwind components;@tailwind utilities;' > tw-input.css
npx tailwindcss -c tailwind.config.js       -i tw-input.css -o assets/tailwind.css       --minify
npx tailwindcss -c tailwind.light.config.js -i tw-input.css -o assets/tailwind-light.css --minify
```

**Attention — deux palettes distinctes, à ne jamais fusionner :**

| Fichier CSS | Pages | Couleurs |
|---|---|---|
| `assets/tailwind.css` | index, galerie, concours, predications | bleu nuit / or |
| `assets/tailwind-light.css` | bible, videos | crème / corail |

Les mêmes noms de classes (`paper`, `coral`, `ink`) désignent des couleurs
**différentes** selon la page. Fusionner les deux fichiers casserait le
lecteur biblique et la page vidéos.

---

## 2. Voir le nombre de visiteurs (5 minutes)

1. Créez un compte gratuit sur **https://www.goatcounter.com**
   (choisissez un code, par exemple `parole-eternelle`).
2. Dans chacun des 6 fichiers HTML, cherchez `var CODE = "";`
3. Mettez votre code entre les guillemets : `var CODE = "parole-eternelle";`
4. Publiez. Les statistiques apparaissent sur `https://VOTRECODE.goatcounter.com`

GoatCounter n'utilise **aucun cookie** → pas de bannière de consentement, et le
script ne pèse que 3 Ko — important pour les connexions lentes à Kinshasa.

---

## 3. Entretien régulier

| Quoi | Où | Quand | Recompiler ? |
|---|---|---|---|
| Programme des cultes | `sections/Program.jsx` | chaque mois | oui (.js) |
| Questions du concours | `concours-app.js` | chaque mois | non |
| Nouvelles photos | `assets/photos/` + `galerie.html` | selon les événements | non |
| Réponses de l'assistant | `components/SupportBot.jsx` | au besoin | oui (.js) |
| Traductions | `i18n.js` | au besoin | non |

**Compressez toujours les photos avant de les ajouter** (viser moins de 400 Ko).
Une photo de 5 Mo rend la page inutilisable sur un téléphone en 3G.

---

## 4. Ce que le site fait — et ne fait pas

**Fonctionne réellement :**
- Le lecteur vidéo intègre les vraies vidéos de la chaîne YouTube.
- Le concours biblique fonctionne (questions réelles, score, une participation par mois).
- Tous les formulaires ouvrent un e-mail pré-rempli vers l'église.
- Le compte à rebours calcule le vrai temps restant jusqu'au prochain culte.
- L'assistant « Ange » répond hors ligne à partir d'une base locale
  (`components/SupportBot.jsx`, tableau `SB_FAQ`). **Il n'utilise aucune IA en
  ligne** — pour ajouter une réponse, ajoutez une entrée avec ses mots-clés.

**Volontairement retiré (chiffres invérifiables) :**
Les statistiques hebdomadaires, les compteurs de vues des reels, le pourcentage
d'avancement du chantier et le nombre de donateurs ont été supprimés : ils
étaient inventés. Pour une église, afficher de faux chiffres — surtout sur une
collecte — nuit à la confiance. Si le comité communique les chiffres réels,
ils pourront être réintégrés.

---

## 5. La Bible

| Langue | État | Source |
|---|---|---|
| Français (Louis Segond 1910) | complet | getbible.net |
| English (KJV) | complet | getbible.net |
| Lingala | complet, 66 livres | bible.helloao.org |
| Swahili | complet, 66 livres | bible.helloao.org |
| Kikongo | **indisponible** | — |
| Tshiluba | **indisponible** | — |

Il n'existe à ce jour **aucune Bible numérique librement utilisable** en kikongo
ni en tshiluba. Le site l'indique honnêtement et affiche le texte français en
attendant. Si une édition devient disponible, il suffira d'ajouter son
identifiant dans `bible-app.js`, objet `HELLOAO`.

**Lecture audio :** elle utilise la synthèse vocale du navigateur. Le lingala
n'a pas encore de voix de synthèse — le texte est lu avec une prononciation
française. Cela ne dépend pas du site.

**Interface :** l'anglais couvre la navigation, les boutons et les textes
principaux. Le **lingala ne couvre qu'environ 80 expressions vérifiées** — à
compléter par un locuteur natif dans `i18n.js` (`window.I18N_DICT`, ajouter
`ln: "..."`). Ne pas traduire automatiquement : la qualité compte pour une église.

---

## 6. Téléphones et application

Le site est utilisable comme une application : sur Android et iPhone, le menu du
navigateur propose **« Ajouter à l'écran d'accueil »**. Le site s'ouvre alors en
plein écran, avec le logo de l'église, sans barre de navigateur, et un accès
rapide à la Bible, aux prédications et à la galerie.

Les fichiers concernés : `manifest.json` et `assets/icon-192.png`,
`assets/icon-512.png`, `assets/apple-touch-icon.png`.

Pour aller plus loin (fonctionnement hors ligne complet, notifications), il
faudrait ajouter un *service worker* — c'est la prochaine étape logique.

---

## 7. À vérifier avant de diffuser largement

- [ ] Coordonnées de dons (Rawbank, Equity, Orange, M-Pesa, Airtel) confirmées par la trésorerie
- [ ] Adresse e-mail et numéro WhatsApp exacts
- [ ] Programme du mois en cours à jour
- [ ] Après chaque modification : **recompiler** (voir section 1)

---

## 8. Améliorations possibles

1. **Service worker** — permettrait de lire la Bible sans connexion.
2. **Nom de domaine propre** (par ex. `paroleeternelle.cd`) — plus facile à
   retenir et à imprimer sur les affiches.
3. **Traductions lingala** de l'interface, par un membre de l'assemblée.
4. **Photos de meilleure qualité** pour les sections principales.
