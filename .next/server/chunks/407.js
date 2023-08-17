exports.id = 407;
exports.ids = [407];
exports.modules = {

/***/ 4453:
/***/ ((__unused_webpack_module, exports) => {

exports.Routes = {
  Page404: (query) => ({ 
      pathname: "/404", 
      query,
      href: query
      ? replaceSlugsWithValues(
          "/404",
          Object.keys(query),
          Object.values(query)
        )
      : "/404",
    }),
  ForgotPasswordPage: (query) => ({ 
      pathname: "/auth/forgot-password", 
      query,
      href: query
      ? replaceSlugsWithValues(
          "/auth/forgot-password",
          Object.keys(query),
          Object.values(query)
        )
      : "/auth/forgot-password",
    }),
  LoginPage: (query) => ({ 
      pathname: "/auth/login", 
      query,
      href: query
      ? replaceSlugsWithValues(
          "/auth/login",
          Object.keys(query),
          Object.values(query)
        )
      : "/auth/login",
    }),
  ResetPasswordPage: (query) => ({ 
      pathname: "/auth/reset-password", 
      query,
      href: query
      ? replaceSlugsWithValues(
          "/auth/reset-password",
          Object.keys(query),
          Object.values(query)
        )
      : "/auth/reset-password",
    }),
  SignupPage: (query) => ({ 
      pathname: "/auth/signup", 
      query,
      href: query
      ? replaceSlugsWithValues(
          "/auth/signup",
          Object.keys(query),
          Object.values(query)
        )
      : "/auth/signup",
    }),
  Home: (query) => ({ 
      pathname: "/", 
      query,
      href: query
      ? replaceSlugsWithValues(
          "/",
          Object.keys(query),
          Object.values(query)
        )
      : "/",
    }),
  ShowPastebackupPage: (query) => ({ 
      pathname: "/pastebackups/[pastebackupId]", 
      query,
      href: query
      ? replaceSlugsWithValues(
          "/pastebackups/[pastebackupId]",
          Object.keys(query),
          Object.values(query)
        )
      : "/pastebackups/[pastebackupId]",
    }),
  EditPastebackupPage: (query) => ({ 
      pathname: "/pastebackups/[pastebackupId]/edit", 
      query,
      href: query
      ? replaceSlugsWithValues(
          "/pastebackups/[pastebackupId]/edit",
          Object.keys(query),
          Object.values(query)
        )
      : "/pastebackups/[pastebackupId]/edit",
    }),
  PastebackupsPage: (query) => ({ 
      pathname: "/pastebackups", 
      query,
      href: query
      ? replaceSlugsWithValues(
          "/pastebackups",
          Object.keys(query),
          Object.values(query)
        )
      : "/pastebackups",
    }),
  NewPastebackupPage: (query) => ({ 
      pathname: "/pastebackups/new", 
      query,
      href: query
      ? replaceSlugsWithValues(
          "/pastebackups/new",
          Object.keys(query),
          Object.values(query)
        )
      : "/pastebackups/new",
    }),
  ShowPastePage: (query) => ({ 
      pathname: "/pastes/[pasteId]", 
      query,
      href: query
      ? replaceSlugsWithValues(
          "/pastes/[pasteId]",
          Object.keys(query),
          Object.values(query)
        )
      : "/pastes/[pasteId]",
    }),
  EditPastePage: (query) => ({ 
      pathname: "/pastes/[pasteId]/edit", 
      query,
      href: query
      ? replaceSlugsWithValues(
          "/pastes/[pasteId]/edit",
          Object.keys(query),
          Object.values(query)
        )
      : "/pastes/[pasteId]/edit",
    }),
  PastesPage: (query) => ({ 
      pathname: "/pastes", 
      query,
      href: query
      ? replaceSlugsWithValues(
          "/pastes",
          Object.keys(query),
          Object.values(query)
        )
      : "/pastes",
    }),
  NewPastePage: (query) => ({ 
      pathname: "/pastes/new", 
      query,
      href: query
      ? replaceSlugsWithValues(
          "/pastes/new",
          Object.keys(query),
          Object.values(query)
        )
      : "/pastes/new",
    }),
  ShowProjectPage: (query) => ({ 
      pathname: "/projects/[projectId]", 
      query,
      href: query
      ? replaceSlugsWithValues(
          "/projects/[projectId]",
          Object.keys(query),
          Object.values(query)
        )
      : "/projects/[projectId]",
    }),
  EditProjectPage: (query) => ({ 
      pathname: "/projects/[projectId]/edit", 
      query,
      href: query
      ? replaceSlugsWithValues(
          "/projects/[projectId]/edit",
          Object.keys(query),
          Object.values(query)
        )
      : "/projects/[projectId]/edit",
    }),
  ProjectsPage: (query) => ({ 
      pathname: "/projects", 
      query,
      href: query
      ? replaceSlugsWithValues(
          "/projects",
          Object.keys(query),
          Object.values(query)
        )
      : "/projects",
    }),
  NewProjectPage: (query) => ({ 
      pathname: "/projects/new", 
      query,
      href: query
      ? replaceSlugsWithValues(
          "/projects/new",
          Object.keys(query),
          Object.values(query)
        )
      : "/projects/new",
    })
}
function replaceSlugsWithValues(str, slugs, values) {
      let result = str;
      slugs.forEach((slug, i) => {
          const value = values[i];
          if (value) {
              result = result.replace('[' + slug + ']', String(value));
          }
      });
      return result;
    }

/***/ }),

/***/ 9520:
/***/ ((module, exports, __webpack_require__) => {

/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */

exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (() => {
	let warned = false;

	return () => {
		if (!warned) {
			warned = true;
			console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
		}
	};
})();

/**
 * Colors.
 */

exports.colors = [
	'#0000CC',
	'#0000FF',
	'#0033CC',
	'#0033FF',
	'#0066CC',
	'#0066FF',
	'#0099CC',
	'#0099FF',
	'#00CC00',
	'#00CC33',
	'#00CC66',
	'#00CC99',
	'#00CCCC',
	'#00CCFF',
	'#3300CC',
	'#3300FF',
	'#3333CC',
	'#3333FF',
	'#3366CC',
	'#3366FF',
	'#3399CC',
	'#3399FF',
	'#33CC00',
	'#33CC33',
	'#33CC66',
	'#33CC99',
	'#33CCCC',
	'#33CCFF',
	'#6600CC',
	'#6600FF',
	'#6633CC',
	'#6633FF',
	'#66CC00',
	'#66CC33',
	'#9900CC',
	'#9900FF',
	'#9933CC',
	'#9933FF',
	'#99CC00',
	'#99CC33',
	'#CC0000',
	'#CC0033',
	'#CC0066',
	'#CC0099',
	'#CC00CC',
	'#CC00FF',
	'#CC3300',
	'#CC3333',
	'#CC3366',
	'#CC3399',
	'#CC33CC',
	'#CC33FF',
	'#CC6600',
	'#CC6633',
	'#CC9900',
	'#CC9933',
	'#CCCC00',
	'#CCCC33',
	'#FF0000',
	'#FF0033',
	'#FF0066',
	'#FF0099',
	'#FF00CC',
	'#FF00FF',
	'#FF3300',
	'#FF3333',
	'#FF3366',
	'#FF3399',
	'#FF33CC',
	'#FF33FF',
	'#FF6600',
	'#FF6633',
	'#FF9900',
	'#FF9933',
	'#FFCC00',
	'#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

// eslint-disable-next-line complexity
function useColors() {
	// NB: In an Electron preload script, document will be defined but not fully
	// initialized. Since we know we're in Chrome, we'll just detect this case
	// explicitly
	if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
		return true;
	}

	// Internet Explorer and Edge do not support colors.
	if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
		return false;
	}

	// Is webkit? http://stackoverflow.com/a/16459606/376773
	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		// Is firebug? http://stackoverflow.com/a/398120/376773
		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		// Is firefox >= v31?
		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
		// Double check webkit in userAgent just in case we are in a worker
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	args[0] = (this.useColors ? '%c' : '') +
		this.namespace +
		(this.useColors ? ' %c' : ' ') +
		args[0] +
		(this.useColors ? '%c ' : ' ') +
		'+' + module.exports.humanize(this.diff);

	if (!this.useColors) {
		return;
	}

	const c = 'color: ' + this.color;
	args.splice(1, 0, c, 'color: inherit');

	// The final "%c" is somewhat tricky, because there could be other
	// arguments passed either before or after the %c, so we need to
	// figure out the correct index to insert the CSS into
	let index = 0;
	let lastC = 0;
	args[0].replace(/%[a-zA-Z%]/g, match => {
		if (match === '%%') {
			return;
		}
		index++;
		if (match === '%c') {
			// We only are interested in the *last* %c
			// (the user may have provided their own)
			lastC = index;
		}
	});

	args.splice(lastC, 0, c);
}

/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */
exports.log = console.debug || console.log || (() => {});

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	try {
		if (namespaces) {
			exports.storage.setItem('debug', namespaces);
		} else {
			exports.storage.removeItem('debug');
		}
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function load() {
	let r;
	try {
		r = exports.storage.getItem('debug');
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}

	// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	if (!r && typeof process !== 'undefined' && 'env' in process) {
		r = process.env.DEBUG;
	}

	return r;
}

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
	try {
		// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
		// The Browser also has localStorage in the global context.
		return localStorage;
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

module.exports = __webpack_require__(284)(exports);

const {formatters} = module.exports;

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
	try {
		return JSON.stringify(v);
	} catch (error) {
		return '[UnexpectedJSONParseError]: ' + error.message;
	}
};


/***/ }),

