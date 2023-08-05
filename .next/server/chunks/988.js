"use strict";
exports.id = 988;
exports.ids = [988];
exports.modules = {

/***/ 660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ LabeledTextField)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2411);
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_final_form__WEBPACK_IMPORTED_MODULE_3__);




const LabeledTextField = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(({ name , label , outerProps , fieldProps , labelProps , ...props }, ref)=>{
    const { input , meta: { touched , error , submitError , submitting  }  } = (0,react_final_form__WEBPACK_IMPORTED_MODULE_3__.useField)(name, {
        parse: props.type === "number" ? Number : (v)=>v === "" ? null : v,
        ...fieldProps
    });
    const normalizedError = Array.isArray(error) ? error.join(", ") : error || submitError;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        ...outerProps,
        className: "jsx-c0f6ad2acae3d953" + " " + (outerProps && outerProps.className != null && outerProps.className || ""),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                ...labelProps,
                className: "jsx-c0f6ad2acae3d953" + " " + (labelProps && labelProps.className != null && labelProps.className || ""),
                children: [
                    label,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        ...input,
                        disabled: submitting,
                        ...props,
                        ref: ref,
                        className: "jsx-c0f6ad2acae3d953" + " " + (props && props.className != null && props.className || input && input.className != null && input.className || "")
                    })
                ]
            }),
            touched && normalizedError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                role: "alert",
                style: {
                    color: "red"
                },
                className: "jsx-c0f6ad2acae3d953",
                children: normalizedError
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "c0f6ad2acae3d953",
                children: "label.jsx-c0f6ad2acae3d953{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:start;-moz-box-align:start;-ms-flex-align:start;align-items:start;font-size:1rem}input.jsx-c0f6ad2acae3d953{font-size:1rem;padding:.25rem .5rem;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;border:1px solid purple;-webkit-appearance:none;-moz-appearance:none;-ms-appearance:none;appearance:none;margin-top:.5rem}"
            })
        ]
    });
});
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (LabeledTextField)));


/***/ })

};
;