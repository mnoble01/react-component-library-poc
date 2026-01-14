import { j as t } from "./jsx-runtime-CG-hOSXf.js";
const e = "#ccd4d7", a = "#53baea", i = "#dd3352", d = "_button_7ql0h_5", _ = "_primary_7ql0h_9", u = "_secondary_7ql0h_14", l = "_tertiary_7ql0h_19", h = "_destructive_7ql0h_24", n = {
  aji300: e,
  brand500: a,
  covincho500: i,
  button: d,
  primary: _,
  secondary: u,
  tertiary: l,
  destructive: h
};
function b({ type: r, label: o, onClick: c, className: s }) {
  return /* @__PURE__ */ t.jsx(t.Fragment, { children: /* @__PURE__ */ t.jsx("div", { className: s, children: /* @__PURE__ */ t.jsx("button", { className: `${n.button} ${n[r]}`, onClick: c, children: o }) }) });
}
export {
  b as default
};
