function Reels() {
  // Vertical 9:16 reels — placeholders + TikTok / FB / YouTube Shorts links
  // Users drop their actual reel thumbnails into the image-slots
  const reels = [{
    id: "reel-1",
    img: "assets/photos/chorale-scene.jpg",
    platform: "TikTok",
    tag: "Worship Live",
    title: "« Eternel mon Roc »",
    href: "https://www.tiktok.com/@paroleternellengiringiri"
  }, {
    id: "reel-2",
    img: "assets/photos/serie/pe-17.jpg",
    platform: "TikTok",
    tag: "Extrait prédication",
    title: "L'autorité du croyant",
    href: "https://www.tiktok.com/@paroleternellengiringiri"
  }, {
    id: "reel-3",
    img: "assets/photos/serie/pe-68.jpg",
    platform: "TikTok",
    tag: "Témoignage",
    title: "Restaurée par Sa grâce",
    href: "https://www.tiktok.com/@paroleternellengiringiri"
  }, {
    id: "reel-4",
    img: "assets/photos/jeunesse-etude.jpg",
    platform: "Facebook",
    tag: "Reel · NextGen",
    title: "Camp jeunesse 2026",
    href: "https://www.facebook.com/cepeng/videos"
  }, {
    id: "reel-5",
    img: "assets/photos/serie/pe-58.jpg",
    platform: "TikTok",
    tag: "Lingala worship",
    title: "Nzambe na ngai",
    href: "https://www.tiktok.com/@paroleternellengiringiri"
  }, {
    id: "reel-6",
    img: "assets/photos/serie/pe-08.jpg",
    platform: "YouTube",
    tag: "Short",
    title: "La prière qui change tout",
    href: "https://www.youtube.com/channel/UCPmV9FMnv9imGbnxJdFiMcw/shorts"
  }, {
    id: "reel-7",
    img: "assets/photos/accueil-entree.jpg",
    platform: "TikTok",
    tag: "Coulisses",
    title: "Avant le culte du dimanche",
    href: "https://www.tiktok.com/@paroleternellengiringiri"
  }, {
    id: "reel-8",
    img: "assets/photos/sainte-cene.jpg",
    platform: "Facebook",
    tag: "Reel",
    title: "Baptêmes · joie pure",
    href: "https://www.facebook.com/cepeng/videos"
  }];
  const platformBadge = p => {
    if (p === "TikTok") return {
      bg: "#000",
      color: "#fff",
      label: "TikTok"
    };
    if (p === "Facebook") return {
      bg: "#1877f2",
      color: "#fff",
      label: "Facebook"
    };
    return {
      bg: "#ff0000",
      color: "#fff",
      label: "YouTube"
    };
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "reels",
    "data-screen-label": "Reels",
    className: "sec-light relative bg-ink-900 py-20 md:py-28 overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-14"
  }, /*#__PURE__*/React.createElement(Reveal, {
    className: "flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    className: "mb-5"
  }, "Reels · Coulisses · Extraits"), /*#__PURE__*/React.createElement(Heading, null, "La vie d'église", /*#__PURE__*/React.createElement("br", null), "en ", /*#__PURE__*/React.createElement("em", {
    className: "italic text-gold-200 font-light"
  }, "vertical."))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-3"
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "ghost",
    href: "https://www.tiktok.com/@paroleternellengiringiri",
    icon: false
  }, /*#__PURE__*/React.createElement(I.TT, {
    width: "14",
    height: "14"
  }), " @paroleternellengiringiri"), /*#__PURE__*/React.createElement(Btn, {
    variant: "ghost",
    href: "https://www.facebook.com/cepeng/videos",
    icon: false
  }, /*#__PURE__*/React.createElement(I.FB, {
    width: "14",
    height: "14"
  }), " Facebook Reels"))), /*#__PURE__*/React.createElement(Reveal, {
    stagger: true,
    className: "-mx-6 sm:-mx-10 lg:-mx-14 overflow-x-auto pb-4 reels-scroll"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-4 px-6 sm:px-10 lg:px-14",
    style: {
      width: "max-content"
    }
  }, reels.map((r, i) => /*#__PURE__*/React.createElement(ReelCard, {
    key: i,
    ...r,
    idx: i + 1,
    badge: platformBadge(r.platform)
  })))), /*#__PURE__*/React.createElement(Reveal, {
    className: "mt-12 border-t border-white/10 pt-8 grid sm:grid-cols-3 gap-6"
  }, /*#__PURE__*/React.createElement(SocialStat, {
    icon: /*#__PURE__*/React.createElement(I.TT, {
      width: "18",
      height: "18"
    }),
    label: "TikTok",
    handle: "@paroleternellengiringiri",
    count: "12,4K",
    href: "https://www.tiktok.com/@paroleternellengiringiri"
  }), /*#__PURE__*/React.createElement(SocialStat, {
    icon: /*#__PURE__*/React.createElement(I.FB, {
      width: "18",
      height: "18"
    }),
    label: "Facebook",
    handle: "cepeng",
    count: "38,2K",
    href: "https://www.facebook.com/cepeng/"
  }), /*#__PURE__*/React.createElement(SocialStat, {
    icon: /*#__PURE__*/React.createElement(I.YT, {
      width: "18",
      height: "18"
    }),
    label: "YouTube",
    handle: "Parole Eternelle TV",
    count: "9,8K",
    href: "https://www.youtube.com/channel/UCPmV9FMnv9imGbnxJdFiMcw"
  }))), /*#__PURE__*/React.createElement("style", null, `
        .reels-scroll{scrollbar-color:rgba(244,194,56,.3) transparent;}
        .reels-scroll::-webkit-scrollbar{height:8px}
        .reels-scroll::-webkit-scrollbar-thumb{background:rgba(244,194,56,.3);border-radius:8px}
      `));
}
function ReelCard({
  id,
  img,
  platform,
  tag,
  title,
  href,
  idx,
  badge
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    target: "_blank",
    rel: "noopener",
    className: "group relative shrink-0 w-[220px] sm:w-[260px] block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative",
    style: {
      aspectRatio: "9 / 16"
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    tone: "warm",
    className: "absolute inset-0 ph"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0",
    style: {
      background: "linear-gradient(180deg, rgba(0,0,0,.15) 0%, rgba(0,0,0,.0) 35%, rgba(0,0,0,.65) 75%, rgba(0,0,0,.92) 100%)"
    }
  })), /*#__PURE__*/React.createElement("image-slot", {
    id: id,
    shape: "rect",
    src: img,
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      display: "block"
    },
    placeholder: "Glissez la miniature"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-3 left-3 z-10 px-2 py-1 font-mono text-[9px] tracking-[.18em] uppercase",
    style: {
      background: badge.bg,
      color: badge.color
    }
  }, badge.label), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition z-10 pointer-events-none"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-14 h-14 rounded-full bg-white/95 text-ink-900 grid place-items-center"
  }, /*#__PURE__*/React.createElement(I.Play, {
    width: "18",
    height: "18",
    style: {
      marginLeft: 2
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-3 left-3 right-3 z-10 pointer-events-none"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-mono text-[9px] tracking-[.22em] uppercase text-gold-300/90 mb-1"
  }, tag), /*#__PURE__*/React.createElement("div", {
    className: "font-display text-[18px] leading-tight text-white"
  }, title))));
}
function SocialStat({
  icon,
  label,
  handle,
  count,
  href
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    target: "_blank",
    rel: "noopener",
    className: "group flex items-center gap-4 p-4 border border-white/10 hover:border-gold-400 transition bg-ink-700"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-12 h-12 rounded-full border border-gold-500/30 grid place-items-center text-gold-200 group-hover:bg-gold-500/10 transition shrink-0"
  }, icon), /*#__PURE__*/React.createElement("div", {
    className: "min-w-0 flex-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-mono text-[10px] tracking-[.22em] uppercase text-gold-300/80"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "font-display text-[20px] leading-none text-bone-50 mt-1 truncate"
  }, handle), /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] text-bone-400 mt-1 tick"
  }, count, " abonnés")), /*#__PURE__*/React.createElement(I.ArrowR, {
    width: "16",
    height: "16",
    className: "text-bone-400 group-hover:text-gold-200 group-hover:translate-x-1 transition shrink-0"
  }));
}
window.Reels = Reels;