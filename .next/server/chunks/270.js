"use strict";
exports.id = 270;
exports.ids = [270];
exports.modules = {

/***/ 2270:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dh: () => (/* binding */ DeletePastebackupSchema),
/* harmony export */   Qd: () => (/* binding */ UpdatePastebackupSchema),
/* harmony export */   ee: () => (/* binding */ CreatePastebackupSchema)
/* harmony export */ });
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9926);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zod__WEBPACK_IMPORTED_MODULE_0__]);
zod__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// @ts-nocheck

const CreatePastebackupSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    string: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    string: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    dataName: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    dataDesc: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    dataContent: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()
});
const UpdatePastebackupSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    id: zod__WEBPACK_IMPORTED_MODULE_0__.z.number()
});
const DeletePastebackupSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    id: zod__WEBPACK_IMPORTED_MODULE_0__.z.number()
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;