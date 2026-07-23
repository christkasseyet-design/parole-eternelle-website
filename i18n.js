// ─────────────────────────────────────────────────────────────────────────
// i18n.js — Language switcher for Parole Éternelle
//
// FR (default) → LN (Lingala) · KG (Kikongo) · TS (Tshiluba)
//
// ⚠ TRADUCTION COMMUNAUTAIRE — à valider par un locuteur natif avant le
// lancement. Pour corriger une traduction, modifier simplement la valeur
// correspondante dans l'objet DICT ci-dessous.
// ─────────────────────────────────────────────────────────────────────────

window.I18N_LANGS = [
  { code: "fr", label: "Français",  flag: "FR" },
  { code: "ln", label: "Lingala",   flag: "LN" },
  { code: "en", label: "English",   flag: "EN" },
];

// Each key is the EXACT French string as it appears on the page.
// Value is { ln, en }. Missing keys → fall back to French.
window.I18N_DICT = {
  // ── Navigation ──────────────────────────────────────────────────────────
  "Accueil":          { ln: "Bokomi",        en: "Home"           },
  "Temple":           { ln: "Tempelo",       en: "Temple"         },
  "Programmes":       { ln: "Programe",      en: "Schedule"       },
  "Vidéos":           { ln: "Bavideo",       en: "Videos"         },
  "Bible":            { ln: "Biblia",        en: "Bible"          },
  "À propos":         { ln: "Na ntina",      en: "About"          },
  "Donner":           { ln: "Kopesa",        en: "Give"           },
  "Contact":          { ln: "Tika kosolola", en: "Contact"        },

  // ── CTAs ────────────────────────────────────────────────────────────────
  "Nous visiter dimanche":      { ln: "Yaka kotala biso lomingo",  en: "Visit us this Sunday" },
  "Voir le dernier culte":      { ln: "Tala losambo ya suka",       en: "Watch the latest service" },
  "Regarder sur YouTube":       { ln: "Tala na YouTube",            en: "Watch on YouTube" },
  "Regarder en direct":         { ln: "Tala mbala moko",            en: "Watch live" },
  "Nous visiter":               { ln: "Yaka kotala biso",           en: "Visit us" },
  "Voir les prédications":      { ln: "Tala bisakoli",              en: "View sermons" },
  "Programme du mois":          { ln: "Programe ya sanza",          en: "Monthly schedule" },
  "Soutenir le projet":         { ln: "Kosalisa mosala",            en: "Support the project" },
  "Donner maintenant":          { ln: "Kopesa sikoyo",              en: "Give now" },
  "Confirmer":                  { ln: "Kondima",                    en: "Confirm" },
  "S'abonner":                  { ln: "Komikomisa",                 en: "Subscribe" },
  "Rejoindre":                  { ln: "Kokota",                     en: "Join" },
  "Rejoindre le direct":        { ln: "Kokota na live",             en: "Join the livestream" },
  "Envoyer le message":         { ln: "Kotinda nsango",             en: "Send message" },
  "Apprendre à nous connaître": { ln: "Koyeba biso",                en: "Get to know us" },
  "Voir nos cultes":            { ln: "Tala milulu",                en: "See our services" },
  "Ouvrir la Bible":            { ln: "Fungola Biblia",             en: "Open the Bible" },

  // ── Days of week ────────────────────────────────────────────────────────
  "Dimanche":  { ln: "Lomingo",          en: "Sunday" },
  "Lundi":     { ln: "Mokolo ya yambo",  en: "Monday" },
  "Mardi":     { ln: "Mokolo ya mibale", en: "Tuesday" },
  "Mercredi":  { ln: "Mokolo ya misato", en: "Wednesday" },
  "Jeudi":     { ln: "Mokolo ya minei",  en: "Thursday" },
  "Vendredi":  { ln: "Mokolo ya mitano", en: "Friday" },
  "Samedi":    { ln: "Posa",             en: "Saturday" },

  // ── Common church vocabulary ────────────────────────────────────────────
  "Culte":                  { ln: "Losambo",               en: "Service" },
  "Culte dominical":        { ln: "Losambo ya lomingo",    en: "Sunday service" },
  "Culte du dimanche":      { ln: "Losambo ya lomingo",    en: "Sunday service" },
  "Étude biblique":         { ln: "Boyekoli Biblia",       en: "Bible study" },
  "Prière":                 { ln: "Losambo ya mabondeli",  en: "Prayer" },
  "Module de prière":       { ln: "Mokakatano ya losambo", en: "Prayer module" },
  "Vendredi Ngomba":        { ln: "Mokolo ya mitano · Ngomba", en: "Friday Ngomba" },
  "Conférence":             { ln: "Likita",                en: "Conference" },
  "Séminaire":              { ln: "Seminere",              en: "Seminar" },
  "Jeunesse":               { ln: "Bilenge",               en: "Youth" },
  "Enfants":                { ln: "Bana",                  en: "Children" },
  "Mission":                { ln: "Misio",                 en: "Mission" },
  "Évangélisation":         { ln: "Bopanzi Nsango Malamu", en: "Evangelism" },
  "Worship":                { ln: "Lokumu",                en: "Worship" },
  "Louange":                { ln: "Lokumu",                en: "Worship" },
  "Famille":                { ln: "Libota",                en: "Family" },
  "Pasteur":                { ln: "Mokumbi",               en: "Pastor" },
  "Couple pastoral":        { ln: "Bakumbi ba libota",     en: "Pastoral couple" },
  "Demande de prière":      { ln: "Kosenga losambo",       en: "Prayer request" },
  "Verset du jour":         { ln: "Vésé ya mokolo",        en: "Verse of the day" },

  // ── Common nouns / actions ──────────────────────────────────────────────
  "Bienvenue":     { ln: "Boyei malamu",         en: "Welcome" },
  "Nom":           { ln: "Nkombo",               en: "Name" },
  "E-mail":        { ln: "Imeli",                en: "Email" },
  "Message":       { ln: "Nsango",               en: "Message" },
  "Téléphone":     { ln: "Telefoni",             en: "Phone" },
  "Sujet":         { ln: "Likambo",              en: "Subject" },
  "Adresse":       { ln: "Adresi",               en: "Address" },
  "Notre adresse": { ln: "Adresi na biso",       en: "Our address" },
  "Itinéraire":    { ln: "Nzela",                en: "Directions" },
  "Toujours ouvert":{ln: "Ezali polele ntango nyonso", en: "Always open" },
  "Tu es bienvenu·e":{ln: "Boyei malamu",         en: "You are welcome" },

  // ── Hero & taglines ─────────────────────────────────────────────────────
  "Une église vivante pour une génération transformée.":
    { ln: "Lingomba ya bomoi mpo na libota oyo ebongwani.",
      en: "A living church for a transformed generation." },
  "Une église":     { ln: "Lingomba",  en: "A church" },
  "vivante":        { ln: "ya bomoi",  en: "alive" },
  "pour une génération": { ln: "mpo na libota", en: "for a generation" },
  "transformée.":   { ln: "ebongwani.",en: "transformed." },

  "Une église vivante,": { ln: "Lingomba ya bomoi,",  en: "A living church," },
  "une famille":         { ln: "libota moko",         en: "a family" },

  // ── Common eyebrows / labels ────────────────────────────────────────────
  "Bienvenue à Parole Éternelle":
    { ln: "Boyei malamu na Parole Éternelle",
      en: "Welcome to Parole Éternelle" },
  "Découvrir":          { ln: "Kososola",          en: "Discover" },
  "La vie de l'église": { ln: "Bomoi ya lingomba", en: "Church life" },
  "Notre vision":       { ln: "Likanisi na biso",  en: "Our vision" },
  "Le ciel et la terre passeront, mais mes paroles ne passeront point.":
    { ln: "Likolo na mabele ekoleka, kasi maloba na ngai ekoleka te.",
      en: "Heaven and earth will pass away, but my words will never pass away." },

  // ── Footer ──────────────────────────────────────────────────────────────
  "Mentions légales":      { ln: "Maloba ya mibeko",      en: "Legal notice" },
  "Confidentialité":       { ln: "Bonkutu",                en: "Privacy" },
  "Tous droits réservés":  { ln: "Lotomo nyonso ebatelami",en: "All rights reserved" },
  "Soli Deo Gloria":       { ln: "Soli Deo Gloria",        en: "Soli Deo Gloria" },
  "À Dieu seul la gloire.":{ ln: "Nkembo na Nzambe kaka.", en: "To God alone be the glory." },
};

