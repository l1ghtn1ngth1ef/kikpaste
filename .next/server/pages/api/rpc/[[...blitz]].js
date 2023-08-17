"use strict";
(() => {
var exports = {};
exports.id = 99;
exports.ids = [99];
exports.modules = {

/***/ 7897:
/***/ ((module) => {

module.exports = require("@blitzjs/auth");

/***/ }),

/***/ 4888:
/***/ ((module) => {

module.exports = require("@blitzjs/auth/secure-password");

/***/ }),

/***/ 5481:
/***/ ((module) => {

module.exports = require("@blitzjs/rpc");

/***/ }),

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 4405:
/***/ ((module) => {

module.exports = require("blitz");

/***/ }),

/***/ 7318:
/***/ ((module) => {

module.exports = require("hoist-non-react-statics");

/***/ }),

/***/ 982:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 72:
/***/ ((module) => {

module.exports = require("superjson");

/***/ }),

/***/ 6044:
/***/ ((module) => {

module.exports = require("supports-color");

/***/ }),

/***/ 6464:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 9926:
/***/ ((module) => {

module.exports = import("zod");;

/***/ }),

/***/ 6224:
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ 4612:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var blitz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4405);
/* harmony import */ var blitz__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(blitz__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3524);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_prisma_client__WEBPACK_IMPORTED_MODULE_1__, "PrismaClient")) __webpack_require__.d(__webpack_exports__, { PrismaClient: function() { return _prisma_client__WEBPACK_IMPORTED_MODULE_1__.PrismaClient; } });


const EnhancedPrisma = (0,blitz__WEBPACK_IMPORTED_MODULE_0__.enhancePrisma)(_prisma_client__WEBPACK_IMPORTED_MODULE_1__.PrismaClient);

const db = new EnhancedPrisma();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);


/***/ }),

/***/ 5531:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ forgotPasswordMailer)
/* harmony export */ });
/* TODO - You need to add a mailer integration in `integrations/` and import here.
 *
 * The integration file can be very simple. Instantiate the email client
 * and then export it. That way you can import here and anywhere else
 * and use it straight away.
 */ function forgotPasswordMailer({ to , token  }) {
    // In production, set APP_ORIGIN to your production server origin
    const origin = process.env.APP_ORIGIN || process.env.BLITZ_DEV_SERVER_ORIGIN;
    const resetUrl = `${origin}/auth/reset-password?token=${token}`;
    const msg = {
        from: "TODO@example.com",
        to,
        subject: "Your Password Reset Instructions",
        html: `
      <h1>Reset Your Password</h1>
      <h3>NOTE: You must set up a production email integration in mailers/forgotPasswordMailer.ts</h3>

      <a href="${resetUrl}">
        Click here to set a new password
      </a>
    `
    };
    return {
        async send () {
            if (true) {
                // TODO - send the production email, like this:
                // await postmark.sendEmail(msg)
                throw new Error("No production email implementation in mailers/forgotPasswordMailer");
            } else {}
        }
    };
}


/***/ }),

