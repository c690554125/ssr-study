/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./cli/home.jsx":
/*!**********************!*\
  !*** ./cli/home.jsx ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Home = function Home() {\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n    onClick: function onClick() {\n      console.log('home print');\n    },\n    children: \"This is sanyuan with click event\"\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n//# sourceURL=webpack://simple-ssr-study/./cli/home.jsx?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa */ \"koa\");\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! koa-static */ \"./node_modules/koa-static/index.js\");\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(koa_static__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _cli_home_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cli/home.jsx */ \"./cli/home.jsx\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = \"function\" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || \"@@iterator\", asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\", toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, \"\"); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, \"_invoke\", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: \"normal\", arg: fn.call(obj, arg) }; } catch (err) { return { type: \"throw\", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { [\"next\", \"throw\", \"return\"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if (\"throw\" !== record.type) { var result = record.arg, value = result.value; return value && \"object\" == _typeof(value) && hasOwn.call(value, \"__await\") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke(\"next\", value, resolve, reject); }, function (err) { invoke(\"throw\", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke(\"throw\", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, \"_invoke\", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = \"suspendedStart\"; return function (method, arg) { if (\"executing\" === state) throw new Error(\"Generator is already running\"); if (\"completed\" === state) { if (\"throw\" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if (\"next\" === context.method) context.sent = context._sent = context.arg;else if (\"throw\" === context.method) { if (\"suspendedStart\" === state) throw state = \"completed\", context.arg; context.dispatchException(context.arg); } else \"return\" === context.method && context.abrupt(\"return\", context.arg); state = \"executing\"; var record = tryCatch(innerFn, self, context); if (\"normal\" === record.type) { if (state = context.done ? \"completed\" : \"suspendedYield\", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } \"throw\" === record.type && (state = \"completed\", context.method = \"throw\", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, \"throw\" === methodName && delegate.iterator[\"return\"] && (context.method = \"return\", context.arg = undefined, maybeInvokeDelegate(delegate, context), \"throw\" === context.method) || \"return\" !== methodName && (context.method = \"throw\", context.arg = new TypeError(\"The iterator does not provide a '\" + methodName + \"' method\")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if (\"throw\" === record.type) return context.method = \"throw\", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, \"return\" !== context.method && (context.method = \"next\", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = \"throw\", context.arg = new TypeError(\"iterator result is not an object\"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = \"normal\", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: \"root\" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if (\"function\" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, \"constructor\", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, \"constructor\", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, \"GeneratorFunction\"), exports.isGeneratorFunction = function (genFun) { var ctor = \"function\" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || \"GeneratorFunction\" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, \"GeneratorFunction\")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, \"Generator\"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, \"toString\", function () { return \"[object Generator]\"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) \"t\" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if (\"throw\" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = \"throw\", record.arg = exception, context.next = loc, caught && (context.method = \"next\", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if (\"root\" === entry.tryLoc) return handle(\"end\"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, \"catchLoc\"), hasFinally = hasOwn.call(entry, \"finallyLoc\"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error(\"try statement without catch or finally\"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, \"finallyLoc\") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && (\"break\" === type || \"continue\" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = \"next\", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if (\"throw\" === record.type) throw record.arg; return \"break\" === record.type || \"continue\" === record.type ? this.next = record.arg : \"return\" === record.type ? (this.rval = this.arg = record.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, \"catch\": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if (\"throw\" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, \"next\" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\nvar app = new (koa__WEBPACK_IMPORTED_MODULE_0___default())();\napp.use(koa_static__WEBPACK_IMPORTED_MODULE_2___default()('.'));\nvar content = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_1__.renderToString)( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_cli_home_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}));\napp.use( /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(ctx) {\n    return _regeneratorRuntime().wrap(function _callee$(_context) {\n      while (1) switch (_context.prev = _context.next) {\n        case 0:\n          ctx.response.set('Content-Type', 'text/html');\n          // 设置响应体\n          ctx.body = \"\\n    <html>\\n      <head>\\n        <title>ssr</title>\\n      </head>\\n      <body>\\n        <div id=\\\"root\\\">\".concat(content, \"</div>\\n        <script src=\\\"/build/bundle.client.js\\\"></script>\\n      </body>\\n    </html>\\n  \");\n        case 2:\n        case \"end\":\n          return _context.stop();\n      }\n    }, _callee);\n  }));\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}());\napp.listen(1234, function () {\n  console.log('Koa app listening on port 3000');\n});\n\n//# sourceURL=webpack://simple-ssr-study/./server/index.js?");

