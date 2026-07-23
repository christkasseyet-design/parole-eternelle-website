function Footer() {
  return (
    <footer className="relative bg-ink-900 border-t border-gold-500/15">
      {/* Big verse band */}
      <div className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0" style={{ background: "radial-gradient(80% 100% at 50% 0%, rgba(216,182,106,.10), transparent 70%)" }}></div>
        <div className="relative max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-14 py-20 md:py-28 text-center">
          <Eyebrow className="justify-center mb-8 inline-flex">Notre fondement</Eyebrow>
          <p className="font-display text-[34px] sm:text-[52px] md:text-[68px] leading-[1.05] tracking-mega text-bone-50 max-w-5xl mx-auto">
            « Le ciel et la terre <em className="italic text-gold-200 font-light">passeront,</em>
            <br className="hidden sm:block"/>
            mais mes paroles ne <em className="italic text-gold-200 font-light">passeront point.</em> »
          </p>
          <div className="mt-6 font-mono text-[11px] tracking-[.32em] uppercase text-gold-300/80">— Matthieu 24 : 35</div>
        </div>
      </div>

      <div className="max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-14 py-16">
        <div className="grid lg:grid-cols-12 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <Logo/>
              <div className="leading-tight">
                <div className="font-display text-[24px] text-bone-50">Parole Éternelle</div>
                <div className="font-mono text-[9px] tracking-[.32em] uppercase text-gold-300/80 -mt-0.5">C.E. Ngiri-Ngiri · Kinshasa</div>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-[14px] text-bone-300 leading-relaxed">
              Église chrétienne évangélique des <span className="text-gold-200">Assemblées de Dieu</span>,
              à Ngiri-Ngiri, fille spirituelle de l'église-mère <span className="text-gold-200">Laborne</span>.
              Une famille pour une génération transformée.
            </p>

            <form className="mt-7" onSubmit={(e) => { e.preventDefault(); const em = e.target.elements.nl.value; window.location.href = "mailto:paroleternellengiringiri@gmail.com?subject=" + encodeURIComponent("Abonnement à la lettre d'église") + "&body=" + encodeURIComponent("Bonjour, je souhaite recevoir la lettre d'église.\nMon adresse : " + em); }}>
              <div className="font-mono text-[10px] tracking-[.22em] uppercase text-bone-400 mb-2">Lettre d'église</div>
              <div className="flex gap-2 max-w-sm">
                <input name="nl" required type="email" placeholder="votre@email.cd" className="flex-1 bg-ink-700 border border-white/10 px-4 py-2.5 text-[13px] text-bone-50 placeholder-bone-400 focus:outline-none focus:border-gold-400"/>
                <button type="submit" className="px-4 bg-gold-300 text-ink-900 text-[12px] font-medium">S'abonner</button>
              </div>
            </form>
          </div>

          {/* Links */}
          <FooterCol title="Église" items={[
            ["À propos", "#a-propos"],
            ["Vision & valeurs", "#vision"],
            ["Équipe pastorale", "#a-propos"],
            ["Église-mère Laborne", "https://www.laborne.cd/"],
            ["Croire & être baptisé", "#contact"],
          ]}/>
          <FooterCol title="Ministères" items={[
            ["NextGen · Jeunesse", "#communaute"],
            ["Filles du Roi", "#communaute"],
            ["Kids Royaume", "#communaute"],
            ["Voix d'Éternité", "#communaute"],
            ["Sentinelles", "#communaute"],
          ]}/>
          <FooterCol title="Ressources" items={[
            ["Prédications", "#messages"],
            ["Podcast", "#medias"],
            ["Worship", "#medias"],
            ["Direct YouTube", "#medias"],
            ["Demande de prière", "#contact"],
          ]}/>
          <FooterCol title="Contact" items={[
            ["Nous visiter", "#contact"],
            ["2 bis & 4, Av. Monkoto · Réf. Marché Kale", "https://www.google.com/maps/search/?api=1&query=Av.+Monkoto+Ngiri-Ngiri+Kinshasa"],
            ["Pasteur · Mardi 10h00 – 17h00", "#contact"],
            ["Concours biblique du mois", "concours.html"],
            ["WhatsApp", "https://wa.me/243897297625"],
            ["paroleternellengiringiri@gmail.com", "mailto:paroleternellengiringiri@gmail.com"],
          ]}/>
        </div>

        {/* Service times */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/10 mb-12">
          {[
            ["DIM", "Culte dominical · 1", "07h30"],
            ["DIM", "Culte dominical · 2", "10h00"],
            ["MER", "Étude biblique", "17h00"],
            ["VEN", "Module de prière + Ngomba", "12h30"],
          ].map(([d, n, h]) => (
            <div key={n} className="bg-ink-900 p-5 flex items-center justify-between">
              <div>
                <div className="font-mono text-[10px] tracking-[.28em] uppercase text-gold-300/80">{d}</div>
                <div className="text-[13px] text-bone-100 mt-1">{n}</div>
              </div>
              <div className="font-display text-[26px] text-bone-50 tick">{h}</div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-white/10 pt-8">
          <div className="font-mono text-[11px] tracking-[.18em] uppercase text-bone-400">
            © 2026 C.E. Parole Éternelle Ngiri-Ngiri · 2 bis &amp; 4, Av. Monkoto · Kinshasa
          </div>
          <div className="flex items-center gap-4 text-bone-300">
            <Social href="https://www.youtube.com/@paroleeternellengiri-ngiri" icon={<I.YT width="16" height="16"/>} label="Parole Eternelle Ngiri-ngiri TV"/>
            <Social href="https://www.facebook.com/cepeng/" icon={<I.FB width="16" height="16"/>} label="C.E. Parole Eternelle Ngiri Ngiri"/>
            <Social href="https://www.tiktok.com/@paroleternellengiringiri" icon={<I.TT width="16" height="16"/>} label="@paroleternellengiringiri"/>
            <Social href="https://www.instagram.com/paroleternellengiringiri/" icon={<I.IG width="16" height="16"/>} label="@paroleternellengiringiri"/>
            <Social href="https://wa.me/243897297625" icon={<I.Whatsapp width="16" height="16"/>} label="WhatsApp"/>
          </div>
          <div className="flex items-center gap-5 font-mono text-[10px] tracking-[.18em] uppercase text-bone-400">
            <a href="#contact" className="hover:text-gold-200 transition">Mentions légales</a>
            <a href="#contact" className="hover:text-gold-200 transition">Confidentialité</a>
          </div>
        </div>

        <div className="mt-10 font-display italic text-center text-[15px] text-bone-400">
          Soli Deo Gloria — <span className="text-gold-300/80">À Dieu seul la gloire.</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }) {
  return (
    <div className="lg:col-span-2">
      <div className="font-mono text-[10px] tracking-[.22em] uppercase text-gold-300/80 mb-4">{title}</div>
      <ul className="space-y-2.5">
        {items.map(([label, href]) => (
          <li key={label}><a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener" : undefined} className="text-[13px] text-bone-300 hover:text-bone-50 transition">{label}</a></li>
        ))}
      </ul>
    </div>
  );
}

function Social({ icon, label, href = "#" }) {
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener" title={label} aria-label={label} className="w-10 h-10 rounded-full border border-white/10 grid place-items-center text-bone-200 hover:border-gold-400 hover:text-gold-200 hover:bg-gold-500/[.06] transition">
      {icon}
    </a>
  );
}

window.Footer = Footer;