/***/ 284:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
	createDebug.debug = createDebug;
	createDebug.default = createDebug;
	createDebug.coerce = coerce;
	createDebug.disable = disable;
	createDebug.enable = enable;
	createDebug.enabled = enabled;
	createDebug.humanize = __webpack_require__(6718);
	createDebug.destroy = destroy;

	Object.keys(env).forEach(key => {
		createDebug[key] = env[key];
	});

	/**
	* The currently active debug mode names, and names to skip.
	*/

	createDebug.names = [];
	createDebug.skips = [];

	/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/
	createDebug.formatters = {};

	/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
	function selectColor(namespace) {
		let hash = 0;

		for (let i = 0; i < namespace.length; i++) {
			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
			hash |= 0; // Convert to 32bit integer
		}

		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	}
	createDebug.selectColor = selectColor;

	/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/
	function createDebug(namespace) {
		let prevTime;
		let enableOverride = null;
		let namespacesCache;
		let enabledCache;

		function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return '%';
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		}

		debug.namespace = namespace;
		debug.useColors = createDebug.useColors();
		debug.color = createDebug.selectColor(namespace);
		debug.extend = extend;
		debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

		Object.defineProperty(debug, 'enabled', {
			enumerable: true,
			configurable: false,
			get: () => {
				if (enableOverride !== null) {
					return enableOverride;
				}
				if (namespacesCache !== createDebug.namespaces) {
					namespacesCache = createDebug.namespaces;
					enabledCache = createDebug.enabled(namespace);
				}

				return enabledCache;
			},
			set: v => {
				enableOverride = v;
			}
		});

		// Env-specific initialization logic for debug instances
		if (typeof createDebug.init === 'function') {
			createDebug.init(debug);
		}

		return debug;
	}

	function extend(namespace, delimiter) {
		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
		newDebug.log = this.log;
		return newDebug;
	}

	/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/
	function enable(namespaces) {
		createDebug.save(namespaces);
		createDebug.namespaces = namespaces;

		createDebug.names = [];
		createDebug.skips = [];

		let i;
		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		const len = split.length;

		for (i = 0; i < len; i++) {
			if (!split[i]) {
				// ignore empty strings
				continue;
			}

			namespaces = split[i].replace(/\*/g, '.*?');

			if (namespaces[0] === '-') {
				createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
			} else {
				createDebug.names.push(new RegExp('^' + namespaces + '$'));
			}
		}
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names.map(toNamespace),
			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
		].join(',');
		createDebug.enable('');
		return namespaces;
	}

	/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/
	function enabled(name) {
		if (name[name.length - 1] === '*') {
			return true;
		}

		let i;
		let len;

		for (i = 0, len = createDebug.skips.length; i < len; i++) {
			if (createDebug.skips[i].test(name)) {
				return false;
			}
		}

		for (i = 0, len = createDebug.names.length; i < len; i++) {
			if (createDebug.names[i].test(name)) {
				return true;
			}
		}

		return false;
	}

	/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/
	function toNamespace(regexp) {
		return regexp.toString()
			.substring(2, regexp.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}

	/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/
	function coerce(val) {
		if (val instanceof Error) {
			return val.stack || val.message;
		}
		return val;
	}

	/**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/
	function destroy() {
		console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
	}

	createDebug.enable(createDebug.load());

	return createDebug;
}

module.exports = setup;


/***/ }),

