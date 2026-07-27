# Mettre le site sur une adresse propre (par ex. paroleeternelle.org)

Aujourd'hui le site est à l'adresse :
`https://christkasseyet-design.github.io/parole-eternelle-website/`

Une adresse courte est plus facile à retenir, à imprimer sur les affiches et à
dicter au téléphone. Voici comment procéder — comptez 30 minutes, puis 1 à 24 h
d'attente technique.

## Étape 1 — Choisir et acheter l'adresse

| Adresse | Prix indicatif / an | Remarque |
|---|---|---|
| `paroleeternelle.cd` | 50–100 USD | Extension nationale congolaise |
| `paroleeternelle.org` | ~12 USD | Usuelle pour les églises, la plus simple |
| `parole-eternelle.church` | ~30 USD | L'extension dit tout de suite de quoi il s'agit |

Vendeurs fiables : Namecheap, Gandi, Cloudflare Registrar, OVH.

**Éviter les accents.** `paroleéternelle` devient techniquement
`xn--paroleternelle-jkb` : certains téléphones, WhatsApp et Facebook cassent
ces liens, et sur une affiche personne ne sait s'il faut taper « é » ou « e ».

## Étape 2 — Créer le fichier CNAME

À la racine du dépôt, créer un fichier nommé exactement `CNAME`
(sans extension), contenant **une seule ligne** — votre adresse, sans `https://` :

```
paroleeternelle.org
```

## Étape 3 — Configurer le DNS chez le vendeur

Ajouter ces enregistrements :

| Type | Nom | Valeur |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | christkasseyet-design.github.io |

## Étape 4 — Activer dans GitHub

1. Ouvrir le dépôt → **Settings** → **Pages**
2. Champ « Custom domain » : saisir l'adresse, puis **Save**
3. Attendre que la coche verte apparaisse (jusqu'à 24 h)
4. Cocher **Enforce HTTPS** — le certificat est gratuit et automatique

## Étape 5 — Mettre à jour les liens dans le site

Une fois l'adresse active, remplacer l'ancienne URL dans les balises de partage
(elles servent à l'aperçu WhatsApp et Facebook) :

- les 6 fichiers HTML : chercher `christkasseyet-design.github.io/parole-eternelle-website`
- `sitemap.xml` et `robots.txt`

## À savoir

- L'ancienne adresse continuera de fonctionner et redirigera automatiquement.
- Le certificat de sécurité (le cadenas) est fourni gratuitement par GitHub.
- Pensez à noter la date de renouvellement : si l'adresse expire, le site
  devient inaccessible du jour au lendemain.
