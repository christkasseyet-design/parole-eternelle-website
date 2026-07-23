// Bible reader app — state, navigation, audio simulation
(() => {
  const state = JSON.parse(localStorage.getItem("bibleState") || "null") || { ...START_STATE };
  let playing = false;
  let progress = 0;        // 0..1
  let playingVerse = -1;
  let speed = 1;
  let timer = null;
  const TOTAL_SECS = 768;  // simulated audio length

  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  function save(){ localStorage.setItem("bibleState", JSON.stringify(state)); }

  // ── Build book lists ─────────────────────────────────────────────────────
  function buildBooks(){
    const otEl = $("#ot-list");
    const ntEl = $("#nt-list");
    [["ot", otEl], ["nt", ntEl]].forEach(([t, container]) => {
      container.innerHTML = "";
      BIBLE_BOOKS[t].forEach((b, i) => {
        const btn = document.createElement("div");
        btn.className = "book-item" + (state.testament === t && state.bookIdx === i ? " active" : "");
        btn.dataset.testament = t;
        btn.dataset.idx = i;
        btn.innerHTML = `<span>${b.name}</span><span class="abbr">${b.chapters}</span>`;
        btn.onclick = () => goTo(t, i, 1);
        container.appendChild(btn);
      });
    });
  }

  function currentBook(){
    return BIBLE_BOOKS[state.testament][state.bookIdx];
  }

  // ── Render chapter ───────────────────────────────────────────────────────
  function renderChapter(){
    const book = currentBook();
    const lang = state.lang;
    const data = SAMPLE_CHAPTER[lang];
    const isDemoChapter = book.name === "Jean" && state.chapter === 3 && !!data;

    $("#bookTitle").textContent = book.name;
    $("#chapterTitle").textContent = "Chapitre " + state.chapter;
    $("#testamentLabel").textContent = state.testament === "ot" ? "Ancien Testament" : "Nouveau Testament";
    $("#refLabel").textContent = `${book.name} · Chapitre ${state.chapter}`;
    $("#playingRef").textContent = `${book.name} ${state.chapter}`;
    $("#playingLang").textContent = "Audio · " + LANG_LABELS[lang].audio;
    $("#chapterSub").textContent = isDemoChapter ? data.title : `${LANG_LABELS[lang].version} · ${book.chapters} chapitre${book.chapters > 1 ? "s" : ""}`;

    const cnt = $("#chapterContent");
    cnt.innerHTML = "";

    if (isDemoChapter) {
      // render the full demo chapter
      data.verses.forEach((v) => {
        const div = document.createElement("div");
        div.className = "verse" + (v.jesus ? " has-jesus" : "");
        div.dataset.n = v.n;
        div.innerHTML = `
          <span class="vnum">${v.n}</span>
          <span class="vtext ${v.jesus ? "is-jesus" : ""}">${v.t}</span>
        `;
        div.onclick = () => {
          div.classList.toggle("highlighted");
        };
        cnt.appendChild(div);
      });
      $("#readDuration").textContent = "~ 6 min";
    } else {
      // Chargement du vrai texte (Louis Segond 1910) via l'API libre getbible.net,
      // avec cache localStorage pour la lecture hors-ligne.
      loadChapter(cnt, book, state.chapter, lang);
    }

    // Build chapter selector / refresh book highlight
    buildBooks();
    save();
  }

  // ── Vrai texte biblique — API getbible.net (LSG 1910), cache hors-ligne ──
  function bookNumber(){
    return state.testament === "ot" ? state.bookIdx + 1 : 39 + state.bookIdx + 1;
  }

  function renderVerses(cnt, verses){
    cnt.innerHTML = "";
    verses.forEach((v) => {
      const div = document.createElement("div");
      div.className = "verse";
      div.dataset.n = v.verse;
      div.innerHTML = `
        <span class="vnum">${v.verse}</span>
        <span class="vtext">${v.text.trim()}</span>
      `;
      div.onclick = () => div.classList.toggle("highlighted");
      cnt.appendChild(div);
    });
    const words = verses.reduce((n, v) => n + v.text.split(/\s+/).length, 0);
    $("#readDuration").textContent = "~ " + Math.max(1, Math.round(words / 180)) + " min";
  }

  const TRANSLATIONS = { fr: "ls1910", en: "kjv" };
  function translationFor(lang){ return TRANSLATIONS[lang] || "ls1910"; }

  function loadChapter(cnt, book, chapter, lang){
    const num = bookNumber();
    const trans = translationFor(lang);
    const cacheKey = `bibleChap:${trans}:${num}:${chapter}`;
    const cached = localStorage.getItem(cacheKey);
    const note = !(lang in TRANSLATIONS)
      ? '<div class="mb-6 px-4 py-3 border border-black/10 rounded-xl text-[12px] text-ink-500" style="background:rgba(255,255,255,.6)">La traduction ' + LANG_LABELS[lang].name + ' arrive bientôt — texte affiché : Louis Segond (français).</div>'
      : "";
    if (cached) {
      try {
        cnt.innerHTML = note;
        const holder = document.createElement("div");
        cnt.appendChild(holder);
        renderVerses(holder, JSON.parse(cached));
        return;
      } catch (e) {}
    }
    cnt.innerHTML = note + `
      <div class="border border-black/8 rounded-2xl p-10 text-center" style="background:rgba(255,255,255,.6)">
        <div class="eyebrow mb-4 justify-center inline-flex">${LANG_LABELS[lang].version}</div>
        <div class="font-display text-[32px] leading-tight mb-2">${book.name} · Chapitre ${chapter}</div>
        <p class="text-[14px] text-ink-500">Chargement du texte…</p>
      </div>
    `;
    fetch(`https://api.getbible.net/v2/${trans}/${num}/${chapter}.json`)
      .then(r => { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(json => {
        const verses = (json.verses || []).map(v => ({ verse: v.verse, text: v.text }));
        if (!verses.length) throw new Error("empty");
        try { localStorage.setItem(cacheKey, JSON.stringify(verses)); } catch (e) {}
        // Ne pas écraser si l'utilisateur a déjà navigué ailleurs
        if (bookNumber() === num && state.chapter === chapter) {
          cnt.innerHTML = note;
          const holder = document.createElement("div");
          cnt.appendChild(holder);
          renderVerses(holder, verses);
        }
      })
      .catch(() => {
        cnt.innerHTML = note + `
          <div class="border border-black/8 rounded-2xl p-10 text-center" style="background:rgba(255,255,255,.6)">
            <div class="font-display text-[32px] leading-tight mb-3">${book.name} · Chapitre ${chapter}</div>
            <p class="font-serif text-[17px] leading-relaxed text-ink-700 max-w-xl mx-auto">
              Impossible de charger le texte — vérifiez votre connexion internet, puis réessayez.
            </p>
            <div class="mt-6 flex justify-center gap-3 flex-wrap">
              <button onclick="location.reload()" class="btn btn-coral">Réessayer</button>
              <button onclick="window.__goJohn3()" class="btn btn-ghost">Aller à Jean 3</button>
            </div>
          </div>
        `;
      });
  }

  window.__goJohn3 = () => goTo("nt", 3, 3);

  // ── Navigation ───────────────────────────────────────────────────────────
  function goTo(testament, bookIdx, chapter){
    state.testament = testament;
    state.bookIdx = bookIdx;
    state.chapter = chapter;
    stop();
    renderChapter();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function nextChap(){
    const book = currentBook();
    if (state.chapter < book.chapters) { state.chapter++; }
    else {
      // next book
      const list = BIBLE_BOOKS[state.testament];
      if (state.bookIdx < list.length - 1) { state.bookIdx++; state.chapter = 1; }
      else if (state.testament === "ot") { state.testament = "nt"; state.bookIdx = 0; state.chapter = 1; }
      else return; // end of bible
    }
    stop();
    renderChapter();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function prevChap(){
    if (state.chapter > 1) { state.chapter--; }
    else {
      if (state.bookIdx > 0) {
        state.bookIdx--;
        state.chapter = BIBLE_BOOKS[state.testament][state.bookIdx].chapters;
      } else if (state.testament === "nt") {
        state.testament = "ot";
        state.bookIdx = BIBLE_BOOKS.ot.length - 1;
        state.chapter = BIBLE_BOOKS.ot[state.bookIdx].chapters;
      } else return;
    }
    stop();
    renderChapter();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  $("#nextChap").onclick = nextChap;
  $("#prevChap").onclick = prevChap;
  $("#nextChap2").onclick = nextChap;
  $("#prevChap2").onclick = prevChap;

  // ── Language ─────────────────────────────────────────────────────────────
  $$(".lang-pill").forEach(b => {
    b.onclick = () => {
      $$(".lang-pill").forEach(x => x.classList.remove("active"));
      b.classList.add("active");
      state.lang = b.dataset.lang;
      stop();
      renderChapter();
    };
  });

  // ── Mode & size ──────────────────────────────────────────────────────────
  $$(".mode-btn").forEach(b => {
    b.onclick = () => {
      $$(".mode-btn").forEach(x => x.classList.remove("active","bg-ink-900","text-paper"));
      b.classList.add("active","bg-ink-900","text-paper");
      document.body.dataset.mode = b.dataset.mode;
      localStorage.setItem("bibleMode", b.dataset.mode);
    };
  });
  // restore mode
  const savedMode = localStorage.getItem("bibleMode");
  if (savedMode) {
    document.body.dataset.mode = savedMode;
    const btn = document.querySelector(`.mode-btn[data-mode="${savedMode}"]`);
    if (btn) { $$(".mode-btn").forEach(x => x.classList.remove("active")); btn.classList.add("active","bg-ink-900","text-paper"); }
  }
  // active mode default styling
  document.querySelector('.mode-btn.active')?.classList.add("bg-ink-900","text-paper");

  $$(".size-btn").forEach(b => {
    b.onclick = () => {
      $$(".size-btn").forEach(x => x.classList.remove("active","bg-ink-900","text-paper"));
      b.classList.add("active","bg-ink-900","text-paper");
      document.body.dataset.size = b.dataset.size;
      localStorage.setItem("bibleSize", b.dataset.size);
    };
  });
  document.querySelector('.size-btn.active')?.classList.add("bg-ink-900","text-paper");
  const savedSize = localStorage.getItem("bibleSize");
  if (savedSize) {
    document.body.dataset.size = savedSize;
    $$(".size-btn").forEach(x => x.classList.remove("active","bg-ink-900","text-paper"));
    document.querySelector(`.size-btn[data-size="${savedSize}"]`)?.classList.add("active","bg-ink-900","text-paper");
  }

  // ── Audio — vraie lecture vocale (Web Speech API) avec repli simulation ──
  function fmt(s){ const m = Math.floor(s/60); const r = Math.floor(s%60); return `${m}:${String(r).padStart(2,"0")}`; }

  const TTS = ("speechSynthesis" in window) && ("SpeechSynthesisUtterance" in window);

  // ── Meilleure voix disponible ──
  // Les navigateurs exposent plusieurs voix par langue ; certaines (Google,
  // Natural/Neural, Premium, Enhanced, Siri) sont nettement meilleures que la
  // voix par défaut. On les classe et on prend la meilleure.
  let voiceCache = {};
  function scoreVoice(v){
    const n = v.name.toLowerCase();
    let s = 0;
    if (/natural|neural/.test(n)) s += 100;
    if (/premium|enhanced|plus/.test(n)) s += 80;
    if (/google/.test(n)) s += 60;
    if (/microsoft.*online/.test(n)) s += 60;
    if (/siri/.test(n)) s += 50;
    if (/amélie|amelie|thomas|audrey|aurelie|denise|henri|rémi|remi/.test(n)) s += 20;
    if (/libby|sonia|ryan|aria|jenny|guy|daniel|samantha|karen|moira/.test(n)) s += 20;
    if (v.localService === false) s += 15; // voix cloud, souvent meilleures
    if (/compact|espeak|eloquence/.test(n)) s -= 60;
    return s;
  }
  function pickVoice(prefix){
    if (voiceCache[prefix] !== undefined) return voiceCache[prefix];
    const all = window.speechSynthesis.getVoices() || [];
    const match = all.filter(v => (v.lang || "").toLowerCase().startsWith(prefix));
    match.sort((a, b) => scoreVoice(b) - scoreVoice(a));
    voiceCache[prefix] = match[0] || null;
    return voiceCache[prefix];
  }
  if (TTS) {
    // Les voix arrivent en asynchrone : vider le cache quand la liste change
    window.speechSynthesis.onvoiceschanged = () => { voiceCache = {}; };
  }

  function verseEls(){ return $$(".verse"); }

  function centerVerse(el){
    const r = el.getBoundingClientRect();
    if (r.top < 100 || r.bottom > window.innerHeight - 120) {
      window.scrollTo({ top: window.scrollY + r.top - window.innerHeight / 2 + r.height / 2, behavior: "smooth" });
    }
  }

  function highlightVerse(idx){
    const verses = verseEls();
    verses.forEach(v => v.classList.remove("playing"));
    if (verses[idx]) { verses[idx].classList.add("playing"); centerVerse(verses[idx]); }
    playingVerse = idx;
  }

  function speakFrom(startIdx){
    const verses = verseEls();
    if (!verses.length) return false;
    window.speechSynthesis.cancel();
    // Si aucune voix n'est disponible (chargement asynchrone), bascule en simulation
    setTimeout(() => {
      if (playing && !window.speechSynthesis.speaking && !window.speechSynthesis.pending) {
        startSimulation();
      }
    }, 900);
    for (let i = startIdx; i < verses.length; i++) {
      const u = new SpeechSynthesisUtterance(verses[i].textContent.replace(/^\s*\d+\s*/, ""));
      const prefix = state.lang === "en" ? "en" : "fr";
      const best = pickVoice(prefix);
      if (best) u.voice = best;
      u.lang = best ? best.lang : (prefix === "en" ? "en-US" : "fr-FR");
      u.rate = speed;
      u.onstart = () => { highlightVerse(i); progress = i / verses.length; updateProgress(); };
      u.onend = () => { if (i === verses.length - 1 && playing) stop(); };
      window.speechSynthesis.speak(u);
    }
    return true;
  }

  function play(){
    if (playing) return;
    playing = true;
    $("#playIcon").classList.add("hidden");
    $("#pauseIcon").classList.remove("hidden");
    const verses = verseEls();
    if (TTS && verses.length) {
      const startIdx = Math.max(0, playingVerse < 0 ? Math.floor(progress * verses.length) : playingVerse);
      speakFrom(startIdx);
      return;
    }
    startSimulation();
  }

  function startSimulation(){
    if (timer) clearInterval(timer);
    const verses = verseEls();
    timer = setInterval(() => {
      progress += (1 / TOTAL_SECS) * speed;
      if (progress >= 1) { progress = 1; stop(); return; }
      updateProgress();
      const total = verses.length;
      if (total) {
        const idx = Math.min(total - 1, Math.floor(progress * total));
        if (idx !== playingVerse) highlightVerse(idx);
      }
    }, 200);
  }
  function pause(){
    playing = false;
    $("#playIcon").classList.remove("hidden");
    $("#pauseIcon").classList.add("hidden");
    if (TTS) window.speechSynthesis.cancel();
    if (timer) { clearInterval(timer); timer = null; }
  }
  function stop(){
    pause();
    progress = 0; playingVerse = -1;
    updateProgress();
    $$(".verse").forEach(v => v.classList.remove("playing"));
  }
  function updateProgress(){
    $("#progressFill").style.width = (progress*100) + "%";
    $("#curTime").textContent = fmt(progress * TOTAL_SECS);
    $("#totalTime").textContent = fmt(TOTAL_SECS);
  }

  $("#playBtn").onclick = () => playing ? pause() : play();
  $("#prevVerse").onclick = () => {
    const verses = $$(".verse");
    if (!verses.length) return;
    const newIdx = Math.max(0, playingVerse - 1);
    progress = (newIdx + 0.01) / verses.length;
    playingVerse = newIdx;
    updateProgress();
    if (playing && TTS) speakFrom(newIdx);
  };
  $("#nextVerse").onclick = () => {
    const verses = $$(".verse");
    if (!verses.length) return;
    const newIdx = Math.min(verses.length - 1, playingVerse + 1);
    progress = (newIdx + 0.01) / verses.length;
    playingVerse = newIdx;
    updateProgress();
    if (playing && TTS) speakFrom(newIdx);
  };
  $("#progressBar").onclick = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    progress = (e.clientX - r.left) / r.width;
    updateProgress();
    if (playing && TTS) {
      const verses = $$(".verse");
      if (verses.length) speakFrom(Math.min(verses.length - 1, Math.floor(progress * verses.length)));
    }
  };
  $("#speedBtn").onclick = () => {
    const speeds = [1, 1.25, 1.5, 0.75];
    speed = speeds[(speeds.indexOf(speed) + 1) % speeds.length];
    $("#speedBtn").textContent = speed + "×";
    if (playing && TTS && playingVerse >= 0) speakFrom(playingVerse);
  };

  // ── Offline modal ────────────────────────────────────────────────────────
  $("#offlineBtn").onclick = () => $("#offlineModal").classList.remove("hidden");
  $("#closeOffline").onclick = () => $("#offlineModal").classList.add("hidden");
  $("#confirmOffline").onclick = () => {
    $("#confirmOffline").textContent = "Téléchargement…";
    $("#confirmOffline").disabled = true;
    setTimeout(() => {
      $("#confirmOffline").textContent = "✓ Téléchargé";
      setTimeout(() => {
        $("#offlineModal").classList.add("hidden");
        $("#confirmOffline").textContent = "Télécharger";
        $("#confirmOffline").disabled = false;
        // Update offline button to show downloaded state
        $("#offlineBtn").innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22a06b" stroke-width="2" stroke-linecap="round"><path d="M5 12l5 5 9-11"/></svg> Disponible hors-ligne`;
        $("#offlineBtn").style.borderColor = "#22a06b";
        $("#offlineBtn").style.color = "#22a06b";
      }, 1200);
    }, 2400);
  };

  // ── Search modal ─────────────────────────────────────────────────────────
  $("#searchBtn")?.addEventListener("click", () => $("#searchModal").classList.remove("hidden") || $("#searchInput").focus());
  $("#refBtn").onclick = () => { $("#searchModal").classList.remove("hidden"); setTimeout(() => $("#searchInput").focus(), 0); };
  $("#closeSearch").onclick = () => $("#searchModal").classList.add("hidden");
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") $("#searchModal").classList.add("hidden");
    if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) { e.preventDefault(); $("#searchModal").classList.remove("hidden"); setTimeout(() => $("#searchInput").focus(), 0); }
    if (e.key === "ArrowRight" && !e.target.matches("input")) nextChap();
    if (e.key === "ArrowLeft" && !e.target.matches("input")) prevChap();
    if (e.key === " " && !e.target.matches("input,textarea,button")) { e.preventDefault(); playing ? pause() : play(); }
  });
  $$(".suggest").forEach(s => {
    s.onclick = () => {
      const [bookName, chap] = s.dataset.go.split(",");
      // find book
      for (const t of ["ot","nt"]) {
        const idx = BIBLE_BOOKS[t].findIndex(b => b.name === bookName);
        if (idx >= 0) { $("#searchModal").classList.add("hidden"); goTo(t, idx, +chap); return; }
      }
    };
  });

  // ── Bookmark / share ─────────────────────────────────────────────────────
  $("#bookmarkAll").onclick = () => {
    const key = `${state.testament}-${state.bookIdx}-${state.chapter}`;
    const bm = JSON.parse(localStorage.getItem("bibleBookmarks") || "[]");
    if (bm.includes(key)) {
      bm.splice(bm.indexOf(key), 1);
      $("#bookmarkAll").style.color = "";
    } else {
      bm.push(key);
      $("#bookmarkAll").style.color = "#e4593a";
    }
    localStorage.setItem("bibleBookmarks", JSON.stringify(bm));
  };
  $("#shareBtn").onclick = () => {
    const txt = `${currentBook().name} ${state.chapter} · Parole Éternelle`;
    if (navigator.share) navigator.share({ title: txt, text: txt, url: location.href });
    else { navigator.clipboard?.writeText(`${txt}\n${location.href}`); $("#shareBtn").style.color = "#e4593a"; setTimeout(() => $("#shareBtn").style.color = "", 1200); }
  };

  // ── Mobile sidebar ───────────────────────────────────────────────────────
  $("#menuBtn").onclick = () => {
    const sb = $("#sidebar");
    const isOpen = !sb.classList.contains("hidden");
    if (isOpen) {
      sb.classList.add("hidden");
      document.querySelector(".sidebar-overlay")?.remove();
    } else {
      sb.classList.remove("hidden");
      sb.style.position = "fixed";
      sb.style.top = "104px";
      sb.style.left = "16px";
      sb.style.right = "16px";
      sb.style.bottom = "16px";
      sb.style.zIndex = "60";
      sb.style.background = "var(--paper, #fbf8f1)";
      sb.style.padding = "20px";
      sb.style.borderRadius = "12px";
      sb.style.boxShadow = "0 20px 60px rgba(0,0,0,.2)";
      sb.style.overflowY = "auto";
      const ov = document.createElement("div");
      ov.className = "sidebar-overlay";
      ov.onclick = () => $("#menuBtn").click();
      document.body.appendChild(ov);
    }
  };

  // restore lang pill highlight
  $$(".lang-pill").forEach(b => b.classList.toggle("active", b.dataset.lang === state.lang));

  // initial render
  renderChapter();
  updateProgress();
})();