// ─────────────────────────────────────────────────────────────────────────
// Engine
// ─────────────────────────────────────────────────────────────────────────
(() => {
  let currentLang = localStorage.getItem("pe_lang") || "fr";
  let originals = new WeakMap(); // text node → original FR string
  let observer = null;

  function gatherTextNodes(root) {
    const out = [];
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(n) {
        if (!n.parentElement) return NodeFilter.FILTER_REJECT;
        const p = n.parentElement;
        const tag = p.tagName;
        if (tag === "SCRIPT" || tag === "STYLE" || tag === "NOSCRIPT") return NodeFilter.FILTER_REJECT;
        // Skip language pill itself
        if (p.closest("[data-i18n-skip]")) return NodeFilter.FILTER_REJECT;
        const t = n.nodeValue;
        if (!t || !t.trim()) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    let n;
    while ((n = w.nextNode())) out.push(n);
    return out;
  }

  function translateNode(node, lang) {
    if (!originals.has(node)) originals.set(node, node.nodeValue);
    const orig = originals.get(node).trim();
    if (lang === "fr") {
      node.nodeValue = originals.get(node);
      return;
    }
    const entry = window.I18N_DICT[orig];
    if (entry && entry[lang]) {
      // Preserve surrounding whitespace
      const m = originals.get(node).match(/^(\s*)([\s\S]*?)(\s*)$/);
      node.nodeValue = (m ? m[1] : "") + entry[lang] + (m ? m[3] : "");
    } else {
      // No translation — leave French
      node.nodeValue = originals.get(node);
    }
  }

  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem("pe_lang", lang);
    document.documentElement.setAttribute("lang", lang === "fr" ? "fr" : `${lang}-CD`);
    const nodes = gatherTextNodes(document.body);
    nodes.forEach(n => translateNode(n, lang));
    // Update toggle UI
    document.querySelectorAll("[data-lang-btn]").forEach(b => {
      b.classList.toggle("active", b.dataset.langBtn === lang);
    });
    const cur = document.getElementById("pe-lang-current");
    if (cur) {
      const lab = window.I18N_LANGS.find(x => x.code === lang);
      cur.textContent = lab ? lab.flag : "FR";
    }
  }

  // Observe DOM additions (React mount, dynamic content) and re-translate
  function startObserver() {
    if (observer) observer.disconnect();
    observer = new MutationObserver((muts) => {
      if (currentLang === "fr") return;
      for (const m of muts) {
        for (const node of m.addedNodes) {
          if (node.nodeType === Node.TEXT_NODE) {
            translateNode(node, currentLang);
          } else if (node.nodeType === Node.ELEMENT_NODE) {
            const texts = gatherTextNodes(node);
            texts.forEach(n => translateNode(n, currentLang));
          }
        }
        if (m.type === "characterData" && m.target.nodeType === Node.TEXT_NODE) {
          // Don't re-translate something we just translated
        }
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  // ─── Floating language switcher UI ─────────────────────────────────────
  function injectSwitcher() {
    if (document.getElementById("pe-lang-switcher")) return;
    const host = document.createElement("div");
    host.id = "pe-lang-switcher";
    host.setAttribute("data-i18n-skip", "");
    host.style.cssText = `
      position: fixed; bottom: 24px; left: 24px; z-index: 60;
      display: flex; align-items: center; gap: 4px;
      padding: 5px;
      background: rgba(6, 26, 68, 0.78);
      backdrop-filter: blur(18px) saturate(140%);
      -webkit-backdrop-filter: blur(18px) saturate(140%);
      border: 1px solid rgba(244,194,56,.28);
      border-radius: 999px;
      font-family: 'JetBrains Mono', ui-monospace, monospace;
      font-size: 10px; letter-spacing: .14em;
      box-shadow: 0 8px 28px rgba(0,0,0,.35);
    `;
    host.innerHTML = `
      <style>
        #pe-lang-switcher button{
          appearance:none;border:0;cursor:pointer;
          padding:5px 11px;border-radius:999px;
          background:transparent;color:rgba(255,255,255,.70);
          font:inherit;letter-spacing:inherit;font-weight:600;
          transition:all .2s;
        }
        #pe-lang-switcher button:hover{ color:#f4c238; background:rgba(244,194,56,.10); }
        #pe-lang-switcher button.active{ background:#f4c238; color:#061a44; }
        @media (max-width: 1023px){
          #pe-lang-switcher{ bottom: 20px !important; left: 20px !important; }
        }
        @media (max-width: 640px){
          #pe-lang-switcher{ padding: 4px; bottom: 16px !important; left: 16px !important; }
          #pe-lang-switcher button{ padding: 4px 8px; font-size: 9px; }
        }
      </style>
      ${window.I18N_LANGS.map(l =>
        `<button type="button" data-lang-btn="${l.code}" title="${l.label}">${l.flag}</button>`
      ).join("")}
    `;
    document.body.appendChild(host);
    host.querySelectorAll("[data-lang-btn]").forEach(b => {
      b.addEventListener("click", () => applyLang(b.dataset.langBtn));
    });
  }

  // Wait until React has mounted before first translation
  function init() {
    injectSwitcher();
    // Initial pass — wait a beat for React to render
    setTimeout(() => {
      applyLang(currentLang);
      startObserver();
    }, 800);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
