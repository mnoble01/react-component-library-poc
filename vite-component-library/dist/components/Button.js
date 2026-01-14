import { jsx as t, Fragment as s } from "react/jsx-runtime";
const a = "#ccd4d7", i = "#53baea", d = "#dd3352", _ = "_button_7ql0h_5", u = "_primary_7ql0h_9", l = "_secondary_7ql0h_14", h = "_tertiary_7ql0h_19", y = "_destructive_7ql0h_24", n = {
  aji300: a,
  brand500: i,
  covincho500: d,
  button: _,
  primary: u,
  secondary: l,
  tertiary: h,
  destructive: y
};
function m({ type: r, label: c, onClick: o, className: e }) {
  return /* @__PURE__ */ t(s, { children: /* @__PURE__ */ t("div", { className: e, children: /* @__PURE__ */ t("button", { className: `${n.button} ${n[r]}`, onClick: o, children: c }) }) });
}
export {
  m as default
};
