// Bible data — abbreviated for the prototype. Each language has a single chapter
// (John 3) so the reader is fully demoable. In production these would load from
// an API (bible-api.com, scripture.api.bible) and be cached for offline reading.

window.BIBLE_BOOKS = {
  ot: [
    { name: "Genèse",       abbr: "Gen", chapters: 50 },
    { name: "Exode",        abbr: "Exo", chapters: 40 },
    { name: "Lévitique",    abbr: "Lév", chapters: 27 },
    { name: "Nombres",      abbr: "Nom", chapters: 36 },
    { name: "Deutéronome",  abbr: "Deu", chapters: 34 },
    { name: "Josué",        abbr: "Jos", chapters: 24 },
    { name: "Juges",        abbr: "Jug", chapters: 21 },
    { name: "Ruth",         abbr: "Rut", chapters: 4 },
    { name: "1 Samuel",     abbr: "1Sa", chapters: 31 },
    { name: "2 Samuel",     abbr: "2Sa", chapters: 24 },
    { name: "1 Rois",       abbr: "1Ro", chapters: 22 },
    { name: "2 Rois",       abbr: "2Ro", chapters: 25 },
    { name: "1 Chroniques", abbr: "1Ch", chapters: 29 },
    { name: "2 Chroniques", abbr: "2Ch", chapters: 36 },
    { name: "Esdras",       abbr: "Esd", chapters: 10 },
    { name: "Néhémie",      abbr: "Néh", chapters: 13 },
    { name: "Esther",       abbr: "Est", chapters: 10 },
    { name: "Job",          abbr: "Job", chapters: 42 },
    { name: "Psaumes",      abbr: "Psa", chapters: 150 },
    { name: "Proverbes",    abbr: "Pro", chapters: 31 },
    { name: "Ecclésiaste",  abbr: "Ecc", chapters: 12 },
    { name: "Cantique",     abbr: "Can", chapters: 8 },
    { name: "Ésaïe",        abbr: "Ésa", chapters: 66 },
    { name: "Jérémie",      abbr: "Jér", chapters: 52 },
    { name: "Lamentations", abbr: "Lam", chapters: 5 },
    { name: "Ézéchiel",     abbr: "Éze", chapters: 48 },
    { name: "Daniel",       abbr: "Dan", chapters: 12 },
    { name: "Osée",         abbr: "Osé", chapters: 14 },
    { name: "Joël",         abbr: "Joë", chapters: 3 },
    { name: "Amos",         abbr: "Amo", chapters: 9 },
    { name: "Abdias",       abbr: "Abd", chapters: 1 },
    { name: "Jonas",        abbr: "Jon", chapters: 4 },
    { name: "Michée",       abbr: "Mic", chapters: 7 },
    { name: "Nahum",        abbr: "Nah", chapters: 3 },
    { name: "Habacuc",      abbr: "Hab", chapters: 3 },
    { name: "Sophonie",     abbr: "Sop", chapters: 3 },
    { name: "Aggée",        abbr: "Agg", chapters: 2 },
    { name: "Zacharie",     abbr: "Zac", chapters: 14 },
    { name: "Malachie",     abbr: "Mal", chapters: 4 },
  ],
  nt: [
    { name: "Matthieu",       abbr: "Mat", chapters: 28 },
    { name: "Marc",           abbr: "Mar", chapters: 16 },
    { name: "Luc",            abbr: "Luc", chapters: 24 },
    { name: "Jean",           abbr: "Jea", chapters: 21 },
    { name: "Actes",          abbr: "Act", chapters: 28 },
    { name: "Romains",        abbr: "Rom", chapters: 16 },
    { name: "1 Corinthiens",  abbr: "1Co", chapters: 16 },
    { name: "2 Corinthiens",  abbr: "2Co", chapters: 13 },
    { name: "Galates",        abbr: "Gal", chapters: 6 },
    { name: "Éphésiens",      abbr: "Éph", chapters: 6 },
    { name: "Philippiens",    abbr: "Phi", chapters: 4 },
    { name: "Colossiens",     abbr: "Col", chapters: 4 },
    { name: "1 Thessaloniciens",abbr: "1Th", chapters: 5 },
    { name: "2 Thessaloniciens",abbr: "2Th", chapters: 3 },
    { name: "1 Timothée",     abbr: "1Ti", chapters: 6 },
    { name: "2 Timothée",     abbr: "2Ti", chapters: 4 },
    { name: "Tite",           abbr: "Tit", chapters: 3 },
    { name: "Philémon",       abbr: "Phm", chapters: 1 },
    { name: "Hébreux",        abbr: "Héb", chapters: 13 },
    { name: "Jacques",        abbr: "Jac", chapters: 5 },
    { name: "1 Pierre",       abbr: "1Pi", chapters: 5 },
    { name: "2 Pierre",       abbr: "2Pi", chapters: 3 },
    { name: "1 Jean",         abbr: "1Je", chapters: 5 },
    { name: "2 Jean",         abbr: "2Je", chapters: 1 },
    { name: "3 Jean",         abbr: "3Je", chapters: 1 },
    { name: "Jude",           abbr: "Jud", chapters: 1 },
    { name: "Apocalypse",     abbr: "Apo", chapters: 22 },
  ]
};

