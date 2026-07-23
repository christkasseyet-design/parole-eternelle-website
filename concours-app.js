// Concours biblique — moteur de quiz mensuel
// Pour ajouter un mois : ajouter une entrée dans QUIZZES avec la clé "AAAA-MM".
(function () {
  "use strict";

  var WHATSAPP = "243897297625";

  var QUIZZES = {
    "2026-07": {
      title: "Spécial Jubilé 2026",
      questions: [
        {
          theme: "Jubilé 2026",
          q: "Quel est le thème du Jubilé 2026 de notre église ?",
          opts: [
            "« Y a-t-il rien qui soit étonnant de la part de l'Éternel ? »",
            "« Levons-nous et bâtissons »",
            "« Une génération transformée »",
            "« La Parole qui demeure »",
          ],
          a: 0,
        },
        {
          theme: "Référence biblique",
          q: "De quel passage biblique est tiré le thème du Jubilé ?",
          opts: ["Exode 3:14", "Genèse 18:14", "Jérémie 32:27", "Luc 1:37"],
          a: 1,
        },
        {
          theme: "Jubilé 2026",
          q: "Sur quelle période se déroule le Jubilé 2026 ?",
          opts: [
            "Du 1ᵉʳ juin au 30 juin 2026",
            "Du 08 juillet au 02 août 2026",
            "Du 15 août au 15 septembre 2026",
            "Tout le mois de décembre 2026",
          ],
          a: 1,
        },
        {
          theme: "Notre église",
          q: "Qui est le pasteur responsable du Centre Évangélique Parole Éternelle Ngiri-Ngiri ?",
          opts: [
            "Past. Kondo Wa Kondo",
            "Past. Dieudonné Mongu",
            "Past. Raphaël Kaseya Bin Moningo",
            "Past. Pedro Lukeba",
          ],
          a: 2,
        },
        {
          theme: "Jubilé 2026",
          q: "Lesquels de ces serviteurs de Dieu ont été invités au Jubilé 2026 ?",
          opts: [
            "Past. Kondo Wa Kondo et Past. Dieudonné Mongu",
            "Past. Roland Dalo et Past. Yvan Castanou",
            "Past. Denise Kaseya et Past. Pedro Lukeba",
            "Aucun invité extérieur",
          ],
          a: 0,
        },
        {
          theme: "Notre église",
          q: "Où se trouve notre église à Ngiri-Ngiri ?",
          opts: [
            "Avenue de la Paix n°10, Réf. Rond-point Ngaba",
            "Avenue Monkoto n°2 bis & 4, Réf. Marché Kale",
            "Avenue Kasa-Vubu n°25, Réf. Place Victoire",
            "Avenue de l'Université n°7, Réf. Stade des Martyrs",
          ],
          a: 1,
        },
        {
          theme: "Notre histoire",
          q: "Notre église est une extension de quelle église, au sein de la 37ᵉ CADC ?",
          opts: ["La Compassion", "Phila Cité d'Exaucement", "La Borne", "Cité Bethel"],
          a: 2,
        },
        {
          theme: "Dans la Parole",
          q: "Dans Genèse 18, à qui l'Éternel dit-il « Y a-t-il rien qui soit étonnant de la part de l'Éternel ? » — au sujet de la promesse d'un fils ?",
          opts: ["À Moïse, au sujet d'Israël", "À Abraham, au sujet de Sara", "À David, au sujet de Salomon", "À Zacharie, au sujet de Jean"],
          a: 1,
        },
      ],
    },
  };

  // ── Mois courant ──
  function monthKey() {
    var d = new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0");
  }
  var KEY = QUIZZES[monthKey()] ? monthKey() : "2026-07"; // fallback : dernier quiz publié
  var QUIZ = QUIZZES[KEY];
  var LS = "concours:" + KEY;

  var MONTH_NAMES = ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"];

  // ── Compte à rebours fin du mois ──
  var cd = document.getElementById("countdown");
  function updateCountdown() {
    var now = new Date();
    var end = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    var days = Math.max(0, Math.ceil((end - now) / 86400000));
    cd.textContent = "✦ Clôture dans " + days + " jour" + (days > 1 ? "s" : "");
  }
  updateCountdown();

  // ── État ──
  var idx = 0;
  var answers = new Array(QUIZ.questions.length).fill(null);

  var intro = document.getElementById("quizIntro");
  var card = document.getElementById("quizCard");
  var result = document.getElementById("quizResult");
  var qText = document.getElementById("qText");
  var qOptions = document.getElementById("qOptions");
  var qNum = document.getElementById("qNum");
  var qTotal = document.getElementById("qTotal");
  var qTheme = document.getElementById("qTheme");
  var qProgress = document.getElementById("qProgress");
  var nextBtn = document.getElementById("nextBtn");
  var prevBtn = document.getElementById("prevBtn");

  qTotal.textContent = String(QUIZ.questions.length).padStart(2, "0");

  // Participation déjà envoyée ce mois-ci ?
  try {
    var prev = JSON.parse(localStorage.getItem(LS) || "null");
    if (prev && prev.done) {
      var note = document.getElementById("doneNote");
      note.classList.remove("hidden");
      note.textContent = "✓ Vous avez déjà joué ce mois-ci (score " + prev.score + "/" + QUIZ.questions.length + ") — seul le premier envoi compte.";
    }
  } catch (e) {}

  function show(el) {
    [intro, card, result].forEach(function (x) { x.classList.add("hidden"); });
    el.classList.remove("hidden");
  }

  function renderQ() {
    var Q = QUIZ.questions[idx];
    qNum.textContent = String(idx + 1).padStart(2, "0");
    qTheme.textContent = Q.theme;
    qText.textContent = Q.q;
    qProgress.style.width = ((idx) / QUIZ.questions.length) * 100 + "%";
    qOptions.innerHTML = "";
    var letters = ["A", "B", "C", "D"];
    Q.opts.forEach(function (opt, i) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "opt" + (answers[idx] === i ? " sel" : "");
      b.innerHTML = '<span class="key">' + letters[i] + "</span><span>" + opt + "</span>";
      b.addEventListener("click", function () {
        answers[idx] = i;
        renderQ();
        nextBtn.removeAttribute("disabled");
      });
      qOptions.appendChild(b);
    });
    if (answers[idx] === null) nextBtn.setAttribute("disabled", "");
    else nextBtn.removeAttribute("disabled");
    prevBtn.style.visibility = idx === 0 ? "hidden" : "visible";
    nextBtn.textContent = idx === QUIZ.questions.length - 1 ? "Voir mon score →" : "Suivant →";
  }

  function score() {
    return QUIZ.questions.reduce(function (s, Q, i) { return s + (answers[i] === Q.a ? 1 : 0); }, 0);
  }

  // Code de participation : mois + réponses encodées (vérifiable par l'équipe)
  function playCode(sc) {
    var enc = answers.map(function (a) { return "ABCD"[a] || "-"; }).join("");
    return KEY.replace("-", "") + "-" + enc + "-" + sc;
  }

  function finish() {
    var sc = score();
    document.getElementById("scoreNum").textContent = sc;
    var msg;
    if (sc === QUIZ.questions.length) msg = "Sans faute ! Vous avez vraiment suivi — envoyez vite votre participation.";
    else if (sc >= 6) msg = "Très beau score ! Vous êtes dans la course pour le tirage du mois.";
    else if (sc >= 4) msg = "Pas mal ! Revenez écouter les prédications sur la chaîne et retentez le mois prochain.";
    else msg = "Merci d'avoir joué ! Les prédications du mois sont sur YouTube — la prochaine édition vous attend.";
    document.getElementById("scoreMsg").textContent = msg;
    document.getElementById("playCode").textContent = playCode(sc);
    qProgress.style.width = "100%";
    show(result);
    try {
      var prev = JSON.parse(localStorage.getItem(LS) || "null");
      if (!prev || !prev.done) localStorage.setItem(LS, JSON.stringify({ done: true, score: sc, when: Date.now() }));
    } catch (e) {}
    var saved = localStorage.getItem("concours:name");
    if (saved) document.getElementById("playerName").value = saved;
  }

  document.getElementById("startBtn").addEventListener("click", function () {
    idx = 0;
    answers = new Array(QUIZ.questions.length).fill(null);
    show(card);
    renderQ();
  });

  nextBtn.addEventListener("click", function () {
    if (idx < QUIZ.questions.length - 1) { idx++; renderQ(); }
    else finish();
  });

  prevBtn.addEventListener("click", function () {
    if (idx > 0) { idx--; renderQ(); }
  });

  document.getElementById("retryBtn").addEventListener("click", function () {
    show(intro);
    window.scrollTo({ top: document.getElementById("quiz").offsetTop - 40, behavior: "smooth" });
  });

  document.getElementById("waSubmit").addEventListener("click", function () {
    var name = (document.getElementById("playerName").value || "").trim();
    if (!name) { document.getElementById("playerName").focus(); return; }
    try { localStorage.setItem("concours:name", name); } catch (e) {}
    var sc = score();
    var mn = MONTH_NAMES[parseInt(KEY.split("-")[1], 10) - 1] + " " + KEY.split("-")[0];
    var msg =
      "🏆 CONCOURS BIBLIQUE — " + mn.toUpperCase() + "\n" +
      "Nom : " + name + "\n" +
      "Score : " + sc + "/" + QUIZ.questions.length + "\n" +
      "Code : " + playCode(sc) + "\n" +
      "Je confirme ma participation au concours du mois.";
    window.open("https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(msg), "_blank", "noopener");
  });
})();