/***/ }),

/***/ "./node_modules/koa-send/index.js":
/*!****************************************!*\
  !*** ./node_modules/koa-send/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/**\n * Module dependencies.\n */\n\nconst fs = __webpack_require__(/*! fs */ \"fs\")\nconst util = __webpack_require__(/*! util */ \"util\")\nconst debug = __webpack_require__(/*! debug */ \"debug\")('koa-send')\nconst resolvePath = __webpack_require__(/*! resolve-path */ \"./node_modules/resolve-path/index.js\")\nconst createError = __webpack_require__(/*! http-errors */ \"http-errors\")\nconst assert = __webpack_require__(/*! assert */ \"assert\")\n\nconst stat = util.promisify(fs.stat)\nconst access = util.promisify(fs.access)\n\nasync function exists (path) {\n  try {\n    await access(path)\n    return true\n  } catch (e) {\n    return false\n  }\n}\n\nconst {\n  normalize,\n  basename,\n  extname,\n  resolve,\n  parse,\n  sep\n} = __webpack_require__(/*! path */ \"path\")\n\n/**\n * Expose `send()`.\n */\n\nmodule.exports = send\n\n/**\n * Send file at `path` with the\n * given `options` to the koa `ctx`.\n *\n * @param {Context} ctx\n * @param {String} path\n * @param {Object} [opts]\n * @return {Promise}\n * @api public\n */\n\nasync function send (ctx, path, opts = {}) {\n  assert(ctx, 'koa context required')\n  assert(path, 'pathname required')\n\n  // options\n  debug('send \"%s\" %j', path, opts)\n  const root = opts.root ? normalize(resolve(opts.root)) : ''\n  const trailingSlash = path[path.length - 1] === '/'\n  path = path.substr(parse(path).root.length)\n  const index = opts.index\n  const maxage = opts.maxage || opts.maxAge || 0\n  const immutable = opts.immutable || false\n  const hidden = opts.hidden || false\n  const format = opts.format !== false\n  const extensions = Array.isArray(opts.extensions) ? opts.extensions : false\n  const brotli = opts.brotli !== false\n  const gzip = opts.gzip !== false\n  const setHeaders = opts.setHeaders\n\n  if (setHeaders && typeof setHeaders !== 'function') {\n    throw new TypeError('option setHeaders must be function')\n  }\n\n  // normalize path\n  path = decode(path)\n\n  if (path === -1) return ctx.throw(400, 'failed to decode')\n\n  // index file support\n  if (index && trailingSlash) path += index\n\n  path = resolvePath(root, path)\n\n  // hidden file support, ignore\n  if (!hidden && isHidden(root, path)) return\n\n  let encodingExt = ''\n  // serve brotli file when possible otherwise gzipped file when possible\n  if (ctx.acceptsEncodings('br', 'identity') === 'br' && brotli && (await exists(path + '.br'))) {\n    path = path + '.br'\n    ctx.set('Content-Encoding', 'br')\n    ctx.res.removeHeader('Content-Length')\n    encodingExt = '.br'\n  } else if (ctx.acceptsEncodings('gzip', 'identity') === 'gzip' && gzip && (await exists(path + '.gz'))) {\n    path = path + '.gz'\n    ctx.set('Content-Encoding', 'gzip')\n    ctx.res.removeHeader('Content-Length')\n    encodingExt = '.gz'\n  }\n\n  if (extensions && !/\\./.exec(basename(path))) {\n    const list = [].concat(extensions)\n    for (let i = 0; i < list.length; i++) {\n      let ext = list[i]\n      if (typeof ext !== 'string') {\n        throw new TypeError('option extensions must be array of strings or false')\n      }\n      if (!/^\\./.exec(ext)) ext = `.${ext}`\n      if (await exists(`${path}${ext}`)) {\n        path = `${path}${ext}`\n        break\n      }\n    }\n  }\n\n  // stat\n  let stats\n  try {\n    stats = await stat(path)\n\n    // Format the path to serve static file servers\n    // and not require a trailing slash for directories,\n    // so that you can do both `/directory` and `/directory/`\n    if (stats.isDirectory()) {\n      if (format && index) {\n        path += `/${index}`\n        stats = await stat(path)\n      } else {\n        return\n      }\n    }\n  } catch (err) {\n    const notfound = ['ENOENT', 'ENAMETOOLONG', 'ENOTDIR']\n    if (notfound.includes(err.code)) {\n      throw createError(404, err)\n    }\n    err.status = 500\n    throw err\n  }\n\n  if (setHeaders) setHeaders(ctx.res, path, stats)\n\n  // stream\n  ctx.set('Content-Length', stats.size)\n  if (!ctx.response.get('Last-Modified')) ctx.set('Last-Modified', stats.mtime.toUTCString())\n  if (!ctx.response.get('Cache-Control')) {\n    const directives = [`max-age=${(maxage / 1000 | 0)}`]\n    if (immutable) {\n      directives.push('immutable')\n    }\n    ctx.set('Cache-Control', directives.join(','))\n  }\n  if (!ctx.type) ctx.type = type(path, encodingExt)\n  ctx.body = fs.createReadStream(path)\n\n  return path\n}\n\n/**\n * Check if it's hidden.\n */\n\nfunction isHidden (root, path) {\n  path = path.substr(root.length).split(sep)\n  for (let i = 0; i < path.length; i++) {\n    if (path[i][0] === '.') return true\n  }\n  return false\n}\n\n/**\n * File type.\n */\n\nfunction type (file, ext) {\n  return ext !== '' ? extname(basename(file, ext)) : extname(file)\n}\n\n/**\n * Decode `path`.\n */\n\nfunction decode (path) {\n  try {\n    return decodeURIComponent(path)\n  } catch (err) {\n    return -1\n  }\n}\n\n\n//# sourceURL=webpack://simple-ssr-study/./node_modules/koa-send/index.js?");

