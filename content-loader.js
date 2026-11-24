/* content-loader.js — charge les fichiers de contenu modifiables depuis le
   panneau d'administration (/admin). Chaque fichier vit dans content/*.json.
   window.peContent("events", fallback) → Promise qui donne toujours un objet :
   le JSON publié, ou `fallback` si le fichier est introuvable ou illisible
   (réseau coupé, JSON cassé…) — la page ne reste jamais vide à cause d'une
   erreur de saisie. Le paramètre ?v= change chaque minute pour que les
   modifications publiées apparaissent vite malgré le cache de GitHub Pages. */
(function () {
  var cache = {};
  window.peContent = function (name, fallback) {
    if (!cache[name]) {
      var url = "content/" + name + ".json?v=" + Math.floor(Date.now() / 60000);
      cache[name] = fetch(url, { cache: "no-cache" })
        .then(function (r) { if (!r.ok) throw new Error("HTTP " + r.status); return r.json(); })
        .catch(function () { return fallback; });
    }
    return cache[name];
  };
  // « https://youtu.be/XXXXXXXXXXX », « …/watch?v=XXXXXXXXXXX », « …/shorts/XXXXXXXXXXX »,
  // « …/embed/XXXXXXXXXXX » ou directement l'identifiant à 11 caractères.
  window.peYtId = function (input) {
    var s = String(input || "").trim();
    if (/^[A-Za-z0-9_-]{11}$/.test(s)) return s;
    var m = s.match(/(?:v=|youtu\.be\/|shorts\/|embed\/|live\/)([A-Za-z0-9_-]{11})/);
    return m ? m[1] : "";
  };
})();