// Language labels
window.LANG_LABELS = {
  fr: { name: "Français", version: "Louis Segond (LSG)",       audio: "Voix française · LSG" },
  en: { name: "English",  version: "King James Version (KJV)", audio: "English voice · KJV" },
  ln: { name: "Lingala",  version: "Lingala — Boyokana",       audio: "Voix lingala" },
  sw: { name: "Swahili",  version: "Swahili — Union Version",  audio: "Sauti ya Kiswahili" },
  kg: { name: "Kikongo",  version: "Kikongo — Bibila Yatangulu",audio: "Mbembo wa Kikongo" },
  ts: { name: "Tshiluba", version: "Tshiluba — Mukanda Wa Nzambi",audio:"Diiyu dia Tshiluba" }
};

// Single sample chapter (Jean 3 / John 3) in 5 languages.
// Verses 16, 17, 36 marked as Jesus's words (is-jesus styling).
window.SAMPLE_CHAPTER = {
  fr: {
    title: "L'entretien avec Nicodème · « Il faut naître de nouveau »",
    verses: [
      { n: 1,  t: "Or, il y avait un homme d'entre les pharisiens, nommé Nicodème, un chef des Juifs." },
      { n: 2,  t: "Il vint, lui, auprès de Jésus, de nuit, et lui dit : Rabbi, nous savons que tu es un docteur venu de Dieu ; car personne ne peut faire ces miracles que tu fais, si Dieu n'est avec lui." },
      { n: 3,  t: "Jésus lui répondit : En vérité, en vérité, je te le dis, si un homme ne naît de nouveau, il ne peut voir le royaume de Dieu.", jesus:true },
      { n: 4,  t: "Nicodème lui dit : Comment un homme peut-il naître quand il est vieux ? Peut-il rentrer dans le sein de sa mère et naître ?" },
      { n: 5,  t: "Jésus répondit : En vérité, en vérité, je te le dis, si un homme ne naît d'eau et d'Esprit, il ne peut entrer dans le royaume de Dieu.", jesus:true },
      { n: 6,  t: "Ce qui est né de la chair est chair, et ce qui est né de l'Esprit est esprit.", jesus:true },
      { n: 7,  t: "Ne t'étonne pas que je t'aie dit : Il faut que vous naissiez de nouveau.", jesus:true },
      { n: 8,  t: "Le vent souffle où il veut, et tu en entends le bruit ; mais tu ne sais d'où il vient, ni où il va. Il en est ainsi de tout homme qui est né de l'Esprit.", jesus:true },
      { n: 9,  t: "Nicodème lui dit : Comment cela peut-il se faire ?" },
      { n: 10, t: "Jésus lui répondit : Tu es le docteur d'Israël, et tu ne sais pas ces choses !", jesus:true },
      { n: 11, t: "En vérité, en vérité, je te le dis, nous disons ce que nous savons, et nous rendons témoignage de ce que nous avons vu ; et vous ne recevez pas notre témoignage.", jesus:true },
      { n: 12, t: "Si vous ne croyez pas quand je vous ai parlé des choses terrestres, comment croirez-vous quand je vous parlerai des choses célestes ?", jesus:true },
      { n: 13, t: "Personne n'est monté au ciel, si ce n'est celui qui est descendu du ciel, le Fils de l'homme qui est dans le ciel.", jesus:true },
      { n: 14, t: "Et comme Moïse éleva le serpent dans le désert, il faut de même que le Fils de l'homme soit élevé,", jesus:true },
      { n: 15, t: "afin que quiconque croit en lui ait la vie éternelle.", jesus:true },
      { n: 16, t: "Car Dieu a tant aimé le monde qu'il a donné son Fils unique, afin que quiconque croit en lui ne périsse point, mais qu'il ait la vie éternelle.", jesus:true },
      { n: 17, t: "Dieu, en effet, n'a pas envoyé son Fils dans le monde pour qu'il juge le monde, mais pour que le monde soit sauvé par lui.", jesus:true },
      { n: 18, t: "Celui qui croit en lui n'est point jugé ; mais celui qui ne croit pas est déjà jugé, parce qu'il n'a pas cru au nom du Fils unique de Dieu.", jesus:true },
      { n: 19, t: "Et ce jugement c'est que, la lumière étant venue dans le monde, les hommes ont préféré les ténèbres à la lumière, parce que leurs œuvres étaient mauvaises.", jesus:true },
      { n: 20, t: "Car quiconque fait le mal hait la lumière, et ne vient point à la lumière, de peur que ses œuvres ne soient dévoilées ;", jesus:true },
      { n: 21, t: "mais celui qui agit selon la vérité vient à la lumière, afin que ses œuvres soient manifestées, parce qu'elles sont faites en Dieu.", jesus:true },
      { n: 22, t: "Après cela, Jésus, accompagné de ses disciples, se rendit dans la terre de Judée ; et là il demeurait avec eux, et il baptisait." },
      { n: 23, t: "Jean aussi baptisait à Énon, près de Salim, parce qu'il y avait là beaucoup d'eau ; et on y venait pour être baptisé." },
      { n: 24, t: "Car Jean n'avait pas encore été mis en prison." },
      { n: 25, t: "Or, il s'éleva de la part des disciples de Jean une dispute avec un Juif touchant la purification." },
      { n: 26, t: "Ils vinrent trouver Jean, et lui dirent : Rabbi, celui qui était avec toi au delà du Jourdain, et à qui tu as rendu témoignage, voici, il baptise, et tous vont à lui." },
      { n: 27, t: "Jean répondit : Un homme ne peut recevoir que ce qui lui a été donné du ciel." },
      { n: 28, t: "Vous-mêmes m'êtes témoins que j'ai dit : Je ne suis pas le Christ, mais j'ai été envoyé devant lui." },
      { n: 29, t: "Celui à qui appartient l'épouse, c'est l'époux ; mais l'ami de l'époux, qui se tient là et qui l'entend, éprouve une grande joie à cause de la voix de l'époux : aussi cette joie, qui est la mienne, est parfaite." },
      { n: 30, t: "Il faut qu'il croisse, et que je diminue." },
      { n: 31, t: "Celui qui vient d'en haut est au-dessus de tous ; celui qui est de la terre est de la terre, et il parle comme étant de la terre. Celui qui vient du ciel est au-dessus de tous," },
      { n: 32, t: "il rend témoignage de ce qu'il a vu et entendu, et personne ne reçoit son témoignage." },
      { n: 33, t: "Celui qui a reçu son témoignage a certifié que Dieu est vrai ;" },
      { n: 34, t: "car celui que Dieu a envoyé dit les paroles de Dieu, parce que Dieu ne lui donne pas l'Esprit avec mesure." },
      { n: 35, t: "Le Père aime le Fils, et il a remis toutes choses entre ses mains." },
      { n: 36, t: "Celui qui croit au Fils a la vie éternelle ; celui qui ne croit pas au Fils ne verra point la vie, mais la colère de Dieu demeure sur lui." }
    ]
  },
  ln: {
    title: "Yesu na Nikodemo · « Esengeli kobotama lisusu »",
    verses: [
      { n: 1,  t: "Ezalaki na moto moko ya bafarizeo, kombo na ye Nikodemo, mokonzi ya Bayuda." },
      { n: 2,  t: "Ye akendaki epai ya Yesu na butu mpe alobaki na ye : Rabi, toyebi ete ozali molakisi oyo auti epai ya Nzambe, mpo moto te akoki kosala bilembo oyo ozali kosala soki Nzambe azali na ye te." },
      { n: 3,  t: "Yesu azongiselaki ye : Ya solo, ya solo, nalobi na yo, soki moto abotami lisusu te, akoki komona bokonzi ya Nzambe te.", jesus:true },
      { n: 4,  t: "Nikodemo alobaki na ye : Ndenge nini moto akoki kobotama tango azali mobange? Akoki kozonga lisusu na libumu ya mama na ye mpe kobotama lisusu?" },
      { n: 5,  t: "Yesu azongisaki : Ya solo, ya solo, nalobi na yo, soki moto abotami na mai mpe na Molimo te, akoki kokota na bokonzi ya Nzambe te.", jesus:true },
      { n: 16, t: "Pamba te Nzambe alingaki mokili mingi penza ete apesaki Mwana na ye se moko, mpo moto nyonso oyo akondima ye akufa te kasi azwa bomoi ya seko.", jesus:true },
      { n: 17, t: "Pamba te Nzambe atindaki Mwana na ye na mokili te mpo na kosambisa mokili, kasi mpo mokili ebika na nzela na ye.", jesus:true },
      { n: 36, t: "Oyo andimi Mwana azali na bomoi ya seko ; kasi oyo aboyi Mwana akomona bomoi te, mpe nkele ya Nzambe etikali likolo na ye." }
    ]
  },
  sw: {
    title: "Yesu na Nikodemo · « Hupasa kuzaliwa mara ya pili »",
    verses: [
      { n: 1,  t: "Basi palikuwa na mtu mmoja wa Mafarisayo, jina lake Nikodemo, mkuu wa Wayahudi." },
      { n: 2,  t: "Huyo alimjia Yesu usiku, akamwambia, Rabi, twajua ya kuwa wewe u mwalimu, umetoka kwa Mungu; kwa maana hakuna mtu awezaye kuzifanya ishara hizo uzifanyazo wewe, isipokuwa Mungu yu pamoja naye." },
      { n: 3,  t: "Yesu akajibu, akamwambia, Amin, amin, nakuambia, Mtu asipozaliwa mara ya pili, hawezi kuuona ufalme wa Mungu.", jesus:true },
      { n: 5,  t: "Yesu akajibu, Amin, amin, nakuambia, Mtu asipozaliwa kwa maji na kwa Roho, hawezi kuuingia ufalme wa Mungu.", jesus:true },
      { n: 16, t: "Kwa maana jinsi hii Mungu aliupenda ulimwengu, hata akamtoa Mwanawe pekee, ili kila mtu amwaminiye asipotee, bali awe na uzima wa milele.", jesus:true },
      { n: 17, t: "Maana Mungu hakumtuma Mwana ulimwenguni ili auhukumu ulimwengu, bali ulimwengu uokolewe katika yeye.", jesus:true },
      { n: 36, t: "Amwaminiye Mwana yuna uzima wa milele ; asiyemwamini Mwana hataona uzima, bali ghadhabu ya Mungu inamkalia." }
    ]
  },
  kg: {
    title: "Yesu ye Nikodemo · « Mfwete butuka diaka »",
    verses: [
      { n: 1,  t: "Yandi vuandaka muntu mosi mu mfarisayo, zina diandi Nikodemo, mfumu ya Bayuda." },
      { n: 2,  t: "Yandi kwendaka kwa Yesu na mpimpa, ye yandi tubidi : Rabi, tuzeyi vo ngeye u nlongi watukidi kwa Nzambi; kadi kani mosi lenda sala bidimbu biabi biopele kana Nzambi kayi kwa yandi." },
      { n: 3,  t: "Yesu vutudidi : Kieleka, kieleka, ikutubidi, kana muntu kabutukidi diaka ko, kalendi mona kintinu kya Nzambi ko.", jesus:true },
      { n: 16, t: "Kadi Nzambi wazolele nza wonso bonso, vo wakabidi Mwana andi mosi mpamba, mu diambu di mwana konso oyo kebondelaka mu yandi kafwila ko, kansi kabaka moyo wa moyo wa mvu ke na mvu.", jesus:true },
      { n: 17, t: "Kadi Nzambi katumini Mwana andi mu nza ko mu diambu di sambisa nza, kansi mu diambu di nza yi gulukila mu yandi.", jesus:true },
      { n: 36, t: "Yandi kekwikilanga Mwana, una moyo wa mvu ke na mvu ; oyo kebula Mwana, kena mona moyo ko, kansi makasi ma Nzambi ikalanga va kwa yandi." }
    ]
  },
  ts: {
    title: "Yezu ne Nikodemo · « Bidi kuledibwa kabidi »",
    verses: [
      { n: 1,  t: "Kuvua muntu kampanda wa bena Falese, dîna diende Nikodemo, mfumu wa bena Yuda." },
      { n: 2,  t: "Yeye wakaya kudi Yezu butuku ; kuamba kudi yeye ne : Labi, tudi bamanya ne : udi mulongeshi mufume kudi Nzambi ; bualu kakuena muntu udi mukokesha kuenza bimanyiniu ebi biudi wewe wenza, kakuyi Nzambi nende." },
      { n: 3,  t: "Yezu wakamuandamuna ne : Bushuwa, bushuwa, ndi nkuambila ne : Bikala muntu kakuledibwa kabidi nansha, kena mua kumona bukalenge bwa Nzambi.", jesus:true },
      { n: 16, t: "Bualu Nzambi wakatamba kunanga ba pa buloba, ke yeye mua kufila Muanende wa bumue, bua muntu yonso udi umuitabuja kafwi, kadi ikale ne mubikadilu wa tshiendelele.", jesus:true },
      { n: 17, t: "Bualu Nzambi kena mutume Muanende pa buloba bua kulumbuluila ba pa buloba, kadi bua basangidibwa kudiye.", jesus:true },
      { n: 36, t: "Udi witabuja Muana udi ne muoyo wa tshiendelele ; kadi udi kayi witabuja Muana kena mua kumona muoyo, kadi tshiji tshia Nzambi tshidi pa diende." }
    ]
  }
};

// Default starting state
window.START_STATE = { testament: "nt", bookIdx: 3, chapter: 3, lang: "fr" };