/***/ 4998:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var blitz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4405);
/* harmony import */ var blitz__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(blitz__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5481);
/* harmony import */ var _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blitzjs_auth_secure_password__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4888);
/* harmony import */ var _blitzjs_auth_secure_password__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_blitzjs_auth_secure_password__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4612);
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4513);
/* harmony import */ var _schemas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8914);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_login__WEBPACK_IMPORTED_MODULE_4__, _schemas__WEBPACK_IMPORTED_MODULE_5__]);
([_login__WEBPACK_IMPORTED_MODULE_4__, _schemas__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const __internal_rpcHandler = _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__.resolver.pipe(_blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__.resolver.zod(_schemas__WEBPACK_IMPORTED_MODULE_5__/* .ChangePassword */ .GR), _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__.resolver.authorize(), async ({ currentPassword , newPassword  }, ctx)=>{
    const user = await db__WEBPACK_IMPORTED_MODULE_3__["default"].user.findFirst({
        where: {
            id: ctx.session.userId
        }
    });
    if (!user) throw new blitz__WEBPACK_IMPORTED_MODULE_0__.NotFoundError();
    try {
        await (0,_login__WEBPACK_IMPORTED_MODULE_4__.authenticateUser)(user.email, currentPassword);
    } catch (error) {
        if (error instanceof blitz__WEBPACK_IMPORTED_MODULE_0__.AuthenticationError) {
            throw new Error("Invalid Password");
        }
        throw error;
    }
    const hashedPassword = await _blitzjs_auth_secure_password__WEBPACK_IMPORTED_MODULE_2__.SecurePassword.hash(newPassword.trim());
    await db__WEBPACK_IMPORTED_MODULE_3__["default"].user.update({
        where: {
            id: user.id
        },
        data: {
            hashedPassword
        }
    });
    return true;
});
__internal_rpcHandler._resolverName = "changePassword";
__internal_rpcHandler._resolverType = "mutation";
__internal_rpcHandler._routePath = "/api/rpc/changePassword";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__internal_rpcHandler);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6424:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _blitzjs_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7897);
/* harmony import */ var _blitzjs_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blitzjs_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5481);
/* harmony import */ var _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4612);
/* harmony import */ var mailers_forgotPasswordMailer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5531);
/* harmony import */ var _schemas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8914);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_schemas__WEBPACK_IMPORTED_MODULE_3__]);
_schemas__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const RESET_PASSWORD_TOKEN_EXPIRATION_IN_HOURS = 4;
const __internal_rpcHandler = _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__.resolver.pipe(_blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__.resolver.zod(_schemas__WEBPACK_IMPORTED_MODULE_3__/* .ForgotPassword */ .oP), async ({ email  })=>{
    // 1. Get the user
    const user = await db__WEBPACK_IMPORTED_MODULE_2__["default"].user.findFirst({
        where: {
            email: email.toLowerCase()
        }
    });
    // 2. Generate the token and expiration date.
    const token = (0,_blitzjs_auth__WEBPACK_IMPORTED_MODULE_0__.generateToken)();
    const hashedToken = (0,_blitzjs_auth__WEBPACK_IMPORTED_MODULE_0__.hash256)(token);
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + RESET_PASSWORD_TOKEN_EXPIRATION_IN_HOURS);
    // 3. If user with this email was found
    if (user) {
        // 4. Delete any existing password reset tokens
        await db__WEBPACK_IMPORTED_MODULE_2__["default"].token.deleteMany({
            where: {
                type: "RESET_PASSWORD",
                userId: user.id
            }
        });
        // 5. Save this new token in the database.
        await db__WEBPACK_IMPORTED_MODULE_2__["default"].token.create({
            data: {
                user: {
                    connect: {
                        id: user.id
                    }
                },
                type: "RESET_PASSWORD",
                expiresAt,
                hashedToken,
                sentTo: user.email
            }
        });
        // 6. Send the email
        await (0,mailers_forgotPasswordMailer__WEBPACK_IMPORTED_MODULE_4__/* .forgotPasswordMailer */ .f)({
            to: user.email,
            token
        }).send();
    } else {
        // 7. If no user found wait the same time so attackers can't tell the difference
        await new Promise((resolve)=>setTimeout(resolve, 750));
    }
    // 8. Return the same result whether a password reset email was sent or not
    return;
});
__internal_rpcHandler._resolverName = "forgotPassword";
__internal_rpcHandler._resolverType = "mutation";
__internal_rpcHandler._routePath = "/api/rpc/forgotPassword";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__internal_rpcHandler);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4513:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authenticateUser: () => (/* binding */ authenticateUser),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _blitzjs_auth_secure_password__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4888);
/* harmony import */ var _blitzjs_auth_secure_password__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blitzjs_auth_secure_password__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5481);
/* harmony import */ var _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var blitz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4405);
/* harmony import */ var blitz__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(blitz__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4612);
/* harmony import */ var _schemas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8914);
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

/***/ 3645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const __internal_rpcHandler = async function logout(_, ctx) {
    return await ctx.session.$revoke();
};
__internal_rpcHandler._resolverName = "logout";
__internal_rpcHandler._resolverType = "mutation";
__internal_rpcHandler._routePath = "/api/rpc/logout";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__internal_rpcHandler);


