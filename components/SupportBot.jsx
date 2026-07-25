// Assistance IA — répond aux questions sur l'église et le site, et enregistre
// les problèmes / suggestions dans le journal local (lisible + téléchargeable).
const SB_KEY = "pe-support-log-v1";

const WA = "https://wa.me/243897297625";

// Base de connaissances — fonctionne hors ligne, sans IA. Chaque entrée :
// mots-clés (sans accents, minuscules) + réponse.
const SB_FAQ = [
  { k: ["horaire","heure","culte","dimanche","service","messe","quand","programme"],
    a: "Nos cultes ont lieu chaque dimanche à 07h30 (1er service) et 10h00 (2e service). En semaine : étude biblique et prières, et le Vendredi Ngomba. Le programme complet du mois se trouve dans la section « Programme »." },
  { k: ["jubile","jubilee","2026","anniversaire"],
    a: "Le Jubilé 2026 se tient du 08 juillet au 02 août 2026, sur le thème « Y a-t-il rien qui soit étonnant de la part de l'Éternel ? ». Tous les détails sont dans la section « Jubilé »." },
  { k: ["don","donner","soutenir","offrande","dime","dîme","argent","mpesa","m-pesa","orange","airtel","rawbank","equity","temple","construction","batir","bâtir"],
    a: "Merci pour votre cœur généreux ! Vous pouvez soutenir le projet du nouveau temple par Rawbank, Equity BCDC, Orange Money, M-Pesa ou Airtel Money. Toutes les coordonnées exactes sont affichées dans la section « Temple » et « Donner » de ce site." },
  { k: ["pasteur","kaseya","denise","responsable","dirige","qui est"],
    a: "L'église est conduite par le Pasteur Raphaël Kaseya Bin Moningo et son épouse Denise Kaseya. La section « À propos » raconte l'histoire de la maison." },
  { k: ["enfant","kids","royaume","jeunesse","nextgen","chorale","voix","filles du roi","ministere","ministère","groupe"],
    a: "Nos ministères : Kids Royaume (0–12 ans), NextGen (jeunesse), la chorale Voix d'Éternité, les Filles du Roi, l'accueil et le protocole. Voyez la section « Ministères » pour les rejoindre." },
  { k: ["bible","lire","ecouter","écouter","verset","lecture"],
    a: "La Bible est disponible directement sur le site — vous pouvez la lire et l'écouter. Cliquez sur « Bible » dans le menu." },
  { k: ["video","vidéo","predication","prédication","message","youtube","media","média","direct","live"],
    a: "Toutes les prédications et vidéos sont dans la section « Médias » et sur la page « Prédications ». Les cultes sont aussi diffusés sur notre chaîne YouTube et sur Facebook." },
  { k: ["concours","quiz","question du mois","jeu"],
    a: "Chaque mois, un concours biblique est proposé sur le site. Rendez-vous dans la section « Concours » pour participer." },
  { k: ["adresse","ou","où","lieu","situe","situé","venir","trouver","localisation","carte"],
    a: "Nous sommes au 2 bis & 4, Avenue Monkoto, Commune de Ngiri-Ngiri, Kinshasa (référence : Marché Kale). Un plan est disponible dans la section « Contact »." },
  { k: ["photo","galerie","image","album"],
    a: "La galerie photos de la vie de l'église se trouve dans la section « Galerie » — cultes, louange, enfants, jeunesse et grands moments." },
  { k: ["contact","telephone","téléphone","whatsapp","numero","numéro","ecrire","écrire","joindre","email","mail"],
    a: "Vous pouvez nous joindre par WhatsApp depuis la section « Contact » du site, ou via notre page Facebook « cepeng ». Nous vous répondrons dès que possible." },
  { k: ["facebook","reseau","réseau","tiktok","instagram","suivre"],
    a: "Suivez-nous sur Facebook (page « cepeng »), sur YouTube et sur TikTok — les liens sont en bas de chaque page." },
  { k: ["priere","prière","intercession","besoin","malade","aide","soutien"],
    a: "Nous prions volontiers avec vous. Écrivez votre sujet de prière via la section « Contact » ou par WhatsApp, et l'équipe pastorale en sera informée. Que le Seigneur vous fortifie." },
  { k: ["bapteme","baptême","membre","adherer","adhérer","rejoindre","nouveau"],
    a: "Soyez le bienvenu ! Venez simplement à l'un de nos cultes du dimanche ; l'équipe d'accueil vous orientera. Pour le baptême ou devenir membre, prenez contact via la section « Contact »." },
];

