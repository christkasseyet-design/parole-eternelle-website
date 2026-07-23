/* yt-real.js — charge les vraies vidéos de la chaîne YouTube
   Parole Eternelle Ngiri-ngiri TV (UCPmV9FMnv9imGbnxJdFiMcw), côté client.
   Le lecteur officiel (iframe API) expose la liste des uploads ; les titres
   viennent d'oEmbed (noembed). Cache 24h en localStorage ("peYtVideos").
   API : window.loadRealYtVideos(cb) → cb([{id, title, cat}]) (cb jamais
   appelé si échec) ; window.peAutoCat(title) → catégorie. */
(function () {
  var KEY = "peYtVideos7", TTL = 864e5, LIST = "UUPmV9FMnv9imGbnxJdFiMcw";
  var pending = null, loaded = null;

  function autoCat(t) {
    t = (t || "").toLowerCase();
    if (/(louange|worship|adoration|chant|chorale|concert)/.test(t)) return "Louange";
    if (/(veill[ée]e|intercession|pri[èe]re|ngomba)/.test(t)) return "Veillées";
    if (/(jeunesse|nextgen|jeunes|camp)/.test(t)) return "Jeunesse";
    if (/(t[ée]moignage)/.test(t)) return "Témoignages";
    if (/([ée]tude|enseignement)/.test(t)) return "Étude";
    if (/(conf[ée]rence|jubil[ée]|s[ée]minaire|invit[ée])/.test(t)) return "Conférences";
    if (/(pr[ée]dication|message|parole|campagne)/.test(t)) return "Prédications";
    return "Cultes";
  }
  window.peAutoCat = autoCat;

  // Nettoie les titres YouTube : retire « LIVE », « CULTE DOMINICAL », dates,
  // emojis — extrait le PRÉDICATEUR et le THÈME de la Botschaft.
  function stripDates(s) {
    return (s || "")
      .replace(/\ben\s+direct\b/gi, " ")
      .replace(/\blive\b/gi, " ")
      .replace(/\bculte\s+dominical\b/gi, " ")
      .replace(/\bculte\s+du\s+dimanche\b/gi, " ")
      .replace(/\b(lundi|mardi|mercredi|jeudi|vendredi|samedi|dimanche)\s+(?=\d)/gi, " ")
      .replace(/\b(lun|mar|mer|jeu|ven|sam|dim)\.?\s+(?=\d)/gi, " ")
      .replace(/\bdu\s+\d{1,2}(er)?\b/gi, " ")
      .replace(/\b\d{1,2}(er)?\s+(janvier|f[ée]vrier|mars|avril|mai|juin|juillet|ao[ûu]t|septembre|octobre|novembre|d[ée]cembre)(\s+\d{4})?\b/gi, " ")
      .replace(/\b(janvier|f[ée]vrier|mars|avril|mai|juin|juillet|ao[ûu]t|septembre|octobre|novembre|d[ée]cembre)\s+\d{4}\b/gi, " ")
      .replace(/\b\d{1,2}[\/.\-]\d{1,2}[\/.\-]\d{2,4}\b/g, " ")
      .replace(/\b(19|20)\d{2}\b/g, " ")
      .replace(/\s{2,}/g, " ")
      .replace(/^[\s\-–—·•/,:;.]+|[\s\-–—·•/,:;.]+$/g, "").trim();
  }
  var SMALL = /^(de|la|le|les|du|des|et|en|un|une|au|aux|sur|pour|dans|par|qui|que|ne|pas|est|se|sa|son|ses|d'|l')$/i;
  function titleCase(s) {
    if (!s) return s;
    if (s !== s.toUpperCase()) return s; // déjà mixte — ne pas toucher
    return s.toLowerCase().split(" ").map(function (w, i) {
      if (i > 0 && SMALL.test(w)) return w;
      return w.charAt(0).toUpperCase() + w.slice(1);
    }).join(" ");
  }
  var SPEAKER_RE = /\b(past\.?(eur)?e?|apo\.?|r[ée]v\.?([ée]rend)?|ap[ôo]tre|[ée]vang[ée]liste|proph[èe]te(sse)?|bishop|[ée]v[ê e]que|fr[èe]re|sœur|soeur|dr\.?|docteur|ministre)\b/i;
  function parseTitle(raw) {
    var s = raw || "";
    try { s = s.replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{200D}]/gu, ""); } catch (e) {}
    // Date du culte — gardée comme titre de secours si tout le reste est du
    // boilerplate (« LIVE | Culte Dominical | Dimanche 28 Juin »)
    var dm = s.match(/\b(\d{1,2})(?:er)?\s+(janvier|f[ée]vrier|mars|avril|mai|juin|juillet|ao[ûu]t|septembre|octobre|novembre|d[ée]cembre)\b/i);
    // Segments : pipes ET tirets espacés (« Thème - Apotre X - Campagne »)
    var parts = s.split(/\s*\|\s*|\s+[–—]\s+|\s+-\s+/);
    var speaker = "", themes = [];
    parts.forEach(function (p) {
      var c = stripDates(p);
      if (!c) return;
      if (!speaker && SPEAKER_RE.test(c)) { speaker = titleCase(c); return; }
      themes.push(c);
    });
    // Le thème = le segment restant le plus long (les thèmes sont détaillés)
    themes.sort(function (a, b) { return b.length - a.length; });
    var theme = titleCase(themes[0] || "");
    if (!theme) theme = dm ? "Culte du " + dm[1] + " " + dm[2].toLowerCase() : "Culte dominical";
    return { title: theme, speaker: speaker };
  }
  window.peParseTitle = parseTitle;

  // Titre 1:1 comme sur YouTube — on retire UNIQUEMENT le boilerplate
  // (« 🔴 LIVE | CULTE DOMINICAL | DIMANCHE 13 JUILLET 2026 »), le reste
  // (thème + prédicateur) est gardé mot pour mot, casse d'origine.
  function cleanTitle(raw) {
    var s = raw || "";
    try { s = s.replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{200D}]/gu, ""); } catch (e) {}
    var dm = s.match(/\b(\d{1,2})(?:er)?\s+(janvier|f[ée]vrier|mars|avril|mai|juin|juillet|ao[ûu]t|septembre|octobre|novembre|d[ée]cembre)\b/i);
    var kept = [];
    s.split(/\s*\|\s*|\s+[–—]\s+|\s+-\s+/).forEach(function (p) {
      var c = stripDates(p);
      if (c) kept.push(c); // verbatim — pas de reformatage
    });
    var t = kept.join(" | ");
    if (!t) t = dm ? "Culte du " + dm[1] + " " + dm[2].toLowerCase() : "Culte dominical";
    return t;
  }
  window.peCleanTitle = cleanTitle;

  function fromCache() {
    try {
      var c = JSON.parse(localStorage.getItem(KEY) || "null");
      if (c && Date.now() - c.ts < TTL && Array.isArray(c.v) && c.v.length) return c.v;
    } catch (e) {}
    return null;
  }

  function applyReal(ids) {
    var take = ids.slice(0, 24);
    Promise.all(take.map(function (id) {
      return fetch("https://noembed.com/embed?url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + id))
        .then(function (r) { return r.json(); })
        .then(function (j) { return { id: id, title: j.title || "" }; })
        .catch(function () { return { id: id, title: "" }; });
    })).then(function (out) {
      loaded = out.map(function (v) {
        var raw = (v.title || "Vidéo · Parole Eternelle Ngiri-ngiri TV").trim();
        return { id: v.id, title: cleanTitle(raw), speaker: parseTitle(raw).speaker, cat: autoCat(raw) };
      });
      try { localStorage.setItem(KEY, JSON.stringify({ ts: Date.now(), v: loaded })); } catch (e) {}
      var cbs = pending || []; pending = null;
      cbs.forEach(function (cb) { try { cb(loaded); } catch (e) {} });
    });
  }

  window.loadRealYtVideos = function (cb) {
    if (loaded) { cb(loaded); return; }
    var c = fromCache();
    if (c) { loaded = c; cb(c); return; }
    if (pending) { pending.push(cb); return; }
    pending = [cb];

    var holder = document.createElement("div");
    holder.id = "yt-id-probe";
    holder.style.cssText = "position:fixed;left:-9999px;width:2px;height:2px;opacity:0;pointer-events:none";
    document.body.appendChild(holder);

    var prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = function () {
      if (prev) try { prev(); } catch (e) {}
      var p = new YT.Player("yt-id-probe", {
        width: 2, height: 2,
        playerVars: { listType: "playlist", list: LIST },
        events: {
          onReady: function () {
            var tries = 0;
            var iv = setInterval(function () {
              var pl = null;
              try { pl = p.getPlaylist(); } catch (e) {}
              if ((pl && pl.length) || ++tries > 24) {
                clearInterval(iv);
                if (pl && pl.length) applyReal(pl.slice());
              }
            }, 500);
          }
        }
      });
    };
    var tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);
  };
})();