/***/ }),

/***/ "./node_modules/koa-static/index.js":
/*!******************************************!*\
  !*** ./node_modules/koa-static/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n\n/**\n * Module dependencies.\n */\n\nconst debug = __webpack_require__(/*! debug */ \"debug\")('koa-static')\nconst { resolve } = __webpack_require__(/*! path */ \"path\")\nconst assert = __webpack_require__(/*! assert */ \"assert\")\nconst send = __webpack_require__(/*! koa-send */ \"./node_modules/koa-send/index.js\")\n\n/**\n * Expose `serve()`.\n */\n\nmodule.exports = serve\n\n/**\n * Serve static files from `root`.\n *\n * @param {String} root\n * @param {Object} [opts]\n * @return {Function}\n * @api public\n */\n\nfunction serve (root, opts) {\n  opts = Object.assign({}, opts)\n\n  assert(root, 'root directory is required to serve files')\n\n  // options\n  debug('static \"%s\" %j', root, opts)\n  opts.root = resolve(root)\n  if (opts.index !== false) opts.index = opts.index || 'index.html'\n\n  if (!opts.defer) {\n    return async function serve (ctx, next) {\n      let done = false\n\n      if (ctx.method === 'HEAD' || ctx.method === 'GET') {\n        try {\n          done = await send(ctx, ctx.path, opts)\n        } catch (err) {\n          if (err.status !== 404) {\n            throw err\n          }\n        }\n      }\n\n      if (!done) {\n        await next()\n      }\n    }\n  }\n\n  return async function serve (ctx, next) {\n    await next()\n\n    if (ctx.method !== 'HEAD' && ctx.method !== 'GET') return\n    // response is already handled\n    if (ctx.body != null || ctx.status !== 404) return // eslint-disable-line\n\n    try {\n      await send(ctx, ctx.path, opts)\n    } catch (err) {\n      if (err.status !== 404) {\n        throw err\n      }\n    }\n  }\n}\n\n\n//# sourceURL=webpack://simple-ssr-study/./node_modules/koa-static/index.js?");