/***/ }),

/***/ 7836:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResetPasswordError: () => (/* binding */ ResetPasswordError),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _blitzjs_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7897);
/* harmony import */ var _blitzjs_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blitzjs_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blitzjs_auth_secure_password__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4888);
/* harmony import */ var _blitzjs_auth_secure_password__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blitzjs_auth_secure_password__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5481);
/* harmony import */ var _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_blitzjs_rpc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4612);
/* harmony import */ var _schemas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8914);
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4513);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_schemas__WEBPACK_IMPORTED_MODULE_4__, _login__WEBPACK_IMPORTED_MODULE_5__]);
([_schemas__WEBPACK_IMPORTED_MODULE_4__, _login__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






class ResetPasswordError extends Error {
    constructor(...args){
        super(...args);
        this.name = "ResetPasswordError";
        this.message = "Reset password link is invalid or it has expired.";
    }
}
const __internal_rpcHandler = _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_2__.resolver.pipe(_blitzjs_rpc__WEBPACK_IMPORTED_MODULE_2__.resolver.zod(_schemas__WEBPACK_IMPORTED_MODULE_4__/* .ResetPassword */ .tq), async ({ password , token  }, ctx)=>{
    // 1. Try to find this token in the database
    const hashedToken = (0,_blitzjs_auth__WEBPACK_IMPORTED_MODULE_0__.hash256)(token);
    const possibleToken = await db__WEBPACK_IMPORTED_MODULE_3__["default"].token.findFirst({
        where: {
            hashedToken,
            type: "RESET_PASSWORD"
        },
        include: {
            user: true
        }
    });
    // 2. If token not found, error
    if (!possibleToken) {
        throw new ResetPasswordError();
    }
    const savedToken = possibleToken;
    // 3. Delete token so it can't be used again
    await db__WEBPACK_IMPORTED_MODULE_3__["default"].token.delete({
        where: {
            id: savedToken.id
        }
    });
    // 4. If token has expired, error
    if (savedToken.expiresAt < new Date()) {
        throw new ResetPasswordError();
    }
    // 5. Since token is valid, now we can update the user's password
    const hashedPassword = await _blitzjs_auth_secure_password__WEBPACK_IMPORTED_MODULE_1__.SecurePassword.hash(password.trim());
    const user = await db__WEBPACK_IMPORTED_MODULE_3__["default"].user.update({
        where: {
            id: savedToken.userId
        },
        data: {
            hashedPassword
        }
    });
    // 6. Revoke all existing login sessions for this user
    await db__WEBPACK_IMPORTED_MODULE_3__["default"].session.deleteMany({
        where: {
            userId: user.id
        }
    });
    // 7. Now log the user in with the new credentials
    await (0,_login__WEBPACK_IMPORTED_MODULE_5__["default"])({
        email: user.email,
        password
    }, ctx);
    return true;
});
__internal_rpcHandler._resolverName = "resetPassword";
__internal_rpcHandler._resolverType = "mutation";
__internal_rpcHandler._routePath = "/api/rpc/resetPassword";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__internal_rpcHandler);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5209:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _blitzjs_auth_secure_password__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4888);
/* harmony import */ var _blitzjs_auth_secure_password__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blitzjs_auth_secure_password__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5481);
/* harmony import */ var _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4612);
/* harmony import */ var _schemas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8914);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_schemas__WEBPACK_IMPORTED_MODULE_3__]);
_schemas__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const __internal_rpcHandler = _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__.resolver.pipe(_blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__.resolver.zod(_schemas__WEBPACK_IMPORTED_MODULE_3__/* .Signup */ .Al), async ({ email , password  }, ctx)=>{
    const hashedPassword = await _blitzjs_auth_secure_password__WEBPACK_IMPORTED_MODULE_0__.SecurePassword.hash(password.trim());
    const user = await db__WEBPACK_IMPORTED_MODULE_2__["default"].user.create({
        data: {
            email: email.toLowerCase().trim(),
            hashedPassword,
            role: "USER"
        },
        select: {
            id: true,
            name: true,
            email: true,
            role: true
        }
    });
    await ctx.session.$create({
        userId: user.id,
        role: user.role
    });
    return user;
});
__internal_rpcHandler._resolverName = "signup";
__internal_rpcHandler._resolverType = "mutation";
__internal_rpcHandler._routePath = "/api/rpc/signup";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__internal_rpcHandler);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6052:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5481);
/* harmony import */ var _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blitzjs_rpc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4612);
/* harmony import */ var _schemas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8578);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_schemas__WEBPACK_IMPORTED_MODULE_2__]);
_schemas__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const __internal_rpcHandler = _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_0__.resolver.pipe(_blitzjs_rpc__WEBPACK_IMPORTED_MODULE_0__.resolver.zod(_schemas__WEBPACK_IMPORTED_MODULE_2__/* .CreatePastebackupSchema */ .ee), _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_0__.resolver.authorize(), async (input)=>{
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const pastebackup = await db__WEBPACK_IMPORTED_MODULE_1__["default"].pastebackup.create({
        data: input
    });
    return pastebackup;
});
__internal_rpcHandler._resolverName = "createPastebackup";
__internal_rpcHandler._resolverType = "mutation";
__internal_rpcHandler._routePath = "/api/rpc/createPastebackup";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__internal_rpcHandler);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1001:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5481);
/* harmony import */ var _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blitzjs_rpc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4612);
/* harmony import */ var _schemas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8578);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_schemas__WEBPACK_IMPORTED_MODULE_2__]);
_schemas__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const __internal_rpcHandler = _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_0__.resolver.pipe(_blitzjs_rpc__WEBPACK_IMPORTED_MODULE_0__.resolver.zod(_schemas__WEBPACK_IMPORTED_MODULE_2__/* .DeletePastebackupSchema */ .Dh), _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_0__.resolver.authorize(), async ({ id  })=>{
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const pastebackup = await db__WEBPACK_IMPORTED_MODULE_1__["default"].pastebackup.deleteMany({
        where: {
            id
        }
    });
    return pastebackup;
});
__internal_rpcHandler._resolverName = "deletePastebackup";
__internal_rpcHandler._resolverType = "mutation";
__internal_rpcHandler._routePath = "/api/rpc/deletePastebackup";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__internal_rpcHandler);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1244:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5481);
/* harmony import */ var _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blitzjs_rpc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4612);
/* harmony import */ var _schemas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8578);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_schemas__WEBPACK_IMPORTED_MODULE_2__]);
_schemas__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const __internal_rpcHandler = _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_0__.resolver.pipe(_blitzjs_rpc__WEBPACK_IMPORTED_MODULE_0__.resolver.zod(_schemas__WEBPACK_IMPORTED_MODULE_2__/* .UpdatePastebackupSchema */ .Qd), _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_0__.resolver.authorize(), async ({ id , ...data })=>{
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const pastebackup = await db__WEBPACK_IMPORTED_MODULE_1__["default"].pastebackup.update({
        where: {
            id
        },
        data
    });
    return pastebackup;
});
__internal_rpcHandler._resolverName = "updatePastebackup";
__internal_rpcHandler._resolverType = "mutation";
__internal_rpcHandler._routePath = "/api/rpc/updatePastebackup";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__internal_rpcHandler);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8827:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var blitz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4405);
/* harmony import */ var blitz__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(blitz__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5481);
/* harmony import */ var _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4612);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9926);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zod__WEBPACK_IMPORTED_MODULE_3__]);
zod__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const GetPastebackup = zod__WEBPACK_IMPORTED_MODULE_3__.z.object({
    // This accepts type of undefined, but is required at runtime
    id: zod__WEBPACK_IMPORTED_MODULE_3__.z.number().optional().refine(Boolean, "Required")
});
const __internal_rpcHandler = _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__.resolver.pipe(_blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__.resolver.zod(GetPastebackup), _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__.resolver.authorize(), async ({ id  })=>{
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const pastebackup = await db__WEBPACK_IMPORTED_MODULE_2__["default"].pastebackup.findFirst({
        where: {
            id
        }
    });
    if (!pastebackup) throw new blitz__WEBPACK_IMPORTED_MODULE_0__.NotFoundError();
    return pastebackup;
});
__internal_rpcHandler._resolverName = "getPastebackup";
__internal_rpcHandler._resolverType = "query";
__internal_rpcHandler._routePath = "/api/rpc/getPastebackup";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__internal_rpcHandler);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var blitz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4405);
/* harmony import */ var blitz__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(blitz__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5481);
/* harmony import */ var _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4612);



