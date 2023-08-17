"use strict";
exports.id = 113;
exports.ids = [113];
exports.modules = {

/***/ 2945:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var blitz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4405);
/* harmony import */ var blitz__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(blitz__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5481);
/* harmony import */ var _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4278);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9926);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zod__WEBPACK_IMPORTED_MODULE_3__]);
zod__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const GetProject = zod__WEBPACK_IMPORTED_MODULE_3__.z.object({
    // This accepts type of undefined, but is required at runtime
    id: zod__WEBPACK_IMPORTED_MODULE_3__.z.number().optional().refine(Boolean, "Required")
});
const __internal_rpcHandler = _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__.resolver.pipe(_blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__.resolver.zod(GetProject), _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__.resolver.authorize(), async ({ id  })=>{
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const project = await db__WEBPACK_IMPORTED_MODULE_2__["default"].project.findFirst({
        where: {
            id
        }
    });
    if (!project) throw new blitz__WEBPACK_IMPORTED_MODULE_0__.NotFoundError();
    return project;
});
__internal_rpcHandler._resolverName = "getProject";
__internal_rpcHandler._resolverType = "query";
__internal_rpcHandler._routePath = "/api/rpc/getProject";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__internal_rpcHandler);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8709:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Qv: () => (/* binding */ UpdateProjectSchema),
/* harmony export */   RX: () => (/* binding */ CreateProjectSchema),
/* harmony export */   cL: () => (/* binding */ DeleteProjectSchema)
/* harmony export */ });
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9926);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zod__WEBPACK_IMPORTED_MODULE_0__]);
zod__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const CreateProjectSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
});
const UpdateProjectSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    id: zod__WEBPACK_IMPORTED_MODULE_0__.z.number()
});
const DeleteProjectSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    id: zod__WEBPACK_IMPORTED_MODULE_0__.z.number()
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;