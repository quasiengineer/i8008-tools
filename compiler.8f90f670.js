// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"3YCXX":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "a8fb9c35fdafe466";
module.bundle.HMR_BUNDLE_ID = "cc502a6d8f90f670";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"bqDZI":[function(require,module,exports) {
var _i8008Asm = require("i8008-asm");
onmessage = ({ data: sourceCode })=>{
    const { bytecode, errors, sourceMap } = (0, _i8008Asm.compile)(sourceCode);
    if (errors?.length) {
        postMessage({
            errors: errors.map(({ column, line, message, token })=>({
                    column: token ? token.startColumn : column,
                    row: (token ? token.startLine : line) - 1,
                    text: message
                })),
            rom: null
        });
        return;
    }
    postMessage({
        bytecode,
        errors: [],
        sourceMap
    });
};

},{"i8008-asm":"j615A"}],"j615A":[function(require,module,exports) {
const asmLexer = require("9f926dacfd876e60");
const asmParser = require("f1ae8a0a5722658f");
/*
 * Compile provided code
 *
 * Returns { symbols, bytecode, sourceMap, errors }
 */ const compile = (sourceCode)=>{
    const { tokens, errors: lexerErrors } = asmLexer.tokenize(sourceCode.toLowerCase());
    if (lexerErrors.length) return {
        errors: lexerErrors
    };
    const parsingResult = asmParser.parse(tokens);
    if (!parsingResult) {
        for (const err of asmParser.errors)if (err.token) err.line = sourceCode.split("\n")[err.token.startLine - 1];
        return {
            errors: asmParser.errors
        };
    }
    return parsingResult;
};
module.exports = {
    compile
};

},{"9f926dacfd876e60":"eCN7H","f1ae8a0a5722658f":"5QQP0"}],"eCN7H":[function(require,module,exports) {
const { Lexer } = require("9fe9d7f663c9fef");
const { allTokens } = require("c204621eb238852f");
module.exports = new Lexer(allTokens);

},{"9fe9d7f663c9fef":"jW6vA","c204621eb238852f":"6ygi6"}],"jW6vA":[function(require,module,exports) {
"use strict";
/* istanbul ignore file - tricky to import some things from this module during testing */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Parser = exports.createSyntaxDiagramsCode = exports.clearCache = exports.generateCstDts = exports.GAstVisitor = exports.serializeProduction = exports.serializeGrammar = exports.Terminal = exports.Rule = exports.RepetitionWithSeparator = exports.RepetitionMandatoryWithSeparator = exports.RepetitionMandatory = exports.Repetition = exports.Option = exports.NonTerminal = exports.Alternative = exports.Alternation = exports.defaultLexerErrorProvider = exports.NoViableAltException = exports.NotAllInputParsedException = exports.MismatchedTokenException = exports.isRecognitionException = exports.EarlyExitException = exports.defaultParserErrorProvider = exports.LLkLookaheadStrategy = exports.getLookaheadPaths = exports.tokenName = exports.tokenMatcher = exports.tokenLabel = exports.EOF = exports.createTokenInstance = exports.createToken = exports.LexerDefinitionErrorType = exports.Lexer = exports.EMPTY_ALT = exports.ParserDefinitionErrorType = exports.EmbeddedActionsParser = exports.CstParser = exports.VERSION = void 0;
// semantic version
var version_1 = require("9da5624c76aea4c1");
Object.defineProperty(exports, "VERSION", {
    enumerable: true,
    get: function() {
        return version_1.VERSION;
    }
});
var parser_1 = require("1ed066d663a94316");
Object.defineProperty(exports, "CstParser", {
    enumerable: true,
    get: function() {
        return parser_1.CstParser;
    }
});
Object.defineProperty(exports, "EmbeddedActionsParser", {
    enumerable: true,
    get: function() {
        return parser_1.EmbeddedActionsParser;
    }
});
Object.defineProperty(exports, "ParserDefinitionErrorType", {
    enumerable: true,
    get: function() {
        return parser_1.ParserDefinitionErrorType;
    }
});
Object.defineProperty(exports, "EMPTY_ALT", {
    enumerable: true,
    get: function() {
        return parser_1.EMPTY_ALT;
    }
});
var lexer_public_1 = require("f143b3ee55ecf8bd");
Object.defineProperty(exports, "Lexer", {
    enumerable: true,
    get: function() {
        return lexer_public_1.Lexer;
    }
});
Object.defineProperty(exports, "LexerDefinitionErrorType", {
    enumerable: true,
    get: function() {
        return lexer_public_1.LexerDefinitionErrorType;
    }
});
// Tokens utilities
var tokens_public_1 = require("92ed40b169d6529");
Object.defineProperty(exports, "createToken", {
    enumerable: true,
    get: function() {
        return tokens_public_1.createToken;
    }
});
Object.defineProperty(exports, "createTokenInstance", {
    enumerable: true,
    get: function() {
        return tokens_public_1.createTokenInstance;
    }
});
Object.defineProperty(exports, "EOF", {
    enumerable: true,
    get: function() {
        return tokens_public_1.EOF;
    }
});
Object.defineProperty(exports, "tokenLabel", {
    enumerable: true,
    get: function() {
        return tokens_public_1.tokenLabel;
    }
});
Object.defineProperty(exports, "tokenMatcher", {
    enumerable: true,
    get: function() {
        return tokens_public_1.tokenMatcher;
    }
});
Object.defineProperty(exports, "tokenName", {
    enumerable: true,
    get: function() {
        return tokens_public_1.tokenName;
    }
});
// Lookahead
var lookahead_1 = require("97cff0362d3fe59d");
Object.defineProperty(exports, "getLookaheadPaths", {
    enumerable: true,
    get: function() {
        return lookahead_1.getLookaheadPaths;
    }
});
var llk_lookahead_1 = require("8e4b7adcd9bb767e");
Object.defineProperty(exports, "LLkLookaheadStrategy", {
    enumerable: true,
    get: function() {
        return llk_lookahead_1.LLkLookaheadStrategy;
    }
});
// Other Utilities
var errors_public_1 = require("787b192b9fa55b9a");
Object.defineProperty(exports, "defaultParserErrorProvider", {
    enumerable: true,
    get: function() {
        return errors_public_1.defaultParserErrorProvider;
    }
});
var exceptions_public_1 = require("44da99dca3829fe1");
Object.defineProperty(exports, "EarlyExitException", {
    enumerable: true,
    get: function() {
        return exceptions_public_1.EarlyExitException;
    }
});
Object.defineProperty(exports, "isRecognitionException", {
    enumerable: true,
    get: function() {
        return exceptions_public_1.isRecognitionException;
    }
});
Object.defineProperty(exports, "MismatchedTokenException", {
    enumerable: true,
    get: function() {
        return exceptions_public_1.MismatchedTokenException;
    }
});
Object.defineProperty(exports, "NotAllInputParsedException", {
    enumerable: true,
    get: function() {
        return exceptions_public_1.NotAllInputParsedException;
    }
});
Object.defineProperty(exports, "NoViableAltException", {
    enumerable: true,
    get: function() {
        return exceptions_public_1.NoViableAltException;
    }
});
var lexer_errors_public_1 = require("d37f0c401dc0caeb");
Object.defineProperty(exports, "defaultLexerErrorProvider", {
    enumerable: true,
    get: function() {
        return lexer_errors_public_1.defaultLexerErrorProvider;
    }
});
// grammar reflection API
var gast_1 = require("afeb400ee4080641");
Object.defineProperty(exports, "Alternation", {
    enumerable: true,
    get: function() {
        return gast_1.Alternation;
    }
});
Object.defineProperty(exports, "Alternative", {
    enumerable: true,
    get: function() {
        return gast_1.Alternative;
    }
});
Object.defineProperty(exports, "NonTerminal", {
    enumerable: true,
    get: function() {
        return gast_1.NonTerminal;
    }
});
Object.defineProperty(exports, "Option", {
    enumerable: true,
    get: function() {
        return gast_1.Option;
    }
});
Object.defineProperty(exports, "Repetition", {
    enumerable: true,
    get: function() {
        return gast_1.Repetition;
    }
});
Object.defineProperty(exports, "RepetitionMandatory", {
    enumerable: true,
    get: function() {
        return gast_1.RepetitionMandatory;
    }
});
Object.defineProperty(exports, "RepetitionMandatoryWithSeparator", {
    enumerable: true,
    get: function() {
        return gast_1.RepetitionMandatoryWithSeparator;
    }
});
Object.defineProperty(exports, "RepetitionWithSeparator", {
    enumerable: true,
    get: function() {
        return gast_1.RepetitionWithSeparator;
    }
});
Object.defineProperty(exports, "Rule", {
    enumerable: true,
    get: function() {
        return gast_1.Rule;
    }
});
Object.defineProperty(exports, "Terminal", {
    enumerable: true,
    get: function() {
        return gast_1.Terminal;
    }
});
// GAST Utilities
var gast_2 = require("afeb400ee4080641");
Object.defineProperty(exports, "serializeGrammar", {
    enumerable: true,
    get: function() {
        return gast_2.serializeGrammar;
    }
});
Object.defineProperty(exports, "serializeProduction", {
    enumerable: true,
    get: function() {
        return gast_2.serializeProduction;
    }
});
Object.defineProperty(exports, "GAstVisitor", {
    enumerable: true,
    get: function() {
        return gast_2.GAstVisitor;
    }
});
var cst_dts_gen_1 = require("ee427efbe9be0689");
Object.defineProperty(exports, "generateCstDts", {
    enumerable: true,
    get: function() {
        return cst_dts_gen_1.generateCstDts;
    }
});
/* istanbul ignore next */ function clearCache() {
    console.warn("The clearCache function was 'soft' removed from the Chevrotain API.\n	 It performs no action other than printing this message.\n	 Please avoid using it as it will be completely removed in the future");
}
exports.clearCache = clearCache;
var render_public_1 = require("a177e966d754e1e3");
Object.defineProperty(exports, "createSyntaxDiagramsCode", {
    enumerable: true,
    get: function() {
        return render_public_1.createSyntaxDiagramsCode;
    }
});
var Parser = /** @class */ function() {
    function Parser() {
        throw new Error("The Parser class has been deprecated, use CstParser or EmbeddedActionsParser instead.	\nSee: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_7-0-0");
    }
    return Parser;
}();
exports.Parser = Parser;

},{"9da5624c76aea4c1":"8z9me","1ed066d663a94316":"hzING","f143b3ee55ecf8bd":"dbzZf","92ed40b169d6529":"gJ9lp","97cff0362d3fe59d":"gIfFn","8e4b7adcd9bb767e":"aWq0A","787b192b9fa55b9a":"7elDj","44da99dca3829fe1":"m83wd","d37f0c401dc0caeb":"dotIP","afeb400ee4080641":"91AYQ","ee427efbe9be0689":"8ewH2","a177e966d754e1e3":"cPyqL"}],"8z9me":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.VERSION = void 0;
// needs a separate module as this is required inside chevrotain productive code
// and also in the entry point for webpack(api.ts).
// A separate file avoids cyclic dependencies and webpack errors.
exports.VERSION = "10.5.0";

},{}],"hzING":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EmbeddedActionsParser = exports.CstParser = exports.Parser = exports.EMPTY_ALT = exports.ParserDefinitionErrorType = exports.DEFAULT_RULE_CONFIG = exports.DEFAULT_PARSER_CONFIG = exports.END_OF_FILE = void 0;
var isEmpty_1 = __importDefault(require("2a12a48a4810b494"));
var map_1 = __importDefault(require("43a58be46eb63f16"));
var forEach_1 = __importDefault(require("fa4480fc8797225e"));
var values_1 = __importDefault(require("8537ce97c69274af"));
var has_1 = __importDefault(require("8e055fff7b382244"));
var clone_1 = __importDefault(require("9ca0987e738b7536"));
var utils_1 = require("5cea8bcc7b95a788");
var follow_1 = require("5c9fa3108970a58e");
var tokens_public_1 = require("871e456e32ba234b");
var errors_public_1 = require("b75d43b8704854af");
var gast_resolver_public_1 = require("9b10d64e2aa9598d");
var recoverable_1 = require("6baaca38bc73f3f5");
var looksahead_1 = require("52b972fe1c6e8427");
var tree_builder_1 = require("1360d055ca5f392b");
var lexer_adapter_1 = require("ca49c1bf5b6b4e24");
var recognizer_api_1 = require("51feaa902c9b0980");
var recognizer_engine_1 = require("7f416cf27d6e3f1b");
var error_handler_1 = require("bf27ec6527126470");
var context_assist_1 = require("a853e81e2cfe769");
var gast_recorder_1 = require("6daf07dcd79b3ed8");
var perf_tracer_1 = require("4088b63f6dd11216");
var apply_mixins_1 = require("431f3aba01bec5bc");
var checks_1 = require("bb9c324105668840");
exports.END_OF_FILE = (0, tokens_public_1.createTokenInstance)(tokens_public_1.EOF, "", NaN, NaN, NaN, NaN, NaN, NaN);
Object.freeze(exports.END_OF_FILE);
exports.DEFAULT_PARSER_CONFIG = Object.freeze({
    recoveryEnabled: false,
    maxLookahead: 3,
    dynamicTokensEnabled: false,
    outputCst: true,
    errorMessageProvider: errors_public_1.defaultParserErrorProvider,
    nodeLocationTracking: "none",
    traceInitPerf: false,
    skipValidations: false
});
exports.DEFAULT_RULE_CONFIG = Object.freeze({
    recoveryValueFunc: function() {
        return undefined;
    },
    resyncEnabled: true
});
var ParserDefinitionErrorType;
(function(ParserDefinitionErrorType) {
    ParserDefinitionErrorType[ParserDefinitionErrorType["INVALID_RULE_NAME"] = 0] = "INVALID_RULE_NAME";
    ParserDefinitionErrorType[ParserDefinitionErrorType["DUPLICATE_RULE_NAME"] = 1] = "DUPLICATE_RULE_NAME";
    ParserDefinitionErrorType[ParserDefinitionErrorType["INVALID_RULE_OVERRIDE"] = 2] = "INVALID_RULE_OVERRIDE";
    ParserDefinitionErrorType[ParserDefinitionErrorType["DUPLICATE_PRODUCTIONS"] = 3] = "DUPLICATE_PRODUCTIONS";
    ParserDefinitionErrorType[ParserDefinitionErrorType["UNRESOLVED_SUBRULE_REF"] = 4] = "UNRESOLVED_SUBRULE_REF";
    ParserDefinitionErrorType[ParserDefinitionErrorType["LEFT_RECURSION"] = 5] = "LEFT_RECURSION";
    ParserDefinitionErrorType[ParserDefinitionErrorType["NONE_LAST_EMPTY_ALT"] = 6] = "NONE_LAST_EMPTY_ALT";
    ParserDefinitionErrorType[ParserDefinitionErrorType["AMBIGUOUS_ALTS"] = 7] = "AMBIGUOUS_ALTS";
    ParserDefinitionErrorType[ParserDefinitionErrorType["CONFLICT_TOKENS_RULES_NAMESPACE"] = 8] = "CONFLICT_TOKENS_RULES_NAMESPACE";
    ParserDefinitionErrorType[ParserDefinitionErrorType["INVALID_TOKEN_NAME"] = 9] = "INVALID_TOKEN_NAME";
    ParserDefinitionErrorType[ParserDefinitionErrorType["NO_NON_EMPTY_LOOKAHEAD"] = 10] = "NO_NON_EMPTY_LOOKAHEAD";
    ParserDefinitionErrorType[ParserDefinitionErrorType["AMBIGUOUS_PREFIX_ALTS"] = 11] = "AMBIGUOUS_PREFIX_ALTS";
    ParserDefinitionErrorType[ParserDefinitionErrorType["TOO_MANY_ALTS"] = 12] = "TOO_MANY_ALTS";
    ParserDefinitionErrorType[ParserDefinitionErrorType["CUSTOM_LOOKAHEAD_VALIDATION"] = 13] = "CUSTOM_LOOKAHEAD_VALIDATION";
})(ParserDefinitionErrorType = exports.ParserDefinitionErrorType || (exports.ParserDefinitionErrorType = {}));
function EMPTY_ALT(value) {
    if (value === void 0) value = undefined;
    return function() {
        return value;
    };
}
exports.EMPTY_ALT = EMPTY_ALT;
var Parser = /** @class */ function() {
    function Parser(tokenVocabulary, config) {
        this.definitionErrors = [];
        this.selfAnalysisDone = false;
        var that = this;
        that.initErrorHandler(config);
        that.initLexerAdapter();
        that.initLooksAhead(config);
        that.initRecognizerEngine(tokenVocabulary, config);
        that.initRecoverable(config);
        that.initTreeBuilder(config);
        that.initContentAssist();
        that.initGastRecorder(config);
        that.initPerformanceTracer(config);
        if ((0, has_1.default)(config, "ignoredIssues")) throw new Error("The <ignoredIssues> IParserConfig property has been deprecated.\n	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.\n	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES\n	For further details.");
        this.skipValidations = (0, has_1.default)(config, "skipValidations") ? config.skipValidations // casting assumes the end user passing the correct type
         : exports.DEFAULT_PARSER_CONFIG.skipValidations;
    }
    /**
     *  @deprecated use the **instance** method with the same name instead
     */ Parser.performSelfAnalysis = function(parserInstance) {
        throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.");
    };
    Parser.prototype.performSelfAnalysis = function() {
        var _this = this;
        this.TRACE_INIT("performSelfAnalysis", function() {
            var defErrorsMsgs;
            _this.selfAnalysisDone = true;
            var className = _this.className;
            _this.TRACE_INIT("toFastProps", function() {
                // Without this voodoo magic the parser would be x3-x4 slower
                // It seems it is better to invoke `toFastProperties` **before**
                // Any manipulations of the `this` object done during the recording phase.
                (0, utils_1.toFastProperties)(_this);
            });
            _this.TRACE_INIT("Grammar Recording", function() {
                try {
                    _this.enableRecording();
                    // Building the GAST
                    (0, forEach_1.default)(_this.definedRulesNames, function(currRuleName) {
                        var wrappedRule = _this[currRuleName];
                        var originalGrammarAction = wrappedRule["originalGrammarAction"];
                        var recordedRuleGast;
                        _this.TRACE_INIT("".concat(currRuleName, " Rule"), function() {
                            recordedRuleGast = _this.topLevelRuleRecord(currRuleName, originalGrammarAction);
                        });
                        _this.gastProductionsCache[currRuleName] = recordedRuleGast;
                    });
                } finally{
                    _this.disableRecording();
                }
            });
            var resolverErrors = [];
            _this.TRACE_INIT("Grammar Resolving", function() {
                resolverErrors = (0, gast_resolver_public_1.resolveGrammar)({
                    rules: (0, values_1.default)(_this.gastProductionsCache)
                });
                _this.definitionErrors = _this.definitionErrors.concat(resolverErrors);
            });
            _this.TRACE_INIT("Grammar Validations", function() {
                // only perform additional grammar validations IFF no resolving errors have occurred.
                // as unresolved grammar may lead to unhandled runtime exceptions in the follow up validations.
                if ((0, isEmpty_1.default)(resolverErrors) && _this.skipValidations === false) {
                    var validationErrors = (0, gast_resolver_public_1.validateGrammar)({
                        rules: (0, values_1.default)(_this.gastProductionsCache),
                        tokenTypes: (0, values_1.default)(_this.tokensMap),
                        errMsgProvider: errors_public_1.defaultGrammarValidatorErrorProvider,
                        grammarName: className
                    });
                    var lookaheadValidationErrors = (0, checks_1.validateLookahead)({
                        lookaheadStrategy: _this.lookaheadStrategy,
                        rules: (0, values_1.default)(_this.gastProductionsCache),
                        tokenTypes: (0, values_1.default)(_this.tokensMap),
                        grammarName: className
                    });
                    _this.definitionErrors = _this.definitionErrors.concat(validationErrors, lookaheadValidationErrors);
                }
            });
            // this analysis may fail if the grammar is not perfectly valid
            if ((0, isEmpty_1.default)(_this.definitionErrors)) {
                // The results of these computations are not needed unless error recovery is enabled.
                if (_this.recoveryEnabled) _this.TRACE_INIT("computeAllProdsFollows", function() {
                    var allFollows = (0, follow_1.computeAllProdsFollows)((0, values_1.default)(_this.gastProductionsCache));
                    _this.resyncFollows = allFollows;
                });
                _this.TRACE_INIT("ComputeLookaheadFunctions", function() {
                    var _a, _b;
                    (_b = (_a = _this.lookaheadStrategy).initialize) === null || _b === void 0 || _b.call(_a, {
                        rules: (0, values_1.default)(_this.gastProductionsCache)
                    });
                    _this.preComputeLookaheadFunctions((0, values_1.default)(_this.gastProductionsCache));
                });
            }
            if (!Parser.DEFER_DEFINITION_ERRORS_HANDLING && !(0, isEmpty_1.default)(_this.definitionErrors)) {
                defErrorsMsgs = (0, map_1.default)(_this.definitionErrors, function(defError) {
                    return defError.message;
                });
                throw new Error("Parser Definition Errors detected:\n ".concat(defErrorsMsgs.join("\n-------------------------------\n")));
            }
        });
    };
    // Set this flag to true if you don't want the Parser to throw error when problems in it's definition are detected.
    // (normally during the parser's constructor).
    // This is a design time flag, it will not affect the runtime error handling of the parser, just design time errors,
    // for example: duplicate rule names, referencing an unresolved subrule, ect...
    // This flag should not be enabled during normal usage, it is used in special situations, for example when
    // needing to display the parser definition errors in some GUI(online playground).
    Parser.DEFER_DEFINITION_ERRORS_HANDLING = false;
    return Parser;
}();
exports.Parser = Parser;
(0, apply_mixins_1.applyMixins)(Parser, [
    recoverable_1.Recoverable,
    looksahead_1.LooksAhead,
    tree_builder_1.TreeBuilder,
    lexer_adapter_1.LexerAdapter,
    recognizer_engine_1.RecognizerEngine,
    recognizer_api_1.RecognizerApi,
    error_handler_1.ErrorHandler,
    context_assist_1.ContentAssist,
    gast_recorder_1.GastRecorder,
    perf_tracer_1.PerformanceTracer
]);
var CstParser = /** @class */ function(_super) {
    __extends(CstParser, _super);
    function CstParser(tokenVocabulary, config) {
        if (config === void 0) config = exports.DEFAULT_PARSER_CONFIG;
        var configClone = (0, clone_1.default)(config);
        configClone.outputCst = true;
        return _super.call(this, tokenVocabulary, configClone) || this;
    }
    return CstParser;
}(Parser);
exports.CstParser = CstParser;
var EmbeddedActionsParser = /** @class */ function(_super) {
    __extends(EmbeddedActionsParser, _super);
    function EmbeddedActionsParser(tokenVocabulary, config) {
        if (config === void 0) config = exports.DEFAULT_PARSER_CONFIG;
        var configClone = (0, clone_1.default)(config);
        configClone.outputCst = false;
        return _super.call(this, tokenVocabulary, configClone) || this;
    }
    return EmbeddedActionsParser;
}(Parser);
exports.EmbeddedActionsParser = EmbeddedActionsParser;

},{"2a12a48a4810b494":"HRoQ8","43a58be46eb63f16":"68KdA","fa4480fc8797225e":"cQbs0","8537ce97c69274af":"7Uoc6","8e055fff7b382244":"j5BJo","9ca0987e738b7536":"dIp0d","5cea8bcc7b95a788":"eKRSC","5c9fa3108970a58e":"7VVKW","871e456e32ba234b":"gJ9lp","b75d43b8704854af":"7elDj","9b10d64e2aa9598d":"7b7Lx","6baaca38bc73f3f5":"3EuTJ","52b972fe1c6e8427":"e63ba","1360d055ca5f392b":"iWmnt","ca49c1bf5b6b4e24":"ll3Gp","51feaa902c9b0980":"1GnzL","7f416cf27d6e3f1b":"fdnvM","bf27ec6527126470":"4l0sw","a853e81e2cfe769":"aI1ZS","6daf07dcd79b3ed8":"33RHB","4088b63f6dd11216":"1iTCW","431f3aba01bec5bc":"iiAAN","bb9c324105668840":"4teh8"}],"HRoQ8":[function(require,module,exports) {
var baseKeys = require("a008df59f82d2c8f"), getTag = require("d63799a808049d04"), isArguments = require("1f4ee6aee3a7eae0"), isArray = require("b708be4f72c2a706"), isArrayLike = require("ab4b4eaf96f9163a"), isBuffer = require("80b58ade5ee2f70"), isPrototype = require("3a444e8bd8b275f2"), isTypedArray = require("6af418b3352c301b");
/** `Object#toString` result references. */ var mapTag = "[object Map]", setTag = "[object Set]";
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */ function isEmpty(value) {
    if (value == null) return true;
    if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) return !value.length;
    var tag = getTag(value);
    if (tag == mapTag || tag == setTag) return !value.size;
    if (isPrototype(value)) return !baseKeys(value).length;
    for(var key in value){
        if (hasOwnProperty.call(value, key)) return false;
    }
    return true;
}
module.exports = isEmpty;

},{"a008df59f82d2c8f":"8FTe9","d63799a808049d04":"8oVUa","1f4ee6aee3a7eae0":"4Ud5I","b708be4f72c2a706":"csCQN","ab4b4eaf96f9163a":"f1oKE","80b58ade5ee2f70":"2u9cd","3a444e8bd8b275f2":"5r2uA","6af418b3352c301b":"jlXoN"}],"8FTe9":[function(require,module,exports) {
var isPrototype = require("7da6298814f9bd95"), nativeKeys = require("3ec652610d8dd5d3");
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */ function baseKeys(object) {
    if (!isPrototype(object)) return nativeKeys(object);
    var result = [];
    for(var key in Object(object))if (hasOwnProperty.call(object, key) && key != "constructor") result.push(key);
    return result;
}
module.exports = baseKeys;

},{"7da6298814f9bd95":"5r2uA","3ec652610d8dd5d3":"lkcOq"}],"5r2uA":[function(require,module,exports) {
/** Used for built-in method references. */ var objectProto = Object.prototype;
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */ function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
    return value === proto;
}
module.exports = isPrototype;

},{}],"lkcOq":[function(require,module,exports) {
var overArg = require("aa3357c7a3889df");
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeKeys = overArg(Object.keys, Object);
module.exports = nativeKeys;

},{"aa3357c7a3889df":"ebmVr"}],"ebmVr":[function(require,module,exports) {
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */ function overArg(func, transform) {
    return function(arg) {
        return func(transform(arg));
    };
}
module.exports = overArg;

},{}],"8oVUa":[function(require,module,exports) {
var DataView = require("7f038695b2fdb86e"), Map = require("28e3344aae951f13"), Promise = require("b286298be5b1d9a4"), Set = require("3ae50c158f89813"), WeakMap = require("9f458755f627d456"), baseGetTag = require("8e9160b373d7fe66"), toSource = require("b210627dd951641f");
/** `Object#toString` result references. */ var mapTag = "[object Map]", objectTag = "[object Object]", promiseTag = "[object Promise]", setTag = "[object Set]", weakMapTag = "[object WeakMap]";
var dataViewTag = "[object DataView]";
/** Used to detect maps, sets, and weakmaps. */ var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map), promiseCtorString = toSource(Promise), setCtorString = toSource(Set), weakMapCtorString = toSource(WeakMap);
/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ var getTag = baseGetTag;
// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set) != setTag || WeakMap && getTag(new WeakMap) != weakMapTag) getTag = function(value) {
    var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : undefined, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) switch(ctorString){
        case dataViewCtorString:
            return dataViewTag;
        case mapCtorString:
            return mapTag;
        case promiseCtorString:
            return promiseTag;
        case setCtorString:
            return setTag;
        case weakMapCtorString:
            return weakMapTag;
    }
    return result;
};
module.exports = getTag;

},{"7f038695b2fdb86e":"6pYag","28e3344aae951f13":"azSle","b286298be5b1d9a4":"cSWPH","3ae50c158f89813":"4jhxb","9f458755f627d456":"eG0Tx","8e9160b373d7fe66":"gVnZH","b210627dd951641f":"4RRxo"}],"6pYag":[function(require,module,exports) {
var getNative = require("a6517d0448dad786"), root = require("f83c375075418382");
/* Built-in method references that are verified to be native. */ var DataView = getNative(root, "DataView");
module.exports = DataView;

},{"a6517d0448dad786":"78CtN","f83c375075418382":"nb9VO"}],"78CtN":[function(require,module,exports) {
var baseIsNative = require("63e3f1300cdc459f"), getValue = require("16db51a0e009bd8c");
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */ function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
}
module.exports = getNative;

},{"63e3f1300cdc459f":"lD8XV","16db51a0e009bd8c":"fhSjQ"}],"lD8XV":[function(require,module,exports) {
var isFunction = require("2f9b4543c84c6692"), isMasked = require("cabbc2adfaeb27d9"), isObject = require("cbb5703fe1562e7f"), toSource = require("388b819f47a43aa5");
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */ var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */ var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used for built-in method references. */ var funcProto = Function.prototype, objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */ var funcToString = funcProto.toString;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to detect if a method is native. */ var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */ function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) return false;
    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
}
module.exports = baseIsNative;

},{"2f9b4543c84c6692":"kIUl2","cabbc2adfaeb27d9":"6MJx2","cbb5703fe1562e7f":"aKVxX","388b819f47a43aa5":"4RRxo"}],"kIUl2":[function(require,module,exports) {
var baseGetTag = require("5419308bd9194e11"), isObject = require("3cba3c966459d528");
/** `Object#toString` result references. */ var asyncTag = "[object AsyncFunction]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */ function isFunction(value) {
    if (!isObject(value)) return false;
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
module.exports = isFunction;

},{"5419308bd9194e11":"gVnZH","3cba3c966459d528":"aKVxX"}],"gVnZH":[function(require,module,exports) {
var Symbol = require("68a84eb98c5d3fa2"), getRawTag = require("9b2aaf31b7bdd837"), objectToString = require("46d5beb3375f8a28");
/** `Object#toString` result references. */ var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
/** Built-in value references. */ var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ function baseGetTag(value) {
    if (value == null) return value === undefined ? undefinedTag : nullTag;
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
module.exports = baseGetTag;

},{"68a84eb98c5d3fa2":"UuuqQ","9b2aaf31b7bdd837":"6dYWD","46d5beb3375f8a28":"fYilV"}],"UuuqQ":[function(require,module,exports) {
var root = require("9ff1abd51ad45ac0");
/** Built-in value references. */ var Symbol = root.Symbol;
module.exports = Symbol;

},{"9ff1abd51ad45ac0":"nb9VO"}],"nb9VO":[function(require,module,exports) {
var freeGlobal = require("cd92e8811deaabf5");
/** Detect free variable `self`. */ var freeSelf = typeof self == "object" && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var root = freeGlobal || freeSelf || Function("return this")();
module.exports = root;

},{"cd92e8811deaabf5":"j7wjC"}],"j7wjC":[function(require,module,exports) {
/** Detect free variable `global` from Node.js. */ var global = arguments[3];
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
module.exports = freeGlobal;

},{}],"6dYWD":[function(require,module,exports) {
var Symbol = require("e9b4533b2a68f814");
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var nativeObjectToString = objectProto.toString;
/** Built-in value references. */ var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */ function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    try {
        value[symToStringTag] = undefined;
        var unmasked = true;
    } catch (e) {}
    var result = nativeObjectToString.call(value);
    if (unmasked) {
        if (isOwn) value[symToStringTag] = tag;
        else delete value[symToStringTag];
    }
    return result;
}
module.exports = getRawTag;

},{"e9b4533b2a68f814":"UuuqQ"}],"fYilV":[function(require,module,exports) {
/** Used for built-in method references. */ var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var nativeObjectToString = objectProto.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */ function objectToString(value) {
    return nativeObjectToString.call(value);
}
module.exports = objectToString;

},{}],"aKVxX":[function(require,module,exports) {
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ function isObject(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
}
module.exports = isObject;

},{}],"6MJx2":[function(require,module,exports) {
var coreJsData = require("2fa6c734b0792bcf");
/** Used to detect methods masquerading as native. */ var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
}();
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */ function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
}
module.exports = isMasked;

},{"2fa6c734b0792bcf":"l9N4k"}],"l9N4k":[function(require,module,exports) {
var root = require("2f0959b2c20d7fb0");
/** Used to detect overreaching core-js shims. */ var coreJsData = root["__core-js_shared__"];
module.exports = coreJsData;

},{"2f0959b2c20d7fb0":"nb9VO"}],"4RRxo":[function(require,module,exports) {
/** Used for built-in method references. */ var funcProto = Function.prototype;
/** Used to resolve the decompiled source of functions. */ var funcToString = funcProto.toString;
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */ function toSource(func) {
    if (func != null) {
        try {
            return funcToString.call(func);
        } catch (e) {}
        try {
            return func + "";
        } catch (e) {}
    }
    return "";
}
module.exports = toSource;

},{}],"fhSjQ":[function(require,module,exports) {
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */ function getValue(object, key) {
    return object == null ? undefined : object[key];
}
module.exports = getValue;

},{}],"azSle":[function(require,module,exports) {
var getNative = require("ed0752fe9f482107"), root = require("29224713b8d411e6");
/* Built-in method references that are verified to be native. */ var Map = getNative(root, "Map");
module.exports = Map;

},{"ed0752fe9f482107":"78CtN","29224713b8d411e6":"nb9VO"}],"cSWPH":[function(require,module,exports) {
var getNative = require("6940648d854355b5"), root = require("a5c6637bac681a0");
/* Built-in method references that are verified to be native. */ var Promise = getNative(root, "Promise");
module.exports = Promise;

},{"6940648d854355b5":"78CtN","a5c6637bac681a0":"nb9VO"}],"4jhxb":[function(require,module,exports) {
var getNative = require("56b792d64741a4ff"), root = require("ca486d41cdf819d4");
/* Built-in method references that are verified to be native. */ var Set = getNative(root, "Set");
module.exports = Set;

},{"56b792d64741a4ff":"78CtN","ca486d41cdf819d4":"nb9VO"}],"eG0Tx":[function(require,module,exports) {
var getNative = require("4507415bd8810d3c"), root = require("7a9a6581834a8452");
/* Built-in method references that are verified to be native. */ var WeakMap = getNative(root, "WeakMap");
module.exports = WeakMap;

},{"4507415bd8810d3c":"78CtN","7a9a6581834a8452":"nb9VO"}],"4Ud5I":[function(require,module,exports) {
var baseIsArguments = require("b56e5b7d86069686"), isObjectLike = require("bead821d6af018b5");
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/** Built-in value references. */ var propertyIsEnumerable = objectProto.propertyIsEnumerable;
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */ var isArguments = baseIsArguments(function() {
    return arguments;
}()) ? baseIsArguments : function(value) {
    return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
};
module.exports = isArguments;

},{"b56e5b7d86069686":"hGZW4","bead821d6af018b5":"gu57I"}],"hGZW4":[function(require,module,exports) {
var baseGetTag = require("7e8612a4a451f2cc"), isObjectLike = require("b6cdbe52dcf709f8");
/** `Object#toString` result references. */ var argsTag = "[object Arguments]";
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */ function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag;
}
module.exports = baseIsArguments;

},{"7e8612a4a451f2cc":"gVnZH","b6cdbe52dcf709f8":"gu57I"}],"gu57I":[function(require,module,exports) {
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return value != null && typeof value == "object";
}
module.exports = isObjectLike;

},{}],"csCQN":[function(require,module,exports) {
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */ var isArray = Array.isArray;
module.exports = isArray;

},{}],"f1oKE":[function(require,module,exports) {
var isFunction = require("bb060d4356645330"), isLength = require("f3db08d4d1110aaf");
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */ function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
}
module.exports = isArrayLike;

},{"bb060d4356645330":"kIUl2","f3db08d4d1110aaf":"kx83g"}],"kx83g":[function(require,module,exports) {
/** Used as references for various `Number` constants. */ var MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */ function isLength(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
module.exports = isLength;

},{}],"2u9cd":[function(require,module,exports) {
var root = require("cef5ec6f0da1ab00"), stubFalse = require("a1e87b138cf75d1d");
/** Detect free variable `exports`. */ var freeExports = exports && !exports.nodeType && exports;
/** Detect free variable `module`. */ var freeModule = freeExports && true && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */ var Buffer = moduleExports ? root.Buffer : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */ var isBuffer = nativeIsBuffer || stubFalse;
module.exports = isBuffer;

},{"cef5ec6f0da1ab00":"nb9VO","a1e87b138cf75d1d":"5fd5d"}],"5fd5d":[function(require,module,exports) {
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */ function stubFalse() {
    return false;
}
module.exports = stubFalse;

},{}],"jlXoN":[function(require,module,exports) {
var baseIsTypedArray = require("75a26f037e65be61"), baseUnary = require("903f50eb1c16d257"), nodeUtil = require("fa49853a82034c30");
/* Node.js helper references. */ var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */ var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
module.exports = isTypedArray;

},{"75a26f037e65be61":"l1GMj","903f50eb1c16d257":"9lPWq","fa49853a82034c30":"34Uar"}],"l1GMj":[function(require,module,exports) {
var baseGetTag = require("67544c3df364a802"), isLength = require("f661b3a120d7a4cb"), isObjectLike = require("cdd86c83797c0618");
/** `Object#toString` result references. */ var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
/** Used to identify `toStringTag` values of typed arrays. */ var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */ function baseIsTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
module.exports = baseIsTypedArray;

},{"67544c3df364a802":"gVnZH","f661b3a120d7a4cb":"kx83g","cdd86c83797c0618":"gu57I"}],"9lPWq":[function(require,module,exports) {
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */ function baseUnary(func) {
    return function(value) {
        return func(value);
    };
}
module.exports = baseUnary;

},{}],"34Uar":[function(require,module,exports) {
var freeGlobal = require("94e753dfbe54816e");
/** Detect free variable `exports`. */ var freeExports = exports && !exports.nodeType && exports;
/** Detect free variable `module`. */ var freeModule = freeExports && true && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
/** Detect free variable `process` from Node.js. */ var freeProcess = moduleExports && freeGlobal.process;
/** Used to access faster Node.js helpers. */ var nodeUtil = function() {
    try {
        // Use `util.types` for Node.js 10+.
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) return types;
        // Legacy `process.binding('util')` for Node.js < 10.
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {}
}();
module.exports = nodeUtil;

},{"94e753dfbe54816e":"j7wjC"}],"68KdA":[function(require,module,exports) {
var arrayMap = require("61518c8bb036dd9b"), baseIteratee = require("8bad46685c8864d"), baseMap = require("51c76ab24fdb66f9"), isArray = require("7cb4cacc4dea406c");
/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */ function map(collection, iteratee) {
    var func = isArray(collection) ? arrayMap : baseMap;
    return func(collection, baseIteratee(iteratee, 3));
}
module.exports = map;

},{"61518c8bb036dd9b":"7ZLP0","8bad46685c8864d":"ant2T","51c76ab24fdb66f9":"az2Fm","7cb4cacc4dea406c":"csCQN"}],"7ZLP0":[function(require,module,exports) {
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */ function arrayMap(array, iteratee) {
    var index = -1, length = array == null ? 0 : array.length, result = Array(length);
    while(++index < length)result[index] = iteratee(array[index], index, array);
    return result;
}
module.exports = arrayMap;

},{}],"ant2T":[function(require,module,exports) {
var baseMatches = require("30aeab910fab669"), baseMatchesProperty = require("4f010869f7b63154"), identity = require("28f06147d1eb9502"), isArray = require("3c56f88c4debf449"), property = require("aee920e0ef5bf111");
/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */ function baseIteratee(value) {
    // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
    // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
    if (typeof value == "function") return value;
    if (value == null) return identity;
    if (typeof value == "object") return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
    return property(value);
}
module.exports = baseIteratee;

},{"30aeab910fab669":"in61g","4f010869f7b63154":"k85mg","28f06147d1eb9502":"5rttf","3c56f88c4debf449":"csCQN","aee920e0ef5bf111":"2X6He"}],"in61g":[function(require,module,exports) {
var baseIsMatch = require("e45515c903dc8f87"), getMatchData = require("89e9034a8071e297"), matchesStrictComparable = require("782598b150762386");
/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */ function baseMatches(source) {
    var matchData = getMatchData(source);
    if (matchData.length == 1 && matchData[0][2]) return matchesStrictComparable(matchData[0][0], matchData[0][1]);
    return function(object) {
        return object === source || baseIsMatch(object, source, matchData);
    };
}
module.exports = baseMatches;

},{"e45515c903dc8f87":"kEiNR","89e9034a8071e297":"2QfV6","782598b150762386":"7y3Vg"}],"kEiNR":[function(require,module,exports) {
var Stack = require("ae43062900bf7e4d"), baseIsEqual = require("9003c0cc8ac007b6");
/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */ function baseIsMatch(object, source, matchData, customizer) {
    var index = matchData.length, length = index, noCustomizer = !customizer;
    if (object == null) return !length;
    object = Object(object);
    while(index--){
        var data = matchData[index];
        if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) return false;
    }
    while(++index < length){
        data = matchData[index];
        var key = data[0], objValue = object[key], srcValue = data[1];
        if (noCustomizer && data[2]) {
            if (objValue === undefined && !(key in object)) return false;
        } else {
            var stack = new Stack;
            if (customizer) var result = customizer(objValue, srcValue, key, object, source, stack);
            if (!(result === undefined ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) return false;
        }
    }
    return true;
}
module.exports = baseIsMatch;

},{"ae43062900bf7e4d":"2jA4g","9003c0cc8ac007b6":"6bOBq"}],"2jA4g":[function(require,module,exports) {
var ListCache = require("cfb30a39eead9e7e"), stackClear = require("ceda2a63c77c915"), stackDelete = require("91ee1b348d9d7172"), stackGet = require("3fe28318f65b9332"), stackHas = require("724ca4def8b84e06"), stackSet = require("e9ceacb40d9582bd");
/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function Stack(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
}
// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype["delete"] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
module.exports = Stack;

},{"cfb30a39eead9e7e":"jDlE1","ceda2a63c77c915":"5jZcg","91ee1b348d9d7172":"85Mr7","3fe28318f65b9332":"iRb6K","724ca4def8b84e06":"4Menm","e9ceacb40d9582bd":"sgp0q"}],"jDlE1":[function(require,module,exports) {
var listCacheClear = require("4b1a0d54aed80a7b"), listCacheDelete = require("b700cb849df2c166"), listCacheGet = require("d76dd90eead6cced"), listCacheHas = require("3d210628ba60ec8"), listCacheSet = require("76026bf2d4cfff93");
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function ListCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype["delete"] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
module.exports = ListCache;

},{"4b1a0d54aed80a7b":"fSiNh","b700cb849df2c166":"iyUD9","d76dd90eead6cced":"kL8z6","3d210628ba60ec8":"6Vg9t","76026bf2d4cfff93":"IKczL"}],"fSiNh":[function(require,module,exports) {
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */ function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
}
module.exports = listCacheClear;

},{}],"iyUD9":[function(require,module,exports) {
var assocIndexOf = require("173cad7d48c35f4f");
/** Used for built-in method references. */ var arrayProto = Array.prototype;
/** Built-in value references. */ var splice = arrayProto.splice;
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function listCacheDelete(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) return false;
    var lastIndex = data.length - 1;
    if (index == lastIndex) data.pop();
    else splice.call(data, index, 1);
    --this.size;
    return true;
}
module.exports = listCacheDelete;

},{"173cad7d48c35f4f":"anG3z"}],"anG3z":[function(require,module,exports) {
var eq = require("b38bfe408564f7a5");
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */ function assocIndexOf(array, key) {
    var length = array.length;
    while(length--){
        if (eq(array[length][0], key)) return length;
    }
    return -1;
}
module.exports = assocIndexOf;

},{"b38bfe408564f7a5":"7ctDO"}],"7ctDO":[function(require,module,exports) {
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */ function eq(value, other) {
    return value === other || value !== value && other !== other;
}
module.exports = eq;

},{}],"kL8z6":[function(require,module,exports) {
var assocIndexOf = require("c0bae780ed176e2c");
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function listCacheGet(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    return index < 0 ? undefined : data[index][1];
}
module.exports = listCacheGet;

},{"c0bae780ed176e2c":"anG3z"}],"6Vg9t":[function(require,module,exports) {
var assocIndexOf = require("7ed3d4e3adbd64a4");
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
}
module.exports = listCacheHas;

},{"7ed3d4e3adbd64a4":"anG3z"}],"IKczL":[function(require,module,exports) {
var assocIndexOf = require("5be4035c2d7ca432");
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */ function listCacheSet(key, value) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
        ++this.size;
        data.push([
            key,
            value
        ]);
    } else data[index][1] = value;
    return this;
}
module.exports = listCacheSet;

},{"5be4035c2d7ca432":"anG3z"}],"5jZcg":[function(require,module,exports) {
var ListCache = require("8a0350213da984ae");
/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */ function stackClear() {
    this.__data__ = new ListCache;
    this.size = 0;
}
module.exports = stackClear;

},{"8a0350213da984ae":"jDlE1"}],"85Mr7":[function(require,module,exports) {
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function stackDelete(key) {
    var data = this.__data__, result = data["delete"](key);
    this.size = data.size;
    return result;
}
module.exports = stackDelete;

},{}],"iRb6K":[function(require,module,exports) {
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function stackGet(key) {
    return this.__data__.get(key);
}
module.exports = stackGet;

},{}],"4Menm":[function(require,module,exports) {
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function stackHas(key) {
    return this.__data__.has(key);
}
module.exports = stackHas;

},{}],"sgp0q":[function(require,module,exports) {
var ListCache = require("4737651e99b917d2"), Map = require("1494efbafafa9552"), MapCache = require("6049e8027fe9407f");
/** Used as the size to enable large array optimizations. */ var LARGE_ARRAY_SIZE = 200;
/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */ function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
            pairs.push([
                key,
                value
            ]);
            this.size = ++data.size;
            return this;
        }
        data = this.__data__ = new MapCache(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
}
module.exports = stackSet;

},{"4737651e99b917d2":"jDlE1","1494efbafafa9552":"azSle","6049e8027fe9407f":"glxGB"}],"glxGB":[function(require,module,exports) {
var mapCacheClear = require("a5ffecfb6a8bdac1"), mapCacheDelete = require("d2967b0e32ccfa56"), mapCacheGet = require("ca21409ea89624c0"), mapCacheHas = require("f88fd07f8dd1f67d"), mapCacheSet = require("dbf3eae765642a3b");
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function MapCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype["delete"] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
module.exports = MapCache;

},{"a5ffecfb6a8bdac1":"e2tXL","d2967b0e32ccfa56":"eCGnR","ca21409ea89624c0":"1yJQS","f88fd07f8dd1f67d":"fQibk","dbf3eae765642a3b":"hT1YV"}],"e2tXL":[function(require,module,exports) {
var Hash = require("4ae82d88051cc92b"), ListCache = require("a07dcf3fd3097a0c"), Map = require("92c01c953ef00ded");
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */ function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
        "hash": new Hash,
        "map": new (Map || ListCache),
        "string": new Hash
    };
}
module.exports = mapCacheClear;

},{"4ae82d88051cc92b":"cYFEM","a07dcf3fd3097a0c":"jDlE1","92c01c953ef00ded":"azSle"}],"cYFEM":[function(require,module,exports) {
var hashClear = require("f47a1723b6e2d79b"), hashDelete = require("bc25d439ccd1fb47"), hashGet = require("f096b37295a92ab0"), hashHas = require("d88173cbc6a133c8"), hashSet = require("afb9b3bae0461cbf");
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function Hash(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype["delete"] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
module.exports = Hash;

},{"f47a1723b6e2d79b":"gkWIA","bc25d439ccd1fb47":"iz9BN","f096b37295a92ab0":"9uyQC","d88173cbc6a133c8":"3Lwp3","afb9b3bae0461cbf":"hdfNo"}],"gkWIA":[function(require,module,exports) {
var nativeCreate = require("dc294230a47ca365");
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */ function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
    this.size = 0;
}
module.exports = hashClear;

},{"dc294230a47ca365":"k4He3"}],"k4He3":[function(require,module,exports) {
var getNative = require("12f496acdffb7cf7");
/* Built-in method references that are verified to be native. */ var nativeCreate = getNative(Object, "create");
module.exports = nativeCreate;

},{"12f496acdffb7cf7":"78CtN"}],"iz9BN":[function(require,module,exports) {
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
}
module.exports = hashDelete;

},{}],"9uyQC":[function(require,module,exports) {
var nativeCreate = require("627211fa3e1596e1");
/** Used to stand-in for `undefined` hash values. */ var HASH_UNDEFINED = "__lodash_hash_undefined__";
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
    }
    return hasOwnProperty.call(data, key) ? data[key] : undefined;
}
module.exports = hashGet;

},{"627211fa3e1596e1":"k4He3"}],"3Lwp3":[function(require,module,exports) {
var nativeCreate = require("52b3f0bfeddceb45");
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}
module.exports = hashHas;

},{"52b3f0bfeddceb45":"k4He3"}],"hdfNo":[function(require,module,exports) {
var nativeCreate = require("67b7d10f53ccd515");
/** Used to stand-in for `undefined` hash values. */ var HASH_UNDEFINED = "__lodash_hash_undefined__";
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */ function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
    return this;
}
module.exports = hashSet;

},{"67b7d10f53ccd515":"k4He3"}],"eCGnR":[function(require,module,exports) {
var getMapData = require("656d8c5510e0af84");
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function mapCacheDelete(key) {
    var result = getMapData(this, key)["delete"](key);
    this.size -= result ? 1 : 0;
    return result;
}
module.exports = mapCacheDelete;

},{"656d8c5510e0af84":"iM9Mt"}],"iM9Mt":[function(require,module,exports) {
var isKeyable = require("adfdd2b4101370ed");
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */ function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
module.exports = getMapData;

},{"adfdd2b4101370ed":"6jtFS"}],"6jtFS":[function(require,module,exports) {
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */ function isKeyable(value) {
    var type = typeof value;
    return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
module.exports = isKeyable;

},{}],"1yJQS":[function(require,module,exports) {
var getMapData = require("d345cdfee2b4007d");
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function mapCacheGet(key) {
    return getMapData(this, key).get(key);
}
module.exports = mapCacheGet;

},{"d345cdfee2b4007d":"iM9Mt"}],"fQibk":[function(require,module,exports) {
var getMapData = require("29ebabd55e2d6074");
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function mapCacheHas(key) {
    return getMapData(this, key).has(key);
}
module.exports = mapCacheHas;

},{"29ebabd55e2d6074":"iM9Mt"}],"hT1YV":[function(require,module,exports) {
var getMapData = require("21c5ffca56eeb737");
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */ function mapCacheSet(key, value) {
    var data = getMapData(this, key), size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
}
module.exports = mapCacheSet;

},{"21c5ffca56eeb737":"iM9Mt"}],"6bOBq":[function(require,module,exports) {
var baseIsEqualDeep = require("bd1d38ebd4028e5a"), isObjectLike = require("809bbb0c20650dbc");
/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */ function baseIsEqual(value, other, bitmask, customizer, stack) {
    if (value === other) return true;
    if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) return value !== value && other !== other;
    return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}
module.exports = baseIsEqual;

},{"bd1d38ebd4028e5a":"5krXl","809bbb0c20650dbc":"gu57I"}],"5krXl":[function(require,module,exports) {
var Stack = require("60c73bca87468e58"), equalArrays = require("96bc8a1825db53a5"), equalByTag = require("8bdece495e87fb69"), equalObjects = require("bb94920432a68eca"), getTag = require("45495edff98e5837"), isArray = require("18256411ae9e2858"), isBuffer = require("e5ba7abf54247fc5"), isTypedArray = require("50d786bb5c7366af");
/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG = 1;
/** `Object#toString` result references. */ var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]";
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */ function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
    var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
    objTag = objTag == argsTag ? objectTag : objTag;
    othTag = othTag == argsTag ? objectTag : othTag;
    var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
    if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) return false;
        objIsArr = true;
        objIsObj = false;
    }
    if (isSameTag && !objIsObj) {
        stack || (stack = new Stack);
        return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
    }
    if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
        if (objIsWrapped || othIsWrapped) {
            var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
            stack || (stack = new Stack);
            return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
    }
    if (!isSameTag) return false;
    stack || (stack = new Stack);
    return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
module.exports = baseIsEqualDeep;

},{"60c73bca87468e58":"2jA4g","96bc8a1825db53a5":"8ubO4","8bdece495e87fb69":"7vURM","bb94920432a68eca":"krYvp","45495edff98e5837":"8oVUa","18256411ae9e2858":"csCQN","e5ba7abf54247fc5":"2u9cd","50d786bb5c7366af":"jlXoN"}],"8ubO4":[function(require,module,exports) {
var SetCache = require("9b110ce138e67ce5"), arraySome = require("1ee20de911db0cb0"), cacheHas = require("defff3d81be91b23");
/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */ function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
    if (arrLength != othLength && !(isPartial && othLength > arrLength)) return false;
    // Check that cyclic values are equal.
    var arrStacked = stack.get(array);
    var othStacked = stack.get(other);
    if (arrStacked && othStacked) return arrStacked == other && othStacked == array;
    var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache : undefined;
    stack.set(array, other);
    stack.set(other, array);
    // Ignore non-index properties.
    while(++index < arrLength){
        var arrValue = array[index], othValue = other[index];
        if (customizer) var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
        if (compared !== undefined) {
            if (compared) continue;
            result = false;
            break;
        }
        // Recursively compare arrays (susceptible to call stack limits).
        if (seen) {
            if (!arraySome(other, function(othValue, othIndex) {
                if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) return seen.push(othIndex);
            })) {
                result = false;
                break;
            }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
            result = false;
            break;
        }
    }
    stack["delete"](array);
    stack["delete"](other);
    return result;
}
module.exports = equalArrays;

},{"9b110ce138e67ce5":"2wivS","1ee20de911db0cb0":"4nlxl","defff3d81be91b23":"4k7Oh"}],"2wivS":[function(require,module,exports) {
var MapCache = require("10fe37252553d0bd"), setCacheAdd = require("9a831e81e9a1f98c"), setCacheHas = require("1a2b6c8a7399c39f");
/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */ function SetCache(values) {
    var index = -1, length = values == null ? 0 : values.length;
    this.__data__ = new MapCache;
    while(++index < length)this.add(values[index]);
}
// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
module.exports = SetCache;

},{"10fe37252553d0bd":"glxGB","9a831e81e9a1f98c":"28KbJ","1a2b6c8a7399c39f":"5ynmv"}],"28KbJ":[function(require,module,exports) {
/** Used to stand-in for `undefined` hash values. */ var HASH_UNDEFINED = "__lodash_hash_undefined__";
/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */ function setCacheAdd(value) {
    this.__data__.set(value, HASH_UNDEFINED);
    return this;
}
module.exports = setCacheAdd;

},{}],"5ynmv":[function(require,module,exports) {
/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */ function setCacheHas(value) {
    return this.__data__.has(value);
}
module.exports = setCacheHas;

},{}],"4nlxl":[function(require,module,exports) {
/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */ function arraySome(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length;
    while(++index < length){
        if (predicate(array[index], index, array)) return true;
    }
    return false;
}
module.exports = arraySome;

},{}],"4k7Oh":[function(require,module,exports) {
/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function cacheHas(cache, key) {
    return cache.has(key);
}
module.exports = cacheHas;

},{}],"7vURM":[function(require,module,exports) {
var Symbol = require("474c1df4fc722b40"), Uint8Array = require("dbf6aa5033a0f48"), eq = require("539966708f906e61"), equalArrays = require("8142d4017f0a425f"), mapToArray = require("48cddf732eff33ba"), setToArray = require("9dc78b26c5daba20");
/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
/** `Object#toString` result references. */ var boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", mapTag = "[object Map]", numberTag = "[object Number]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]";
/** Used to convert symbols to primitives and strings. */ var symbolProto = Symbol ? Symbol.prototype : undefined, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */ function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
    switch(tag){
        case dataViewTag:
            if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) return false;
            object = object.buffer;
            other = other.buffer;
        case arrayBufferTag:
            if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) return false;
            return true;
        case boolTag:
        case dateTag:
        case numberTag:
            // Coerce booleans to `1` or `0` and dates to milliseconds.
            // Invalid dates are coerced to `NaN`.
            return eq(+object, +other);
        case errorTag:
            return object.name == other.name && object.message == other.message;
        case regexpTag:
        case stringTag:
            // Coerce regexes to strings and treat strings, primitives and objects,
            // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
            // for more details.
            return object == other + "";
        case mapTag:
            var convert = mapToArray;
        case setTag:
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
            convert || (convert = setToArray);
            if (object.size != other.size && !isPartial) return false;
            // Assume cyclic values are equal.
            var stacked = stack.get(object);
            if (stacked) return stacked == other;
            bitmask |= COMPARE_UNORDERED_FLAG;
            // Recursively compare objects (susceptible to call stack limits).
            stack.set(object, other);
            var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
            stack["delete"](object);
            return result;
        case symbolTag:
            if (symbolValueOf) return symbolValueOf.call(object) == symbolValueOf.call(other);
    }
    return false;
}
module.exports = equalByTag;

},{"474c1df4fc722b40":"UuuqQ","dbf6aa5033a0f48":"ejY13","539966708f906e61":"7ctDO","8142d4017f0a425f":"8ubO4","48cddf732eff33ba":"6xE8U","9dc78b26c5daba20":"8VA79"}],"ejY13":[function(require,module,exports) {
var root = require("f755339301d6568f");
/** Built-in value references. */ var Uint8Array = root.Uint8Array;
module.exports = Uint8Array;

},{"f755339301d6568f":"nb9VO"}],"6xE8U":[function(require,module,exports) {
/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */ function mapToArray(map) {
    var index = -1, result = Array(map.size);
    map.forEach(function(value, key) {
        result[++index] = [
            key,
            value
        ];
    });
    return result;
}
module.exports = mapToArray;

},{}],"8VA79":[function(require,module,exports) {
/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */ function setToArray(set) {
    var index = -1, result = Array(set.size);
    set.forEach(function(value) {
        result[++index] = value;
    });
    return result;
}
module.exports = setToArray;

},{}],"krYvp":[function(require,module,exports) {
var getAllKeys = require("b911593d305cf4a2");
/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG = 1;
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */ function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
    if (objLength != othLength && !isPartial) return false;
    var index = objLength;
    while(index--){
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) return false;
    }
    // Check that cyclic values are equal.
    var objStacked = stack.get(object);
    var othStacked = stack.get(other);
    if (objStacked && othStacked) return objStacked == other && othStacked == object;
    var result = true;
    stack.set(object, other);
    stack.set(other, object);
    var skipCtor = isPartial;
    while(++index < objLength){
        key = objProps[index];
        var objValue = object[key], othValue = other[key];
        if (customizer) var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        // Recursively compare objects (susceptible to call stack limits).
        if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
            result = false;
            break;
        }
        skipCtor || (skipCtor = key == "constructor");
    }
    if (result && !skipCtor) {
        var objCtor = object.constructor, othCtor = other.constructor;
        // Non `Object` object instances with different constructors are not equal.
        if (objCtor != othCtor && "constructor" in object && "constructor" in other && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) result = false;
    }
    stack["delete"](object);
    stack["delete"](other);
    return result;
}
module.exports = equalObjects;

},{"b911593d305cf4a2":"3Jg3v"}],"3Jg3v":[function(require,module,exports) {
var baseGetAllKeys = require("c3dbe402f6996a21"), getSymbols = require("aa79b69a13f924db"), keys = require("e3ad83e53433bc8a");
/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */ function getAllKeys(object) {
    return baseGetAllKeys(object, keys, getSymbols);
}
module.exports = getAllKeys;

},{"c3dbe402f6996a21":"epi8x","aa79b69a13f924db":"4ltOG","e3ad83e53433bc8a":"2MKLE"}],"epi8x":[function(require,module,exports) {
var arrayPush = require("abfc70b400ed76c2"), isArray = require("148b85918856c33a");
/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */ function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}
module.exports = baseGetAllKeys;

},{"abfc70b400ed76c2":"iF3Mr","148b85918856c33a":"csCQN"}],"iF3Mr":[function(require,module,exports) {
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */ function arrayPush(array, values) {
    var index = -1, length = values.length, offset = array.length;
    while(++index < length)array[offset + index] = values[index];
    return array;
}
module.exports = arrayPush;

},{}],"4ltOG":[function(require,module,exports) {
var arrayFilter = require("7fe025254f0b7e4a"), stubArray = require("6b1c62cea92cdb9");
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Built-in value references. */ var propertyIsEnumerable = objectProto.propertyIsEnumerable;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeGetSymbols = Object.getOwnPropertySymbols;
/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */ var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
    if (object == null) return [];
    object = Object(object);
    return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
    });
};
module.exports = getSymbols;

},{"7fe025254f0b7e4a":"92CtW","6b1c62cea92cdb9":"cVoOn"}],"92CtW":[function(require,module,exports) {
/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */ function arrayFilter(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
    while(++index < length){
        var value = array[index];
        if (predicate(value, index, array)) result[resIndex++] = value;
    }
    return result;
}
module.exports = arrayFilter;

},{}],"cVoOn":[function(require,module,exports) {
/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */ function stubArray() {
    return [];
}
module.exports = stubArray;

},{}],"2MKLE":[function(require,module,exports) {
var arrayLikeKeys = require("4c73ca42c789e5ab"), baseKeys = require("e8453365fdacc8da"), isArrayLike = require("7760b47b02971dfa");
/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */ function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
module.exports = keys;

},{"4c73ca42c789e5ab":"3onum","e8453365fdacc8da":"8FTe9","7760b47b02971dfa":"f1oKE"}],"3onum":[function(require,module,exports) {
var baseTimes = require("7ed875a0e67be76f"), isArguments = require("9cdb51ffa56f149b"), isArray = require("38cd49f1e493b3d7"), isBuffer = require("b379831fe1873fed"), isIndex = require("f362a34cd8321bb7"), isTypedArray = require("c019db5297494469");
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */ function arrayLikeKeys(value, inherited) {
    var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
    for(var key in value)if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
    isIndex(key, length)))) result.push(key);
    return result;
}
module.exports = arrayLikeKeys;

},{"7ed875a0e67be76f":"ejNka","9cdb51ffa56f149b":"4Ud5I","38cd49f1e493b3d7":"csCQN","b379831fe1873fed":"2u9cd","f362a34cd8321bb7":"bh2kv","c019db5297494469":"jlXoN"}],"ejNka":[function(require,module,exports) {
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */ function baseTimes(n, iteratee) {
    var index = -1, result = Array(n);
    while(++index < n)result[index] = iteratee(index);
    return result;
}
module.exports = baseTimes;

},{}],"bh2kv":[function(require,module,exports) {
/** Used as references for various `Number` constants. */ var MAX_SAFE_INTEGER = 9007199254740991;
/** Used to detect unsigned integer values. */ var reIsUint = /^(?:0|[1-9]\d*)$/;
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */ function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
module.exports = isIndex;

},{}],"2QfV6":[function(require,module,exports) {
var isStrictComparable = require("8ba18052e16e94fb"), keys = require("94ffded3a85af2f6");
/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */ function getMatchData(object) {
    var result = keys(object), length = result.length;
    while(length--){
        var key = result[length], value = object[key];
        result[length] = [
            key,
            value,
            isStrictComparable(value)
        ];
    }
    return result;
}
module.exports = getMatchData;

},{"8ba18052e16e94fb":"gsnXA","94ffded3a85af2f6":"2MKLE"}],"gsnXA":[function(require,module,exports) {
var isObject = require("be1941f960bbf057");
/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */ function isStrictComparable(value) {
    return value === value && !isObject(value);
}
module.exports = isStrictComparable;

},{"be1941f960bbf057":"aKVxX"}],"7y3Vg":[function(require,module,exports) {
/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */ function matchesStrictComparable(key, srcValue) {
    return function(object) {
        if (object == null) return false;
        return object[key] === srcValue && (srcValue !== undefined || key in Object(object));
    };
}
module.exports = matchesStrictComparable;

},{}],"k85mg":[function(require,module,exports) {
var baseIsEqual = require("cebe22f5ca0827a7"), get = require("d5ca180f7d6f956a"), hasIn = require("3462bb3f546fa1f7"), isKey = require("f5fef07966a1c4ee"), isStrictComparable = require("2a1cd212d48516"), matchesStrictComparable = require("885e72ee7fc6d296"), toKey = require("cd65eaf4a3af29f6");
/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */ function baseMatchesProperty(path, srcValue) {
    if (isKey(path) && isStrictComparable(srcValue)) return matchesStrictComparable(toKey(path), srcValue);
    return function(object) {
        var objValue = get(object, path);
        return objValue === undefined && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
    };
}
module.exports = baseMatchesProperty;

},{"cebe22f5ca0827a7":"6bOBq","d5ca180f7d6f956a":"136cG","3462bb3f546fa1f7":"adJjC","f5fef07966a1c4ee":"9vDl4","2a1cd212d48516":"gsnXA","885e72ee7fc6d296":"7y3Vg","cd65eaf4a3af29f6":"1yuGZ"}],"136cG":[function(require,module,exports) {
var baseGet = require("446ba3c1be7939a3");
/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */ function get(object, path, defaultValue) {
    var result = object == null ? undefined : baseGet(object, path);
    return result === undefined ? defaultValue : result;
}
module.exports = get;

},{"446ba3c1be7939a3":"f6p4t"}],"f6p4t":[function(require,module,exports) {
var castPath = require("434ba191fc1dcf09"), toKey = require("c3296f04fad32769");
/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */ function baseGet(object, path) {
    path = castPath(path, object);
    var index = 0, length = path.length;
    while(object != null && index < length)object = object[toKey(path[index++])];
    return index && index == length ? object : undefined;
}
module.exports = baseGet;

},{"434ba191fc1dcf09":"hkm5D","c3296f04fad32769":"1yuGZ"}],"hkm5D":[function(require,module,exports) {
var isArray = require("26a856890198f45b"), isKey = require("e823e604d75f975b"), stringToPath = require("f5fff1c342107fbd"), toString = require("b04e8cc634273c23");
/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */ function castPath(value, object) {
    if (isArray(value)) return value;
    return isKey(value, object) ? [
        value
    ] : stringToPath(toString(value));
}
module.exports = castPath;

},{"26a856890198f45b":"csCQN","e823e604d75f975b":"9vDl4","f5fff1c342107fbd":"ejkRE","b04e8cc634273c23":"k1dn5"}],"9vDl4":[function(require,module,exports) {
var isArray = require("1efcc081e9a448a8"), isSymbol = require("4cdff6c9e9ff5d38");
/** Used to match property names within property paths. */ var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */ function isKey(value, object) {
    if (isArray(value)) return false;
    var type = typeof value;
    if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) return true;
    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
module.exports = isKey;

},{"1efcc081e9a448a8":"csCQN","4cdff6c9e9ff5d38":"uvofH"}],"uvofH":[function(require,module,exports) {
var baseGetTag = require("6118c0d5630f51ce"), isObjectLike = require("74644060ad1a1d3c");
/** `Object#toString` result references. */ var symbolTag = "[object Symbol]";
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */ function isSymbol(value) {
    return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
}
module.exports = isSymbol;

},{"6118c0d5630f51ce":"gVnZH","74644060ad1a1d3c":"gu57I"}],"ejkRE":[function(require,module,exports) {
var memoizeCapped = require("55f565a895f455e5");
/** Used to match property names within property paths. */ var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
/** Used to match backslashes in property paths. */ var reEscapeChar = /\\(\\)?/g;
/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */ var stringToPath = memoizeCapped(function(string) {
    var result = [];
    if (string.charCodeAt(0) === 46 /* . */ ) result.push("");
    string.replace(rePropName, function(match, number, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
    });
    return result;
});
module.exports = stringToPath;

},{"55f565a895f455e5":"fCJAu"}],"fCJAu":[function(require,module,exports) {
var memoize = require("cb456550b1f5dd0a");
/** Used as the maximum memoize cache size. */ var MAX_MEMOIZE_SIZE = 500;
/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */ function memoizeCapped(func) {
    var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) cache.clear();
        return key;
    });
    var cache = result.cache;
    return result;
}
module.exports = memoizeCapped;

},{"cb456550b1f5dd0a":"4y1jT"}],"4y1jT":[function(require,module,exports) {
var MapCache = require("b34b26bf235f1cdd");
/** Error message constants. */ var FUNC_ERROR_TEXT = "Expected a function";
/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */ function memoize(func, resolver) {
    if (typeof func != "function" || resolver != null && typeof resolver != "function") throw new TypeError(FUNC_ERROR_TEXT);
    var memoized = function() {
        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
        if (cache.has(key)) return cache.get(key);
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
    };
    memoized.cache = new (memoize.Cache || MapCache);
    return memoized;
}
// Expose `MapCache`.
memoize.Cache = MapCache;
module.exports = memoize;

},{"b34b26bf235f1cdd":"glxGB"}],"k1dn5":[function(require,module,exports) {
var baseToString = require("81fca33832a744d9");
/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */ function toString(value) {
    return value == null ? "" : baseToString(value);
}
module.exports = toString;

},{"81fca33832a744d9":"alNNg"}],"alNNg":[function(require,module,exports) {
var Symbol = require("16af83505444e42a"), arrayMap = require("8439a3a1551d0706"), isArray = require("4b12c9f502d3288a"), isSymbol = require("a0ebd327d618908a");
/** Used as references for various `Number` constants. */ var INFINITY = 1 / 0;
/** Used to convert symbols to primitives and strings. */ var symbolProto = Symbol ? Symbol.prototype : undefined, symbolToString = symbolProto ? symbolProto.toString : undefined;
/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */ function baseToString(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == "string") return value;
    if (isArray(value)) // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + "";
    if (isSymbol(value)) return symbolToString ? symbolToString.call(value) : "";
    var result = value + "";
    return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
module.exports = baseToString;

},{"16af83505444e42a":"UuuqQ","8439a3a1551d0706":"7ZLP0","4b12c9f502d3288a":"csCQN","a0ebd327d618908a":"uvofH"}],"1yuGZ":[function(require,module,exports) {
var isSymbol = require("2aed9f6fd4b7386");
/** Used as references for various `Number` constants. */ var INFINITY = 1 / 0;
/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */ function toKey(value) {
    if (typeof value == "string" || isSymbol(value)) return value;
    var result = value + "";
    return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
module.exports = toKey;

},{"2aed9f6fd4b7386":"uvofH"}],"adJjC":[function(require,module,exports) {
var baseHasIn = require("9fbd4bb192f3f572"), hasPath = require("b0aefd36de99e579");
/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */ function hasIn(object, path) {
    return object != null && hasPath(object, path, baseHasIn);
}
module.exports = hasIn;

},{"9fbd4bb192f3f572":"dUiEe","b0aefd36de99e579":"gdR2b"}],"dUiEe":[function(require,module,exports) {
/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */ function baseHasIn(object, key) {
    return object != null && key in Object(object);
}
module.exports = baseHasIn;

},{}],"gdR2b":[function(require,module,exports) {
var castPath = require("bdbd2cfd212d36f7"), isArguments = require("47ffafdab3ba0d6f"), isArray = require("93ebd263ff0131c1"), isIndex = require("252ef74480e01958"), isLength = require("23c2f64e75e90a2"), toKey = require("af5ade297cb685ee");
/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */ function hasPath(object, path, hasFunc) {
    path = castPath(path, object);
    var index = -1, length = path.length, result = false;
    while(++index < length){
        var key = toKey(path[index]);
        if (!(result = object != null && hasFunc(object, key))) break;
        object = object[key];
    }
    if (result || ++index != length) return result;
    length = object == null ? 0 : object.length;
    return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
}
module.exports = hasPath;

},{"bdbd2cfd212d36f7":"hkm5D","47ffafdab3ba0d6f":"4Ud5I","93ebd263ff0131c1":"csCQN","252ef74480e01958":"bh2kv","23c2f64e75e90a2":"kx83g","af5ade297cb685ee":"1yuGZ"}],"5rttf":[function(require,module,exports) {
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */ function identity(value) {
    return value;
}
module.exports = identity;

},{}],"2X6He":[function(require,module,exports) {
var baseProperty = require("c7f2d79ee4b1c16a"), basePropertyDeep = require("abf31da39349df22"), isKey = require("a387ef4a4373de2c"), toKey = require("9315973458389ae7");
/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */ function property(path) {
    return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}
module.exports = property;

},{"c7f2d79ee4b1c16a":"lS455","abf31da39349df22":"cRfYE","a387ef4a4373de2c":"9vDl4","9315973458389ae7":"1yuGZ"}],"lS455":[function(require,module,exports) {
/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */ function baseProperty(key) {
    return function(object) {
        return object == null ? undefined : object[key];
    };
}
module.exports = baseProperty;

},{}],"cRfYE":[function(require,module,exports) {
var baseGet = require("f0f9f03bc3030d02");
/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */ function basePropertyDeep(path) {
    return function(object) {
        return baseGet(object, path);
    };
}
module.exports = basePropertyDeep;

},{"f0f9f03bc3030d02":"f6p4t"}],"az2Fm":[function(require,module,exports) {
var baseEach = require("488df795cf6fe570"), isArrayLike = require("2924e2db4bb5430d");
/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */ function baseMap(collection, iteratee) {
    var index = -1, result = isArrayLike(collection) ? Array(collection.length) : [];
    baseEach(collection, function(value, key, collection) {
        result[++index] = iteratee(value, key, collection);
    });
    return result;
}
module.exports = baseMap;

},{"488df795cf6fe570":"gT3xd","2924e2db4bb5430d":"f1oKE"}],"gT3xd":[function(require,module,exports) {
var baseForOwn = require("ee57d32bcdc873cb"), createBaseEach = require("f1e3fc84161ef3ec");
/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */ var baseEach = createBaseEach(baseForOwn);
module.exports = baseEach;

},{"ee57d32bcdc873cb":"65cF7","f1e3fc84161ef3ec":"GopKF"}],"65cF7":[function(require,module,exports) {
var baseFor = require("c7da20818a5fe3d6"), keys = require("1fb77c53defe5720");
/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */ function baseForOwn(object, iteratee) {
    return object && baseFor(object, iteratee, keys);
}
module.exports = baseForOwn;

},{"c7da20818a5fe3d6":"iwHFa","1fb77c53defe5720":"2MKLE"}],"iwHFa":[function(require,module,exports) {
var createBaseFor = require("178c767a7be60d59");
/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */ var baseFor = createBaseFor();
module.exports = baseFor;

},{"178c767a7be60d59":"c2hlN"}],"c2hlN":[function(require,module,exports) {
/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */ function createBaseFor(fromRight) {
    return function(object, iteratee, keysFunc) {
        var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
        while(length--){
            var key = props[fromRight ? length : ++index];
            if (iteratee(iterable[key], key, iterable) === false) break;
        }
        return object;
    };
}
module.exports = createBaseFor;

},{}],"GopKF":[function(require,module,exports) {
var isArrayLike = require("49bbd11cbf093bb1");
/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */ function createBaseEach(eachFunc, fromRight) {
    return function(collection, iteratee) {
        if (collection == null) return collection;
        if (!isArrayLike(collection)) return eachFunc(collection, iteratee);
        var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
        while(fromRight ? index-- : ++index < length){
            if (iteratee(iterable[index], index, iterable) === false) break;
        }
        return collection;
    };
}
module.exports = createBaseEach;

},{"49bbd11cbf093bb1":"f1oKE"}],"cQbs0":[function(require,module,exports) {
var arrayEach = require("5dbec210c3629ee5"), baseEach = require("8e0dc727d328c3d7"), castFunction = require("759fcc4330a9fea9"), isArray = require("38760405c7e16565");
/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */ function forEach(collection, iteratee) {
    var func = isArray(collection) ? arrayEach : baseEach;
    return func(collection, castFunction(iteratee));
}
module.exports = forEach;

},{"5dbec210c3629ee5":"6JUfH","8e0dc727d328c3d7":"gT3xd","759fcc4330a9fea9":"9XixJ","38760405c7e16565":"csCQN"}],"6JUfH":[function(require,module,exports) {
/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */ function arrayEach(array, iteratee) {
    var index = -1, length = array == null ? 0 : array.length;
    while(++index < length){
        if (iteratee(array[index], index, array) === false) break;
    }
    return array;
}
module.exports = arrayEach;

},{}],"9XixJ":[function(require,module,exports) {
var identity = require("c0eaa1c5ad52cc2f");
/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */ function castFunction(value) {
    return typeof value == "function" ? value : identity;
}
module.exports = castFunction;

},{"c0eaa1c5ad52cc2f":"5rttf"}],"7Uoc6":[function(require,module,exports) {
var baseValues = require("f4ee8afbcaba5363"), keys = require("4f6b7e914d03d8e3");
/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */ function values(object) {
    return object == null ? [] : baseValues(object, keys(object));
}
module.exports = values;

},{"f4ee8afbcaba5363":"bYvrS","4f6b7e914d03d8e3":"2MKLE"}],"bYvrS":[function(require,module,exports) {
var arrayMap = require("2696d06e8e2fc398");
/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */ function baseValues(object, props) {
    return arrayMap(props, function(key) {
        return object[key];
    });
}
module.exports = baseValues;

},{"2696d06e8e2fc398":"7ZLP0"}],"j5BJo":[function(require,module,exports) {
var baseHas = require("adf86b651ea78123"), hasPath = require("d1ab8f0895b2d3d5");
/**
 * Checks if `path` is a direct property of `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = { 'a': { 'b': 2 } };
 * var other = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.has(object, 'a');
 * // => true
 *
 * _.has(object, 'a.b');
 * // => true
 *
 * _.has(object, ['a', 'b']);
 * // => true
 *
 * _.has(other, 'a');
 * // => false
 */ function has(object, path) {
    return object != null && hasPath(object, path, baseHas);
}
module.exports = has;

},{"adf86b651ea78123":"cs2Yj","d1ab8f0895b2d3d5":"gdR2b"}],"cs2Yj":[function(require,module,exports) {
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * The base implementation of `_.has` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */ function baseHas(object, key) {
    return object != null && hasOwnProperty.call(object, key);
}
module.exports = baseHas;

},{}],"dIp0d":[function(require,module,exports) {
var baseClone = require("38689aaf6b27bf48");
/** Used to compose bitmasks for cloning. */ var CLONE_SYMBOLS_FLAG = 4;
/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. An empty object is returned for uncloneable values such
 * as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeep
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = _.clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 */ function clone(value) {
    return baseClone(value, CLONE_SYMBOLS_FLAG);
}
module.exports = clone;

},{"38689aaf6b27bf48":"ALF9W"}],"ALF9W":[function(require,module,exports) {
var Stack = require("c3256a0a192955f9"), arrayEach = require("3a79976eb46af94a"), assignValue = require("bc83a05a4f99d69b"), baseAssign = require("e6b4c3e6c85df6bb"), baseAssignIn = require("f340cc553ba5643c"), cloneBuffer = require("e72e99883a50402d"), copyArray = require("dc840ead07f1054"), copySymbols = require("309288e8ee190af0"), copySymbolsIn = require("687fa30fede0b048"), getAllKeys = require("bb0ba724f98b094d"), getAllKeysIn = require("12bae1dca0e83064"), getTag = require("4c3204eaea28d680"), initCloneArray = require("fd7741200b462cdf"), initCloneByTag = require("f93a1d24ac08e076"), initCloneObject = require("630039e80f692f17"), isArray = require("f37949484ab52dae"), isBuffer = require("ac876cc65d29c86e"), isMap = require("1056c031d98783c0"), isObject = require("1800fb3122907fc2"), isSet = require("31f022f648037bd3"), keys = require("5f3267fbd9848a7d"), keysIn = require("7d3f3bdc4f2e7bb8");
/** Used to compose bitmasks for cloning. */ var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
/** `Object#toString` result references. */ var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
/** Used to identify `toStringTag` values supported by `_.clone`. */ var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */ function baseClone(value, bitmask, customizer, key, object, stack) {
    var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
    if (customizer) result = object ? customizer(value, key, object, stack) : customizer(value);
    if (result !== undefined) return result;
    if (!isObject(value)) return value;
    var isArr = isArray(value);
    if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) return copyArray(value, result);
    } else {
        var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
        if (isBuffer(value)) return cloneBuffer(value, isDeep);
        if (tag == objectTag || tag == argsTag || isFunc && !object) {
            result = isFlat || isFunc ? {} : initCloneObject(value);
            if (!isDeep) return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
        } else {
            if (!cloneableTags[tag]) return object ? value : {};
            result = initCloneByTag(value, tag, isDeep);
        }
    }
    // Check for circular references and return its corresponding clone.
    stack || (stack = new Stack);
    var stacked = stack.get(value);
    if (stacked) return stacked;
    stack.set(value, result);
    if (isSet(value)) value.forEach(function(subValue) {
        result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
    else if (isMap(value)) value.forEach(function(subValue, key) {
        result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
    var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
    var props = isArr ? undefined : keysFunc(value);
    arrayEach(props || value, function(subValue, key) {
        if (props) {
            key = subValue;
            subValue = value[key];
        }
        // Recursively populate clone (susceptible to call stack limits).
        assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
    return result;
}
module.exports = baseClone;

},{"c3256a0a192955f9":"2jA4g","3a79976eb46af94a":"6JUfH","bc83a05a4f99d69b":"8hgsW","e6b4c3e6c85df6bb":"qZqlI","f340cc553ba5643c":"2U41V","e72e99883a50402d":"1WbMt","dc840ead07f1054":"ltovL","309288e8ee190af0":"78pEi","687fa30fede0b048":"hTBLk","bb0ba724f98b094d":"3Jg3v","12bae1dca0e83064":"aUBL4","4c3204eaea28d680":"8oVUa","fd7741200b462cdf":"aD3li","f93a1d24ac08e076":"d2Q7U","630039e80f692f17":"h3utW","f37949484ab52dae":"csCQN","ac876cc65d29c86e":"2u9cd","1056c031d98783c0":"fd5Ws","1800fb3122907fc2":"aKVxX","31f022f648037bd3":"2SdkJ","5f3267fbd9848a7d":"2MKLE","7d3f3bdc4f2e7bb8":"5QHGn"}],"8hgsW":[function(require,module,exports) {
var baseAssignValue = require("be513dd57a36b3f4"), eq = require("b62ef95b3cf1cde1");
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */ function assignValue(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) baseAssignValue(object, key, value);
}
module.exports = assignValue;

},{"be513dd57a36b3f4":"3YfOT","b62ef95b3cf1cde1":"7ctDO"}],"3YfOT":[function(require,module,exports) {
var defineProperty = require("57c6267f904aee0a");
/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */ function baseAssignValue(object, key, value) {
    if (key == "__proto__" && defineProperty) defineProperty(object, key, {
        "configurable": true,
        "enumerable": true,
        "value": value,
        "writable": true
    });
    else object[key] = value;
}
module.exports = baseAssignValue;

},{"57c6267f904aee0a":"2WURa"}],"2WURa":[function(require,module,exports) {
var getNative = require("7565accd8c33cb8b");
var defineProperty = function() {
    try {
        var func = getNative(Object, "defineProperty");
        func({}, "", {});
        return func;
    } catch (e) {}
}();
module.exports = defineProperty;

},{"7565accd8c33cb8b":"78CtN"}],"qZqlI":[function(require,module,exports) {
var copyObject = require("c7567f70ddd05963"), keys = require("fcf23a0242ef0da9");
/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */ function baseAssign(object, source) {
    return object && copyObject(source, keys(source), object);
}
module.exports = baseAssign;

},{"c7567f70ddd05963":"5pgrF","fcf23a0242ef0da9":"2MKLE"}],"5pgrF":[function(require,module,exports) {
var assignValue = require("51e2769785cbfa78"), baseAssignValue = require("9cddf6ac1a092765");
/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */ function copyObject(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {});
    var index = -1, length = props.length;
    while(++index < length){
        var key = props[index];
        var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;
        if (newValue === undefined) newValue = source[key];
        if (isNew) baseAssignValue(object, key, newValue);
        else assignValue(object, key, newValue);
    }
    return object;
}
module.exports = copyObject;

},{"51e2769785cbfa78":"8hgsW","9cddf6ac1a092765":"3YfOT"}],"2U41V":[function(require,module,exports) {
var copyObject = require("6f2a44bcb454186d"), keysIn = require("7697a1565646c93");
/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */ function baseAssignIn(object, source) {
    return object && copyObject(source, keysIn(source), object);
}
module.exports = baseAssignIn;

},{"6f2a44bcb454186d":"5pgrF","7697a1565646c93":"5QHGn"}],"5QHGn":[function(require,module,exports) {
var arrayLikeKeys = require("635aebb56f3a408f"), baseKeysIn = require("194eb1a802636842"), isArrayLike = require("ac15afdc3ddd76cd");
/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */ function keysIn(object) {
    return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
module.exports = keysIn;

},{"635aebb56f3a408f":"3onum","194eb1a802636842":"9nfuq","ac15afdc3ddd76cd":"f1oKE"}],"9nfuq":[function(require,module,exports) {
var isObject = require("bd1636f5883f1002"), isPrototype = require("f7d53cd92b2b977b"), nativeKeysIn = require("c039208a16eb68bd");
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */ function baseKeysIn(object) {
    if (!isObject(object)) return nativeKeysIn(object);
    var isProto = isPrototype(object), result = [];
    for(var key in object)if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) result.push(key);
    return result;
}
module.exports = baseKeysIn;

},{"bd1636f5883f1002":"aKVxX","f7d53cd92b2b977b":"5r2uA","c039208a16eb68bd":"9PPva"}],"9PPva":[function(require,module,exports) {
/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */ function nativeKeysIn(object) {
    var result = [];
    if (object != null) for(var key in Object(object))result.push(key);
    return result;
}
module.exports = nativeKeysIn;

},{}],"1WbMt":[function(require,module,exports) {
var root = require("5d68e87b918bbcc5");
/** Detect free variable `exports`. */ var freeExports = exports && !exports.nodeType && exports;
/** Detect free variable `module`. */ var freeModule = freeExports && true && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */ var Buffer = moduleExports ? root.Buffer : undefined, allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;
/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */ function cloneBuffer(buffer, isDeep) {
    if (isDeep) return buffer.slice();
    var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
    buffer.copy(result);
    return result;
}
module.exports = cloneBuffer;

},{"5d68e87b918bbcc5":"nb9VO"}],"ltovL":[function(require,module,exports) {
/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */ function copyArray(source, array) {
    var index = -1, length = source.length;
    array || (array = Array(length));
    while(++index < length)array[index] = source[index];
    return array;
}
module.exports = copyArray;

},{}],"78pEi":[function(require,module,exports) {
var copyObject = require("4cc37626612884ad"), getSymbols = require("39cbde2205d9399c");
/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */ function copySymbols(source, object) {
    return copyObject(source, getSymbols(source), object);
}
module.exports = copySymbols;

},{"4cc37626612884ad":"5pgrF","39cbde2205d9399c":"4ltOG"}],"hTBLk":[function(require,module,exports) {
var copyObject = require("73fd77060a6bfcff"), getSymbolsIn = require("9b660e6b0c20d303");
/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */ function copySymbolsIn(source, object) {
    return copyObject(source, getSymbolsIn(source), object);
}
module.exports = copySymbolsIn;

},{"73fd77060a6bfcff":"5pgrF","9b660e6b0c20d303":"cc2eg"}],"cc2eg":[function(require,module,exports) {
var arrayPush = require("2f7c7daf8773557"), getPrototype = require("6ccae2aa7cfa3c66"), getSymbols = require("bdb501682ee9305d"), stubArray = require("7641fe4ae6d2cc96");
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeGetSymbols = Object.getOwnPropertySymbols;
/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */ var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
    var result = [];
    while(object){
        arrayPush(result, getSymbols(object));
        object = getPrototype(object);
    }
    return result;
};
module.exports = getSymbolsIn;

},{"2f7c7daf8773557":"iF3Mr","6ccae2aa7cfa3c66":"aIzFd","bdb501682ee9305d":"4ltOG","7641fe4ae6d2cc96":"cVoOn"}],"aIzFd":[function(require,module,exports) {
var overArg = require("11c2fcc01fbb2119");
/** Built-in value references. */ var getPrototype = overArg(Object.getPrototypeOf, Object);
module.exports = getPrototype;

},{"11c2fcc01fbb2119":"ebmVr"}],"aUBL4":[function(require,module,exports) {
var baseGetAllKeys = require("f6d6a583609f5bf6"), getSymbolsIn = require("feede5d0a2d06427"), keysIn = require("287f70f798405911");
/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */ function getAllKeysIn(object) {
    return baseGetAllKeys(object, keysIn, getSymbolsIn);
}
module.exports = getAllKeysIn;

},{"f6d6a583609f5bf6":"epi8x","feede5d0a2d06427":"cc2eg","287f70f798405911":"5QHGn"}],"aD3li":[function(require,module,exports) {
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */ function initCloneArray(array) {
    var length = array.length, result = new array.constructor(length);
    // Add properties assigned by `RegExp#exec`.
    if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
        result.index = array.index;
        result.input = array.input;
    }
    return result;
}
module.exports = initCloneArray;

},{}],"d2Q7U":[function(require,module,exports) {
var cloneArrayBuffer = require("d24f0b9a34d2e38a"), cloneDataView = require("dbf04edaab2ae376"), cloneRegExp = require("763300f2dd9bdaf3"), cloneSymbol = require("c30e64d90e4b92d1"), cloneTypedArray = require("d1edd8349e9ad54d");
/** `Object#toString` result references. */ var boolTag = "[object Boolean]", dateTag = "[object Date]", mapTag = "[object Map]", numberTag = "[object Number]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */ function initCloneByTag(object, tag, isDeep) {
    var Ctor = object.constructor;
    switch(tag){
        case arrayBufferTag:
            return cloneArrayBuffer(object);
        case boolTag:
        case dateTag:
            return new Ctor(+object);
        case dataViewTag:
            return cloneDataView(object, isDeep);
        case float32Tag:
        case float64Tag:
        case int8Tag:
        case int16Tag:
        case int32Tag:
        case uint8Tag:
        case uint8ClampedTag:
        case uint16Tag:
        case uint32Tag:
            return cloneTypedArray(object, isDeep);
        case mapTag:
            return new Ctor;
        case numberTag:
        case stringTag:
            return new Ctor(object);
        case regexpTag:
            return cloneRegExp(object);
        case setTag:
            return new Ctor;
        case symbolTag:
            return cloneSymbol(object);
    }
}
module.exports = initCloneByTag;

},{"d24f0b9a34d2e38a":"2Tdjn","dbf04edaab2ae376":"cGo3D","763300f2dd9bdaf3":"iBdYR","c30e64d90e4b92d1":"dmRI2","d1edd8349e9ad54d":"eqFlj"}],"2Tdjn":[function(require,module,exports) {
var Uint8Array = require("c50984a96481fd62");
/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */ function cloneArrayBuffer(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new Uint8Array(result).set(new Uint8Array(arrayBuffer));
    return result;
}
module.exports = cloneArrayBuffer;

},{"c50984a96481fd62":"ejY13"}],"cGo3D":[function(require,module,exports) {
var cloneArrayBuffer = require("55b473c4a5622b5a");
/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */ function cloneDataView(dataView, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
    return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
module.exports = cloneDataView;

},{"55b473c4a5622b5a":"2Tdjn"}],"iBdYR":[function(require,module,exports) {
/** Used to match `RegExp` flags from their coerced string values. */ var reFlags = /\w*$/;
/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */ function cloneRegExp(regexp) {
    var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
    result.lastIndex = regexp.lastIndex;
    return result;
}
module.exports = cloneRegExp;

},{}],"dmRI2":[function(require,module,exports) {
var Symbol = require("b88cf659c1f1d984");
/** Used to convert symbols to primitives and strings. */ var symbolProto = Symbol ? Symbol.prototype : undefined, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */ function cloneSymbol(symbol) {
    return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}
module.exports = cloneSymbol;

},{"b88cf659c1f1d984":"UuuqQ"}],"eqFlj":[function(require,module,exports) {
var cloneArrayBuffer = require("b3183de060e04548");
/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */ function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
module.exports = cloneTypedArray;

},{"b3183de060e04548":"2Tdjn"}],"h3utW":[function(require,module,exports) {
var baseCreate = require("4a25a11eb90445e8"), getPrototype = require("8c92276927b7c3e0"), isPrototype = require("e939f15d7a0f64a5");
/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */ function initCloneObject(object) {
    return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
}
module.exports = initCloneObject;

},{"4a25a11eb90445e8":"4XYPx","8c92276927b7c3e0":"aIzFd","e939f15d7a0f64a5":"5r2uA"}],"4XYPx":[function(require,module,exports) {
var isObject = require("2c87f13f7934e7bd");
/** Built-in value references. */ var objectCreate = Object.create;
/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */ var baseCreate = function() {
    function object() {}
    return function(proto) {
        if (!isObject(proto)) return {};
        if (objectCreate) return objectCreate(proto);
        object.prototype = proto;
        var result = new object;
        object.prototype = undefined;
        return result;
    };
}();
module.exports = baseCreate;

},{"2c87f13f7934e7bd":"aKVxX"}],"fd5Ws":[function(require,module,exports) {
var baseIsMap = require("bcb4b5290583d129"), baseUnary = require("6a7e6b1a2d9fb1d5"), nodeUtil = require("7d4f449dd306450f");
/* Node.js helper references. */ var nodeIsMap = nodeUtil && nodeUtil.isMap;
/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */ var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
module.exports = isMap;

},{"bcb4b5290583d129":"7mNZ4","6a7e6b1a2d9fb1d5":"9lPWq","7d4f449dd306450f":"34Uar"}],"7mNZ4":[function(require,module,exports) {
var getTag = require("f59b9932854175ea"), isObjectLike = require("88260e33e0003386");
/** `Object#toString` result references. */ var mapTag = "[object Map]";
/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */ function baseIsMap(value) {
    return isObjectLike(value) && getTag(value) == mapTag;
}
module.exports = baseIsMap;

},{"f59b9932854175ea":"8oVUa","88260e33e0003386":"gu57I"}],"2SdkJ":[function(require,module,exports) {
var baseIsSet = require("efa5963001bed2f4"), baseUnary = require("3cb35dba719c68b1"), nodeUtil = require("7a3e899a332ff7be");
/* Node.js helper references. */ var nodeIsSet = nodeUtil && nodeUtil.isSet;
/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */ var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
module.exports = isSet;

},{"efa5963001bed2f4":"1mbf1","3cb35dba719c68b1":"9lPWq","7a3e899a332ff7be":"34Uar"}],"1mbf1":[function(require,module,exports) {
var getTag = require("3451ecb010f954cc"), isObjectLike = require("b6fc875bc5f351c9");
/** `Object#toString` result references. */ var setTag = "[object Set]";
/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */ function baseIsSet(value) {
    return isObjectLike(value) && getTag(value) == setTag;
}
module.exports = baseIsSet;

},{"3451ecb010f954cc":"8oVUa","b6fc875bc5f351c9":"gu57I"}],"eKRSC":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toFastProperties = exports.timer = exports.PRINT_ERROR = exports.PRINT_WARNING = void 0;
var print_1 = require("613914750efdb594");
Object.defineProperty(exports, "PRINT_WARNING", {
    enumerable: true,
    get: function() {
        return print_1.PRINT_WARNING;
    }
});
Object.defineProperty(exports, "PRINT_ERROR", {
    enumerable: true,
    get: function() {
        return print_1.PRINT_ERROR;
    }
});
var timer_1 = require("4f226e316daf6e69");
Object.defineProperty(exports, "timer", {
    enumerable: true,
    get: function() {
        return timer_1.timer;
    }
});
var to_fast_properties_1 = require("7067d2ec2e05922a");
Object.defineProperty(exports, "toFastProperties", {
    enumerable: true,
    get: function() {
        return to_fast_properties_1.toFastProperties;
    }
});

},{"613914750efdb594":"31ONE","4f226e316daf6e69":"5ZYue","7067d2ec2e05922a":"i2vE7"}],"31ONE":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PRINT_WARNING = exports.PRINT_ERROR = void 0;
function PRINT_ERROR(msg) {
    /* istanbul ignore else - can't override global.console in node.js */ if (console && console.error) console.error("Error: ".concat(msg));
}
exports.PRINT_ERROR = PRINT_ERROR;
function PRINT_WARNING(msg) {
    /* istanbul ignore else - can't override global.console in node.js*/ if (console && console.warn) // TODO: modify docs accordingly
    console.warn("Warning: ".concat(msg));
}
exports.PRINT_WARNING = PRINT_WARNING;

},{}],"5ZYue":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.timer = void 0;
function timer(func) {
    var start = new Date().getTime();
    var val = func();
    var end = new Date().getTime();
    var total = end - start;
    return {
        time: total,
        value: val
    };
}
exports.timer = timer;

},{}],"i2vE7":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toFastProperties = void 0;
// based on: https://github.com/petkaantonov/bluebird/blob/b97c0d2d487e8c5076e8bd897e0dcd4622d31846/src/util.js#L201-L216
function toFastProperties(toBecomeFast) {
    function FakeConstructor() {}
    // If our object is used as a constructor it would receive
    FakeConstructor.prototype = toBecomeFast;
    var fakeInstance = new FakeConstructor();
    function fakeAccess() {
        return typeof fakeInstance.bar;
    }
    // help V8 understand this is a "real" prototype by actually using
    // the fake instance.
    fakeAccess();
    fakeAccess();
    return toBecomeFast;
}
exports.toFastProperties = toFastProperties;

},{}],"7VVKW":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.buildInProdFollowPrefix = exports.buildBetweenProdsFollowPrefix = exports.computeAllProdsFollows = exports.ResyncFollowsWalker = void 0;
var rest_1 = require("11027f02d952c388");
var first_1 = require("4c6093cea8fcf2be");
var forEach_1 = __importDefault(require("2b2366811ac8ff70"));
var assign_1 = __importDefault(require("66119ff1da14fd0c"));
var constants_1 = require("6c1c38d8e50509d5");
var gast_1 = require("47a4b6282c23ca02");
// This ResyncFollowsWalker computes all of the follows required for RESYNC
// (skipping reference production).
var ResyncFollowsWalker = /** @class */ function(_super) {
    __extends(ResyncFollowsWalker, _super);
    function ResyncFollowsWalker(topProd) {
        var _this = _super.call(this) || this;
        _this.topProd = topProd;
        _this.follows = {};
        return _this;
    }
    ResyncFollowsWalker.prototype.startWalking = function() {
        this.walk(this.topProd);
        return this.follows;
    };
    ResyncFollowsWalker.prototype.walkTerminal = function(terminal, currRest, prevRest) {
    // do nothing! just like in the public sector after 13:00
    };
    ResyncFollowsWalker.prototype.walkProdRef = function(refProd, currRest, prevRest) {
        var followName = buildBetweenProdsFollowPrefix(refProd.referencedRule, refProd.idx) + this.topProd.name;
        var fullRest = currRest.concat(prevRest);
        var restProd = new gast_1.Alternative({
            definition: fullRest
        });
        var t_in_topProd_follows = (0, first_1.first)(restProd);
        this.follows[followName] = t_in_topProd_follows;
    };
    return ResyncFollowsWalker;
}(rest_1.RestWalker);
exports.ResyncFollowsWalker = ResyncFollowsWalker;
function computeAllProdsFollows(topProductions) {
    var reSyncFollows = {};
    (0, forEach_1.default)(topProductions, function(topProd) {
        var currRefsFollow = new ResyncFollowsWalker(topProd).startWalking();
        (0, assign_1.default)(reSyncFollows, currRefsFollow);
    });
    return reSyncFollows;
}
exports.computeAllProdsFollows = computeAllProdsFollows;
function buildBetweenProdsFollowPrefix(inner, occurenceInParent) {
    return inner.name + occurenceInParent + constants_1.IN;
}
exports.buildBetweenProdsFollowPrefix = buildBetweenProdsFollowPrefix;
function buildInProdFollowPrefix(terminal) {
    var terminalName = terminal.terminalType.name;
    return terminalName + terminal.idx + constants_1.IN;
}
exports.buildInProdFollowPrefix = buildInProdFollowPrefix;

},{"11027f02d952c388":"dgFra","4c6093cea8fcf2be":"657S2","2b2366811ac8ff70":"cQbs0","66119ff1da14fd0c":"4WXly","6c1c38d8e50509d5":"66C8j","47a4b6282c23ca02":"91AYQ"}],"dgFra":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RestWalker = void 0;
var drop_1 = __importDefault(require("2b3a217babfe5960"));
var forEach_1 = __importDefault(require("86759c4ddec54fda"));
var gast_1 = require("e62538b26c421c73");
/**
 *  A Grammar Walker that computes the "remaining" grammar "after" a productions in the grammar.
 */ var RestWalker = /** @class */ function() {
    function RestWalker() {}
    RestWalker.prototype.walk = function(prod, prevRest) {
        var _this = this;
        if (prevRest === void 0) prevRest = [];
        (0, forEach_1.default)(prod.definition, function(subProd, index) {
            var currRest = (0, drop_1.default)(prod.definition, index + 1);
            /* istanbul ignore else */ if (subProd instanceof gast_1.NonTerminal) _this.walkProdRef(subProd, currRest, prevRest);
            else if (subProd instanceof gast_1.Terminal) _this.walkTerminal(subProd, currRest, prevRest);
            else if (subProd instanceof gast_1.Alternative) _this.walkFlat(subProd, currRest, prevRest);
            else if (subProd instanceof gast_1.Option) _this.walkOption(subProd, currRest, prevRest);
            else if (subProd instanceof gast_1.RepetitionMandatory) _this.walkAtLeastOne(subProd, currRest, prevRest);
            else if (subProd instanceof gast_1.RepetitionMandatoryWithSeparator) _this.walkAtLeastOneSep(subProd, currRest, prevRest);
            else if (subProd instanceof gast_1.RepetitionWithSeparator) _this.walkManySep(subProd, currRest, prevRest);
            else if (subProd instanceof gast_1.Repetition) _this.walkMany(subProd, currRest, prevRest);
            else if (subProd instanceof gast_1.Alternation) _this.walkOr(subProd, currRest, prevRest);
            else throw Error("non exhaustive match");
        });
    };
    RestWalker.prototype.walkTerminal = function(terminal, currRest, prevRest) {};
    RestWalker.prototype.walkProdRef = function(refProd, currRest, prevRest) {};
    RestWalker.prototype.walkFlat = function(flatProd, currRest, prevRest) {
        // ABCDEF => after the D the rest is EF
        var fullOrRest = currRest.concat(prevRest);
        this.walk(flatProd, fullOrRest);
    };
    RestWalker.prototype.walkOption = function(optionProd, currRest, prevRest) {
        // ABC(DE)?F => after the (DE)? the rest is F
        var fullOrRest = currRest.concat(prevRest);
        this.walk(optionProd, fullOrRest);
    };
    RestWalker.prototype.walkAtLeastOne = function(atLeastOneProd, currRest, prevRest) {
        // ABC(DE)+F => after the (DE)+ the rest is (DE)?F
        var fullAtLeastOneRest = [
            new gast_1.Option({
                definition: atLeastOneProd.definition
            })
        ].concat(currRest, prevRest);
        this.walk(atLeastOneProd, fullAtLeastOneRest);
    };
    RestWalker.prototype.walkAtLeastOneSep = function(atLeastOneSepProd, currRest, prevRest) {
        // ABC DE(,DE)* F => after the (,DE)+ the rest is (,DE)?F
        var fullAtLeastOneSepRest = restForRepetitionWithSeparator(atLeastOneSepProd, currRest, prevRest);
        this.walk(atLeastOneSepProd, fullAtLeastOneSepRest);
    };
    RestWalker.prototype.walkMany = function(manyProd, currRest, prevRest) {
        // ABC(DE)*F => after the (DE)* the rest is (DE)?F
        var fullManyRest = [
            new gast_1.Option({
                definition: manyProd.definition
            })
        ].concat(currRest, prevRest);
        this.walk(manyProd, fullManyRest);
    };
    RestWalker.prototype.walkManySep = function(manySepProd, currRest, prevRest) {
        // ABC (DE(,DE)*)? F => after the (,DE)* the rest is (,DE)?F
        var fullManySepRest = restForRepetitionWithSeparator(manySepProd, currRest, prevRest);
        this.walk(manySepProd, fullManySepRest);
    };
    RestWalker.prototype.walkOr = function(orProd, currRest, prevRest) {
        var _this = this;
        // ABC(D|E|F)G => when finding the (D|E|F) the rest is G
        var fullOrRest = currRest.concat(prevRest);
        // walk all different alternatives
        (0, forEach_1.default)(orProd.definition, function(alt) {
            // wrapping each alternative in a single definition wrapper
            // to avoid errors in computing the rest of that alternative in the invocation to computeInProdFollows
            // (otherwise for OR([alt1,alt2]) alt2 will be considered in 'rest' of alt1
            var prodWrapper = new gast_1.Alternative({
                definition: [
                    alt
                ]
            });
            _this.walk(prodWrapper, fullOrRest);
        });
    };
    return RestWalker;
}();
exports.RestWalker = RestWalker;
function restForRepetitionWithSeparator(repSepProd, currRest, prevRest) {
    var repSepRest = [
        new gast_1.Option({
            definition: [
                new gast_1.Terminal({
                    terminalType: repSepProd.separator
                })
            ].concat(repSepProd.definition)
        })
    ];
    var fullRepSepRest = repSepRest.concat(currRest, prevRest);
    return fullRepSepRest;
}

},{"2b3a217babfe5960":"2pD4D","86759c4ddec54fda":"cQbs0","e62538b26c421c73":"91AYQ"}],"2pD4D":[function(require,module,exports) {
var baseSlice = require("88b6483542ea1f55"), toInteger = require("e5707388140bdea");
/**
 * Creates a slice of `array` with `n` elements dropped from the beginning.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to drop.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.drop([1, 2, 3]);
 * // => [2, 3]
 *
 * _.drop([1, 2, 3], 2);
 * // => [3]
 *
 * _.drop([1, 2, 3], 5);
 * // => []
 *
 * _.drop([1, 2, 3], 0);
 * // => [1, 2, 3]
 */ function drop(array, n, guard) {
    var length = array == null ? 0 : array.length;
    if (!length) return [];
    n = guard || n === undefined ? 1 : toInteger(n);
    return baseSlice(array, n < 0 ? 0 : n, length);
}
module.exports = drop;

},{"88b6483542ea1f55":"bdwd1","e5707388140bdea":"hljBn"}],"bdwd1":[function(require,module,exports) {
/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */ function baseSlice(array, start, end) {
    var index = -1, length = array.length;
    if (start < 0) start = -start > length ? 0 : length + start;
    end = end > length ? length : end;
    if (end < 0) end += length;
    length = start > end ? 0 : end - start >>> 0;
    start >>>= 0;
    var result = Array(length);
    while(++index < length)result[index] = array[index + start];
    return result;
}
module.exports = baseSlice;

},{}],"hljBn":[function(require,module,exports) {
var toFinite = require("e624a4916a3de577");
/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */ function toInteger(value) {
    var result = toFinite(value), remainder = result % 1;
    return result === result ? remainder ? result - remainder : result : 0;
}
module.exports = toInteger;

},{"e624a4916a3de577":"fmZtK"}],"fmZtK":[function(require,module,exports) {
var toNumber = require("90c5878489629896");
/** Used as references for various `Number` constants. */ var INFINITY = 1 / 0, MAX_INTEGER = 1.7976931348623157e+308;
/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */ function toFinite(value) {
    if (!value) return value === 0 ? value : 0;
    value = toNumber(value);
    if (value === INFINITY || value === -INFINITY) {
        var sign = value < 0 ? -1 : 1;
        return sign * MAX_INTEGER;
    }
    return value === value ? value : 0;
}
module.exports = toFinite;

},{"90c5878489629896":"11deb"}],"11deb":[function(require,module,exports) {
var baseTrim = require("261e89907fb89d78"), isObject = require("faaa289d287a34a5"), isSymbol = require("47b3bd23f771891");
/** Used as references for various `Number` constants. */ var NAN = 0 / 0;
/** Used to detect bad signed hexadecimal string values. */ var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */ var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */ var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */ var freeParseInt = parseInt;
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */ function toNumber(value) {
    if (typeof value == "number") return value;
    if (isSymbol(value)) return NAN;
    if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
    }
    if (typeof value != "string") return value === 0 ? value : +value;
    value = baseTrim(value);
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
module.exports = toNumber;

},{"261e89907fb89d78":"jb9kN","faaa289d287a34a5":"aKVxX","47b3bd23f771891":"uvofH"}],"jb9kN":[function(require,module,exports) {
var trimmedEndIndex = require("985d3c9be7b51937");
/** Used to match leading whitespace. */ var reTrimStart = /^\s+/;
/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */ function baseTrim(string) {
    return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
module.exports = baseTrim;

},{"985d3c9be7b51937":"9tLIS"}],"9tLIS":[function(require,module,exports) {
/** Used to match a single whitespace character. */ var reWhitespace = /\s/;
/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */ function trimmedEndIndex(string) {
    var index = string.length;
    while(index-- && reWhitespace.test(string.charAt(index)));
    return index;
}
module.exports = trimmedEndIndex;

},{}],"91AYQ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isSequenceProd = exports.isBranchingProd = exports.isOptionalProd = exports.getProductionDslName = exports.GAstVisitor = exports.serializeProduction = exports.serializeGrammar = exports.Alternative = exports.Alternation = exports.RepetitionWithSeparator = exports.RepetitionMandatoryWithSeparator = exports.RepetitionMandatory = exports.Repetition = exports.Option = exports.NonTerminal = exports.Terminal = exports.Rule = void 0;
var model_1 = require("7de90d6093b028a6");
Object.defineProperty(exports, "Rule", {
    enumerable: true,
    get: function() {
        return model_1.Rule;
    }
});
Object.defineProperty(exports, "Terminal", {
    enumerable: true,
    get: function() {
        return model_1.Terminal;
    }
});
Object.defineProperty(exports, "NonTerminal", {
    enumerable: true,
    get: function() {
        return model_1.NonTerminal;
    }
});
Object.defineProperty(exports, "Option", {
    enumerable: true,
    get: function() {
        return model_1.Option;
    }
});
Object.defineProperty(exports, "Repetition", {
    enumerable: true,
    get: function() {
        return model_1.Repetition;
    }
});
Object.defineProperty(exports, "RepetitionMandatory", {
    enumerable: true,
    get: function() {
        return model_1.RepetitionMandatory;
    }
});
Object.defineProperty(exports, "RepetitionMandatoryWithSeparator", {
    enumerable: true,
    get: function() {
        return model_1.RepetitionMandatoryWithSeparator;
    }
});
Object.defineProperty(exports, "RepetitionWithSeparator", {
    enumerable: true,
    get: function() {
        return model_1.RepetitionWithSeparator;
    }
});
Object.defineProperty(exports, "Alternation", {
    enumerable: true,
    get: function() {
        return model_1.Alternation;
    }
});
Object.defineProperty(exports, "Alternative", {
    enumerable: true,
    get: function() {
        return model_1.Alternative;
    }
});
Object.defineProperty(exports, "serializeGrammar", {
    enumerable: true,
    get: function() {
        return model_1.serializeGrammar;
    }
});
Object.defineProperty(exports, "serializeProduction", {
    enumerable: true,
    get: function() {
        return model_1.serializeProduction;
    }
});
var visitor_1 = require("edad522607fe697b");
Object.defineProperty(exports, "GAstVisitor", {
    enumerable: true,
    get: function() {
        return visitor_1.GAstVisitor;
    }
});
var helpers_1 = require("9a7478be0f364f6e");
Object.defineProperty(exports, "getProductionDslName", {
    enumerable: true,
    get: function() {
        return helpers_1.getProductionDslName;
    }
});
Object.defineProperty(exports, "isOptionalProd", {
    enumerable: true,
    get: function() {
        return helpers_1.isOptionalProd;
    }
});
Object.defineProperty(exports, "isBranchingProd", {
    enumerable: true,
    get: function() {
        return helpers_1.isBranchingProd;
    }
});
Object.defineProperty(exports, "isSequenceProd", {
    enumerable: true,
    get: function() {
        return helpers_1.isSequenceProd;
    }
});

},{"7de90d6093b028a6":"ePafn","edad522607fe697b":"80QPC","9a7478be0f364f6e":"bFdRQ"}],"ePafn":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.serializeProduction = exports.serializeGrammar = exports.Terminal = exports.Alternation = exports.RepetitionWithSeparator = exports.Repetition = exports.RepetitionMandatoryWithSeparator = exports.RepetitionMandatory = exports.Option = exports.Alternative = exports.Rule = exports.NonTerminal = exports.AbstractProduction = void 0;
var map_1 = __importDefault(require("32a44ff15710f6c0"));
var forEach_1 = __importDefault(require("ae43771c0ca3b42"));
var isString_1 = __importDefault(require("df99b15ec0864534"));
var isRegExp_1 = __importDefault(require("8b4247bcc4c0be58"));
var pickBy_1 = __importDefault(require("1d9c6764e71061fb"));
var assign_1 = __importDefault(require("5565315e696537a9"));
// TODO: duplicated code to avoid extracting another sub-package -- how to avoid?
function tokenLabel(tokType) {
    if (hasTokenLabel(tokType)) return tokType.LABEL;
    else return tokType.name;
}
// TODO: duplicated code to avoid extracting another sub-package -- how to avoid?
function hasTokenLabel(obj) {
    return (0, isString_1.default)(obj.LABEL) && obj.LABEL !== "";
}
var AbstractProduction = /** @class */ function() {
    function AbstractProduction(_definition) {
        this._definition = _definition;
    }
    Object.defineProperty(AbstractProduction.prototype, "definition", {
        get: function() {
            return this._definition;
        },
        set: function(value) {
            this._definition = value;
        },
        enumerable: false,
        configurable: true
    });
    AbstractProduction.prototype.accept = function(visitor) {
        visitor.visit(this);
        (0, forEach_1.default)(this.definition, function(prod) {
            prod.accept(visitor);
        });
    };
    return AbstractProduction;
}();
exports.AbstractProduction = AbstractProduction;
var NonTerminal = /** @class */ function(_super) {
    __extends(NonTerminal, _super);
    function NonTerminal(options) {
        var _this = _super.call(this, []) || this;
        _this.idx = 1;
        (0, assign_1.default)(_this, (0, pickBy_1.default)(options, function(v) {
            return v !== undefined;
        }));
        return _this;
    }
    Object.defineProperty(NonTerminal.prototype, "definition", {
        get: function() {
            if (this.referencedRule !== undefined) return this.referencedRule.definition;
            return [];
        },
        set: function(definition) {
        // immutable
        },
        enumerable: false,
        configurable: true
    });
    NonTerminal.prototype.accept = function(visitor) {
        visitor.visit(this);
    // don't visit children of a reference, we will get cyclic infinite loops if we do so
    };
    return NonTerminal;
}(AbstractProduction);
exports.NonTerminal = NonTerminal;
var Rule = /** @class */ function(_super) {
    __extends(Rule, _super);
    function Rule(options) {
        var _this = _super.call(this, options.definition) || this;
        _this.orgText = "";
        (0, assign_1.default)(_this, (0, pickBy_1.default)(options, function(v) {
            return v !== undefined;
        }));
        return _this;
    }
    return Rule;
}(AbstractProduction);
exports.Rule = Rule;
var Alternative = /** @class */ function(_super) {
    __extends(Alternative, _super);
    function Alternative(options) {
        var _this = _super.call(this, options.definition) || this;
        _this.ignoreAmbiguities = false;
        (0, assign_1.default)(_this, (0, pickBy_1.default)(options, function(v) {
            return v !== undefined;
        }));
        return _this;
    }
    return Alternative;
}(AbstractProduction);
exports.Alternative = Alternative;
var Option = /** @class */ function(_super) {
    __extends(Option, _super);
    function Option(options) {
        var _this = _super.call(this, options.definition) || this;
        _this.idx = 1;
        (0, assign_1.default)(_this, (0, pickBy_1.default)(options, function(v) {
            return v !== undefined;
        }));
        return _this;
    }
    return Option;
}(AbstractProduction);
exports.Option = Option;
var RepetitionMandatory = /** @class */ function(_super) {
    __extends(RepetitionMandatory, _super);
    function RepetitionMandatory(options) {
        var _this = _super.call(this, options.definition) || this;
        _this.idx = 1;
        (0, assign_1.default)(_this, (0, pickBy_1.default)(options, function(v) {
            return v !== undefined;
        }));
        return _this;
    }
    return RepetitionMandatory;
}(AbstractProduction);
exports.RepetitionMandatory = RepetitionMandatory;
var RepetitionMandatoryWithSeparator = /** @class */ function(_super) {
    __extends(RepetitionMandatoryWithSeparator, _super);
    function RepetitionMandatoryWithSeparator(options) {
        var _this = _super.call(this, options.definition) || this;
        _this.idx = 1;
        (0, assign_1.default)(_this, (0, pickBy_1.default)(options, function(v) {
            return v !== undefined;
        }));
        return _this;
    }
    return RepetitionMandatoryWithSeparator;
}(AbstractProduction);
exports.RepetitionMandatoryWithSeparator = RepetitionMandatoryWithSeparator;
var Repetition = /** @class */ function(_super) {
    __extends(Repetition, _super);
    function Repetition(options) {
        var _this = _super.call(this, options.definition) || this;
        _this.idx = 1;
        (0, assign_1.default)(_this, (0, pickBy_1.default)(options, function(v) {
            return v !== undefined;
        }));
        return _this;
    }
    return Repetition;
}(AbstractProduction);
exports.Repetition = Repetition;
var RepetitionWithSeparator = /** @class */ function(_super) {
    __extends(RepetitionWithSeparator, _super);
    function RepetitionWithSeparator(options) {
        var _this = _super.call(this, options.definition) || this;
        _this.idx = 1;
        (0, assign_1.default)(_this, (0, pickBy_1.default)(options, function(v) {
            return v !== undefined;
        }));
        return _this;
    }
    return RepetitionWithSeparator;
}(AbstractProduction);
exports.RepetitionWithSeparator = RepetitionWithSeparator;
var Alternation = /** @class */ function(_super) {
    __extends(Alternation, _super);
    function Alternation(options) {
        var _this = _super.call(this, options.definition) || this;
        _this.idx = 1;
        _this.ignoreAmbiguities = false;
        _this.hasPredicates = false;
        (0, assign_1.default)(_this, (0, pickBy_1.default)(options, function(v) {
            return v !== undefined;
        }));
        return _this;
    }
    Object.defineProperty(Alternation.prototype, "definition", {
        get: function() {
            return this._definition;
        },
        set: function(value) {
            this._definition = value;
        },
        enumerable: false,
        configurable: true
    });
    return Alternation;
}(AbstractProduction);
exports.Alternation = Alternation;
var Terminal = /** @class */ function() {
    function Terminal(options) {
        this.idx = 1;
        (0, assign_1.default)(this, (0, pickBy_1.default)(options, function(v) {
            return v !== undefined;
        }));
    }
    Terminal.prototype.accept = function(visitor) {
        visitor.visit(this);
    };
    return Terminal;
}();
exports.Terminal = Terminal;
function serializeGrammar(topRules) {
    return (0, map_1.default)(topRules, serializeProduction);
}
exports.serializeGrammar = serializeGrammar;
function serializeProduction(node) {
    function convertDefinition(definition) {
        return (0, map_1.default)(definition, serializeProduction);
    }
    /* istanbul ignore else */ if (node instanceof NonTerminal) {
        var serializedNonTerminal = {
            type: "NonTerminal",
            name: node.nonTerminalName,
            idx: node.idx
        };
        if ((0, isString_1.default)(node.label)) serializedNonTerminal.label = node.label;
        return serializedNonTerminal;
    } else if (node instanceof Alternative) return {
        type: "Alternative",
        definition: convertDefinition(node.definition)
    };
    else if (node instanceof Option) return {
        type: "Option",
        idx: node.idx,
        definition: convertDefinition(node.definition)
    };
    else if (node instanceof RepetitionMandatory) return {
        type: "RepetitionMandatory",
        idx: node.idx,
        definition: convertDefinition(node.definition)
    };
    else if (node instanceof RepetitionMandatoryWithSeparator) return {
        type: "RepetitionMandatoryWithSeparator",
        idx: node.idx,
        separator: serializeProduction(new Terminal({
            terminalType: node.separator
        })),
        definition: convertDefinition(node.definition)
    };
    else if (node instanceof RepetitionWithSeparator) return {
        type: "RepetitionWithSeparator",
        idx: node.idx,
        separator: serializeProduction(new Terminal({
            terminalType: node.separator
        })),
        definition: convertDefinition(node.definition)
    };
    else if (node instanceof Repetition) return {
        type: "Repetition",
        idx: node.idx,
        definition: convertDefinition(node.definition)
    };
    else if (node instanceof Alternation) return {
        type: "Alternation",
        idx: node.idx,
        definition: convertDefinition(node.definition)
    };
    else if (node instanceof Terminal) {
        var serializedTerminal = {
            type: "Terminal",
            name: node.terminalType.name,
            label: tokenLabel(node.terminalType),
            idx: node.idx
        };
        if ((0, isString_1.default)(node.label)) serializedTerminal.terminalLabel = node.label;
        var pattern = node.terminalType.PATTERN;
        if (node.terminalType.PATTERN) serializedTerminal.pattern = (0, isRegExp_1.default)(pattern) ? pattern.source : pattern;
        return serializedTerminal;
    } else if (node instanceof Rule) return {
        type: "Rule",
        name: node.name,
        orgText: node.orgText,
        definition: convertDefinition(node.definition)
    };
    else throw Error("non exhaustive match");
}
exports.serializeProduction = serializeProduction;

},{"32a44ff15710f6c0":"68KdA","ae43771c0ca3b42":"cQbs0","df99b15ec0864534":"L9IoN","8b4247bcc4c0be58":"82OiY","1d9c6764e71061fb":"9BWKY","5565315e696537a9":"4WXly"}],"L9IoN":[function(require,module,exports) {
var baseGetTag = require("b4b8a393acf14901"), isArray = require("46fdd4d2c5d7b4ab"), isObjectLike = require("36ebbb6a9d8b3fe4");
/** `Object#toString` result references. */ var stringTag = "[object String]";
/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */ function isString(value) {
    return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
}
module.exports = isString;

},{"b4b8a393acf14901":"gVnZH","46fdd4d2c5d7b4ab":"csCQN","36ebbb6a9d8b3fe4":"gu57I"}],"82OiY":[function(require,module,exports) {
var baseIsRegExp = require("36a2693d4173542"), baseUnary = require("effaa876cd30b882"), nodeUtil = require("4cee4fa1e8734775");
/* Node.js helper references. */ var nodeIsRegExp = nodeUtil && nodeUtil.isRegExp;
/**
 * Checks if `value` is classified as a `RegExp` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
 * @example
 *
 * _.isRegExp(/abc/);
 * // => true
 *
 * _.isRegExp('/abc/');
 * // => false
 */ var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
module.exports = isRegExp;

},{"36a2693d4173542":"8wmca","effaa876cd30b882":"9lPWq","4cee4fa1e8734775":"34Uar"}],"8wmca":[function(require,module,exports) {
var baseGetTag = require("7087d9a4570feb6a"), isObjectLike = require("d35660d37f3f2e0");
/** `Object#toString` result references. */ var regexpTag = "[object RegExp]";
/**
 * The base implementation of `_.isRegExp` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
 */ function baseIsRegExp(value) {
    return isObjectLike(value) && baseGetTag(value) == regexpTag;
}
module.exports = baseIsRegExp;

},{"7087d9a4570feb6a":"gVnZH","d35660d37f3f2e0":"gu57I"}],"9BWKY":[function(require,module,exports) {
var arrayMap = require("6fd113b3f5002de4"), baseIteratee = require("1e32e0d8feab18e"), basePickBy = require("85ba60b03da46517"), getAllKeysIn = require("86922ee5dcf85621");
/**
 * Creates an object composed of the `object` properties `predicate` returns
 * truthy for. The predicate is invoked with two arguments: (value, key).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The source object.
 * @param {Function} [predicate=_.identity] The function invoked per property.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pickBy(object, _.isNumber);
 * // => { 'a': 1, 'c': 3 }
 */ function pickBy(object, predicate) {
    if (object == null) return {};
    var props = arrayMap(getAllKeysIn(object), function(prop) {
        return [
            prop
        ];
    });
    predicate = baseIteratee(predicate);
    return basePickBy(object, props, function(value, path) {
        return predicate(value, path[0]);
    });
}
module.exports = pickBy;

},{"6fd113b3f5002de4":"7ZLP0","1e32e0d8feab18e":"ant2T","85ba60b03da46517":"dFFOz","86922ee5dcf85621":"aUBL4"}],"dFFOz":[function(require,module,exports) {
var baseGet = require("d8aa974fba65e61e"), baseSet = require("b07dbab95dca4167"), castPath = require("64b51364f27b9088");
/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */ function basePickBy(object, paths, predicate) {
    var index = -1, length = paths.length, result = {};
    while(++index < length){
        var path = paths[index], value = baseGet(object, path);
        if (predicate(value, path)) baseSet(result, castPath(path, object), value);
    }
    return result;
}
module.exports = basePickBy;

},{"d8aa974fba65e61e":"f6p4t","b07dbab95dca4167":"fYLvf","64b51364f27b9088":"hkm5D"}],"fYLvf":[function(require,module,exports) {
var assignValue = require("a01f3b7ce097c710"), castPath = require("56e0b8a492d56399"), isIndex = require("d1eb8acc5a65dc38"), isObject = require("dfb182b16ef275c0"), toKey = require("6a51dc787ca5b6e3");
/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */ function baseSet(object, path, value, customizer) {
    if (!isObject(object)) return object;
    path = castPath(path, object);
    var index = -1, length = path.length, lastIndex = length - 1, nested = object;
    while(nested != null && ++index < length){
        var key = toKey(path[index]), newValue = value;
        if (key === "__proto__" || key === "constructor" || key === "prototype") return object;
        if (index != lastIndex) {
            var objValue = nested[key];
            newValue = customizer ? customizer(objValue, key, nested) : undefined;
            if (newValue === undefined) newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
        }
        assignValue(nested, key, newValue);
        nested = nested[key];
    }
    return object;
}
module.exports = baseSet;

},{"a01f3b7ce097c710":"8hgsW","56e0b8a492d56399":"hkm5D","d1eb8acc5a65dc38":"bh2kv","dfb182b16ef275c0":"aKVxX","6a51dc787ca5b6e3":"1yuGZ"}],"4WXly":[function(require,module,exports) {
var assignValue = require("cd50f116bb7c0628"), copyObject = require("7bcaa9d60d9bad0c"), createAssigner = require("db25c5a8055340d4"), isArrayLike = require("b829ba96c1ea24e1"), isPrototype = require("add8cc04c06f0a24"), keys = require("3f4056e956015995");
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Assigns own enumerable string keyed properties of source objects to the
 * destination object. Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object` and is loosely based on
 * [`Object.assign`](https://mdn.io/Object/assign).
 *
 * @static
 * @memberOf _
 * @since 0.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assignIn
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assign({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'c': 3 }
 */ var assign = createAssigner(function(object, source) {
    if (isPrototype(source) || isArrayLike(source)) {
        copyObject(source, keys(source), object);
        return;
    }
    for(var key in source)if (hasOwnProperty.call(source, key)) assignValue(object, key, source[key]);
});
module.exports = assign;

},{"cd50f116bb7c0628":"8hgsW","7bcaa9d60d9bad0c":"5pgrF","db25c5a8055340d4":"843rg","b829ba96c1ea24e1":"f1oKE","add8cc04c06f0a24":"5r2uA","3f4056e956015995":"2MKLE"}],"843rg":[function(require,module,exports) {
var baseRest = require("b91f3c8e236f389b"), isIterateeCall = require("4f5832110eba92d3");
/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */ function createAssigner(assigner) {
    return baseRest(function(object, sources) {
        var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined, guard = length > 2 ? sources[2] : undefined;
        customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined;
        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
            customizer = length < 3 ? undefined : customizer;
            length = 1;
        }
        object = Object(object);
        while(++index < length){
            var source = sources[index];
            if (source) assigner(object, source, index, customizer);
        }
        return object;
    });
}
module.exports = createAssigner;

},{"b91f3c8e236f389b":"72E4L","4f5832110eba92d3":"cpc9v"}],"72E4L":[function(require,module,exports) {
var identity = require("3b2979bd51a0f85f"), overRest = require("ff7d23ff2a2ea6f8"), setToString = require("a11d545e809d14f7");
/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */ function baseRest(func, start) {
    return setToString(overRest(func, start, identity), func + "");
}
module.exports = baseRest;

},{"3b2979bd51a0f85f":"5rttf","ff7d23ff2a2ea6f8":"d2IdI","a11d545e809d14f7":"jganf"}],"d2IdI":[function(require,module,exports) {
var apply = require("6f683b05f63ed25a");
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeMax = Math.max;
/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */ function overRest(func, start, transform) {
    start = nativeMax(start === undefined ? func.length - 1 : start, 0);
    return function() {
        var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
        while(++index < length)array[index] = args[start + index];
        index = -1;
        var otherArgs = Array(start + 1);
        while(++index < start)otherArgs[index] = args[index];
        otherArgs[start] = transform(array);
        return apply(func, this, otherArgs);
    };
}
module.exports = overRest;

},{"6f683b05f63ed25a":"9Ukjw"}],"9Ukjw":[function(require,module,exports) {
/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */ function apply(func, thisArg, args) {
    switch(args.length){
        case 0:
            return func.call(thisArg);
        case 1:
            return func.call(thisArg, args[0]);
        case 2:
            return func.call(thisArg, args[0], args[1]);
        case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
}
module.exports = apply;

},{}],"jganf":[function(require,module,exports) {
var baseSetToString = require("eebd487fbab521b6"), shortOut = require("9114f59293388d49");
/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */ var setToString = shortOut(baseSetToString);
module.exports = setToString;

},{"eebd487fbab521b6":"6Unow","9114f59293388d49":"5M8t3"}],"6Unow":[function(require,module,exports) {
var constant = require("706929c7b4749485"), defineProperty = require("eff1240bc0447727"), identity = require("b00d1e57326793e1");
/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */ var baseSetToString = !defineProperty ? identity : function(func, string) {
    return defineProperty(func, "toString", {
        "configurable": true,
        "enumerable": false,
        "value": constant(string),
        "writable": true
    });
};
module.exports = baseSetToString;

},{"706929c7b4749485":"fzLdB","eff1240bc0447727":"2WURa","b00d1e57326793e1":"5rttf"}],"fzLdB":[function(require,module,exports) {
/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */ function constant(value) {
    return function() {
        return value;
    };
}
module.exports = constant;

},{}],"5M8t3":[function(require,module,exports) {
/** Used to detect hot functions by number of calls within a span of milliseconds. */ var HOT_COUNT = 800, HOT_SPAN = 16;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeNow = Date.now;
/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */ function shortOut(func) {
    var count = 0, lastCalled = 0;
    return function() {
        var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
        lastCalled = stamp;
        if (remaining > 0) {
            if (++count >= HOT_COUNT) return arguments[0];
        } else count = 0;
        return func.apply(undefined, arguments);
    };
}
module.exports = shortOut;

},{}],"cpc9v":[function(require,module,exports) {
var eq = require("a8ec2a011d2eca69"), isArrayLike = require("616bc732534dffe0"), isIndex = require("e781332a36d1bd7"), isObject = require("c8548bf6929b8a5d");
/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */ function isIterateeCall(value, index, object) {
    if (!isObject(object)) return false;
    var type = typeof index;
    if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) return eq(object[index], value);
    return false;
}
module.exports = isIterateeCall;

},{"a8ec2a011d2eca69":"7ctDO","616bc732534dffe0":"f1oKE","e781332a36d1bd7":"bh2kv","c8548bf6929b8a5d":"aKVxX"}],"80QPC":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GAstVisitor = void 0;
var model_1 = require("cd225576d2a1aacc");
var GAstVisitor = /** @class */ function() {
    function GAstVisitor() {}
    GAstVisitor.prototype.visit = function(node) {
        var nodeAny = node;
        switch(nodeAny.constructor){
            case model_1.NonTerminal:
                return this.visitNonTerminal(nodeAny);
            case model_1.Alternative:
                return this.visitAlternative(nodeAny);
            case model_1.Option:
                return this.visitOption(nodeAny);
            case model_1.RepetitionMandatory:
                return this.visitRepetitionMandatory(nodeAny);
            case model_1.RepetitionMandatoryWithSeparator:
                return this.visitRepetitionMandatoryWithSeparator(nodeAny);
            case model_1.RepetitionWithSeparator:
                return this.visitRepetitionWithSeparator(nodeAny);
            case model_1.Repetition:
                return this.visitRepetition(nodeAny);
            case model_1.Alternation:
                return this.visitAlternation(nodeAny);
            case model_1.Terminal:
                return this.visitTerminal(nodeAny);
            case model_1.Rule:
                return this.visitRule(nodeAny);
            /* istanbul ignore next */ default:
                throw Error("non exhaustive match");
        }
    };
    /* istanbul ignore next - testing the fact a NOOP function exists is non-trivial  */ GAstVisitor.prototype.visitNonTerminal = function(node) {};
    /* istanbul ignore next - testing the fact a NOOP function exists is non-trivial  */ GAstVisitor.prototype.visitAlternative = function(node) {};
    /* istanbul ignore next - testing the fact a NOOP function exists is non-trivial  */ GAstVisitor.prototype.visitOption = function(node) {};
    /* istanbul ignore next - testing the fact a NOOP function exists is non-trivial  */ GAstVisitor.prototype.visitRepetition = function(node) {};
    /* istanbul ignore next - testing the fact a NOOP function exists is non-trivial  */ GAstVisitor.prototype.visitRepetitionMandatory = function(node) {};
    /* istanbul ignore next - testing the fact a NOOP function exists is non-trivial  */ GAstVisitor.prototype.visitRepetitionMandatoryWithSeparator = function(node) {};
    /* istanbul ignore next - testing the fact a NOOP function exists is non-trivial  */ GAstVisitor.prototype.visitRepetitionWithSeparator = function(node) {};
    /* istanbul ignore next - testing the fact a NOOP function exists is non-trivial  */ GAstVisitor.prototype.visitAlternation = function(node) {};
    /* istanbul ignore next - testing the fact a NOOP function exists is non-trivial  */ GAstVisitor.prototype.visitTerminal = function(node) {};
    /* istanbul ignore next - testing the fact a NOOP function exists is non-trivial  */ GAstVisitor.prototype.visitRule = function(node) {};
    return GAstVisitor;
}();
exports.GAstVisitor = GAstVisitor;

},{"cd225576d2a1aacc":"ePafn"}],"bFdRQ":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getProductionDslName = exports.isBranchingProd = exports.isOptionalProd = exports.isSequenceProd = void 0;
var some_1 = __importDefault(require("aac33301eba7ca40"));
var every_1 = __importDefault(require("1b375b2e7c83a512"));
var includes_1 = __importDefault(require("118cfc12633bc3da"));
var model_1 = require("a1c546e110b7f2bd");
function isSequenceProd(prod) {
    return prod instanceof model_1.Alternative || prod instanceof model_1.Option || prod instanceof model_1.Repetition || prod instanceof model_1.RepetitionMandatory || prod instanceof model_1.RepetitionMandatoryWithSeparator || prod instanceof model_1.RepetitionWithSeparator || prod instanceof model_1.Terminal || prod instanceof model_1.Rule;
}
exports.isSequenceProd = isSequenceProd;
function isOptionalProd(prod, alreadyVisited) {
    if (alreadyVisited === void 0) alreadyVisited = [];
    var isDirectlyOptional = prod instanceof model_1.Option || prod instanceof model_1.Repetition || prod instanceof model_1.RepetitionWithSeparator;
    if (isDirectlyOptional) return true;
    // note that this can cause infinite loop if one optional empty TOP production has a cyclic dependency with another
    // empty optional top rule
    // may be indirectly optional ((A?B?C?) | (D?E?F?))
    if (prod instanceof model_1.Alternation) // for OR its enough for just one of the alternatives to be optional
    return (0, some_1.default)(prod.definition, function(subProd) {
        return isOptionalProd(subProd, alreadyVisited);
    });
    else if (prod instanceof model_1.NonTerminal && (0, includes_1.default)(alreadyVisited, prod)) // avoiding stack overflow due to infinite recursion
    return false;
    else if (prod instanceof model_1.AbstractProduction) {
        if (prod instanceof model_1.NonTerminal) alreadyVisited.push(prod);
        return (0, every_1.default)(prod.definition, function(subProd) {
            return isOptionalProd(subProd, alreadyVisited);
        });
    } else return false;
}
exports.isOptionalProd = isOptionalProd;
function isBranchingProd(prod) {
    return prod instanceof model_1.Alternation;
}
exports.isBranchingProd = isBranchingProd;
function getProductionDslName(prod) {
    /* istanbul ignore else */ if (prod instanceof model_1.NonTerminal) return "SUBRULE";
    else if (prod instanceof model_1.Option) return "OPTION";
    else if (prod instanceof model_1.Alternation) return "OR";
    else if (prod instanceof model_1.RepetitionMandatory) return "AT_LEAST_ONE";
    else if (prod instanceof model_1.RepetitionMandatoryWithSeparator) return "AT_LEAST_ONE_SEP";
    else if (prod instanceof model_1.RepetitionWithSeparator) return "MANY_SEP";
    else if (prod instanceof model_1.Repetition) return "MANY";
    else if (prod instanceof model_1.Terminal) return "CONSUME";
    else throw Error("non exhaustive match");
}
exports.getProductionDslName = getProductionDslName;

},{"aac33301eba7ca40":"9NT48","1b375b2e7c83a512":"aXOSA","118cfc12633bc3da":"l3Nmg","a1c546e110b7f2bd":"ePafn"}],"9NT48":[function(require,module,exports) {
var arraySome = require("499d9ae1b712c84d"), baseIteratee = require("6137baa4d335eb2f"), baseSome = require("dffda66140b0b703"), isArray = require("21c688a994e48617"), isIterateeCall = require("86e6a8e9c3fc8343");
/**
 * Checks if `predicate` returns truthy for **any** element of `collection`.
 * Iteration is stopped once `predicate` returns truthy. The predicate is
 * invoked with three arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 * @example
 *
 * _.some([null, 0, 'yes', false], Boolean);
 * // => true
 *
 * var users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'fred',   'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.some(users, { 'user': 'barney', 'active': false });
 * // => false
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.some(users, ['active', false]);
 * // => true
 *
 * // The `_.property` iteratee shorthand.
 * _.some(users, 'active');
 * // => true
 */ function some(collection, predicate, guard) {
    var func = isArray(collection) ? arraySome : baseSome;
    if (guard && isIterateeCall(collection, predicate, guard)) predicate = undefined;
    return func(collection, baseIteratee(predicate, 3));
}
module.exports = some;

},{"499d9ae1b712c84d":"4nlxl","6137baa4d335eb2f":"ant2T","dffda66140b0b703":"g49av","21c688a994e48617":"csCQN","86e6a8e9c3fc8343":"cpc9v"}],"g49av":[function(require,module,exports) {
var baseEach = require("fbf6b3dce93949f8");
/**
 * The base implementation of `_.some` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */ function baseSome(collection, predicate) {
    var result;
    baseEach(collection, function(value, index, collection) {
        result = predicate(value, index, collection);
        return !result;
    });
    return !!result;
}
module.exports = baseSome;

},{"fbf6b3dce93949f8":"gT3xd"}],"aXOSA":[function(require,module,exports) {
var arrayEvery = require("35998aa94ab060f1"), baseEvery = require("44e7ab95f8b26a55"), baseIteratee = require("1d5621a35ca53be0"), isArray = require("e0e4c2e424adb44f"), isIterateeCall = require("2f9b3b0ab0300132");
/**
 * Checks if `predicate` returns truthy for **all** elements of `collection`.
 * Iteration is stopped once `predicate` returns falsey. The predicate is
 * invoked with three arguments: (value, index|key, collection).
 *
 * **Note:** This method returns `true` for
 * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
 * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
 * elements of empty collections.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`.
 * @example
 *
 * _.every([true, 1, null, 'yes'], Boolean);
 * // => false
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': false },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.every(users, { 'user': 'barney', 'active': false });
 * // => false
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.every(users, ['active', false]);
 * // => true
 *
 * // The `_.property` iteratee shorthand.
 * _.every(users, 'active');
 * // => false
 */ function every(collection, predicate, guard) {
    var func = isArray(collection) ? arrayEvery : baseEvery;
    if (guard && isIterateeCall(collection, predicate, guard)) predicate = undefined;
    return func(collection, baseIteratee(predicate, 3));
}
module.exports = every;

},{"35998aa94ab060f1":"2T7uv","44e7ab95f8b26a55":"jNiyk","1d5621a35ca53be0":"ant2T","e0e4c2e424adb44f":"csCQN","2f9b3b0ab0300132":"cpc9v"}],"2T7uv":[function(require,module,exports) {
/**
 * A specialized version of `_.every` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`.
 */ function arrayEvery(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length;
    while(++index < length){
        if (!predicate(array[index], index, array)) return false;
    }
    return true;
}
module.exports = arrayEvery;

},{}],"jNiyk":[function(require,module,exports) {
var baseEach = require("88b2ceed9e7ead7a");
/**
 * The base implementation of `_.every` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`
 */ function baseEvery(collection, predicate) {
    var result = true;
    baseEach(collection, function(value, index, collection) {
        result = !!predicate(value, index, collection);
        return result;
    });
    return result;
}
module.exports = baseEvery;

},{"88b2ceed9e7ead7a":"gT3xd"}],"l3Nmg":[function(require,module,exports) {
var baseIndexOf = require("be21b9c147562b02"), isArrayLike = require("6b484a793d8b5ea9"), isString = require("bdb00e2bd146c748"), toInteger = require("c8f4f1fcd82bd63e"), values = require("2f52c3a6f24a285e");
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeMax = Math.max;
/**
 * Checks if `value` is in `collection`. If `collection` is a string, it's
 * checked for a substring of `value`, otherwise
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * is used for equality comparisons. If `fromIndex` is negative, it's used as
 * the offset from the end of `collection`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {boolean} Returns `true` if `value` is found, else `false`.
 * @example
 *
 * _.includes([1, 2, 3], 1);
 * // => true
 *
 * _.includes([1, 2, 3], 1, 2);
 * // => false
 *
 * _.includes({ 'a': 1, 'b': 2 }, 1);
 * // => true
 *
 * _.includes('abcd', 'bc');
 * // => true
 */ function includes(collection, value, fromIndex, guard) {
    collection = isArrayLike(collection) ? collection : values(collection);
    fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
    var length = collection.length;
    if (fromIndex < 0) fromIndex = nativeMax(length + fromIndex, 0);
    return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
}
module.exports = includes;

},{"be21b9c147562b02":"agNYp","6b484a793d8b5ea9":"f1oKE","bdb00e2bd146c748":"L9IoN","c8f4f1fcd82bd63e":"hljBn","2f52c3a6f24a285e":"7Uoc6"}],"agNYp":[function(require,module,exports) {
var baseFindIndex = require("badcebec79c8cd4"), baseIsNaN = require("c991ed2b82d165b"), strictIndexOf = require("c0bb8190b05a00a5");
/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */ function baseIndexOf(array, value, fromIndex) {
    return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
}
module.exports = baseIndexOf;

},{"badcebec79c8cd4":"3OlL3","c991ed2b82d165b":"1qIza","c0bb8190b05a00a5":"iWjr2"}],"3OlL3":[function(require,module,exports) {
/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */ function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
    while(fromRight ? index-- : ++index < length){
        if (predicate(array[index], index, array)) return index;
    }
    return -1;
}
module.exports = baseFindIndex;

},{}],"1qIza":[function(require,module,exports) {
/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */ function baseIsNaN(value) {
    return value !== value;
}
module.exports = baseIsNaN;

},{}],"iWjr2":[function(require,module,exports) {
/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */ function strictIndexOf(array, value, fromIndex) {
    var index = fromIndex - 1, length = array.length;
    while(++index < length){
        if (array[index] === value) return index;
    }
    return -1;
}
module.exports = strictIndexOf;

},{}],"657S2":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.firstForTerminal = exports.firstForBranching = exports.firstForSequence = exports.first = void 0;
var flatten_1 = __importDefault(require("6e791a3561707a50"));
var uniq_1 = __importDefault(require("91c5cb806b311159"));
var map_1 = __importDefault(require("71a2eb525e732e8c"));
var gast_1 = require("f2cf66bdcb483d68");
var gast_2 = require("f2cf66bdcb483d68");
function first(prod) {
    /* istanbul ignore else */ if (prod instanceof gast_1.NonTerminal) // this could in theory cause infinite loops if
    // (1) prod A refs prod B.
    // (2) prod B refs prod A
    // (3) AB can match the empty set
    // in other words a cycle where everything is optional so the first will keep
    // looking ahead for the next optional part and will never exit
    // currently there is no safeguard for this unique edge case because
    // (1) not sure a grammar in which this can happen is useful for anything (productive)
    return first(prod.referencedRule);
    else if (prod instanceof gast_1.Terminal) return firstForTerminal(prod);
    else if ((0, gast_2.isSequenceProd)(prod)) return firstForSequence(prod);
    else if ((0, gast_2.isBranchingProd)(prod)) return firstForBranching(prod);
    else throw Error("non exhaustive match");
}
exports.first = first;
function firstForSequence(prod) {
    var firstSet = [];
    var seq = prod.definition;
    var nextSubProdIdx = 0;
    var hasInnerProdsRemaining = seq.length > nextSubProdIdx;
    var currSubProd;
    // so we enter the loop at least once (if the definition is not empty
    var isLastInnerProdOptional = true;
    // scan a sequence until it's end or until we have found a NONE optional production in it
    while(hasInnerProdsRemaining && isLastInnerProdOptional){
        currSubProd = seq[nextSubProdIdx];
        isLastInnerProdOptional = (0, gast_2.isOptionalProd)(currSubProd);
        firstSet = firstSet.concat(first(currSubProd));
        nextSubProdIdx = nextSubProdIdx + 1;
        hasInnerProdsRemaining = seq.length > nextSubProdIdx;
    }
    return (0, uniq_1.default)(firstSet);
}
exports.firstForSequence = firstForSequence;
function firstForBranching(prod) {
    var allAlternativesFirsts = (0, map_1.default)(prod.definition, function(innerProd) {
        return first(innerProd);
    });
    return (0, uniq_1.default)((0, flatten_1.default)(allAlternativesFirsts));
}
exports.firstForBranching = firstForBranching;
function firstForTerminal(terminal) {
    return [
        terminal.terminalType
    ];
}
exports.firstForTerminal = firstForTerminal;

},{"6e791a3561707a50":"g3ybb","91c5cb806b311159":"6keEx","71a2eb525e732e8c":"68KdA","f2cf66bdcb483d68":"91AYQ"}],"g3ybb":[function(require,module,exports) {
var baseFlatten = require("a35d6abfacb4b52b");
/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */ function flatten(array) {
    var length = array == null ? 0 : array.length;
    return length ? baseFlatten(array, 1) : [];
}
module.exports = flatten;

},{"a35d6abfacb4b52b":"56zU2"}],"56zU2":[function(require,module,exports) {
var arrayPush = require("d752582e5b174691"), isFlattenable = require("ec5f080ebf5764e8");
/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */ function baseFlatten(array, depth, predicate, isStrict, result) {
    var index = -1, length = array.length;
    predicate || (predicate = isFlattenable);
    result || (result = []);
    while(++index < length){
        var value = array[index];
        if (depth > 0 && predicate(value)) {
            if (depth > 1) // Recursively flatten arrays (susceptible to call stack limits).
            baseFlatten(value, depth - 1, predicate, isStrict, result);
            else arrayPush(result, value);
        } else if (!isStrict) result[result.length] = value;
    }
    return result;
}
module.exports = baseFlatten;

},{"d752582e5b174691":"iF3Mr","ec5f080ebf5764e8":"fA251"}],"fA251":[function(require,module,exports) {
var Symbol = require("dde07f6ab8ba5eb5"), isArguments = require("ee6f325d7f5309b1"), isArray = require("ff8d93236e335297");
/** Built-in value references. */ var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;
/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */ function isFlattenable(value) {
    return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
module.exports = isFlattenable;

},{"dde07f6ab8ba5eb5":"UuuqQ","ee6f325d7f5309b1":"4Ud5I","ff8d93236e335297":"csCQN"}],"6keEx":[function(require,module,exports) {
var baseUniq = require("8e268641906a92b2");
/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each element
 * is kept. The order of result values is determined by the order they occur
 * in the array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 */ function uniq(array) {
    return array && array.length ? baseUniq(array) : [];
}
module.exports = uniq;

},{"8e268641906a92b2":"NunOW"}],"NunOW":[function(require,module,exports) {
var SetCache = require("56c8470806d11628"), arrayIncludes = require("a1d85be956e037a9"), arrayIncludesWith = require("8cd18f86a4a2c118"), cacheHas = require("3acf9f4a3a78c511"), createSet = require("19b77385b4f7775a"), setToArray = require("4568580f7416eb83");
/** Used as the size to enable large array optimizations. */ var LARGE_ARRAY_SIZE = 200;
/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */ function baseUniq(array, iteratee, comparator) {
    var index = -1, includes = arrayIncludes, length = array.length, isCommon = true, result = [], seen = result;
    if (comparator) {
        isCommon = false;
        includes = arrayIncludesWith;
    } else if (length >= LARGE_ARRAY_SIZE) {
        var set = iteratee ? null : createSet(array);
        if (set) return setToArray(set);
        isCommon = false;
        includes = cacheHas;
        seen = new SetCache;
    } else seen = iteratee ? [] : result;
    outer: while(++index < length){
        var value = array[index], computed = iteratee ? iteratee(value) : value;
        value = comparator || value !== 0 ? value : 0;
        if (isCommon && computed === computed) {
            var seenIndex = seen.length;
            while(seenIndex--){
                if (seen[seenIndex] === computed) continue outer;
            }
            if (iteratee) seen.push(computed);
            result.push(value);
        } else if (!includes(seen, computed, comparator)) {
            if (seen !== result) seen.push(computed);
            result.push(value);
        }
    }
    return result;
}
module.exports = baseUniq;

},{"56c8470806d11628":"2wivS","a1d85be956e037a9":"25ck6","8cd18f86a4a2c118":"6kZPK","3acf9f4a3a78c511":"4k7Oh","19b77385b4f7775a":"3vTyZ","4568580f7416eb83":"8VA79"}],"25ck6":[function(require,module,exports) {
var baseIndexOf = require("277b2d1a618f2b2f");
/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */ function arrayIncludes(array, value) {
    var length = array == null ? 0 : array.length;
    return !!length && baseIndexOf(array, value, 0) > -1;
}
module.exports = arrayIncludes;

},{"277b2d1a618f2b2f":"agNYp"}],"6kZPK":[function(require,module,exports) {
/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */ function arrayIncludesWith(array, value, comparator) {
    var index = -1, length = array == null ? 0 : array.length;
    while(++index < length){
        if (comparator(value, array[index])) return true;
    }
    return false;
}
module.exports = arrayIncludesWith;

},{}],"3vTyZ":[function(require,module,exports) {
var Set = require("17777365baf8e16"), noop = require("a02c367b3608ccee"), setToArray = require("cd8d0af6a14b2f7d");
/** Used as references for various `Number` constants. */ var INFINITY = 1 / 0;
/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */ var createSet = !(Set && 1 / setToArray(new Set([
    ,
    -0
]))[1] == INFINITY) ? noop : function(values) {
    return new Set(values);
};
module.exports = createSet;

},{"17777365baf8e16":"4jhxb","a02c367b3608ccee":"8MwRz","cd8d0af6a14b2f7d":"8VA79"}],"8MwRz":[function(require,module,exports) {
/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */ function noop() {
// No operation performed.
}
module.exports = noop;

},{}],"66C8j":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IN = void 0;
// TODO: can this be removed? where is it used?
exports.IN = "_~IN~_";

},{}],"gJ9lp":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.tokenMatcher = exports.createTokenInstance = exports.EOF = exports.createToken = exports.hasTokenLabel = exports.tokenName = exports.tokenLabel = void 0;
var isString_1 = __importDefault(require("b5cc77676aae5a76"));
var has_1 = __importDefault(require("9a1e9c71408e1355"));
var isUndefined_1 = __importDefault(require("a6e786a4402ae13d"));
var lexer_public_1 = require("ec98d0bb21c49a5a");
var tokens_1 = require("afdd22c40dbc0b75");
function tokenLabel(tokType) {
    if (hasTokenLabel(tokType)) return tokType.LABEL;
    else return tokType.name;
}
exports.tokenLabel = tokenLabel;
function tokenName(tokType) {
    return tokType.name;
}
exports.tokenName = tokenName;
function hasTokenLabel(obj) {
    return (0, isString_1.default)(obj.LABEL) && obj.LABEL !== "";
}
exports.hasTokenLabel = hasTokenLabel;
var PARENT = "parent";
var CATEGORIES = "categories";
var LABEL = "label";
var GROUP = "group";
var PUSH_MODE = "push_mode";
var POP_MODE = "pop_mode";
var LONGER_ALT = "longer_alt";
var LINE_BREAKS = "line_breaks";
var START_CHARS_HINT = "start_chars_hint";
function createToken(config) {
    return createTokenInternal(config);
}
exports.createToken = createToken;
function createTokenInternal(config) {
    var pattern = config.pattern;
    var tokenType = {};
    tokenType.name = config.name;
    if (!(0, isUndefined_1.default)(pattern)) tokenType.PATTERN = pattern;
    if ((0, has_1.default)(config, PARENT)) throw "The parent property is no longer supported.\nSee: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.";
    if ((0, has_1.default)(config, CATEGORIES)) // casting to ANY as this will be fixed inside `augmentTokenTypes``
    tokenType.CATEGORIES = config[CATEGORIES];
    (0, tokens_1.augmentTokenTypes)([
        tokenType
    ]);
    if ((0, has_1.default)(config, LABEL)) tokenType.LABEL = config[LABEL];
    if ((0, has_1.default)(config, GROUP)) tokenType.GROUP = config[GROUP];
    if ((0, has_1.default)(config, POP_MODE)) tokenType.POP_MODE = config[POP_MODE];
    if ((0, has_1.default)(config, PUSH_MODE)) tokenType.PUSH_MODE = config[PUSH_MODE];
    if ((0, has_1.default)(config, LONGER_ALT)) tokenType.LONGER_ALT = config[LONGER_ALT];
    if ((0, has_1.default)(config, LINE_BREAKS)) tokenType.LINE_BREAKS = config[LINE_BREAKS];
    if ((0, has_1.default)(config, START_CHARS_HINT)) tokenType.START_CHARS_HINT = config[START_CHARS_HINT];
    return tokenType;
}
exports.EOF = createToken({
    name: "EOF",
    pattern: lexer_public_1.Lexer.NA
});
(0, tokens_1.augmentTokenTypes)([
    exports.EOF
]);
function createTokenInstance(tokType, image, startOffset, endOffset, startLine, endLine, startColumn, endColumn) {
    return {
        image: image,
        startOffset: startOffset,
        endOffset: endOffset,
        startLine: startLine,
        endLine: endLine,
        startColumn: startColumn,
        endColumn: endColumn,
        tokenTypeIdx: tokType.tokenTypeIdx,
        tokenType: tokType
    };
}
exports.createTokenInstance = createTokenInstance;
function tokenMatcher(token, tokType) {
    return (0, tokens_1.tokenStructuredMatcher)(token, tokType);
}
exports.tokenMatcher = tokenMatcher;

},{"b5cc77676aae5a76":"L9IoN","9a1e9c71408e1355":"j5BJo","a6e786a4402ae13d":"hSDL2","ec98d0bb21c49a5a":"dbzZf","afdd22c40dbc0b75":"1KnzY"}],"hSDL2":[function(require,module,exports) {
/**
 * Checks if `value` is `undefined`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * _.isUndefined(void 0);
 * // => true
 *
 * _.isUndefined(null);
 * // => false
 */ function isUndefined(value) {
    return value === undefined;
}
module.exports = isUndefined;

},{}],"dbzZf":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Lexer = exports.LexerDefinitionErrorType = void 0;
var lexer_1 = require("501971947d1fbf88");
var noop_1 = __importDefault(require("998e28e3252194e8"));
var isEmpty_1 = __importDefault(require("1607c3193e8a00dc"));
var isArray_1 = __importDefault(require("704c83ac470a11e1"));
var last_1 = __importDefault(require("4523d4147cca0b81"));
var reject_1 = __importDefault(require("bda059584a96a42"));
var map_1 = __importDefault(require("6f52edffefe6f121"));
var forEach_1 = __importDefault(require("c875770b9bb1be24"));
var keys_1 = __importDefault(require("28e0b3fbb0a066d7"));
var isUndefined_1 = __importDefault(require("101d385bc69c21db"));
var identity_1 = __importDefault(require("39fee7893534c223"));
var assign_1 = __importDefault(require("cbb87dcf6c3625cb"));
var reduce_1 = __importDefault(require("be70e53ba14e3873"));
var clone_1 = __importDefault(require("68f8e5b560c22193"));
var utils_1 = require("dde4d586b82eb9c3");
var tokens_1 = require("2177d3dece80def");
var lexer_errors_public_1 = require("d9e1d597002046a1");
var reg_exp_parser_1 = require("a1f0de4f5fc88ea5");
var LexerDefinitionErrorType;
(function(LexerDefinitionErrorType) {
    LexerDefinitionErrorType[LexerDefinitionErrorType["MISSING_PATTERN"] = 0] = "MISSING_PATTERN";
    LexerDefinitionErrorType[LexerDefinitionErrorType["INVALID_PATTERN"] = 1] = "INVALID_PATTERN";
    LexerDefinitionErrorType[LexerDefinitionErrorType["EOI_ANCHOR_FOUND"] = 2] = "EOI_ANCHOR_FOUND";
    LexerDefinitionErrorType[LexerDefinitionErrorType["UNSUPPORTED_FLAGS_FOUND"] = 3] = "UNSUPPORTED_FLAGS_FOUND";
    LexerDefinitionErrorType[LexerDefinitionErrorType["DUPLICATE_PATTERNS_FOUND"] = 4] = "DUPLICATE_PATTERNS_FOUND";
    LexerDefinitionErrorType[LexerDefinitionErrorType["INVALID_GROUP_TYPE_FOUND"] = 5] = "INVALID_GROUP_TYPE_FOUND";
    LexerDefinitionErrorType[LexerDefinitionErrorType["PUSH_MODE_DOES_NOT_EXIST"] = 6] = "PUSH_MODE_DOES_NOT_EXIST";
    LexerDefinitionErrorType[LexerDefinitionErrorType["MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE"] = 7] = "MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE";
    LexerDefinitionErrorType[LexerDefinitionErrorType["MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY"] = 8] = "MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY";
    LexerDefinitionErrorType[LexerDefinitionErrorType["MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST"] = 9] = "MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST";
    LexerDefinitionErrorType[LexerDefinitionErrorType["LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED"] = 10] = "LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED";
    LexerDefinitionErrorType[LexerDefinitionErrorType["SOI_ANCHOR_FOUND"] = 11] = "SOI_ANCHOR_FOUND";
    LexerDefinitionErrorType[LexerDefinitionErrorType["EMPTY_MATCH_PATTERN"] = 12] = "EMPTY_MATCH_PATTERN";
    LexerDefinitionErrorType[LexerDefinitionErrorType["NO_LINE_BREAKS_FLAGS"] = 13] = "NO_LINE_BREAKS_FLAGS";
    LexerDefinitionErrorType[LexerDefinitionErrorType["UNREACHABLE_PATTERN"] = 14] = "UNREACHABLE_PATTERN";
    LexerDefinitionErrorType[LexerDefinitionErrorType["IDENTIFY_TERMINATOR"] = 15] = "IDENTIFY_TERMINATOR";
    LexerDefinitionErrorType[LexerDefinitionErrorType["CUSTOM_LINE_BREAK"] = 16] = "CUSTOM_LINE_BREAK";
    LexerDefinitionErrorType[LexerDefinitionErrorType["MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE"] = 17] = "MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE";
})(LexerDefinitionErrorType = exports.LexerDefinitionErrorType || (exports.LexerDefinitionErrorType = {}));
var DEFAULT_LEXER_CONFIG = {
    deferDefinitionErrorsHandling: false,
    positionTracking: "full",
    lineTerminatorsPattern: /\n|\r\n?/g,
    lineTerminatorCharacters: [
        "\n",
        "\r"
    ],
    ensureOptimizations: false,
    safeMode: false,
    errorMessageProvider: lexer_errors_public_1.defaultLexerErrorProvider,
    traceInitPerf: false,
    skipValidations: false,
    recoveryEnabled: true
};
Object.freeze(DEFAULT_LEXER_CONFIG);
var Lexer = /** @class */ function() {
    function Lexer(lexerDefinition, config) {
        if (config === void 0) config = DEFAULT_LEXER_CONFIG;
        var _this = this;
        this.lexerDefinition = lexerDefinition;
        this.lexerDefinitionErrors = [];
        this.lexerDefinitionWarning = [];
        this.patternIdxToConfig = {};
        this.charCodeToPatternIdxToConfig = {};
        this.modes = [];
        this.emptyGroups = {};
        this.trackStartLines = true;
        this.trackEndLines = true;
        this.hasCustom = false;
        this.canModeBeOptimized = {};
        // Duplicated from the parser's perf trace trait to allow future extraction
        // of the lexer to a separate package.
        this.TRACE_INIT = function(phaseDesc, phaseImpl) {
            // No need to optimize this using NOOP pattern because
            // It is not called in a hot spot...
            if (_this.traceInitPerf === true) {
                _this.traceInitIndent++;
                var indent = new Array(_this.traceInitIndent + 1).join("	");
                if (_this.traceInitIndent < _this.traceInitMaxIdent) console.log("".concat(indent, "--> <").concat(phaseDesc, ">"));
                var _a = (0, utils_1.timer)(phaseImpl), time = _a.time, value = _a.value;
                /* istanbul ignore next - Difficult to reproduce specific performance behavior (>10ms) in tests */ var traceMethod = time > 10 ? console.warn : console.log;
                if (_this.traceInitIndent < _this.traceInitMaxIdent) traceMethod("".concat(indent, "<-- <").concat(phaseDesc, "> time: ").concat(time, "ms"));
                _this.traceInitIndent--;
                return value;
            } else return phaseImpl();
        };
        if (typeof config === "boolean") throw Error("The second argument to the Lexer constructor is now an ILexerConfig Object.\na boolean 2nd argument is no longer supported");
        // todo: defaults func?
        this.config = (0, assign_1.default)({}, DEFAULT_LEXER_CONFIG, config);
        var traceInitVal = this.config.traceInitPerf;
        if (traceInitVal === true) {
            this.traceInitMaxIdent = Infinity;
            this.traceInitPerf = true;
        } else if (typeof traceInitVal === "number") {
            this.traceInitMaxIdent = traceInitVal;
            this.traceInitPerf = true;
        }
        this.traceInitIndent = -1;
        this.TRACE_INIT("Lexer Constructor", function() {
            var actualDefinition;
            var hasOnlySingleMode = true;
            _this.TRACE_INIT("Lexer Config handling", function() {
                if (_this.config.lineTerminatorsPattern === DEFAULT_LEXER_CONFIG.lineTerminatorsPattern) // optimized built-in implementation for the defaults definition of lineTerminators
                _this.config.lineTerminatorsPattern = lexer_1.LineTerminatorOptimizedTester;
                else {
                    if (_this.config.lineTerminatorCharacters === DEFAULT_LEXER_CONFIG.lineTerminatorCharacters) throw Error("Error: Missing <lineTerminatorCharacters> property on the Lexer config.\n	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS");
                }
                if (config.safeMode && config.ensureOptimizations) throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');
                _this.trackStartLines = /full|onlyStart/i.test(_this.config.positionTracking);
                _this.trackEndLines = /full/i.test(_this.config.positionTracking);
                // Convert SingleModeLexerDefinition into a IMultiModeLexerDefinition.
                if ((0, isArray_1.default)(lexerDefinition)) actualDefinition = {
                    modes: {
                        defaultMode: (0, clone_1.default)(lexerDefinition)
                    },
                    defaultMode: lexer_1.DEFAULT_MODE
                };
                else {
                    // no conversion needed, input should already be a IMultiModeLexerDefinition
                    hasOnlySingleMode = false;
                    actualDefinition = (0, clone_1.default)(lexerDefinition);
                }
            });
            if (_this.config.skipValidations === false) {
                _this.TRACE_INIT("performRuntimeChecks", function() {
                    _this.lexerDefinitionErrors = _this.lexerDefinitionErrors.concat((0, lexer_1.performRuntimeChecks)(actualDefinition, _this.trackStartLines, _this.config.lineTerminatorCharacters));
                });
                _this.TRACE_INIT("performWarningRuntimeChecks", function() {
                    _this.lexerDefinitionWarning = _this.lexerDefinitionWarning.concat((0, lexer_1.performWarningRuntimeChecks)(actualDefinition, _this.trackStartLines, _this.config.lineTerminatorCharacters));
                });
            }
            // for extra robustness to avoid throwing an none informative error message
            actualDefinition.modes = actualDefinition.modes ? actualDefinition.modes : {};
            // an error of undefined TokenTypes will be detected in "performRuntimeChecks" above.
            // this transformation is to increase robustness in the case of partially invalid lexer definition.
            (0, forEach_1.default)(actualDefinition.modes, function(currModeValue, currModeName) {
                actualDefinition.modes[currModeName] = (0, reject_1.default)(currModeValue, function(currTokType) {
                    return (0, isUndefined_1.default)(currTokType);
                });
            });
            var allModeNames = (0, keys_1.default)(actualDefinition.modes);
            (0, forEach_1.default)(actualDefinition.modes, function(currModDef, currModName) {
                _this.TRACE_INIT("Mode: <".concat(currModName, "> processing"), function() {
                    _this.modes.push(currModName);
                    if (_this.config.skipValidations === false) _this.TRACE_INIT("validatePatterns", function() {
                        _this.lexerDefinitionErrors = _this.lexerDefinitionErrors.concat((0, lexer_1.validatePatterns)(currModDef, allModeNames));
                    });
                    // If definition errors were encountered, the analysis phase may fail unexpectedly/
                    // Considering a lexer with definition errors may never be used, there is no point
                    // to performing the analysis anyhow...
                    if ((0, isEmpty_1.default)(_this.lexerDefinitionErrors)) {
                        (0, tokens_1.augmentTokenTypes)(currModDef);
                        var currAnalyzeResult_1;
                        _this.TRACE_INIT("analyzeTokenTypes", function() {
                            currAnalyzeResult_1 = (0, lexer_1.analyzeTokenTypes)(currModDef, {
                                lineTerminatorCharacters: _this.config.lineTerminatorCharacters,
                                positionTracking: config.positionTracking,
                                ensureOptimizations: config.ensureOptimizations,
                                safeMode: config.safeMode,
                                tracer: _this.TRACE_INIT
                            });
                        });
                        _this.patternIdxToConfig[currModName] = currAnalyzeResult_1.patternIdxToConfig;
                        _this.charCodeToPatternIdxToConfig[currModName] = currAnalyzeResult_1.charCodeToPatternIdxToConfig;
                        _this.emptyGroups = (0, assign_1.default)({}, _this.emptyGroups, currAnalyzeResult_1.emptyGroups);
                        _this.hasCustom = currAnalyzeResult_1.hasCustom || _this.hasCustom;
                        _this.canModeBeOptimized[currModName] = currAnalyzeResult_1.canBeOptimized;
                    }
                });
            });
            _this.defaultMode = actualDefinition.defaultMode;
            if (!(0, isEmpty_1.default)(_this.lexerDefinitionErrors) && !_this.config.deferDefinitionErrorsHandling) {
                var allErrMessages = (0, map_1.default)(_this.lexerDefinitionErrors, function(error) {
                    return error.message;
                });
                var allErrMessagesString = allErrMessages.join("-----------------------\n");
                throw new Error("Errors detected in definition of Lexer:\n" + allErrMessagesString);
            }
            // Only print warning if there are no errors, This will avoid pl
            (0, forEach_1.default)(_this.lexerDefinitionWarning, function(warningDescriptor) {
                (0, utils_1.PRINT_WARNING)(warningDescriptor.message);
            });
            _this.TRACE_INIT("Choosing sub-methods implementations", function() {
                // Choose the relevant internal implementations for this specific parser.
                // These implementations should be in-lined by the JavaScript engine
                // to provide optimal performance in each scenario.
                if (lexer_1.SUPPORT_STICKY) {
                    _this.chopInput = identity_1.default;
                    _this.match = _this.matchWithTest;
                } else {
                    _this.updateLastIndex = noop_1.default;
                    _this.match = _this.matchWithExec;
                }
                if (hasOnlySingleMode) _this.handleModes = noop_1.default;
                if (_this.trackStartLines === false) _this.computeNewColumn = identity_1.default;
                if (_this.trackEndLines === false) _this.updateTokenEndLineColumnLocation = noop_1.default;
                if (/full/i.test(_this.config.positionTracking)) _this.createTokenInstance = _this.createFullToken;
                else if (/onlyStart/i.test(_this.config.positionTracking)) _this.createTokenInstance = _this.createStartOnlyToken;
                else if (/onlyOffset/i.test(_this.config.positionTracking)) _this.createTokenInstance = _this.createOffsetOnlyToken;
                else throw Error('Invalid <positionTracking> config option: "'.concat(_this.config.positionTracking, '"'));
                if (_this.hasCustom) {
                    _this.addToken = _this.addTokenUsingPush;
                    _this.handlePayload = _this.handlePayloadWithCustom;
                } else {
                    _this.addToken = _this.addTokenUsingMemberAccess;
                    _this.handlePayload = _this.handlePayloadNoCustom;
                }
            });
            _this.TRACE_INIT("Failed Optimization Warnings", function() {
                var unOptimizedModes = (0, reduce_1.default)(_this.canModeBeOptimized, function(cannotBeOptimized, canBeOptimized, modeName) {
                    if (canBeOptimized === false) cannotBeOptimized.push(modeName);
                    return cannotBeOptimized;
                }, []);
                if (config.ensureOptimizations && !(0, isEmpty_1.default)(unOptimizedModes)) throw Error("Lexer Modes: < ".concat(unOptimizedModes.join(", "), " > cannot be optimized.\n") + '	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.\n' + "	 Or inspect the console log for details on how to resolve these issues.");
            });
            _this.TRACE_INIT("clearRegExpParserCache", function() {
                (0, reg_exp_parser_1.clearRegExpParserCache)();
            });
            _this.TRACE_INIT("toFastProperties", function() {
                (0, utils_1.toFastProperties)(_this);
            });
        });
    }
    Lexer.prototype.tokenize = function(text, initialMode) {
        if (initialMode === void 0) initialMode = this.defaultMode;
        if (!(0, isEmpty_1.default)(this.lexerDefinitionErrors)) {
            var allErrMessages = (0, map_1.default)(this.lexerDefinitionErrors, function(error) {
                return error.message;
            });
            var allErrMessagesString = allErrMessages.join("-----------------------\n");
            throw new Error("Unable to Tokenize because Errors detected in definition of Lexer:\n" + allErrMessagesString);
        }
        return this.tokenizeInternal(text, initialMode);
    };
    // There is quite a bit of duplication between this and "tokenizeInternalLazy"
    // This is intentional due to performance considerations.
    // this method also used quite a bit of `!` none null assertions because it is too optimized
    // for `tsc` to always understand it is "safe"
    Lexer.prototype.tokenizeInternal = function(text, initialMode) {
        var _this = this;
        var i, j, k, matchAltImage, longerAlt, matchedImage, payload, altPayload, imageLength, group, tokType, newToken, errLength, droppedChar, msg, match;
        var orgText = text;
        var orgLength = orgText.length;
        var offset = 0;
        var matchedTokensIndex = 0;
        // initializing the tokensArray to the "guessed" size.
        // guessing too little will still reduce the number of array re-sizes on pushes.
        // guessing too large (Tested by guessing x4 too large) may cost a bit more of memory
        // but would still have a faster runtime by avoiding (All but one) array resizing.
        var guessedNumberOfTokens = this.hasCustom ? 0 // will break custom token pattern APIs the matchedTokens array will contain undefined elements.
         : Math.floor(text.length / 10);
        var matchedTokens = new Array(guessedNumberOfTokens);
        var errors = [];
        var line = this.trackStartLines ? 1 : undefined;
        var column = this.trackStartLines ? 1 : undefined;
        var groups = (0, lexer_1.cloneEmptyGroups)(this.emptyGroups);
        var trackLines = this.trackStartLines;
        var lineTerminatorPattern = this.config.lineTerminatorsPattern;
        var currModePatternsLength = 0;
        var patternIdxToConfig = [];
        var currCharCodeToPatternIdxToConfig = [];
        var modeStack = [];
        var emptyArray = [];
        Object.freeze(emptyArray);
        var getPossiblePatterns;
        function getPossiblePatternsSlow() {
            return patternIdxToConfig;
        }
        function getPossiblePatternsOptimized(charCode) {
            var optimizedCharIdx = (0, lexer_1.charCodeToOptimizedIndex)(charCode);
            var possiblePatterns = currCharCodeToPatternIdxToConfig[optimizedCharIdx];
            if (possiblePatterns === undefined) return emptyArray;
            else return possiblePatterns;
        }
        var pop_mode = function(popToken) {
            // TODO: perhaps avoid this error in the edge case there is no more input?
            if (modeStack.length === 1 && // if we have both a POP_MODE and a PUSH_MODE this is in-fact a "transition"
            // So no error should occur.
            popToken.tokenType.PUSH_MODE === undefined) {
                // if we try to pop the last mode there lexer will no longer have ANY mode.
                // thus the pop is ignored, an error will be created and the lexer will continue parsing in the previous mode.
                var msg_1 = _this.config.errorMessageProvider.buildUnableToPopLexerModeMessage(popToken);
                errors.push({
                    offset: popToken.startOffset,
                    line: popToken.startLine,
                    column: popToken.startColumn,
                    length: popToken.image.length,
                    message: msg_1
                });
            } else {
                modeStack.pop();
                var newMode = (0, last_1.default)(modeStack);
                patternIdxToConfig = _this.patternIdxToConfig[newMode];
                currCharCodeToPatternIdxToConfig = _this.charCodeToPatternIdxToConfig[newMode];
                currModePatternsLength = patternIdxToConfig.length;
                var modeCanBeOptimized = _this.canModeBeOptimized[newMode] && _this.config.safeMode === false;
                if (currCharCodeToPatternIdxToConfig && modeCanBeOptimized) getPossiblePatterns = getPossiblePatternsOptimized;
                else getPossiblePatterns = getPossiblePatternsSlow;
            }
        };
        function push_mode(newMode) {
            modeStack.push(newMode);
            currCharCodeToPatternIdxToConfig = this.charCodeToPatternIdxToConfig[newMode];
            patternIdxToConfig = this.patternIdxToConfig[newMode];
            currModePatternsLength = patternIdxToConfig.length;
            currModePatternsLength = patternIdxToConfig.length;
            var modeCanBeOptimized = this.canModeBeOptimized[newMode] && this.config.safeMode === false;
            if (currCharCodeToPatternIdxToConfig && modeCanBeOptimized) getPossiblePatterns = getPossiblePatternsOptimized;
            else getPossiblePatterns = getPossiblePatternsSlow;
        }
        // this pattern seems to avoid a V8 de-optimization, although that de-optimization does not
        // seem to matter performance wise.
        push_mode.call(this, initialMode);
        var currConfig;
        var recoveryEnabled = this.config.recoveryEnabled;
        while(offset < orgLength){
            matchedImage = null;
            var nextCharCode = orgText.charCodeAt(offset);
            var chosenPatternIdxToConfig = getPossiblePatterns(nextCharCode);
            var chosenPatternsLength = chosenPatternIdxToConfig.length;
            for(i = 0; i < chosenPatternsLength; i++){
                currConfig = chosenPatternIdxToConfig[i];
                var currPattern = currConfig.pattern;
                payload = null;
                // manually in-lined because > 600 chars won't be in-lined in V8
                var singleCharCode = currConfig.short;
                if (singleCharCode !== false) {
                    if (nextCharCode === singleCharCode) // single character string
                    matchedImage = currPattern;
                } else if (currConfig.isCustom === true) {
                    match = currPattern.exec(orgText, offset, matchedTokens, groups);
                    if (match !== null) {
                        matchedImage = match[0];
                        if (match.payload !== undefined) payload = match.payload;
                    } else matchedImage = null;
                } else {
                    this.updateLastIndex(currPattern, offset);
                    matchedImage = this.match(currPattern, text, offset);
                }
                if (matchedImage !== null) {
                    // even though this pattern matched we must try a another longer alternative.
                    // this can be used to prioritize keywords over identifiers
                    longerAlt = currConfig.longerAlt;
                    if (longerAlt !== undefined) {
                        // TODO: micro optimize, avoid extra prop access
                        // by saving/linking longerAlt on the original config?
                        var longerAltLength = longerAlt.length;
                        for(k = 0; k < longerAltLength; k++){
                            var longerAltConfig = patternIdxToConfig[longerAlt[k]];
                            var longerAltPattern = longerAltConfig.pattern;
                            altPayload = null;
                            // single Char can never be a longer alt so no need to test it.
                            // manually in-lined because > 600 chars won't be in-lined in V8
                            if (longerAltConfig.isCustom === true) {
                                match = longerAltPattern.exec(orgText, offset, matchedTokens, groups);
                                if (match !== null) {
                                    matchAltImage = match[0];
                                    if (match.payload !== undefined) altPayload = match.payload;
                                } else matchAltImage = null;
                            } else {
                                this.updateLastIndex(longerAltPattern, offset);
                                matchAltImage = this.match(longerAltPattern, text, offset);
                            }
                            if (matchAltImage && matchAltImage.length > matchedImage.length) {
                                matchedImage = matchAltImage;
                                payload = altPayload;
                                currConfig = longerAltConfig;
                                break;
                            }
                        }
                    }
                    break;
                }
            }
            // successful match
            if (matchedImage !== null) {
                imageLength = matchedImage.length;
                group = currConfig.group;
                if (group !== undefined) {
                    tokType = currConfig.tokenTypeIdx;
                    // TODO: "offset + imageLength" and the new column may be computed twice in case of "full" location information inside
                    // createFullToken method
                    newToken = this.createTokenInstance(matchedImage, offset, tokType, currConfig.tokenType, line, column, imageLength);
                    this.handlePayload(newToken, payload);
                    // TODO: optimize NOOP in case there are no special groups?
                    if (group === false) matchedTokensIndex = this.addToken(matchedTokens, matchedTokensIndex, newToken);
                    else groups[group].push(newToken);
                }
                text = this.chopInput(text, imageLength);
                offset = offset + imageLength;
                // TODO: with newlines the column may be assigned twice
                column = this.computeNewColumn(column, imageLength);
                if (trackLines === true && currConfig.canLineTerminator === true) {
                    var numOfLTsInMatch = 0;
                    var foundTerminator = void 0;
                    var lastLTEndOffset = void 0;
                    lineTerminatorPattern.lastIndex = 0;
                    do {
                        foundTerminator = lineTerminatorPattern.test(matchedImage);
                        if (foundTerminator === true) {
                            lastLTEndOffset = lineTerminatorPattern.lastIndex - 1;
                            numOfLTsInMatch++;
                        }
                    }while (foundTerminator === true);
                    if (numOfLTsInMatch !== 0) {
                        line = line + numOfLTsInMatch;
                        column = imageLength - lastLTEndOffset;
                        this.updateTokenEndLineColumnLocation(newToken, group, lastLTEndOffset, numOfLTsInMatch, line, column, imageLength);
                    }
                }
                // will be NOOP if no modes present
                this.handleModes(currConfig, pop_mode, push_mode, newToken);
            } else {
                // error recovery, drop characters until we identify a valid token's start point
                var errorStartOffset = offset;
                var errorLine = line;
                var errorColumn = column;
                var foundResyncPoint = recoveryEnabled === false;
                while(foundResyncPoint === false && offset < orgLength){
                    // Identity Func (when sticky flag is enabled)
                    text = this.chopInput(text, 1);
                    offset++;
                    for(j = 0; j < currModePatternsLength; j++){
                        var currConfig_1 = patternIdxToConfig[j];
                        var currPattern = currConfig_1.pattern;
                        // manually in-lined because > 600 chars won't be in-lined in V8
                        var singleCharCode = currConfig_1.short;
                        if (singleCharCode !== false) {
                            if (orgText.charCodeAt(offset) === singleCharCode) // single character string
                            foundResyncPoint = true;
                        } else if (currConfig_1.isCustom === true) foundResyncPoint = currPattern.exec(orgText, offset, matchedTokens, groups) !== null;
                        else {
                            this.updateLastIndex(currPattern, offset);
                            foundResyncPoint = currPattern.exec(text) !== null;
                        }
                        if (foundResyncPoint === true) break;
                    }
                }
                errLength = offset - errorStartOffset;
                // at this point we either re-synced or reached the end of the input text
                msg = this.config.errorMessageProvider.buildUnexpectedCharactersMessage(orgText, errorStartOffset, errLength, errorLine, errorColumn);
                errors.push({
                    offset: errorStartOffset,
                    line: errorLine,
                    column: errorColumn,
                    length: errLength,
                    message: msg
                });
                if (recoveryEnabled === false) break;
            }
        }
        // if we do have custom patterns which push directly into the
        // TODO: custom tokens should not push directly??
        if (!this.hasCustom) // if we guessed a too large size for the tokens array this will shrink it to the right size.
        matchedTokens.length = matchedTokensIndex;
        return {
            tokens: matchedTokens,
            groups: groups,
            errors: errors
        };
    };
    Lexer.prototype.handleModes = function(config, pop_mode, push_mode, newToken) {
        if (config.pop === true) {
            // need to save the PUSH_MODE property as if the mode is popped
            // patternIdxToPopMode is updated to reflect the new mode after popping the stack
            var pushMode = config.push;
            pop_mode(newToken);
            if (pushMode !== undefined) push_mode.call(this, pushMode);
        } else if (config.push !== undefined) push_mode.call(this, config.push);
    };
    Lexer.prototype.chopInput = function(text, length) {
        return text.substring(length);
    };
    Lexer.prototype.updateLastIndex = function(regExp, newLastIndex) {
        regExp.lastIndex = newLastIndex;
    };
    // TODO: decrease this under 600 characters? inspect stripping comments option in TSC compiler
    Lexer.prototype.updateTokenEndLineColumnLocation = function(newToken, group, lastLTIdx, numOfLTsInMatch, line, column, imageLength) {
        var lastCharIsLT, fixForEndingInLT;
        if (group !== undefined) {
            // a none skipped multi line Token, need to update endLine/endColumn
            lastCharIsLT = lastLTIdx === imageLength - 1;
            fixForEndingInLT = lastCharIsLT ? -1 : 0;
            if (!(numOfLTsInMatch === 1 && lastCharIsLT === true)) {
                // if a token ends in a LT that last LT only affects the line numbering of following Tokens
                newToken.endLine = line + fixForEndingInLT;
                // the last LT in a token does not affect the endColumn either as the [columnStart ... columnEnd)
                // inclusive to exclusive range.
                newToken.endColumn = column - 1 + -fixForEndingInLT;
            }
        // else single LT in the last character of a token, no need to modify the endLine/EndColumn
        }
    };
    Lexer.prototype.computeNewColumn = function(oldColumn, imageLength) {
        return oldColumn + imageLength;
    };
    Lexer.prototype.createOffsetOnlyToken = function(image, startOffset, tokenTypeIdx, tokenType) {
        return {
            image: image,
            startOffset: startOffset,
            tokenTypeIdx: tokenTypeIdx,
            tokenType: tokenType
        };
    };
    Lexer.prototype.createStartOnlyToken = function(image, startOffset, tokenTypeIdx, tokenType, startLine, startColumn) {
        return {
            image: image,
            startOffset: startOffset,
            startLine: startLine,
            startColumn: startColumn,
            tokenTypeIdx: tokenTypeIdx,
            tokenType: tokenType
        };
    };
    Lexer.prototype.createFullToken = function(image, startOffset, tokenTypeIdx, tokenType, startLine, startColumn, imageLength) {
        return {
            image: image,
            startOffset: startOffset,
            endOffset: startOffset + imageLength - 1,
            startLine: startLine,
            endLine: startLine,
            startColumn: startColumn,
            endColumn: startColumn + imageLength - 1,
            tokenTypeIdx: tokenTypeIdx,
            tokenType: tokenType
        };
    };
    Lexer.prototype.addTokenUsingPush = function(tokenVector, index, tokenToAdd) {
        tokenVector.push(tokenToAdd);
        return index;
    };
    Lexer.prototype.addTokenUsingMemberAccess = function(tokenVector, index, tokenToAdd) {
        tokenVector[index] = tokenToAdd;
        index++;
        return index;
    };
    Lexer.prototype.handlePayloadNoCustom = function(token, payload) {};
    Lexer.prototype.handlePayloadWithCustom = function(token, payload) {
        if (payload !== null) token.payload = payload;
    };
    Lexer.prototype.matchWithTest = function(pattern, text, offset) {
        var found = pattern.test(text);
        if (found === true) return text.substring(offset, pattern.lastIndex);
        return null;
    };
    Lexer.prototype.matchWithExec = function(pattern, text) {
        var regExpArray = pattern.exec(text);
        return regExpArray !== null ? regExpArray[0] : null;
    };
    Lexer.SKIPPED = "This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.";
    Lexer.NA = /NOT_APPLICABLE/;
    return Lexer;
}();
exports.Lexer = Lexer;

},{"501971947d1fbf88":"90qQo","998e28e3252194e8":"8MwRz","1607c3193e8a00dc":"HRoQ8","704c83ac470a11e1":"csCQN","4523d4147cca0b81":"6oI7j","bda059584a96a42":"8Agt9","6f52edffefe6f121":"68KdA","c875770b9bb1be24":"cQbs0","28e0b3fbb0a066d7":"2MKLE","101d385bc69c21db":"hSDL2","39fee7893534c223":"5rttf","cbb87dcf6c3625cb":"4WXly","be70e53ba14e3873":"isYLF","68f8e5b560c22193":"dIp0d","dde4d586b82eb9c3":"eKRSC","2177d3dece80def":"1KnzY","d9e1d597002046a1":"dotIP","a1f0de4f5fc88ea5":"jdb01"}],"90qQo":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.charCodeToOptimizedIndex = exports.minOptimizationVal = exports.buildLineBreakIssueMessage = exports.LineTerminatorOptimizedTester = exports.isShortPattern = exports.isCustomPattern = exports.cloneEmptyGroups = exports.performWarningRuntimeChecks = exports.performRuntimeChecks = exports.addStickyFlag = exports.addStartOfInput = exports.findUnreachablePatterns = exports.findModesThatDoNotExist = exports.findInvalidGroupType = exports.findDuplicatePatterns = exports.findUnsupportedFlags = exports.findStartOfInputAnchor = exports.findEmptyMatchRegExps = exports.findEndOfInputAnchor = exports.findInvalidPatterns = exports.findMissingPatterns = exports.validatePatterns = exports.analyzeTokenTypes = exports.enableSticky = exports.disableSticky = exports.SUPPORT_STICKY = exports.MODES = exports.DEFAULT_MODE = void 0;
var regexp_to_ast_1 = require("79f51a9e9d749dd8");
var lexer_public_1 = require("bc44e480df7008b7");
var first_1 = __importDefault(require("57db0b57db4b8105"));
var isEmpty_1 = __importDefault(require("d3faae5831080b08"));
var compact_1 = __importDefault(require("6b6a6a99604215ce"));
var isArray_1 = __importDefault(require("4437d398f5fefafc"));
var values_1 = __importDefault(require("dcf8934060e49426"));
var flatten_1 = __importDefault(require("4424fce363a31ad7"));
var reject_1 = __importDefault(require("5f1802880e07ea68"));
var difference_1 = __importDefault(require("3f829d0c4f042810"));
var indexOf_1 = __importDefault(require("45a0124915a8f990"));
var map_1 = __importDefault(require("d793b519528cb205"));
var forEach_1 = __importDefault(require("dafb6d56417114eb"));
var isString_1 = __importDefault(require("524ca0cdc10c4049"));
var isFunction_1 = __importDefault(require("8ea585b27d9efca1"));
var isUndefined_1 = __importDefault(require("bcb83a5668d5e5fa"));
var find_1 = __importDefault(require("2d13edd96c505d82"));
var has_1 = __importDefault(require("ae9df428e681fed7"));
var keys_1 = __importDefault(require("2b9166d0cc230818"));
var isRegExp_1 = __importDefault(require("62133fd498d72989"));
var filter_1 = __importDefault(require("2c848d5bcaa26b30"));
var defaults_1 = __importDefault(require("362fd47c05dc9f63"));
var reduce_1 = __importDefault(require("b1e816807fbbb581"));
var includes_1 = __importDefault(require("f61f9c005c8c40fd"));
var utils_1 = require("a292b04c57abbc5e");
var reg_exp_1 = require("7bc2866a55b299dc");
var reg_exp_parser_1 = require("8f227e249a89c62e");
var PATTERN = "PATTERN";
exports.DEFAULT_MODE = "defaultMode";
exports.MODES = "modes";
exports.SUPPORT_STICKY = typeof new RegExp("(?:)").sticky === "boolean";
function disableSticky() {
    exports.SUPPORT_STICKY = false;
}
exports.disableSticky = disableSticky;
function enableSticky() {
    exports.SUPPORT_STICKY = true;
}
exports.enableSticky = enableSticky;
function analyzeTokenTypes(tokenTypes, options) {
    options = (0, defaults_1.default)(options, {
        useSticky: exports.SUPPORT_STICKY,
        debug: false,
        safeMode: false,
        positionTracking: "full",
        lineTerminatorCharacters: [
            "\r",
            "\n"
        ],
        tracer: function(msg, action) {
            return action();
        }
    });
    var tracer = options.tracer;
    tracer("initCharCodeToOptimizedIndexMap", function() {
        initCharCodeToOptimizedIndexMap();
    });
    var onlyRelevantTypes;
    tracer("Reject Lexer.NA", function() {
        onlyRelevantTypes = (0, reject_1.default)(tokenTypes, function(currType) {
            return currType[PATTERN] === lexer_public_1.Lexer.NA;
        });
    });
    var hasCustom = false;
    var allTransformedPatterns;
    tracer("Transform Patterns", function() {
        hasCustom = false;
        allTransformedPatterns = (0, map_1.default)(onlyRelevantTypes, function(currType) {
            var currPattern = currType[PATTERN];
            /* istanbul ignore else */ if ((0, isRegExp_1.default)(currPattern)) {
                var regExpSource = currPattern.source;
                if (regExpSource.length === 1 && // only these regExp meta characters which can appear in a length one regExp
                regExpSource !== "^" && regExpSource !== "$" && regExpSource !== "." && !currPattern.ignoreCase) return regExpSource;
                else if (regExpSource.length === 2 && regExpSource[0] === "\\" && // not a meta character
                !(0, includes_1.default)([
                    "d",
                    "D",
                    "s",
                    "S",
                    "t",
                    "r",
                    "n",
                    "t",
                    "0",
                    "c",
                    "b",
                    "B",
                    "f",
                    "v",
                    "w",
                    "W"
                ], regExpSource[1])) // escaped meta Characters: /\+/ /\[/
                // or redundant escaping: /\a/
                // without the escaping "\"
                return regExpSource[1];
                else return options.useSticky ? addStickyFlag(currPattern) : addStartOfInput(currPattern);
            } else if ((0, isFunction_1.default)(currPattern)) {
                hasCustom = true;
                // CustomPatternMatcherFunc - custom patterns do not require any transformations, only wrapping in a RegExp Like object
                return {
                    exec: currPattern
                };
            } else if (typeof currPattern === "object") {
                hasCustom = true;
                // ICustomPattern
                return currPattern;
            } else if (typeof currPattern === "string") {
                if (currPattern.length === 1) return currPattern;
                else {
                    var escapedRegExpString = currPattern.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&");
                    var wrappedRegExp = new RegExp(escapedRegExpString);
                    return options.useSticky ? addStickyFlag(wrappedRegExp) : addStartOfInput(wrappedRegExp);
                }
            } else throw Error("non exhaustive match");
        });
    });
    var patternIdxToType;
    var patternIdxToGroup;
    var patternIdxToLongerAltIdxArr;
    var patternIdxToPushMode;
    var patternIdxToPopMode;
    tracer("misc mapping", function() {
        patternIdxToType = (0, map_1.default)(onlyRelevantTypes, function(currType) {
            return currType.tokenTypeIdx;
        });
        patternIdxToGroup = (0, map_1.default)(onlyRelevantTypes, function(clazz) {
            var groupName = clazz.GROUP;
            /* istanbul ignore next */ if (groupName === lexer_public_1.Lexer.SKIPPED) return undefined;
            else if ((0, isString_1.default)(groupName)) return groupName;
            else if ((0, isUndefined_1.default)(groupName)) return false;
            else throw Error("non exhaustive match");
        });
        patternIdxToLongerAltIdxArr = (0, map_1.default)(onlyRelevantTypes, function(clazz) {
            var longerAltType = clazz.LONGER_ALT;
            if (longerAltType) {
                var longerAltIdxArr = (0, isArray_1.default)(longerAltType) ? (0, map_1.default)(longerAltType, function(type) {
                    return (0, indexOf_1.default)(onlyRelevantTypes, type);
                }) : [
                    (0, indexOf_1.default)(onlyRelevantTypes, longerAltType)
                ];
                return longerAltIdxArr;
            }
        });
        patternIdxToPushMode = (0, map_1.default)(onlyRelevantTypes, function(clazz) {
            return clazz.PUSH_MODE;
        });
        patternIdxToPopMode = (0, map_1.default)(onlyRelevantTypes, function(clazz) {
            return (0, has_1.default)(clazz, "POP_MODE");
        });
    });
    var patternIdxToCanLineTerminator;
    tracer("Line Terminator Handling", function() {
        var lineTerminatorCharCodes = getCharCodes(options.lineTerminatorCharacters);
        patternIdxToCanLineTerminator = (0, map_1.default)(onlyRelevantTypes, function(tokType) {
            return false;
        });
        if (options.positionTracking !== "onlyOffset") patternIdxToCanLineTerminator = (0, map_1.default)(onlyRelevantTypes, function(tokType) {
            if ((0, has_1.default)(tokType, "LINE_BREAKS")) return !!tokType.LINE_BREAKS;
            else return checkLineBreaksIssues(tokType, lineTerminatorCharCodes) === false && (0, reg_exp_1.canMatchCharCode)(lineTerminatorCharCodes, tokType.PATTERN);
        });
    });
    var patternIdxToIsCustom;
    var patternIdxToShort;
    var emptyGroups;
    var patternIdxToConfig;
    tracer("Misc Mapping #2", function() {
        patternIdxToIsCustom = (0, map_1.default)(onlyRelevantTypes, isCustomPattern);
        patternIdxToShort = (0, map_1.default)(allTransformedPatterns, isShortPattern);
        emptyGroups = (0, reduce_1.default)(onlyRelevantTypes, function(acc, clazz) {
            var groupName = clazz.GROUP;
            if ((0, isString_1.default)(groupName) && !(groupName === lexer_public_1.Lexer.SKIPPED)) acc[groupName] = [];
            return acc;
        }, {});
        patternIdxToConfig = (0, map_1.default)(allTransformedPatterns, function(x, idx) {
            return {
                pattern: allTransformedPatterns[idx],
                longerAlt: patternIdxToLongerAltIdxArr[idx],
                canLineTerminator: patternIdxToCanLineTerminator[idx],
                isCustom: patternIdxToIsCustom[idx],
                short: patternIdxToShort[idx],
                group: patternIdxToGroup[idx],
                push: patternIdxToPushMode[idx],
                pop: patternIdxToPopMode[idx],
                tokenTypeIdx: patternIdxToType[idx],
                tokenType: onlyRelevantTypes[idx]
            };
        });
    });
    var canBeOptimized = true;
    var charCodeToPatternIdxToConfig = [];
    if (!options.safeMode) tracer("First Char Optimization", function() {
        charCodeToPatternIdxToConfig = (0, reduce_1.default)(onlyRelevantTypes, function(result, currTokType, idx) {
            if (typeof currTokType.PATTERN === "string") {
                var charCode = currTokType.PATTERN.charCodeAt(0);
                var optimizedIdx = charCodeToOptimizedIndex(charCode);
                addToMapOfArrays(result, optimizedIdx, patternIdxToConfig[idx]);
            } else if ((0, isArray_1.default)(currTokType.START_CHARS_HINT)) {
                var lastOptimizedIdx_1;
                (0, forEach_1.default)(currTokType.START_CHARS_HINT, function(charOrInt) {
                    var charCode = typeof charOrInt === "string" ? charOrInt.charCodeAt(0) : charOrInt;
                    var currOptimizedIdx = charCodeToOptimizedIndex(charCode);
                    // Avoid adding the config multiple times
                    /* istanbul ignore else */ // - Difficult to check this scenario effects as it is only a performance
                    //   optimization that does not change correctness
                    if (lastOptimizedIdx_1 !== currOptimizedIdx) {
                        lastOptimizedIdx_1 = currOptimizedIdx;
                        addToMapOfArrays(result, currOptimizedIdx, patternIdxToConfig[idx]);
                    }
                });
            } else if ((0, isRegExp_1.default)(currTokType.PATTERN)) {
                if (currTokType.PATTERN.unicode) {
                    canBeOptimized = false;
                    if (options.ensureOptimizations) (0, utils_1.PRINT_ERROR)("".concat(reg_exp_1.failedOptimizationPrefixMsg) + "	Unable to analyze < ".concat(currTokType.PATTERN.toString(), " > pattern.\n") + "	The regexp unicode flag is not currently supported by the regexp-to-ast library.\n" + "	This will disable the lexer's first char optimizations.\n" + "	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE");
                } else {
                    var optimizedCodes = (0, reg_exp_1.getOptimizedStartCodesIndices)(currTokType.PATTERN, options.ensureOptimizations);
                    /* istanbul ignore if */ // start code will only be empty given an empty regExp or failure of regexp-to-ast library
                    // the first should be a different validation and the second cannot be tested.
                    if ((0, isEmpty_1.default)(optimizedCodes)) // we cannot understand what codes may start possible matches
                    // The optimization correctness requires knowing start codes for ALL patterns.
                    // Not actually sure this is an error, no debug message
                    canBeOptimized = false;
                    (0, forEach_1.default)(optimizedCodes, function(code) {
                        addToMapOfArrays(result, code, patternIdxToConfig[idx]);
                    });
                }
            } else {
                if (options.ensureOptimizations) (0, utils_1.PRINT_ERROR)("".concat(reg_exp_1.failedOptimizationPrefixMsg) + "	TokenType: <".concat(currTokType.name, "> is using a custom token pattern without providing <start_chars_hint> parameter.\n") + "	This will disable the lexer's first char optimizations.\n" + "	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE");
                canBeOptimized = false;
            }
            return result;
        }, []);
    });
    return {
        emptyGroups: emptyGroups,
        patternIdxToConfig: patternIdxToConfig,
        charCodeToPatternIdxToConfig: charCodeToPatternIdxToConfig,
        hasCustom: hasCustom,
        canBeOptimized: canBeOptimized
    };
}
exports.analyzeTokenTypes = analyzeTokenTypes;
function validatePatterns(tokenTypes, validModesNames) {
    var errors = [];
    var missingResult = findMissingPatterns(tokenTypes);
    errors = errors.concat(missingResult.errors);
    var invalidResult = findInvalidPatterns(missingResult.valid);
    var validTokenTypes = invalidResult.valid;
    errors = errors.concat(invalidResult.errors);
    errors = errors.concat(validateRegExpPattern(validTokenTypes));
    errors = errors.concat(findInvalidGroupType(validTokenTypes));
    errors = errors.concat(findModesThatDoNotExist(validTokenTypes, validModesNames));
    errors = errors.concat(findUnreachablePatterns(validTokenTypes));
    return errors;
}
exports.validatePatterns = validatePatterns;
function validateRegExpPattern(tokenTypes) {
    var errors = [];
    var withRegExpPatterns = (0, filter_1.default)(tokenTypes, function(currTokType) {
        return (0, isRegExp_1.default)(currTokType[PATTERN]);
    });
    errors = errors.concat(findEndOfInputAnchor(withRegExpPatterns));
    errors = errors.concat(findStartOfInputAnchor(withRegExpPatterns));
    errors = errors.concat(findUnsupportedFlags(withRegExpPatterns));
    errors = errors.concat(findDuplicatePatterns(withRegExpPatterns));
    errors = errors.concat(findEmptyMatchRegExps(withRegExpPatterns));
    return errors;
}
function findMissingPatterns(tokenTypes) {
    var tokenTypesWithMissingPattern = (0, filter_1.default)(tokenTypes, function(currType) {
        return !(0, has_1.default)(currType, PATTERN);
    });
    var errors = (0, map_1.default)(tokenTypesWithMissingPattern, function(currType) {
        return {
            message: "Token Type: ->" + currType.name + "<- missing static 'PATTERN' property",
            type: lexer_public_1.LexerDefinitionErrorType.MISSING_PATTERN,
            tokenTypes: [
                currType
            ]
        };
    });
    var valid = (0, difference_1.default)(tokenTypes, tokenTypesWithMissingPattern);
    return {
        errors: errors,
        valid: valid
    };
}
exports.findMissingPatterns = findMissingPatterns;
function findInvalidPatterns(tokenTypes) {
    var tokenTypesWithInvalidPattern = (0, filter_1.default)(tokenTypes, function(currType) {
        var pattern = currType[PATTERN];
        return !(0, isRegExp_1.default)(pattern) && !(0, isFunction_1.default)(pattern) && !(0, has_1.default)(pattern, "exec") && !(0, isString_1.default)(pattern);
    });
    var errors = (0, map_1.default)(tokenTypesWithInvalidPattern, function(currType) {
        return {
            message: "Token Type: ->" + currType.name + "<- static 'PATTERN' can only be a RegExp, a" + " Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",
            type: lexer_public_1.LexerDefinitionErrorType.INVALID_PATTERN,
            tokenTypes: [
                currType
            ]
        };
    });
    var valid = (0, difference_1.default)(tokenTypes, tokenTypesWithInvalidPattern);
    return {
        errors: errors,
        valid: valid
    };
}
exports.findInvalidPatterns = findInvalidPatterns;
var end_of_input = /[^\\][$]/;
function findEndOfInputAnchor(tokenTypes) {
    var EndAnchorFinder = /** @class */ function(_super) {
        __extends(EndAnchorFinder, _super);
        function EndAnchorFinder() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.found = false;
            return _this;
        }
        EndAnchorFinder.prototype.visitEndAnchor = function(node) {
            this.found = true;
        };
        return EndAnchorFinder;
    }(regexp_to_ast_1.BaseRegExpVisitor);
    var invalidRegex = (0, filter_1.default)(tokenTypes, function(currType) {
        var pattern = currType.PATTERN;
        try {
            var regexpAst = (0, reg_exp_parser_1.getRegExpAst)(pattern);
            var endAnchorVisitor = new EndAnchorFinder();
            endAnchorVisitor.visit(regexpAst);
            return endAnchorVisitor.found;
        } catch (e) {
            // old behavior in case of runtime exceptions with regexp-to-ast.
            /* istanbul ignore next - cannot ensure an error in regexp-to-ast*/ return end_of_input.test(pattern.source);
        }
    });
    var errors = (0, map_1.default)(invalidRegex, function(currType) {
        return {
            message: "Unexpected RegExp Anchor Error:\n	Token Type: ->" + currType.name + "<- static 'PATTERN' cannot contain end of input anchor '$'\n" + "	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS" + "	for details.",
            type: lexer_public_1.LexerDefinitionErrorType.EOI_ANCHOR_FOUND,
            tokenTypes: [
                currType
            ]
        };
    });
    return errors;
}
exports.findEndOfInputAnchor = findEndOfInputAnchor;
function findEmptyMatchRegExps(tokenTypes) {
    var matchesEmptyString = (0, filter_1.default)(tokenTypes, function(currType) {
        var pattern = currType.PATTERN;
        return pattern.test("");
    });
    var errors = (0, map_1.default)(matchesEmptyString, function(currType) {
        return {
            message: "Token Type: ->" + currType.name + "<- static 'PATTERN' must not match an empty string",
            type: lexer_public_1.LexerDefinitionErrorType.EMPTY_MATCH_PATTERN,
            tokenTypes: [
                currType
            ]
        };
    });
    return errors;
}
exports.findEmptyMatchRegExps = findEmptyMatchRegExps;
var start_of_input = /[^\\[][\^]|^\^/;
function findStartOfInputAnchor(tokenTypes) {
    var StartAnchorFinder = /** @class */ function(_super) {
        __extends(StartAnchorFinder, _super);
        function StartAnchorFinder() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.found = false;
            return _this;
        }
        StartAnchorFinder.prototype.visitStartAnchor = function(node) {
            this.found = true;
        };
        return StartAnchorFinder;
    }(regexp_to_ast_1.BaseRegExpVisitor);
    var invalidRegex = (0, filter_1.default)(tokenTypes, function(currType) {
        var pattern = currType.PATTERN;
        try {
            var regexpAst = (0, reg_exp_parser_1.getRegExpAst)(pattern);
            var startAnchorVisitor = new StartAnchorFinder();
            startAnchorVisitor.visit(regexpAst);
            return startAnchorVisitor.found;
        } catch (e) {
            // old behavior in case of runtime exceptions with regexp-to-ast.
            /* istanbul ignore next - cannot ensure an error in regexp-to-ast*/ return start_of_input.test(pattern.source);
        }
    });
    var errors = (0, map_1.default)(invalidRegex, function(currType) {
        return {
            message: "Unexpected RegExp Anchor Error:\n	Token Type: ->" + currType.name + "<- static 'PATTERN' cannot contain start of input anchor '^'\n" + "	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS" + "	for details.",
            type: lexer_public_1.LexerDefinitionErrorType.SOI_ANCHOR_FOUND,
            tokenTypes: [
                currType
            ]
        };
    });
    return errors;
}
exports.findStartOfInputAnchor = findStartOfInputAnchor;
function findUnsupportedFlags(tokenTypes) {
    var invalidFlags = (0, filter_1.default)(tokenTypes, function(currType) {
        var pattern = currType[PATTERN];
        return pattern instanceof RegExp && (pattern.multiline || pattern.global);
    });
    var errors = (0, map_1.default)(invalidFlags, function(currType) {
        return {
            message: "Token Type: ->" + currType.name + "<- static 'PATTERN' may NOT contain global('g') or multiline('m')",
            type: lexer_public_1.LexerDefinitionErrorType.UNSUPPORTED_FLAGS_FOUND,
            tokenTypes: [
                currType
            ]
        };
    });
    return errors;
}
exports.findUnsupportedFlags = findUnsupportedFlags;
// This can only test for identical duplicate RegExps, not semantically equivalent ones.
function findDuplicatePatterns(tokenTypes) {
    var found = [];
    var identicalPatterns = (0, map_1.default)(tokenTypes, function(outerType) {
        return (0, reduce_1.default)(tokenTypes, function(result, innerType) {
            if (outerType.PATTERN.source === innerType.PATTERN.source && !(0, includes_1.default)(found, innerType) && innerType.PATTERN !== lexer_public_1.Lexer.NA) {
                // this avoids duplicates in the result, each Token Type may only appear in one "set"
                // in essence we are creating Equivalence classes on equality relation.
                found.push(innerType);
                result.push(innerType);
                return result;
            }
            return result;
        }, []);
    });
    identicalPatterns = (0, compact_1.default)(identicalPatterns);
    var duplicatePatterns = (0, filter_1.default)(identicalPatterns, function(currIdenticalSet) {
        return currIdenticalSet.length > 1;
    });
    var errors = (0, map_1.default)(duplicatePatterns, function(setOfIdentical) {
        var tokenTypeNames = (0, map_1.default)(setOfIdentical, function(currType) {
            return currType.name;
        });
        var dupPatternSrc = (0, first_1.default)(setOfIdentical).PATTERN;
        return {
            message: "The same RegExp pattern ->".concat(dupPatternSrc, "<-") + "has been used in all of the following Token Types: ".concat(tokenTypeNames.join(", "), " <-"),
            type: lexer_public_1.LexerDefinitionErrorType.DUPLICATE_PATTERNS_FOUND,
            tokenTypes: setOfIdentical
        };
    });
    return errors;
}
exports.findDuplicatePatterns = findDuplicatePatterns;
function findInvalidGroupType(tokenTypes) {
    var invalidTypes = (0, filter_1.default)(tokenTypes, function(clazz) {
        if (!(0, has_1.default)(clazz, "GROUP")) return false;
        var group = clazz.GROUP;
        return group !== lexer_public_1.Lexer.SKIPPED && group !== lexer_public_1.Lexer.NA && !(0, isString_1.default)(group);
    });
    var errors = (0, map_1.default)(invalidTypes, function(currType) {
        return {
            message: "Token Type: ->" + currType.name + "<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",
            type: lexer_public_1.LexerDefinitionErrorType.INVALID_GROUP_TYPE_FOUND,
            tokenTypes: [
                currType
            ]
        };
    });
    return errors;
}
exports.findInvalidGroupType = findInvalidGroupType;
function findModesThatDoNotExist(tokenTypes, validModes) {
    var invalidModes = (0, filter_1.default)(tokenTypes, function(clazz) {
        return clazz.PUSH_MODE !== undefined && !(0, includes_1.default)(validModes, clazz.PUSH_MODE);
    });
    var errors = (0, map_1.default)(invalidModes, function(tokType) {
        var msg = "Token Type: ->".concat(tokType.name, "<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->").concat(tokType.PUSH_MODE, "<-") + "which does not exist";
        return {
            message: msg,
            type: lexer_public_1.LexerDefinitionErrorType.PUSH_MODE_DOES_NOT_EXIST,
            tokenTypes: [
                tokType
            ]
        };
    });
    return errors;
}
exports.findModesThatDoNotExist = findModesThatDoNotExist;
function findUnreachablePatterns(tokenTypes) {
    var errors = [];
    var canBeTested = (0, reduce_1.default)(tokenTypes, function(result, tokType, idx) {
        var pattern = tokType.PATTERN;
        if (pattern === lexer_public_1.Lexer.NA) return result;
        // a more comprehensive validation for all forms of regExps would require
        // deeper regExp analysis capabilities
        if ((0, isString_1.default)(pattern)) result.push({
            str: pattern,
            idx: idx,
            tokenType: tokType
        });
        else if ((0, isRegExp_1.default)(pattern) && noMetaChar(pattern)) result.push({
            str: pattern.source,
            idx: idx,
            tokenType: tokType
        });
        return result;
    }, []);
    (0, forEach_1.default)(tokenTypes, function(tokType, testIdx) {
        (0, forEach_1.default)(canBeTested, function(_a) {
            var str = _a.str, idx = _a.idx, tokenType = _a.tokenType;
            if (testIdx < idx && testTokenType(str, tokType.PATTERN)) {
                var msg = "Token: ->".concat(tokenType.name, "<- can never be matched.\n") + "Because it appears AFTER the Token Type ->".concat(tokType.name, "<-") + "in the lexer's definition.\n" + "See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE";
                errors.push({
                    message: msg,
                    type: lexer_public_1.LexerDefinitionErrorType.UNREACHABLE_PATTERN,
                    tokenTypes: [
                        tokType,
                        tokenType
                    ]
                });
            }
        });
    });
    return errors;
}
exports.findUnreachablePatterns = findUnreachablePatterns;
function testTokenType(str, pattern) {
    /* istanbul ignore else */ if ((0, isRegExp_1.default)(pattern)) {
        var regExpArray = pattern.exec(str);
        return regExpArray !== null && regExpArray.index === 0;
    } else if ((0, isFunction_1.default)(pattern)) // maintain the API of custom patterns
    return pattern(str, 0, [], {});
    else if ((0, has_1.default)(pattern, "exec")) // maintain the API of custom patterns
    return pattern.exec(str, 0, [], {});
    else if (typeof pattern === "string") return pattern === str;
    else throw Error("non exhaustive match");
}
function noMetaChar(regExp) {
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
    var metaChars = [
        ".",
        "\\",
        "[",
        "]",
        "|",
        "^",
        "$",
        "(",
        ")",
        "?",
        "*",
        "+",
        "{"
    ];
    return (0, find_1.default)(metaChars, function(char) {
        return regExp.source.indexOf(char) !== -1;
    }) === undefined;
}
function addStartOfInput(pattern) {
    var flags = pattern.ignoreCase ? "i" : "";
    // always wrapping in a none capturing group preceded by '^' to make sure matching can only work on start of input.
    // duplicate/redundant start of input markers have no meaning (/^^^^A/ === /^A/)
    return new RegExp("^(?:".concat(pattern.source, ")"), flags);
}
exports.addStartOfInput = addStartOfInput;
function addStickyFlag(pattern) {
    var flags = pattern.ignoreCase ? "iy" : "y";
    // always wrapping in a none capturing group preceded by '^' to make sure matching can only work on start of input.
    // duplicate/redundant start of input markers have no meaning (/^^^^A/ === /^A/)
    return new RegExp("".concat(pattern.source), flags);
}
exports.addStickyFlag = addStickyFlag;
function performRuntimeChecks(lexerDefinition, trackLines, lineTerminatorCharacters) {
    var errors = [];
    // some run time checks to help the end users.
    if (!(0, has_1.default)(lexerDefinition, exports.DEFAULT_MODE)) errors.push({
        message: "A MultiMode Lexer cannot be initialized without a <" + exports.DEFAULT_MODE + "> property in its definition\n",
        type: lexer_public_1.LexerDefinitionErrorType.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE
    });
    if (!(0, has_1.default)(lexerDefinition, exports.MODES)) errors.push({
        message: "A MultiMode Lexer cannot be initialized without a <" + exports.MODES + "> property in its definition\n",
        type: lexer_public_1.LexerDefinitionErrorType.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY
    });
    if ((0, has_1.default)(lexerDefinition, exports.MODES) && (0, has_1.default)(lexerDefinition, exports.DEFAULT_MODE) && !(0, has_1.default)(lexerDefinition.modes, lexerDefinition.defaultMode)) errors.push({
        message: "A MultiMode Lexer cannot be initialized with a ".concat(exports.DEFAULT_MODE, ": <").concat(lexerDefinition.defaultMode, ">") + "which does not exist\n",
        type: lexer_public_1.LexerDefinitionErrorType.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST
    });
    if ((0, has_1.default)(lexerDefinition, exports.MODES)) (0, forEach_1.default)(lexerDefinition.modes, function(currModeValue, currModeName) {
        (0, forEach_1.default)(currModeValue, function(currTokType, currIdx) {
            if ((0, isUndefined_1.default)(currTokType)) errors.push({
                message: "A Lexer cannot be initialized using an undefined Token Type. Mode:" + "<".concat(currModeName, "> at index: <").concat(currIdx, ">\n"),
                type: lexer_public_1.LexerDefinitionErrorType.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED
            });
            else if ((0, has_1.default)(currTokType, "LONGER_ALT")) {
                var longerAlt = (0, isArray_1.default)(currTokType.LONGER_ALT) ? currTokType.LONGER_ALT : [
                    currTokType.LONGER_ALT
                ];
                (0, forEach_1.default)(longerAlt, function(currLongerAlt) {
                    if (!(0, isUndefined_1.default)(currLongerAlt) && !(0, includes_1.default)(currModeValue, currLongerAlt)) errors.push({
                        message: "A MultiMode Lexer cannot be initialized with a longer_alt <".concat(currLongerAlt.name, "> on token <").concat(currTokType.name, "> outside of mode <").concat(currModeName, ">\n"),
                        type: lexer_public_1.LexerDefinitionErrorType.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE
                    });
                });
            }
        });
    });
    return errors;
}
exports.performRuntimeChecks = performRuntimeChecks;
function performWarningRuntimeChecks(lexerDefinition, trackLines, lineTerminatorCharacters) {
    var warnings = [];
    var hasAnyLineBreak = false;
    var allTokenTypes = (0, compact_1.default)((0, flatten_1.default)((0, values_1.default)(lexerDefinition.modes)));
    var concreteTokenTypes = (0, reject_1.default)(allTokenTypes, function(currType) {
        return currType[PATTERN] === lexer_public_1.Lexer.NA;
    });
    var terminatorCharCodes = getCharCodes(lineTerminatorCharacters);
    if (trackLines) (0, forEach_1.default)(concreteTokenTypes, function(tokType) {
        var currIssue = checkLineBreaksIssues(tokType, terminatorCharCodes);
        if (currIssue !== false) {
            var message = buildLineBreakIssueMessage(tokType, currIssue);
            var warningDescriptor = {
                message: message,
                type: currIssue.issue,
                tokenType: tokType
            };
            warnings.push(warningDescriptor);
        } else {
            // we don't want to attempt to scan if the user explicitly specified the line_breaks option.
            if ((0, has_1.default)(tokType, "LINE_BREAKS")) {
                if (tokType.LINE_BREAKS === true) hasAnyLineBreak = true;
            } else if ((0, reg_exp_1.canMatchCharCode)(terminatorCharCodes, tokType.PATTERN)) hasAnyLineBreak = true;
        }
    });
    if (trackLines && !hasAnyLineBreak) warnings.push({
        message: "Warning: No LINE_BREAKS Found.\n	This Lexer has been defined to track line and column information,\n	But none of the Token Types can be identified as matching a line terminator.\n	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS \n	for details.",
        type: lexer_public_1.LexerDefinitionErrorType.NO_LINE_BREAKS_FLAGS
    });
    return warnings;
}
exports.performWarningRuntimeChecks = performWarningRuntimeChecks;
function cloneEmptyGroups(emptyGroups) {
    var clonedResult = {};
    var groupKeys = (0, keys_1.default)(emptyGroups);
    (0, forEach_1.default)(groupKeys, function(currKey) {
        var currGroupValue = emptyGroups[currKey];
        /* istanbul ignore else */ if ((0, isArray_1.default)(currGroupValue)) clonedResult[currKey] = [];
        else throw Error("non exhaustive match");
    });
    return clonedResult;
}
exports.cloneEmptyGroups = cloneEmptyGroups;
// TODO: refactor to avoid duplication
function isCustomPattern(tokenType) {
    var pattern = tokenType.PATTERN;
    /* istanbul ignore else */ if ((0, isRegExp_1.default)(pattern)) return false;
    else if ((0, isFunction_1.default)(pattern)) // CustomPatternMatcherFunc - custom patterns do not require any transformations, only wrapping in a RegExp Like object
    return true;
    else if ((0, has_1.default)(pattern, "exec")) // ICustomPattern
    return true;
    else if ((0, isString_1.default)(pattern)) return false;
    else throw Error("non exhaustive match");
}
exports.isCustomPattern = isCustomPattern;
function isShortPattern(pattern) {
    if ((0, isString_1.default)(pattern) && pattern.length === 1) return pattern.charCodeAt(0);
    else return false;
}
exports.isShortPattern = isShortPattern;
/**
 * Faster than using a RegExp for default newline detection during lexing.
 */ exports.LineTerminatorOptimizedTester = {
    // implements /\n|\r\n?/g.test
    test: function(text) {
        var len = text.length;
        for(var i = this.lastIndex; i < len; i++){
            var c = text.charCodeAt(i);
            if (c === 10) {
                this.lastIndex = i + 1;
                return true;
            } else if (c === 13) {
                if (text.charCodeAt(i + 1) === 10) this.lastIndex = i + 2;
                else this.lastIndex = i + 1;
                return true;
            }
        }
        return false;
    },
    lastIndex: 0
};
function checkLineBreaksIssues(tokType, lineTerminatorCharCodes) {
    if ((0, has_1.default)(tokType, "LINE_BREAKS")) // if the user explicitly declared the line_breaks option we will respect their choice
    // and assume it is correct.
    return false;
    else {
        /* istanbul ignore else */ if ((0, isRegExp_1.default)(tokType.PATTERN)) {
            try {
                // TODO: why is the casting suddenly needed?
                (0, reg_exp_1.canMatchCharCode)(lineTerminatorCharCodes, tokType.PATTERN);
            } catch (e) {
                /* istanbul ignore next - to test this we would have to mock <canMatchCharCode> to throw an error */ return {
                    issue: lexer_public_1.LexerDefinitionErrorType.IDENTIFY_TERMINATOR,
                    errMsg: e.message
                };
            }
            return false;
        } else if ((0, isString_1.default)(tokType.PATTERN)) // string literal patterns can always be analyzed to detect line terminator usage
        return false;
        else if (isCustomPattern(tokType)) // custom token types
        return {
            issue: lexer_public_1.LexerDefinitionErrorType.CUSTOM_LINE_BREAK
        };
        else throw Error("non exhaustive match");
    }
}
function buildLineBreakIssueMessage(tokType, details) {
    /* istanbul ignore else */ if (details.issue === lexer_public_1.LexerDefinitionErrorType.IDENTIFY_TERMINATOR) return "Warning: unable to identify line terminator usage in pattern.\n" + "	The problem is in the <".concat(tokType.name, "> Token Type\n") + "	 Root cause: ".concat(details.errMsg, ".\n") + "	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR";
    else if (details.issue === lexer_public_1.LexerDefinitionErrorType.CUSTOM_LINE_BREAK) return "Warning: A Custom Token Pattern should specify the <line_breaks> option.\n" + "	The problem is in the <".concat(tokType.name, "> Token Type\n") + "	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK";
    else throw Error("non exhaustive match");
}
exports.buildLineBreakIssueMessage = buildLineBreakIssueMessage;
function getCharCodes(charsOrCodes) {
    var charCodes = (0, map_1.default)(charsOrCodes, function(numOrString) {
        if ((0, isString_1.default)(numOrString)) return numOrString.charCodeAt(0);
        else return numOrString;
    });
    return charCodes;
}
function addToMapOfArrays(map, key, value) {
    if (map[key] === undefined) map[key] = [
        value
    ];
    else map[key].push(value);
}
exports.minOptimizationVal = 256;
/**
 * We are mapping charCode above ASCI (256) into buckets each in the size of 256.
 * This is because ASCI are the most common start chars so each one of those will get its own
 * possible token configs vector.
 *
 * Tokens starting with charCodes "above" ASCI are uncommon, so we can "afford"
 * to place these into buckets of possible token configs, What we gain from
 * this is avoiding the case of creating an optimization 'charCodeToPatternIdxToConfig'
 * which would contain 10,000+ arrays of small size (e.g unicode Identifiers scenario).
 * Our 'charCodeToPatternIdxToConfig' max size will now be:
 * 256 + (2^16 / 2^8) - 1 === 511
 *
 * note the hack for fast division integer part extraction
 * See: https://stackoverflow.com/a/4228528
 */ var charCodeToOptimizedIdxMap = [];
function charCodeToOptimizedIndex(charCode) {
    return charCode < exports.minOptimizationVal ? charCode : charCodeToOptimizedIdxMap[charCode];
}
exports.charCodeToOptimizedIndex = charCodeToOptimizedIndex;
/**
 * This is a compromise between cold start / hot running performance
 * Creating this array takes ~3ms on a modern machine,
 * But if we perform the computation at runtime as needed the CSS Lexer benchmark
 * performance degrades by ~10%
 *
 * TODO: Perhaps it should be lazy initialized only if a charCode > 255 is used.
 */ function initCharCodeToOptimizedIndexMap() {
    if ((0, isEmpty_1.default)(charCodeToOptimizedIdxMap)) {
        charCodeToOptimizedIdxMap = new Array(65536);
        for(var i = 0; i < 65536; i++)charCodeToOptimizedIdxMap[i] = i > 255 ? 255 + ~~(i / 255) : i;
    }
}

},{"79f51a9e9d749dd8":"ayMF4","bc44e480df7008b7":"dbzZf","57db0b57db4b8105":"48AJB","d3faae5831080b08":"HRoQ8","6b6a6a99604215ce":"cuuyZ","4437d398f5fefafc":"csCQN","dcf8934060e49426":"7Uoc6","4424fce363a31ad7":"g3ybb","5f1802880e07ea68":"8Agt9","3f829d0c4f042810":"kkSPw","45a0124915a8f990":"jPRKL","d793b519528cb205":"68KdA","dafb6d56417114eb":"cQbs0","524ca0cdc10c4049":"L9IoN","8ea585b27d9efca1":"kIUl2","bcb83a5668d5e5fa":"hSDL2","2d13edd96c505d82":"43jpw","ae9df428e681fed7":"j5BJo","2b9166d0cc230818":"2MKLE","62133fd498d72989":"82OiY","2c848d5bcaa26b30":"guOld","362fd47c05dc9f63":"bHoss","b1e816807fbbb581":"isYLF","f61f9c005c8c40fd":"l3Nmg","a292b04c57abbc5e":"eKRSC","7bc2866a55b299dc":"ajm9h","8f227e249a89c62e":"jdb01"}],"ayMF4":[function(require,module,exports) {
(function(root, factory) {
    // istanbul ignore next
    if (typeof define === "function" && define.amd) // istanbul ignore next
    define([], factory);
    else if (0, module.exports) module.exports = factory();
    else // istanbul ignore next
    root.regexpToAst = factory();
})(typeof self !== "undefined" ? self : this, function() {
    // references
    // https://hackernoon.com/the-madness-of-parsing-real-world-javascript-regexps-d9ee336df983
    // https://www.ecma-international.org/ecma-262/8.0/index.html#prod-Pattern
    function RegExpParser() {}
    RegExpParser.prototype.saveState = function() {
        return {
            idx: this.idx,
            input: this.input,
            groupIdx: this.groupIdx
        };
    };
    RegExpParser.prototype.restoreState = function(newState) {
        this.idx = newState.idx;
        this.input = newState.input;
        this.groupIdx = newState.groupIdx;
    };
    RegExpParser.prototype.pattern = function(input) {
        // parser state
        this.idx = 0;
        this.input = input;
        this.groupIdx = 0;
        this.consumeChar("/");
        var value = this.disjunction();
        this.consumeChar("/");
        var flags = {
            type: "Flags",
            loc: {
                begin: this.idx,
                end: input.length
            },
            global: false,
            ignoreCase: false,
            multiLine: false,
            unicode: false,
            sticky: false
        };
        while(this.isRegExpFlag())switch(this.popChar()){
            case "g":
                addFlag(flags, "global");
                break;
            case "i":
                addFlag(flags, "ignoreCase");
                break;
            case "m":
                addFlag(flags, "multiLine");
                break;
            case "u":
                addFlag(flags, "unicode");
                break;
            case "y":
                addFlag(flags, "sticky");
                break;
        }
        if (this.idx !== this.input.length) throw Error("Redundant input: " + this.input.substring(this.idx));
        return {
            type: "Pattern",
            flags: flags,
            value: value,
            loc: this.loc(0)
        };
    };
    RegExpParser.prototype.disjunction = function() {
        var alts = [];
        var begin = this.idx;
        alts.push(this.alternative());
        while(this.peekChar() === "|"){
            this.consumeChar("|");
            alts.push(this.alternative());
        }
        return {
            type: "Disjunction",
            value: alts,
            loc: this.loc(begin)
        };
    };
    RegExpParser.prototype.alternative = function() {
        var terms = [];
        var begin = this.idx;
        while(this.isTerm())terms.push(this.term());
        return {
            type: "Alternative",
            value: terms,
            loc: this.loc(begin)
        };
    };
    RegExpParser.prototype.term = function() {
        if (this.isAssertion()) return this.assertion();
        else return this.atom();
    };
    RegExpParser.prototype.assertion = function() {
        var begin = this.idx;
        switch(this.popChar()){
            case "^":
                return {
                    type: "StartAnchor",
                    loc: this.loc(begin)
                };
            case "$":
                return {
                    type: "EndAnchor",
                    loc: this.loc(begin)
                };
            // '\b' or '\B'
            case "\\":
                switch(this.popChar()){
                    case "b":
                        return {
                            type: "WordBoundary",
                            loc: this.loc(begin)
                        };
                    case "B":
                        return {
                            type: "NonWordBoundary",
                            loc: this.loc(begin)
                        };
                }
                // istanbul ignore next
                throw Error("Invalid Assertion Escape");
            // '(?=' or '(?!'
            case "(":
                this.consumeChar("?");
                var type;
                switch(this.popChar()){
                    case "=":
                        type = "Lookahead";
                        break;
                    case "!":
                        type = "NegativeLookahead";
                        break;
                }
                ASSERT_EXISTS(type);
                var disjunction = this.disjunction();
                this.consumeChar(")");
                return {
                    type: type,
                    value: disjunction,
                    loc: this.loc(begin)
                };
        }
        // istanbul ignore next
        ASSERT_NEVER_REACH_HERE();
    };
    RegExpParser.prototype.quantifier = function(isBacktracking) {
        var range;
        var begin = this.idx;
        switch(this.popChar()){
            case "*":
                range = {
                    atLeast: 0,
                    atMost: Infinity
                };
                break;
            case "+":
                range = {
                    atLeast: 1,
                    atMost: Infinity
                };
                break;
            case "?":
                range = {
                    atLeast: 0,
                    atMost: 1
                };
                break;
            case "{":
                var atLeast = this.integerIncludingZero();
                switch(this.popChar()){
                    case "}":
                        range = {
                            atLeast: atLeast,
                            atMost: atLeast
                        };
                        break;
                    case ",":
                        var atMost;
                        if (this.isDigit()) {
                            atMost = this.integerIncludingZero();
                            range = {
                                atLeast: atLeast,
                                atMost: atMost
                            };
                        } else range = {
                            atLeast: atLeast,
                            atMost: Infinity
                        };
                        this.consumeChar("}");
                        break;
                }
                // throwing exceptions from "ASSERT_EXISTS" during backtracking
                // causes severe performance degradations
                if (isBacktracking === true && range === undefined) return undefined;
                ASSERT_EXISTS(range);
                break;
        }
        // throwing exceptions from "ASSERT_EXISTS" during backtracking
        // causes severe performance degradations
        if (isBacktracking === true && range === undefined) return undefined;
        ASSERT_EXISTS(range);
        if (this.peekChar(0) === "?") {
            this.consumeChar("?");
            range.greedy = false;
        } else range.greedy = true;
        range.type = "Quantifier";
        range.loc = this.loc(begin);
        return range;
    };
    RegExpParser.prototype.atom = function() {
        var atom;
        var begin = this.idx;
        switch(this.peekChar()){
            case ".":
                atom = this.dotAll();
                break;
            case "\\":
                atom = this.atomEscape();
                break;
            case "[":
                atom = this.characterClass();
                break;
            case "(":
                atom = this.group();
                break;
        }
        if (atom === undefined && this.isPatternCharacter()) atom = this.patternCharacter();
        ASSERT_EXISTS(atom);
        atom.loc = this.loc(begin);
        if (this.isQuantifier()) atom.quantifier = this.quantifier();
        return atom;
    };
    RegExpParser.prototype.dotAll = function() {
        this.consumeChar(".");
        return {
            type: "Set",
            complement: true,
            value: [
                cc("\n"),
                cc("\r"),
                cc("\u2028"),
                cc("\u2029")
            ]
        };
    };
    RegExpParser.prototype.atomEscape = function() {
        this.consumeChar("\\");
        switch(this.peekChar()){
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                return this.decimalEscapeAtom();
            case "d":
            case "D":
            case "s":
            case "S":
            case "w":
            case "W":
                return this.characterClassEscape();
            case "f":
            case "n":
            case "r":
            case "t":
            case "v":
                return this.controlEscapeAtom();
            case "c":
                return this.controlLetterEscapeAtom();
            case "0":
                return this.nulCharacterAtom();
            case "x":
                return this.hexEscapeSequenceAtom();
            case "u":
                return this.regExpUnicodeEscapeSequenceAtom();
            default:
                return this.identityEscapeAtom();
        }
    };
    RegExpParser.prototype.decimalEscapeAtom = function() {
        var value = this.positiveInteger();
        return {
            type: "GroupBackReference",
            value: value
        };
    };
    RegExpParser.prototype.characterClassEscape = function() {
        var set;
        var complement = false;
        switch(this.popChar()){
            case "d":
                set = digitsCharCodes;
                break;
            case "D":
                set = digitsCharCodes;
                complement = true;
                break;
            case "s":
                set = whitespaceCodes;
                break;
            case "S":
                set = whitespaceCodes;
                complement = true;
                break;
            case "w":
                set = wordCharCodes;
                break;
            case "W":
                set = wordCharCodes;
                complement = true;
                break;
        }
        ASSERT_EXISTS(set);
        return {
            type: "Set",
            value: set,
            complement: complement
        };
    };
    RegExpParser.prototype.controlEscapeAtom = function() {
        var escapeCode;
        switch(this.popChar()){
            case "f":
                escapeCode = cc("\f");
                break;
            case "n":
                escapeCode = cc("\n");
                break;
            case "r":
                escapeCode = cc("\r");
                break;
            case "t":
                escapeCode = cc("	");
                break;
            case "v":
                escapeCode = cc("\v");
                break;
        }
        ASSERT_EXISTS(escapeCode);
        return {
            type: "Character",
            value: escapeCode
        };
    };
    RegExpParser.prototype.controlLetterEscapeAtom = function() {
        this.consumeChar("c");
        var letter = this.popChar();
        if (/[a-zA-Z]/.test(letter) === false) throw Error("Invalid ");
        var letterCode = letter.toUpperCase().charCodeAt(0) - 64;
        return {
            type: "Character",
            value: letterCode
        };
    };
    RegExpParser.prototype.nulCharacterAtom = function() {
        // TODO implement '[lookahead ∉ DecimalDigit]'
        // TODO: for the deprecated octal escape sequence
        this.consumeChar("0");
        return {
            type: "Character",
            value: cc("\x00")
        };
    };
    RegExpParser.prototype.hexEscapeSequenceAtom = function() {
        this.consumeChar("x");
        return this.parseHexDigits(2);
    };
    RegExpParser.prototype.regExpUnicodeEscapeSequenceAtom = function() {
        this.consumeChar("u");
        return this.parseHexDigits(4);
    };
    RegExpParser.prototype.identityEscapeAtom = function() {
        // TODO: implement "SourceCharacter but not UnicodeIDContinue"
        // // http://unicode.org/reports/tr31/#Specific_Character_Adjustments
        var escapedChar = this.popChar();
        return {
            type: "Character",
            value: cc(escapedChar)
        };
    };
    RegExpParser.prototype.classPatternCharacterAtom = function() {
        switch(this.peekChar()){
            // istanbul ignore next
            case "\n":
            // istanbul ignore next
            case "\r":
            // istanbul ignore next
            case "\u2028":
            // istanbul ignore next
            case "\u2029":
            // istanbul ignore next
            case "\\":
            // istanbul ignore next
            case "]":
                throw Error("TBD");
            default:
                var nextChar = this.popChar();
                return {
                    type: "Character",
                    value: cc(nextChar)
                };
        }
    };
    RegExpParser.prototype.characterClass = function() {
        var set = [];
        var complement = false;
        this.consumeChar("[");
        if (this.peekChar(0) === "^") {
            this.consumeChar("^");
            complement = true;
        }
        while(this.isClassAtom()){
            var from = this.classAtom();
            var isFromSingleChar = from.type === "Character";
            if (isFromSingleChar && this.isRangeDash()) {
                this.consumeChar("-");
                var to = this.classAtom();
                var isToSingleChar = to.type === "Character";
                // a range can only be used when both sides are single characters
                if (isToSingleChar) {
                    if (to.value < from.value) throw Error("Range out of order in character class");
                    set.push({
                        from: from.value,
                        to: to.value
                    });
                } else {
                    // literal dash
                    insertToSet(from.value, set);
                    set.push(cc("-"));
                    insertToSet(to.value, set);
                }
            } else insertToSet(from.value, set);
        }
        this.consumeChar("]");
        return {
            type: "Set",
            complement: complement,
            value: set
        };
    };
    RegExpParser.prototype.classAtom = function() {
        switch(this.peekChar()){
            // istanbul ignore next
            case "]":
            // istanbul ignore next
            case "\n":
            // istanbul ignore next
            case "\r":
            // istanbul ignore next
            case "\u2028":
            // istanbul ignore next
            case "\u2029":
                throw Error("TBD");
            case "\\":
                return this.classEscape();
            default:
                return this.classPatternCharacterAtom();
        }
    };
    RegExpParser.prototype.classEscape = function() {
        this.consumeChar("\\");
        switch(this.peekChar()){
            // Matches a backspace.
            // (Not to be confused with \b word boundary outside characterClass)
            case "b":
                this.consumeChar("b");
                return {
                    type: "Character",
                    value: cc("\b")
                };
            case "d":
            case "D":
            case "s":
            case "S":
            case "w":
            case "W":
                return this.characterClassEscape();
            case "f":
            case "n":
            case "r":
            case "t":
            case "v":
                return this.controlEscapeAtom();
            case "c":
                return this.controlLetterEscapeAtom();
            case "0":
                return this.nulCharacterAtom();
            case "x":
                return this.hexEscapeSequenceAtom();
            case "u":
                return this.regExpUnicodeEscapeSequenceAtom();
            default:
                return this.identityEscapeAtom();
        }
    };
    RegExpParser.prototype.group = function() {
        var capturing = true;
        this.consumeChar("(");
        switch(this.peekChar(0)){
            case "?":
                this.consumeChar("?");
                this.consumeChar(":");
                capturing = false;
                break;
            default:
                this.groupIdx++;
                break;
        }
        var value = this.disjunction();
        this.consumeChar(")");
        var groupAst = {
            type: "Group",
            capturing: capturing,
            value: value
        };
        if (capturing) groupAst.idx = this.groupIdx;
        return groupAst;
    };
    RegExpParser.prototype.positiveInteger = function() {
        var number = this.popChar();
        // istanbul ignore next - can't ever get here due to previous lookahead checks
        // still implementing this error checking in case this ever changes.
        if (decimalPatternNoZero.test(number) === false) throw Error("Expecting a positive integer");
        while(decimalPattern.test(this.peekChar(0)))number += this.popChar();
        return parseInt(number, 10);
    };
    RegExpParser.prototype.integerIncludingZero = function() {
        var number = this.popChar();
        if (decimalPattern.test(number) === false) throw Error("Expecting an integer");
        while(decimalPattern.test(this.peekChar(0)))number += this.popChar();
        return parseInt(number, 10);
    };
    RegExpParser.prototype.patternCharacter = function() {
        var nextChar = this.popChar();
        switch(nextChar){
            // istanbul ignore next
            case "\n":
            // istanbul ignore next
            case "\r":
            // istanbul ignore next
            case "\u2028":
            // istanbul ignore next
            case "\u2029":
            // istanbul ignore next
            case "^":
            // istanbul ignore next
            case "$":
            // istanbul ignore next
            case "\\":
            // istanbul ignore next
            case ".":
            // istanbul ignore next
            case "*":
            // istanbul ignore next
            case "+":
            // istanbul ignore next
            case "?":
            // istanbul ignore next
            case "(":
            // istanbul ignore next
            case ")":
            // istanbul ignore next
            case "[":
            // istanbul ignore next
            case "|":
                // istanbul ignore next
                throw Error("TBD");
            default:
                return {
                    type: "Character",
                    value: cc(nextChar)
                };
        }
    };
    RegExpParser.prototype.isRegExpFlag = function() {
        switch(this.peekChar(0)){
            case "g":
            case "i":
            case "m":
            case "u":
            case "y":
                return true;
            default:
                return false;
        }
    };
    RegExpParser.prototype.isRangeDash = function() {
        return this.peekChar() === "-" && this.isClassAtom(1);
    };
    RegExpParser.prototype.isDigit = function() {
        return decimalPattern.test(this.peekChar(0));
    };
    RegExpParser.prototype.isClassAtom = function(howMuch) {
        if (howMuch === undefined) howMuch = 0;
        switch(this.peekChar(howMuch)){
            case "]":
            case "\n":
            case "\r":
            case "\u2028":
            case "\u2029":
                return false;
            default:
                return true;
        }
    };
    RegExpParser.prototype.isTerm = function() {
        return this.isAtom() || this.isAssertion();
    };
    RegExpParser.prototype.isAtom = function() {
        if (this.isPatternCharacter()) return true;
        switch(this.peekChar(0)){
            case ".":
            case "\\":
            case "[":
            // TODO: isAtom must be called before isAssertion - disambiguate
            case "(":
                return true;
            default:
                return false;
        }
    };
    RegExpParser.prototype.isAssertion = function() {
        switch(this.peekChar(0)){
            case "^":
            case "$":
                return true;
            // '\b' or '\B'
            case "\\":
                switch(this.peekChar(1)){
                    case "b":
                    case "B":
                        return true;
                    default:
                        return false;
                }
            // '(?=' or '(?!'
            case "(":
                return this.peekChar(1) === "?" && (this.peekChar(2) === "=" || this.peekChar(2) === "!");
            default:
                return false;
        }
    };
    RegExpParser.prototype.isQuantifier = function() {
        var prevState = this.saveState();
        try {
            return this.quantifier(true) !== undefined;
        } catch (e) {
            return false;
        } finally{
            this.restoreState(prevState);
        }
    };
    RegExpParser.prototype.isPatternCharacter = function() {
        switch(this.peekChar()){
            case "^":
            case "$":
            case "\\":
            case ".":
            case "*":
            case "+":
            case "?":
            case "(":
            case ")":
            case "[":
            case "|":
            case "/":
            case "\n":
            case "\r":
            case "\u2028":
            case "\u2029":
                return false;
            default:
                return true;
        }
    };
    RegExpParser.prototype.parseHexDigits = function(howMany) {
        var hexString = "";
        for(var i = 0; i < howMany; i++){
            var hexChar = this.popChar();
            if (hexDigitPattern.test(hexChar) === false) throw Error("Expecting a HexDecimal digits");
            hexString += hexChar;
        }
        var charCode = parseInt(hexString, 16);
        return {
            type: "Character",
            value: charCode
        };
    };
    RegExpParser.prototype.peekChar = function(howMuch) {
        if (howMuch === undefined) howMuch = 0;
        return this.input[this.idx + howMuch];
    };
    RegExpParser.prototype.popChar = function() {
        var nextChar = this.peekChar(0);
        this.consumeChar();
        return nextChar;
    };
    RegExpParser.prototype.consumeChar = function(char) {
        if (char !== undefined && this.input[this.idx] !== char) throw Error("Expected: '" + char + "' but found: '" + this.input[this.idx] + "' at offset: " + this.idx);
        if (this.idx >= this.input.length) throw Error("Unexpected end of input");
        this.idx++;
    };
    RegExpParser.prototype.loc = function(begin) {
        return {
            begin: begin,
            end: this.idx
        };
    };
    // consts and utilities
    var hexDigitPattern = /[0-9a-fA-F]/;
    var decimalPattern = /[0-9]/;
    var decimalPatternNoZero = /[1-9]/;
    function cc(char) {
        return char.charCodeAt(0);
    }
    function insertToSet(item, set) {
        if (item.length !== undefined) item.forEach(function(subItem) {
            set.push(subItem);
        });
        else set.push(item);
    }
    function addFlag(flagObj, flagKey) {
        if (flagObj[flagKey] === true) throw "duplicate flag " + flagKey;
        flagObj[flagKey] = true;
    }
    function ASSERT_EXISTS(obj) {
        // istanbul ignore next
        if (obj === undefined) throw Error("Internal Error - Should never get here!");
    }
    // istanbul ignore next
    function ASSERT_NEVER_REACH_HERE() {
        throw Error("Internal Error - Should never get here!");
    }
    var i;
    var digitsCharCodes = [];
    for(i = cc("0"); i <= cc("9"); i++)digitsCharCodes.push(i);
    var wordCharCodes = [
        cc("_")
    ].concat(digitsCharCodes);
    for(i = cc("a"); i <= cc("z"); i++)wordCharCodes.push(i);
    for(i = cc("A"); i <= cc("Z"); i++)wordCharCodes.push(i);
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#character-classes
    var whitespaceCodes = [
        cc(" "),
        cc("\f"),
        cc("\n"),
        cc("\r"),
        cc("	"),
        cc("\v"),
        cc("	"),
        cc("\xa0"),
        cc(" "),
        cc(" "),
        cc(" "),
        cc(" "),
        cc(" "),
        cc(" "),
        cc(" "),
        cc(" "),
        cc(" "),
        cc(" "),
        cc(" "),
        cc(" "),
        cc("\u2028"),
        cc("\u2029"),
        cc(" "),
        cc(" "),
        cc("　"),
        cc("\uFEFF")
    ];
    function BaseRegExpVisitor() {}
    BaseRegExpVisitor.prototype.visitChildren = function(node) {
        for(var key in node){
            var child = node[key];
            /* istanbul ignore else */ if (node.hasOwnProperty(key)) {
                if (child.type !== undefined) this.visit(child);
                else if (Array.isArray(child)) child.forEach(function(subChild) {
                    this.visit(subChild);
                }, this);
            }
        }
    };
    BaseRegExpVisitor.prototype.visit = function(node) {
        switch(node.type){
            case "Pattern":
                this.visitPattern(node);
                break;
            case "Flags":
                this.visitFlags(node);
                break;
            case "Disjunction":
                this.visitDisjunction(node);
                break;
            case "Alternative":
                this.visitAlternative(node);
                break;
            case "StartAnchor":
                this.visitStartAnchor(node);
                break;
            case "EndAnchor":
                this.visitEndAnchor(node);
                break;
            case "WordBoundary":
                this.visitWordBoundary(node);
                break;
            case "NonWordBoundary":
                this.visitNonWordBoundary(node);
                break;
            case "Lookahead":
                this.visitLookahead(node);
                break;
            case "NegativeLookahead":
                this.visitNegativeLookahead(node);
                break;
            case "Character":
                this.visitCharacter(node);
                break;
            case "Set":
                this.visitSet(node);
                break;
            case "Group":
                this.visitGroup(node);
                break;
            case "GroupBackReference":
                this.visitGroupBackReference(node);
                break;
            case "Quantifier":
                this.visitQuantifier(node);
                break;
        }
        this.visitChildren(node);
    };
    BaseRegExpVisitor.prototype.visitPattern = function(node) {};
    BaseRegExpVisitor.prototype.visitFlags = function(node) {};
    BaseRegExpVisitor.prototype.visitDisjunction = function(node) {};
    BaseRegExpVisitor.prototype.visitAlternative = function(node) {};
    // Assertion
    BaseRegExpVisitor.prototype.visitStartAnchor = function(node) {};
    BaseRegExpVisitor.prototype.visitEndAnchor = function(node) {};
    BaseRegExpVisitor.prototype.visitWordBoundary = function(node) {};
    BaseRegExpVisitor.prototype.visitNonWordBoundary = function(node) {};
    BaseRegExpVisitor.prototype.visitLookahead = function(node) {};
    BaseRegExpVisitor.prototype.visitNegativeLookahead = function(node) {};
    // atoms
    BaseRegExpVisitor.prototype.visitCharacter = function(node) {};
    BaseRegExpVisitor.prototype.visitSet = function(node) {};
    BaseRegExpVisitor.prototype.visitGroup = function(node) {};
    BaseRegExpVisitor.prototype.visitGroupBackReference = function(node) {};
    BaseRegExpVisitor.prototype.visitQuantifier = function(node) {};
    return {
        RegExpParser: RegExpParser,
        BaseRegExpVisitor: BaseRegExpVisitor,
        VERSION: "0.5.0"
    };
});

},{}],"48AJB":[function(require,module,exports) {
module.exports = require("4b24fec89d0eece4");

},{"4b24fec89d0eece4":"8VnZ3"}],"8VnZ3":[function(require,module,exports) {
/**
 * Gets the first element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias first
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the first element of `array`.
 * @example
 *
 * _.head([1, 2, 3]);
 * // => 1
 *
 * _.head([]);
 * // => undefined
 */ function head(array) {
    return array && array.length ? array[0] : undefined;
}
module.exports = head;

},{}],"cuuyZ":[function(require,module,exports) {
/**
 * Creates an array with all falsey values removed. The values `false`, `null`,
 * `0`, `""`, `undefined`, and `NaN` are falsey.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to compact.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * _.compact([0, 1, false, 2, '', 3]);
 * // => [1, 2, 3]
 */ function compact(array) {
    var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
    while(++index < length){
        var value = array[index];
        if (value) result[resIndex++] = value;
    }
    return result;
}
module.exports = compact;

},{}],"8Agt9":[function(require,module,exports) {
var arrayFilter = require("a6020755d0bbe06f"), baseFilter = require("8f89092e1f3a1730"), baseIteratee = require("b1ed86274b073178"), isArray = require("d999814d2b60c343"), negate = require("bcf16cafbfa07007");
/**
 * The opposite of `_.filter`; this method returns the elements of `collection`
 * that `predicate` does **not** return truthy for.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see _.filter
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': false },
 *   { 'user': 'fred',   'age': 40, 'active': true }
 * ];
 *
 * _.reject(users, function(o) { return !o.active; });
 * // => objects for ['fred']
 *
 * // The `_.matches` iteratee shorthand.
 * _.reject(users, { 'age': 40, 'active': true });
 * // => objects for ['barney']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.reject(users, ['active', false]);
 * // => objects for ['fred']
 *
 * // The `_.property` iteratee shorthand.
 * _.reject(users, 'active');
 * // => objects for ['barney']
 */ function reject(collection, predicate) {
    var func = isArray(collection) ? arrayFilter : baseFilter;
    return func(collection, negate(baseIteratee(predicate, 3)));
}
module.exports = reject;

},{"a6020755d0bbe06f":"92CtW","8f89092e1f3a1730":"lMEiL","b1ed86274b073178":"ant2T","d999814d2b60c343":"csCQN","bcf16cafbfa07007":"giK0e"}],"lMEiL":[function(require,module,exports) {
var baseEach = require("f9b416bbd850c1fb");
/**
 * The base implementation of `_.filter` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */ function baseFilter(collection, predicate) {
    var result = [];
    baseEach(collection, function(value, index, collection) {
        if (predicate(value, index, collection)) result.push(value);
    });
    return result;
}
module.exports = baseFilter;

},{"f9b416bbd850c1fb":"gT3xd"}],"giK0e":[function(require,module,exports) {
/** Error message constants. */ var FUNC_ERROR_TEXT = "Expected a function";
/**
 * Creates a function that negates the result of the predicate `func`. The
 * `func` predicate is invoked with the `this` binding and arguments of the
 * created function.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {Function} predicate The predicate to negate.
 * @returns {Function} Returns the new negated function.
 * @example
 *
 * function isEven(n) {
 *   return n % 2 == 0;
 * }
 *
 * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
 * // => [1, 3, 5]
 */ function negate(predicate) {
    if (typeof predicate != "function") throw new TypeError(FUNC_ERROR_TEXT);
    return function() {
        var args = arguments;
        switch(args.length){
            case 0:
                return !predicate.call(this);
            case 1:
                return !predicate.call(this, args[0]);
            case 2:
                return !predicate.call(this, args[0], args[1]);
            case 3:
                return !predicate.call(this, args[0], args[1], args[2]);
        }
        return !predicate.apply(this, args);
    };
}
module.exports = negate;

},{}],"kkSPw":[function(require,module,exports) {
var baseDifference = require("68ad3ed657165894"), baseFlatten = require("274eacf6c5db21d1"), baseRest = require("f81b002f05d9fa3d"), isArrayLikeObject = require("c0d5ae8b8d1e5645");
/**
 * Creates an array of `array` values not included in the other given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * **Note:** Unlike `_.pullAll`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.without, _.xor
 * @example
 *
 * _.difference([2, 1], [2, 3]);
 * // => [1]
 */ var difference = baseRest(function(array, values) {
    return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true)) : [];
});
module.exports = difference;

},{"68ad3ed657165894":"7LmU7","274eacf6c5db21d1":"56zU2","f81b002f05d9fa3d":"72E4L","c0d5ae8b8d1e5645":"1QSWN"}],"7LmU7":[function(require,module,exports) {
var SetCache = require("24f4b9cbc81696e0"), arrayIncludes = require("81e4fe535468d831"), arrayIncludesWith = require("90bb2140eaac029e"), arrayMap = require("7436ea7dfb9a8bab"), baseUnary = require("c466a3eeaa8c48da"), cacheHas = require("aea8a6a021670ce5");
/** Used as the size to enable large array optimizations. */ var LARGE_ARRAY_SIZE = 200;
/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */ function baseDifference(array, values, iteratee, comparator) {
    var index = -1, includes = arrayIncludes, isCommon = true, length = array.length, result = [], valuesLength = values.length;
    if (!length) return result;
    if (iteratee) values = arrayMap(values, baseUnary(iteratee));
    if (comparator) {
        includes = arrayIncludesWith;
        isCommon = false;
    } else if (values.length >= LARGE_ARRAY_SIZE) {
        includes = cacheHas;
        isCommon = false;
        values = new SetCache(values);
    }
    outer: while(++index < length){
        var value = array[index], computed = iteratee == null ? value : iteratee(value);
        value = comparator || value !== 0 ? value : 0;
        if (isCommon && computed === computed) {
            var valuesIndex = valuesLength;
            while(valuesIndex--){
                if (values[valuesIndex] === computed) continue outer;
            }
            result.push(value);
        } else if (!includes(values, computed, comparator)) result.push(value);
    }
    return result;
}
module.exports = baseDifference;

},{"24f4b9cbc81696e0":"2wivS","81e4fe535468d831":"25ck6","90bb2140eaac029e":"6kZPK","7436ea7dfb9a8bab":"7ZLP0","c466a3eeaa8c48da":"9lPWq","aea8a6a021670ce5":"4k7Oh"}],"1QSWN":[function(require,module,exports) {
var isArrayLike = require("9ce7efb3ed8cb283"), isObjectLike = require("639a4883b097af28");
/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */ function isArrayLikeObject(value) {
    return isObjectLike(value) && isArrayLike(value);
}
module.exports = isArrayLikeObject;

},{"9ce7efb3ed8cb283":"f1oKE","639a4883b097af28":"gu57I"}],"jPRKL":[function(require,module,exports) {
var baseIndexOf = require("a49dead1a641cab2"), toInteger = require("537d6f21ad802127");
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeMax = Math.max;
/**
 * Gets the index at which the first occurrence of `value` is found in `array`
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. If `fromIndex` is negative, it's used as the
 * offset from the end of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 * @example
 *
 * _.indexOf([1, 2, 1, 2], 2);
 * // => 1
 *
 * // Search from the `fromIndex`.
 * _.indexOf([1, 2, 1, 2], 2, 2);
 * // => 3
 */ function indexOf(array, value, fromIndex) {
    var length = array == null ? 0 : array.length;
    if (!length) return -1;
    var index = fromIndex == null ? 0 : toInteger(fromIndex);
    if (index < 0) index = nativeMax(length + index, 0);
    return baseIndexOf(array, value, index);
}
module.exports = indexOf;

},{"a49dead1a641cab2":"agNYp","537d6f21ad802127":"hljBn"}],"43jpw":[function(require,module,exports) {
var createFind = require("f180f4459f295340"), findIndex = require("5af87c887948f3ca");
/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */ var find = createFind(findIndex);
module.exports = find;

},{"f180f4459f295340":"fsFOD","5af87c887948f3ca":"jnhTL"}],"fsFOD":[function(require,module,exports) {
var baseIteratee = require("ad0cafc4de9b66e6"), isArrayLike = require("cfacddc571674e4b"), keys = require("847fe2f1205991cd");
/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */ function createFind(findIndexFunc) {
    return function(collection, predicate, fromIndex) {
        var iterable = Object(collection);
        if (!isArrayLike(collection)) {
            var iteratee = baseIteratee(predicate, 3);
            collection = keys(collection);
            predicate = function(key) {
                return iteratee(iterable[key], key, iterable);
            };
        }
        var index = findIndexFunc(collection, predicate, fromIndex);
        return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
    };
}
module.exports = createFind;

},{"ad0cafc4de9b66e6":"ant2T","cfacddc571674e4b":"f1oKE","847fe2f1205991cd":"2MKLE"}],"jnhTL":[function(require,module,exports) {
var baseFindIndex = require("c4739d82cf87a9be"), baseIteratee = require("a250b62014668b1"), toInteger = require("8b47b48a148e503b");
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeMax = Math.max;
/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */ function findIndex(array, predicate, fromIndex) {
    var length = array == null ? 0 : array.length;
    if (!length) return -1;
    var index = fromIndex == null ? 0 : toInteger(fromIndex);
    if (index < 0) index = nativeMax(length + index, 0);
    return baseFindIndex(array, baseIteratee(predicate, 3), index);
}
module.exports = findIndex;

},{"c4739d82cf87a9be":"3OlL3","a250b62014668b1":"ant2T","8b47b48a148e503b":"hljBn"}],"guOld":[function(require,module,exports) {
var arrayFilter = require("a1b76c4f8942e73e"), baseFilter = require("a430472df6f36dc1"), baseIteratee = require("65ac72656eceb615"), isArray = require("458bf6bb1af9daa2");
/**
 * Iterates over elements of `collection`, returning an array of all elements
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * **Note:** Unlike `_.remove`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see _.reject
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * _.filter(users, function(o) { return !o.active; });
 * // => objects for ['fred']
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, { 'age': 36, 'active': true });
 * // => objects for ['barney']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, ['active', false]);
 * // => objects for ['fred']
 *
 * // The `_.property` iteratee shorthand.
 * _.filter(users, 'active');
 * // => objects for ['barney']
 *
 * // Combining several predicates using `_.overEvery` or `_.overSome`.
 * _.filter(users, _.overSome([{ 'age': 36 }, ['age', 40]]));
 * // => objects for ['fred', 'barney']
 */ function filter(collection, predicate) {
    var func = isArray(collection) ? arrayFilter : baseFilter;
    return func(collection, baseIteratee(predicate, 3));
}
module.exports = filter;

},{"a1b76c4f8942e73e":"92CtW","a430472df6f36dc1":"lMEiL","65ac72656eceb615":"ant2T","458bf6bb1af9daa2":"csCQN"}],"bHoss":[function(require,module,exports) {
var baseRest = require("7185e90d741afd2a"), eq = require("c7442b0697635fa9"), isIterateeCall = require("4bcb10da45efc3b8"), keysIn = require("4217ca21be56753d");
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaultsDeep
 * @example
 *
 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */ var defaults = baseRest(function(object, sources) {
    object = Object(object);
    var index = -1;
    var length = sources.length;
    var guard = length > 2 ? sources[2] : undefined;
    if (guard && isIterateeCall(sources[0], sources[1], guard)) length = 1;
    while(++index < length){
        var source = sources[index];
        var props = keysIn(source);
        var propsIndex = -1;
        var propsLength = props.length;
        while(++propsIndex < propsLength){
            var key = props[propsIndex];
            var value = object[key];
            if (value === undefined || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) object[key] = source[key];
        }
    }
    return object;
});
module.exports = defaults;

},{"7185e90d741afd2a":"72E4L","c7442b0697635fa9":"7ctDO","4bcb10da45efc3b8":"cpc9v","4217ca21be56753d":"5QHGn"}],"isYLF":[function(require,module,exports) {
var arrayReduce = require("8772d9c160085222"), baseEach = require("7c156122a905f02e"), baseIteratee = require("288ce78b1e338692"), baseReduce = require("7941e51212237a70"), isArray = require("b7d00545ad8400ba");
/**
 * Reduces `collection` to a value which is the accumulated result of running
 * each element in `collection` thru `iteratee`, where each successive
 * invocation is supplied the return value of the previous. If `accumulator`
 * is not given, the first element of `collection` is used as the initial
 * value. The iteratee is invoked with four arguments:
 * (accumulator, value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.reduce`, `_.reduceRight`, and `_.transform`.
 *
 * The guarded methods are:
 * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
 * and `sortBy`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @returns {*} Returns the accumulated value.
 * @see _.reduceRight
 * @example
 *
 * _.reduce([1, 2], function(sum, n) {
 *   return sum + n;
 * }, 0);
 * // => 3
 *
 * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 *   return result;
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
 */ function reduce(collection, iteratee, accumulator) {
    var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
    return func(collection, baseIteratee(iteratee, 4), accumulator, initAccum, baseEach);
}
module.exports = reduce;

},{"8772d9c160085222":"6M1I2","7c156122a905f02e":"gT3xd","288ce78b1e338692":"ant2T","7941e51212237a70":"bsfhl","b7d00545ad8400ba":"csCQN"}],"6M1I2":[function(require,module,exports) {
/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */ function arrayReduce(array, iteratee, accumulator, initAccum) {
    var index = -1, length = array == null ? 0 : array.length;
    if (initAccum && length) accumulator = array[++index];
    while(++index < length)accumulator = iteratee(accumulator, array[index], index, array);
    return accumulator;
}
module.exports = arrayReduce;

},{}],"bsfhl":[function(require,module,exports) {
/**
 * The base implementation of `_.reduce` and `_.reduceRight`, without support
 * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} accumulator The initial value.
 * @param {boolean} initAccum Specify using the first or last element of
 *  `collection` as the initial value.
 * @param {Function} eachFunc The function to iterate over `collection`.
 * @returns {*} Returns the accumulated value.
 */ function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
    eachFunc(collection, function(value, index, collection) {
        accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection);
    });
    return accumulator;
}
module.exports = baseReduce;

},{}],"ajm9h":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.canMatchCharCode = exports.firstCharOptimizedIndices = exports.getOptimizedStartCodesIndices = exports.failedOptimizationPrefixMsg = void 0;
var regexp_to_ast_1 = require("cdf5722d81afb32d");
var isArray_1 = __importDefault(require("3b060404700b8b9a"));
var every_1 = __importDefault(require("7ad60b2455177013"));
var forEach_1 = __importDefault(require("6a3cdb42a506cbc1"));
var find_1 = __importDefault(require("4da4402c03386af8"));
var values_1 = __importDefault(require("23ff3e3d066b5482"));
var includes_1 = __importDefault(require("c68ecb04d472fc4a"));
var utils_1 = require("3d4573af54af14f8");
var reg_exp_parser_1 = require("d71dd4accd578417");
var lexer_1 = require("e3ba025f32a49daa");
var complementErrorMessage = "Complement Sets are not supported for first char optimization";
exports.failedOptimizationPrefixMsg = 'Unable to use "first char" lexer optimizations:\n';
function getOptimizedStartCodesIndices(regExp, ensureOptimizations) {
    if (ensureOptimizations === void 0) ensureOptimizations = false;
    try {
        var ast = (0, reg_exp_parser_1.getRegExpAst)(regExp);
        var firstChars = firstCharOptimizedIndices(ast.value, {}, ast.flags.ignoreCase);
        return firstChars;
    } catch (e) {
        /* istanbul ignore next */ // Testing this relies on the regexp-to-ast library having a bug... */
        // TODO: only the else branch needs to be ignored, try to fix with newer prettier / tsc
        if (e.message === complementErrorMessage) {
            if (ensureOptimizations) (0, utils_1.PRINT_WARNING)("".concat(exports.failedOptimizationPrefixMsg) + "	Unable to optimize: < ".concat(regExp.toString(), " >\n") + "	Complement Sets cannot be automatically optimized.\n" + "	This will disable the lexer's first char optimizations.\n" + "	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.");
        } else {
            var msgSuffix = "";
            if (ensureOptimizations) msgSuffix = "\n	This will disable the lexer's first char optimizations.\n	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.";
            (0, utils_1.PRINT_ERROR)("".concat(exports.failedOptimizationPrefixMsg, "\n") + "	Failed parsing: < ".concat(regExp.toString(), " >\n") + "	Using the regexp-to-ast library version: ".concat(regexp_to_ast_1.VERSION, "\n") + "	Please open an issue at: https://github.com/bd82/regexp-to-ast/issues" + msgSuffix);
        }
    }
    return [];
}
exports.getOptimizedStartCodesIndices = getOptimizedStartCodesIndices;
function firstCharOptimizedIndices(ast, result, ignoreCase) {
    switch(ast.type){
        case "Disjunction":
            for(var i = 0; i < ast.value.length; i++)firstCharOptimizedIndices(ast.value[i], result, ignoreCase);
            break;
        case "Alternative":
            var terms = ast.value;
            for(var i = 0; i < terms.length; i++){
                var term = terms[i];
                // skip terms that cannot effect the first char results
                switch(term.type){
                    case "EndAnchor":
                    // A group back reference cannot affect potential starting char.
                    // because if a back reference is the first production than automatically
                    // the group being referenced has had to come BEFORE so its codes have already been added
                    case "GroupBackReference":
                    // assertions do not affect potential starting codes
                    case "Lookahead":
                    case "NegativeLookahead":
                    case "StartAnchor":
                    case "WordBoundary":
                    case "NonWordBoundary":
                        continue;
                }
                var atom = term;
                switch(atom.type){
                    case "Character":
                        addOptimizedIdxToResult(atom.value, result, ignoreCase);
                        break;
                    case "Set":
                        if (atom.complement === true) throw Error(complementErrorMessage);
                        (0, forEach_1.default)(atom.value, function(code) {
                            if (typeof code === "number") addOptimizedIdxToResult(code, result, ignoreCase);
                            else {
                                // range
                                var range = code;
                                // cannot optimize when ignoreCase is
                                if (ignoreCase === true) for(var rangeCode = range.from; rangeCode <= range.to; rangeCode++)addOptimizedIdxToResult(rangeCode, result, ignoreCase);
                                else {
                                    // handle unoptimized values
                                    for(var rangeCode = range.from; rangeCode <= range.to && rangeCode < lexer_1.minOptimizationVal; rangeCode++)addOptimizedIdxToResult(rangeCode, result, ignoreCase);
                                    // Less common charCode where we optimize for faster init time, by using larger "buckets"
                                    if (range.to >= lexer_1.minOptimizationVal) {
                                        var minUnOptVal = range.from >= lexer_1.minOptimizationVal ? range.from : lexer_1.minOptimizationVal;
                                        var maxUnOptVal = range.to;
                                        var minOptIdx = (0, lexer_1.charCodeToOptimizedIndex)(minUnOptVal);
                                        var maxOptIdx = (0, lexer_1.charCodeToOptimizedIndex)(maxUnOptVal);
                                        for(var currOptIdx = minOptIdx; currOptIdx <= maxOptIdx; currOptIdx++)result[currOptIdx] = currOptIdx;
                                    }
                                }
                            }
                        });
                        break;
                    case "Group":
                        firstCharOptimizedIndices(atom.value, result, ignoreCase);
                        break;
                    /* istanbul ignore next */ default:
                        throw Error("Non Exhaustive Match");
                }
                // reached a mandatory production, no more **start** codes can be found on this alternative
                var isOptionalQuantifier = atom.quantifier !== undefined && atom.quantifier.atLeast === 0;
                if (// A group may be optional due to empty contents /(?:)/
                // or if everything inside it is optional /((a)?)/
                atom.type === "Group" && isWholeOptional(atom) === false || // If this term is not a group it may only be optional if it has an optional quantifier
                atom.type !== "Group" && isOptionalQuantifier === false) break;
            }
            break;
        /* istanbul ignore next */ default:
            throw Error("non exhaustive match!");
    }
    // console.log(Object.keys(result).length)
    return (0, values_1.default)(result);
}
exports.firstCharOptimizedIndices = firstCharOptimizedIndices;
function addOptimizedIdxToResult(code, result, ignoreCase) {
    var optimizedCharIdx = (0, lexer_1.charCodeToOptimizedIndex)(code);
    result[optimizedCharIdx] = optimizedCharIdx;
    if (ignoreCase === true) handleIgnoreCase(code, result);
}
function handleIgnoreCase(code, result) {
    var char = String.fromCharCode(code);
    var upperChar = char.toUpperCase();
    /* istanbul ignore else */ if (upperChar !== char) {
        var optimizedCharIdx = (0, lexer_1.charCodeToOptimizedIndex)(upperChar.charCodeAt(0));
        result[optimizedCharIdx] = optimizedCharIdx;
    } else {
        var lowerChar = char.toLowerCase();
        if (lowerChar !== char) {
            var optimizedCharIdx = (0, lexer_1.charCodeToOptimizedIndex)(lowerChar.charCodeAt(0));
            result[optimizedCharIdx] = optimizedCharIdx;
        }
    }
}
function findCode(setNode, targetCharCodes) {
    return (0, find_1.default)(setNode.value, function(codeOrRange) {
        if (typeof codeOrRange === "number") return (0, includes_1.default)(targetCharCodes, codeOrRange);
        else {
            // range
            var range_1 = codeOrRange;
            return (0, find_1.default)(targetCharCodes, function(targetCode) {
                return range_1.from <= targetCode && targetCode <= range_1.to;
            }) !== undefined;
        }
    });
}
function isWholeOptional(ast) {
    var quantifier = ast.quantifier;
    if (quantifier && quantifier.atLeast === 0) return true;
    if (!ast.value) return false;
    return (0, isArray_1.default)(ast.value) ? (0, every_1.default)(ast.value, isWholeOptional) : isWholeOptional(ast.value);
}
var CharCodeFinder = /** @class */ function(_super) {
    __extends(CharCodeFinder, _super);
    function CharCodeFinder(targetCharCodes) {
        var _this = _super.call(this) || this;
        _this.targetCharCodes = targetCharCodes;
        _this.found = false;
        return _this;
    }
    CharCodeFinder.prototype.visitChildren = function(node) {
        // No need to keep looking...
        if (this.found === true) return;
        // switch lookaheads as they do not actually consume any characters thus
        // finding a charCode at lookahead context does not mean that regexp can actually contain it in a match.
        switch(node.type){
            case "Lookahead":
                this.visitLookahead(node);
                return;
            case "NegativeLookahead":
                this.visitNegativeLookahead(node);
                return;
        }
        _super.prototype.visitChildren.call(this, node);
    };
    CharCodeFinder.prototype.visitCharacter = function(node) {
        if ((0, includes_1.default)(this.targetCharCodes, node.value)) this.found = true;
    };
    CharCodeFinder.prototype.visitSet = function(node) {
        if (node.complement) {
            if (findCode(node, this.targetCharCodes) === undefined) this.found = true;
        } else if (findCode(node, this.targetCharCodes) !== undefined) this.found = true;
    };
    return CharCodeFinder;
}(regexp_to_ast_1.BaseRegExpVisitor);
function canMatchCharCode(charCodes, pattern) {
    if (pattern instanceof RegExp) {
        var ast = (0, reg_exp_parser_1.getRegExpAst)(pattern);
        var charCodeFinder = new CharCodeFinder(charCodes);
        charCodeFinder.visit(ast);
        return charCodeFinder.found;
    } else return (0, find_1.default)(pattern, function(char) {
        return (0, includes_1.default)(charCodes, char.charCodeAt(0));
    }) !== undefined;
}
exports.canMatchCharCode = canMatchCharCode;

},{"cdf5722d81afb32d":"ayMF4","3b060404700b8b9a":"csCQN","7ad60b2455177013":"aXOSA","6a3cdb42a506cbc1":"cQbs0","4da4402c03386af8":"43jpw","23ff3e3d066b5482":"7Uoc6","c68ecb04d472fc4a":"l3Nmg","3d4573af54af14f8":"eKRSC","d71dd4accd578417":"jdb01","e3ba025f32a49daa":"90qQo"}],"jdb01":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.clearRegExpParserCache = exports.getRegExpAst = void 0;
var regexp_to_ast_1 = require("1fa20551712ca011");
var regExpAstCache = {};
var regExpParser = new regexp_to_ast_1.RegExpParser();
function getRegExpAst(regExp) {
    var regExpStr = regExp.toString();
    if (regExpAstCache.hasOwnProperty(regExpStr)) return regExpAstCache[regExpStr];
    else {
        var regExpAst = regExpParser.pattern(regExpStr);
        regExpAstCache[regExpStr] = regExpAst;
        return regExpAst;
    }
}
exports.getRegExpAst = getRegExpAst;
function clearRegExpParserCache() {
    regExpAstCache = {};
}
exports.clearRegExpParserCache = clearRegExpParserCache;

},{"1fa20551712ca011":"ayMF4"}],"6oI7j":[function(require,module,exports) {
/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */ function last(array) {
    var length = array == null ? 0 : array.length;
    return length ? array[length - 1] : undefined;
}
module.exports = last;

},{}],"1KnzY":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isTokenType = exports.hasExtendingTokensTypesMapProperty = exports.hasExtendingTokensTypesProperty = exports.hasCategoriesProperty = exports.hasShortKeyProperty = exports.singleAssignCategoriesToksMap = exports.assignCategoriesMapProp = exports.assignCategoriesTokensProp = exports.assignTokenDefaultProps = exports.expandCategories = exports.augmentTokenTypes = exports.tokenIdxToClass = exports.tokenShortNameIdx = exports.tokenStructuredMatcherNoCategories = exports.tokenStructuredMatcher = void 0;
var isEmpty_1 = __importDefault(require("7f6f8d748479b73b"));
var compact_1 = __importDefault(require("e2f319eb4116c670"));
var isArray_1 = __importDefault(require("72fecd6fce6b8cef"));
var flatten_1 = __importDefault(require("17469ee21e195236"));
var difference_1 = __importDefault(require("ff867b2274764e1d"));
var map_1 = __importDefault(require("aaf911fca13dd827"));
var forEach_1 = __importDefault(require("d3045586a23fddf5"));
var has_1 = __importDefault(require("b5129c02a3bcd5e9"));
var includes_1 = __importDefault(require("c20635fdf2438435"));
var clone_1 = __importDefault(require("31b1012eebf2a317"));
function tokenStructuredMatcher(tokInstance, tokConstructor) {
    var instanceType = tokInstance.tokenTypeIdx;
    if (instanceType === tokConstructor.tokenTypeIdx) return true;
    else return tokConstructor.isParent === true && tokConstructor.categoryMatchesMap[instanceType] === true;
}
exports.tokenStructuredMatcher = tokenStructuredMatcher;
// Optimized tokenMatcher in case our grammar does not use token categories
// Being so tiny it is much more likely to be in-lined and this avoid the function call overhead
function tokenStructuredMatcherNoCategories(token, tokType) {
    return token.tokenTypeIdx === tokType.tokenTypeIdx;
}
exports.tokenStructuredMatcherNoCategories = tokenStructuredMatcherNoCategories;
exports.tokenShortNameIdx = 1;
exports.tokenIdxToClass = {};
function augmentTokenTypes(tokenTypes) {
    // collect the parent Token Types as well.
    var tokenTypesAndParents = expandCategories(tokenTypes);
    // add required tokenType and categoryMatches properties
    assignTokenDefaultProps(tokenTypesAndParents);
    // fill up the categoryMatches
    assignCategoriesMapProp(tokenTypesAndParents);
    assignCategoriesTokensProp(tokenTypesAndParents);
    (0, forEach_1.default)(tokenTypesAndParents, function(tokType) {
        tokType.isParent = tokType.categoryMatches.length > 0;
    });
}
exports.augmentTokenTypes = augmentTokenTypes;
function expandCategories(tokenTypes) {
    var result = (0, clone_1.default)(tokenTypes);
    var categories = tokenTypes;
    var searching = true;
    while(searching){
        categories = (0, compact_1.default)((0, flatten_1.default)((0, map_1.default)(categories, function(currTokType) {
            return currTokType.CATEGORIES;
        })));
        var newCategories = (0, difference_1.default)(categories, result);
        result = result.concat(newCategories);
        if ((0, isEmpty_1.default)(newCategories)) searching = false;
        else categories = newCategories;
    }
    return result;
}
exports.expandCategories = expandCategories;
function assignTokenDefaultProps(tokenTypes) {
    (0, forEach_1.default)(tokenTypes, function(currTokType) {
        if (!hasShortKeyProperty(currTokType)) {
            exports.tokenIdxToClass[exports.tokenShortNameIdx] = currTokType;
            currTokType.tokenTypeIdx = exports.tokenShortNameIdx++;
        }
        // CATEGORIES? : TokenType | TokenType[]
        if (hasCategoriesProperty(currTokType) && !(0, isArray_1.default)(currTokType.CATEGORIES)) currTokType.CATEGORIES = [
            currTokType.CATEGORIES
        ];
        if (!hasCategoriesProperty(currTokType)) currTokType.CATEGORIES = [];
        if (!hasExtendingTokensTypesProperty(currTokType)) currTokType.categoryMatches = [];
        if (!hasExtendingTokensTypesMapProperty(currTokType)) currTokType.categoryMatchesMap = {};
    });
}
exports.assignTokenDefaultProps = assignTokenDefaultProps;
function assignCategoriesTokensProp(tokenTypes) {
    (0, forEach_1.default)(tokenTypes, function(currTokType) {
        // avoid duplications
        currTokType.categoryMatches = [];
        (0, forEach_1.default)(currTokType.categoryMatchesMap, function(val, key) {
            currTokType.categoryMatches.push(exports.tokenIdxToClass[key].tokenTypeIdx);
        });
    });
}
exports.assignCategoriesTokensProp = assignCategoriesTokensProp;
function assignCategoriesMapProp(tokenTypes) {
    (0, forEach_1.default)(tokenTypes, function(currTokType) {
        singleAssignCategoriesToksMap([], currTokType);
    });
}
exports.assignCategoriesMapProp = assignCategoriesMapProp;
function singleAssignCategoriesToksMap(path, nextNode) {
    (0, forEach_1.default)(path, function(pathNode) {
        nextNode.categoryMatchesMap[pathNode.tokenTypeIdx] = true;
    });
    (0, forEach_1.default)(nextNode.CATEGORIES, function(nextCategory) {
        var newPath = path.concat(nextNode);
        // avoids infinite loops due to cyclic categories.
        if (!(0, includes_1.default)(newPath, nextCategory)) singleAssignCategoriesToksMap(newPath, nextCategory);
    });
}
exports.singleAssignCategoriesToksMap = singleAssignCategoriesToksMap;
function hasShortKeyProperty(tokType) {
    return (0, has_1.default)(tokType, "tokenTypeIdx");
}
exports.hasShortKeyProperty = hasShortKeyProperty;
function hasCategoriesProperty(tokType) {
    return (0, has_1.default)(tokType, "CATEGORIES");
}
exports.hasCategoriesProperty = hasCategoriesProperty;
function hasExtendingTokensTypesProperty(tokType) {
    return (0, has_1.default)(tokType, "categoryMatches");
}
exports.hasExtendingTokensTypesProperty = hasExtendingTokensTypesProperty;
function hasExtendingTokensTypesMapProperty(tokType) {
    return (0, has_1.default)(tokType, "categoryMatchesMap");
}
exports.hasExtendingTokensTypesMapProperty = hasExtendingTokensTypesMapProperty;
function isTokenType(tokType) {
    return (0, has_1.default)(tokType, "tokenTypeIdx");
}
exports.isTokenType = isTokenType;

},{"7f6f8d748479b73b":"HRoQ8","e2f319eb4116c670":"cuuyZ","72fecd6fce6b8cef":"csCQN","17469ee21e195236":"g3ybb","ff867b2274764e1d":"kkSPw","aaf911fca13dd827":"68KdA","d3045586a23fddf5":"cQbs0","b5129c02a3bcd5e9":"j5BJo","c20635fdf2438435":"l3Nmg","31b1012eebf2a317":"dIp0d"}],"dotIP":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defaultLexerErrorProvider = void 0;
exports.defaultLexerErrorProvider = {
    buildUnableToPopLexerModeMessage: function(token) {
        return "Unable to pop Lexer Mode after encountering Token ->".concat(token.image, "<- The Mode Stack is empty");
    },
    buildUnexpectedCharactersMessage: function(fullText, startOffset, length, line, column) {
        return "unexpected character: ->".concat(fullText.charAt(startOffset), "<- at offset: ").concat(startOffset, ",") + " skipped ".concat(length, " characters.");
    }
};

},{}],"7elDj":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defaultGrammarValidatorErrorProvider = exports.defaultGrammarResolverErrorProvider = exports.defaultParserErrorProvider = void 0;
var tokens_public_1 = require("9bc6c7ea2f257494");
var first_1 = __importDefault(require("bbc52f4e304d6cdf"));
var map_1 = __importDefault(require("48a58d110849cc77"));
var reduce_1 = __importDefault(require("d8e82d9ca4e20f37"));
var gast_1 = require("f3767877910d8fba");
var gast_2 = require("f3767877910d8fba");
exports.defaultParserErrorProvider = {
    buildMismatchTokenMessage: function(_a) {
        var expected = _a.expected, actual = _a.actual, previous = _a.previous, ruleName = _a.ruleName;
        var hasLabel = (0, tokens_public_1.hasTokenLabel)(expected);
        var expectedMsg = hasLabel ? "--> ".concat((0, tokens_public_1.tokenLabel)(expected), " <--") : "token of type --> ".concat(expected.name, " <--");
        var msg = "Expecting ".concat(expectedMsg, " but found --> '").concat(actual.image, "' <--");
        return msg;
    },
    buildNotAllInputParsedMessage: function(_a) {
        var firstRedundant = _a.firstRedundant, ruleName = _a.ruleName;
        return "Redundant input, expecting EOF but found: " + firstRedundant.image;
    },
    buildNoViableAltMessage: function(_a) {
        var expectedPathsPerAlt = _a.expectedPathsPerAlt, actual = _a.actual, previous = _a.previous, customUserDescription = _a.customUserDescription, ruleName = _a.ruleName;
        var errPrefix = "Expecting: ";
        // TODO: issue: No Viable Alternative Error may have incomplete details. #502
        var actualText = (0, first_1.default)(actual).image;
        var errSuffix = "\nbut found: '" + actualText + "'";
        if (customUserDescription) return errPrefix + customUserDescription + errSuffix;
        else {
            var allLookAheadPaths = (0, reduce_1.default)(expectedPathsPerAlt, function(result, currAltPaths) {
                return result.concat(currAltPaths);
            }, []);
            var nextValidTokenSequences = (0, map_1.default)(allLookAheadPaths, function(currPath) {
                return "[".concat((0, map_1.default)(currPath, function(currTokenType) {
                    return (0, tokens_public_1.tokenLabel)(currTokenType);
                }).join(", "), "]");
            });
            var nextValidSequenceItems = (0, map_1.default)(nextValidTokenSequences, function(itemMsg, idx) {
                return "  ".concat(idx + 1, ". ").concat(itemMsg);
            });
            var calculatedDescription = "one of these possible Token sequences:\n".concat(nextValidSequenceItems.join("\n"));
            return errPrefix + calculatedDescription + errSuffix;
        }
    },
    buildEarlyExitMessage: function(_a) {
        var expectedIterationPaths = _a.expectedIterationPaths, actual = _a.actual, customUserDescription = _a.customUserDescription, ruleName = _a.ruleName;
        var errPrefix = "Expecting: ";
        // TODO: issue: No Viable Alternative Error may have incomplete details. #502
        var actualText = (0, first_1.default)(actual).image;
        var errSuffix = "\nbut found: '" + actualText + "'";
        if (customUserDescription) return errPrefix + customUserDescription + errSuffix;
        else {
            var nextValidTokenSequences = (0, map_1.default)(expectedIterationPaths, function(currPath) {
                return "[".concat((0, map_1.default)(currPath, function(currTokenType) {
                    return (0, tokens_public_1.tokenLabel)(currTokenType);
                }).join(","), "]");
            });
            var calculatedDescription = "expecting at least one iteration which starts with one of these possible Token sequences::\n  " + "<".concat(nextValidTokenSequences.join(" ,"), ">");
            return errPrefix + calculatedDescription + errSuffix;
        }
    }
};
Object.freeze(exports.defaultParserErrorProvider);
exports.defaultGrammarResolverErrorProvider = {
    buildRuleNotFoundError: function(topLevelRule, undefinedRule) {
        var msg = "Invalid grammar, reference to a rule which is not defined: ->" + undefinedRule.nonTerminalName + "<-\n" + "inside top level rule: ->" + topLevelRule.name + "<-";
        return msg;
    }
};
exports.defaultGrammarValidatorErrorProvider = {
    buildDuplicateFoundError: function(topLevelRule, duplicateProds) {
        function getExtraProductionArgument(prod) {
            if (prod instanceof gast_1.Terminal) return prod.terminalType.name;
            else if (prod instanceof gast_1.NonTerminal) return prod.nonTerminalName;
            else return "";
        }
        var topLevelName = topLevelRule.name;
        var duplicateProd = (0, first_1.default)(duplicateProds);
        var index = duplicateProd.idx;
        var dslName = (0, gast_2.getProductionDslName)(duplicateProd);
        var extraArgument = getExtraProductionArgument(duplicateProd);
        var hasExplicitIndex = index > 0;
        var msg = "->".concat(dslName).concat(hasExplicitIndex ? index : "", "<- ").concat(extraArgument ? "with argument: ->".concat(extraArgument, "<-") : "", "\n                  appears more than once (").concat(duplicateProds.length, " times) in the top level rule: ->").concat(topLevelName, "<-.                  \n                  For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES \n                  ");
        // white space trimming time! better to trim afterwards as it allows to use WELL formatted multi line template strings...
        msg = msg.replace(/[ \t]+/g, " ");
        msg = msg.replace(/\s\s+/g, "\n");
        return msg;
    },
    buildNamespaceConflictError: function(rule) {
        var errMsg = "Namespace conflict found in grammar.\n" + "The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <".concat(rule.name, ">.\n") + "To resolve this make sure each Terminal and Non-Terminal names are unique\n" + "This is easy to accomplish by using the convention that Terminal names start with an uppercase letter\n" + "and Non-Terminal names start with a lower case letter.";
        return errMsg;
    },
    buildAlternationPrefixAmbiguityError: function(options) {
        var pathMsg = (0, map_1.default)(options.prefixPath, function(currTok) {
            return (0, tokens_public_1.tokenLabel)(currTok);
        }).join(", ");
        var occurrence = options.alternation.idx === 0 ? "" : options.alternation.idx;
        var errMsg = "Ambiguous alternatives: <".concat(options.ambiguityIndices.join(" ,"), "> due to common lookahead prefix\n") + "in <OR".concat(occurrence, "> inside <").concat(options.topLevelRule.name, "> Rule,\n") + "<".concat(pathMsg, "> may appears as a prefix path in all these alternatives.\n") + "See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX\n" + "For Further details.";
        return errMsg;
    },
    buildAlternationAmbiguityError: function(options) {
        var pathMsg = (0, map_1.default)(options.prefixPath, function(currtok) {
            return (0, tokens_public_1.tokenLabel)(currtok);
        }).join(", ");
        var occurrence = options.alternation.idx === 0 ? "" : options.alternation.idx;
        var currMessage = "Ambiguous Alternatives Detected: <".concat(options.ambiguityIndices.join(" ,"), "> in <OR").concat(occurrence, ">") + " inside <".concat(options.topLevelRule.name, "> Rule,\n") + "<".concat(pathMsg, "> may appears as a prefix path in all these alternatives.\n");
        currMessage = currMessage + "See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES\n" + "For Further details.";
        return currMessage;
    },
    buildEmptyRepetitionError: function(options) {
        var dslName = (0, gast_2.getProductionDslName)(options.repetition);
        if (options.repetition.idx !== 0) dslName += options.repetition.idx;
        var errMsg = "The repetition <".concat(dslName, "> within Rule <").concat(options.topLevelRule.name, "> can never consume any tokens.\n") + "This could lead to an infinite loop.";
        return errMsg;
    },
    // TODO: remove - `errors_public` from nyc.config.js exclude
    //       once this method is fully removed from this file
    buildTokenNameError: function(options) {
        /* istanbul ignore next */ return "deprecated";
    },
    buildEmptyAlternationError: function(options) {
        var errMsg = "Ambiguous empty alternative: <".concat(options.emptyChoiceIdx + 1, ">") + " in <OR".concat(options.alternation.idx, "> inside <").concat(options.topLevelRule.name, "> Rule.\n") + "Only the last alternative may be an empty alternative.";
        return errMsg;
    },
    buildTooManyAlternativesError: function(options) {
        var errMsg = "An Alternation cannot have more than 256 alternatives:\n" + "<OR".concat(options.alternation.idx, "> inside <").concat(options.topLevelRule.name, "> Rule.\n has ").concat(options.alternation.definition.length + 1, " alternatives.");
        return errMsg;
    },
    buildLeftRecursionError: function(options) {
        var ruleName = options.topLevelRule.name;
        var pathNames = (0, map_1.default)(options.leftRecursionPath, function(currRule) {
            return currRule.name;
        });
        var leftRecursivePath = "".concat(ruleName, " --> ").concat(pathNames.concat([
            ruleName
        ]).join(" --> "));
        var errMsg = "Left Recursion found in grammar.\n" + "rule: <".concat(ruleName, "> can be invoked from itself (directly or indirectly)\n") + "without consuming any Tokens. The grammar path that causes this is: \n ".concat(leftRecursivePath, "\n") + " To fix this refactor your grammar to remove the left recursion.\n" + "see: https://en.wikipedia.org/wiki/LL_parser#Left_factoring.";
        return errMsg;
    },
    // TODO: remove - `errors_public` from nyc.config.js exclude
    //       once this method is fully removed from this file
    buildInvalidRuleNameError: function(options) {
        /* istanbul ignore next */ return "deprecated";
    },
    buildDuplicateRuleNameError: function(options) {
        var ruleName;
        if (options.topLevelRule instanceof gast_1.Rule) ruleName = options.topLevelRule.name;
        else ruleName = options.topLevelRule;
        var errMsg = "Duplicate definition, rule: ->".concat(ruleName, "<- is already defined in the grammar: ->").concat(options.grammarName, "<-");
        return errMsg;
    }
};

},{"9bc6c7ea2f257494":"gJ9lp","bbc52f4e304d6cdf":"48AJB","48a58d110849cc77":"68KdA","d8e82d9ca4e20f37":"isYLF","f3767877910d8fba":"91AYQ"}],"7b7Lx":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.validateGrammar = exports.resolveGrammar = void 0;
var forEach_1 = __importDefault(require("a56f96dda9b4d9a1"));
var defaults_1 = __importDefault(require("688a217232d8c744"));
var resolver_1 = require("f965e9638be87d5b");
var checks_1 = require("fff28c49ca7d1e40");
var errors_public_1 = require("a2592078d998ff1d");
function resolveGrammar(options) {
    var actualOptions = (0, defaults_1.default)(options, {
        errMsgProvider: errors_public_1.defaultGrammarResolverErrorProvider
    });
    var topRulesTable = {};
    (0, forEach_1.default)(options.rules, function(rule) {
        topRulesTable[rule.name] = rule;
    });
    return (0, resolver_1.resolveGrammar)(topRulesTable, actualOptions.errMsgProvider);
}
exports.resolveGrammar = resolveGrammar;
function validateGrammar(options) {
    options = (0, defaults_1.default)(options, {
        errMsgProvider: errors_public_1.defaultGrammarValidatorErrorProvider
    });
    return (0, checks_1.validateGrammar)(options.rules, options.tokenTypes, options.errMsgProvider, options.grammarName);
}
exports.validateGrammar = validateGrammar;

},{"a56f96dda9b4d9a1":"cQbs0","688a217232d8c744":"bHoss","f965e9638be87d5b":"cliSa","fff28c49ca7d1e40":"4teh8","a2592078d998ff1d":"7elDj"}],"cliSa":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GastRefResolverVisitor = exports.resolveGrammar = void 0;
var parser_1 = require("47aadb5467ce6373");
var forEach_1 = __importDefault(require("200b3bd65d725b1b"));
var values_1 = __importDefault(require("dcab15c478442e34"));
var gast_1 = require("a24568ef401fdf52");
function resolveGrammar(topLevels, errMsgProvider) {
    var refResolver = new GastRefResolverVisitor(topLevels, errMsgProvider);
    refResolver.resolveRefs();
    return refResolver.errors;
}
exports.resolveGrammar = resolveGrammar;
var GastRefResolverVisitor = /** @class */ function(_super) {
    __extends(GastRefResolverVisitor, _super);
    function GastRefResolverVisitor(nameToTopRule, errMsgProvider) {
        var _this = _super.call(this) || this;
        _this.nameToTopRule = nameToTopRule;
        _this.errMsgProvider = errMsgProvider;
        _this.errors = [];
        return _this;
    }
    GastRefResolverVisitor.prototype.resolveRefs = function() {
        var _this = this;
        (0, forEach_1.default)((0, values_1.default)(this.nameToTopRule), function(prod) {
            _this.currTopLevel = prod;
            prod.accept(_this);
        });
    };
    GastRefResolverVisitor.prototype.visitNonTerminal = function(node) {
        var ref = this.nameToTopRule[node.nonTerminalName];
        if (!ref) {
            var msg = this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel, node);
            this.errors.push({
                message: msg,
                type: parser_1.ParserDefinitionErrorType.UNRESOLVED_SUBRULE_REF,
                ruleName: this.currTopLevel.name,
                unresolvedRefName: node.nonTerminalName
            });
        } else node.referencedRule = ref;
    };
    return GastRefResolverVisitor;
}(gast_1.GAstVisitor);
exports.GastRefResolverVisitor = GastRefResolverVisitor;

},{"47aadb5467ce6373":"hzING","200b3bd65d725b1b":"cQbs0","dcab15c478442e34":"7Uoc6","a24568ef401fdf52":"91AYQ"}],"4teh8":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = this && this.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.checkPrefixAlternativesAmbiguities = exports.validateSomeNonEmptyLookaheadPath = exports.validateTooManyAlts = exports.RepetitionCollector = exports.validateAmbiguousAlternationAlternatives = exports.validateEmptyOrAlternative = exports.getFirstNoneTerminal = exports.validateNoLeftRecursion = exports.validateRuleIsOverridden = exports.validateRuleDoesNotAlreadyExist = exports.OccurrenceValidationCollector = exports.identifyProductionForDuplicates = exports.validateGrammar = exports.validateLookahead = void 0;
var first_1 = __importDefault(require("e047291839655be7"));
var isEmpty_1 = __importDefault(require("6da47a686005dc3f"));
var drop_1 = __importDefault(require("6b52eca1f841b153"));
var flatten_1 = __importDefault(require("cd9cadc728e2bf1c"));
var filter_1 = __importDefault(require("cdc6bdbf93521b47"));
var reject_1 = __importDefault(require("c5e75f9d1e78f87c"));
var difference_1 = __importDefault(require("32afc427a5bb43cd"));
var map_1 = __importDefault(require("44fa7cf1b6db0252"));
var forEach_1 = __importDefault(require("b2167f1ffd99d361"));
var groupBy_1 = __importDefault(require("c52ef6b90568dcf2"));
var reduce_1 = __importDefault(require("6263eb5c16c7b641"));
var pickBy_1 = __importDefault(require("67473193d197f2b2"));
var values_1 = __importDefault(require("bbb3369fa783429c"));
var includes_1 = __importDefault(require("6ec562d51cd11014"));
var flatMap_1 = __importDefault(require("24087a84aa488fe5"));
var clone_1 = __importDefault(require("cb85afc0c07f5cc3"));
var parser_1 = require("8b07c35cc7d617ba");
var gast_1 = require("2b79fcb7076071e2");
var lookahead_1 = require("835737369e777bfc");
var interpreter_1 = require("666ed45b15ffb08f");
var gast_2 = require("2b79fcb7076071e2");
var gast_3 = require("2b79fcb7076071e2");
var dropRight_1 = __importDefault(require("99a7fdb9d79bb010"));
var compact_1 = __importDefault(require("a3ba0cd574c256b5"));
var tokens_1 = require("6c2fed1457176ee8");
function validateLookahead(options) {
    var lookaheadValidationErrorMessages = options.lookaheadStrategy.validate({
        rules: options.rules,
        tokenTypes: options.tokenTypes,
        grammarName: options.grammarName
    });
    return (0, map_1.default)(lookaheadValidationErrorMessages, function(errorMessage) {
        return __assign({
            type: parser_1.ParserDefinitionErrorType.CUSTOM_LOOKAHEAD_VALIDATION
        }, errorMessage);
    });
}
exports.validateLookahead = validateLookahead;
function validateGrammar(topLevels, tokenTypes, errMsgProvider, grammarName) {
    var duplicateErrors = (0, flatMap_1.default)(topLevels, function(currTopLevel) {
        return validateDuplicateProductions(currTopLevel, errMsgProvider);
    });
    var termsNamespaceConflictErrors = checkTerminalAndNoneTerminalsNameSpace(topLevels, tokenTypes, errMsgProvider);
    var tooManyAltsErrors = (0, flatMap_1.default)(topLevels, function(curRule) {
        return validateTooManyAlts(curRule, errMsgProvider);
    });
    var duplicateRulesError = (0, flatMap_1.default)(topLevels, function(curRule) {
        return validateRuleDoesNotAlreadyExist(curRule, topLevels, grammarName, errMsgProvider);
    });
    return duplicateErrors.concat(termsNamespaceConflictErrors, tooManyAltsErrors, duplicateRulesError);
}
exports.validateGrammar = validateGrammar;
function validateDuplicateProductions(topLevelRule, errMsgProvider) {
    var collectorVisitor = new OccurrenceValidationCollector();
    topLevelRule.accept(collectorVisitor);
    var allRuleProductions = collectorVisitor.allProductions;
    var productionGroups = (0, groupBy_1.default)(allRuleProductions, identifyProductionForDuplicates);
    var duplicates = (0, pickBy_1.default)(productionGroups, function(currGroup) {
        return currGroup.length > 1;
    });
    var errors = (0, map_1.default)((0, values_1.default)(duplicates), function(currDuplicates) {
        var firstProd = (0, first_1.default)(currDuplicates);
        var msg = errMsgProvider.buildDuplicateFoundError(topLevelRule, currDuplicates);
        var dslName = (0, gast_1.getProductionDslName)(firstProd);
        var defError = {
            message: msg,
            type: parser_1.ParserDefinitionErrorType.DUPLICATE_PRODUCTIONS,
            ruleName: topLevelRule.name,
            dslName: dslName,
            occurrence: firstProd.idx
        };
        var param = getExtraProductionArgument(firstProd);
        if (param) defError.parameter = param;
        return defError;
    });
    return errors;
}
function identifyProductionForDuplicates(prod) {
    return "".concat((0, gast_1.getProductionDslName)(prod), "_#_").concat(prod.idx, "_#_").concat(getExtraProductionArgument(prod));
}
exports.identifyProductionForDuplicates = identifyProductionForDuplicates;
function getExtraProductionArgument(prod) {
    if (prod instanceof gast_2.Terminal) return prod.terminalType.name;
    else if (prod instanceof gast_2.NonTerminal) return prod.nonTerminalName;
    else return "";
}
var OccurrenceValidationCollector = /** @class */ function(_super) {
    __extends(OccurrenceValidationCollector, _super);
    function OccurrenceValidationCollector() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.allProductions = [];
        return _this;
    }
    OccurrenceValidationCollector.prototype.visitNonTerminal = function(subrule) {
        this.allProductions.push(subrule);
    };
    OccurrenceValidationCollector.prototype.visitOption = function(option) {
        this.allProductions.push(option);
    };
    OccurrenceValidationCollector.prototype.visitRepetitionWithSeparator = function(manySep) {
        this.allProductions.push(manySep);
    };
    OccurrenceValidationCollector.prototype.visitRepetitionMandatory = function(atLeastOne) {
        this.allProductions.push(atLeastOne);
    };
    OccurrenceValidationCollector.prototype.visitRepetitionMandatoryWithSeparator = function(atLeastOneSep) {
        this.allProductions.push(atLeastOneSep);
    };
    OccurrenceValidationCollector.prototype.visitRepetition = function(many) {
        this.allProductions.push(many);
    };
    OccurrenceValidationCollector.prototype.visitAlternation = function(or) {
        this.allProductions.push(or);
    };
    OccurrenceValidationCollector.prototype.visitTerminal = function(terminal) {
        this.allProductions.push(terminal);
    };
    return OccurrenceValidationCollector;
}(gast_3.GAstVisitor);
exports.OccurrenceValidationCollector = OccurrenceValidationCollector;
function validateRuleDoesNotAlreadyExist(rule, allRules, className, errMsgProvider) {
    var errors = [];
    var occurrences = (0, reduce_1.default)(allRules, function(result, curRule) {
        if (curRule.name === rule.name) return result + 1;
        return result;
    }, 0);
    if (occurrences > 1) {
        var errMsg = errMsgProvider.buildDuplicateRuleNameError({
            topLevelRule: rule,
            grammarName: className
        });
        errors.push({
            message: errMsg,
            type: parser_1.ParserDefinitionErrorType.DUPLICATE_RULE_NAME,
            ruleName: rule.name
        });
    }
    return errors;
}
exports.validateRuleDoesNotAlreadyExist = validateRuleDoesNotAlreadyExist;
// TODO: is there anyway to get only the rule names of rules inherited from the super grammars?
// This is not part of the IGrammarErrorProvider because the validation cannot be performed on
// The grammar structure, only at runtime.
function validateRuleIsOverridden(ruleName, definedRulesNames, className) {
    var errors = [];
    var errMsg;
    if (!(0, includes_1.default)(definedRulesNames, ruleName)) {
        errMsg = "Invalid rule override, rule: ->".concat(ruleName, "<- cannot be overridden in the grammar: ->").concat(className, "<-") + "as it is not defined in any of the super grammars ";
        errors.push({
            message: errMsg,
            type: parser_1.ParserDefinitionErrorType.INVALID_RULE_OVERRIDE,
            ruleName: ruleName
        });
    }
    return errors;
}
exports.validateRuleIsOverridden = validateRuleIsOverridden;
function validateNoLeftRecursion(topRule, currRule, errMsgProvider, path) {
    if (path === void 0) path = [];
    var errors = [];
    var nextNonTerminals = getFirstNoneTerminal(currRule.definition);
    if ((0, isEmpty_1.default)(nextNonTerminals)) return [];
    else {
        var ruleName = topRule.name;
        var foundLeftRecursion = (0, includes_1.default)(nextNonTerminals, topRule);
        if (foundLeftRecursion) errors.push({
            message: errMsgProvider.buildLeftRecursionError({
                topLevelRule: topRule,
                leftRecursionPath: path
            }),
            type: parser_1.ParserDefinitionErrorType.LEFT_RECURSION,
            ruleName: ruleName
        });
        // we are only looking for cyclic paths leading back to the specific topRule
        // other cyclic paths are ignored, we still need this difference to avoid infinite loops...
        var validNextSteps = (0, difference_1.default)(nextNonTerminals, path.concat([
            topRule
        ]));
        var errorsFromNextSteps = (0, flatMap_1.default)(validNextSteps, function(currRefRule) {
            var newPath = (0, clone_1.default)(path);
            newPath.push(currRefRule);
            return validateNoLeftRecursion(topRule, currRefRule, errMsgProvider, newPath);
        });
        return errors.concat(errorsFromNextSteps);
    }
}
exports.validateNoLeftRecursion = validateNoLeftRecursion;
function getFirstNoneTerminal(definition) {
    var result = [];
    if ((0, isEmpty_1.default)(definition)) return result;
    var firstProd = (0, first_1.default)(definition);
    /* istanbul ignore else */ if (firstProd instanceof gast_2.NonTerminal) result.push(firstProd.referencedRule);
    else if (firstProd instanceof gast_2.Alternative || firstProd instanceof gast_2.Option || firstProd instanceof gast_2.RepetitionMandatory || firstProd instanceof gast_2.RepetitionMandatoryWithSeparator || firstProd instanceof gast_2.RepetitionWithSeparator || firstProd instanceof gast_2.Repetition) result = result.concat(getFirstNoneTerminal(firstProd.definition));
    else if (firstProd instanceof gast_2.Alternation) // each sub definition in alternation is a FLAT
    result = (0, flatten_1.default)((0, map_1.default)(firstProd.definition, function(currSubDef) {
        return getFirstNoneTerminal(currSubDef.definition);
    }));
    else if (firstProd instanceof gast_2.Terminal) ;
    else throw Error("non exhaustive match");
    var isFirstOptional = (0, gast_1.isOptionalProd)(firstProd);
    var hasMore = definition.length > 1;
    if (isFirstOptional && hasMore) {
        var rest = (0, drop_1.default)(definition);
        return result.concat(getFirstNoneTerminal(rest));
    } else return result;
}
exports.getFirstNoneTerminal = getFirstNoneTerminal;
var OrCollector = /** @class */ function(_super) {
    __extends(OrCollector, _super);
    function OrCollector() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.alternations = [];
        return _this;
    }
    OrCollector.prototype.visitAlternation = function(node) {
        this.alternations.push(node);
    };
    return OrCollector;
}(gast_3.GAstVisitor);
function validateEmptyOrAlternative(topLevelRule, errMsgProvider) {
    var orCollector = new OrCollector();
    topLevelRule.accept(orCollector);
    var ors = orCollector.alternations;
    var errors = (0, flatMap_1.default)(ors, function(currOr) {
        var exceptLast = (0, dropRight_1.default)(currOr.definition);
        return (0, flatMap_1.default)(exceptLast, function(currAlternative, currAltIdx) {
            var possibleFirstInAlt = (0, interpreter_1.nextPossibleTokensAfter)([
                currAlternative
            ], [], tokens_1.tokenStructuredMatcher, 1);
            if ((0, isEmpty_1.default)(possibleFirstInAlt)) return [
                {
                    message: errMsgProvider.buildEmptyAlternationError({
                        topLevelRule: topLevelRule,
                        alternation: currOr,
                        emptyChoiceIdx: currAltIdx
                    }),
                    type: parser_1.ParserDefinitionErrorType.NONE_LAST_EMPTY_ALT,
                    ruleName: topLevelRule.name,
                    occurrence: currOr.idx,
                    alternative: currAltIdx + 1
                }
            ];
            else return [];
        });
    });
    return errors;
}
exports.validateEmptyOrAlternative = validateEmptyOrAlternative;
function validateAmbiguousAlternationAlternatives(topLevelRule, globalMaxLookahead, errMsgProvider) {
    var orCollector = new OrCollector();
    topLevelRule.accept(orCollector);
    var ors = orCollector.alternations;
    // New Handling of ignoring ambiguities
    // - https://github.com/chevrotain/chevrotain/issues/869
    ors = (0, reject_1.default)(ors, function(currOr) {
        return currOr.ignoreAmbiguities === true;
    });
    var errors = (0, flatMap_1.default)(ors, function(currOr) {
        var currOccurrence = currOr.idx;
        var actualMaxLookahead = currOr.maxLookahead || globalMaxLookahead;
        var alternatives = (0, lookahead_1.getLookaheadPathsForOr)(currOccurrence, topLevelRule, actualMaxLookahead, currOr);
        var altsAmbiguityErrors = checkAlternativesAmbiguities(alternatives, currOr, topLevelRule, errMsgProvider);
        var altsPrefixAmbiguityErrors = checkPrefixAlternativesAmbiguities(alternatives, currOr, topLevelRule, errMsgProvider);
        return altsAmbiguityErrors.concat(altsPrefixAmbiguityErrors);
    });
    return errors;
}
exports.validateAmbiguousAlternationAlternatives = validateAmbiguousAlternationAlternatives;
var RepetitionCollector = /** @class */ function(_super) {
    __extends(RepetitionCollector, _super);
    function RepetitionCollector() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.allProductions = [];
        return _this;
    }
    RepetitionCollector.prototype.visitRepetitionWithSeparator = function(manySep) {
        this.allProductions.push(manySep);
    };
    RepetitionCollector.prototype.visitRepetitionMandatory = function(atLeastOne) {
        this.allProductions.push(atLeastOne);
    };
    RepetitionCollector.prototype.visitRepetitionMandatoryWithSeparator = function(atLeastOneSep) {
        this.allProductions.push(atLeastOneSep);
    };
    RepetitionCollector.prototype.visitRepetition = function(many) {
        this.allProductions.push(many);
    };
    return RepetitionCollector;
}(gast_3.GAstVisitor);
exports.RepetitionCollector = RepetitionCollector;
function validateTooManyAlts(topLevelRule, errMsgProvider) {
    var orCollector = new OrCollector();
    topLevelRule.accept(orCollector);
    var ors = orCollector.alternations;
    var errors = (0, flatMap_1.default)(ors, function(currOr) {
        if (currOr.definition.length > 255) return [
            {
                message: errMsgProvider.buildTooManyAlternativesError({
                    topLevelRule: topLevelRule,
                    alternation: currOr
                }),
                type: parser_1.ParserDefinitionErrorType.TOO_MANY_ALTS,
                ruleName: topLevelRule.name,
                occurrence: currOr.idx
            }
        ];
        else return [];
    });
    return errors;
}
exports.validateTooManyAlts = validateTooManyAlts;
function validateSomeNonEmptyLookaheadPath(topLevelRules, maxLookahead, errMsgProvider) {
    var errors = [];
    (0, forEach_1.default)(topLevelRules, function(currTopRule) {
        var collectorVisitor = new RepetitionCollector();
        currTopRule.accept(collectorVisitor);
        var allRuleProductions = collectorVisitor.allProductions;
        (0, forEach_1.default)(allRuleProductions, function(currProd) {
            var prodType = (0, lookahead_1.getProdType)(currProd);
            var actualMaxLookahead = currProd.maxLookahead || maxLookahead;
            var currOccurrence = currProd.idx;
            var paths = (0, lookahead_1.getLookaheadPathsForOptionalProd)(currOccurrence, currTopRule, prodType, actualMaxLookahead);
            var pathsInsideProduction = paths[0];
            if ((0, isEmpty_1.default)((0, flatten_1.default)(pathsInsideProduction))) {
                var errMsg = errMsgProvider.buildEmptyRepetitionError({
                    topLevelRule: currTopRule,
                    repetition: currProd
                });
                errors.push({
                    message: errMsg,
                    type: parser_1.ParserDefinitionErrorType.NO_NON_EMPTY_LOOKAHEAD,
                    ruleName: currTopRule.name
                });
            }
        });
    });
    return errors;
}
exports.validateSomeNonEmptyLookaheadPath = validateSomeNonEmptyLookaheadPath;
function checkAlternativesAmbiguities(alternatives, alternation, rule, errMsgProvider) {
    var foundAmbiguousPaths = [];
    var identicalAmbiguities = (0, reduce_1.default)(alternatives, function(result, currAlt, currAltIdx) {
        // ignore (skip) ambiguities with this alternative
        if (alternation.definition[currAltIdx].ignoreAmbiguities === true) return result;
        (0, forEach_1.default)(currAlt, function(currPath) {
            var altsCurrPathAppearsIn = [
                currAltIdx
            ];
            (0, forEach_1.default)(alternatives, function(currOtherAlt, currOtherAltIdx) {
                if (currAltIdx !== currOtherAltIdx && (0, lookahead_1.containsPath)(currOtherAlt, currPath) && // ignore (skip) ambiguities with this "other" alternative
                alternation.definition[currOtherAltIdx].ignoreAmbiguities !== true) altsCurrPathAppearsIn.push(currOtherAltIdx);
            });
            if (altsCurrPathAppearsIn.length > 1 && !(0, lookahead_1.containsPath)(foundAmbiguousPaths, currPath)) {
                foundAmbiguousPaths.push(currPath);
                result.push({
                    alts: altsCurrPathAppearsIn,
                    path: currPath
                });
            }
        });
        return result;
    }, []);
    var currErrors = (0, map_1.default)(identicalAmbiguities, function(currAmbDescriptor) {
        var ambgIndices = (0, map_1.default)(currAmbDescriptor.alts, function(currAltIdx) {
            return currAltIdx + 1;
        });
        var currMessage = errMsgProvider.buildAlternationAmbiguityError({
            topLevelRule: rule,
            alternation: alternation,
            ambiguityIndices: ambgIndices,
            prefixPath: currAmbDescriptor.path
        });
        return {
            message: currMessage,
            type: parser_1.ParserDefinitionErrorType.AMBIGUOUS_ALTS,
            ruleName: rule.name,
            occurrence: alternation.idx,
            alternatives: currAmbDescriptor.alts
        };
    });
    return currErrors;
}
function checkPrefixAlternativesAmbiguities(alternatives, alternation, rule, errMsgProvider) {
    // flatten
    var pathsAndIndices = (0, reduce_1.default)(alternatives, function(result, currAlt, idx) {
        var currPathsAndIdx = (0, map_1.default)(currAlt, function(currPath) {
            return {
                idx: idx,
                path: currPath
            };
        });
        return result.concat(currPathsAndIdx);
    }, []);
    var errors = (0, compact_1.default)((0, flatMap_1.default)(pathsAndIndices, function(currPathAndIdx) {
        var alternativeGast = alternation.definition[currPathAndIdx.idx];
        // ignore (skip) ambiguities with this alternative
        if (alternativeGast.ignoreAmbiguities === true) return [];
        var targetIdx = currPathAndIdx.idx;
        var targetPath = currPathAndIdx.path;
        var prefixAmbiguitiesPathsAndIndices = (0, filter_1.default)(pathsAndIndices, function(searchPathAndIdx) {
            // prefix ambiguity can only be created from lower idx (higher priority) path
            return(// ignore (skip) ambiguities with this "other" alternative
            alternation.definition[searchPathAndIdx.idx].ignoreAmbiguities !== true && searchPathAndIdx.idx < targetIdx && // checking for strict prefix because identical lookaheads
            // will be be detected using a different validation.
            (0, lookahead_1.isStrictPrefixOfPath)(searchPathAndIdx.path, targetPath));
        });
        var currPathPrefixErrors = (0, map_1.default)(prefixAmbiguitiesPathsAndIndices, function(currAmbPathAndIdx) {
            var ambgIndices = [
                currAmbPathAndIdx.idx + 1,
                targetIdx + 1
            ];
            var occurrence = alternation.idx === 0 ? "" : alternation.idx;
            var message = errMsgProvider.buildAlternationPrefixAmbiguityError({
                topLevelRule: rule,
                alternation: alternation,
                ambiguityIndices: ambgIndices,
                prefixPath: currAmbPathAndIdx.path
            });
            return {
                message: message,
                type: parser_1.ParserDefinitionErrorType.AMBIGUOUS_PREFIX_ALTS,
                ruleName: rule.name,
                occurrence: occurrence,
                alternatives: ambgIndices
            };
        });
        return currPathPrefixErrors;
    }));
    return errors;
}
exports.checkPrefixAlternativesAmbiguities = checkPrefixAlternativesAmbiguities;
function checkTerminalAndNoneTerminalsNameSpace(topLevels, tokenTypes, errMsgProvider) {
    var errors = [];
    var tokenNames = (0, map_1.default)(tokenTypes, function(currToken) {
        return currToken.name;
    });
    (0, forEach_1.default)(topLevels, function(currRule) {
        var currRuleName = currRule.name;
        if ((0, includes_1.default)(tokenNames, currRuleName)) {
            var errMsg = errMsgProvider.buildNamespaceConflictError(currRule);
            errors.push({
                message: errMsg,
                type: parser_1.ParserDefinitionErrorType.CONFLICT_TOKENS_RULES_NAMESPACE,
                ruleName: currRuleName
            });
        }
    });
    return errors;
}

},{"e047291839655be7":"48AJB","6da47a686005dc3f":"HRoQ8","6b52eca1f841b153":"2pD4D","cd9cadc728e2bf1c":"g3ybb","cdc6bdbf93521b47":"guOld","c5e75f9d1e78f87c":"8Agt9","32afc427a5bb43cd":"kkSPw","44fa7cf1b6db0252":"68KdA","b2167f1ffd99d361":"cQbs0","c52ef6b90568dcf2":"kKc7Y","6263eb5c16c7b641":"isYLF","67473193d197f2b2":"9BWKY","bbb3369fa783429c":"7Uoc6","6ec562d51cd11014":"l3Nmg","24087a84aa488fe5":"kshi8","cb85afc0c07f5cc3":"dIp0d","8b07c35cc7d617ba":"hzING","2b79fcb7076071e2":"91AYQ","835737369e777bfc":"gIfFn","666ed45b15ffb08f":"fbEtw","99a7fdb9d79bb010":"3tn7S","a3ba0cd574c256b5":"cuuyZ","6c2fed1457176ee8":"1KnzY"}],"kKc7Y":[function(require,module,exports) {
var baseAssignValue = require("45224c2cbc26a385"), createAggregator = require("54112449397fdfd2");
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The order of grouped values
 * is determined by the order they occur in `collection`. The corresponding
 * value of each key is an array of elements responsible for generating the
 * key. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 * @example
 *
 * _.groupBy([6.1, 4.2, 6.3], Math.floor);
 * // => { '4': [4.2], '6': [6.1, 6.3] }
 *
 * // The `_.property` iteratee shorthand.
 * _.groupBy(['one', 'two', 'three'], 'length');
 * // => { '3': ['one', 'two'], '5': ['three'] }
 */ var groupBy = createAggregator(function(result, value, key) {
    if (hasOwnProperty.call(result, key)) result[key].push(value);
    else baseAssignValue(result, key, [
        value
    ]);
});
module.exports = groupBy;

},{"45224c2cbc26a385":"3YfOT","54112449397fdfd2":"2tJCi"}],"2tJCi":[function(require,module,exports) {
var arrayAggregator = require("64738ab87169df22"), baseAggregator = require("d5eaf98cd48e9d0f"), baseIteratee = require("161d63ee0d95ee81"), isArray = require("3ebefba2225c8b9e");
/**
 * Creates a function like `_.groupBy`.
 *
 * @private
 * @param {Function} setter The function to set accumulator values.
 * @param {Function} [initializer] The accumulator object initializer.
 * @returns {Function} Returns the new aggregator function.
 */ function createAggregator(setter, initializer) {
    return function(collection, iteratee) {
        var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
        return func(collection, setter, baseIteratee(iteratee, 2), accumulator);
    };
}
module.exports = createAggregator;

},{"64738ab87169df22":"1UZzx","d5eaf98cd48e9d0f":"gr6nH","161d63ee0d95ee81":"ant2T","3ebefba2225c8b9e":"csCQN"}],"1UZzx":[function(require,module,exports) {
/**
 * A specialized version of `baseAggregator` for arrays.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */ function arrayAggregator(array, setter, iteratee, accumulator) {
    var index = -1, length = array == null ? 0 : array.length;
    while(++index < length){
        var value = array[index];
        setter(accumulator, value, iteratee(value), array);
    }
    return accumulator;
}
module.exports = arrayAggregator;

},{}],"gr6nH":[function(require,module,exports) {
var baseEach = require("b2d4f581dd6625d8");
/**
 * Aggregates elements of `collection` on `accumulator` with keys transformed
 * by `iteratee` and values set by `setter`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */ function baseAggregator(collection, setter, iteratee, accumulator) {
    baseEach(collection, function(value, key, collection) {
        setter(accumulator, value, iteratee(value), collection);
    });
    return accumulator;
}
module.exports = baseAggregator;

},{"b2d4f581dd6625d8":"gT3xd"}],"kshi8":[function(require,module,exports) {
var baseFlatten = require("727a074274bef45"), map = require("19e2d816e1d885f8");
/**
 * Creates a flattened array of values by running each element in `collection`
 * thru `iteratee` and flattening the mapped results. The iteratee is invoked
 * with three arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * function duplicate(n) {
 *   return [n, n];
 * }
 *
 * _.flatMap([1, 2], duplicate);
 * // => [1, 1, 2, 2]
 */ function flatMap(collection, iteratee) {
    return baseFlatten(map(collection, iteratee), 1);
}
module.exports = flatMap;

},{"727a074274bef45":"56zU2","19e2d816e1d885f8":"68KdA"}],"gIfFn":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.areTokenCategoriesNotUsed = exports.isStrictPrefixOfPath = exports.containsPath = exports.getLookaheadPathsForOptionalProd = exports.getLookaheadPathsForOr = exports.lookAheadSequenceFromAlternatives = exports.buildSingleAlternativeLookaheadFunction = exports.buildAlternativesLookAheadFunc = exports.buildLookaheadFuncForOptionalProd = exports.buildLookaheadFuncForOr = exports.getLookaheadPaths = exports.getProdType = exports.PROD_TYPE = void 0;
var isEmpty_1 = __importDefault(require("7b9ea235dc6beed1"));
var flatten_1 = __importDefault(require("fcaeb7e78abf01f8"));
var every_1 = __importDefault(require("f3c5438a054c64b1"));
var map_1 = __importDefault(require("1777033c66a95bd0"));
var forEach_1 = __importDefault(require("d25bca52c512d8a0"));
var has_1 = __importDefault(require("6a9404ce8f3650ad"));
var reduce_1 = __importDefault(require("30b5cff11cc1fab4"));
var interpreter_1 = require("20b9ba104c3389d8");
var rest_1 = require("84e02d476ab5b955");
var tokens_1 = require("5d6eb13c9027c54e");
var gast_1 = require("4e5ed75300ae9f6c");
var gast_2 = require("4e5ed75300ae9f6c");
var PROD_TYPE;
(function(PROD_TYPE) {
    PROD_TYPE[PROD_TYPE["OPTION"] = 0] = "OPTION";
    PROD_TYPE[PROD_TYPE["REPETITION"] = 1] = "REPETITION";
    PROD_TYPE[PROD_TYPE["REPETITION_MANDATORY"] = 2] = "REPETITION_MANDATORY";
    PROD_TYPE[PROD_TYPE["REPETITION_MANDATORY_WITH_SEPARATOR"] = 3] = "REPETITION_MANDATORY_WITH_SEPARATOR";
    PROD_TYPE[PROD_TYPE["REPETITION_WITH_SEPARATOR"] = 4] = "REPETITION_WITH_SEPARATOR";
    PROD_TYPE[PROD_TYPE["ALTERNATION"] = 5] = "ALTERNATION";
})(PROD_TYPE = exports.PROD_TYPE || (exports.PROD_TYPE = {}));
function getProdType(prod) {
    /* istanbul ignore else */ if (prod instanceof gast_1.Option || prod === "Option") return PROD_TYPE.OPTION;
    else if (prod instanceof gast_1.Repetition || prod === "Repetition") return PROD_TYPE.REPETITION;
    else if (prod instanceof gast_1.RepetitionMandatory || prod === "RepetitionMandatory") return PROD_TYPE.REPETITION_MANDATORY;
    else if (prod instanceof gast_1.RepetitionMandatoryWithSeparator || prod === "RepetitionMandatoryWithSeparator") return PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR;
    else if (prod instanceof gast_1.RepetitionWithSeparator || prod === "RepetitionWithSeparator") return PROD_TYPE.REPETITION_WITH_SEPARATOR;
    else if (prod instanceof gast_1.Alternation || prod === "Alternation") return PROD_TYPE.ALTERNATION;
    else throw Error("non exhaustive match");
}
exports.getProdType = getProdType;
function getLookaheadPaths(options) {
    var occurrence = options.occurrence, rule = options.rule, prodType = options.prodType, maxLookahead = options.maxLookahead;
    var type = getProdType(prodType);
    if (type === PROD_TYPE.ALTERNATION) return getLookaheadPathsForOr(occurrence, rule, maxLookahead);
    else return getLookaheadPathsForOptionalProd(occurrence, rule, type, maxLookahead);
}
exports.getLookaheadPaths = getLookaheadPaths;
function buildLookaheadFuncForOr(occurrence, ruleGrammar, maxLookahead, hasPredicates, dynamicTokensEnabled, laFuncBuilder) {
    var lookAheadPaths = getLookaheadPathsForOr(occurrence, ruleGrammar, maxLookahead);
    var tokenMatcher = areTokenCategoriesNotUsed(lookAheadPaths) ? tokens_1.tokenStructuredMatcherNoCategories : tokens_1.tokenStructuredMatcher;
    return laFuncBuilder(lookAheadPaths, hasPredicates, tokenMatcher, dynamicTokensEnabled);
}
exports.buildLookaheadFuncForOr = buildLookaheadFuncForOr;
/**
 *  When dealing with an Optional production (OPTION/MANY/2nd iteration of AT_LEAST_ONE/...) we need to compare
 *  the lookahead "inside" the production and the lookahead immediately "after" it in the same top level rule (context free).
 *
 *  Example: given a production:
 *  ABC(DE)?DF
 *
 *  The optional '(DE)?' should only be entered if we see 'DE'. a single Token 'D' is not sufficient to distinguish between the two
 *  alternatives.
 *
 *  @returns A Lookahead function which will return true IFF the parser should parse the Optional production.
 */ function buildLookaheadFuncForOptionalProd(occurrence, ruleGrammar, k, dynamicTokensEnabled, prodType, lookaheadBuilder) {
    var lookAheadPaths = getLookaheadPathsForOptionalProd(occurrence, ruleGrammar, prodType, k);
    var tokenMatcher = areTokenCategoriesNotUsed(lookAheadPaths) ? tokens_1.tokenStructuredMatcherNoCategories : tokens_1.tokenStructuredMatcher;
    return lookaheadBuilder(lookAheadPaths[0], tokenMatcher, dynamicTokensEnabled);
}
exports.buildLookaheadFuncForOptionalProd = buildLookaheadFuncForOptionalProd;
function buildAlternativesLookAheadFunc(alts, hasPredicates, tokenMatcher, dynamicTokensEnabled) {
    var numOfAlts = alts.length;
    var areAllOneTokenLookahead = (0, every_1.default)(alts, function(currAlt) {
        return (0, every_1.default)(currAlt, function(currPath) {
            return currPath.length === 1;
        });
    });
    // This version takes into account the predicates as well.
    if (hasPredicates) /**
         * @returns {number} - The chosen alternative index
         */ return function(orAlts) {
        // unfortunately the predicates must be extracted every single time
        // as they cannot be cached due to references to parameters(vars) which are no longer valid.
        // note that in the common case of no predicates, no cpu time will be wasted on this (see else block)
        var predicates = (0, map_1.default)(orAlts, function(currAlt) {
            return currAlt.GATE;
        });
        for(var t = 0; t < numOfAlts; t++){
            var currAlt = alts[t];
            var currNumOfPaths = currAlt.length;
            var currPredicate = predicates[t];
            if (currPredicate !== undefined && currPredicate.call(this) === false) continue;
            nextPath: for(var j = 0; j < currNumOfPaths; j++){
                var currPath = currAlt[j];
                var currPathLength = currPath.length;
                for(var i = 0; i < currPathLength; i++){
                    var nextToken = this.LA(i + 1);
                    if (tokenMatcher(nextToken, currPath[i]) === false) continue nextPath;
                }
                // found a full path that matches.
                // this will also work for an empty ALT as the loop will be skipped
                return t;
            }
        // none of the paths for the current alternative matched
        // try the next alternative
        }
        // none of the alternatives could be matched
        return undefined;
    };
    else if (areAllOneTokenLookahead && !dynamicTokensEnabled) {
        // optimized (common) case of all the lookaheads paths requiring only
        // a single token lookahead. These Optimizations cannot work if dynamically defined Tokens are used.
        var singleTokenAlts = (0, map_1.default)(alts, function(currAlt) {
            return (0, flatten_1.default)(currAlt);
        });
        var choiceToAlt_1 = (0, reduce_1.default)(singleTokenAlts, function(result, currAlt, idx) {
            (0, forEach_1.default)(currAlt, function(currTokType) {
                if (!(0, has_1.default)(result, currTokType.tokenTypeIdx)) result[currTokType.tokenTypeIdx] = idx;
                (0, forEach_1.default)(currTokType.categoryMatches, function(currExtendingType) {
                    if (!(0, has_1.default)(result, currExtendingType)) result[currExtendingType] = idx;
                });
            });
            return result;
        }, {});
        /**
         * @returns {number} - The chosen alternative index
         */ return function() {
            var nextToken = this.LA(1);
            return choiceToAlt_1[nextToken.tokenTypeIdx];
        };
    } else // optimized lookahead without needing to check the predicates at all.
    // this causes code duplication which is intentional to improve performance.
    /**
         * @returns {number} - The chosen alternative index
         */ return function() {
        for(var t = 0; t < numOfAlts; t++){
            var currAlt = alts[t];
            var currNumOfPaths = currAlt.length;
            nextPath: for(var j = 0; j < currNumOfPaths; j++){
                var currPath = currAlt[j];
                var currPathLength = currPath.length;
                for(var i = 0; i < currPathLength; i++){
                    var nextToken = this.LA(i + 1);
                    if (tokenMatcher(nextToken, currPath[i]) === false) continue nextPath;
                }
                // found a full path that matches.
                // this will also work for an empty ALT as the loop will be skipped
                return t;
            }
        // none of the paths for the current alternative matched
        // try the next alternative
        }
        // none of the alternatives could be matched
        return undefined;
    };
}
exports.buildAlternativesLookAheadFunc = buildAlternativesLookAheadFunc;
function buildSingleAlternativeLookaheadFunction(alt, tokenMatcher, dynamicTokensEnabled) {
    var areAllOneTokenLookahead = (0, every_1.default)(alt, function(currPath) {
        return currPath.length === 1;
    });
    var numOfPaths = alt.length;
    // optimized (common) case of all the lookaheads paths requiring only
    // a single token lookahead.
    if (areAllOneTokenLookahead && !dynamicTokensEnabled) {
        var singleTokensTypes = (0, flatten_1.default)(alt);
        if (singleTokensTypes.length === 1 && (0, isEmpty_1.default)(singleTokensTypes[0].categoryMatches)) {
            var expectedTokenType = singleTokensTypes[0];
            var expectedTokenUniqueKey_1 = expectedTokenType.tokenTypeIdx;
            return function() {
                return this.LA(1).tokenTypeIdx === expectedTokenUniqueKey_1;
            };
        } else {
            var choiceToAlt_2 = (0, reduce_1.default)(singleTokensTypes, function(result, currTokType, idx) {
                result[currTokType.tokenTypeIdx] = true;
                (0, forEach_1.default)(currTokType.categoryMatches, function(currExtendingType) {
                    result[currExtendingType] = true;
                });
                return result;
            }, []);
            return function() {
                var nextToken = this.LA(1);
                return choiceToAlt_2[nextToken.tokenTypeIdx] === true;
            };
        }
    } else return function() {
        nextPath: for(var j = 0; j < numOfPaths; j++){
            var currPath = alt[j];
            var currPathLength = currPath.length;
            for(var i = 0; i < currPathLength; i++){
                var nextToken = this.LA(i + 1);
                if (tokenMatcher(nextToken, currPath[i]) === false) continue nextPath;
            }
            // found a full path that matches.
            return true;
        }
        // none of the paths matched
        return false;
    };
}
exports.buildSingleAlternativeLookaheadFunction = buildSingleAlternativeLookaheadFunction;
var RestDefinitionFinderWalker = /** @class */ function(_super) {
    __extends(RestDefinitionFinderWalker, _super);
    function RestDefinitionFinderWalker(topProd, targetOccurrence, targetProdType) {
        var _this = _super.call(this) || this;
        _this.topProd = topProd;
        _this.targetOccurrence = targetOccurrence;
        _this.targetProdType = targetProdType;
        return _this;
    }
    RestDefinitionFinderWalker.prototype.startWalking = function() {
        this.walk(this.topProd);
        return this.restDef;
    };
    RestDefinitionFinderWalker.prototype.checkIsTarget = function(node, expectedProdType, currRest, prevRest) {
        if (node.idx === this.targetOccurrence && this.targetProdType === expectedProdType) {
            this.restDef = currRest.concat(prevRest);
            return true;
        }
        // performance optimization, do not iterate over the entire Grammar ast after we have found the target
        return false;
    };
    RestDefinitionFinderWalker.prototype.walkOption = function(optionProd, currRest, prevRest) {
        if (!this.checkIsTarget(optionProd, PROD_TYPE.OPTION, currRest, prevRest)) _super.prototype.walkOption.call(this, optionProd, currRest, prevRest);
    };
    RestDefinitionFinderWalker.prototype.walkAtLeastOne = function(atLeastOneProd, currRest, prevRest) {
        if (!this.checkIsTarget(atLeastOneProd, PROD_TYPE.REPETITION_MANDATORY, currRest, prevRest)) _super.prototype.walkOption.call(this, atLeastOneProd, currRest, prevRest);
    };
    RestDefinitionFinderWalker.prototype.walkAtLeastOneSep = function(atLeastOneSepProd, currRest, prevRest) {
        if (!this.checkIsTarget(atLeastOneSepProd, PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR, currRest, prevRest)) _super.prototype.walkOption.call(this, atLeastOneSepProd, currRest, prevRest);
    };
    RestDefinitionFinderWalker.prototype.walkMany = function(manyProd, currRest, prevRest) {
        if (!this.checkIsTarget(manyProd, PROD_TYPE.REPETITION, currRest, prevRest)) _super.prototype.walkOption.call(this, manyProd, currRest, prevRest);
    };
    RestDefinitionFinderWalker.prototype.walkManySep = function(manySepProd, currRest, prevRest) {
        if (!this.checkIsTarget(manySepProd, PROD_TYPE.REPETITION_WITH_SEPARATOR, currRest, prevRest)) _super.prototype.walkOption.call(this, manySepProd, currRest, prevRest);
    };
    return RestDefinitionFinderWalker;
}(rest_1.RestWalker);
/**
 * Returns the definition of a target production in a top level level rule.
 */ var InsideDefinitionFinderVisitor = /** @class */ function(_super) {
    __extends(InsideDefinitionFinderVisitor, _super);
    function InsideDefinitionFinderVisitor(targetOccurrence, targetProdType, targetRef) {
        var _this = _super.call(this) || this;
        _this.targetOccurrence = targetOccurrence;
        _this.targetProdType = targetProdType;
        _this.targetRef = targetRef;
        _this.result = [];
        return _this;
    }
    InsideDefinitionFinderVisitor.prototype.checkIsTarget = function(node, expectedProdName) {
        if (node.idx === this.targetOccurrence && this.targetProdType === expectedProdName && (this.targetRef === undefined || node === this.targetRef)) this.result = node.definition;
    };
    InsideDefinitionFinderVisitor.prototype.visitOption = function(node) {
        this.checkIsTarget(node, PROD_TYPE.OPTION);
    };
    InsideDefinitionFinderVisitor.prototype.visitRepetition = function(node) {
        this.checkIsTarget(node, PROD_TYPE.REPETITION);
    };
    InsideDefinitionFinderVisitor.prototype.visitRepetitionMandatory = function(node) {
        this.checkIsTarget(node, PROD_TYPE.REPETITION_MANDATORY);
    };
    InsideDefinitionFinderVisitor.prototype.visitRepetitionMandatoryWithSeparator = function(node) {
        this.checkIsTarget(node, PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR);
    };
    InsideDefinitionFinderVisitor.prototype.visitRepetitionWithSeparator = function(node) {
        this.checkIsTarget(node, PROD_TYPE.REPETITION_WITH_SEPARATOR);
    };
    InsideDefinitionFinderVisitor.prototype.visitAlternation = function(node) {
        this.checkIsTarget(node, PROD_TYPE.ALTERNATION);
    };
    return InsideDefinitionFinderVisitor;
}(gast_2.GAstVisitor);
function initializeArrayOfArrays(size) {
    var result = new Array(size);
    for(var i = 0; i < size; i++)result[i] = [];
    return result;
}
/**
 * A sort of hash function between a Path in the grammar and a string.
 * Note that this returns multiple "hashes" to support the scenario of token categories.
 * -  A single path with categories may match multiple **actual** paths.
 */ function pathToHashKeys(path) {
    var keys = [
        ""
    ];
    for(var i = 0; i < path.length; i++){
        var tokType = path[i];
        var longerKeys = [];
        for(var j = 0; j < keys.length; j++){
            var currShorterKey = keys[j];
            longerKeys.push(currShorterKey + "_" + tokType.tokenTypeIdx);
            for(var t = 0; t < tokType.categoryMatches.length; t++){
                var categoriesKeySuffix = "_" + tokType.categoryMatches[t];
                longerKeys.push(currShorterKey + categoriesKeySuffix);
            }
        }
        keys = longerKeys;
    }
    return keys;
}
/**
 * Imperative style due to being called from a hot spot
 */ function isUniquePrefixHash(altKnownPathsKeys, searchPathKeys, idx) {
    for(var currAltIdx = 0; currAltIdx < altKnownPathsKeys.length; currAltIdx++){
        // We only want to test vs the other alternatives
        if (currAltIdx === idx) continue;
        var otherAltKnownPathsKeys = altKnownPathsKeys[currAltIdx];
        for(var searchIdx = 0; searchIdx < searchPathKeys.length; searchIdx++){
            var searchKey = searchPathKeys[searchIdx];
            if (otherAltKnownPathsKeys[searchKey] === true) return false;
        }
    }
    // None of the SearchPathKeys were found in any of the other alternatives
    return true;
}
function lookAheadSequenceFromAlternatives(altsDefs, k) {
    var partialAlts = (0, map_1.default)(altsDefs, function(currAlt) {
        return (0, interpreter_1.possiblePathsFrom)([
            currAlt
        ], 1);
    });
    var finalResult = initializeArrayOfArrays(partialAlts.length);
    var altsHashes = (0, map_1.default)(partialAlts, function(currAltPaths) {
        var dict = {};
        (0, forEach_1.default)(currAltPaths, function(item) {
            var keys = pathToHashKeys(item.partialPath);
            (0, forEach_1.default)(keys, function(currKey) {
                dict[currKey] = true;
            });
        });
        return dict;
    });
    var newData = partialAlts;
    // maxLookahead loop
    for(var pathLength = 1; pathLength <= k; pathLength++){
        var currDataset = newData;
        newData = initializeArrayOfArrays(currDataset.length);
        var _loop_1 = function(altIdx) {
            var currAltPathsAndSuffixes = currDataset[altIdx];
            // paths in current alternative loop
            for(var currPathIdx = 0; currPathIdx < currAltPathsAndSuffixes.length; currPathIdx++){
                var currPathPrefix = currAltPathsAndSuffixes[currPathIdx].partialPath;
                var suffixDef = currAltPathsAndSuffixes[currPathIdx].suffixDef;
                var prefixKeys = pathToHashKeys(currPathPrefix);
                var isUnique = isUniquePrefixHash(altsHashes, prefixKeys, altIdx);
                // End of the line for this path.
                if (isUnique || (0, isEmpty_1.default)(suffixDef) || currPathPrefix.length === k) {
                    var currAltResult = finalResult[altIdx];
                    // TODO: Can we implement a containsPath using Maps/Dictionaries?
                    if (containsPath(currAltResult, currPathPrefix) === false) {
                        currAltResult.push(currPathPrefix);
                        // Update all new  keys for the current path.
                        for(var j = 0; j < prefixKeys.length; j++){
                            var currKey = prefixKeys[j];
                            altsHashes[altIdx][currKey] = true;
                        }
                    }
                } else {
                    var newPartialPathsAndSuffixes = (0, interpreter_1.possiblePathsFrom)(suffixDef, pathLength + 1, currPathPrefix);
                    newData[altIdx] = newData[altIdx].concat(newPartialPathsAndSuffixes);
                    // Update keys for new known paths
                    (0, forEach_1.default)(newPartialPathsAndSuffixes, function(item) {
                        var prefixKeys = pathToHashKeys(item.partialPath);
                        (0, forEach_1.default)(prefixKeys, function(key) {
                            altsHashes[altIdx][key] = true;
                        });
                    });
                }
            }
        };
        // alternatives loop
        for(var altIdx = 0; altIdx < currDataset.length; altIdx++)_loop_1(altIdx);
    }
    return finalResult;
}
exports.lookAheadSequenceFromAlternatives = lookAheadSequenceFromAlternatives;
function getLookaheadPathsForOr(occurrence, ruleGrammar, k, orProd) {
    var visitor = new InsideDefinitionFinderVisitor(occurrence, PROD_TYPE.ALTERNATION, orProd);
    ruleGrammar.accept(visitor);
    return lookAheadSequenceFromAlternatives(visitor.result, k);
}
exports.getLookaheadPathsForOr = getLookaheadPathsForOr;
function getLookaheadPathsForOptionalProd(occurrence, ruleGrammar, prodType, k) {
    var insideDefVisitor = new InsideDefinitionFinderVisitor(occurrence, prodType);
    ruleGrammar.accept(insideDefVisitor);
    var insideDef = insideDefVisitor.result;
    var afterDefWalker = new RestDefinitionFinderWalker(ruleGrammar, occurrence, prodType);
    var afterDef = afterDefWalker.startWalking();
    var insideFlat = new gast_1.Alternative({
        definition: insideDef
    });
    var afterFlat = new gast_1.Alternative({
        definition: afterDef
    });
    return lookAheadSequenceFromAlternatives([
        insideFlat,
        afterFlat
    ], k);
}
exports.getLookaheadPathsForOptionalProd = getLookaheadPathsForOptionalProd;
function containsPath(alternative, searchPath) {
    compareOtherPath: for(var i = 0; i < alternative.length; i++){
        var otherPath = alternative[i];
        if (otherPath.length !== searchPath.length) continue;
        for(var j = 0; j < otherPath.length; j++){
            var searchTok = searchPath[j];
            var otherTok = otherPath[j];
            var matchingTokens = searchTok === otherTok || otherTok.categoryMatchesMap[searchTok.tokenTypeIdx] !== undefined;
            if (matchingTokens === false) continue compareOtherPath;
        }
        return true;
    }
    return false;
}
exports.containsPath = containsPath;
function isStrictPrefixOfPath(prefix, other) {
    return prefix.length < other.length && (0, every_1.default)(prefix, function(tokType, idx) {
        var otherTokType = other[idx];
        return tokType === otherTokType || otherTokType.categoryMatchesMap[tokType.tokenTypeIdx];
    });
}
exports.isStrictPrefixOfPath = isStrictPrefixOfPath;
function areTokenCategoriesNotUsed(lookAheadPaths) {
    return (0, every_1.default)(lookAheadPaths, function(singleAltPaths) {
        return (0, every_1.default)(singleAltPaths, function(singlePath) {
            return (0, every_1.default)(singlePath, function(token) {
                return (0, isEmpty_1.default)(token.categoryMatches);
            });
        });
    });
}
exports.areTokenCategoriesNotUsed = areTokenCategoriesNotUsed;

},{"7b9ea235dc6beed1":"HRoQ8","fcaeb7e78abf01f8":"g3ybb","f3c5438a054c64b1":"aXOSA","1777033c66a95bd0":"68KdA","d25bca52c512d8a0":"cQbs0","6a9404ce8f3650ad":"j5BJo","30b5cff11cc1fab4":"isYLF","20b9ba104c3389d8":"fbEtw","84e02d476ab5b955":"dgFra","5d6eb13c9027c54e":"1KnzY","4e5ed75300ae9f6c":"91AYQ"}],"fbEtw":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.nextPossibleTokensAfter = exports.possiblePathsFrom = exports.NextTerminalAfterAtLeastOneSepWalker = exports.NextTerminalAfterAtLeastOneWalker = exports.NextTerminalAfterManySepWalker = exports.NextTerminalAfterManyWalker = exports.AbstractNextTerminalAfterProductionWalker = exports.NextAfterTokenWalker = exports.AbstractNextPossibleTokensWalker = void 0;
var rest_1 = require("e3cf0dfbfe03f16b");
var first_1 = __importDefault(require("bf690aa19e5f6ae6"));
var isEmpty_1 = __importDefault(require("38512dd7895097c5"));
var dropRight_1 = __importDefault(require("1c31a99f5385a999"));
var drop_1 = __importDefault(require("71111e72f9b7b14c"));
var last_1 = __importDefault(require("54f2c349939113cf"));
var forEach_1 = __importDefault(require("a104c0b180aab98"));
var clone_1 = __importDefault(require("8cd7c2b12078f93e"));
var first_2 = require("95f04faf377a73ed");
var gast_1 = require("6a9351ee58d1ca55");
var AbstractNextPossibleTokensWalker = /** @class */ function(_super) {
    __extends(AbstractNextPossibleTokensWalker, _super);
    function AbstractNextPossibleTokensWalker(topProd, path) {
        var _this = _super.call(this) || this;
        _this.topProd = topProd;
        _this.path = path;
        _this.possibleTokTypes = [];
        _this.nextProductionName = "";
        _this.nextProductionOccurrence = 0;
        _this.found = false;
        _this.isAtEndOfPath = false;
        return _this;
    }
    AbstractNextPossibleTokensWalker.prototype.startWalking = function() {
        this.found = false;
        if (this.path.ruleStack[0] !== this.topProd.name) throw Error("The path does not start with the walker's top Rule!");
        // immutable for the win
        this.ruleStack = (0, clone_1.default)(this.path.ruleStack).reverse(); // intelij bug requires assertion
        this.occurrenceStack = (0, clone_1.default)(this.path.occurrenceStack).reverse(); // intelij bug requires assertion
        // already verified that the first production is valid, we now seek the 2nd production
        this.ruleStack.pop();
        this.occurrenceStack.pop();
        this.updateExpectedNext();
        this.walk(this.topProd);
        return this.possibleTokTypes;
    };
    AbstractNextPossibleTokensWalker.prototype.walk = function(prod, prevRest) {
        if (prevRest === void 0) prevRest = [];
        // stop scanning once we found the path
        if (!this.found) _super.prototype.walk.call(this, prod, prevRest);
    };
    AbstractNextPossibleTokensWalker.prototype.walkProdRef = function(refProd, currRest, prevRest) {
        // found the next production, need to keep walking in it
        if (refProd.referencedRule.name === this.nextProductionName && refProd.idx === this.nextProductionOccurrence) {
            var fullRest = currRest.concat(prevRest);
            this.updateExpectedNext();
            this.walk(refProd.referencedRule, fullRest);
        }
    };
    AbstractNextPossibleTokensWalker.prototype.updateExpectedNext = function() {
        // need to consume the Terminal
        if ((0, isEmpty_1.default)(this.ruleStack)) {
            // must reset nextProductionXXX to avoid walking down another Top Level production while what we are
            // really seeking is the last Terminal...
            this.nextProductionName = "";
            this.nextProductionOccurrence = 0;
            this.isAtEndOfPath = true;
        } else {
            this.nextProductionName = this.ruleStack.pop();
            this.nextProductionOccurrence = this.occurrenceStack.pop();
        }
    };
    return AbstractNextPossibleTokensWalker;
}(rest_1.RestWalker);
exports.AbstractNextPossibleTokensWalker = AbstractNextPossibleTokensWalker;
var NextAfterTokenWalker = /** @class */ function(_super) {
    __extends(NextAfterTokenWalker, _super);
    function NextAfterTokenWalker(topProd, path) {
        var _this = _super.call(this, topProd, path) || this;
        _this.path = path;
        _this.nextTerminalName = "";
        _this.nextTerminalOccurrence = 0;
        _this.nextTerminalName = _this.path.lastTok.name;
        _this.nextTerminalOccurrence = _this.path.lastTokOccurrence;
        return _this;
    }
    NextAfterTokenWalker.prototype.walkTerminal = function(terminal, currRest, prevRest) {
        if (this.isAtEndOfPath && terminal.terminalType.name === this.nextTerminalName && terminal.idx === this.nextTerminalOccurrence && !this.found) {
            var fullRest = currRest.concat(prevRest);
            var restProd = new gast_1.Alternative({
                definition: fullRest
            });
            this.possibleTokTypes = (0, first_2.first)(restProd);
            this.found = true;
        }
    };
    return NextAfterTokenWalker;
}(AbstractNextPossibleTokensWalker);
exports.NextAfterTokenWalker = NextAfterTokenWalker;
/**
 * This walker only "walks" a single "TOP" level in the Grammar Ast, this means
 * it never "follows" production refs
 */ var AbstractNextTerminalAfterProductionWalker = /** @class */ function(_super) {
    __extends(AbstractNextTerminalAfterProductionWalker, _super);
    function AbstractNextTerminalAfterProductionWalker(topRule, occurrence) {
        var _this = _super.call(this) || this;
        _this.topRule = topRule;
        _this.occurrence = occurrence;
        _this.result = {
            token: undefined,
            occurrence: undefined,
            isEndOfRule: undefined
        };
        return _this;
    }
    AbstractNextTerminalAfterProductionWalker.prototype.startWalking = function() {
        this.walk(this.topRule);
        return this.result;
    };
    return AbstractNextTerminalAfterProductionWalker;
}(rest_1.RestWalker);
exports.AbstractNextTerminalAfterProductionWalker = AbstractNextTerminalAfterProductionWalker;
var NextTerminalAfterManyWalker = /** @class */ function(_super) {
    __extends(NextTerminalAfterManyWalker, _super);
    function NextTerminalAfterManyWalker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NextTerminalAfterManyWalker.prototype.walkMany = function(manyProd, currRest, prevRest) {
        if (manyProd.idx === this.occurrence) {
            var firstAfterMany = (0, first_1.default)(currRest.concat(prevRest));
            this.result.isEndOfRule = firstAfterMany === undefined;
            if (firstAfterMany instanceof gast_1.Terminal) {
                this.result.token = firstAfterMany.terminalType;
                this.result.occurrence = firstAfterMany.idx;
            }
        } else _super.prototype.walkMany.call(this, manyProd, currRest, prevRest);
    };
    return NextTerminalAfterManyWalker;
}(AbstractNextTerminalAfterProductionWalker);
exports.NextTerminalAfterManyWalker = NextTerminalAfterManyWalker;
var NextTerminalAfterManySepWalker = /** @class */ function(_super) {
    __extends(NextTerminalAfterManySepWalker, _super);
    function NextTerminalAfterManySepWalker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NextTerminalAfterManySepWalker.prototype.walkManySep = function(manySepProd, currRest, prevRest) {
        if (manySepProd.idx === this.occurrence) {
            var firstAfterManySep = (0, first_1.default)(currRest.concat(prevRest));
            this.result.isEndOfRule = firstAfterManySep === undefined;
            if (firstAfterManySep instanceof gast_1.Terminal) {
                this.result.token = firstAfterManySep.terminalType;
                this.result.occurrence = firstAfterManySep.idx;
            }
        } else _super.prototype.walkManySep.call(this, manySepProd, currRest, prevRest);
    };
    return NextTerminalAfterManySepWalker;
}(AbstractNextTerminalAfterProductionWalker);
exports.NextTerminalAfterManySepWalker = NextTerminalAfterManySepWalker;
var NextTerminalAfterAtLeastOneWalker = /** @class */ function(_super) {
    __extends(NextTerminalAfterAtLeastOneWalker, _super);
    function NextTerminalAfterAtLeastOneWalker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NextTerminalAfterAtLeastOneWalker.prototype.walkAtLeastOne = function(atLeastOneProd, currRest, prevRest) {
        if (atLeastOneProd.idx === this.occurrence) {
            var firstAfterAtLeastOne = (0, first_1.default)(currRest.concat(prevRest));
            this.result.isEndOfRule = firstAfterAtLeastOne === undefined;
            if (firstAfterAtLeastOne instanceof gast_1.Terminal) {
                this.result.token = firstAfterAtLeastOne.terminalType;
                this.result.occurrence = firstAfterAtLeastOne.idx;
            }
        } else _super.prototype.walkAtLeastOne.call(this, atLeastOneProd, currRest, prevRest);
    };
    return NextTerminalAfterAtLeastOneWalker;
}(AbstractNextTerminalAfterProductionWalker);
exports.NextTerminalAfterAtLeastOneWalker = NextTerminalAfterAtLeastOneWalker;
// TODO: reduce code duplication in the AfterWalkers
var NextTerminalAfterAtLeastOneSepWalker = /** @class */ function(_super) {
    __extends(NextTerminalAfterAtLeastOneSepWalker, _super);
    function NextTerminalAfterAtLeastOneSepWalker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NextTerminalAfterAtLeastOneSepWalker.prototype.walkAtLeastOneSep = function(atleastOneSepProd, currRest, prevRest) {
        if (atleastOneSepProd.idx === this.occurrence) {
            var firstAfterfirstAfterAtLeastOneSep = (0, first_1.default)(currRest.concat(prevRest));
            this.result.isEndOfRule = firstAfterfirstAfterAtLeastOneSep === undefined;
            if (firstAfterfirstAfterAtLeastOneSep instanceof gast_1.Terminal) {
                this.result.token = firstAfterfirstAfterAtLeastOneSep.terminalType;
                this.result.occurrence = firstAfterfirstAfterAtLeastOneSep.idx;
            }
        } else _super.prototype.walkAtLeastOneSep.call(this, atleastOneSepProd, currRest, prevRest);
    };
    return NextTerminalAfterAtLeastOneSepWalker;
}(AbstractNextTerminalAfterProductionWalker);
exports.NextTerminalAfterAtLeastOneSepWalker = NextTerminalAfterAtLeastOneSepWalker;
function possiblePathsFrom(targetDef, maxLength, currPath) {
    if (currPath === void 0) currPath = [];
    // avoid side effects
    currPath = (0, clone_1.default)(currPath);
    var result = [];
    var i = 0;
    // TODO: avoid inner funcs
    function remainingPathWith(nextDef) {
        return nextDef.concat((0, drop_1.default)(targetDef, i + 1));
    }
    // TODO: avoid inner funcs
    function getAlternativesForProd(definition) {
        var alternatives = possiblePathsFrom(remainingPathWith(definition), maxLength, currPath);
        return result.concat(alternatives);
    }
    /**
     * Mandatory productions will halt the loop as the paths computed from their recursive calls will already contain the
     * following (rest) of the targetDef.
     *
     * For optional productions (Option/Repetition/...) the loop will continue to represent the paths that do not include the
     * the optional production.
     */ while(currPath.length < maxLength && i < targetDef.length){
        var prod = targetDef[i];
        /* istanbul ignore else */ if (prod instanceof gast_1.Alternative) return getAlternativesForProd(prod.definition);
        else if (prod instanceof gast_1.NonTerminal) return getAlternativesForProd(prod.definition);
        else if (prod instanceof gast_1.Option) result = getAlternativesForProd(prod.definition);
        else if (prod instanceof gast_1.RepetitionMandatory) {
            var newDef = prod.definition.concat([
                new gast_1.Repetition({
                    definition: prod.definition
                })
            ]);
            return getAlternativesForProd(newDef);
        } else if (prod instanceof gast_1.RepetitionMandatoryWithSeparator) {
            var newDef = [
                new gast_1.Alternative({
                    definition: prod.definition
                }),
                new gast_1.Repetition({
                    definition: [
                        new gast_1.Terminal({
                            terminalType: prod.separator
                        })
                    ].concat(prod.definition)
                })
            ];
            return getAlternativesForProd(newDef);
        } else if (prod instanceof gast_1.RepetitionWithSeparator) {
            var newDef = prod.definition.concat([
                new gast_1.Repetition({
                    definition: [
                        new gast_1.Terminal({
                            terminalType: prod.separator
                        })
                    ].concat(prod.definition)
                })
            ]);
            result = getAlternativesForProd(newDef);
        } else if (prod instanceof gast_1.Repetition) {
            var newDef = prod.definition.concat([
                new gast_1.Repetition({
                    definition: prod.definition
                })
            ]);
            result = getAlternativesForProd(newDef);
        } else if (prod instanceof gast_1.Alternation) {
            (0, forEach_1.default)(prod.definition, function(currAlt) {
                // TODO: this is a limited check for empty alternatives
                //   It would prevent a common case of infinite loops during parser initialization.
                //   However **in-directly** empty alternatives may still cause issues.
                if ((0, isEmpty_1.default)(currAlt.definition) === false) result = getAlternativesForProd(currAlt.definition);
            });
            return result;
        } else if (prod instanceof gast_1.Terminal) currPath.push(prod.terminalType);
        else throw Error("non exhaustive match");
        i++;
    }
    result.push({
        partialPath: currPath,
        suffixDef: (0, drop_1.default)(targetDef, i)
    });
    return result;
}
exports.possiblePathsFrom = possiblePathsFrom;
function nextPossibleTokensAfter(initialDef, tokenVector, tokMatcher, maxLookAhead) {
    var EXIT_NON_TERMINAL = "EXIT_NONE_TERMINAL";
    // to avoid creating a new Array each time.
    var EXIT_NON_TERMINAL_ARR = [
        EXIT_NON_TERMINAL
    ];
    var EXIT_ALTERNATIVE = "EXIT_ALTERNATIVE";
    var foundCompletePath = false;
    var tokenVectorLength = tokenVector.length;
    var minimalAlternativesIndex = tokenVectorLength - maxLookAhead - 1;
    var result = [];
    var possiblePaths = [];
    possiblePaths.push({
        idx: -1,
        def: initialDef,
        ruleStack: [],
        occurrenceStack: []
    });
    while(!(0, isEmpty_1.default)(possiblePaths)){
        var currPath = possiblePaths.pop();
        // skip alternatives if no more results can be found (assuming deterministic grammar with fixed lookahead)
        if (currPath === EXIT_ALTERNATIVE) {
            if (foundCompletePath && (0, last_1.default)(possiblePaths).idx <= minimalAlternativesIndex) // remove irrelevant alternative
            possiblePaths.pop();
            continue;
        }
        var currDef = currPath.def;
        var currIdx = currPath.idx;
        var currRuleStack = currPath.ruleStack;
        var currOccurrenceStack = currPath.occurrenceStack;
        // For Example: an empty path could exist in a valid grammar in the case of an EMPTY_ALT
        if ((0, isEmpty_1.default)(currDef)) continue;
        var prod = currDef[0];
        /* istanbul ignore else */ if (prod === EXIT_NON_TERMINAL) {
            var nextPath = {
                idx: currIdx,
                def: (0, drop_1.default)(currDef),
                ruleStack: (0, dropRight_1.default)(currRuleStack),
                occurrenceStack: (0, dropRight_1.default)(currOccurrenceStack)
            };
            possiblePaths.push(nextPath);
        } else if (prod instanceof gast_1.Terminal) {
            /* istanbul ignore else */ if (currIdx < tokenVectorLength - 1) {
                var nextIdx = currIdx + 1;
                var actualToken = tokenVector[nextIdx];
                if (tokMatcher(actualToken, prod.terminalType)) {
                    var nextPath = {
                        idx: nextIdx,
                        def: (0, drop_1.default)(currDef),
                        ruleStack: currRuleStack,
                        occurrenceStack: currOccurrenceStack
                    };
                    possiblePaths.push(nextPath);
                }
            // end of the line
            } else if (currIdx === tokenVectorLength - 1) {
                // IGNORE ABOVE ELSE
                result.push({
                    nextTokenType: prod.terminalType,
                    nextTokenOccurrence: prod.idx,
                    ruleStack: currRuleStack,
                    occurrenceStack: currOccurrenceStack
                });
                foundCompletePath = true;
            } else throw Error("non exhaustive match");
        } else if (prod instanceof gast_1.NonTerminal) {
            var newRuleStack = (0, clone_1.default)(currRuleStack);
            newRuleStack.push(prod.nonTerminalName);
            var newOccurrenceStack = (0, clone_1.default)(currOccurrenceStack);
            newOccurrenceStack.push(prod.idx);
            var nextPath = {
                idx: currIdx,
                def: prod.definition.concat(EXIT_NON_TERMINAL_ARR, (0, drop_1.default)(currDef)),
                ruleStack: newRuleStack,
                occurrenceStack: newOccurrenceStack
            };
            possiblePaths.push(nextPath);
        } else if (prod instanceof gast_1.Option) {
            // the order of alternatives is meaningful, FILO (Last path will be traversed first).
            var nextPathWithout = {
                idx: currIdx,
                def: (0, drop_1.default)(currDef),
                ruleStack: currRuleStack,
                occurrenceStack: currOccurrenceStack
            };
            possiblePaths.push(nextPathWithout);
            // required marker to avoid backtracking paths whose higher priority alternatives already matched
            possiblePaths.push(EXIT_ALTERNATIVE);
            var nextPathWith = {
                idx: currIdx,
                def: prod.definition.concat((0, drop_1.default)(currDef)),
                ruleStack: currRuleStack,
                occurrenceStack: currOccurrenceStack
            };
            possiblePaths.push(nextPathWith);
        } else if (prod instanceof gast_1.RepetitionMandatory) {
            // TODO:(THE NEW operators here take a while...) (convert once?)
            var secondIteration = new gast_1.Repetition({
                definition: prod.definition,
                idx: prod.idx
            });
            var nextDef = prod.definition.concat([
                secondIteration
            ], (0, drop_1.default)(currDef));
            var nextPath = {
                idx: currIdx,
                def: nextDef,
                ruleStack: currRuleStack,
                occurrenceStack: currOccurrenceStack
            };
            possiblePaths.push(nextPath);
        } else if (prod instanceof gast_1.RepetitionMandatoryWithSeparator) {
            // TODO:(THE NEW operators here take a while...) (convert once?)
            var separatorGast = new gast_1.Terminal({
                terminalType: prod.separator
            });
            var secondIteration = new gast_1.Repetition({
                definition: [
                    separatorGast
                ].concat(prod.definition),
                idx: prod.idx
            });
            var nextDef = prod.definition.concat([
                secondIteration
            ], (0, drop_1.default)(currDef));
            var nextPath = {
                idx: currIdx,
                def: nextDef,
                ruleStack: currRuleStack,
                occurrenceStack: currOccurrenceStack
            };
            possiblePaths.push(nextPath);
        } else if (prod instanceof gast_1.RepetitionWithSeparator) {
            // the order of alternatives is meaningful, FILO (Last path will be traversed first).
            var nextPathWithout = {
                idx: currIdx,
                def: (0, drop_1.default)(currDef),
                ruleStack: currRuleStack,
                occurrenceStack: currOccurrenceStack
            };
            possiblePaths.push(nextPathWithout);
            // required marker to avoid backtracking paths whose higher priority alternatives already matched
            possiblePaths.push(EXIT_ALTERNATIVE);
            var separatorGast = new gast_1.Terminal({
                terminalType: prod.separator
            });
            var nthRepetition = new gast_1.Repetition({
                definition: [
                    separatorGast
                ].concat(prod.definition),
                idx: prod.idx
            });
            var nextDef = prod.definition.concat([
                nthRepetition
            ], (0, drop_1.default)(currDef));
            var nextPathWith = {
                idx: currIdx,
                def: nextDef,
                ruleStack: currRuleStack,
                occurrenceStack: currOccurrenceStack
            };
            possiblePaths.push(nextPathWith);
        } else if (prod instanceof gast_1.Repetition) {
            // the order of alternatives is meaningful, FILO (Last path will be traversed first).
            var nextPathWithout = {
                idx: currIdx,
                def: (0, drop_1.default)(currDef),
                ruleStack: currRuleStack,
                occurrenceStack: currOccurrenceStack
            };
            possiblePaths.push(nextPathWithout);
            // required marker to avoid backtracking paths whose higher priority alternatives already matched
            possiblePaths.push(EXIT_ALTERNATIVE);
            // TODO: an empty repetition will cause infinite loops here, will the parser detect this in selfAnalysis?
            var nthRepetition = new gast_1.Repetition({
                definition: prod.definition,
                idx: prod.idx
            });
            var nextDef = prod.definition.concat([
                nthRepetition
            ], (0, drop_1.default)(currDef));
            var nextPathWith = {
                idx: currIdx,
                def: nextDef,
                ruleStack: currRuleStack,
                occurrenceStack: currOccurrenceStack
            };
            possiblePaths.push(nextPathWith);
        } else if (prod instanceof gast_1.Alternation) // the order of alternatives is meaningful, FILO (Last path will be traversed first).
        for(var i = prod.definition.length - 1; i >= 0; i--){
            var currAlt = prod.definition[i];
            var currAltPath = {
                idx: currIdx,
                def: currAlt.definition.concat((0, drop_1.default)(currDef)),
                ruleStack: currRuleStack,
                occurrenceStack: currOccurrenceStack
            };
            possiblePaths.push(currAltPath);
            possiblePaths.push(EXIT_ALTERNATIVE);
        }
        else if (prod instanceof gast_1.Alternative) possiblePaths.push({
            idx: currIdx,
            def: prod.definition.concat((0, drop_1.default)(currDef)),
            ruleStack: currRuleStack,
            occurrenceStack: currOccurrenceStack
        });
        else if (prod instanceof gast_1.Rule) // last because we should only encounter at most a single one of these per invocation.
        possiblePaths.push(expandTopLevelRule(prod, currIdx, currRuleStack, currOccurrenceStack));
        else throw Error("non exhaustive match");
    }
    return result;
}
exports.nextPossibleTokensAfter = nextPossibleTokensAfter;
function expandTopLevelRule(topRule, currIdx, currRuleStack, currOccurrenceStack) {
    var newRuleStack = (0, clone_1.default)(currRuleStack);
    newRuleStack.push(topRule.name);
    var newCurrOccurrenceStack = (0, clone_1.default)(currOccurrenceStack);
    // top rule is always assumed to have been called with occurrence index 1
    newCurrOccurrenceStack.push(1);
    return {
        idx: currIdx,
        def: topRule.definition,
        ruleStack: newRuleStack,
        occurrenceStack: newCurrOccurrenceStack
    };
}

},{"e3cf0dfbfe03f16b":"dgFra","bf690aa19e5f6ae6":"48AJB","38512dd7895097c5":"HRoQ8","1c31a99f5385a999":"3tn7S","71111e72f9b7b14c":"2pD4D","54f2c349939113cf":"6oI7j","a104c0b180aab98":"cQbs0","8cd7c2b12078f93e":"dIp0d","95f04faf377a73ed":"657S2","6a9351ee58d1ca55":"91AYQ"}],"3tn7S":[function(require,module,exports) {
var baseSlice = require("5600faecaeddf8c7"), toInteger = require("55ad9a87fc726443");
/**
 * Creates a slice of `array` with `n` elements dropped from the end.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to drop.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.dropRight([1, 2, 3]);
 * // => [1, 2]
 *
 * _.dropRight([1, 2, 3], 2);
 * // => [1]
 *
 * _.dropRight([1, 2, 3], 5);
 * // => []
 *
 * _.dropRight([1, 2, 3], 0);
 * // => [1, 2, 3]
 */ function dropRight(array, n, guard) {
    var length = array == null ? 0 : array.length;
    if (!length) return [];
    n = guard || n === undefined ? 1 : toInteger(n);
    n = length - n;
    return baseSlice(array, 0, n < 0 ? 0 : n);
}
module.exports = dropRight;

},{"5600faecaeddf8c7":"bdwd1","55ad9a87fc726443":"hljBn"}],"3EuTJ":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.attemptInRepetitionRecovery = exports.Recoverable = exports.InRuleRecoveryException = exports.IN_RULE_RECOVERY_EXCEPTION = exports.EOF_FOLLOW_KEY = void 0;
var tokens_public_1 = require("bc2d84135cd3bc6c");
var isEmpty_1 = __importDefault(require("634ab89a2b4b238c"));
var dropRight_1 = __importDefault(require("bd8ca6de2a8d3f2b"));
var flatten_1 = __importDefault(require("4c3be286291b6878"));
var map_1 = __importDefault(require("6b7dbbaa25620c9"));
var find_1 = __importDefault(require("1f2a0d903846e97"));
var has_1 = __importDefault(require("693b6152db330b5"));
var includes_1 = __importDefault(require("c2f7974d9a3fa7f"));
var clone_1 = __importDefault(require("d230358d15a68fe8"));
var exceptions_public_1 = require("3ecea5127c8d1fbb");
var constants_1 = require("ef22df3956e26d12");
var parser_1 = require("f5d3d1aad8da617e");
exports.EOF_FOLLOW_KEY = {};
exports.IN_RULE_RECOVERY_EXCEPTION = "InRuleRecoveryException";
var InRuleRecoveryException = /** @class */ function(_super) {
    __extends(InRuleRecoveryException, _super);
    function InRuleRecoveryException(message) {
        var _this = _super.call(this, message) || this;
        _this.name = exports.IN_RULE_RECOVERY_EXCEPTION;
        return _this;
    }
    return InRuleRecoveryException;
}(Error);
exports.InRuleRecoveryException = InRuleRecoveryException;
/**
 * This trait is responsible for the error recovery and fault tolerant logic
 */ var Recoverable = /** @class */ function() {
    function Recoverable() {}
    Recoverable.prototype.initRecoverable = function(config) {
        this.firstAfterRepMap = {};
        this.resyncFollows = {};
        this.recoveryEnabled = (0, has_1.default)(config, "recoveryEnabled") ? config.recoveryEnabled // assumes end user provides the correct config value/type
         : parser_1.DEFAULT_PARSER_CONFIG.recoveryEnabled;
        // performance optimization, NOOP will be inlined which
        // effectively means that this optional feature does not exist
        // when not used.
        if (this.recoveryEnabled) this.attemptInRepetitionRecovery = attemptInRepetitionRecovery;
    };
    Recoverable.prototype.getTokenToInsert = function(tokType) {
        var tokToInsert = (0, tokens_public_1.createTokenInstance)(tokType, "", NaN, NaN, NaN, NaN, NaN, NaN);
        tokToInsert.isInsertedInRecovery = true;
        return tokToInsert;
    };
    Recoverable.prototype.canTokenTypeBeInsertedInRecovery = function(tokType) {
        return true;
    };
    Recoverable.prototype.canTokenTypeBeDeletedInRecovery = function(tokType) {
        return true;
    };
    Recoverable.prototype.tryInRepetitionRecovery = function(grammarRule, grammarRuleArgs, lookAheadFunc, expectedTokType) {
        var _this = this;
        // TODO: can the resyncTokenType be cached?
        var reSyncTokType = this.findReSyncTokenType();
        var savedLexerState = this.exportLexerState();
        var resyncedTokens = [];
        var passedResyncPoint = false;
        var nextTokenWithoutResync = this.LA(1);
        var currToken = this.LA(1);
        var generateErrorMessage = function() {
            var previousToken = _this.LA(0);
            // we are preemptively re-syncing before an error has been detected, therefor we must reproduce
            // the error that would have been thrown
            var msg = _this.errorMessageProvider.buildMismatchTokenMessage({
                expected: expectedTokType,
                actual: nextTokenWithoutResync,
                previous: previousToken,
                ruleName: _this.getCurrRuleFullName()
            });
            var error = new exceptions_public_1.MismatchedTokenException(msg, nextTokenWithoutResync, _this.LA(0));
            // the first token here will be the original cause of the error, this is not part of the resyncedTokens property.
            error.resyncedTokens = (0, dropRight_1.default)(resyncedTokens);
            _this.SAVE_ERROR(error);
        };
        while(!passedResyncPoint){
            // re-synced to a point where we can safely exit the repetition/
            if (this.tokenMatcher(currToken, expectedTokType)) {
                generateErrorMessage();
                return; // must return here to avoid reverting the inputIdx
            } else if (lookAheadFunc.call(this)) {
                // we skipped enough tokens so we can resync right back into another iteration of the repetition grammar rule
                generateErrorMessage();
                // recursive invocation in other to support multiple re-syncs in the same top level repetition grammar rule
                grammarRule.apply(this, grammarRuleArgs);
                return; // must return here to avoid reverting the inputIdx
            } else if (this.tokenMatcher(currToken, reSyncTokType)) passedResyncPoint = true;
            else {
                currToken = this.SKIP_TOKEN();
                this.addToResyncTokens(currToken, resyncedTokens);
            }
        }
        // we were unable to find a CLOSER point to resync inside the Repetition, reset the state.
        // The parsing exception we were trying to prevent will happen in the NEXT parsing step. it may be handled by
        // "between rules" resync recovery later in the flow.
        this.importLexerState(savedLexerState);
    };
    Recoverable.prototype.shouldInRepetitionRecoveryBeTried = function(expectTokAfterLastMatch, nextTokIdx, notStuck) {
        // Edge case of arriving from a MANY repetition which is stuck
        // Attempting recovery in this case could cause an infinite loop
        if (notStuck === false) return false;
        // no need to recover, next token is what we expect...
        if (this.tokenMatcher(this.LA(1), expectTokAfterLastMatch)) return false;
        // error recovery is disabled during backtracking as it can make the parser ignore a valid grammar path
        // and prefer some backtracking path that includes recovered errors.
        if (this.isBackTracking()) return false;
        // if we can perform inRule recovery (single token insertion or deletion) we always prefer that recovery algorithm
        // because if it works, it makes the least amount of changes to the input stream (greedy algorithm)
        //noinspection RedundantIfStatementJS
        if (this.canPerformInRuleRecovery(expectTokAfterLastMatch, this.getFollowsForInRuleRecovery(expectTokAfterLastMatch, nextTokIdx))) return false;
        return true;
    };
    // Error Recovery functionality
    Recoverable.prototype.getFollowsForInRuleRecovery = function(tokType, tokIdxInRule) {
        var grammarPath = this.getCurrentGrammarPath(tokType, tokIdxInRule);
        var follows = this.getNextPossibleTokenTypes(grammarPath);
        return follows;
    };
    Recoverable.prototype.tryInRuleRecovery = function(expectedTokType, follows) {
        if (this.canRecoverWithSingleTokenInsertion(expectedTokType, follows)) {
            var tokToInsert = this.getTokenToInsert(expectedTokType);
            return tokToInsert;
        }
        if (this.canRecoverWithSingleTokenDeletion(expectedTokType)) {
            var nextTok = this.SKIP_TOKEN();
            this.consumeToken();
            return nextTok;
        }
        throw new InRuleRecoveryException("sad sad panda");
    };
    Recoverable.prototype.canPerformInRuleRecovery = function(expectedToken, follows) {
        return this.canRecoverWithSingleTokenInsertion(expectedToken, follows) || this.canRecoverWithSingleTokenDeletion(expectedToken);
    };
    Recoverable.prototype.canRecoverWithSingleTokenInsertion = function(expectedTokType, follows) {
        var _this = this;
        if (!this.canTokenTypeBeInsertedInRecovery(expectedTokType)) return false;
        // must know the possible following tokens to perform single token insertion
        if ((0, isEmpty_1.default)(follows)) return false;
        var mismatchedTok = this.LA(1);
        var isMisMatchedTokInFollows = (0, find_1.default)(follows, function(possibleFollowsTokType) {
            return _this.tokenMatcher(mismatchedTok, possibleFollowsTokType);
        }) !== undefined;
        return isMisMatchedTokInFollows;
    };
    Recoverable.prototype.canRecoverWithSingleTokenDeletion = function(expectedTokType) {
        if (!this.canTokenTypeBeDeletedInRecovery(expectedTokType)) return false;
        var isNextTokenWhatIsExpected = this.tokenMatcher(this.LA(2), expectedTokType);
        return isNextTokenWhatIsExpected;
    };
    Recoverable.prototype.isInCurrentRuleReSyncSet = function(tokenTypeIdx) {
        var followKey = this.getCurrFollowKey();
        var currentRuleReSyncSet = this.getFollowSetFromFollowKey(followKey);
        return (0, includes_1.default)(currentRuleReSyncSet, tokenTypeIdx);
    };
    Recoverable.prototype.findReSyncTokenType = function() {
        var allPossibleReSyncTokTypes = this.flattenFollowSet();
        // this loop will always terminate as EOF is always in the follow stack and also always (virtually) in the input
        var nextToken = this.LA(1);
        var k = 2;
        while(true){
            var foundMatch = (0, find_1.default)(allPossibleReSyncTokTypes, function(resyncTokType) {
                var canMatch = (0, tokens_public_1.tokenMatcher)(nextToken, resyncTokType);
                return canMatch;
            });
            if (foundMatch !== undefined) return foundMatch;
            nextToken = this.LA(k);
            k++;
        }
    };
    Recoverable.prototype.getCurrFollowKey = function() {
        // the length is at least one as we always add the ruleName to the stack before invoking the rule.
        if (this.RULE_STACK.length === 1) return exports.EOF_FOLLOW_KEY;
        var currRuleShortName = this.getLastExplicitRuleShortName();
        var currRuleIdx = this.getLastExplicitRuleOccurrenceIndex();
        var prevRuleShortName = this.getPreviousExplicitRuleShortName();
        return {
            ruleName: this.shortRuleNameToFullName(currRuleShortName),
            idxInCallingRule: currRuleIdx,
            inRule: this.shortRuleNameToFullName(prevRuleShortName)
        };
    };
    Recoverable.prototype.buildFullFollowKeyStack = function() {
        var _this = this;
        var explicitRuleStack = this.RULE_STACK;
        var explicitOccurrenceStack = this.RULE_OCCURRENCE_STACK;
        return (0, map_1.default)(explicitRuleStack, function(ruleName, idx) {
            if (idx === 0) return exports.EOF_FOLLOW_KEY;
            return {
                ruleName: _this.shortRuleNameToFullName(ruleName),
                idxInCallingRule: explicitOccurrenceStack[idx],
                inRule: _this.shortRuleNameToFullName(explicitRuleStack[idx - 1])
            };
        });
    };
    Recoverable.prototype.flattenFollowSet = function() {
        var _this = this;
        var followStack = (0, map_1.default)(this.buildFullFollowKeyStack(), function(currKey) {
            return _this.getFollowSetFromFollowKey(currKey);
        });
        return (0, flatten_1.default)(followStack);
    };
    Recoverable.prototype.getFollowSetFromFollowKey = function(followKey) {
        if (followKey === exports.EOF_FOLLOW_KEY) return [
            tokens_public_1.EOF
        ];
        var followName = followKey.ruleName + followKey.idxInCallingRule + constants_1.IN + followKey.inRule;
        return this.resyncFollows[followName];
    };
    // It does not make any sense to include a virtual EOF token in the list of resynced tokens
    // as EOF does not really exist and thus does not contain any useful information (line/column numbers)
    Recoverable.prototype.addToResyncTokens = function(token, resyncTokens) {
        if (!this.tokenMatcher(token, tokens_public_1.EOF)) resyncTokens.push(token);
        return resyncTokens;
    };
    Recoverable.prototype.reSyncTo = function(tokType) {
        var resyncedTokens = [];
        var nextTok = this.LA(1);
        while(this.tokenMatcher(nextTok, tokType) === false){
            nextTok = this.SKIP_TOKEN();
            this.addToResyncTokens(nextTok, resyncedTokens);
        }
        // the last token is not part of the error.
        return (0, dropRight_1.default)(resyncedTokens);
    };
    Recoverable.prototype.attemptInRepetitionRecovery = function(prodFunc, args, lookaheadFunc, dslMethodIdx, prodOccurrence, nextToksWalker, notStuck) {
    // by default this is a NO-OP
    // The actual implementation is with the function(not method) below
    };
    Recoverable.prototype.getCurrentGrammarPath = function(tokType, tokIdxInRule) {
        var pathRuleStack = this.getHumanReadableRuleStack();
        var pathOccurrenceStack = (0, clone_1.default)(this.RULE_OCCURRENCE_STACK);
        var grammarPath = {
            ruleStack: pathRuleStack,
            occurrenceStack: pathOccurrenceStack,
            lastTok: tokType,
            lastTokOccurrence: tokIdxInRule
        };
        return grammarPath;
    };
    Recoverable.prototype.getHumanReadableRuleStack = function() {
        var _this = this;
        return (0, map_1.default)(this.RULE_STACK, function(currShortName) {
            return _this.shortRuleNameToFullName(currShortName);
        });
    };
    return Recoverable;
}();
exports.Recoverable = Recoverable;
function attemptInRepetitionRecovery(prodFunc, args, lookaheadFunc, dslMethodIdx, prodOccurrence, nextToksWalker, notStuck) {
    var key = this.getKeyForAutomaticLookahead(dslMethodIdx, prodOccurrence);
    var firstAfterRepInfo = this.firstAfterRepMap[key];
    if (firstAfterRepInfo === undefined) {
        var currRuleName = this.getCurrRuleFullName();
        var ruleGrammar = this.getGAstProductions()[currRuleName];
        var walker = new nextToksWalker(ruleGrammar, prodOccurrence);
        firstAfterRepInfo = walker.startWalking();
        this.firstAfterRepMap[key] = firstAfterRepInfo;
    }
    var expectTokAfterLastMatch = firstAfterRepInfo.token;
    var nextTokIdx = firstAfterRepInfo.occurrence;
    var isEndOfRule = firstAfterRepInfo.isEndOfRule;
    // special edge case of a TOP most repetition after which the input should END.
    // this will force an attempt for inRule recovery in that scenario.
    if (this.RULE_STACK.length === 1 && isEndOfRule && expectTokAfterLastMatch === undefined) {
        expectTokAfterLastMatch = tokens_public_1.EOF;
        nextTokIdx = 1;
    }
    // We don't have anything to re-sync to...
    // this condition was extracted from `shouldInRepetitionRecoveryBeTried` to act as a type-guard
    if (expectTokAfterLastMatch === undefined || nextTokIdx === undefined) return;
    if (this.shouldInRepetitionRecoveryBeTried(expectTokAfterLastMatch, nextTokIdx, notStuck)) // TODO: performance optimization: instead of passing the original args here, we modify
    // the args param (or create a new one) and make sure the lookahead func is explicitly provided
    // to avoid searching the cache for it once more.
    this.tryInRepetitionRecovery(prodFunc, args, lookaheadFunc, expectTokAfterLastMatch);
}
exports.attemptInRepetitionRecovery = attemptInRepetitionRecovery;

},{"bc2d84135cd3bc6c":"gJ9lp","634ab89a2b4b238c":"HRoQ8","bd8ca6de2a8d3f2b":"3tn7S","4c3be286291b6878":"g3ybb","6b7dbbaa25620c9":"68KdA","1f2a0d903846e97":"43jpw","693b6152db330b5":"j5BJo","c2f7974d9a3fa7f":"l3Nmg","d230358d15a68fe8":"dIp0d","3ecea5127c8d1fbb":"m83wd","ef22df3956e26d12":"66C8j","f5d3d1aad8da617e":"hzING"}],"m83wd":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EarlyExitException = exports.NotAllInputParsedException = exports.NoViableAltException = exports.MismatchedTokenException = exports.isRecognitionException = void 0;
var includes_1 = __importDefault(require("3eec26b848548958"));
var MISMATCHED_TOKEN_EXCEPTION = "MismatchedTokenException";
var NO_VIABLE_ALT_EXCEPTION = "NoViableAltException";
var EARLY_EXIT_EXCEPTION = "EarlyExitException";
var NOT_ALL_INPUT_PARSED_EXCEPTION = "NotAllInputParsedException";
var RECOGNITION_EXCEPTION_NAMES = [
    MISMATCHED_TOKEN_EXCEPTION,
    NO_VIABLE_ALT_EXCEPTION,
    EARLY_EXIT_EXCEPTION,
    NOT_ALL_INPUT_PARSED_EXCEPTION
];
Object.freeze(RECOGNITION_EXCEPTION_NAMES);
// hacks to bypass no support for custom Errors in javascript/typescript
function isRecognitionException(error) {
    // can't do instanceof on hacked custom js exceptions
    return (0, includes_1.default)(RECOGNITION_EXCEPTION_NAMES, error.name);
}
exports.isRecognitionException = isRecognitionException;
var RecognitionException = /** @class */ function(_super) {
    __extends(RecognitionException, _super);
    function RecognitionException(message, token) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, message) || this;
        _this.token = token;
        _this.resyncedTokens = [];
        // fix prototype chain when typescript target is ES5
        Object.setPrototypeOf(_this, _newTarget.prototype);
        /* istanbul ignore next - V8 workaround to remove constructor from stacktrace when typescript target is ES5 */ if (Error.captureStackTrace) Error.captureStackTrace(_this, _this.constructor);
        return _this;
    }
    return RecognitionException;
}(Error);
var MismatchedTokenException = /** @class */ function(_super) {
    __extends(MismatchedTokenException, _super);
    function MismatchedTokenException(message, token, previousToken) {
        var _this = _super.call(this, message, token) || this;
        _this.previousToken = previousToken;
        _this.name = MISMATCHED_TOKEN_EXCEPTION;
        return _this;
    }
    return MismatchedTokenException;
}(RecognitionException);
exports.MismatchedTokenException = MismatchedTokenException;
var NoViableAltException = /** @class */ function(_super) {
    __extends(NoViableAltException, _super);
    function NoViableAltException(message, token, previousToken) {
        var _this = _super.call(this, message, token) || this;
        _this.previousToken = previousToken;
        _this.name = NO_VIABLE_ALT_EXCEPTION;
        return _this;
    }
    return NoViableAltException;
}(RecognitionException);
exports.NoViableAltException = NoViableAltException;
var NotAllInputParsedException = /** @class */ function(_super) {
    __extends(NotAllInputParsedException, _super);
    function NotAllInputParsedException(message, token) {
        var _this = _super.call(this, message, token) || this;
        _this.name = NOT_ALL_INPUT_PARSED_EXCEPTION;
        return _this;
    }
    return NotAllInputParsedException;
}(RecognitionException);
exports.NotAllInputParsedException = NotAllInputParsedException;
var EarlyExitException = /** @class */ function(_super) {
    __extends(EarlyExitException, _super);
    function EarlyExitException(message, token, previousToken) {
        var _this = _super.call(this, message, token) || this;
        _this.previousToken = previousToken;
        _this.name = EARLY_EXIT_EXCEPTION;
        return _this;
    }
    return EarlyExitException;
}(RecognitionException);
exports.EarlyExitException = EarlyExitException;

},{"3eec26b848548958":"l3Nmg"}],"e63ba":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.collectMethods = exports.LooksAhead = void 0;
var forEach_1 = __importDefault(require("8579ecd45d911ffb"));
var has_1 = __importDefault(require("e9ede71ff5c6fd07"));
var parser_1 = require("d648e4f02a2d3eb7");
var keys_1 = require("96bccf2b385a18dc");
var gast_1 = require("52bac9917360f934");
var gast_2 = require("52bac9917360f934");
var llk_lookahead_1 = require("6404974d5b83b49c");
/**
 * Trait responsible for the lookahead related utilities and optimizations.
 */ var LooksAhead = /** @class */ function() {
    function LooksAhead() {}
    LooksAhead.prototype.initLooksAhead = function(config) {
        this.dynamicTokensEnabled = (0, has_1.default)(config, "dynamicTokensEnabled") ? config.dynamicTokensEnabled // assumes end user provides the correct config value/type
         : parser_1.DEFAULT_PARSER_CONFIG.dynamicTokensEnabled;
        this.maxLookahead = (0, has_1.default)(config, "maxLookahead") ? config.maxLookahead // assumes end user provides the correct config value/type
         : parser_1.DEFAULT_PARSER_CONFIG.maxLookahead;
        this.lookaheadStrategy = (0, has_1.default)(config, "lookaheadStrategy") ? config.lookaheadStrategy // assumes end user provides the correct config value/type
         : new llk_lookahead_1.LLkLookaheadStrategy({
            maxLookahead: this.maxLookahead
        });
        this.lookAheadFuncsCache = new Map();
    };
    LooksAhead.prototype.preComputeLookaheadFunctions = function(rules) {
        var _this = this;
        (0, forEach_1.default)(rules, function(currRule) {
            _this.TRACE_INIT("".concat(currRule.name, " Rule Lookahead"), function() {
                var _a = collectMethods(currRule), alternation = _a.alternation, repetition = _a.repetition, option = _a.option, repetitionMandatory = _a.repetitionMandatory, repetitionMandatoryWithSeparator = _a.repetitionMandatoryWithSeparator, repetitionWithSeparator = _a.repetitionWithSeparator;
                (0, forEach_1.default)(alternation, function(currProd) {
                    var prodIdx = currProd.idx === 0 ? "" : currProd.idx;
                    _this.TRACE_INIT("".concat((0, gast_2.getProductionDslName)(currProd)).concat(prodIdx), function() {
                        var laFunc = _this.lookaheadStrategy.buildLookaheadForAlternation({
                            prodOccurrence: currProd.idx,
                            rule: currRule,
                            maxLookahead: currProd.maxLookahead || _this.maxLookahead,
                            hasPredicates: currProd.hasPredicates,
                            dynamicTokensEnabled: _this.dynamicTokensEnabled
                        });
                        var key = (0, keys_1.getKeyForAutomaticLookahead)(_this.fullRuleNameToShort[currRule.name], keys_1.OR_IDX, currProd.idx);
                        _this.setLaFuncCache(key, laFunc);
                    });
                });
                (0, forEach_1.default)(repetition, function(currProd) {
                    _this.computeLookaheadFunc(currRule, currProd.idx, keys_1.MANY_IDX, "Repetition", currProd.maxLookahead, (0, gast_2.getProductionDslName)(currProd));
                });
                (0, forEach_1.default)(option, function(currProd) {
                    _this.computeLookaheadFunc(currRule, currProd.idx, keys_1.OPTION_IDX, "Option", currProd.maxLookahead, (0, gast_2.getProductionDslName)(currProd));
                });
                (0, forEach_1.default)(repetitionMandatory, function(currProd) {
                    _this.computeLookaheadFunc(currRule, currProd.idx, keys_1.AT_LEAST_ONE_IDX, "RepetitionMandatory", currProd.maxLookahead, (0, gast_2.getProductionDslName)(currProd));
                });
                (0, forEach_1.default)(repetitionMandatoryWithSeparator, function(currProd) {
                    _this.computeLookaheadFunc(currRule, currProd.idx, keys_1.AT_LEAST_ONE_SEP_IDX, "RepetitionMandatoryWithSeparator", currProd.maxLookahead, (0, gast_2.getProductionDslName)(currProd));
                });
                (0, forEach_1.default)(repetitionWithSeparator, function(currProd) {
                    _this.computeLookaheadFunc(currRule, currProd.idx, keys_1.MANY_SEP_IDX, "RepetitionWithSeparator", currProd.maxLookahead, (0, gast_2.getProductionDslName)(currProd));
                });
            });
        });
    };
    LooksAhead.prototype.computeLookaheadFunc = function(rule, prodOccurrence, prodKey, prodType, prodMaxLookahead, dslMethodName) {
        var _this = this;
        this.TRACE_INIT("".concat(dslMethodName).concat(prodOccurrence === 0 ? "" : prodOccurrence), function() {
            var laFunc = _this.lookaheadStrategy.buildLookaheadForOptional({
                prodOccurrence: prodOccurrence,
                rule: rule,
                maxLookahead: prodMaxLookahead || _this.maxLookahead,
                dynamicTokensEnabled: _this.dynamicTokensEnabled,
                prodType: prodType
            });
            var key = (0, keys_1.getKeyForAutomaticLookahead)(_this.fullRuleNameToShort[rule.name], prodKey, prodOccurrence);
            _this.setLaFuncCache(key, laFunc);
        });
    };
    // this actually returns a number, but it is always used as a string (object prop key)
    LooksAhead.prototype.getKeyForAutomaticLookahead = function(dslMethodIdx, occurrence) {
        var currRuleShortName = this.getLastExplicitRuleShortName();
        return (0, keys_1.getKeyForAutomaticLookahead)(currRuleShortName, dslMethodIdx, occurrence);
    };
    LooksAhead.prototype.getLaFuncFromCache = function(key) {
        return this.lookAheadFuncsCache.get(key);
    };
    /* istanbul ignore next */ LooksAhead.prototype.setLaFuncCache = function(key, value) {
        this.lookAheadFuncsCache.set(key, value);
    };
    return LooksAhead;
}();
exports.LooksAhead = LooksAhead;
var DslMethodsCollectorVisitor = /** @class */ function(_super) {
    __extends(DslMethodsCollectorVisitor, _super);
    function DslMethodsCollectorVisitor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dslMethods = {
            option: [],
            alternation: [],
            repetition: [],
            repetitionWithSeparator: [],
            repetitionMandatory: [],
            repetitionMandatoryWithSeparator: []
        };
        return _this;
    }
    DslMethodsCollectorVisitor.prototype.reset = function() {
        this.dslMethods = {
            option: [],
            alternation: [],
            repetition: [],
            repetitionWithSeparator: [],
            repetitionMandatory: [],
            repetitionMandatoryWithSeparator: []
        };
    };
    DslMethodsCollectorVisitor.prototype.visitOption = function(option) {
        this.dslMethods.option.push(option);
    };
    DslMethodsCollectorVisitor.prototype.visitRepetitionWithSeparator = function(manySep) {
        this.dslMethods.repetitionWithSeparator.push(manySep);
    };
    DslMethodsCollectorVisitor.prototype.visitRepetitionMandatory = function(atLeastOne) {
        this.dslMethods.repetitionMandatory.push(atLeastOne);
    };
    DslMethodsCollectorVisitor.prototype.visitRepetitionMandatoryWithSeparator = function(atLeastOneSep) {
        this.dslMethods.repetitionMandatoryWithSeparator.push(atLeastOneSep);
    };
    DslMethodsCollectorVisitor.prototype.visitRepetition = function(many) {
        this.dslMethods.repetition.push(many);
    };
    DslMethodsCollectorVisitor.prototype.visitAlternation = function(or) {
        this.dslMethods.alternation.push(or);
    };
    return DslMethodsCollectorVisitor;
}(gast_1.GAstVisitor);
var collectorVisitor = new DslMethodsCollectorVisitor();
function collectMethods(rule) {
    collectorVisitor.reset();
    rule.accept(collectorVisitor);
    var dslMethods = collectorVisitor.dslMethods;
    // avoid uncleaned references
    collectorVisitor.reset();
    return dslMethods;
}
exports.collectMethods = collectMethods;

},{"8579ecd45d911ffb":"cQbs0","e9ede71ff5c6fd07":"j5BJo","d648e4f02a2d3eb7":"hzING","96bccf2b385a18dc":"gpqCz","52bac9917360f934":"91AYQ","6404974d5b83b49c":"aWq0A"}],"gpqCz":[function(require,module,exports) {
"use strict";
// Lookahead keys are 32Bit integers in the form
// TTTTTTTT-ZZZZZZZZZZZZ-YYYY-XXXXXXXX
// XXXX -> Occurrence Index bitmap.
// YYYY -> DSL Method Type bitmap.
// ZZZZZZZZZZZZZZZ -> Rule short Index bitmap.
// TTTTTTTTT -> alternation alternative index bitmap
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getKeyForAutomaticLookahead = exports.AT_LEAST_ONE_SEP_IDX = exports.MANY_SEP_IDX = exports.AT_LEAST_ONE_IDX = exports.MANY_IDX = exports.OPTION_IDX = exports.OR_IDX = exports.BITS_FOR_ALT_IDX = exports.BITS_FOR_RULE_IDX = exports.BITS_FOR_OCCURRENCE_IDX = exports.BITS_FOR_METHOD_TYPE = void 0;
exports.BITS_FOR_METHOD_TYPE = 4;
exports.BITS_FOR_OCCURRENCE_IDX = 8;
exports.BITS_FOR_RULE_IDX = 12;
// TODO: validation, this means that there may at most 2^8 --> 256 alternatives for an alternation.
exports.BITS_FOR_ALT_IDX = 8;
// short string used as part of mapping keys.
// being short improves the performance when composing KEYS for maps out of these
// The 5 - 8 bits (16 possible values, are reserved for the DSL method indices)
exports.OR_IDX = 1 << exports.BITS_FOR_OCCURRENCE_IDX;
exports.OPTION_IDX = 2 << exports.BITS_FOR_OCCURRENCE_IDX;
exports.MANY_IDX = 3 << exports.BITS_FOR_OCCURRENCE_IDX;
exports.AT_LEAST_ONE_IDX = 4 << exports.BITS_FOR_OCCURRENCE_IDX;
exports.MANY_SEP_IDX = 5 << exports.BITS_FOR_OCCURRENCE_IDX;
exports.AT_LEAST_ONE_SEP_IDX = 6 << exports.BITS_FOR_OCCURRENCE_IDX;
// this actually returns a number, but it is always used as a string (object prop key)
function getKeyForAutomaticLookahead(ruleIdx, dslMethodIdx, occurrence) {
    return occurrence | dslMethodIdx | ruleIdx;
}
exports.getKeyForAutomaticLookahead = getKeyForAutomaticLookahead;
var BITS_START_FOR_ALT_IDX = 32 - exports.BITS_FOR_ALT_IDX;

},{}],"aWq0A":[function(require,module,exports) {
"use strict";
var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LLkLookaheadStrategy = void 0;
var flatMap_1 = __importDefault(require("6cdf1f0a50add0a"));
var isEmpty_1 = __importDefault(require("6d048170cc44afd0"));
var errors_public_1 = require("3af7571edc8a6158");
var parser_1 = require("cc4d313a44b5384a");
var checks_1 = require("647cc9271123386b");
var lookahead_1 = require("e07f3572a27c2845");
var LLkLookaheadStrategy = /** @class */ function() {
    function LLkLookaheadStrategy(options) {
        var _a;
        this.maxLookahead = (_a = options === null || options === void 0 ? void 0 : options.maxLookahead) !== null && _a !== void 0 ? _a : parser_1.DEFAULT_PARSER_CONFIG.maxLookahead;
    }
    LLkLookaheadStrategy.prototype.validate = function(options) {
        var leftRecursionErrors = this.validateNoLeftRecursion(options.rules);
        if ((0, isEmpty_1.default)(leftRecursionErrors)) {
            var emptyAltErrors = this.validateEmptyOrAlternatives(options.rules);
            var ambiguousAltsErrors = this.validateAmbiguousAlternationAlternatives(options.rules, this.maxLookahead);
            var emptyRepetitionErrors = this.validateSomeNonEmptyLookaheadPath(options.rules, this.maxLookahead);
            var allErrors = __spreadArray(__spreadArray(__spreadArray(__spreadArray([], leftRecursionErrors, true), emptyAltErrors, true), ambiguousAltsErrors, true), emptyRepetitionErrors, true);
            return allErrors;
        }
        return leftRecursionErrors;
    };
    LLkLookaheadStrategy.prototype.validateNoLeftRecursion = function(rules) {
        return (0, flatMap_1.default)(rules, function(currTopRule) {
            return (0, checks_1.validateNoLeftRecursion)(currTopRule, currTopRule, errors_public_1.defaultGrammarValidatorErrorProvider);
        });
    };
    LLkLookaheadStrategy.prototype.validateEmptyOrAlternatives = function(rules) {
        return (0, flatMap_1.default)(rules, function(currTopRule) {
            return (0, checks_1.validateEmptyOrAlternative)(currTopRule, errors_public_1.defaultGrammarValidatorErrorProvider);
        });
    };
    LLkLookaheadStrategy.prototype.validateAmbiguousAlternationAlternatives = function(rules, maxLookahead) {
        return (0, flatMap_1.default)(rules, function(currTopRule) {
            return (0, checks_1.validateAmbiguousAlternationAlternatives)(currTopRule, maxLookahead, errors_public_1.defaultGrammarValidatorErrorProvider);
        });
    };
    LLkLookaheadStrategy.prototype.validateSomeNonEmptyLookaheadPath = function(rules, maxLookahead) {
        return (0, checks_1.validateSomeNonEmptyLookaheadPath)(rules, maxLookahead, errors_public_1.defaultGrammarValidatorErrorProvider);
    };
    LLkLookaheadStrategy.prototype.buildLookaheadForAlternation = function(options) {
        return (0, lookahead_1.buildLookaheadFuncForOr)(options.prodOccurrence, options.rule, options.maxLookahead, options.hasPredicates, options.dynamicTokensEnabled, lookahead_1.buildAlternativesLookAheadFunc);
    };
    LLkLookaheadStrategy.prototype.buildLookaheadForOptional = function(options) {
        return (0, lookahead_1.buildLookaheadFuncForOptionalProd)(options.prodOccurrence, options.rule, options.maxLookahead, options.dynamicTokensEnabled, (0, lookahead_1.getProdType)(options.prodType), lookahead_1.buildSingleAlternativeLookaheadFunction);
    };
    return LLkLookaheadStrategy;
}();
exports.LLkLookaheadStrategy = LLkLookaheadStrategy;

},{"6cdf1f0a50add0a":"kshi8","6d048170cc44afd0":"HRoQ8","3af7571edc8a6158":"7elDj","cc4d313a44b5384a":"hzING","647cc9271123386b":"4teh8","e07f3572a27c2845":"gIfFn"}],"iWmnt":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TreeBuilder = void 0;
var cst_1 = require("c5eeaf5396a4059f");
var noop_1 = __importDefault(require("a8ae3d4ab185b07e"));
var has_1 = __importDefault(require("99449f8c289e37e6"));
var keys_1 = __importDefault(require("8d1478536ffb089b"));
var isUndefined_1 = __importDefault(require("662b9bac72e126a"));
var cst_visitor_1 = require("78d21239827739b9");
var parser_1 = require("d958ee9181f5c8ad");
/**
 * This trait is responsible for the CST building logic.
 */ var TreeBuilder = /** @class */ function() {
    function TreeBuilder() {}
    TreeBuilder.prototype.initTreeBuilder = function(config) {
        this.CST_STACK = [];
        // outputCst is no longer exposed/defined in the pubic API
        this.outputCst = config.outputCst;
        this.nodeLocationTracking = (0, has_1.default)(config, "nodeLocationTracking") ? config.nodeLocationTracking // assumes end user provides the correct config value/type
         : parser_1.DEFAULT_PARSER_CONFIG.nodeLocationTracking;
        if (!this.outputCst) {
            this.cstInvocationStateUpdate = noop_1.default;
            this.cstFinallyStateUpdate = noop_1.default;
            this.cstPostTerminal = noop_1.default;
            this.cstPostNonTerminal = noop_1.default;
            this.cstPostRule = noop_1.default;
        } else {
            if (/full/i.test(this.nodeLocationTracking)) {
                if (this.recoveryEnabled) {
                    this.setNodeLocationFromToken = cst_1.setNodeLocationFull;
                    this.setNodeLocationFromNode = cst_1.setNodeLocationFull;
                    this.cstPostRule = noop_1.default;
                    this.setInitialNodeLocation = this.setInitialNodeLocationFullRecovery;
                } else {
                    this.setNodeLocationFromToken = noop_1.default;
                    this.setNodeLocationFromNode = noop_1.default;
                    this.cstPostRule = this.cstPostRuleFull;
                    this.setInitialNodeLocation = this.setInitialNodeLocationFullRegular;
                }
            } else if (/onlyOffset/i.test(this.nodeLocationTracking)) {
                if (this.recoveryEnabled) {
                    this.setNodeLocationFromToken = cst_1.setNodeLocationOnlyOffset;
                    this.setNodeLocationFromNode = cst_1.setNodeLocationOnlyOffset;
                    this.cstPostRule = noop_1.default;
                    this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRecovery;
                } else {
                    this.setNodeLocationFromToken = noop_1.default;
                    this.setNodeLocationFromNode = noop_1.default;
                    this.cstPostRule = this.cstPostRuleOnlyOffset;
                    this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRegular;
                }
            } else if (/none/i.test(this.nodeLocationTracking)) {
                this.setNodeLocationFromToken = noop_1.default;
                this.setNodeLocationFromNode = noop_1.default;
                this.cstPostRule = noop_1.default;
                this.setInitialNodeLocation = noop_1.default;
            } else throw Error('Invalid <nodeLocationTracking> config option: "'.concat(config.nodeLocationTracking, '"'));
        }
    };
    TreeBuilder.prototype.setInitialNodeLocationOnlyOffsetRecovery = function(cstNode) {
        cstNode.location = {
            startOffset: NaN,
            endOffset: NaN
        };
    };
    TreeBuilder.prototype.setInitialNodeLocationOnlyOffsetRegular = function(cstNode) {
        cstNode.location = {
            // without error recovery the starting Location of a new CstNode is guaranteed
            // To be the next Token's startOffset (for valid inputs).
            // For invalid inputs there won't be any CSTOutput so this potential
            // inaccuracy does not matter
            startOffset: this.LA(1).startOffset,
            endOffset: NaN
        };
    };
    TreeBuilder.prototype.setInitialNodeLocationFullRecovery = function(cstNode) {
        cstNode.location = {
            startOffset: NaN,
            startLine: NaN,
            startColumn: NaN,
            endOffset: NaN,
            endLine: NaN,
            endColumn: NaN
        };
    };
    /**
       *  @see setInitialNodeLocationOnlyOffsetRegular for explanation why this work
  
       * @param cstNode
       */ TreeBuilder.prototype.setInitialNodeLocationFullRegular = function(cstNode) {
        var nextToken = this.LA(1);
        cstNode.location = {
            startOffset: nextToken.startOffset,
            startLine: nextToken.startLine,
            startColumn: nextToken.startColumn,
            endOffset: NaN,
            endLine: NaN,
            endColumn: NaN
        };
    };
    TreeBuilder.prototype.cstInvocationStateUpdate = function(fullRuleName) {
        var cstNode = {
            name: fullRuleName,
            children: Object.create(null)
        };
        this.setInitialNodeLocation(cstNode);
        this.CST_STACK.push(cstNode);
    };
    TreeBuilder.prototype.cstFinallyStateUpdate = function() {
        this.CST_STACK.pop();
    };
    TreeBuilder.prototype.cstPostRuleFull = function(ruleCstNode) {
        // casts to `required<CstNodeLocation>` are safe because `cstPostRuleFull` should only be invoked when full location is enabled
        var prevToken = this.LA(0);
        var loc = ruleCstNode.location;
        // If this condition is true it means we consumed at least one Token
        // In this CstNode.
        if (loc.startOffset <= prevToken.startOffset === true) {
            loc.endOffset = prevToken.endOffset;
            loc.endLine = prevToken.endLine;
            loc.endColumn = prevToken.endColumn;
        } else {
            loc.startOffset = NaN;
            loc.startLine = NaN;
            loc.startColumn = NaN;
        }
    };
    TreeBuilder.prototype.cstPostRuleOnlyOffset = function(ruleCstNode) {
        var prevToken = this.LA(0);
        // `location' is not null because `cstPostRuleOnlyOffset` will only be invoked when location tracking is enabled.
        var loc = ruleCstNode.location;
        // If this condition is true it means we consumed at least one Token
        // In this CstNode.
        if (loc.startOffset <= prevToken.startOffset === true) loc.endOffset = prevToken.endOffset;
        else loc.startOffset = NaN;
    };
    TreeBuilder.prototype.cstPostTerminal = function(key, consumedToken) {
        var rootCst = this.CST_STACK[this.CST_STACK.length - 1];
        (0, cst_1.addTerminalToCst)(rootCst, consumedToken, key);
        // This is only used when **both** error recovery and CST Output are enabled.
        this.setNodeLocationFromToken(rootCst.location, consumedToken);
    };
    TreeBuilder.prototype.cstPostNonTerminal = function(ruleCstResult, ruleName) {
        var preCstNode = this.CST_STACK[this.CST_STACK.length - 1];
        (0, cst_1.addNoneTerminalToCst)(preCstNode, ruleName, ruleCstResult);
        // This is only used when **both** error recovery and CST Output are enabled.
        this.setNodeLocationFromNode(preCstNode.location, ruleCstResult.location);
    };
    TreeBuilder.prototype.getBaseCstVisitorConstructor = function() {
        if ((0, isUndefined_1.default)(this.baseCstVisitorConstructor)) {
            var newBaseCstVisitorConstructor = (0, cst_visitor_1.createBaseSemanticVisitorConstructor)(this.className, (0, keys_1.default)(this.gastProductionsCache));
            this.baseCstVisitorConstructor = newBaseCstVisitorConstructor;
            return newBaseCstVisitorConstructor;
        }
        return this.baseCstVisitorConstructor;
    };
    TreeBuilder.prototype.getBaseCstVisitorConstructorWithDefaults = function() {
        if ((0, isUndefined_1.default)(this.baseCstVisitorWithDefaultsConstructor)) {
            var newConstructor = (0, cst_visitor_1.createBaseVisitorConstructorWithDefaults)(this.className, (0, keys_1.default)(this.gastProductionsCache), this.getBaseCstVisitorConstructor());
            this.baseCstVisitorWithDefaultsConstructor = newConstructor;
            return newConstructor;
        }
        return this.baseCstVisitorWithDefaultsConstructor;
    };
    TreeBuilder.prototype.getLastExplicitRuleShortName = function() {
        var ruleStack = this.RULE_STACK;
        return ruleStack[ruleStack.length - 1];
    };
    TreeBuilder.prototype.getPreviousExplicitRuleShortName = function() {
        var ruleStack = this.RULE_STACK;
        return ruleStack[ruleStack.length - 2];
    };
    TreeBuilder.prototype.getLastExplicitRuleOccurrenceIndex = function() {
        var occurrenceStack = this.RULE_OCCURRENCE_STACK;
        return occurrenceStack[occurrenceStack.length - 1];
    };
    return TreeBuilder;
}();
exports.TreeBuilder = TreeBuilder;

},{"c5eeaf5396a4059f":"gA9ls","a8ae3d4ab185b07e":"8MwRz","99449f8c289e37e6":"j5BJo","8d1478536ffb089b":"2MKLE","662b9bac72e126a":"hSDL2","78d21239827739b9":"d3VN7","d958ee9181f5c8ad":"hzING"}],"gA9ls":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addNoneTerminalToCst = exports.addTerminalToCst = exports.setNodeLocationFull = exports.setNodeLocationOnlyOffset = void 0;
/**
 * This nodeLocation tracking is not efficient and should only be used
 * when error recovery is enabled or the Token Vector contains virtual Tokens
 * (e.g, Python Indent/Outdent)
 * As it executes the calculation for every single terminal/nonTerminal
 * and does not rely on the fact the token vector is **sorted**
 */ function setNodeLocationOnlyOffset(currNodeLocation, newLocationInfo) {
    // First (valid) update for this cst node
    if (isNaN(currNodeLocation.startOffset) === true) {
        // assumption1: Token location information is either NaN or a valid number
        // assumption2: Token location information is fully valid if it exist
        // (both start/end offsets exist and are numbers).
        currNodeLocation.startOffset = newLocationInfo.startOffset;
        currNodeLocation.endOffset = newLocationInfo.endOffset;
    } else if (currNodeLocation.endOffset < newLocationInfo.endOffset === true) currNodeLocation.endOffset = newLocationInfo.endOffset;
}
exports.setNodeLocationOnlyOffset = setNodeLocationOnlyOffset;
/**
 * This nodeLocation tracking is not efficient and should only be used
 * when error recovery is enabled or the Token Vector contains virtual Tokens
 * (e.g, Python Indent/Outdent)
 * As it executes the calculation for every single terminal/nonTerminal
 * and does not rely on the fact the token vector is **sorted**
 */ function setNodeLocationFull(currNodeLocation, newLocationInfo) {
    // First (valid) update for this cst node
    if (isNaN(currNodeLocation.startOffset) === true) {
        // assumption1: Token location information is either NaN or a valid number
        // assumption2: Token location information is fully valid if it exist
        // (all start/end props exist and are numbers).
        currNodeLocation.startOffset = newLocationInfo.startOffset;
        currNodeLocation.startColumn = newLocationInfo.startColumn;
        currNodeLocation.startLine = newLocationInfo.startLine;
        currNodeLocation.endOffset = newLocationInfo.endOffset;
        currNodeLocation.endColumn = newLocationInfo.endColumn;
        currNodeLocation.endLine = newLocationInfo.endLine;
    } else if (currNodeLocation.endOffset < newLocationInfo.endOffset === true) {
        currNodeLocation.endOffset = newLocationInfo.endOffset;
        currNodeLocation.endColumn = newLocationInfo.endColumn;
        currNodeLocation.endLine = newLocationInfo.endLine;
    }
}
exports.setNodeLocationFull = setNodeLocationFull;
function addTerminalToCst(node, token, tokenTypeName) {
    if (node.children[tokenTypeName] === undefined) node.children[tokenTypeName] = [
        token
    ];
    else node.children[tokenTypeName].push(token);
}
exports.addTerminalToCst = addTerminalToCst;
function addNoneTerminalToCst(node, ruleName, ruleResult) {
    if (node.children[ruleName] === undefined) node.children[ruleName] = [
        ruleResult
    ];
    else node.children[ruleName].push(ruleResult);
}
exports.addNoneTerminalToCst = addNoneTerminalToCst;

},{}],"d3VN7":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.validateMissingCstMethods = exports.validateVisitor = exports.CstVisitorDefinitionError = exports.createBaseVisitorConstructorWithDefaults = exports.createBaseSemanticVisitorConstructor = exports.defaultVisit = void 0;
var isEmpty_1 = __importDefault(require("8d5f23f97360796e"));
var compact_1 = __importDefault(require("9001c182bf70c66e"));
var isArray_1 = __importDefault(require("6dac66db7b4e08ac"));
var map_1 = __importDefault(require("f84ee4fdeea5b4b1"));
var forEach_1 = __importDefault(require("c199946c361a4034"));
var filter_1 = __importDefault(require("1ab45a2541c6fb82"));
var keys_1 = __importDefault(require("25a7826ebedd0900"));
var isFunction_1 = __importDefault(require("f08f5153c6c18db9"));
var isUndefined_1 = __importDefault(require("d0285f8a602b76e8"));
var lang_extensions_1 = require("f6419c828f94438f");
function defaultVisit(ctx, param) {
    var childrenNames = (0, keys_1.default)(ctx);
    var childrenNamesLength = childrenNames.length;
    for(var i = 0; i < childrenNamesLength; i++){
        var currChildName = childrenNames[i];
        var currChildArray = ctx[currChildName];
        var currChildArrayLength = currChildArray.length;
        for(var j = 0; j < currChildArrayLength; j++){
            var currChild = currChildArray[j];
            // distinction between Tokens Children and CstNode children
            if (currChild.tokenTypeIdx === undefined) this[currChild.name](currChild.children, param);
        }
    }
// defaultVisit does not support generic out param
}
exports.defaultVisit = defaultVisit;
function createBaseSemanticVisitorConstructor(grammarName, ruleNames) {
    var derivedConstructor = function() {};
    // can be overwritten according to:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/
    // name?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FFunction%2Fname
    (0, lang_extensions_1.defineNameProp)(derivedConstructor, grammarName + "BaseSemantics");
    var semanticProto = {
        visit: function(cstNode, param) {
            // enables writing more concise visitor methods when CstNode has only a single child
            if ((0, isArray_1.default)(cstNode)) // A CST Node's children dictionary can never have empty arrays as values
            // If a key is defined there will be at least one element in the corresponding value array.
            cstNode = cstNode[0];
            // enables passing optional CstNodes concisely.
            if ((0, isUndefined_1.default)(cstNode)) return undefined;
            return this[cstNode.name](cstNode.children, param);
        },
        validateVisitor: function() {
            var semanticDefinitionErrors = validateVisitor(this, ruleNames);
            if (!(0, isEmpty_1.default)(semanticDefinitionErrors)) {
                var errorMessages = (0, map_1.default)(semanticDefinitionErrors, function(currDefError) {
                    return currDefError.msg;
                });
                throw Error("Errors Detected in CST Visitor <".concat(this.constructor.name, ">:\n	") + "".concat(errorMessages.join("\n\n").replace(/\n/g, "\n	")));
            }
        }
    };
    derivedConstructor.prototype = semanticProto;
    derivedConstructor.prototype.constructor = derivedConstructor;
    derivedConstructor._RULE_NAMES = ruleNames;
    return derivedConstructor;
}
exports.createBaseSemanticVisitorConstructor = createBaseSemanticVisitorConstructor;
function createBaseVisitorConstructorWithDefaults(grammarName, ruleNames, baseConstructor) {
    var derivedConstructor = function() {};
    // can be overwritten according to:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/
    // name?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FFunction%2Fname
    (0, lang_extensions_1.defineNameProp)(derivedConstructor, grammarName + "BaseSemanticsWithDefaults");
    var withDefaultsProto = Object.create(baseConstructor.prototype);
    (0, forEach_1.default)(ruleNames, function(ruleName) {
        withDefaultsProto[ruleName] = defaultVisit;
    });
    derivedConstructor.prototype = withDefaultsProto;
    derivedConstructor.prototype.constructor = derivedConstructor;
    return derivedConstructor;
}
exports.createBaseVisitorConstructorWithDefaults = createBaseVisitorConstructorWithDefaults;
var CstVisitorDefinitionError;
(function(CstVisitorDefinitionError) {
    CstVisitorDefinitionError[CstVisitorDefinitionError["REDUNDANT_METHOD"] = 0] = "REDUNDANT_METHOD";
    CstVisitorDefinitionError[CstVisitorDefinitionError["MISSING_METHOD"] = 1] = "MISSING_METHOD";
})(CstVisitorDefinitionError = exports.CstVisitorDefinitionError || (exports.CstVisitorDefinitionError = {}));
function validateVisitor(visitorInstance, ruleNames) {
    var missingErrors = validateMissingCstMethods(visitorInstance, ruleNames);
    return missingErrors;
}
exports.validateVisitor = validateVisitor;
function validateMissingCstMethods(visitorInstance, ruleNames) {
    var missingRuleNames = (0, filter_1.default)(ruleNames, function(currRuleName) {
        return (0, isFunction_1.default)(visitorInstance[currRuleName]) === false;
    });
    var errors = (0, map_1.default)(missingRuleNames, function(currRuleName) {
        return {
            msg: "Missing visitor method: <".concat(currRuleName, "> on ").concat(visitorInstance.constructor.name, " CST Visitor."),
            type: CstVisitorDefinitionError.MISSING_METHOD,
            methodName: currRuleName
        };
    });
    return (0, compact_1.default)(errors);
}
exports.validateMissingCstMethods = validateMissingCstMethods;

},{"8d5f23f97360796e":"HRoQ8","9001c182bf70c66e":"cuuyZ","6dac66db7b4e08ac":"csCQN","f84ee4fdeea5b4b1":"68KdA","c199946c361a4034":"cQbs0","1ab45a2541c6fb82":"guOld","25a7826ebedd0900":"2MKLE","f08f5153c6c18db9":"kIUl2","d0285f8a602b76e8":"hSDL2","f6419c828f94438f":"cJVzx"}],"cJVzx":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defineNameProp = void 0;
var NAME = "name";
function defineNameProp(obj, nameValue) {
    Object.defineProperty(obj, NAME, {
        enumerable: false,
        configurable: true,
        writable: false,
        value: nameValue
    });
}
exports.defineNameProp = defineNameProp;

},{}],"ll3Gp":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LexerAdapter = void 0;
var parser_1 = require("bda0cf39b1b08062");
/**
 * Trait responsible abstracting over the interaction with Lexer output (Token vector).
 *
 * This could be generalized to support other kinds of lexers, e.g.
 * - Just in Time Lexing / Lexer-Less parsing.
 * - Streaming Lexer.
 */ var LexerAdapter = /** @class */ function() {
    function LexerAdapter() {}
    LexerAdapter.prototype.initLexerAdapter = function() {
        this.tokVector = [];
        this.tokVectorLength = 0;
        this.currIdx = -1;
    };
    Object.defineProperty(LexerAdapter.prototype, "input", {
        get: function() {
            return this.tokVector;
        },
        set: function(newInput) {
            // @ts-ignore - `this parameter` not supported in setters/getters
            //   - https://www.typescriptlang.org/docs/handbook/functions.html#this-parameters
            if (this.selfAnalysisDone !== true) throw Error("Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.");
            // @ts-ignore - `this parameter` not supported in setters/getters
            //   - https://www.typescriptlang.org/docs/handbook/functions.html#this-parameters
            this.reset();
            this.tokVector = newInput;
            this.tokVectorLength = newInput.length;
        },
        enumerable: false,
        configurable: true
    });
    // skips a token and returns the next token
    LexerAdapter.prototype.SKIP_TOKEN = function() {
        if (this.currIdx <= this.tokVector.length - 2) {
            this.consumeToken();
            return this.LA(1);
        } else return parser_1.END_OF_FILE;
    };
    // Lexer (accessing Token vector) related methods which can be overridden to implement lazy lexers
    // or lexers dependent on parser context.
    LexerAdapter.prototype.LA = function(howMuch) {
        var soughtIdx = this.currIdx + howMuch;
        if (soughtIdx < 0 || this.tokVectorLength <= soughtIdx) return parser_1.END_OF_FILE;
        else return this.tokVector[soughtIdx];
    };
    LexerAdapter.prototype.consumeToken = function() {
        this.currIdx++;
    };
    LexerAdapter.prototype.exportLexerState = function() {
        return this.currIdx;
    };
    LexerAdapter.prototype.importLexerState = function(newState) {
        this.currIdx = newState;
    };
    LexerAdapter.prototype.resetLexerState = function() {
        this.currIdx = -1;
    };
    LexerAdapter.prototype.moveToTerminatedState = function() {
        this.currIdx = this.tokVector.length - 1;
    };
    LexerAdapter.prototype.getLexerPosition = function() {
        return this.exportLexerState();
    };
    return LexerAdapter;
}();
exports.LexerAdapter = LexerAdapter;

},{"bda0cf39b1b08062":"hzING"}],"1GnzL":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RecognizerApi = void 0;
var values_1 = __importDefault(require("454e171cbfceb11"));
var includes_1 = __importDefault(require("e1a62c593380e11e"));
var exceptions_public_1 = require("614960881047e54");
var parser_1 = require("4def73f50bd55b25");
var errors_public_1 = require("8b5b14d5134d0d33");
var checks_1 = require("ce022c1b76dee2b1");
var gast_1 = require("5a5dcb19d45fafdf");
/**
 * This trait is responsible for implementing the public API
 * for defining Chevrotain parsers, i.e:
 * - CONSUME
 * - RULE
 * - OPTION
 * - ...
 */ var RecognizerApi = /** @class */ function() {
    function RecognizerApi() {}
    RecognizerApi.prototype.ACTION = function(impl) {
        return impl.call(this);
    };
    RecognizerApi.prototype.consume = function(idx, tokType, options) {
        return this.consumeInternal(tokType, idx, options);
    };
    RecognizerApi.prototype.subrule = function(idx, ruleToCall, options) {
        return this.subruleInternal(ruleToCall, idx, options);
    };
    RecognizerApi.prototype.option = function(idx, actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, idx);
    };
    RecognizerApi.prototype.or = function(idx, altsOrOpts) {
        return this.orInternal(altsOrOpts, idx);
    };
    RecognizerApi.prototype.many = function(idx, actionORMethodDef) {
        return this.manyInternal(idx, actionORMethodDef);
    };
    RecognizerApi.prototype.atLeastOne = function(idx, actionORMethodDef) {
        return this.atLeastOneInternal(idx, actionORMethodDef);
    };
    RecognizerApi.prototype.CONSUME = function(tokType, options) {
        return this.consumeInternal(tokType, 0, options);
    };
    RecognizerApi.prototype.CONSUME1 = function(tokType, options) {
        return this.consumeInternal(tokType, 1, options);
    };
    RecognizerApi.prototype.CONSUME2 = function(tokType, options) {
        return this.consumeInternal(tokType, 2, options);
    };
    RecognizerApi.prototype.CONSUME3 = function(tokType, options) {
        return this.consumeInternal(tokType, 3, options);
    };
    RecognizerApi.prototype.CONSUME4 = function(tokType, options) {
        return this.consumeInternal(tokType, 4, options);
    };
    RecognizerApi.prototype.CONSUME5 = function(tokType, options) {
        return this.consumeInternal(tokType, 5, options);
    };
    RecognizerApi.prototype.CONSUME6 = function(tokType, options) {
        return this.consumeInternal(tokType, 6, options);
    };
    RecognizerApi.prototype.CONSUME7 = function(tokType, options) {
        return this.consumeInternal(tokType, 7, options);
    };
    RecognizerApi.prototype.CONSUME8 = function(tokType, options) {
        return this.consumeInternal(tokType, 8, options);
    };
    RecognizerApi.prototype.CONSUME9 = function(tokType, options) {
        return this.consumeInternal(tokType, 9, options);
    };
    RecognizerApi.prototype.SUBRULE = function(ruleToCall, options) {
        return this.subruleInternal(ruleToCall, 0, options);
    };
    RecognizerApi.prototype.SUBRULE1 = function(ruleToCall, options) {
        return this.subruleInternal(ruleToCall, 1, options);
    };
    RecognizerApi.prototype.SUBRULE2 = function(ruleToCall, options) {
        return this.subruleInternal(ruleToCall, 2, options);
    };
    RecognizerApi.prototype.SUBRULE3 = function(ruleToCall, options) {
        return this.subruleInternal(ruleToCall, 3, options);
    };
    RecognizerApi.prototype.SUBRULE4 = function(ruleToCall, options) {
        return this.subruleInternal(ruleToCall, 4, options);
    };
    RecognizerApi.prototype.SUBRULE5 = function(ruleToCall, options) {
        return this.subruleInternal(ruleToCall, 5, options);
    };
    RecognizerApi.prototype.SUBRULE6 = function(ruleToCall, options) {
        return this.subruleInternal(ruleToCall, 6, options);
    };
    RecognizerApi.prototype.SUBRULE7 = function(ruleToCall, options) {
        return this.subruleInternal(ruleToCall, 7, options);
    };
    RecognizerApi.prototype.SUBRULE8 = function(ruleToCall, options) {
        return this.subruleInternal(ruleToCall, 8, options);
    };
    RecognizerApi.prototype.SUBRULE9 = function(ruleToCall, options) {
        return this.subruleInternal(ruleToCall, 9, options);
    };
    RecognizerApi.prototype.OPTION = function(actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, 0);
    };
    RecognizerApi.prototype.OPTION1 = function(actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, 1);
    };
    RecognizerApi.prototype.OPTION2 = function(actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, 2);
    };
    RecognizerApi.prototype.OPTION3 = function(actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, 3);
    };
    RecognizerApi.prototype.OPTION4 = function(actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, 4);
    };
    RecognizerApi.prototype.OPTION5 = function(actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, 5);
    };
    RecognizerApi.prototype.OPTION6 = function(actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, 6);
    };
    RecognizerApi.prototype.OPTION7 = function(actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, 7);
    };
    RecognizerApi.prototype.OPTION8 = function(actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, 8);
    };
    RecognizerApi.prototype.OPTION9 = function(actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, 9);
    };
    RecognizerApi.prototype.OR = function(altsOrOpts) {
        return this.orInternal(altsOrOpts, 0);
    };
    RecognizerApi.prototype.OR1 = function(altsOrOpts) {
        return this.orInternal(altsOrOpts, 1);
    };
    RecognizerApi.prototype.OR2 = function(altsOrOpts) {
        return this.orInternal(altsOrOpts, 2);
    };
    RecognizerApi.prototype.OR3 = function(altsOrOpts) {
        return this.orInternal(altsOrOpts, 3);
    };
    RecognizerApi.prototype.OR4 = function(altsOrOpts) {
        return this.orInternal(altsOrOpts, 4);
    };
    RecognizerApi.prototype.OR5 = function(altsOrOpts) {
        return this.orInternal(altsOrOpts, 5);
    };
    RecognizerApi.prototype.OR6 = function(altsOrOpts) {
        return this.orInternal(altsOrOpts, 6);
    };
    RecognizerApi.prototype.OR7 = function(altsOrOpts) {
        return this.orInternal(altsOrOpts, 7);
    };
    RecognizerApi.prototype.OR8 = function(altsOrOpts) {
        return this.orInternal(altsOrOpts, 8);
    };
    RecognizerApi.prototype.OR9 = function(altsOrOpts) {
        return this.orInternal(altsOrOpts, 9);
    };
    RecognizerApi.prototype.MANY = function(actionORMethodDef) {
        this.manyInternal(0, actionORMethodDef);
    };
    RecognizerApi.prototype.MANY1 = function(actionORMethodDef) {
        this.manyInternal(1, actionORMethodDef);
    };
    RecognizerApi.prototype.MANY2 = function(actionORMethodDef) {
        this.manyInternal(2, actionORMethodDef);
    };
    RecognizerApi.prototype.MANY3 = function(actionORMethodDef) {
        this.manyInternal(3, actionORMethodDef);
    };
    RecognizerApi.prototype.MANY4 = function(actionORMethodDef) {
        this.manyInternal(4, actionORMethodDef);
    };
    RecognizerApi.prototype.MANY5 = function(actionORMethodDef) {
        this.manyInternal(5, actionORMethodDef);
    };
    RecognizerApi.prototype.MANY6 = function(actionORMethodDef) {
        this.manyInternal(6, actionORMethodDef);
    };
    RecognizerApi.prototype.MANY7 = function(actionORMethodDef) {
        this.manyInternal(7, actionORMethodDef);
    };
    RecognizerApi.prototype.MANY8 = function(actionORMethodDef) {
        this.manyInternal(8, actionORMethodDef);
    };
    RecognizerApi.prototype.MANY9 = function(actionORMethodDef) {
        this.manyInternal(9, actionORMethodDef);
    };
    RecognizerApi.prototype.MANY_SEP = function(options) {
        this.manySepFirstInternal(0, options);
    };
    RecognizerApi.prototype.MANY_SEP1 = function(options) {
        this.manySepFirstInternal(1, options);
    };
    RecognizerApi.prototype.MANY_SEP2 = function(options) {
        this.manySepFirstInternal(2, options);
    };
    RecognizerApi.prototype.MANY_SEP3 = function(options) {
        this.manySepFirstInternal(3, options);
    };
    RecognizerApi.prototype.MANY_SEP4 = function(options) {
        this.manySepFirstInternal(4, options);
    };
    RecognizerApi.prototype.MANY_SEP5 = function(options) {
        this.manySepFirstInternal(5, options);
    };
    RecognizerApi.prototype.MANY_SEP6 = function(options) {
        this.manySepFirstInternal(6, options);
    };
    RecognizerApi.prototype.MANY_SEP7 = function(options) {
        this.manySepFirstInternal(7, options);
    };
    RecognizerApi.prototype.MANY_SEP8 = function(options) {
        this.manySepFirstInternal(8, options);
    };
    RecognizerApi.prototype.MANY_SEP9 = function(options) {
        this.manySepFirstInternal(9, options);
    };
    RecognizerApi.prototype.AT_LEAST_ONE = function(actionORMethodDef) {
        this.atLeastOneInternal(0, actionORMethodDef);
    };
    RecognizerApi.prototype.AT_LEAST_ONE1 = function(actionORMethodDef) {
        return this.atLeastOneInternal(1, actionORMethodDef);
    };
    RecognizerApi.prototype.AT_LEAST_ONE2 = function(actionORMethodDef) {
        this.atLeastOneInternal(2, actionORMethodDef);
    };
    RecognizerApi.prototype.AT_LEAST_ONE3 = function(actionORMethodDef) {
        this.atLeastOneInternal(3, actionORMethodDef);
    };
    RecognizerApi.prototype.AT_LEAST_ONE4 = function(actionORMethodDef) {
        this.atLeastOneInternal(4, actionORMethodDef);
    };
    RecognizerApi.prototype.AT_LEAST_ONE5 = function(actionORMethodDef) {
        this.atLeastOneInternal(5, actionORMethodDef);
    };
    RecognizerApi.prototype.AT_LEAST_ONE6 = function(actionORMethodDef) {
        this.atLeastOneInternal(6, actionORMethodDef);
    };
    RecognizerApi.prototype.AT_LEAST_ONE7 = function(actionORMethodDef) {
        this.atLeastOneInternal(7, actionORMethodDef);
    };
    RecognizerApi.prototype.AT_LEAST_ONE8 = function(actionORMethodDef) {
        this.atLeastOneInternal(8, actionORMethodDef);
    };
    RecognizerApi.prototype.AT_LEAST_ONE9 = function(actionORMethodDef) {
        this.atLeastOneInternal(9, actionORMethodDef);
    };
    RecognizerApi.prototype.AT_LEAST_ONE_SEP = function(options) {
        this.atLeastOneSepFirstInternal(0, options);
    };
    RecognizerApi.prototype.AT_LEAST_ONE_SEP1 = function(options) {
        this.atLeastOneSepFirstInternal(1, options);
    };
    RecognizerApi.prototype.AT_LEAST_ONE_SEP2 = function(options) {
        this.atLeastOneSepFirstInternal(2, options);
    };
    RecognizerApi.prototype.AT_LEAST_ONE_SEP3 = function(options) {
        this.atLeastOneSepFirstInternal(3, options);
    };
    RecognizerApi.prototype.AT_LEAST_ONE_SEP4 = function(options) {
        this.atLeastOneSepFirstInternal(4, options);
    };
    RecognizerApi.prototype.AT_LEAST_ONE_SEP5 = function(options) {
        this.atLeastOneSepFirstInternal(5, options);
    };
    RecognizerApi.prototype.AT_LEAST_ONE_SEP6 = function(options) {
        this.atLeastOneSepFirstInternal(6, options);
    };
    RecognizerApi.prototype.AT_LEAST_ONE_SEP7 = function(options) {
        this.atLeastOneSepFirstInternal(7, options);
    };
    RecognizerApi.prototype.AT_LEAST_ONE_SEP8 = function(options) {
        this.atLeastOneSepFirstInternal(8, options);
    };
    RecognizerApi.prototype.AT_LEAST_ONE_SEP9 = function(options) {
        this.atLeastOneSepFirstInternal(9, options);
    };
    RecognizerApi.prototype.RULE = function(name, implementation, config) {
        if (config === void 0) config = parser_1.DEFAULT_RULE_CONFIG;
        if ((0, includes_1.default)(this.definedRulesNames, name)) {
            var errMsg = errors_public_1.defaultGrammarValidatorErrorProvider.buildDuplicateRuleNameError({
                topLevelRule: name,
                grammarName: this.className
            });
            var error = {
                message: errMsg,
                type: parser_1.ParserDefinitionErrorType.DUPLICATE_RULE_NAME,
                ruleName: name
            };
            this.definitionErrors.push(error);
        }
        this.definedRulesNames.push(name);
        var ruleImplementation = this.defineRule(name, implementation, config);
        this[name] = ruleImplementation;
        return ruleImplementation;
    };
    RecognizerApi.prototype.OVERRIDE_RULE = function(name, impl, config) {
        if (config === void 0) config = parser_1.DEFAULT_RULE_CONFIG;
        var ruleErrors = (0, checks_1.validateRuleIsOverridden)(name, this.definedRulesNames, this.className);
        this.definitionErrors = this.definitionErrors.concat(ruleErrors);
        var ruleImplementation = this.defineRule(name, impl, config);
        this[name] = ruleImplementation;
        return ruleImplementation;
    };
    RecognizerApi.prototype.BACKTRACK = function(grammarRule, args) {
        return function() {
            // save org state
            this.isBackTrackingStack.push(1);
            var orgState = this.saveRecogState();
            try {
                grammarRule.apply(this, args);
                // if no exception was thrown we have succeed parsing the rule.
                return true;
            } catch (e) {
                if ((0, exceptions_public_1.isRecognitionException)(e)) return false;
                else throw e;
            } finally{
                this.reloadRecogState(orgState);
                this.isBackTrackingStack.pop();
            }
        };
    };
    // GAST export APIs
    RecognizerApi.prototype.getGAstProductions = function() {
        return this.gastProductionsCache;
    };
    RecognizerApi.prototype.getSerializedGastProductions = function() {
        return (0, gast_1.serializeGrammar)((0, values_1.default)(this.gastProductionsCache));
    };
    return RecognizerApi;
}();
exports.RecognizerApi = RecognizerApi;

},{"454e171cbfceb11":"7Uoc6","e1a62c593380e11e":"l3Nmg","614960881047e54":"m83wd","4def73f50bd55b25":"hzING","8b5b14d5134d0d33":"7elDj","ce022c1b76dee2b1":"4teh8","5a5dcb19d45fafdf":"91AYQ"}],"fdnvM":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RecognizerEngine = void 0;
var isEmpty_1 = __importDefault(require("9e67c19e78b8458"));
var isArray_1 = __importDefault(require("142abe8014cb845d"));
var flatten_1 = __importDefault(require("7267008367fd89d5"));
var every_1 = __importDefault(require("59f614b2bac5e7cf"));
var uniq_1 = __importDefault(require("d5872cbec8e19810"));
var isObject_1 = __importDefault(require("5eb3d6ebdab6a2f3"));
var has_1 = __importDefault(require("8a9617cf87300748"));
var values_1 = __importDefault(require("3a70aa271c4725cb"));
var reduce_1 = __importDefault(require("931d6e06cc58c492"));
var clone_1 = __importDefault(require("81c1e552b14dff0b"));
var keys_1 = require("e86ae97caedd9ccd");
var exceptions_public_1 = require("23dbfac25e03e27a");
var lookahead_1 = require("8fcf0bdfaa3e29b2");
var interpreter_1 = require("c094bc591e60db45");
var parser_1 = require("beaa7eb487100f5a");
var recoverable_1 = require("ae8e3827b50ab48a");
var tokens_public_1 = require("3f10418d7a2d924a");
var tokens_1 = require("9b42f0f810e99b4e");
/**
 * This trait is responsible for the runtime parsing engine
 * Used by the official API (recognizer_api.ts)
 */ var RecognizerEngine = /** @class */ function() {
    function RecognizerEngine() {}
    RecognizerEngine.prototype.initRecognizerEngine = function(tokenVocabulary, config) {
        this.className = this.constructor.name;
        // TODO: would using an ES6 Map or plain object be faster (CST building scenario)
        this.shortRuleNameToFull = {};
        this.fullRuleNameToShort = {};
        this.ruleShortNameIdx = 256;
        this.tokenMatcher = tokens_1.tokenStructuredMatcherNoCategories;
        this.subruleIdx = 0;
        this.definedRulesNames = [];
        this.tokensMap = {};
        this.isBackTrackingStack = [];
        this.RULE_STACK = [];
        this.RULE_OCCURRENCE_STACK = [];
        this.gastProductionsCache = {};
        if ((0, has_1.default)(config, "serializedGrammar")) throw Error("The Parser's configuration can no longer contain a <serializedGrammar> property.\n	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0\n	For Further details.");
        if ((0, isArray_1.default)(tokenVocabulary)) {
            // This only checks for Token vocabularies provided as arrays.
            // That is good enough because the main objective is to detect users of pre-V4.0 APIs
            // rather than all edge cases of empty Token vocabularies.
            if ((0, isEmpty_1.default)(tokenVocabulary)) throw Error("A Token Vocabulary cannot be empty.\n	Note that the first argument for the parser constructor\n	is no longer a Token vector (since v4.0).");
            if (typeof tokenVocabulary[0].startOffset === "number") throw Error("The Parser constructor no longer accepts a token vector as the first argument.\n	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0\n	For Further details.");
        }
        if ((0, isArray_1.default)(tokenVocabulary)) this.tokensMap = (0, reduce_1.default)(tokenVocabulary, function(acc, tokType) {
            acc[tokType.name] = tokType;
            return acc;
        }, {});
        else if ((0, has_1.default)(tokenVocabulary, "modes") && (0, every_1.default)((0, flatten_1.default)((0, values_1.default)(tokenVocabulary.modes)), tokens_1.isTokenType)) {
            var allTokenTypes_1 = (0, flatten_1.default)((0, values_1.default)(tokenVocabulary.modes));
            var uniqueTokens = (0, uniq_1.default)(allTokenTypes_1);
            this.tokensMap = (0, reduce_1.default)(uniqueTokens, function(acc, tokType) {
                acc[tokType.name] = tokType;
                return acc;
            }, {});
        } else if ((0, isObject_1.default)(tokenVocabulary)) this.tokensMap = (0, clone_1.default)(tokenVocabulary);
        else throw new Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");
        // always add EOF to the tokenNames -> constructors map. it is useful to assure all the input has been
        // parsed with a clear error message ("expecting EOF but found ...")
        this.tokensMap["EOF"] = tokens_public_1.EOF;
        var allTokenTypes = (0, has_1.default)(tokenVocabulary, "modes") ? (0, flatten_1.default)((0, values_1.default)(tokenVocabulary.modes)) : (0, values_1.default)(tokenVocabulary);
        var noTokenCategoriesUsed = (0, every_1.default)(allTokenTypes, function(tokenConstructor) {
            return (0, isEmpty_1.default)(tokenConstructor.categoryMatches);
        });
        this.tokenMatcher = noTokenCategoriesUsed ? tokens_1.tokenStructuredMatcherNoCategories : tokens_1.tokenStructuredMatcher;
        // Because ES2015+ syntax should be supported for creating Token classes
        // We cannot assume that the Token classes were created using the "extendToken" utilities
        // Therefore we must augment the Token classes both on Lexer initialization and on Parser initialization
        (0, tokens_1.augmentTokenTypes)((0, values_1.default)(this.tokensMap));
    };
    RecognizerEngine.prototype.defineRule = function(ruleName, impl, config) {
        if (this.selfAnalysisDone) throw Error("Grammar rule <".concat(ruleName, "> may not be defined after the 'performSelfAnalysis' method has been called'\n") + "Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.");
        var resyncEnabled = (0, has_1.default)(config, "resyncEnabled") ? config.resyncEnabled // assumes end user provides the correct config value/type
         : parser_1.DEFAULT_RULE_CONFIG.resyncEnabled;
        var recoveryValueFunc = (0, has_1.default)(config, "recoveryValueFunc") ? config.recoveryValueFunc // assumes end user provides the correct config value/type
         : parser_1.DEFAULT_RULE_CONFIG.recoveryValueFunc;
        // performance optimization: Use small integers as keys for the longer human readable "full" rule names.
        // this greatly improves Map access time (as much as 8% for some performance benchmarks).
        var shortName = this.ruleShortNameIdx << keys_1.BITS_FOR_METHOD_TYPE + keys_1.BITS_FOR_OCCURRENCE_IDX;
        this.ruleShortNameIdx++;
        this.shortRuleNameToFull[shortName] = ruleName;
        this.fullRuleNameToShort[ruleName] = shortName;
        var invokeRuleWithTry;
        // Micro optimization, only check the condition **once** on rule definition
        // instead of **every single** rule invocation.
        if (this.outputCst === true) invokeRuleWithTry = function invokeRuleWithTry() {
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
            try {
                this.ruleInvocationStateUpdate(shortName, ruleName, this.subruleIdx);
                impl.apply(this, args);
                var cst = this.CST_STACK[this.CST_STACK.length - 1];
                this.cstPostRule(cst);
                return cst;
            } catch (e) {
                return this.invokeRuleCatch(e, resyncEnabled, recoveryValueFunc);
            } finally{
                this.ruleFinallyStateUpdate();
            }
        };
        else invokeRuleWithTry = function invokeRuleWithTryCst() {
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
            try {
                this.ruleInvocationStateUpdate(shortName, ruleName, this.subruleIdx);
                return impl.apply(this, args);
            } catch (e) {
                return this.invokeRuleCatch(e, resyncEnabled, recoveryValueFunc);
            } finally{
                this.ruleFinallyStateUpdate();
            }
        };
        var wrappedGrammarRule = Object.assign(invokeRuleWithTry, {
            ruleName: ruleName,
            originalGrammarAction: impl
        });
        return wrappedGrammarRule;
    };
    RecognizerEngine.prototype.invokeRuleCatch = function(e, resyncEnabledConfig, recoveryValueFunc) {
        var isFirstInvokedRule = this.RULE_STACK.length === 1;
        // note the reSync is always enabled for the first rule invocation, because we must always be able to
        // reSync with EOF and just output some INVALID ParseTree
        // during backtracking reSync recovery is disabled, otherwise we can't be certain the backtracking
        // path is really the most valid one
        var reSyncEnabled = resyncEnabledConfig && !this.isBackTracking() && this.recoveryEnabled;
        if ((0, exceptions_public_1.isRecognitionException)(e)) {
            var recogError = e;
            if (reSyncEnabled) {
                var reSyncTokType = this.findReSyncTokenType();
                if (this.isInCurrentRuleReSyncSet(reSyncTokType)) {
                    recogError.resyncedTokens = this.reSyncTo(reSyncTokType);
                    if (this.outputCst) {
                        var partialCstResult = this.CST_STACK[this.CST_STACK.length - 1];
                        partialCstResult.recoveredNode = true;
                        return partialCstResult;
                    } else return recoveryValueFunc(e);
                } else {
                    if (this.outputCst) {
                        var partialCstResult = this.CST_STACK[this.CST_STACK.length - 1];
                        partialCstResult.recoveredNode = true;
                        recogError.partialCstResult = partialCstResult;
                    }
                    // to be handled Further up the call stack
                    throw recogError;
                }
            } else if (isFirstInvokedRule) {
                // otherwise a Redundant input error will be created as well and we cannot guarantee that this is indeed the case
                this.moveToTerminatedState();
                // the parser should never throw one of its own errors outside its flow.
                // even if error recovery is disabled
                return recoveryValueFunc(e);
            } else // to be recovered Further up the call stack
            throw recogError;
        } else // some other Error type which we don't know how to handle (for example a built in JavaScript Error)
        throw e;
    };
    // Implementation of parsing DSL
    RecognizerEngine.prototype.optionInternal = function(actionORMethodDef, occurrence) {
        var key = this.getKeyForAutomaticLookahead(keys_1.OPTION_IDX, occurrence);
        return this.optionInternalLogic(actionORMethodDef, occurrence, key);
    };
    RecognizerEngine.prototype.optionInternalLogic = function(actionORMethodDef, occurrence, key) {
        var _this = this;
        var lookAheadFunc = this.getLaFuncFromCache(key);
        var action;
        if (typeof actionORMethodDef !== "function") {
            action = actionORMethodDef.DEF;
            var predicate_1 = actionORMethodDef.GATE;
            // predicate present
            if (predicate_1 !== undefined) {
                var orgLookaheadFunction_1 = lookAheadFunc;
                lookAheadFunc = function() {
                    return predicate_1.call(_this) && orgLookaheadFunction_1.call(_this);
                };
            }
        } else action = actionORMethodDef;
        if (lookAheadFunc.call(this) === true) return action.call(this);
        return undefined;
    };
    RecognizerEngine.prototype.atLeastOneInternal = function(prodOccurrence, actionORMethodDef) {
        var laKey = this.getKeyForAutomaticLookahead(keys_1.AT_LEAST_ONE_IDX, prodOccurrence);
        return this.atLeastOneInternalLogic(prodOccurrence, actionORMethodDef, laKey);
    };
    RecognizerEngine.prototype.atLeastOneInternalLogic = function(prodOccurrence, actionORMethodDef, key) {
        var _this = this;
        var lookAheadFunc = this.getLaFuncFromCache(key);
        var action;
        if (typeof actionORMethodDef !== "function") {
            action = actionORMethodDef.DEF;
            var predicate_2 = actionORMethodDef.GATE;
            // predicate present
            if (predicate_2 !== undefined) {
                var orgLookaheadFunction_2 = lookAheadFunc;
                lookAheadFunc = function() {
                    return predicate_2.call(_this) && orgLookaheadFunction_2.call(_this);
                };
            }
        } else action = actionORMethodDef;
        if (lookAheadFunc.call(this) === true) {
            var notStuck = this.doSingleRepetition(action);
            while(lookAheadFunc.call(this) === true && notStuck === true)notStuck = this.doSingleRepetition(action);
        } else throw this.raiseEarlyExitException(prodOccurrence, lookahead_1.PROD_TYPE.REPETITION_MANDATORY, actionORMethodDef.ERR_MSG);
        // note that while it may seem that this can cause an error because by using a recursive call to
        // AT_LEAST_ONE we change the grammar to AT_LEAST_TWO, AT_LEAST_THREE ... , the possible recursive call
        // from the tryInRepetitionRecovery(...) will only happen IFF there really are TWO/THREE/.... items.
        // Performance optimization: "attemptInRepetitionRecovery" will be defined as NOOP unless recovery is enabled
        this.attemptInRepetitionRecovery(this.atLeastOneInternal, [
            prodOccurrence,
            actionORMethodDef
        ], lookAheadFunc, keys_1.AT_LEAST_ONE_IDX, prodOccurrence, interpreter_1.NextTerminalAfterAtLeastOneWalker);
    };
    RecognizerEngine.prototype.atLeastOneSepFirstInternal = function(prodOccurrence, options) {
        var laKey = this.getKeyForAutomaticLookahead(keys_1.AT_LEAST_ONE_SEP_IDX, prodOccurrence);
        this.atLeastOneSepFirstInternalLogic(prodOccurrence, options, laKey);
    };
    RecognizerEngine.prototype.atLeastOneSepFirstInternalLogic = function(prodOccurrence, options, key) {
        var _this = this;
        var action = options.DEF;
        var separator = options.SEP;
        var firstIterationLookaheadFunc = this.getLaFuncFromCache(key);
        // 1st iteration
        if (firstIterationLookaheadFunc.call(this) === true) {
            action.call(this);
            //  TODO: Optimization can move this function construction into "attemptInRepetitionRecovery"
            //  because it is only needed in error recovery scenarios.
            var separatorLookAheadFunc = function() {
                return _this.tokenMatcher(_this.LA(1), separator);
            };
            // 2nd..nth iterations
            while(this.tokenMatcher(this.LA(1), separator) === true){
                // note that this CONSUME will never enter recovery because
                // the separatorLookAheadFunc checks that the separator really does exist.
                this.CONSUME(separator);
                action.call(this);
            }
            // Performance optimization: "attemptInRepetitionRecovery" will be defined as NOOP unless recovery is enabled
            this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
                prodOccurrence,
                separator,
                separatorLookAheadFunc,
                action,
                interpreter_1.NextTerminalAfterAtLeastOneSepWalker
            ], separatorLookAheadFunc, keys_1.AT_LEAST_ONE_SEP_IDX, prodOccurrence, interpreter_1.NextTerminalAfterAtLeastOneSepWalker);
        } else throw this.raiseEarlyExitException(prodOccurrence, lookahead_1.PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR, options.ERR_MSG);
    };
    RecognizerEngine.prototype.manyInternal = function(prodOccurrence, actionORMethodDef) {
        var laKey = this.getKeyForAutomaticLookahead(keys_1.MANY_IDX, prodOccurrence);
        return this.manyInternalLogic(prodOccurrence, actionORMethodDef, laKey);
    };
    RecognizerEngine.prototype.manyInternalLogic = function(prodOccurrence, actionORMethodDef, key) {
        var _this = this;
        var lookaheadFunction = this.getLaFuncFromCache(key);
        var action;
        if (typeof actionORMethodDef !== "function") {
            action = actionORMethodDef.DEF;
            var predicate_3 = actionORMethodDef.GATE;
            // predicate present
            if (predicate_3 !== undefined) {
                var orgLookaheadFunction_3 = lookaheadFunction;
                lookaheadFunction = function() {
                    return predicate_3.call(_this) && orgLookaheadFunction_3.call(_this);
                };
            }
        } else action = actionORMethodDef;
        var notStuck = true;
        while(lookaheadFunction.call(this) === true && notStuck === true)notStuck = this.doSingleRepetition(action);
        // Performance optimization: "attemptInRepetitionRecovery" will be defined as NOOP unless recovery is enabled
        this.attemptInRepetitionRecovery(this.manyInternal, [
            prodOccurrence,
            actionORMethodDef
        ], lookaheadFunction, keys_1.MANY_IDX, prodOccurrence, interpreter_1.NextTerminalAfterManyWalker, // The notStuck parameter is only relevant when "attemptInRepetitionRecovery"
        // is invoked from manyInternal, in the MANY_SEP case and AT_LEAST_ONE[_SEP]
        // An infinite loop cannot occur as:
        // - Either the lookahead is guaranteed to consume something (Single Token Separator)
        // - AT_LEAST_ONE by definition is guaranteed to consume something (or error out).
        notStuck);
    };
    RecognizerEngine.prototype.manySepFirstInternal = function(prodOccurrence, options) {
        var laKey = this.getKeyForAutomaticLookahead(keys_1.MANY_SEP_IDX, prodOccurrence);
        this.manySepFirstInternalLogic(prodOccurrence, options, laKey);
    };
    RecognizerEngine.prototype.manySepFirstInternalLogic = function(prodOccurrence, options, key) {
        var _this = this;
        var action = options.DEF;
        var separator = options.SEP;
        var firstIterationLaFunc = this.getLaFuncFromCache(key);
        // 1st iteration
        if (firstIterationLaFunc.call(this) === true) {
            action.call(this);
            var separatorLookAheadFunc = function() {
                return _this.tokenMatcher(_this.LA(1), separator);
            };
            // 2nd..nth iterations
            while(this.tokenMatcher(this.LA(1), separator) === true){
                // note that this CONSUME will never enter recovery because
                // the separatorLookAheadFunc checks that the separator really does exist.
                this.CONSUME(separator);
                // No need for checking infinite loop here due to consuming the separator.
                action.call(this);
            }
            // Performance optimization: "attemptInRepetitionRecovery" will be defined as NOOP unless recovery is enabled
            this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
                prodOccurrence,
                separator,
                separatorLookAheadFunc,
                action,
                interpreter_1.NextTerminalAfterManySepWalker
            ], separatorLookAheadFunc, keys_1.MANY_SEP_IDX, prodOccurrence, interpreter_1.NextTerminalAfterManySepWalker);
        }
    };
    RecognizerEngine.prototype.repetitionSepSecondInternal = function(prodOccurrence, separator, separatorLookAheadFunc, action, nextTerminalAfterWalker) {
        while(separatorLookAheadFunc()){
            // note that this CONSUME will never enter recovery because
            // the separatorLookAheadFunc checks that the separator really does exist.
            this.CONSUME(separator);
            action.call(this);
        }
        // we can only arrive to this function after an error
        // has occurred (hence the name 'second') so the following
        // IF will always be entered, its possible to remove it...
        // however it is kept to avoid confusion and be consistent.
        // Performance optimization: "attemptInRepetitionRecovery" will be defined as NOOP unless recovery is enabled
        /* istanbul ignore else */ this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
            prodOccurrence,
            separator,
            separatorLookAheadFunc,
            action,
            nextTerminalAfterWalker
        ], separatorLookAheadFunc, keys_1.AT_LEAST_ONE_SEP_IDX, prodOccurrence, nextTerminalAfterWalker);
    };
    RecognizerEngine.prototype.doSingleRepetition = function(action) {
        var beforeIteration = this.getLexerPosition();
        action.call(this);
        var afterIteration = this.getLexerPosition();
        // This boolean will indicate if this repetition progressed
        // or if we are "stuck" (potential infinite loop in the repetition).
        return afterIteration > beforeIteration;
    };
    RecognizerEngine.prototype.orInternal = function(altsOrOpts, occurrence) {
        var laKey = this.getKeyForAutomaticLookahead(keys_1.OR_IDX, occurrence);
        var alts = (0, isArray_1.default)(altsOrOpts) ? altsOrOpts : altsOrOpts.DEF;
        var laFunc = this.getLaFuncFromCache(laKey);
        var altIdxToTake = laFunc.call(this, alts);
        if (altIdxToTake !== undefined) {
            var chosenAlternative = alts[altIdxToTake];
            return chosenAlternative.ALT.call(this);
        }
        this.raiseNoAltException(occurrence, altsOrOpts.ERR_MSG);
    };
    RecognizerEngine.prototype.ruleFinallyStateUpdate = function() {
        this.RULE_STACK.pop();
        this.RULE_OCCURRENCE_STACK.pop();
        // NOOP when cst is disabled
        this.cstFinallyStateUpdate();
        if (this.RULE_STACK.length === 0 && this.isAtEndOfInput() === false) {
            var firstRedundantTok = this.LA(1);
            var errMsg = this.errorMessageProvider.buildNotAllInputParsedMessage({
                firstRedundant: firstRedundantTok,
                ruleName: this.getCurrRuleFullName()
            });
            this.SAVE_ERROR(new exceptions_public_1.NotAllInputParsedException(errMsg, firstRedundantTok));
        }
    };
    RecognizerEngine.prototype.subruleInternal = function(ruleToCall, idx, options) {
        var ruleResult;
        try {
            var args = options !== undefined ? options.ARGS : undefined;
            this.subruleIdx = idx;
            ruleResult = ruleToCall.apply(this, args);
            this.cstPostNonTerminal(ruleResult, options !== undefined && options.LABEL !== undefined ? options.LABEL : ruleToCall.ruleName);
            return ruleResult;
        } catch (e) {
            throw this.subruleInternalError(e, options, ruleToCall.ruleName);
        }
    };
    RecognizerEngine.prototype.subruleInternalError = function(e, options, ruleName) {
        if ((0, exceptions_public_1.isRecognitionException)(e) && e.partialCstResult !== undefined) {
            this.cstPostNonTerminal(e.partialCstResult, options !== undefined && options.LABEL !== undefined ? options.LABEL : ruleName);
            delete e.partialCstResult;
        }
        throw e;
    };
    RecognizerEngine.prototype.consumeInternal = function(tokType, idx, options) {
        var consumedToken;
        try {
            var nextToken = this.LA(1);
            if (this.tokenMatcher(nextToken, tokType) === true) {
                this.consumeToken();
                consumedToken = nextToken;
            } else this.consumeInternalError(tokType, nextToken, options);
        } catch (eFromConsumption) {
            consumedToken = this.consumeInternalRecovery(tokType, idx, eFromConsumption);
        }
        this.cstPostTerminal(options !== undefined && options.LABEL !== undefined ? options.LABEL : tokType.name, consumedToken);
        return consumedToken;
    };
    RecognizerEngine.prototype.consumeInternalError = function(tokType, nextToken, options) {
        var msg;
        var previousToken = this.LA(0);
        if (options !== undefined && options.ERR_MSG) msg = options.ERR_MSG;
        else msg = this.errorMessageProvider.buildMismatchTokenMessage({
            expected: tokType,
            actual: nextToken,
            previous: previousToken,
            ruleName: this.getCurrRuleFullName()
        });
        throw this.SAVE_ERROR(new exceptions_public_1.MismatchedTokenException(msg, nextToken, previousToken));
    };
    RecognizerEngine.prototype.consumeInternalRecovery = function(tokType, idx, eFromConsumption) {
        // no recovery allowed during backtracking, otherwise backtracking may recover invalid syntax and accept it
        // but the original syntax could have been parsed successfully without any backtracking + recovery
        if (this.recoveryEnabled && // TODO: more robust checking of the exception type. Perhaps Typescript extending expressions?
        eFromConsumption.name === "MismatchedTokenException" && !this.isBackTracking()) {
            var follows = this.getFollowsForInRuleRecovery(tokType, idx);
            try {
                return this.tryInRuleRecovery(tokType, follows);
            } catch (eFromInRuleRecovery) {
                if (eFromInRuleRecovery.name === recoverable_1.IN_RULE_RECOVERY_EXCEPTION) // failed in RuleRecovery.
                // throw the original error in order to trigger reSync error recovery
                throw eFromConsumption;
                else throw eFromInRuleRecovery;
            }
        } else throw eFromConsumption;
    };
    RecognizerEngine.prototype.saveRecogState = function() {
        // errors is a getter which will clone the errors array
        var savedErrors = this.errors;
        var savedRuleStack = (0, clone_1.default)(this.RULE_STACK);
        return {
            errors: savedErrors,
            lexerState: this.exportLexerState(),
            RULE_STACK: savedRuleStack,
            CST_STACK: this.CST_STACK
        };
    };
    RecognizerEngine.prototype.reloadRecogState = function(newState) {
        this.errors = newState.errors;
        this.importLexerState(newState.lexerState);
        this.RULE_STACK = newState.RULE_STACK;
    };
    RecognizerEngine.prototype.ruleInvocationStateUpdate = function(shortName, fullName, idxInCallingRule) {
        this.RULE_OCCURRENCE_STACK.push(idxInCallingRule);
        this.RULE_STACK.push(shortName);
        // NOOP when cst is disabled
        this.cstInvocationStateUpdate(fullName);
    };
    RecognizerEngine.prototype.isBackTracking = function() {
        return this.isBackTrackingStack.length !== 0;
    };
    RecognizerEngine.prototype.getCurrRuleFullName = function() {
        var shortName = this.getLastExplicitRuleShortName();
        return this.shortRuleNameToFull[shortName];
    };
    RecognizerEngine.prototype.shortRuleNameToFullName = function(shortName) {
        return this.shortRuleNameToFull[shortName];
    };
    RecognizerEngine.prototype.isAtEndOfInput = function() {
        return this.tokenMatcher(this.LA(1), tokens_public_1.EOF);
    };
    RecognizerEngine.prototype.reset = function() {
        this.resetLexerState();
        this.subruleIdx = 0;
        this.isBackTrackingStack = [];
        this.errors = [];
        this.RULE_STACK = [];
        // TODO: extract a specific reset for TreeBuilder trait
        this.CST_STACK = [];
        this.RULE_OCCURRENCE_STACK = [];
    };
    return RecognizerEngine;
}();
exports.RecognizerEngine = RecognizerEngine;

},{"9e67c19e78b8458":"HRoQ8","142abe8014cb845d":"csCQN","7267008367fd89d5":"g3ybb","59f614b2bac5e7cf":"aXOSA","d5872cbec8e19810":"6keEx","5eb3d6ebdab6a2f3":"aKVxX","8a9617cf87300748":"j5BJo","3a70aa271c4725cb":"7Uoc6","931d6e06cc58c492":"isYLF","81c1e552b14dff0b":"dIp0d","e86ae97caedd9ccd":"gpqCz","23dbfac25e03e27a":"m83wd","8fcf0bdfaa3e29b2":"gIfFn","c094bc591e60db45":"fbEtw","beaa7eb487100f5a":"hzING","ae8e3827b50ab48a":"3EuTJ","3f10418d7a2d924a":"gJ9lp","9b42f0f810e99b4e":"1KnzY"}],"4l0sw":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ErrorHandler = void 0;
var exceptions_public_1 = require("29897c549d7ee4bc");
var has_1 = __importDefault(require("2b1afdfc1a72da99"));
var clone_1 = __importDefault(require("c4cf5f23186507ea"));
var lookahead_1 = require("ed1286b6cd58ebd0");
var parser_1 = require("7a31f36ceb5c357b");
/**
 * Trait responsible for runtime parsing errors.
 */ var ErrorHandler = /** @class */ function() {
    function ErrorHandler() {}
    ErrorHandler.prototype.initErrorHandler = function(config) {
        this._errors = [];
        this.errorMessageProvider = (0, has_1.default)(config, "errorMessageProvider") ? config.errorMessageProvider // assumes end user provides the correct config value/type
         : parser_1.DEFAULT_PARSER_CONFIG.errorMessageProvider;
    };
    ErrorHandler.prototype.SAVE_ERROR = function(error) {
        if ((0, exceptions_public_1.isRecognitionException)(error)) {
            error.context = {
                ruleStack: this.getHumanReadableRuleStack(),
                ruleOccurrenceStack: (0, clone_1.default)(this.RULE_OCCURRENCE_STACK)
            };
            this._errors.push(error);
            return error;
        } else throw Error("Trying to save an Error which is not a RecognitionException");
    };
    Object.defineProperty(ErrorHandler.prototype, "errors", {
        get: function() {
            return (0, clone_1.default)(this._errors);
        },
        set: function(newErrors) {
            this._errors = newErrors;
        },
        enumerable: false,
        configurable: true
    });
    // TODO: consider caching the error message computed information
    ErrorHandler.prototype.raiseEarlyExitException = function(occurrence, prodType, userDefinedErrMsg) {
        var ruleName = this.getCurrRuleFullName();
        var ruleGrammar = this.getGAstProductions()[ruleName];
        var lookAheadPathsPerAlternative = (0, lookahead_1.getLookaheadPathsForOptionalProd)(occurrence, ruleGrammar, prodType, this.maxLookahead);
        var insideProdPaths = lookAheadPathsPerAlternative[0];
        var actualTokens = [];
        for(var i = 1; i <= this.maxLookahead; i++)actualTokens.push(this.LA(i));
        var msg = this.errorMessageProvider.buildEarlyExitMessage({
            expectedIterationPaths: insideProdPaths,
            actual: actualTokens,
            previous: this.LA(0),
            customUserDescription: userDefinedErrMsg,
            ruleName: ruleName
        });
        throw this.SAVE_ERROR(new exceptions_public_1.EarlyExitException(msg, this.LA(1), this.LA(0)));
    };
    // TODO: consider caching the error message computed information
    ErrorHandler.prototype.raiseNoAltException = function(occurrence, errMsgTypes) {
        var ruleName = this.getCurrRuleFullName();
        var ruleGrammar = this.getGAstProductions()[ruleName];
        // TODO: getLookaheadPathsForOr can be slow for large enough maxLookahead and certain grammars, consider caching ?
        var lookAheadPathsPerAlternative = (0, lookahead_1.getLookaheadPathsForOr)(occurrence, ruleGrammar, this.maxLookahead);
        var actualTokens = [];
        for(var i = 1; i <= this.maxLookahead; i++)actualTokens.push(this.LA(i));
        var previousToken = this.LA(0);
        var errMsg = this.errorMessageProvider.buildNoViableAltMessage({
            expectedPathsPerAlt: lookAheadPathsPerAlternative,
            actual: actualTokens,
            previous: previousToken,
            customUserDescription: errMsgTypes,
            ruleName: this.getCurrRuleFullName()
        });
        throw this.SAVE_ERROR(new exceptions_public_1.NoViableAltException(errMsg, this.LA(1), previousToken));
    };
    return ErrorHandler;
}();
exports.ErrorHandler = ErrorHandler;

},{"29897c549d7ee4bc":"m83wd","2b1afdfc1a72da99":"j5BJo","c4cf5f23186507ea":"dIp0d","ed1286b6cd58ebd0":"gIfFn","7a31f36ceb5c357b":"hzING"}],"aI1ZS":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ContentAssist = void 0;
var interpreter_1 = require("3b45f661d400142");
var first_1 = __importDefault(require("cbd520cff632dbf9"));
var isUndefined_1 = __importDefault(require("f5146cde3fcd32d9"));
var ContentAssist = /** @class */ function() {
    function ContentAssist() {}
    ContentAssist.prototype.initContentAssist = function() {};
    ContentAssist.prototype.computeContentAssist = function(startRuleName, precedingInput) {
        var startRuleGast = this.gastProductionsCache[startRuleName];
        if ((0, isUndefined_1.default)(startRuleGast)) throw Error("Rule ->".concat(startRuleName, "<- does not exist in this grammar."));
        return (0, interpreter_1.nextPossibleTokensAfter)([
            startRuleGast
        ], precedingInput, this.tokenMatcher, this.maxLookahead);
    };
    // TODO: should this be a member method or a utility? it does not have any state or usage of 'this'...
    // TODO: should this be more explicitly part of the public API?
    ContentAssist.prototype.getNextPossibleTokenTypes = function(grammarPath) {
        var topRuleName = (0, first_1.default)(grammarPath.ruleStack);
        var gastProductions = this.getGAstProductions();
        var topProduction = gastProductions[topRuleName];
        var nextPossibleTokenTypes = new interpreter_1.NextAfterTokenWalker(topProduction, grammarPath).startWalking();
        return nextPossibleTokenTypes;
    };
    return ContentAssist;
}();
exports.ContentAssist = ContentAssist;

},{"3b45f661d400142":"fbEtw","cbd520cff632dbf9":"48AJB","f5146cde3fcd32d9":"hSDL2"}],"33RHB":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GastRecorder = void 0;
var last_1 = __importDefault(require("c8eba921d9e49892"));
var isArray_1 = __importDefault(require("416121f812cd059"));
var some_1 = __importDefault(require("6175ecfb91e8f929"));
var forEach_1 = __importDefault(require("ead27118c88e416f"));
var isFunction_1 = __importDefault(require("2f0dd429d0fd3b9"));
var has_1 = __importDefault(require("c68ded8a669cd3bb"));
var gast_1 = require("a3cbe4ff2474d8be");
var lexer_public_1 = require("9eeb97f3dbaf2e19");
var tokens_1 = require("a452a121e3f5df3b");
var tokens_public_1 = require("a0a791367836e6af");
var parser_1 = require("724007b3e6326cac");
var keys_1 = require("e70913dede96ed34");
var RECORDING_NULL_OBJECT = {
    description: "This Object indicates the Parser is during Recording Phase"
};
Object.freeze(RECORDING_NULL_OBJECT);
var HANDLE_SEPARATOR = true;
var MAX_METHOD_IDX = Math.pow(2, keys_1.BITS_FOR_OCCURRENCE_IDX) - 1;
var RFT = (0, tokens_public_1.createToken)({
    name: "RECORDING_PHASE_TOKEN",
    pattern: lexer_public_1.Lexer.NA
});
(0, tokens_1.augmentTokenTypes)([
    RFT
]);
var RECORDING_PHASE_TOKEN = (0, tokens_public_1.createTokenInstance)(RFT, "This IToken indicates the Parser is in Recording Phase\n	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details", // Using "-1" instead of NaN (as in EOF) because an actual number is less likely to
// cause errors if the output of LA or CONSUME would be (incorrectly) used during the recording phase.
-1, -1, -1, -1, -1, -1);
Object.freeze(RECORDING_PHASE_TOKEN);
var RECORDING_PHASE_CSTNODE = {
    name: "This CSTNode indicates the Parser is in Recording Phase\n	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details",
    children: {}
};
/**
 * This trait handles the creation of the GAST structure for Chevrotain Grammars
 */ var GastRecorder = /** @class */ function() {
    function GastRecorder() {}
    GastRecorder.prototype.initGastRecorder = function(config) {
        this.recordingProdStack = [];
        this.RECORDING_PHASE = false;
    };
    GastRecorder.prototype.enableRecording = function() {
        var _this = this;
        this.RECORDING_PHASE = true;
        this.TRACE_INIT("Enable Recording", function() {
            var _loop_1 = function(i) {
                var idx = i > 0 ? i : "";
                _this["CONSUME".concat(idx)] = function(arg1, arg2) {
                    return this.consumeInternalRecord(arg1, i, arg2);
                };
                _this["SUBRULE".concat(idx)] = function(arg1, arg2) {
                    return this.subruleInternalRecord(arg1, i, arg2);
                };
                _this["OPTION".concat(idx)] = function(arg1) {
                    return this.optionInternalRecord(arg1, i);
                };
                _this["OR".concat(idx)] = function(arg1) {
                    return this.orInternalRecord(arg1, i);
                };
                _this["MANY".concat(idx)] = function(arg1) {
                    this.manyInternalRecord(i, arg1);
                };
                _this["MANY_SEP".concat(idx)] = function(arg1) {
                    this.manySepFirstInternalRecord(i, arg1);
                };
                _this["AT_LEAST_ONE".concat(idx)] = function(arg1) {
                    this.atLeastOneInternalRecord(i, arg1);
                };
                _this["AT_LEAST_ONE_SEP".concat(idx)] = function(arg1) {
                    this.atLeastOneSepFirstInternalRecord(i, arg1);
                };
            };
            /**
             * Warning Dark Voodoo Magic upcoming!
             * We are "replacing" the public parsing DSL methods API
             * With **new** alternative implementations on the Parser **instance**
             *
             * So far this is the only way I've found to avoid performance regressions during parsing time.
             * - Approx 30% performance regression was measured on Chrome 75 Canary when attempting to replace the "internal"
             *   implementations directly instead.
             */ for(var i = 0; i < 10; i++)_loop_1(i);
            // DSL methods with the idx(suffix) as an argument
            _this["consume"] = function(idx, arg1, arg2) {
                return this.consumeInternalRecord(arg1, idx, arg2);
            };
            _this["subrule"] = function(idx, arg1, arg2) {
                return this.subruleInternalRecord(arg1, idx, arg2);
            };
            _this["option"] = function(idx, arg1) {
                return this.optionInternalRecord(arg1, idx);
            };
            _this["or"] = function(idx, arg1) {
                return this.orInternalRecord(arg1, idx);
            };
            _this["many"] = function(idx, arg1) {
                this.manyInternalRecord(idx, arg1);
            };
            _this["atLeastOne"] = function(idx, arg1) {
                this.atLeastOneInternalRecord(idx, arg1);
            };
            _this.ACTION = _this.ACTION_RECORD;
            _this.BACKTRACK = _this.BACKTRACK_RECORD;
            _this.LA = _this.LA_RECORD;
        });
    };
    GastRecorder.prototype.disableRecording = function() {
        var _this = this;
        this.RECORDING_PHASE = false;
        // By deleting these **instance** properties, any future invocation
        // will be deferred to the original methods on the **prototype** object
        // This seems to get rid of any incorrect optimizations that V8 may
        // do during the recording phase.
        this.TRACE_INIT("Deleting Recording methods", function() {
            var that = _this;
            for(var i = 0; i < 10; i++){
                var idx = i > 0 ? i : "";
                delete that["CONSUME".concat(idx)];
                delete that["SUBRULE".concat(idx)];
                delete that["OPTION".concat(idx)];
                delete that["OR".concat(idx)];
                delete that["MANY".concat(idx)];
                delete that["MANY_SEP".concat(idx)];
                delete that["AT_LEAST_ONE".concat(idx)];
                delete that["AT_LEAST_ONE_SEP".concat(idx)];
            }
            delete that["consume"];
            delete that["subrule"];
            delete that["option"];
            delete that["or"];
            delete that["many"];
            delete that["atLeastOne"];
            delete that.ACTION;
            delete that.BACKTRACK;
            delete that.LA;
        });
    };
    //   Parser methods are called inside an ACTION?
    //   Maybe try/catch/finally on ACTIONS while disabling the recorders state changes?
    // @ts-expect-error -- noop place holder
    GastRecorder.prototype.ACTION_RECORD = function(impl) {
    // NO-OP during recording
    };
    // Executing backtracking logic will break our recording logic assumptions
    GastRecorder.prototype.BACKTRACK_RECORD = function(grammarRule, args) {
        return function() {
            return true;
        };
    };
    // LA is part of the official API and may be used for custom lookahead logic
    // by end users who may forget to wrap it in ACTION or inside a GATE
    GastRecorder.prototype.LA_RECORD = function(howMuch) {
        // We cannot use the RECORD_PHASE_TOKEN here because someone may depend
        // On LA return EOF at the end of the input so an infinite loop may occur.
        return parser_1.END_OF_FILE;
    };
    GastRecorder.prototype.topLevelRuleRecord = function(name, def) {
        try {
            var newTopLevelRule = new gast_1.Rule({
                definition: [],
                name: name
            });
            newTopLevelRule.name = name;
            this.recordingProdStack.push(newTopLevelRule);
            def.call(this);
            this.recordingProdStack.pop();
            return newTopLevelRule;
        } catch (originalError) {
            if (originalError.KNOWN_RECORDER_ERROR !== true) try {
                originalError.message = originalError.message + '\n	 This error was thrown during the "grammar recording phase" For more info see:\n	' + "https://chevrotain.io/docs/guide/internals.html#grammar-recording";
            } catch (mutabilityError) {
                // We may not be able to modify the original error object
                throw originalError;
            }
            throw originalError;
        }
    };
    // Implementation of parsing DSL
    GastRecorder.prototype.optionInternalRecord = function(actionORMethodDef, occurrence) {
        return recordProd.call(this, gast_1.Option, actionORMethodDef, occurrence);
    };
    GastRecorder.prototype.atLeastOneInternalRecord = function(occurrence, actionORMethodDef) {
        recordProd.call(this, gast_1.RepetitionMandatory, actionORMethodDef, occurrence);
    };
    GastRecorder.prototype.atLeastOneSepFirstInternalRecord = function(occurrence, options) {
        recordProd.call(this, gast_1.RepetitionMandatoryWithSeparator, options, occurrence, HANDLE_SEPARATOR);
    };
    GastRecorder.prototype.manyInternalRecord = function(occurrence, actionORMethodDef) {
        recordProd.call(this, gast_1.Repetition, actionORMethodDef, occurrence);
    };
    GastRecorder.prototype.manySepFirstInternalRecord = function(occurrence, options) {
        recordProd.call(this, gast_1.RepetitionWithSeparator, options, occurrence, HANDLE_SEPARATOR);
    };
    GastRecorder.prototype.orInternalRecord = function(altsOrOpts, occurrence) {
        return recordOrProd.call(this, altsOrOpts, occurrence);
    };
    GastRecorder.prototype.subruleInternalRecord = function(ruleToCall, occurrence, options) {
        assertMethodIdxIsValid(occurrence);
        if (!ruleToCall || (0, has_1.default)(ruleToCall, "ruleName") === false) {
            var error = new Error("<SUBRULE".concat(getIdxSuffix(occurrence), "> argument is invalid") + " expecting a Parser method reference but got: <".concat(JSON.stringify(ruleToCall), ">") + "\n inside top level rule: <".concat(this.recordingProdStack[0].name, ">"));
            error.KNOWN_RECORDER_ERROR = true;
            throw error;
        }
        var prevProd = (0, last_1.default)(this.recordingProdStack);
        var ruleName = ruleToCall.ruleName;
        var newNoneTerminal = new gast_1.NonTerminal({
            idx: occurrence,
            nonTerminalName: ruleName,
            label: options === null || options === void 0 ? void 0 : options.LABEL,
            // The resolving of the `referencedRule` property will be done once all the Rule's GASTs have been created
            referencedRule: undefined
        });
        prevProd.definition.push(newNoneTerminal);
        return this.outputCst ? RECORDING_PHASE_CSTNODE : RECORDING_NULL_OBJECT;
    };
    GastRecorder.prototype.consumeInternalRecord = function(tokType, occurrence, options) {
        assertMethodIdxIsValid(occurrence);
        if (!(0, tokens_1.hasShortKeyProperty)(tokType)) {
            var error = new Error("<CONSUME".concat(getIdxSuffix(occurrence), "> argument is invalid") + " expecting a TokenType reference but got: <".concat(JSON.stringify(tokType), ">") + "\n inside top level rule: <".concat(this.recordingProdStack[0].name, ">"));
            error.KNOWN_RECORDER_ERROR = true;
            throw error;
        }
        var prevProd = (0, last_1.default)(this.recordingProdStack);
        var newNoneTerminal = new gast_1.Terminal({
            idx: occurrence,
            terminalType: tokType,
            label: options === null || options === void 0 ? void 0 : options.LABEL
        });
        prevProd.definition.push(newNoneTerminal);
        return RECORDING_PHASE_TOKEN;
    };
    return GastRecorder;
}();
exports.GastRecorder = GastRecorder;
function recordProd(prodConstructor, mainProdArg, occurrence, handleSep) {
    if (handleSep === void 0) handleSep = false;
    assertMethodIdxIsValid(occurrence);
    var prevProd = (0, last_1.default)(this.recordingProdStack);
    var grammarAction = (0, isFunction_1.default)(mainProdArg) ? mainProdArg : mainProdArg.DEF;
    var newProd = new prodConstructor({
        definition: [],
        idx: occurrence
    });
    if (handleSep) newProd.separator = mainProdArg.SEP;
    if ((0, has_1.default)(mainProdArg, "MAX_LOOKAHEAD")) newProd.maxLookahead = mainProdArg.MAX_LOOKAHEAD;
    this.recordingProdStack.push(newProd);
    grammarAction.call(this);
    prevProd.definition.push(newProd);
    this.recordingProdStack.pop();
    return RECORDING_NULL_OBJECT;
}
function recordOrProd(mainProdArg, occurrence) {
    var _this = this;
    assertMethodIdxIsValid(occurrence);
    var prevProd = (0, last_1.default)(this.recordingProdStack);
    // Only an array of alternatives
    var hasOptions = (0, isArray_1.default)(mainProdArg) === false;
    var alts = hasOptions === false ? mainProdArg : mainProdArg.DEF;
    var newOrProd = new gast_1.Alternation({
        definition: [],
        idx: occurrence,
        ignoreAmbiguities: hasOptions && mainProdArg.IGNORE_AMBIGUITIES === true
    });
    if ((0, has_1.default)(mainProdArg, "MAX_LOOKAHEAD")) newOrProd.maxLookahead = mainProdArg.MAX_LOOKAHEAD;
    var hasPredicates = (0, some_1.default)(alts, function(currAlt) {
        return (0, isFunction_1.default)(currAlt.GATE);
    });
    newOrProd.hasPredicates = hasPredicates;
    prevProd.definition.push(newOrProd);
    (0, forEach_1.default)(alts, function(currAlt) {
        var currAltFlat = new gast_1.Alternative({
            definition: []
        });
        newOrProd.definition.push(currAltFlat);
        if ((0, has_1.default)(currAlt, "IGNORE_AMBIGUITIES")) currAltFlat.ignoreAmbiguities = currAlt.IGNORE_AMBIGUITIES; // assumes end user provides the correct config value/type
        else if ((0, has_1.default)(currAlt, "GATE")) currAltFlat.ignoreAmbiguities = true;
        _this.recordingProdStack.push(currAltFlat);
        currAlt.ALT.call(_this);
        _this.recordingProdStack.pop();
    });
    return RECORDING_NULL_OBJECT;
}
function getIdxSuffix(idx) {
    return idx === 0 ? "" : "".concat(idx);
}
function assertMethodIdxIsValid(idx) {
    if (idx < 0 || idx > MAX_METHOD_IDX) {
        var error = new Error(// The stack trace will contain all the needed details
        "Invalid DSL Method idx value: <".concat(idx, ">\n	") + "Idx value must be a none negative value smaller than ".concat(MAX_METHOD_IDX + 1));
        error.KNOWN_RECORDER_ERROR = true;
        throw error;
    }
}

},{"c8eba921d9e49892":"6oI7j","416121f812cd059":"csCQN","6175ecfb91e8f929":"9NT48","ead27118c88e416f":"cQbs0","2f0dd429d0fd3b9":"kIUl2","c68ded8a669cd3bb":"j5BJo","a3cbe4ff2474d8be":"91AYQ","9eeb97f3dbaf2e19":"dbzZf","a452a121e3f5df3b":"1KnzY","a0a791367836e6af":"gJ9lp","724007b3e6326cac":"hzING","e70913dede96ed34":"gpqCz"}],"1iTCW":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PerformanceTracer = void 0;
var has_1 = __importDefault(require("a8f65b8b8bfd6992"));
var utils_1 = require("79aca29a3978571a");
var parser_1 = require("bf08009051cf9ab3");
/**
 * Trait responsible for runtime parsing errors.
 */ var PerformanceTracer = /** @class */ function() {
    function PerformanceTracer() {}
    PerformanceTracer.prototype.initPerformanceTracer = function(config) {
        if ((0, has_1.default)(config, "traceInitPerf")) {
            var userTraceInitPerf = config.traceInitPerf;
            var traceIsNumber = typeof userTraceInitPerf === "number";
            this.traceInitMaxIdent = traceIsNumber ? userTraceInitPerf : Infinity;
            this.traceInitPerf = traceIsNumber ? userTraceInitPerf > 0 : userTraceInitPerf; // assumes end user provides the correct config value/type
        } else {
            this.traceInitMaxIdent = 0;
            this.traceInitPerf = parser_1.DEFAULT_PARSER_CONFIG.traceInitPerf;
        }
        this.traceInitIndent = -1;
    };
    PerformanceTracer.prototype.TRACE_INIT = function(phaseDesc, phaseImpl) {
        // No need to optimize this using NOOP pattern because
        // It is not called in a hot spot...
        if (this.traceInitPerf === true) {
            this.traceInitIndent++;
            var indent = new Array(this.traceInitIndent + 1).join("	");
            if (this.traceInitIndent < this.traceInitMaxIdent) console.log("".concat(indent, "--> <").concat(phaseDesc, ">"));
            var _a = (0, utils_1.timer)(phaseImpl), time = _a.time, value = _a.value;
            /* istanbul ignore next - Difficult to reproduce specific performance behavior (>10ms) in tests */ var traceMethod = time > 10 ? console.warn : console.log;
            if (this.traceInitIndent < this.traceInitMaxIdent) traceMethod("".concat(indent, "<-- <").concat(phaseDesc, "> time: ").concat(time, "ms"));
            this.traceInitIndent--;
            return value;
        } else return phaseImpl();
    };
    return PerformanceTracer;
}();
exports.PerformanceTracer = PerformanceTracer;

},{"a8f65b8b8bfd6992":"j5BJo","79aca29a3978571a":"eKRSC","bf08009051cf9ab3":"hzING"}],"iiAAN":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.applyMixins = void 0;
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function(baseCtor) {
        var baseProto = baseCtor.prototype;
        Object.getOwnPropertyNames(baseProto).forEach(function(propName) {
            if (propName === "constructor") return;
            var basePropDescriptor = Object.getOwnPropertyDescriptor(baseProto, propName);
            // Handle Accessors
            if (basePropDescriptor && (basePropDescriptor.get || basePropDescriptor.set)) Object.defineProperty(derivedCtor.prototype, propName, basePropDescriptor);
            else derivedCtor.prototype[propName] = baseCtor.prototype[propName];
        });
    });
}
exports.applyMixins = applyMixins;

},{}],"8ewH2":[function(require,module,exports) {
"use strict";
var __assign = this && this.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.generateCstDts = void 0;
var model_1 = require("afef1449fe1f5ae");
var generate_1 = require("bd3d2b9c401005b4");
var defaultOptions = {
    includeVisitorInterface: true,
    visitorInterfaceName: "ICstNodeVisitor"
};
function generateCstDts(productions, options) {
    var effectiveOptions = __assign(__assign({}, defaultOptions), options);
    var model = (0, model_1.buildModel)(productions);
    return (0, generate_1.genDts)(model, effectiveOptions);
}
exports.generateCstDts = generateCstDts;

},{"afef1449fe1f5ae":"kirXC","bd3d2b9c401005b4":"giHdq"}],"kirXC":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.buildModel = void 0;
var gast_1 = require("4ec6cad5273795c1");
var map_1 = __importDefault(require("5637b56df6666444"));
var flatten_1 = __importDefault(require("5ff40b807ab854c7"));
var values_1 = __importDefault(require("ab7992915f18ee03"));
var some_1 = __importDefault(require("1f9f8a8999956b58"));
var groupBy_1 = __importDefault(require("2aadd6337cc29416"));
var assign_1 = __importDefault(require("679be1b675ad5450"));
function buildModel(productions) {
    var generator = new CstNodeDefinitionGenerator();
    var allRules = (0, values_1.default)(productions);
    return (0, map_1.default)(allRules, function(rule) {
        return generator.visitRule(rule);
    });
}
exports.buildModel = buildModel;
var CstNodeDefinitionGenerator = /** @class */ function(_super) {
    __extends(CstNodeDefinitionGenerator, _super);
    function CstNodeDefinitionGenerator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CstNodeDefinitionGenerator.prototype.visitRule = function(node) {
        var rawElements = this.visitEach(node.definition);
        var grouped = (0, groupBy_1.default)(rawElements, function(el) {
            return el.propertyName;
        });
        var properties = (0, map_1.default)(grouped, function(group, propertyName) {
            var allNullable = !(0, some_1.default)(group, function(el) {
                return !el.canBeNull;
            });
            // In an alternation with a label a property name can have
            // multiple types.
            var propertyType = group[0].type;
            if (group.length > 1) propertyType = (0, map_1.default)(group, function(g) {
                return g.type;
            });
            return {
                name: propertyName,
                type: propertyType,
                optional: allNullable
            };
        });
        return {
            name: node.name,
            properties: properties
        };
    };
    CstNodeDefinitionGenerator.prototype.visitAlternative = function(node) {
        return this.visitEachAndOverrideWith(node.definition, {
            canBeNull: true
        });
    };
    CstNodeDefinitionGenerator.prototype.visitOption = function(node) {
        return this.visitEachAndOverrideWith(node.definition, {
            canBeNull: true
        });
    };
    CstNodeDefinitionGenerator.prototype.visitRepetition = function(node) {
        return this.visitEachAndOverrideWith(node.definition, {
            canBeNull: true
        });
    };
    CstNodeDefinitionGenerator.prototype.visitRepetitionMandatory = function(node) {
        return this.visitEach(node.definition);
    };
    CstNodeDefinitionGenerator.prototype.visitRepetitionMandatoryWithSeparator = function(node) {
        return this.visitEach(node.definition).concat({
            propertyName: node.separator.name,
            canBeNull: true,
            type: getType(node.separator)
        });
    };
    CstNodeDefinitionGenerator.prototype.visitRepetitionWithSeparator = function(node) {
        return this.visitEachAndOverrideWith(node.definition, {
            canBeNull: true
        }).concat({
            propertyName: node.separator.name,
            canBeNull: true,
            type: getType(node.separator)
        });
    };
    CstNodeDefinitionGenerator.prototype.visitAlternation = function(node) {
        return this.visitEachAndOverrideWith(node.definition, {
            canBeNull: true
        });
    };
    CstNodeDefinitionGenerator.prototype.visitTerminal = function(node) {
        return [
            {
                propertyName: node.label || node.terminalType.name,
                canBeNull: false,
                type: getType(node)
            }
        ];
    };
    CstNodeDefinitionGenerator.prototype.visitNonTerminal = function(node) {
        return [
            {
                propertyName: node.label || node.nonTerminalName,
                canBeNull: false,
                type: getType(node)
            }
        ];
    };
    CstNodeDefinitionGenerator.prototype.visitEachAndOverrideWith = function(definition, override) {
        return (0, map_1.default)(this.visitEach(definition), function(definition) {
            return (0, assign_1.default)({}, definition, override);
        });
    };
    CstNodeDefinitionGenerator.prototype.visitEach = function(definition) {
        var _this = this;
        return (0, flatten_1.default)((0, map_1.default)(definition, function(definition) {
            return _this.visit(definition);
        }));
    };
    return CstNodeDefinitionGenerator;
}(gast_1.GAstVisitor);
function getType(production) {
    if (production instanceof gast_1.NonTerminal) return {
        kind: "rule",
        name: production.referencedRule.name
    };
    return {
        kind: "token"
    };
}

},{"4ec6cad5273795c1":"91AYQ","5637b56df6666444":"68KdA","5ff40b807ab854c7":"g3ybb","ab7992915f18ee03":"7Uoc6","1f9f8a8999956b58":"9NT48","2aadd6337cc29416":"kKc7Y","679be1b675ad5450":"4WXly"}],"giHdq":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.genDts = void 0;
var flatten_1 = __importDefault(require("1d93e7492fd0551f"));
var isArray_1 = __importDefault(require("943c9a0e4dfaaffd"));
var map_1 = __importDefault(require("d7aa090a3bbd41c1"));
var reduce_1 = __importDefault(require("b88ad35c7dbc8bda"));
var uniq_1 = __importDefault(require("8199ea5d51b69675"));
var upperFirst_1 = __importDefault(require("4fe9ea64e6d51fea"));
function genDts(model, options) {
    var contentParts = [];
    contentParts = contentParts.concat('import type { CstNode, ICstVisitor, IToken } from "chevrotain";');
    contentParts = contentParts.concat((0, flatten_1.default)((0, map_1.default)(model, function(node) {
        return genCstNodeTypes(node);
    })));
    if (options.includeVisitorInterface) contentParts = contentParts.concat(genVisitor(options.visitorInterfaceName, model));
    return contentParts.join("\n\n") + "\n";
}
exports.genDts = genDts;
function genCstNodeTypes(node) {
    var nodeCstInterface = genNodeInterface(node);
    var nodeChildrenInterface = genNodeChildrenType(node);
    return [
        nodeCstInterface,
        nodeChildrenInterface
    ];
}
function genNodeInterface(node) {
    var nodeInterfaceName = getNodeInterfaceName(node.name);
    var childrenTypeName = getNodeChildrenTypeName(node.name);
    return "export interface ".concat(nodeInterfaceName, ' extends CstNode {\n  name: "').concat(node.name, '";\n  children: ').concat(childrenTypeName, ";\n}");
}
function genNodeChildrenType(node) {
    var typeName = getNodeChildrenTypeName(node.name);
    return "export type ".concat(typeName, " = {\n  ").concat((0, map_1.default)(node.properties, function(property) {
        return genChildProperty(property);
    }).join("\n  "), "\n};");
}
function genChildProperty(prop) {
    var typeName = buildTypeString(prop.type);
    return "".concat(prop.name).concat(prop.optional ? "?" : "", ": ").concat(typeName, "[];");
}
function genVisitor(name, nodes) {
    return "export interface ".concat(name, "<IN, OUT> extends ICstVisitor<IN, OUT> {\n  ").concat((0, map_1.default)(nodes, function(node) {
        return genVisitorFunction(node);
    }).join("\n  "), "\n}");
}
function genVisitorFunction(node) {
    var childrenTypeName = getNodeChildrenTypeName(node.name);
    return "".concat(node.name, "(children: ").concat(childrenTypeName, ", param?: IN): OUT;");
}
function buildTypeString(type) {
    if ((0, isArray_1.default)(type)) {
        var typeNames = (0, uniq_1.default)((0, map_1.default)(type, function(t) {
            return getTypeString(t);
        }));
        var typeString = (0, reduce_1.default)(typeNames, function(sum, t) {
            return sum + " | " + t;
        });
        return "(" + typeString + ")";
    } else return getTypeString(type);
}
function getTypeString(type) {
    if (type.kind === "token") return "IToken";
    return getNodeInterfaceName(type.name);
}
function getNodeInterfaceName(ruleName) {
    return (0, upperFirst_1.default)(ruleName) + "CstNode";
}
function getNodeChildrenTypeName(ruleName) {
    return (0, upperFirst_1.default)(ruleName) + "CstChildren";
}

},{"1d93e7492fd0551f":"g3ybb","943c9a0e4dfaaffd":"csCQN","d7aa090a3bbd41c1":"68KdA","b88ad35c7dbc8bda":"isYLF","8199ea5d51b69675":"6keEx","4fe9ea64e6d51fea":"2FGZJ"}],"2FGZJ":[function(require,module,exports) {
var createCaseFirst = require("9f71ec962d19127");
/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */ var upperFirst = createCaseFirst("toUpperCase");
module.exports = upperFirst;

},{"9f71ec962d19127":"7P4E0"}],"7P4E0":[function(require,module,exports) {
var castSlice = require("6cc0e53be1623a5f"), hasUnicode = require("e28707473345265"), stringToArray = require("32980b84821a53a0"), toString = require("e00796f8e204e98");
/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */ function createCaseFirst(methodName) {
    return function(string) {
        string = toString(string);
        var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined;
        var chr = strSymbols ? strSymbols[0] : string.charAt(0);
        var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
        return chr[methodName]() + trailing;
    };
}
module.exports = createCaseFirst;

},{"6cc0e53be1623a5f":"guVdp","e28707473345265":"4f2P4","32980b84821a53a0":"5FZ15","e00796f8e204e98":"k1dn5"}],"guVdp":[function(require,module,exports) {
var baseSlice = require("19fbc2ab8fa927cd");
/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */ function castSlice(array, start, end) {
    var length = array.length;
    end = end === undefined ? length : end;
    return !start && end >= length ? array : baseSlice(array, start, end);
}
module.exports = castSlice;

},{"19fbc2ab8fa927cd":"bdwd1"}],"4f2P4":[function(require,module,exports) {
/** Used to compose unicode character classes. */ var rsAstralRange = "\ud800-\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsVarRange = "\\ufe0e\\ufe0f";
/** Used to compose unicode capture groups. */ var rsZWJ = "\\u200d";
/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */ var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */ function hasUnicode(string) {
    return reHasUnicode.test(string);
}
module.exports = hasUnicode;

},{}],"5FZ15":[function(require,module,exports) {
var asciiToArray = require("55ec07d60faf873c"), hasUnicode = require("d3e31b390208b2ca"), unicodeToArray = require("2a468ebcd49732b9");
/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */ function stringToArray(string) {
    return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
}
module.exports = stringToArray;

},{"55ec07d60faf873c":"jglWx","d3e31b390208b2ca":"4f2P4","2a468ebcd49732b9":"2cGxi"}],"jglWx":[function(require,module,exports) {
/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */ function asciiToArray(string) {
    return string.split("");
}
module.exports = asciiToArray;

},{}],"2cGxi":[function(require,module,exports) {
/** Used to compose unicode character classes. */ var rsAstralRange = "\ud800-\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsVarRange = "\\ufe0e\\ufe0f";
/** Used to compose unicode capture groups. */ var rsAstral = "[" + rsAstralRange + "]", rsCombo = "[" + rsComboRange + "]", rsFitz = "\ud83c[\udffb-\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\ud83c[\udde6-\uddff]){2}", rsSurrPair = "[\ud800-\udbff][\udc00-\udfff]", rsZWJ = "\\u200d";
/** Used to compose unicode regexes. */ var reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [
    rsNonAstral,
    rsRegional,
    rsSurrPair
].join("|") + ")" + rsOptVar + reOptMod + ")*", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsSymbol = "(?:" + [
    rsNonAstral + rsCombo + "?",
    rsCombo,
    rsRegional,
    rsSurrPair,
    rsAstral
].join("|") + ")";
/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */ var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */ function unicodeToArray(string) {
    return string.match(reUnicode) || [];
}
module.exports = unicodeToArray;

},{}],"cPyqL":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createSyntaxDiagramsCode = void 0;
var version_1 = require("ab5b366de9f671a2");
function createSyntaxDiagramsCode(grammar, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.resourceBase, resourceBase = _c === void 0 ? "https://unpkg.com/chevrotain@".concat(version_1.VERSION, "/diagrams/") : _c, _d = _b.css, css = _d === void 0 ? "https://unpkg.com/chevrotain@".concat(version_1.VERSION, "/diagrams/diagrams.css") : _d;
    var header = '\n<!-- This is a generated file -->\n<!DOCTYPE html>\n<meta charset="utf-8">\n<style>\n  body {\n    background-color: hsl(30, 20%, 95%)\n  }\n</style>\n\n';
    var cssHtml = "\n<link rel='stylesheet' href='".concat(css, "'>\n");
    var scripts = "\n<script src='".concat(resourceBase, "vendor/railroad-diagrams.js'></script>\n<script src='").concat(resourceBase, "src/diagrams_builder.js'></script>\n<script src='").concat(resourceBase, "src/diagrams_behavior.js'></script>\n<script src='").concat(resourceBase, "src/main.js'></script>\n");
    var diagramsDiv = '\n<div id="diagrams" align="center"></div>    \n';
    var serializedGrammar = "\n<script>\n    window.serializedGrammar = ".concat(JSON.stringify(grammar, null, "  "), ";\n</script>\n");
    var initLogic = '\n<script>\n    var diagramsDiv = document.getElementById("diagrams");\n    main.drawDiagramsFromSerializedGrammar(serializedGrammar, diagramsDiv);\n</script>\n';
    return header + cssHtml + scripts + diagramsDiv + serializedGrammar + initLogic;
}
exports.createSyntaxDiagramsCode = createSyntaxDiagramsCode;

},{"ab5b366de9f671a2":"8z9me"}],"6ygi6":[function(require,module,exports) {
const { Lexer, createToken } = require("684f0d0d5dddfbd");
const tokens = {};
// we want to have labels started with z/c/t or with "add"/"sub"/... prefixes, but "Cond"/"InstructionXXX" tokens
// would be matched first, to prevent that we need to use "longer_alt" option to prefer longer tokens
const labelToken = createToken({
    name: "Label",
    pattern: /[a-z]\w*/
});
const addToken = (name, options)=>{
    tokens[name] = createToken({
        name,
        ...options
    });
};
const addInstructionToken = (name, pattern)=>{
    addToken(`Instruction${name}`, {
        pattern: new RegExp(pattern),
        longer_alt: labelToken
    });
};
addToken("NewLine", {
    pattern: /\r?\n/
});
addToken("Colon", {
    pattern: ":"
});
addToken("Comment", {
    pattern: /(?:#|(?:\/\/))[^\n\r]*/,
    group: Lexer.SKIPPED
});
addToken("WhiteSpace", {
    pattern: /[^\S\r\n]+/,
    group: Lexer.SKIPPED
});
const REGISTERS_REGEX = "(?:a|b|c|d|e|h|l)";
const CONDITIONS_REGEX = "(?:c|z|s|p)";
const CONDITIONS_INSTRUCTIONS = [
    "jf",
    "jt",
    "cf",
    "ct",
    "rf",
    "rt"
];
const ACCUMULATOR_INSTRUCTIONS = [
    "ad",
    "ac",
    "su",
    "sb",
    "nd",
    "xr",
    "or",
    "cp"
];
const UNGROUPED_INSTRUCTIONS = [
    "lmi",
    "rlc",
    "rrc",
    "ral",
    "rar",
    "jmp",
    "cal",
    "ret",
    "rst",
    "inp",
    "out",
    "hlt"
];
// instructions without registers or condition encoded inside mnemonic
UNGROUPED_INSTRUCTIONS.forEach((instr)=>addInstructionToken(instr.toUpperCase(), instr));
addInstructionToken("Lrr", `l${REGISTERS_REGEX}${REGISTERS_REGEX}`);
addInstructionToken("LrM", `l${REGISTERS_REGEX}m`);
addInstructionToken("LrI", `l${REGISTERS_REGEX}i`);
addInstructionToken("LMr", `lm${REGISTERS_REGEX}`);
addInstructionToken("INr", `in${REGISTERS_REGEX}`);
addInstructionToken("DCr", `dc${REGISTERS_REGEX}`);
ACCUMULATOR_INSTRUCTIONS.forEach((instr)=>{
    addInstructionToken(`${instr.toUpperCase()}r`, `${instr}${REGISTERS_REGEX}`);
    addInstructionToken(`${instr.toUpperCase()}M`, `${instr}m`);
    addInstructionToken(`${instr.toUpperCase()}I`, `${instr}i`);
});
CONDITIONS_INSTRUCTIONS.forEach((instr)=>addInstructionToken(`${instr.toUpperCase()}c`, `${instr}${CONDITIONS_REGEX}`));
// maximum bit-width for immediate value is 14 bit
addToken("Imm", {
    pattern: /0x(?:[0-3][0-9a-f]{3}|[0-9a-f]{1,3})|1[0-5]\d{3}|16[0-2]\d{2}|163[0-7]\d|1638[0-3]|0?\d{1,4}/
});
// important to define label name after keywords, because lexer tries to match first rule from array
// and it could match label first because patterns of instruction names and labels are intersected
tokens.Label = labelToken;
module.exports = {
    allTokens: Object.values(tokens),
    Tokens: tokens
};

},{"684f0d0d5dddfbd":"jW6vA"}],"5QQP0":[function(require,module,exports) {
const { EmbeddedActionsParser, MismatchedTokenException } = require("61644ff4d2164871");
const { Tokens, allTokens } = require("9d766f99a45a9f54");
const { CodeGenerator, AddrType } = require("d4d3a908bfeff89d");
class AsmParser extends EmbeddedActionsParser {
    constructor(){
        super(allTokens, {
            outputCst: false
        });
        const $ = this;
        const codeGenerator = new CodeGenerator();
        this.codeGenerator = codeGenerator;
        $.RULE("program", ()=>{
            $.AT_LEAST_ONE_SEP({
                SEP: Tokens.NewLine,
                DEF: ()=>$.SUBRULE($.instructionWithLabel)
            });
            try {
                // we expect that program rule should cover whole source code
                if (this.isAtEndOfInput()) return codeGenerator.generate();
            } catch (err) {
                throw $.SAVE_ERROR(new MismatchedTokenException(err.toString()));
            }
            return null;
        });
        $.RULE("instructionWithLabel", ()=>{
            $.OPTION1(()=>$.SUBRULE($.label));
            $.OPTION2(()=>$.SUBRULE($.instruction));
        });
        $.RULE("label", ()=>{
            const labelToken = $.CONSUME(Tokens.Label);
            $.CONSUME(Tokens.Colon);
            $.ACTION(()=>{
                if (!codeGenerator.addLabel(labelToken.image)) throw $.SAVE_ERROR(new MismatchedTokenException("Duplicated definition for label", labelToken));
            });
        });
        $.RULE("instruction", ()=>{
            $.OR([
                {
                    ALT: ()=>$.SUBRULE($.instructionWithoutArg)
                },
                {
                    ALT: ()=>$.SUBRULE($.instructionRST)
                },
                {
                    ALT: ()=>$.SUBRULE($.instructionINP)
                },
                {
                    ALT: ()=>$.SUBRULE($.instructionOUT)
                },
                {
                    ALT: ()=>$.SUBRULE($.instructionWithImm8)
                },
                {
                    ALT: ()=>$.SUBRULE($.instructionWithAddr)
                }
            ]);
        });
        $.RULE("instructionWithoutArg", ()=>{
            const instruction = $.OR([
                {
                    ALT: ()=>$.CONSUME(Tokens.InstructionLrr)
                },
                {
                    ALT: ()=>$.CONSUME(Tokens.InstructionLrM)
                },
                {
                    ALT: ()=>$.CONSUME(Tokens.InstructionLMr)
                },
                {
                    ALT: ()=>$.CONSUME(Tokens.InstructionINr)
                },
                {
                    ALT: ()=>$.CONSUME(Tokens.InstructionDCr)
                },
                {
                    ALT: ()=>$.CONSUME(Tokens.InstructionRLC)
                },
                {
                    ALT: ()=>$.CONSUME(Tokens.InstructionRRC)
                },
                {
                    ALT: ()=>$.CONSUME(Tokens.InstructionRAL)
                },
                {
                    ALT: ()=>$.CONSUME(Tokens.InstructionRAR)
                },
                {
                    ALT: ()=>$.CONSUME(Tokens.InstructionRET)
                },
                {
                    ALT: ()=>$.CONSUME(Tokens.InstructionRFc)
                },
                {
                    ALT: ()=>$.CONSUME(Tokens.InstructionRTc)
                },
                {
                    ALT: ()=>$.CONSUME(Tokens.InstructionHLT)
                },
                {
                    ALT: ()=>$.CONSUME(Tokens.InstructionADr)
                },
                {
                    ALT: ()=>$.CONSUME(Tokens.InstructionADM)
                },
                {
                    ALT: ()=>$.CONSUME(Tokens.InstructionACr)
                },
                {
                    ALT: ()=>$.CONSUME(Tokens.InstructionACM)
                },
                {
                    ALT: ()=>$.CONSUME(Tokens.InstructionSUr)
                },
                {
                    ALT: ()=>$.CONSUME(Tokens.InstructionSUM)
                },
                {
                    ALT: ()=>$.CONSUME(Tokens.InstructionSBr)
                },
                {
                    ALT: ()=>$.CONSUME(Tokens.InstructionSBM)
                },
                {
                    ALT: ()=>$.CONSUME(Tokens.InstructionNDr)
                },
                {
                    ALT: ()=>$.CONSUME(Tokens.InstructionNDM)
                },
                {
                    ALT: ()=>$.CONSUME(Tokens.InstructionXRr)
                },
                {
                    ALT: ()=>$.CONSUME(Tokens.InstructionXRM)
                },
                {
                    ALT: ()=>$.CONSUME(Tokens.InstructionORr)
                },
                {
                    ALT: ()=>$.CONSUME(Tokens.InstructionORM)
                },
                {
                    ALT: ()=>$.CONSUME(Tokens.InstructionCPr)
                },
                {
                    ALT: ()=>$.CONSUME(Tokens.InstructionCPM)
                }
            ]);
            $.ACTION(()=>{
                codeGenerator.pushInstructionWithoutArg(instruction.image, instruction.startLine);
            });
        });
        $.RULE("instructionOUT", ()=>{
            const instruction = $.CONSUME(Tokens.InstructionOUT);
            const imm = $.CONSUME(Tokens.Imm);
            $.ACTION(()=>{
                try {
                    codeGenerator.pushInstructionOUT(imm.image, instruction.startLine);
                } catch (err) {
                    throw $.SAVE_ERROR(new MismatchedTokenException(err.toString(), imm, instruction));
                }
            });
        });
        $.RULE("instructionINP", ()=>{
            const instruction = $.CONSUME(Tokens.InstructionINP);
            const imm = $.CONSUME(Tokens.Imm);
            $.ACTION(()=>{
                try {
                    codeGenerator.pushInstructionINP(imm.image, instruction.startLine);
                } catch (err) {
                    throw $.SAVE_ERROR(new MismatchedTokenException(err.toString(), imm, instruction));
                }
            });
        });
        $.RULE("instructionRST", ()=>{
            const instruction = $.CONSUME(Tokens.InstructionRST);
            const imm = $.CONSUME(Tokens.Imm);
            $.ACTION(()=>{
                try {
                    codeGenerator.pushInstructionRST(imm.image, instruction.startLine);
                } catch (err) {
                    throw $.SAVE_ERROR(new MismatchedTokenException(err.toString(), imm, instruction));
                }
            });
        });
        $.RULE("instructionWithImm8", ()=>{
            const instruction = $.OR([
                {
                    ALT: ()=>$.CONSUME(Tokens.InstructionLrI)
                },
                {
                    ALT: ()=>$.CONSUME(Tokens.InstructionLMI)
                },
                {
                    ALT: ()=>$.CONSUME(Tokens.InstructionADI)
                },
                {
                    ALT: ()=>$.CONSUME(Tokens.InstructionACI)
                },
                {
                    ALT: ()=>$.CONSUME(Tokens.InstructionSUI)
                },
                {
                    ALT: ()=>$.CONSUME(Tokens.InstructionSBI)
                },
                {
                    ALT: ()=>$.CONSUME(Tokens.InstructionNDI)
                },
                {
                    ALT: ()=>$.CONSUME(Tokens.InstructionXRI)
                },
                {
                    ALT: ()=>$.CONSUME(Tokens.InstructionORI)
                },
                {
                    ALT: ()=>$.CONSUME(Tokens.InstructionCPI)
                }
            ]);
            const imm = $.CONSUME(Tokens.Imm);
            $.ACTION(()=>{
                try {
                    codeGenerator.pushInstructionWithImm8(instruction.image, imm.image, instruction.startLine);
                } catch (err) {
                    throw $.SAVE_ERROR(new MismatchedTokenException(err.toString(), imm, instruction));
                }
            });
        });
        $.RULE("address", ()=>$.OR([
                {
                    ALT: ()=>({
                            token: $.CONSUME(Tokens.Label),
                            type: AddrType.Label
                        })
                },
                {
                    ALT: ()=>({
                            token: $.CONSUME(Tokens.Imm),
                            type: AddrType.Address
                        })
                }
            ]));
        $.RULE("instructionWithAddr", ()=>{
            const instruction = $.OR([
                {
                    ALT: ()=>$.CONSUME(Tokens.InstructionJMP)
                },
                {
                    ALT: ()=>$.CONSUME(Tokens.InstructionCAL)
                },
                {
                    ALT: ()=>$.CONSUME(Tokens.InstructionJFc)
                },
                {
                    ALT: ()=>$.CONSUME(Tokens.InstructionJTc)
                },
                {
                    ALT: ()=>$.CONSUME(Tokens.InstructionCFc)
                },
                {
                    ALT: ()=>$.CONSUME(Tokens.InstructionCTc)
                }
            ]);
            const { token: addr, type } = $.SUBRULE($.address);
            $.ACTION(()=>{
                codeGenerator.pushInstructionWithAddress(instruction.image, addr.image, type, instruction.startLine);
            });
        });
        $.performSelfAnalysis();
    }
    parse(input) {
        this.input = input;
        this.codeGenerator.clear();
        return this.program();
    }
}
module.exports = new AsmParser([]);

},{"61644ff4d2164871":"jW6vA","9d766f99a45a9f54":"6ygi6","d4d3a908bfeff89d":"4AqjJ"}],"4AqjJ":[function(require,module,exports) {
const AddrType = {
    Label: Symbol("Label"),
    Address: Symbol("Address")
};
const ACCUMULATOR_INSTRUCTION_OPCODE = {
    ad: 0,
    ac: 1,
    su: 2,
    sb: 3,
    nd: 4,
    xr: 5,
    or: 6,
    cp: 7
};
const REGISTER_OPCODE = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    h: 5,
    l: 6,
    m: 7
};
const CONDITION_DIRECTION_OPCODE = {
    f: 0,
    t: 1
};
const CONDITION_FLAG_OPCODE = {
    c: 0,
    z: 1,
    s: 2,
    p: 3
};
const UNGROUPED_INSTRUCTIONS_OPCODES = {
    hlt: 255,
    ret: 7,
    rlc: 2,
    rrc: 10,
    ral: 18,
    rar: 26
};
const MAX_IMM3 = 7;
const MAX_IMM5 = 31;
const MAX_IMM8 = 255;
class CodeGenerator {
    #bytecode = [];
    #labelToOffsetMap = new Map();
    #sourceMap = [];
    #referencesByLabel = [];
    // process hex and decimal values
    static #immToNumber(imm) {
        return imm.startsWith("0x") ? parseInt(imm.substring(2), 16) : Number(imm);
    }
    #pushAddress = (addr, type)=>{
        if (type === AddrType.Label) {
            this.#referencesByLabel.push({
                referencedLabel: addr,
                offset: this.#bytecode.length
            });
            this.#bytecode.push(0x00, 0x00);
            return;
        }
        const address = CodeGenerator.#immToNumber(addr);
        this.#bytecode.push(address & 0xFF, address >> 8);
    };
    addLabel(label) {
        if (this.#labelToOffsetMap.has(label)) return false;
        this.#labelToOffsetMap.set(label, this.#bytecode.length);
        return true;
    }
    pushInstructionRST(imm, line) {
        const immValue = CodeGenerator.#immToNumber(imm);
        if (immValue > MAX_IMM3) throw new Error("Incorrect argument, subroutine number should be less than 8");
        this.#sourceMap.push({
            offset: this.#bytecode.length,
            line
        });
        this.#bytecode.push(5 | immValue << 3);
    }
    pushInstructionINP(imm, line) {
        const immValue = CodeGenerator.#immToNumber(imm);
        if (immValue > MAX_IMM3) throw new Error("Incorrect argument, device number should be less than 8");
        this.#sourceMap.push({
            offset: this.#bytecode.length,
            line
        });
        this.#bytecode.push(65 | immValue << 1);
    }
    pushInstructionOUT(imm, line) {
        const immValue = CodeGenerator.#immToNumber(imm);
        if (immValue > MAX_IMM5 || immValue >> 3 === 0) throw new Error("Incorrect argument, device number should be in range [8..32]");
        this.#sourceMap.push({
            offset: this.#bytecode.length,
            line
        });
        this.#bytecode.push(65 | immValue << 1);
    }
    pushInstructionWithImm8(instruction, imm, line) {
        const immValue = CodeGenerator.#immToNumber(imm);
        if (immValue > MAX_IMM8) throw new Error("Incorrect argument, immediate value should fit into single byte");
        this.#sourceMap.push({
            offset: this.#bytecode.length,
            line
        });
        // LrI / LMI
        if (instruction[0] === "l") this.#bytecode.push(6 | REGISTER_OPCODE[instruction[1]] << 3);
        else this.#bytecode.push(4 | ACCUMULATOR_INSTRUCTION_OPCODE[instruction.substring(0, 2)] << 3);
        this.#bytecode.push(immValue);
    }
    pushInstructionWithAddress(instruction, addr, type, line) {
        this.#sourceMap.push({
            offset: this.#bytecode.length,
            line
        });
        switch(instruction){
            case "jmp":
                this.#bytecode.push(68);
                break;
            case "cal":
                this.#bytecode.push(70);
                break;
            default:
                {
                    // JFc / JTc / CFc / CTc
                    const instrOpcode = instruction[0] === "j" ? 0 : 2;
                    const condDirOpcode = CONDITION_DIRECTION_OPCODE[instruction[1]];
                    const condFlagOpcode = CONDITION_FLAG_OPCODE[instruction[2]];
                    this.#bytecode.push(64 | condDirOpcode << 5 | condFlagOpcode << 3 | instrOpcode);
                    break;
                }
        }
        this.#pushAddress(addr, type);
    }
    pushInstructionWithoutArg(instruction, line) {
        this.#sourceMap.push({
            offset: this.#bytecode.length,
            line
        });
        if (UNGROUPED_INSTRUCTIONS_OPCODES[instruction]) {
            this.#bytecode.push(UNGROUPED_INSTRUCTIONS_OPCODES[instruction]);
            return;
        }
        switch(instruction[0]){
            // Lrr / LrM / LMr
            case "l":
                this.#bytecode.push(192 | REGISTER_OPCODE[instruction[1]] << 3 | REGISTER_OPCODE[instruction[2]]);
                break;
            // INr
            case "i":
                this.#bytecode.push(0 | REGISTER_OPCODE[instruction[2]] << 3);
                break;
            // DCr
            case "d":
                this.#bytecode.push(1 | REGISTER_OPCODE[instruction[2]] << 3);
                break;
            // RFc / RTc
            case "r":
                {
                    const condDirOpcode = CONDITION_DIRECTION_OPCODE[instruction[1]];
                    const condFlagOpcode = CONDITION_FLAG_OPCODE[instruction[2]];
                    this.#bytecode.push(3 | condDirOpcode << 5 | condFlagOpcode << 3);
                    break;
                }
            default:
                {
                    const regOpcode = REGISTER_OPCODE[instruction[2]];
                    const instrOpcode = ACCUMULATOR_INSTRUCTION_OPCODE[instruction.substring(0, 2)];
                    this.#bytecode.push(128 | instrOpcode << 3 | regOpcode);
                    break;
                }
        }
    }
    generate() {
        // on this stage we have information about all labels, so we can fill all references to actual instructions
        for (const { referencedLabel, offset: addrOffset } of this.#referencesByLabel){
            const labelOffset = this.#labelToOffsetMap.get(referencedLabel);
            if (labelOffset === undefined) throw new Error(`Unknown label ${referencedLabel}`);
            this.#bytecode[addrOffset] = labelOffset & 0xFF;
            this.#bytecode[addrOffset + 1] = labelOffset >> 8;
        }
        return {
            bytecode: Uint8Array.from(this.#bytecode),
            sourceMap: [
                ...this.#sourceMap
            ],
            symbols: [
                ...this.#labelToOffsetMap.entries()
            ].map(([label, offset])=>({
                    label,
                    offset
                }))
        };
    }
    clear() {
        this.#bytecode = [];
        this.#sourceMap = [];
        this.#labelToOffsetMap = new Map();
        this.#referencesByLabel = [];
    }
}
module.exports = {
    CodeGenerator,
    AddrType
};

},{}]},["3YCXX","bqDZI"], "bqDZI", "parcelRequiree242")

//# sourceMappingURL=compiler.8f90f670.js.map