const __internal_rpcHandler = _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__.resolver.pipe(_blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__.resolver.authorize(), async ({ where , orderBy , skip =0 , take =100  })=>{
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const { items: pastebackups , hasMore , nextPage , count  } = await (0,blitz__WEBPACK_IMPORTED_MODULE_0__.paginate)({
        skip,
        take,
        count: ()=>db__WEBPACK_IMPORTED_MODULE_2__["default"].pastebackup.count({
                where
            }),
        query: (paginateArgs)=>db__WEBPACK_IMPORTED_MODULE_2__["default"].pastebackup.findMany({
                ...paginateArgs,
                where,
                orderBy
            })
    });
    return {
        pastebackups,
        nextPage,
        hasMore,
        count
    };
});
__internal_rpcHandler._resolverName = "getPastebackups";
__internal_rpcHandler._resolverType = "query";
__internal_rpcHandler._routePath = "/api/rpc/getPastebackups";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__internal_rpcHandler);


/***/ }),

/***/ 526:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5481);
/* harmony import */ var _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blitzjs_rpc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4612);
/* harmony import */ var _schemas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6988);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_schemas__WEBPACK_IMPORTED_MODULE_2__]);
_schemas__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const __internal_rpcHandler = _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_0__.resolver.pipe(_blitzjs_rpc__WEBPACK_IMPORTED_MODULE_0__.resolver.zod(_schemas__WEBPACK_IMPORTED_MODULE_2__/* .CreatePasteSchema */ .iv), _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_0__.resolver.authorize(), async (input)=>{
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const paste = await db__WEBPACK_IMPORTED_MODULE_1__["default"].paste.create({
        data: input
    });
    return paste;
});
__internal_rpcHandler._resolverName = "createPaste";
__internal_rpcHandler._resolverType = "mutation";
__internal_rpcHandler._routePath = "/api/rpc/createPaste";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__internal_rpcHandler);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4499:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5481);
/* harmony import */ var _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blitzjs_rpc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4612);
/* harmony import */ var _schemas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6988);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_schemas__WEBPACK_IMPORTED_MODULE_2__]);
_schemas__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const __internal_rpcHandler = _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_0__.resolver.pipe(_blitzjs_rpc__WEBPACK_IMPORTED_MODULE_0__.resolver.zod(_schemas__WEBPACK_IMPORTED_MODULE_2__/* .DeletePasteSchema */ .IM), _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_0__.resolver.authorize(), async ({ id  })=>{
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const paste = await db__WEBPACK_IMPORTED_MODULE_1__["default"].paste.deleteMany({
        where: {
            id
        }
    });
    return paste;
});
__internal_rpcHandler._resolverName = "deletePaste";
__internal_rpcHandler._resolverType = "mutation";
__internal_rpcHandler._routePath = "/api/rpc/deletePaste";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__internal_rpcHandler);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1223:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5481);
/* harmony import */ var _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blitzjs_rpc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4612);
/* harmony import */ var _schemas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6988);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_schemas__WEBPACK_IMPORTED_MODULE_2__]);
_schemas__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const __internal_rpcHandler = _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_0__.resolver.pipe(_blitzjs_rpc__WEBPACK_IMPORTED_MODULE_0__.resolver.zod(_schemas__WEBPACK_IMPORTED_MODULE_2__/* .UpdatePasteSchema */ .R7), _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_0__.resolver.authorize(), async ({ id , ...data })=>{
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const paste = await db__WEBPACK_IMPORTED_MODULE_1__["default"].paste.update({
        where: {
            id
        },
        data
    });
    return paste;
});
__internal_rpcHandler._resolverName = "updatePaste";
__internal_rpcHandler._resolverType = "mutation";
__internal_rpcHandler._routePath = "/api/rpc/updatePaste";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__internal_rpcHandler);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 286:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var blitz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4405);
/* harmony import */ var blitz__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(blitz__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5481);
/* harmony import */ var _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4612);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9926);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zod__WEBPACK_IMPORTED_MODULE_3__]);
zod__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const GetPaste = zod__WEBPACK_IMPORTED_MODULE_3__.z.object({
    // This accepts type of undefined, but is required at runtime
    id: zod__WEBPACK_IMPORTED_MODULE_3__.z.number().optional().refine(Boolean, "Required")
});
const __internal_rpcHandler = _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__.resolver.pipe(_blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__.resolver.zod(GetPaste), _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__.resolver.authorize(), async ({ id  })=>{
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const paste = await db__WEBPACK_IMPORTED_MODULE_2__["default"].paste.findFirst({
        where: {
            id
        }
    });
    if (!paste) throw new blitz__WEBPACK_IMPORTED_MODULE_0__.NotFoundError();
    return paste;
});
__internal_rpcHandler._resolverName = "getPaste";
__internal_rpcHandler._resolverType = "query";
__internal_rpcHandler._routePath = "/api/rpc/getPaste";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__internal_rpcHandler);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9138:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var blitz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4405);
/* harmony import */ var blitz__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(blitz__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5481);
/* harmony import */ var _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4612);



