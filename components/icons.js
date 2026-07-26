// Hand-curated minimal line icons — original simple shapes
const I = {
  Cross: p => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    ...p
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 3v18M5 9h14"
  })),
  Dove: p => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...p
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 14c4 0 6-3 8-3s3 1 5 1 4-2 5-4c-1 7-6 11-12 11-4 0-6-2-6-5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 7l2-2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "18",
    cy: "6",
    r: ".6",
    fill: "currentColor"
  })),
  Flame: p => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...p
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 3c1 4 5 5 5 10a5 5 0 1 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-4 1-6 1-9z"
  })),
  Open: p => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinejoin: "round",
    ...p
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 6c3-1 6-1 9 1 3-2 6-2 9-1v13c-3-1-6-1-9 1-3-2-6-2-9-1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 7v13"
  })),
  People: p => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...p
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "9",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 20c0-3 3-5 6-5s6 2 6 5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17",
    cy: "8",
    r: "2.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 20c0-2 2-4 4-4s2 1 2 2"
  })),
  Music: p => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...p
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 18V6l11-2v12"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "18",
    r: "2.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "18",
    cy: "16",
    r: "2.5"
  })),
  Heart: p => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...p
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 20s-7-4.5-9-9c-1.5-3.5 1-7 4.5-7 1.8 0 3.3.8 4.5 2.5C13.2 4.8 14.7 4 16.5 4 20 4 22.5 7.5 21 11c-2 4.5-9 9-9 9z"
  })),
  Calendar: p => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    ...p
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "5",
    width: "18",
    height: "16",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 3v4M16 3v4M3 10h18"
  })),
  Mic: p => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    ...p
  }, /*#__PURE__*/React.createElement("rect", {
    x: "9",
    y: "3",
    width: "6",
    height: "12",
    rx: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 11a7 7 0 0 0 14 0M12 18v3M8 21h8"
  })),
  Play: p => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "currentColor",
    ...p
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 4l14 8-14 8z"
  })),
  Pause: p => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "currentColor",
    ...p
  }, /*#__PURE__*/React.createElement("rect", {
    x: "6",
    y: "4",
    width: "4",
    height: "16"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "4",
    width: "4",
    height: "16"
  })),
  ArrowR: p => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...p
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 12h16M14 6l6 6-6 6"
  })),
  ArrowD: p => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...p
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 4v16M6 14l6 6 6-6"
  })),
  Plus: p => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    ...p
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14M5 12h14"
  })),
  Close: p => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    ...p
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18"
  })),
  Pin: p => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...p
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 21s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "9",
    r: "2.5"
  })),
  Mail: p => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...p
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "5",
    width: "18",
    height: "14",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 7l9 7 9-7"
  })),
  Phone: p => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...p
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 4h3l2 5-2 1a12 12 0 0 0 6 6l1-2 5 2v3a2 2 0 0 1-2 2A17 17 0 0 1 3 6a2 2 0 0 1 2-2z"
  })),
  Whatsapp: p => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...p
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 21l1.5-4.5A8 8 0 1 1 7.5 19.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 9c0 4 2 6 6 6 1.5-.2 1.5-1.5 1-2l-2-1-1 1c-1 0-2-1-2-2l1-1-1-2c-.5-.5-1.8-.5-2 1z"
  })),
  YT: p => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "currentColor",
    ...p
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21.6 7.2c-.2-.9-.9-1.6-1.8-1.8C18 5 12 5 12 5s-6 0-7.8.4c-.9.2-1.6.9-1.8 1.8C2 9 2 12 2 12s0 3 .4 4.8c.2.9.9 1.6 1.8 1.8C6 19 12 19 12 19s6 0 7.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.8.4-4.8.4-4.8s0-3-.4-4.8zM10 15V9l5 3z"
  })),
  IG: p => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.4",
    ...p
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17.5",
    cy: "6.5",
    r: ".8",
    fill: "currentColor"
  })),
  FB: p => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "currentColor",
    ...p
  }, /*#__PURE__*/React.createElement("path", {
    d: "M14 21v-7h2.4l.4-3H14V9c0-.9.3-1.5 1.5-1.5H17V5c-.3 0-1.5-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.4V11H7v3h3v7h4z"
  })),
  TT: p => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "currentColor",
    ...p
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16 3v3.2a4.7 4.7 0 0 0 4.5 3v3a7.7 7.7 0 0 1-4.5-1.5V16a5.5 5.5 0 1 1-5.5-5.5v3.2A2.5 2.5 0 1 0 13 16V3z"
  })),
  Bible: p => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...p
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 4h12a2 2 0 0 1 2 2v14H7a2 2 0 0 1-2-2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 18a2 2 0 0 1 2-2h12"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 8v6M9 11h6"
  })),
  Bank: p => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...p
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 10l9-6 9 6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 10v8M9 10v8M15 10v8M19 10v8M3 21h18"
  })),
  Wave: p => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    ...p
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 12c2-4 4-4 6 0s4 4 6 0 4-4 6 0"
  })),
  Sparkle: p => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...p
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 3v6M12 15v6M3 12h6M15 12h6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3"
  }))
};
window.I = I;