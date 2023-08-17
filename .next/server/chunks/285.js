"use strict";
exports.id = 285;
exports.ids = [285];
exports.modules = {

/***/ 6285:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export authenticateUser */
/* harmony import */ var _blitzjs_auth_secure_password__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4888);
/* harmony import */ var _blitzjs_auth_secure_password__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blitzjs_auth_secure_password__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5481);
/* harmony import */ var _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var blitz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4405);
/* harmony import */ var blitz__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(blitz__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4278);
/* harmony import */ var _schemas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5332);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_schemas__WEBPACK_IMPORTED_MODULE_4__]);
_schemas__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const authenticateUser = async (rawEmail, rawPassword)=>{
    const { email , password  } = _schemas__WEBPACK_IMPORTED_MODULE_4__/* .Login */ .m3.parse({
        email: rawEmail,
        password: rawPassword
    });
    const user = await db__WEBPACK_IMPORTED_MODULE_3__["default"].user.findFirst({
        where: {
            email
        }
    });
    if (!user) throw new blitz__WEBPACK_IMPORTED_MODULE_2__.AuthenticationError();
    const result = await _blitzjs_auth_secure_password__WEBPACK_IMPORTED_MODULE_0__.SecurePassword.verify(user.hashedPassword, password);
    if (result === _blitzjs_auth_secure_password__WEBPACK_IMPORTED_MODULE_0__.SecurePassword.VALID_NEEDS_REHASH) {
        // Upgrade hashed password with a more secure hash
        const improvedHash = await _blitzjs_auth_secure_password__WEBPACK_IMPORTED_MODULE_0__.SecurePassword.hash(password);
        await db__WEBPACK_IMPORTED_MODULE_3__["default"].user.update({
            where: {
                id: user.id
            },
            data: {
                hashedPassword: improvedHash
            }
        });
    }
    const { hashedPassword , ...rest } = user;
    return rest;
};
const __internal_rpcHandler = _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__.resolver.pipe(_blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__.resolver.zod(_schemas__WEBPACK_IMPORTED_MODULE_4__/* .Login */ .m3), async ({ email , password  }, ctx)=>{
    // This throws an error if credentials are invalid
    const user = await authenticateUser(email, password);
    await ctx.session.$create({
        userId: user.id,
        role: user.role
    });
    return user;
});
__internal_rpcHandler._resolverName = "login";
__internal_rpcHandler._resolverType = "mutation";
__internal_rpcHandler._routePath = "/api/rpc/login";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__internal_rpcHandler);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5332:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Al: () => (/* binding */ Signup),
/* harmony export */   m3: () => (/* binding */ Login),
/* harmony export */   oP: () => (/* binding */ ForgotPassword),
/* harmony export */   tq: () => (/* binding */ ResetPassword)
/* harmony export */ });
/* unused harmony exports email, password, ChangePassword */
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9926);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zod__WEBPACK_IMPORTED_MODULE_0__]);
zod__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const email = zod__WEBPACK_IMPORTED_MODULE_0__.z.string().email().transform((str)=>str.toLowerCase().trim());
const password = zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(10).max(100).transform((str)=>str.trim());
const Signup = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    email,
    password
});
const Login = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    email,
    password: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()
});
const ForgotPassword = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    email
});
const ResetPassword = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    password: password,
    passwordConfirmation: password,
    token: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()
}).refine((data)=>data.password === data.passwordConfirmation, {
    message: "Passwords don't match",
    path: [
        "passwordConfirmation"
    ]
});
const ChangePassword = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    currentPassword: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    newPassword: password
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;