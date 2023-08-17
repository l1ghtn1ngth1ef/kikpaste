"use strict";
(() => {
var exports = {};
exports.id = 413;
exports.ids = [413];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 4405:
/***/ ((module) => {

module.exports = require("blitz");

/***/ }),

/***/ 4357:
/***/ ((module) => {

module.exports = require("colors");

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

/***/ 6391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4612);

var colors = __webpack_require__(4357);
const prisma = new db__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
const handler = async (req, res)=>{
    console.log(req.query.webhookId);
    const pasteId = req.query.webhookId;
    switch(req.method){
        case "GET":
            res.setHeader("Content-Type", "application/json");
            //res.status(200).json({ Status: '🚀Ok! Get Method Staged!🔥' })
            try {
                const api = await prisma.paste.findUnique({
                    where: {
                        id: Number(pasteId)
                    }
                });
                res.end(JSON.stringify({
                    api
                }, null, 2));
            } catch (err) {
                res.status(500).send({
                    error: "Nuked! : failed to fetch data"
                });
            }
            break;
        case "POST":
            res.setHeader("Content-Type", "application/json");
            res.status(201).json({
                Status: "\uD83D\uDE80Ok! Post Method Staged!\uD83D\uDD25"
            });
            break;
        case "PATCH":
            res.setHeader("Content-Type", "application/json");
            res.status(200).json({
                Status: "\uD83D\uDE80Ok! PATCH Method Staged!\uD83D\uDD25"
            });
            break;
        case "PUT":
            res.setHeader("Content-Type", "application/json");
            res.status(200).json({
                Status: "\uD83D\uDE80Ok! PUT Method Staged!\uD83D\uDD25"
            });
            break;
        case "DELETE":
            res.setHeader("Content-Type", "application/json");
            res.status(200).json({
                Status: "\uD83D\uDE80Ok! DELETE Method Staged!\uD83D\uDD25"
            });
            break;
        case "OPTIONS":
            res.setHeader("Content-Type", "application/json");
            res.status(200).json({
                Status: "\uD83D\uDE80Ok! OPTIONS Method Staged!\uD83D\uDD25"
            });
            break;
        case "HEAD":
            res.setHeader("Content-Type", "application/json");
            res.status(200).json({
                Status: "\uD83D\uDE80Ok! HEAD Method Staged!\uD83D\uDD25"
            });
            break;
        case "PROPFIND":
            res.setHeader("Content-Type", "application/json");
            res.status(200).json({
                Status: "\uD83D\uDE80Ok! PROPFIND Method Staged!\uD83D\uDD25"
            });
            break;
        case "CUSTOM":
            res.setHeader("Content-Type", "application/json");
            res.status(200).json({
                Status: "\uD83D\uDE80Ok! CUSTOM Method Staged!\uD83D\uDD25"
            });
            break;
        default:
            res.status(405).end(`${req.method} Currently Not Allowed! 🧨💣🔥 `);
            break;
    }
    console.log("\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25 Lit up! Server's Getting Hit! \uD83D\uDD25\uD83D\uDD25\uD83D\uDD25");
/*
    const pasteId = req.query.webhookId;
   
    if (req.method === "GET") {
  
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json")
  
      try {
  
        const data = await prisma.paste.findUnique({ where: { id: Number(pasteId) } });
        res.end(JSON.stringify({ data }))
  
      } catch (err) {
        res.status(500).send({ error: 'Nuked! : failed to fetch data' })
      }
  
      console.log("Testing!")
    } */ };
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6391));
module.exports = __webpack_exports__;

})();