const __internal_rpcHandler = _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__.resolver.pipe(_blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__.resolver.authorize(), async ({ where , orderBy , skip =0 , take =100  })=>{
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const { items: pastes , hasMore , nextPage , count  } = await (0,blitz__WEBPACK_IMPORTED_MODULE_0__.paginate)({
        skip,
        take,
        count: ()=>db__WEBPACK_IMPORTED_MODULE_2__["default"].paste.count({
                where
            }),
        query: (paginateArgs)=>db__WEBPACK_IMPORTED_MODULE_2__["default"].paste.findMany({
                ...paginateArgs,
                where,
                orderBy
            })
    });
    return {
        pastes,
        nextPage,
        hasMore,
        count
    };
});
__internal_rpcHandler._resolverName = "getPastes";
__internal_rpcHandler._resolverType = "query";
__internal_rpcHandler._routePath = "/api/rpc/getPastes";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__internal_rpcHandler);


/***/ }),

/***/ 3661:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5481);
/* harmony import */ var _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blitzjs_rpc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4612);
/* harmony import */ var _schemas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3758);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_schemas__WEBPACK_IMPORTED_MODULE_2__]);
_schemas__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const __internal_rpcHandler = _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_0__.resolver.pipe(_blitzjs_rpc__WEBPACK_IMPORTED_MODULE_0__.resolver.zod(_schemas__WEBPACK_IMPORTED_MODULE_2__/* .CreateProjectSchema */ .RX), _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_0__.resolver.authorize(), async (input)=>{
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const project = await db__WEBPACK_IMPORTED_MODULE_1__["default"].project.create({
        data: input
    });
    return project;
});
__internal_rpcHandler._resolverName = "createProject";
__internal_rpcHandler._resolverType = "mutation";
__internal_rpcHandler._routePath = "/api/rpc/createProject";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__internal_rpcHandler);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9305:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5481);
/* harmony import */ var _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blitzjs_rpc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4612);
/* harmony import */ var _schemas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3758);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_schemas__WEBPACK_IMPORTED_MODULE_2__]);
_schemas__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const __internal_rpcHandler = _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_0__.resolver.pipe(_blitzjs_rpc__WEBPACK_IMPORTED_MODULE_0__.resolver.zod(_schemas__WEBPACK_IMPORTED_MODULE_2__/* .DeleteProjectSchema */ .cL), _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_0__.resolver.authorize(), async ({ id  })=>{
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const project = await db__WEBPACK_IMPORTED_MODULE_1__["default"].project.deleteMany({
        where: {
            id
        }
    });
    return project;
});
__internal_rpcHandler._resolverName = "deleteProject";
__internal_rpcHandler._resolverType = "mutation";
__internal_rpcHandler._routePath = "/api/rpc/deleteProject";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__internal_rpcHandler);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7823:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5481);
/* harmony import */ var _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blitzjs_rpc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4612);
/* harmony import */ var _schemas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3758);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_schemas__WEBPACK_IMPORTED_MODULE_2__]);
_schemas__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const __internal_rpcHandler = _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_0__.resolver.pipe(_blitzjs_rpc__WEBPACK_IMPORTED_MODULE_0__.resolver.zod(_schemas__WEBPACK_IMPORTED_MODULE_2__/* .UpdateProjectSchema */ .Qv), _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_0__.resolver.authorize(), async ({ id , ...data })=>{
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const project = await db__WEBPACK_IMPORTED_MODULE_1__["default"].project.update({
        where: {
            id
        },
        data
    });
    return project;
});
__internal_rpcHandler._resolverName = "updateProject";
__internal_rpcHandler._resolverType = "mutation";
__internal_rpcHandler._routePath = "/api/rpc/updateProject";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__internal_rpcHandler);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7680:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var blitz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4405);
/* harmony import */ var blitz__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(blitz__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5481);
/* harmony import */ var _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4612);
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

