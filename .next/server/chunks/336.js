"use strict";
exports.id = 336;
exports.ids = [336];
exports.modules = {

/***/ 5591:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* reexport safe */ src_core_components_Form__WEBPACK_IMPORTED_MODULE_2__.Ck),
/* harmony export */   W: () => (/* binding */ PasteForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_core_components_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4425);
/* harmony import */ var src_core_components_LabeledTextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(660);





function PasteForm(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(src_core_components_Form__WEBPACK_IMPORTED_MODULE_2__/* .Form */ .l0, {
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_core_components_LabeledTextField__WEBPACK_IMPORTED_MODULE_3__/* .LabeledTextField */ .I, {
                name: "pasteDescription",
                label: "Paste Description",
                placeholder: "Paste Description",
                type: "text"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_core_components_LabeledTextField__WEBPACK_IMPORTED_MODULE_3__/* .LabeledTextField */ .I, {
                name: "pasteName",
                label: "Paste Name",
                placeholder: "Paste Name",
                type: "text"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_core_components_LabeledTextField__WEBPACK_IMPORTED_MODULE_3__/* .LabeledTextField */ .I, {
                name: "pasteContent",
                label: "Paste Content",
                placeholder: "Paste Content",
                type: "text"
            })
        ]
    });
}


/***/ }),

/***/ 443:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IM: () => (/* binding */ DeletePasteSchema),
/* harmony export */   R7: () => (/* binding */ UpdatePasteSchema),
/* harmony export */   iv: () => (/* binding */ CreatePasteSchema)
/* harmony export */ });
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9926);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zod__WEBPACK_IMPORTED_MODULE_0__]);
zod__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const CreatePasteSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    pasteDescription: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    pasteName: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    pasteContent: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()
});
const UpdatePasteSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    id: zod__WEBPACK_IMPORTED_MODULE_0__.z.number()
});
const DeletePasteSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    id: zod__WEBPACK_IMPORTED_MODULE_0__.z.number()
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;