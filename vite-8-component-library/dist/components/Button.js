import e from "./Button.module.js";
import { Fragment as t, jsx as n } from "react/jsx-runtime";
function r({ type: r, label: i, onClick: a, className: o }) {
	return /* @__PURE__ */ n(t, { children: /* @__PURE__ */ n("div", {
		className: o,
		children: /* @__PURE__ */ n("button", {
			className: `${e.button} ${e[r]}`,
			onClick: a,
			children: i
		})
	}) });
}
export { r as default };