/***/ 4810:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var blitz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4405);
/* harmony import */ var blitz__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(blitz__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5481);
/* harmony import */ var _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4612);



const __internal_rpcHandler = _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__.resolver.pipe(_blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__.resolver.authorize(), async ({ where , orderBy , skip =0 , take =100  })=>{
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const { items: projects , hasMore , nextPage , count  } = await (0,blitz__WEBPACK_IMPORTED_MODULE_0__.paginate)({
        skip,
        take,
        count: ()=>db__WEBPACK_IMPORTED_MODULE_2__["default"].project.count({
                where
            }),
        query: (paginateArgs)=>db__WEBPACK_IMPORTED_MODULE_2__["default"].project.findMany({
                ...paginateArgs,
                where,
                orderBy
            })
    });
    return {
        projects,
        nextPage,
        hasMore,
        count
    };
});
__internal_rpcHandler._resolverName = "getProjects";
__internal_rpcHandler._resolverType = "query";
__internal_rpcHandler._routePath = "/api/rpc/getProjects";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__internal_rpcHandler);


/***/ }),

/***/ 7962:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4612);

const __internal_rpcHandler = async function getCurrentUser(_ = null, { session  }) {
    if (!session.userId) return null;
    const user = await db__WEBPACK_IMPORTED_MODULE_0__["default"].user.findFirst({
        where: {
            id: session.userId
        },
        select: {
            id: true,
            name: true,
            email: true,
            role: true
        }
    });
    return user;
};
__internal_rpcHandler._resolverName = "getCurrentUser";
__internal_rpcHandler._resolverType = "query";
__internal_rpcHandler._routePath = "/api/rpc/getCurrentUser";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__internal_rpcHandler);


