import { Fragment, jsx } from "react/jsx-runtime";
import Button_module from "./Button.module.js";
function Button({ type, label, onClick, className }) {
    return /*#__PURE__*/ jsx(Fragment, {
        children: /*#__PURE__*/ jsx("div", {
            className: className,
            children: /*#__PURE__*/ jsx("button", {
                className: `${Button_module.button} ${Button_module[type]}`,
                onClick: onClick,
                children: label
            })
        })
    });
}
export { Button as default };
