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

  // ── Anglais complémentaire (ajouté pour le mode hors ligne) ──
  "A propos": { en: "About" },
  "Prédication": { en: "Sermons" },
  "Construction": { en: "Building project" },
  "Ministères": { en: "Ministries" },
  "Event": { en: "Events" },
  "Concours": { en: "Bible quiz" },
  "Donation": { en: "Give" },
  "Vie d'église": { en: "Church life" },
  "Programme": { en: "Schedule" },
  "Médias": { en: "Media" },
  "Galerie": { en: "Gallery" },
  "Reels": { en: "Reels" },
  "Jubilé": { en: "Jubilee" },
  "Aide": { en: "Help" },
  "Bienvenue à la Parole Éternelle": { en: "Welcome to Parole Éternelle" },
  "Une église vivante pour une génération transformée — Ngiri-Ngiri, Kinshasa": { en: "A living church for a transformed generation — Ngiri-Ngiri, Kinshasa" },
  "Programme des cultes": { en: "Service schedule" },
  "Découvrir l'église": { en: "Discover the church" },
  "Dimanche · 07h30 & 10h00 · En direct": { en: "Sunday · 7:30 & 10:00 · Live" },
  "il y a une place pour toi.": { en: "there is a place for you." },
  "Culte · 1ᵉʳ service": { en: "Service · 1st gathering" },
  "Culte · 2ᵉ service": { en: "Service · 2nd gathering" },
  "Une église vivante": { en: "A living church" },
  "Une génération transformée": { en: "A transformed generation" },
  "Dimanche 07h30 & 10h00": { en: "Sunday 7:30 & 10:00" },
  "Jubilé 2026": { en: "Jubilee 2026" },
  "Événement de l'année · C.E. Parole Éternelle": { en: "Event of the year · C.E. Parole Éternelle" },
  "« Y a-t-il rien qui soit étonnant de la part de l'Éternel ? »": { en: "“Is anything too hard for the LORD?”" },
  "Genèse 18:14 · Thème de l'année": { en: "Genesis 18:14 · Theme of the year" },
  "08 juillet – 02 août 2026": { en: "8 July – 2 August 2026" },
  "Voir le programme": { en: "See the schedule" },
  "Affiche officielle Jubilé 2026": { en: "Official Jubilee 2026 poster" },
  "Après le culte": { en: "After the service" },
  "Culte · prédication": { en: "Service · preaching" },
  "Jeunesse & étude": { en: "Youth & study" },
  "Toute l'assemblée": { en: "The whole congregation" },
  "À la table du Seigneur": { en: "At the Lord's table" },
  "Kids Royaume": { en: "Kingdom Kids" },
  "Sainte cène": { en: "Communion" },
  "Communauté": { en: "Community" },
  "Suivez-nous": { en: "Follow us" },
  "01 · Grand projet": { en: "01 · Major project" },
  "02 · Lire & Écouter": { en: "02 · Read & Listen" },
  "03 · Vidéos & Live": { en: "03 · Videos & Live" },
  "04 · La Parole": { en: "04 · The Word" },
  "05 · Rassemblements": { en: "05 · Gatherings" },
  "06 · Vie d'église": { en: "06 · Church life" },
  "07 · Adoration": { en: "07 · Worship" },
  "08 · Communauté": { en: "08 · Community" },
  "09 · Soutenir": { en: "09 · Support" },
  "Le Temple": { en: "The Temple" },
  "La Bible": { en: "The Bible" },
  "Prédications": { en: "Sermons" },
  "Conférences": { en: "Conferences" },
  "Événements": { en: "Events" },
  "Calendrier": { en: "Calendar" },
  "Mots-clés": { en: "Keywords" },
  "Voir l'archive": { en: "View archive" },
  "Assemblées de Dieu": { en: "Assemblies of God" },
  "Fille de": { en: "Daughter church of" },
  "Fondation": { en: "Founded" },
  "Janvier 2019": { en: "January 2019" },
  "Localité": { en: "Locality" },
  "Affiliation": { en: "Affiliation" },
  "Langues": { en: "Languages" },
  "Français · Lingala": { en: "French · Lingala" },
  "Pasteur Raphaël Kaseya & Denise Kaseya": { en: "Pastor Raphaël Kaseya & Denise Kaseya" },
  "Couple pastoral fondateur": { en: "Founding pastoral couple" },
  "« Le ciel et la terre passeront, mais mes paroles ne passeront point. »": { en: "“Heaven and earth shall pass away, but my words shall not pass away.”" },
  "« Nous ne sommes pas une église pour les parfaits, mais une famille pour les transformés. »": { en: "“We are not a church for the perfect, but a family for the transformed.”" },
  "une seule famille.": { en: "one single family." },
  "La Parole": { en: "The Word" },
  "La Prière": { en: "Prayer" },
  "L'Évangélisation": { en: "Evangelism" },
  "Notre vision · 4 piliers": { en: "Our vision · 4 pillars" },
  "À propos · Notre histoire": { en: "About · Our story" },
  "Tous": { en: "All" },
  "Étude": { en: "Study" },
  "Vue": { en: "View" },
  "liste": { en: "list" },
  "calendrier": { en: "calendar" },
  "Ajouter au calendrier": { en: "Add to calendar" },
  "Abonnez-vous": { en: "Subscribe" },
  "Recevez le programme mensuel par e-mail": { en: "Get the monthly schedule by e-mail" },
  "Auj.": { en: "Today" },
  "Cette semaine": { en: "This week" },
  "Messages & Médias": { en: "Messages & Media" },
  "Toutes les vidéos": { en: "All videos" },
  "Trier": { en: "Sort" },
  "Plus récents": { en: "Most recent" },
  "Plus écoutés": { en: "Most listened" },
  "Par série": { en: "By series" },
  "En direct": { en: "Live" },
  "Podcast": { en: "Podcast" },
  "Direct": { en: "Live" },
  "Lecture": { en: "Play" },
  "Chants en français et en lingala, originaux et live.": { en: "Songs in French and Lingala, originals and live." },
  "Chaîne officielle · Parole Eternelle Ngiri-ngiri TV": { en: "Official channel · Parole Eternelle Ngiri-ngiri TV" },
  "Chaîne officielle · CE Parole Eternelle TV": { en: "Official channel · CE Parole Eternelle TV" },
  "Bâtir sa maison sur le Roc": { en: "Building your house on the Rock" },
  "Avancement du chantier": { en: "Construction progress" },
  "Chantier en cours": { en: "Work in progress" },
  "Coordonnées de transfert": { en: "Transfer details" },
  "Cliquez pour copier": { en: "Click to copy" },
  "Copié": { en: "Copied" },
  "Mobile Money": { en: "Mobile Money" },
  "Airtel Money": { en: "Airtel Money" },
  "5 façons de donner pour le temple": { en: "5 ways to give to the temple project" },
  "Chaque don rapproche notre communauté de sa maison de prière — construisons-la ensemble.": { en: "Every gift brings our community closer to its house of prayer — let us build it together." },
  "Choisissez un montant suggéré et un moyen de paiement — 30 secondes.": { en: "Choose a suggested amount and a payment method — 30 seconds." },
  "1 · Affectation": { en: "1 · Purpose" },
  "2 · Montant (FC)": { en: "2 · Amount (CDF)" },
  "3 · Mode de paiement": { en: "3 · Payment method" },
  "Rendu 3D · Vue d'ensemble": { en: "3D rendering · Overview" },
  "Façade principale": { en: "Main façade" },
  "Intérieur · sanctuaire": { en: "Interior · sanctuary" },
  "Grand Projet · Extension Bé Cape": { en: "Major project · Bé Cape extension" },
  "Avenue Monkoto, Ngiri-Ngiri": { en: "Avenue Monkoto, Ngiri-Ngiri" },
  "Galerie · Vie de l'église": { en: "Gallery · Church life" },
  "Tous les albums": { en: "All albums" },
  "Contact · Visite · Prière": { en: "Contact · Visit · Prayer" },
  "Nous écrire": { en: "Write to us" },
  "Plan du site": { en: "Sitemap" },
  "Nous trouver": { en: "Find us" },
  "Envoyer": { en: "Send" },
  "Votre message": { en: "Your message" },
  "Écrivez votre message…": { en: "Write your message…" },
  "Aucun message enregistré pour l'instant.": { en: "No messages recorded yet." },
  "Télécharger le journal": { en: "Download the log" },
  "Effacer": { en: "Clear" },
  "Conversation": { en: "Conversation" },
  "Envoyer par WhatsApp": { en: "Send via WhatsApp" },
  "Fermer": { en: "Close" },
  "Horaires des cultes ?": { en: "Service times?" },
  "Signaler un problème sur le site": { en: "Report a problem on the site" },
  "Proposer une amélioration": { en: "Suggest an improvement" },
  "Comment soutenir le projet du temple ?": { en: "How can I support the temple project?" },

};