/***/ }),

/***/ 8276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _blitz_)
});

// EXTERNAL MODULE: external "@blitzjs/rpc"
var rpc_ = __webpack_require__(5481);
// EXTERNAL MODULE: ./node_modules/@blitzjs/next/dist/index-server.cjs
var index_server = __webpack_require__(3407);
// EXTERNAL MODULE: external "@blitzjs/auth"
var auth_ = __webpack_require__(7897);
// EXTERNAL MODULE: external "blitz"
var external_blitz_ = __webpack_require__(4405);
// EXTERNAL MODULE: ./db/index.ts
var db = __webpack_require__(4612);
;// CONCATENATED MODULE: ./src/blitz-client.ts



const authConfig = {
    cookiePrefix: "blitz"
};
const { withBlitz  } = (0,index_server/* setupBlitzClient */.qd)({
    plugins: [
        (0,auth_.AuthClientPlugin)(authConfig),
        (0,rpc_.BlitzRpcPlugin)({})
    ]
});

;// CONCATENATED MODULE: ./src/blitz-server.ts






const { gSSP , gSP , api  } = (0,index_server/* setupBlitzServer */.te)({
    plugins: [
        (0,auth_.AuthServerPlugin)({
            ...authConfig,
            storage: (0,auth_.PrismaStorage)(db["default"]),
            isAuthorized: auth_.simpleRolesIsAuthorized
        })
    ],
    logger: (0,external_blitz_.BlitzLogger)({})
});