/***/ 1068:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */

if (typeof process === 'undefined' || process.type === 'renderer' || false === true || process.__nwjs) {
	module.exports = __webpack_require__(9520);
} else {
	module.exports = __webpack_require__(7876);
}


/***/ }),

/***/ 7876:
/***/ ((module, exports, __webpack_require__) => {

/**
 * Module dependencies.
 */

const tty = __webpack_require__(6224);
const util = __webpack_require__(6464);

/**
 * This is the Node.js implementation of `debug()`.
 */

exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.destroy = util.deprecate(
	() => {},
	'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
);

/**
 * Colors.
 */

exports.colors = [6, 2, 3, 4, 5, 1];

try {
	// Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
	// eslint-disable-next-line import/no-extraneous-dependencies
	const supportsColor = __webpack_require__(6044);

	if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
		exports.colors = [
			20,
			21,
			26,
			27,
			32,
			33,
			38,
			39,
			40,
			41,
			42,
			43,
			44,
			45,
			56,
			57,
			62,
			63,
			68,
			69,
			74,
			75,
			76,
			77,
			78,
			79,
			80,
			81,
			92,
			93,
			98,
			99,
			112,
			113,
			128,
			129,
			134,
			135,
			148,
			149,
			160,
			161,
			162,
			163,
			164,
			165,
			166,
			167,
			168,
			169,
			170,
			171,
			172,
			173,
			178,
			179,
			184,
			185,
			196,
			197,
			198,
			199,
			200,
			201,
			202,
			203,
			204,
			205,
			206,
			207,
			208,
			209,
			214,
			215,
			220,
			221
		];
	}
} catch (error) {
	// Swallow - we only care if `supports-color` is available; it doesn't have to be.
}

/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */

exports.inspectOpts = Object.keys(process.env).filter(key => {
	return /^debug_/i.test(key);
}).reduce((obj, key) => {
	// Camel-case
	const prop = key
		.substring(6)
		.toLowerCase()
		.replace(/_([a-z])/g, (_, k) => {
			return k.toUpperCase();
		});

	// Coerce string value into JS value
	let val = process.env[key];
	if (/^(yes|on|true|enabled)$/i.test(val)) {
		val = true;
	} else if (/^(no|off|false|disabled)$/i.test(val)) {
		val = false;
	} else if (val === 'null') {
		val = null;
	} else {
		val = Number(val);
	}

	obj[prop] = val;
	return obj;
}, {});

/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */

function useColors() {
	return 'colors' in exports.inspectOpts ?
		Boolean(exports.inspectOpts.colors) :
		tty.isatty(process.stderr.fd);
}

/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	const {namespace: name, useColors} = this;

	if (useColors) {
		const c = this.color;
		const colorCode = '\u001B[3' + (c < 8 ? c : '8;5;' + c);
		const prefix = `  ${colorCode};1m${name} \u001B[0m`;

		args[0] = prefix + args[0].split('\n').join('\n' + prefix);
		args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + '\u001B[0m');
	} else {
		args[0] = getDate() + name + ' ' + args[0];
	}
}