const SB_REPORT_KEYS = ["probleme","problème","bug","erreur","marche pas","fonctionne pas","souci","panne","cassé","casse","signaler","plante","lent"];
const SB_IDEA_KEYS   = ["amelioration","amélioration","suggestion","idee","idée","proposer","propose","ajouter","souhaite"];

function sbNorm(t) {
  return (t || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Choisit la meilleure réponse locale ; renvoie aussi le type (info / rapport / idée).
function sbAnswer(q) {
  const n = sbNorm(q);
  if (SB_REPORT_KEYS.some((k) => n.includes(sbNorm(k)))) {
    return { type: "rapport", text: "Merci de nous le signaler 🙏 Votre message est enregistré dans le journal de cette page pour l'équipe du site. Pour que ce soit traité rapidement, envoyez-le aussi par WhatsApp avec le bouton ci-dessous — précisez si possible la page concernée et votre téléphone." };
  }
  if (SB_IDEA_KEYS.some((k) => n.includes(sbNorm(k)))) {
    return { type: "idee", text: "Merci pour cette proposition 🙏 Elle est enregistrée pour l'équipe du site. Vous pouvez aussi l'envoyer par WhatsApp avec le bouton ci-dessous pour qu'elle soit étudiée plus vite." };
  }
  let best = null, score = 0;
  SB_FAQ.forEach((e) => {
    const s = e.k.reduce((acc, k) => acc + (n.includes(sbNorm(k)) ? sbNorm(k).length : 0), 0);
    if (s > score) { score = s; best = e; }
  });
  if (best && score > 0) return { type: "info", text: best.a };
  return { type: "inconnu", text: "Je n'ai pas la réponse à cette question précise. Écrivez-nous directement — par WhatsApp avec le bouton ci-dessous, via la section « Contact », ou sur notre page Facebook « cepeng ». Quelqu'un de l'équipe vous répondra." };
}

function sbLoad() {
  try { return JSON.parse(localStorage.getItem(SB_KEY) || "[]"); } catch (e) { return []; }
}
function sbSave(entries) {
  try { localStorage.setItem(SB_KEY, JSON.stringify(entries.slice(-300))); } catch (e) {}
}

function SupportBot() {
  const [open, setOpen] = React.useState(false);
  const [tab, setTab] = React.useState("chat");
  const [msgs, setMsgs] = React.useState([
    { role: "assistant", content: "Bonjour et bienvenue 🙏 Je suis Ange, l'aide de ce site. Posez-moi une question sur les cultes, le Jubilé, les dons ou les ministères — ou signalez-moi un souci sur le site." },
  ]);
  const [val, setVal] = React.useState("");
  const [busy, setBusy] = React.useState(false);
  const [log, setLog] = React.useState(sbLoad);
  const listRef = React.useRef(null);

  React.useEffect(() => {
    if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [msgs, busy, open, tab]);

  const record = (role, content) => {
    const next = [...sbLoad(), { at: new Date().toISOString(), role, content }];
    sbSave(next); setLog(next);
  };

  const send = (text) => {
    const q = (text || "").trim();
    if (!q || busy) return;
    setVal("");
    setMsgs((m) => [...m, { role: "user", content: q }]);
    record("visiteur", q);
    setBusy(true);
    // Petite pause pour que la conversation reste naturelle.
    setTimeout(() => {
      const r = sbAnswer(q);
      setMsgs((m) => [...m, { role: "assistant", content: r.text, wa: r.type !== "info" ? q : null }]);
      record("ange", r.text);
      setBusy(false);
    }, 450);
  };

  const download = () => {
    const body = log.map((e) => `[${new Date(e.at).toLocaleString("fr-FR")}] ${e.role.toUpperCase()} : ${e.content}`).join("\n\n");
    const url = URL.createObjectURL(new Blob([body || "journal vide"], { type: "text/plain;charset=utf-8" }));
    const a = document.createElement("a");
    a.href = url; a.download = "assistance-parole-eternelle.txt"; a.click();
    setTimeout(() => URL.revokeObjectURL(url), 2000);
  };

  const quick = ["Horaires des cultes ?", "Signaler un problème sur le site", "Proposer une amélioration", "Comment soutenir le projet du temple ?"];

  return (
    <div className="sb-root" data-i18n-skip="">
      {open && (
        <div className="sb-panel" role="dialog" aria-label="Assistance">
          <div className="sb-head">
            <div className="flex items-center gap-2.5">
              <span className="sb-dot"></span>
              <div>
                <div className="font-display text-[15px] text-bone-50 leading-none">Ange · Aide du site</div>
                <div className="font-mono text-[9px] tracking-[.2em] uppercase text-gold-300 mt-1.5">Réponses rapides · signalements</div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Fermer" className="w-8 h-8 rounded-full border border-white/15 text-bone-200 grid place-items-center hover:bg-white/10 transition">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
            </button>
          </div>

          <div className="sb-tabs">
            {[["chat", "Conversation"], ["log", `Journal (${log.length})`]].map(([k, l]) => (
              <button key={k} onClick={() => setTab(k)} className={`sb-tab ${tab === k ? "is-on" : ""}`}>{l}</button>
            ))}
          </div>

          {tab === "chat" ? (
            <React.Fragment>
              <div className="sb-body" ref={listRef}>
                {msgs.map((m, i) => (
                  <div key={i} className={`sb-msg ${m.role === "user" ? "sb-me" : "sb-ai"}`}>
                    {m.content}
                    {m.wa && (
                      <a className="sb-wa" href={`${WA}?text=${encodeURIComponent("Bonjour, message depuis le site Parole Éternelle :\n\n" + m.wa)}`}
                         target="_blank" rel="noopener">
                        Envoyer par WhatsApp
                      </a>
                    )}
                  </div>
                ))}
                {busy && <div className="sb-msg sb-ai sb-typing"><span></span><span></span><span></span></div>}
              </div>
              <div className="sb-quick">
                {quick.map((q) => (
                  <button key={q} onClick={() => send(q)} disabled={busy}>{q}</button>
                ))}
              </div>
              <form className="sb-form" onSubmit={(e) => { e.preventDefault(); send(val); }}>
                <input value={val} onChange={(e) => setVal(e.target.value)} placeholder="Écrivez votre message…" aria-label="Votre message" />
                <button type="submit" disabled={busy || !val.trim()} aria-label="Envoyer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h13M12 5l7 7-7 7"/></svg>
                </button>
              </form>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div className="sb-body">
                {log.length === 0 && <div className="text-[13px] text-bone-300">Aucun message enregistré pour l'instant.</div>}
                {log.slice().reverse().map((e, i) => (
                  <div key={i} className="sb-logitem">
                    <div className="font-mono text-[9px] tracking-[.16em] uppercase text-gold-300/80">{e.role} · {new Date(e.at).toLocaleString("fr-FR")}</div>
                    <div className="text-[13px] text-bone-100 mt-1 leading-snug">{e.content}</div>
                  </div>
                ))}
              </div>
              <div className="sb-quick">
                <button onClick={download}>Télécharger le journal</button>
                <button onClick={() => { if (confirm("Effacer tout le journal ?")) { sbSave([]); setLog([]); } }}>Effacer</button>
              </div>
            </React.Fragment>
          )}
        </div>
      )}

      <button className="sb-fab" onClick={() => setOpen(!open)} aria-label="Assistance du site">
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
        ) : (
          <React.Fragment>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.5-4.6A8 8 0 1 1 21 12z"/></svg>
            <span className="sb-fab-label">Aide</span>
          </React.Fragment>
        )}
      </button>
    </div>
  );
}

window.SupportBot = SupportBot;