;// CONCATENATED MODULE: ./src/pages/api/rpc/[[...blitz]].ts



/* harmony default export */ const _blitz_ = (api((0,rpc_.rpcHandler)({
    onError: console.log
})));
(0,rpc_.__internal_addBlitzRpcResolver)("/changePassword", ()=>__webpack_require__(4998));
(0,rpc_.__internal_addBlitzRpcResolver)("/forgotPassword", ()=>__webpack_require__(6424));
(0,rpc_.__internal_addBlitzRpcResolver)("/login", ()=>__webpack_require__(4513));
(0,rpc_.__internal_addBlitzRpcResolver)("/logout", ()=>__webpack_require__(3645));
(0,rpc_.__internal_addBlitzRpcResolver)("/resetPassword", ()=>__webpack_require__(7836));
(0,rpc_.__internal_addBlitzRpcResolver)("/signup", ()=>__webpack_require__(5209));
(0,rpc_.__internal_addBlitzRpcResolver)("/createPastebackup", ()=>__webpack_require__(6052));
(0,rpc_.__internal_addBlitzRpcResolver)("/deletePastebackup", ()=>__webpack_require__(1001));
(0,rpc_.__internal_addBlitzRpcResolver)("/updatePastebackup", ()=>__webpack_require__(1244));
(0,rpc_.__internal_addBlitzRpcResolver)("/getPastebackup", ()=>__webpack_require__(8827));
(0,rpc_.__internal_addBlitzRpcResolver)("/getPastebackups", ()=>__webpack_require__(5351));
(0,rpc_.__internal_addBlitzRpcResolver)("/createPaste", ()=>__webpack_require__(526));
(0,rpc_.__internal_addBlitzRpcResolver)("/deletePaste", ()=>__webpack_require__(4499));
(0,rpc_.__internal_addBlitzRpcResolver)("/updatePaste", ()=>__webpack_require__(1223));
(0,rpc_.__internal_addBlitzRpcResolver)("/getPaste", ()=>__webpack_require__(286));
(0,rpc_.__internal_addBlitzRpcResolver)("/getPastes", ()=>__webpack_require__(9138));
(0,rpc_.__internal_addBlitzRpcResolver)("/createProject", ()=>__webpack_require__(3661));
(0,rpc_.__internal_addBlitzRpcResolver)("/deleteProject", ()=>__webpack_require__(9305));
(0,rpc_.__internal_addBlitzRpcResolver)("/updateProject", ()=>__webpack_require__(7823));
(0,rpc_.__internal_addBlitzRpcResolver)("/getProject", ()=>__webpack_require__(7680));
(0,rpc_.__internal_addBlitzRpcResolver)("/getProjects", ()=>__webpack_require__(4810));
(0,rpc_.__internal_addBlitzRpcResolver)("/getCurrentUser", ()=>__webpack_require__(7962));


/***/ }),

/***/ 8914:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Al: () => (/* binding */ Signup),
/* harmony export */   GR: () => (/* binding */ ChangePassword),
/* harmony export */   m3: () => (/* binding */ Login),
/* harmony export */   oP: () => (/* binding */ ForgotPassword),
/* harmony export */   tq: () => (/* binding */ ResetPassword)
/* harmony export */ });
/* unused harmony exports email, password */
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

/***/ }),

/***/ 8578:
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

/***/ }),

/***/ 6988:
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

/***/ }),

/***/ 3758:
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

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [407], () => (__webpack_exec__(8276)));
module.exports = __webpack_exports__;

})();