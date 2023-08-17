(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7291:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2F_app_absolutePagePath_private_next_pages_2F_app_tsx_preferredRegion_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./src/pages/_app.tsx
var _app_namespaceObject = {};
__webpack_require__.r(_app_namespaceObject);
__webpack_require__.d(_app_namespaceObject, {
  "default": () => (_app)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@blitzjs/next/dist/index-server.cjs
var index_server = __webpack_require__(1990);
// EXTERNAL MODULE: external "blitz"
var external_blitz_ = __webpack_require__(4405);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@blitzjs/auth"
var auth_ = __webpack_require__(7897);
// EXTERNAL MODULE: external "@blitzjs/rpc"
var rpc_ = __webpack_require__(5481);
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

// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(108);
// EXTERNAL MODULE: ./src/styles/ckeditor.css
var ckeditor = __webpack_require__(455);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: ./src/core/styles/index.css
var styles = __webpack_require__(3766);
// EXTERNAL MODULE: ./src/core/styles/ckeditor.css
var styles_ckeditor = __webpack_require__(6638);
;// CONCATENATED MODULE: ./src/pages/_app.tsx










const Editor = dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "_app.tsx -> " + "src/pastes/components/CKEditor"
        ]
    },
    ssr: false
});
(__webpack_require__(1239).EventEmitter.prototype._maxListeners) = 100;
//💄❤️🚀💣🍺👁️‍🗨️🎅😎🙃😘💯⚡
const NewPastePage = dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "_app.tsx -> " + "src/pages/pastes/new"
        ]
    },
    // Do not import in server side
    ssr: false
});
function RootErrorFallback({ error  }) {
    if (error instanceof external_blitz_.AuthenticationError) {
        return /*#__PURE__*/ jsx_runtime.jsx("div", {
            children: "Error: You are not authenticated"
        });
    } else if (error instanceof external_blitz_.AuthorizationError) {
        return /*#__PURE__*/ jsx_runtime.jsx(index_server/* ErrorComponent */.qz, {
            statusCode: error.statusCode,
            title: "Sorry, you are not authorized to access this"
        });
    } else {
        return /*#__PURE__*/ jsx_runtime.jsx(index_server/* ErrorComponent */.qz, {
            statusCode: error?.statusCode || 400,
            title: error.message || error.name
        });
    }
}
function MyApp({ Component , pageProps  }) {
    if (false) {}
    const getLayout = Component.getLayout || ((page)=>page);
    return /*#__PURE__*/ jsx_runtime.jsx(index_server/* ErrorBoundary */.SV, {
        FallbackComponent: RootErrorFallback,
        children: getLayout(/*#__PURE__*/ jsx_runtime.jsx(Component, {
            ...pageProps
        }))
    });
}
/* harmony default export */ const _app = (withBlitz(MyApp));

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.tsx&preferredRegion=!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2F_app_absolutePagePath_private_next_pages_2F_app_tsx_preferredRegion_ = ((0,helpers/* hoist */.l)(_app_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(_app_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(_app_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(_app_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(_app_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(_app_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(_app_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(_app_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(_app_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(_app_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(_app_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/_app","pathname":"/_app","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: _app_namespaceObject })
        
        
    

/***/ }),

/***/ 6638:
/***/ (() => {



/***/ }),

/***/ 3766:
/***/ (() => {



/***/ }),

/***/ 455:
/***/ (() => {



/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 7897:
/***/ ((module) => {

"use strict";
module.exports = require("@blitzjs/auth");

/***/ }),

/***/ 5481:
/***/ ((module) => {

"use strict";
module.exports = require("@blitzjs/rpc");

/***/ }),

/***/ 4405:
/***/ ((module) => {

"use strict";
module.exports = require("blitz");

/***/ }),

/***/ 1239:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 7318:
/***/ ((module) => {

"use strict";
module.exports = require("hoist-non-react-statics");

/***/ }),

/***/ 3076:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 982:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 72:
/***/ ((module) => {

"use strict";
module.exports = require("superjson");

/***/ }),

/***/ 6044:
/***/ ((module) => {

"use strict";
module.exports = require("supports-color");

/***/ }),

/***/ 6464:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 6224:
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ 167:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports._ = exports._interop_require_default = _interop_require_default;
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [812,990,152], () => (__webpack_exec__(7291)));
module.exports = __webpack_exports__;

})();