function getDate() {
	if (exports.inspectOpts.hideDate) {
		return '';
	}
	return new Date().toISOString() + ' ';
}

/**
 * Invokes `util.format()` with the specified arguments and writes to stderr.
 */

function log(...args) {
	return process.stderr.write(util.format(...args) + '\n');
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	if (namespaces) {
		process.env.DEBUG = namespaces;
	} else {
		// If you set a process.env field to null or undefined, it gets cast to the
		// string 'null' or 'undefined'. Just delete instead.
		delete process.env.DEBUG;
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
	return process.env.DEBUG;
}

/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */

function init(debug) {
	debug.inspectOpts = {};

	const keys = Object.keys(exports.inspectOpts);
	for (let i = 0; i < keys.length; i++) {
		debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
	}
}

module.exports = __webpack_require__(284)(exports);

const {formatters} = module.exports;

/**
 * Map %o to `util.inspect()`, all on a single line.
 */

formatters.o = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util.inspect(v, this.inspectOpts)
		.split('\n')
		.map(str => str.trim())
		.join(' ');
};

/**
 * Map %O to `util.inspect()`, allowing multiple lines if needed.
 */

formatters.O = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util.inspect(v, this.inspectOpts);
};


/***/ }),

/***/ 6718:
/***/ ((module) => {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}


/***/ }),

/***/ 3049:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

'use client';
'use strict';

const blitz = __webpack_require__(4405);
const Head = __webpack_require__(968);
const React = __webpack_require__(6689);
const hoistNonReactStatics = __webpack_require__(7318);
const SuperJSON = __webpack_require__(72);
const rpc = __webpack_require__(5481);
__webpack_require__(4453);
const router = __webpack_require__(1853);
const _debug = __webpack_require__(1068);

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e["default"] : e; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  const n = Object.create(null);
  if (e) {
    for (const k in e) {
      n[k] = e[k];
    }
  }
  n["default"] = e;
  return n;
}

const Head__default = /*#__PURE__*/_interopDefaultLegacy(Head);
const React__namespace = /*#__PURE__*/_interopNamespace(React);
const React__default = /*#__PURE__*/_interopDefaultLegacy(React);
const hoistNonReactStatics__default = /*#__PURE__*/_interopDefaultLegacy(hoistNonReactStatics);
const SuperJSON__default = /*#__PURE__*/_interopDefaultLegacy(SuperJSON);
const _debug__default = /*#__PURE__*/_interopDefaultLegacy(_debug);

