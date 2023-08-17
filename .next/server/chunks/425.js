"use strict";
exports.id = 425;
exports.ids = [425];
exports.modules = {

/***/ 4425:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ck: () => (/* reexport safe */ final_form__WEBPACK_IMPORTED_MODULE_3__.FORM_ERROR),
/* harmony export */   l0: () => (/* binding */ Form)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2411);
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_final_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var blitz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4405);
/* harmony import */ var blitz__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(blitz__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var final_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2774);
/* harmony import */ var final_form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(final_form__WEBPACK_IMPORTED_MODULE_3__);




function Form({ children , submitText , schema , initialValues , onSubmit , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_final_form__WEBPACK_IMPORTED_MODULE_1__.Form, {
        initialValues: initialValues,
        validate: (0,blitz__WEBPACK_IMPORTED_MODULE_2__.validateZodSchema)(schema),
        onSubmit: onSubmit,
        render: ({ handleSubmit , submitting , submitError  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: handleSubmit,
                className: "form",
                ...props,
                children: [
                    children,
                    submitError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        role: "alert",
                        style: {
                            color: "red"
                        },
                        children: submitError
                    }),
                    submitText && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "submit",
                        disabled: submitting,
                        children: submitText
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("style", {
                        global: true,
                        jsx: true,
                        children: `
            .form > * + * {
              margin-top: 1rem;
            }
          `
                    })
                ]
            })
    });
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Form)));


/***/ })

};
;