/***/ }),

/***/ "./node_modules/resolve-path/index.js":
/*!********************************************!*\
  !*** ./node_modules/resolve-path/index.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("/*!\n * resolve-path\n * Copyright(c) 2014 Jonathan Ong\n * Copyright(c) 2015-2018 Douglas Christopher Wilson\n * MIT Licensed\n */\n\n\n\n/**\n * Module dependencies.\n * @private\n */\n\nvar createError = __webpack_require__(/*! http-errors */ \"http-errors\")\nvar join = (__webpack_require__(/*! path */ \"path\").join)\nvar normalize = (__webpack_require__(/*! path */ \"path\").normalize)\nvar pathIsAbsolute = __webpack_require__(/*! path-is-absolute */ \"path-is-absolute\")\nvar resolve = (__webpack_require__(/*! path */ \"path\").resolve)\nvar sep = (__webpack_require__(/*! path */ \"path\").sep)\n\n/**\n * Module exports.\n * @public\n */\n\nmodule.exports = resolvePath\n\n/**\n * Module variables.\n * @private\n */\n\nvar UP_PATH_REGEXP = /(?:^|[\\\\/])\\.\\.(?:[\\\\/]|$)/\n\n/**\n * Resolve relative path against a root path\n *\n * @param {string} rootPath\n * @param {string} relativePath\n * @return {string}\n * @public\n */\n\nfunction resolvePath (rootPath, relativePath) {\n  var path = relativePath\n  var root = rootPath\n\n  // root is optional, similar to root.resolve\n  if (arguments.length === 1) {\n    path = rootPath\n    root = process.cwd()\n  }\n\n  if (root == null) {\n    throw new TypeError('argument rootPath is required')\n  }\n\n  if (typeof root !== 'string') {\n    throw new TypeError('argument rootPath must be a string')\n  }\n\n  if (path == null) {\n    throw new TypeError('argument relativePath is required')\n  }\n\n  if (typeof path !== 'string') {\n    throw new TypeError('argument relativePath must be a string')\n  }\n\n  // containing NULL bytes is malicious\n  if (path.indexOf('\\0') !== -1) {\n    throw createError(400, 'Malicious Path')\n  }\n\n  // path should never be absolute\n  if (pathIsAbsolute.posix(path) || pathIsAbsolute.win32(path)) {\n    throw createError(400, 'Malicious Path')\n  }\n\n  // path outside root\n  if (UP_PATH_REGEXP.test(normalize('.' + sep + path))) {\n    throw createError(403)\n  }\n\n  // join the relative path\n  return normalize(join(resolve(root), path))\n}\n\n\n//# sourceURL=webpack://simple-ssr-study/./node_modules/resolve-path/index.js?");

/***/ }),

/***/ "debug":
/*!************************!*\
  !*** external "debug" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("debug");

/***/ }),

/***/ "http-errors":
/*!******************************!*\
  !*** external "http-errors" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("http-errors");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("koa");

/***/ }),

/***/ "path-is-absolute":
/*!***********************************!*\
  !*** external "path-is-absolute" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("path-is-absolute");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server/index.js");
/******/ 	
/******/ })()
;