var __defProp$2 = Object.defineProperty;
var __defProps$1 = Object.defineProperties;
var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2.call(b, prop))
      __defNormalProp$2(a, prop, b[prop]);
  if (__getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(b)) {
      if (__propIsEnum$2.call(b, prop))
        __defNormalProp$2(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$1 = (a, b) => __defProps$1(a, __getOwnPropDescs$1(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function withSuperJsonProps(result, exclude = []) {
  if (!("props" in result)) {
    return result;
  }
  if (!result.props) {
    return result;
  }
  const excludedPropValues = exclude.map((propKey) => {
    const value = result.props[propKey];
    delete result.props[propKey];
    return value;
  });
  const { json, meta } = SuperJSON__default.serialize(result.props);
  const props = json;
  if (meta) {
    props._superjson = meta;
  }
  exclude.forEach((key, index) => {
    const excludedPropValue = excludedPropValues[index];
    if (typeof excludedPropValue !== "undefined") {
      props[key] = excludedPropValue;
    }
  });
  return __spreadProps$1(__spreadValues$2({}, result), {
    props
  });
}
function deserializeProps(serializedProps) {
  const _a = serializedProps, { _superjson } = _a, props = __objRest(_a, ["_superjson"]);
  return SuperJSON__default.deserialize({ json: props, meta: _superjson });
}
function withSuperJSONPage(Page) {
  function WithSuperJSON(serializedProps) {
    return /* @__PURE__ */ React__namespace.createElement(Page, __spreadValues$2({}, deserializeProps(serializedProps)));
  }
  hoistNonReactStatics__default(WithSuperJSON, Page);
  return WithSuperJSON;
}

const BlitzProvider = ({
  client = globalThis.queryClient,
  contextSharing = false,
  dehydratedState,
  hydrateOptions,
  children
}) => {
  if (client) {
    return /* @__PURE__ */ React__default.createElement(rpc.QueryClientProvider, {
      client: client || globalThis.queryClient,
      contextSharing
    }, /* @__PURE__ */ React__default.createElement(rpc.Hydrate, {
      state: dehydratedState,
      options: hydrateOptions
    }, children));
  }
  return children;
};

const RouterContext = React__default.createContext(null);
if (false) {}

var __defProp$1 = Object.defineProperty;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1.call(b, prop))
      __defNormalProp$1(a, prop, b[prop]);
  if (__getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(b)) {
      if (__propIsEnum$1.call(b, prop))
        __defNormalProp$1(a, prop, b[prop]);
    }
  return a;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var _a;
const debug = _debug__default("blitz:errorboundary");
const changedArray = (a = [], b = []) => a.length !== b.length || a.some((item, index) => !Object.is(item, b[index]));
const initialState = { error: null };
const ErrorBoundary = router.withRouter(
  (_a = class extends React__namespace.Component {
    constructor() {
      super(...arguments);
      this.state = initialState;
      this.updatedWithError = false;
      this.resetErrorBoundary = (...args) => {
        var _a2, _b;
        (_b = (_a2 = this.props).onReset) == null ? void 0 : _b.call(_a2, ...args);
        this.reset();
      };
      this.handleRouteChange = () => {
        var _a2, _b;
        debug("Resetting error boundary on route change");
        (_b = (_a2 = this.props).onReset) == null ? void 0 : _b.call(_a2);
        this.reset();
      };
    }
    static getDerivedStateFromError(error) {
      return { error };
    }
    reset() {
      this.updatedWithError = false;
      this.setState(initialState);
    }
    componentDidCatch(error, info) {
      return __async(this, null, function* () {
        var _a2, _b;
        if (error instanceof blitz.RedirectError) {
          debug("Redirecting from ErrorBoundary to", error.url);
          yield this.props.router.push(error.url);
          return;
        }
        (_b = (_a2 = this.props).onError) == null ? void 0 : _b.call(_a2, error, info);
      });
    }
    componentDidMount() {
      var _a2, _b;
      const { error } = this.state;
      if (error !== null) {
        this.updatedWithError = true;
      }
      (_b = (_a2 = this.props.router) == null ? void 0 : _a2.events) == null ? void 0 : _b.on("routeChangeComplete", this.handleRouteChange);
    }
    componentWillUnmount() {
      var _a2, _b;
      (_b = (_a2 = this.props.router) == null ? void 0 : _a2.events) == null ? void 0 : _b.off("routeChangeComplete", this.handleRouteChange);
    }
    componentDidUpdate(prevProps) {
      var _a2, _b;
      const { error } = this.state;
      const { resetKeys } = this.props;
      if (error !== null && !this.updatedWithError) {
        this.updatedWithError = true;
        return;
      }
      if (error !== null && changedArray(prevProps.resetKeys, resetKeys)) {
        (_b = (_a2 = this.props).onResetKeysChange) == null ? void 0 : _b.call(_a2, prevProps.resetKeys, resetKeys);
        this.reset();
      }
    }
    render() {
      const { error } = this.state;
      const { fallbackRender, FallbackComponent, fallback } = this.props;
      if (error !== null) {
        const props = {
          error,
          resetErrorBoundary: this.resetErrorBoundary
        };
        if (error instanceof blitz.RedirectError) {
          return null;
        } else if (React__namespace.isValidElement(fallback)) {
          return fallback;
        } else if (typeof fallbackRender === "function") {
          return fallbackRender(props);
        } else if (FallbackComponent) {
          return /* @__PURE__ */ React__namespace.createElement(FallbackComponent, __spreadValues$1({}, props));
        } else {
          throw new Error(
            "<ErrorBoundary> requires either a fallback, fallbackRender, or FallbackComponent prop"
          );
        }
      }
      return this.props.children;
    }
  }, _a.contextType = RouterContext, _a)
);
function withErrorBoundary(Component, errorBoundaryProps) {
  const Wrapped = (props) => {
    return /* @__PURE__ */ React__namespace.createElement(ErrorBoundary, __spreadValues$1({}, errorBoundaryProps), /* @__PURE__ */ React__namespace.createElement(Component, __spreadValues$1({}, props)));
  };
  const name = Component.displayName || Component.name || "Unknown";
  Wrapped.displayName = `withErrorBoundary(${name})`;
  return Wrapped;
}
function useErrorHandler(givenError) {
  const [error, setError] = React__namespace.useState(null);
  if (givenError != null)
    throw givenError;
  if (error != null)
    throw error;
  return setError;
}

const statusCodes = {
  400: "Bad Request",
  404: "This page could not be found",
  405: "Method Not Allowed",
  500: "Internal Server Error"
};
function _getInitialProps({ res, err }) {
  const statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
}
class ErrorComponent extends React__default.Component {
  render() {
    const { statusCode } = this.props;
    const title = this.props.title || statusCodes[statusCode] || "An unexpected error has occurred";
    return /* @__PURE__ */ React__default.createElement("div", {
      style: styles.error
    }, /* @__PURE__ */ React__default.createElement(Head__default, null, /* @__PURE__ */ React__default.createElement("title", null, statusCode ? `${statusCode}: ${title}` : "Application error: a client-side exception has occurred")), /* @__PURE__ */ React__default.createElement("div", null, /* @__PURE__ */ React__default.createElement("style", {
      dangerouslySetInnerHTML: { __html: "body { margin: 0 }" }
    }), statusCode ? /* @__PURE__ */ React__default.createElement("h1", {
      style: styles.h1
    }, statusCode) : null, /* @__PURE__ */ React__default.createElement("div", {
      style: styles.desc
    }, /* @__PURE__ */ React__default.createElement("h2", {
      style: styles.h2
    }, this.props.title || statusCode ? title : /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, "Application error: a client-side exception has occurred (see the browser console for more information)"), "."))));
  }
}
ErrorComponent.displayName = "ErrorPage";
ErrorComponent.getInitialProps = _getInitialProps;
ErrorComponent.origGetInitialProps = _getInitialProps;
const styles = {
  error: {
    color: "#000",
    background: "#fff",
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
    height: "100vh",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  desc: {
    display: "inline-block",
    textAlign: "left",
    lineHeight: "49px",
    height: "49px",
    verticalAlign: "middle"
  },
  h1: {
    display: "inline-block",
    borderRight: "1px solid rgba(0, 0, 0,.3)",
    margin: 0,
    marginRight: "20px",
    padding: "10px 23px 10px 0",
    fontSize: "24px",
    fontWeight: 500,
    verticalAlign: "top"
  },
  h2: {
    fontSize: "14px",
    fontWeight: "normal",
    lineHeight: "inherit",
    margin: 0,
    padding: 0
  }
};

const decodeString = (str) => decodeURIComponent(str.replace(/\+/g, "%20"));
function decode(str) {
  if (!str)
    return {};
  let out = {};
  for (const current of str.split("&")) {
    let [key, value = ""] = current.split("=");
    key = decodeString(key);
    value = decodeString(value);
    if (key.length === 0)
      continue;
    if (key in out) {
      out[key] = [].concat(out[key], value);
    } else {
      out[key] = value;
    }
  }
  return out;
}
function extractQueryFromAsPath(asPath) {
  return decode(asPath.split("?", 2)[1]);
}
function useRouterQuery() {
  const router$1 = router.useRouter();
  const query = React__default.useMemo(() => extractQueryFromAsPath(router$1.asPath), [router$1.asPath]);
  return query;
}
function areQueryValuesEqual(value1, value2) {
  if (typeof value1 !== typeof value2) {
    return false;
  }
  if (Array.isArray(value1) && Array.isArray(value2)) {
    if (value1.length !== value2.length) {
      return false;
    }
    for (let i = 0; i < value1.length; i++) {
      if (value1[i] !== value2[i]) {
        return false;
      }
    }
    return true;
  }
  return value1 === value2;
}
function extractRouterParams(routerQuery, asPathQuery) {
  return Object.fromEntries(
    Object.entries(routerQuery).filter(
      ([key, value]) => typeof asPathQuery[key] === "undefined" || !areQueryValuesEqual(value, asPathQuery[key])
    )
  );
}
function useParams(returnType) {
  const router$1 = router.useRouter();
  const query = useRouterQuery();
  const params = React__default.useMemo(() => {
    const rawParams = extractRouterParams(router$1.query, query);
    if (returnType === "string") {
      const parsedParams = {};
      for (const key in rawParams) {
        if (typeof rawParams[key] === "string") {
          parsedParams[key] = rawParams[key];
        }
      }
      return parsedParams;
    }
    if (returnType === "number") {
      const parsedParams = {};
      for (const key in rawParams) {
        if (rawParams[key]) {
          const num = Number(rawParams[key]);
          parsedParams[key] = isNaN(num) ? void 0 : num;
        }
      }
      return parsedParams;
    }
    if (returnType === "array") {
      const parsedParams = {};
      for (const key in rawParams) {
        const rawValue = rawParams[key];
        if (Array.isArray(rawParams[key])) {
          parsedParams[key] = rawValue;
        } else if (typeof rawValue === "string") {
          parsedParams[key] = [rawValue];
        }
      }
      return parsedParams;
    }
    return rawParams;
  }, [router$1.query, query, returnType]);
  return params;
}
function useParam(key, returnType) {
  const params = useParams(returnType);
  const value = params[key];
  return value;
}

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const buildWithBlitz = (withPlugins) => {
  return function withBlitzAppRoot(UserAppRoot) {
    const BlitzOuterRoot = (props) => {
      var _a;
      const component = React__default.useMemo(() => withPlugins(props.Component), [props.Component]);
      React__default.useEffect(() => {
        setTimeout(() => {
          document.documentElement.classList.add("blitz-first-render-complete");
        });
      }, []);
      const children = /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, props.Component.suppressFirstRenderFlicker && /* @__PURE__ */ React__default.createElement(NoPageFlicker, null), /* @__PURE__ */ React__default.createElement(UserAppRoot, __spreadProps(__spreadValues({}, props), {
        Component: component
      })));
      return /* @__PURE__ */ React__default.createElement(BlitzProvider, {
        dehydratedState: (_a = props.pageProps) == null ? void 0 : _a.dehydratedState
      }, children);
    };
    Object.assign(BlitzOuterRoot, UserAppRoot);
    return withSuperJSONPage(BlitzOuterRoot);
  };
};
const setupBlitzClient = ({
  plugins
}) => {
  const { exports, withPlugins } = blitz.reduceBlitzClientPlugins({ plugins });
  const withBlitz = buildWithBlitz(withPlugins);
  return __spreadValues({
    withBlitz
  }, exports);
};
const customCSS = `
  body::before {
    content: "";
    display: block;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 99999;
    background-color: white;
  }

  .blitz-first-render-complete body::before {
    display: none;
  }
`;
const noscriptCSS = `
  body::before {
    content: none
  }
`;
const NoPageFlicker = () => {
  return /* @__PURE__ */ React__default.createElement(Head__default, null, /* @__PURE__ */ React__default.createElement("style", {
    dangerouslySetInnerHTML: { __html: customCSS }
  }), /* @__PURE__ */ React__default.createElement("noscript", null, /* @__PURE__ */ React__default.createElement("style", {
    dangerouslySetInnerHTML: { __html: noscriptCSS }
  })));
};

exports.BlitzProvider = BlitzProvider;
exports.ErrorBoundary = ErrorBoundary;
exports.ErrorComponent = ErrorComponent;
exports.NoPageFlicker = NoPageFlicker;
exports.RouterContext = RouterContext;
exports.extractQueryFromAsPath = extractQueryFromAsPath;
exports.extractRouterParams = extractRouterParams;
exports.setupBlitzClient = setupBlitzClient;
exports.useErrorHandler = useErrorHandler;
exports.useParam = useParam;
exports.useParams = useParams;
exports.useRouterQuery = useRouterQuery;
exports.withErrorBoundary = withErrorBoundary;
exports.withSuperJsonProps = withSuperJsonProps;


/***/ }),

