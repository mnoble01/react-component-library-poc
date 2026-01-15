import './../components/Button.css';
import { jsx as t, Fragment as l } from "react/jsx-runtime";
import r from "./Button.module.js";
function u({ type: n, label: e, onClick: o, className: i }) {
  return /* @__PURE__ */ t(l, { children: /* @__PURE__ */ t("div", { className: i, children: /* @__PURE__ */ t("button", { className: `${r.button} ${r[n]}`, onClick: o, children: e }) }) });
}
export {
  u as default
};
