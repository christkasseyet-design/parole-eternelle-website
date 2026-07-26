// Reusable visual primitives

// Cinematic dark placeholder for photography
function Photo({
  label,
  className = "",
  tone = "default",
  animated = false,
  children,
  style
}) {
  const toneStyle = {
    default: {},
    warm: {
      background: "radial-gradient(120% 80% at 30% 20%, rgba(216,182,106,.18), transparent 60%), radial-gradient(100% 80% at 80% 90%, rgba(216,182,106,.10), transparent 55%), linear-gradient(135deg, #16110a 0%, #1a1610 50%, #0d0b08 100%)"
    },
    cool: {
      background: "radial-gradient(120% 80% at 30% 20%, rgba(120,140,180,.12), transparent 60%), radial-gradient(100% 80% at 80% 90%, rgba(80,100,140,.10), transparent 55%), linear-gradient(135deg, #0a0d14 0%, #0e1119 50%, #060810 100%)"
    },
    deep: {
      background: "radial-gradient(120% 80% at 30% 20%, rgba(216,182,106,.08), transparent 60%), linear-gradient(135deg, #050507 0%, #0a0b12 100%)"
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: `ph ${className} ${animated ? "" : ""}`,
    style: {
      ...(toneStyle[tone] || {}),
      ...style
    }
  }, animated && /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 slow-zoom",
    style: {
      background: "inherit"
    }
  }), children, label && /*#__PURE__*/React.createElement("span", {
    className: "ph-label"
  }, label));
}

// Eyebrow label
function Eyebrow({
  children,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `eyebrow ${className}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), children);
}

// Section heading
function Heading({
  children,
  className = "",
  as: As = "h2"
}) {
  return /*#__PURE__*/React.createElement(As, {
    className: `font-display text-[42px] sm:text-[56px] md:text-[72px] leading-[0.95] tracking-mega text-bone-50 ${className}`
  }, children);
}

// Reveal-on-scroll wrapper
function Reveal({
  children,
  stagger = false,
  className = "",
  as: As = "div"
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Already at/near viewport on mount (or very tall element)? reveal immediately.
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
      el.classList.add("in");
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          el.classList.add("in");
          io.unobserve(el);
        }
      });
    }, {
      threshold: 0,
      rootMargin: "0px 0px -8% 0px"
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement(As, {
    ref: ref,
    className: `${stagger ? "reveal-stagger" : "reveal"} ${className}`
  }, children);
}

// Button
function Btn({
  variant = "gold",
  children,
  href,
  onClick,
  className = "",
  icon = true,
  type = "button"
}) {
  const cls = `btn btn-${variant} ${className}`;
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, children, icon && /*#__PURE__*/React.createElement(I.ArrowR, {
    width: "14",
    height: "14"
  }));
  const ext = href && href.startsWith("http");
  return href ? /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    target: ext ? "_blank" : undefined,
    rel: ext ? "noopener" : undefined,
    className: cls
  }, inner) : /*#__PURE__*/React.createElement("button", {
    type: type,
    onClick: onClick,
    className: cls
  }, inner);
}

// Section frame
function Section({
  id,
  eyebrow,
  children,
  className = "",
  bg = "ink-800",
  anchor
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    "data-screen-label": anchor,
    className: `relative ${className}`,
    style: {
      background: `var(--${bg})`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-14"
  }, children));
}
Object.assign(window, {
  Photo,
  Eyebrow,
  Heading,
  Reveal,
  Btn,
  Section
});