/***/ 3407:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({ value: true });

const blitz = __webpack_require__(4405);
const rpc = __webpack_require__(5481);
const indexBrowser = __webpack_require__(3049);
const resolveHref = __webpack_require__(982);
const _blitz = __webpack_require__(4453);
__webpack_require__(968);
__webpack_require__(6689);
__webpack_require__(7318);
__webpack_require__(72);

__webpack_require__(1068);

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
const prefetchQueryFactory = (ctx) => {
  let queryClient = null;
  return {
    getClient: () => queryClient,
    prefetchQuery: (_0, _1, ..._2) => __async(void 0, [_0, _1, ..._2], function* (fn, input, defaultOptions = {}, infinite = false) {
      if (!queryClient) {
        queryClient = new rpc.QueryClient({ defaultOptions });
      }
      if (infinite) {
        yield queryClient.prefetchInfiniteQuery(
          rpc.getInfiniteQueryKey(fn, input),
          () => fn(input, ctx)
        );
      } else {
        yield queryClient.prefetchQuery(rpc.getQueryKey(fn, input), () => fn(input, ctx));
      }
    })
  };
};
const setupBlitzServer = ({
  plugins,
  onError,
  logger,
  formatError
}) => {
  blitz.initializeLogger(logger != null ? logger : blitz.BlitzLogger());
  const { middlewares, contextMiddleware, pluginExports } = blitz.reduceBlitzServerPlugins({ plugins });
  const gSSP = (handler) => (_a) => __async(void 0, null, function* () {
    var _b = _a, { req, res } = _b, rest = __objRest(_b, ["req", "res"]);
    var _a2;
    yield blitz.handleRequestWithMiddleware(req, res, middlewares);
    const ctx = contextMiddleware.reduceRight(
      (y, f) => f ? f(y) : y,
      res.blitzCtx
    );
    const { getClient, prefetchQuery } = prefetchQueryFactory(ctx);
    ctx.prefetchQuery = prefetchQuery;
    ctx.prefetchInfiniteQuery = (fn, input, defaultOptions = {}) => prefetchQuery(fn, input, defaultOptions, true);
    try {
      const result = yield handler(__spreadValues({ req, res, ctx }, rest));
      return indexBrowser.withSuperJsonProps(
        withDehydratedState(
          normalizeRedirectValues(result),
          getClient()
        )
      );
    } catch (error) {
      onError == null ? void 0 : onError(error);
      throw (_a2 = formatError == null ? void 0 : formatError(error)) != null ? _a2 : error;
    }
  });
  const gSP = (handler) => (context) => __async(void 0, null, function* () {
    var _a;
    const ctx = contextMiddleware.reduceRight((y, f) => f ? f(y) : y, {});
    const { getClient, prefetchQuery } = prefetchQueryFactory(ctx);
    ctx.prefetchQuery = prefetchQuery;
    ctx.prefetchInfiniteQuery = (...args) => prefetchQuery(...args, true);
    try {
      const result = yield handler(__spreadProps(__spreadValues({}, context), { ctx }));
      return indexBrowser.withSuperJsonProps(
        withDehydratedState(
          normalizeRedirectValues(result),
          getClient()
        )
      );
    } catch (error) {
      onError == null ? void 0 : onError(error);
      throw (_a = formatError == null ? void 0 : formatError(error)) != null ? _a : error;
    }
  });
  const api = (handler) => (req, res) => __async(void 0, null, function* () {
    var _a;
    try {
      return yield blitz.handleRequestWithMiddleware(req, res, [
        ...middlewares,
        (req2, res2) => handler(req2, res2, res2.blitzCtx)
      ]);
    } catch (error) {
      onError == null ? void 0 : onError(error);
      const formattedError = (_a = formatError == null ? void 0 : formatError(error)) != null ? _a : error;
      return res.status(400).send(formattedError);
    }
  });
  return __spreadValues({ gSSP, gSP, api }, pluginExports);
};
function withBlitz(nextConfig = {}) {
  if (false) {}
  const config = Object.assign({}, nextConfig, {
    webpack: (config2, options) => {
      var _a2, _b, _c, _d;
      rpc.installWebpackConfig({
        webpackConfig: config2,
        webpackRuleOptions: {
          resolverPath: (_a2 = nextConfig.blitz) == null ? void 0 : _a2.resolverPath,
          resolversDynamicImport: (_c = (_b = nextConfig.blitz) == null ? void 0 : _b.resolversDynamicImport) != null ? _c : Boolean(process.env.VERCEL),
          includeRPCFolders: (_d = nextConfig.blitz) == null ? void 0 : _d.includeRPCFolders
        }
      });
      if (typeof nextConfig.webpack === "function") {
        return nextConfig.webpack(config2, options);
      }
      return config2;
    }
  });
  const _a = config, rest = __objRest(_a, ["blitz"]);
  return rest;
}
function withDehydratedState(result, queryClient) {
  if (!queryClient) {
    return result;
  }
  const dehydratedState = rpc.dehydrate(queryClient);
  return __spreadProps(__spreadValues({}, result), { props: __spreadProps(__spreadValues({}, "props" in result ? result.props : void 0), { dehydratedState }) });
}
const normalizeRedirectValues = (result) => {
  var _a;
  if ("redirect" in result) {
    const dest = (_a = result.redirect) == null ? void 0 : _a.destination;
    if (dest && blitz.isRouteUrlObject(dest)) {
      const resolvedDest = resolveHref.resolveHref({ asPath: "/", pathname: "/" }, dest, true);
      return __spreadProps(__spreadValues({}, result), {
        redirect: __spreadProps(__spreadValues({}, result.redirect), { destination: resolvedDest[1] || resolvedDest[0] })
      });
    }
  }
  return result;
};

__webpack_unused_export__ = indexBrowser.BlitzProvider;
__webpack_unused_export__ = indexBrowser.ErrorBoundary;
__webpack_unused_export__ = indexBrowser.ErrorComponent;
__webpack_unused_export__ = indexBrowser.NoPageFlicker;
__webpack_unused_export__ = indexBrowser.RouterContext;
__webpack_unused_export__ = indexBrowser.extractQueryFromAsPath;
__webpack_unused_export__ = indexBrowser.extractRouterParams;
exports.qd = indexBrowser.setupBlitzClient;
__webpack_unused_export__ = indexBrowser.useErrorHandler;
__webpack_unused_export__ = indexBrowser.useParam;
__webpack_unused_export__ = indexBrowser.useParams;
__webpack_unused_export__ = indexBrowser.useRouterQuery;
__webpack_unused_export__ = indexBrowser.withErrorBoundary;
__webpack_unused_export__ = _blitz.Routes;
exports.te = setupBlitzServer;
__webpack_unused_export__ = withBlitz;


/***/ })

};
;