// ─────────────────────────────────────────────────────────────────────────
// Engine
// ─────────────────────────────────────────────────────────────────────────
(() => {
  let currentLang = localStorage.getItem("pe_lang") || "fr";
  let originals = new WeakMap(); // text node → original FR string
  let observer = null;

  // ── Cache de traduction automatique (IA) ─────────────────────────────
  // Le DICT ci-dessus reste prioritaire (traductions validées à la main).
  // Tout le reste est traduit une fois par l'IA, puis mémorisé.
  const CK = (lang) => `pe_i18n_ai_${lang}`;
  const cache = {};
  const loadCache = (lang) => {
    if (cache[lang]) return cache[lang];
    try { cache[lang] = JSON.parse(localStorage.getItem(CK(lang)) || "{}"); }
    catch (e) { cache[lang] = {}; }
    return cache[lang];
  };
  const saveCache = (lang) => {
    try { localStorage.setItem(CK(lang), JSON.stringify(cache[lang] || {})); } catch (e) {}
  };

  const LANG_NAME = { ln: "Lingala (celui parlé à Kinshasa, simple et courant)", en: "English" };
  const SKIP_RE = /^[\s\d\W_]*$/; // chiffres, heures, ponctuation, symboles seuls
  const nodesByText = new Map();   // texte FR → Set(text nodes)
  const pending = new Set();
  let running = false, progress = null;

  const translatable = (s) =>
    s && s.length > 1 && s.length < 400 && !SKIP_RE.test(s) && /[A-Za-zÀ-ÿ]{2}/.test(s);

  function lookup(orig, lang) {
    const d = window.I18N_DICT[orig];
    if (d && d[lang]) return d[lang];
    const c = loadCache(lang);
    return c[orig] || null;
  }

  function showProgress(done, total) {
    if (!progress) {
      progress = document.createElement("div");
      progress.setAttribute("data-i18n-skip", "");
      progress.style.cssText = "position:fixed;bottom:78px;left:24px;z-index:61;padding:7px 13px;border-radius:999px;background:rgba(6,26,68,.9);border:1px solid rgba(244,194,56,.3);color:#f4c238;font:600 10px/1 'JetBrains Mono',monospace;letter-spacing:.14em;backdrop-filter:blur(12px)";
      document.body.appendChild(progress);
    }
    progress.textContent = `TRADUCTION ${Math.round((done / total) * 100)}%`;
    progress.style.opacity = "1";
    if (done >= total) setTimeout(() => { if (progress) { progress.style.transition = "opacity .6s"; progress.style.opacity = "0"; } }, 1200);
  }

  function applyText(orig, lang) {
    const val = lookup(orig, lang);
    const set = nodesByText.get(orig);
    if (!val || !set) return;
    set.forEach((node) => {
      if (!node.parentElement || !originals.has(node)) return;
      const m = originals.get(node).match(/^(\s*)([\s\S]*?)(\s*)$/);
      node.nodeValue = (m ? m[1] : "") + val + (m ? m[3] : "");
    });
  }

  async function runQueue(lang) {
    if (running || !window.claude || !window.claude.complete || !LANG_NAME[lang]) return;
    running = true;
    const all = [...pending].filter((s) => !lookup(s, lang));
    const total = all.length;
    let done = 0;
    try {
      for (let i = 0; i < all.length; i += 40) {
        if (currentLang !== lang) break;
        const batch = all.slice(i, i + 40);
        showProgress(done, total);
        let out = null;
        try {
          const raw = await window.claude.complete({
            max_tokens: 4000,
            system: `Tu traduis l'interface d'un site d'église congolaise (Communauté Chrétienne Parole Éternelle, Ngiri-Ngiri, Kinshasa) du français vers ${LANG_NAME[lang]}.
Règles : garde le sens et le ton chaleureux ; garde tel quel les noms propres (Parole Éternelle, Ngiri-Ngiri, Kaseya, Ngomba, YouTube, Facebook), les heures, dates, chiffres, adresses et emojis ; garde la même ponctuation et la même casse (MAJUSCULES si l'original est en majuscules) ; ne rajoute rien, n'explique rien.
Réponds UNIQUEMENT par un tableau JSON de chaînes, même longueur et même ordre que l'entrée.`,
            messages: [{ role: "user", content: JSON.stringify(batch) }],
          });
          const s = String(raw || "");
          const a = s.indexOf("["), b = s.lastIndexOf("]");
          if (a >= 0 && b > a) out = JSON.parse(s.slice(a, b + 1));
        } catch (e) { out = null; }
        if (Array.isArray(out) && out.length === batch.length) {
          const c = loadCache(lang);
          batch.forEach((src, k) => {
            const v = typeof out[k] === "string" ? out[k].trim() : "";
            if (v) c[src] = v;
          });
          saveCache(lang);
          if (currentLang === lang) batch.forEach((src) => { applyText(src, lang); pending.delete(src); });
        }
        done += batch.length;
        showProgress(done, total);
      }
    } finally {
      running = false;
      // quota atteint ou lot refus\u00e9 \u2192 nouvelle tentative plus tard
      if (currentLang === lang && [...pending].some((s) => !lookup(s, lang))) {
        setTimeout(() => { if (currentLang === lang) runQueue(lang); }, 65000);
      }
    }
  }

  let queueTimer = null;
  function scheduleQueue(lang) {
    if (lang === "fr" || !pending.size) return;
    clearTimeout(queueTimer);
    queueTimer = setTimeout(() => runQueue(lang), 400);
  }

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
    if (!nodesByText.has(orig)) nodesByText.set(orig, new Set());
    nodesByText.get(orig).add(node);
    const val = lookup(orig, lang);
    if (val) {
      const m = originals.get(node).match(/^(\s*)([\s\S]*?)(\s*)$/);
      node.nodeValue = (m ? m[1] : "") + val + (m ? m[3] : "");
    } else {
      node.nodeValue = originals.get(node); // français en attendant l'IA
      if (translatable(orig)) pending.add(orig);
    }
  }

  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem("pe_lang", lang);
    document.documentElement.setAttribute("lang", lang === "fr" ? "fr" : `${lang}-CD`);
    const nodes = gatherTextNodes(document.body);
    nodes.forEach(n => translateNode(n, lang));
    scheduleQueue(lang);
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
          scheduleQueue(currentLang);
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
