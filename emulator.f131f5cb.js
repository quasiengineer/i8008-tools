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
})({"aWXnx":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "a8fb9c35fdafe466";
module.bundle.HMR_BUNDLE_ID = "b92c936ef131f5cb";
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

},{}],"1gmWp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _i8008Emu = require("i8008-emu");
var _i8008EmuDefault = parcelHelpers.interopDefault(_i8008Emu);
let system;
let breakpoints = new Set();
const sendState = ()=>{
    postMessage({
        command: "state",
        flags: system.flags,
        ram: system.memory,
        registers: system.registers,
        stack: system.stack
    });
};
/*
 * Interrupt execution loop to check if there is some messages into channel
 */ const yieldToMacrotasks = ()=>new Promise((resolve)=>{
        setTimeout(()=>resolve(), 0);
    });
const YIELD_PERIOD_TO_CHECK_FOR_NEW_MESSAGES_IN_EMULATOR_INSTRUCTIONS = 100000;
const commands = {
    breakpoints: ({ breakpoints: inputBreakpoints })=>{
        breakpoints = inputBreakpoints;
    },
    continue: async ()=>{
        let stepsFromLastChannelCheck = 0;
        while(!system.isFinished){
            system.instruction();
            if (breakpoints.has(system.registers.PC)) {
                sendState();
                return;
            }
            stepsFromLastChannelCheck++;
            if (stepsFromLastChannelCheck % YIELD_PERIOD_TO_CHECK_FOR_NEW_MESSAGES_IN_EMULATOR_INSTRUCTIONS === 0) {
                await yieldToMacrotasks();
                stepsFromLastChannelCheck = 0;
            }
        }
        sendState();
        postMessage({
            command: "finish"
        });
    },
    run: async ({ breakpoints: inputBreakpoints, mode, ramDump, romDump })=>{
        if (mode !== "debug" && mode !== "run") throw "Unknown emulator mode";
        breakpoints = inputBreakpoints || new Set();
        const memoryDump = new Uint8Array(2 ** 14);
        memoryDump.set(romDump, 0);
        if (ramDump.data) memoryDump.set(new Uint8Array(ramDump.data), Number(ramDump.offset));
        system = new (0, _i8008EmuDefault.default)({
            ioOutputHandler: ({ data, deviceNo })=>postMessage({
                    command: "IOOutput",
                    data,
                    deviceNo
                }),
            memoryDump
        });
        sendState();
        if (mode === "run") {
            let stepsFromLastChannelCheck = 0;
            while(!system.isFinished){
                system.instruction();
                stepsFromLastChannelCheck++;
                if (stepsFromLastChannelCheck % YIELD_PERIOD_TO_CHECK_FOR_NEW_MESSAGES_IN_EMULATOR_INSTRUCTIONS === 0) {
                    await yieldToMacrotasks();
                    stepsFromLastChannelCheck = 0;
                }
            }
            sendState();
            postMessage({
                command: "finish"
            });
        }
    },
    stepInto: ()=>{
        if (!system.isFinished) {
            system.instruction();
            sendState();
        } else postMessage({
            command: "finish"
        });
    },
    stepOver: async ()=>{
        const currentNestingLevel = system.registers.SP;
        if (!system.isFinished) {
            system.instruction();
            let stepsFromLastChannelCheck = 0;
            while(currentNestingLevel !== system.registers.SP){
                if (system.isFinished) {
                    sendState();
                    postMessage({
                        command: "finish"
                    });
                    return;
                }
                system.instruction();
                stepsFromLastChannelCheck++;
                if (stepsFromLastChannelCheck % YIELD_PERIOD_TO_CHECK_FOR_NEW_MESSAGES_IN_EMULATOR_INSTRUCTIONS === 0) {
                    await yieldToMacrotasks();
                    stepsFromLastChannelCheck = 0;
                }
            }
            sendState();
        } else postMessage({
            command: "finish"
        });
    },
    stop: ()=>{
        system.terminate();
        postMessage({
            command: "finish"
        });
    }
};
onmessage = ({ data: { command, ...args } })=>{
    try {
        if (!commands[command]) {
            postMessage({
                command,
                error: "Unknown command"
            });
            return;
        }
        commands[command](args);
    } catch (err) {
        postMessage({
            command,
            error: err.toString()
        });
    }
};

},{"i8008-emu":"bCWSK","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"bCWSK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _signalBusJs = require("./signals/signalBus.js");
var _signalBusJsDefault = parcelHelpers.interopDefault(_signalBusJs);
var _clockJs = require("./devices/clock.js");
var _clockJsDefault = parcelHelpers.interopDefault(_clockJs);
var _cpuJs = require("./devices/cpu/cpu.js");
var _cpuJsDefault = parcelHelpers.interopDefault(_cpuJs);
var _memoryJs = require("./devices/memory.js");
var _memoryJsDefault = parcelHelpers.interopDefault(_memoryJs);
class System {
    #cpu;
    #memory;
    #clockGenerator;
    #signalBus;
    #terminated = false;
    #doesCpuStartedNewInstruction() {
        return this.#cpu.state === (0, _cpuJs.CPU_STATES).T1 && this.#cpu.instructionCycle === 0;
    }
    constructor({ memoryDump, ioOutputHandler }){
        this.#signalBus = new (0, _signalBusJsDefault.default)();
        this.#clockGenerator = new (0, _clockJsDefault.default)(this.#signalBus);
        this.#cpu = new (0, _cpuJsDefault.default)(this.#signalBus);
        this.#memory = new (0, _memoryJsDefault.default)(this.#signalBus, memoryDump, ioOutputHandler);
    }
    instruction() {
        do {
            // each t-state requires two ticks
            this.#clockGenerator.tick();
            this.#clockGenerator.tick();
        }while (this.#cpu.state !== (0, _cpuJs.CPU_STATES).STOPPED && !this.#doesCpuStartedNewInstruction());
    }
    terminate() {
        this.#terminated = true;
    }
    get isFinished() {
        return this.#terminated || this.#cpu.state === (0, _cpuJs.CPU_STATES).STOPPED;
    }
    get ticks() {
        return this.#clockGenerator.ticks;
    }
    get tStates() {
        return this.#clockGenerator.ticks / 2n;
    }
    get stack() {
        return this.#cpu.stack;
    }
    get registers() {
        return this.#cpu.registers;
    }
    get flags() {
        return this.#cpu.flags;
    }
    get memory() {
        return this.#memory.memory;
    }
}
exports.default = System;

},{"./signals/signalBus.js":"a4x0q","./devices/clock.js":"1tFOF","./devices/cpu/cpu.js":"ay2kO","./devices/memory.js":"gqmCe","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"a4x0q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _signalStatesJs = require("./signalStates.js");
var _signalStatesJsDefault = parcelHelpers.interopDefault(_signalStatesJs);
class SignalBus {
    #signals = {};
    #highListeners = {};
    #lowListeners = {};
    registerSignalSource(name, signalSource) {
        let signal = this.#signals[name];
        if (!signal) {
            signal = {
                state: signalSource.state,
                signalSources: []
            };
            this.#signals[name] = signal;
        }
        signal.signalSources.push(signalSource);
        signalSource.addListener((sourceState)=>{
            const currentState = signal.state;
            const newState = sourceState === (0, _signalStatesJsDefault.default).FLOATING ? signal.signalSources.find((source)=>source.state !== (0, _signalStatesJsDefault.default).FLOATING)?.state || (0, _signalStatesJsDefault.default).LOW : sourceState;
            signal.state = newState;
            if (newState === (0, _signalStatesJsDefault.default).HIGH && currentState !== (0, _signalStatesJsDefault.default).HIGH) this.#highListeners[name]?.forEach((fn)=>fn());
            else if (newState === (0, _signalStatesJsDefault.default).LOW && currentState !== (0, _signalStatesJsDefault.default).LOW) this.#lowListeners[name]?.forEach((fn)=>fn());
        });
    }
    signalState(name) {
        return this.#signals[name]?.state;
    }
    busValue(busName, busWidth) {
        let value = 0;
        for(let signalIdx = 0; signalIdx < busWidth; signalIdx++){
            const signalValue = this.#signals[`${busName}${signalIdx}`]?.state === (0, _signalStatesJsDefault.default).HIGH ? 1 : 0;
            value |= signalValue << signalIdx;
        }
        return value;
    }
    onHigh(name, fn) {
        if (!this.#highListeners[name]) this.#highListeners[name] = [];
        this.#highListeners[name].push(fn);
    }
    onLow(name, fn) {
        if (!this.#lowListeners[name]) this.#lowListeners[name] = [];
        this.#lowListeners[name].push(fn);
    }
}
exports.default = SignalBus;

},{"./signalStates.js":"dyMPe","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"dyMPe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const SIGNAL_STATES = Object.freeze({
    HIGH: Symbol("SIGNAL_STATES/HIGH"),
    LOW: Symbol("SIGNAL_STATES/LOW"),
    FLOATING: Symbol("SIGNAL_STATES/FLOATING")
});
exports.default = SIGNAL_STATES;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"fn8Fk":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"1tFOF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _signalSourceJs = require("../signals/signalSource.js");
var _signalSourceJsDefault = parcelHelpers.interopDefault(_signalSourceJs);
var _signalStatesJs = require("../signals/signalStates.js");
var _signalStatesJsDefault = parcelHelpers.interopDefault(_signalStatesJs);
class ClockGenerator {
    #ph1Signal;
    #ph2Signal;
    #ticks = 0n;
    constructor(signalBus){
        this.#ph1Signal = new (0, _signalSourceJsDefault.default)();
        this.#ph2Signal = new (0, _signalSourceJsDefault.default)();
        signalBus.registerSignalSource("ph1", this.#ph1Signal);
        signalBus.registerSignalSource("ph2", this.#ph2Signal);
    }
    tick() {
        this.#ph1Signal.state = (0, _signalStatesJsDefault.default).HIGH;
        this.#ph1Signal.state = (0, _signalStatesJsDefault.default).LOW;
        this.#ph2Signal.state = (0, _signalStatesJsDefault.default).HIGH;
        this.#ph2Signal.state = (0, _signalStatesJsDefault.default).LOW;
        this.#ticks += 1n;
    }
    get ticks() {
        return this.#ticks;
    }
}
exports.default = ClockGenerator;

},{"../signals/signalSource.js":"2pyeY","../signals/signalStates.js":"dyMPe","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"2pyeY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _signalStatesJs = require("./signalStates.js");
var _signalStatesJsDefault = parcelHelpers.interopDefault(_signalStatesJs);
class SignalSource {
    #state = (0, _signalStatesJsDefault.default).FLOATING;
    #listeners = [];
    addListener(onChange) {
        this.#listeners.push(onChange);
    }
    set state(value) {
        this.#state = value;
        this.#listeners.forEach((fn)=>fn(value));
    }
    get state() {
        return this.#state;
    }
}
exports.default = SignalSource;

},{"./signalStates.js":"dyMPe","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"ay2kO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CPU_STATES", ()=>CPU_STATES);
parcelHelpers.export(exports, "STATE_TO_NUMERIC", ()=>STATE_TO_NUMERIC);
parcelHelpers.export(exports, "NUMERIC_TO_STATE", ()=>NUMERIC_TO_STATE);
parcelHelpers.export(exports, "INSTRUCTION_CYCLES", ()=>INSTRUCTION_CYCLES);
parcelHelpers.export(exports, "CYCLE_TO_NUMERIC", ()=>CYCLE_TO_NUMERIC);
parcelHelpers.export(exports, "NUMERIC_TO_CYCLE", ()=>NUMERIC_TO_CYCLE);
var _signalSourceJs = require("../../signals/signalSource.js");
var _signalSourceJsDefault = parcelHelpers.interopDefault(_signalSourceJs);
var _signalStatesJs = require("../../signals/signalStates.js");
var _signalStatesJsDefault = parcelHelpers.interopDefault(_signalStatesJs);
var _cpuInstructionDecoderJs = require("./cpuInstructionDecoder.js");
var _cpuInstructionDecoderJsDefault = parcelHelpers.interopDefault(_cpuInstructionDecoderJs);
const CPU_STATES = Object.freeze({
    T1: Symbol("CPU_STATES/T1"),
    T2: Symbol("CPU_STATES/T2"),
    T3: Symbol("CPU_STATES/T3"),
    T4: Symbol("CPU_STATES/T4"),
    T5: Symbol("CPU_STATES/T5"),
    STOPPED: Symbol("CPU_STATES/STOPPED")
});
const STATE_TO_NUMERIC = Object.freeze({
    [CPU_STATES.T1]: 2,
    [CPU_STATES.T2]: 4,
    [CPU_STATES.T3]: 1,
    [CPU_STATES.T4]: 7,
    [CPU_STATES.T5]: 5,
    [CPU_STATES.STOPPED]: 3
});
const NUMERIC_TO_STATE = Object.freeze({
    2: CPU_STATES.T1,
    4: CPU_STATES.T2,
    1: CPU_STATES.T3,
    7: CPU_STATES.T4,
    5: CPU_STATES.T5,
    3: CPU_STATES.STOPPED
});
const INSTRUCTION_CYCLES = Object.freeze({
    PCI: Symbol("INSTRUCTION_CYCLES/PCI"),
    PCR: Symbol("INSTRUCTION_CYCLES/PCR"),
    PCC: Symbol("INSTRUCTION_CYCLES/PCC"),
    PCW: Symbol("INSTRUCTION_CYCLES/PCW")
});
const CYCLE_TO_NUMERIC = Object.freeze({
    [INSTRUCTION_CYCLES.PCI]: 0,
    [INSTRUCTION_CYCLES.PCR]: 2,
    [INSTRUCTION_CYCLES.PCC]: 1,
    [INSTRUCTION_CYCLES.PCW]: 3
});
const NUMERIC_TO_CYCLE = Object.freeze({
    0: INSTRUCTION_CYCLES.PCI,
    2: INSTRUCTION_CYCLES.PCR,
    1: INSTRUCTION_CYCLES.PCC,
    3: INSTRUCTION_CYCLES.PCW
});
const STACK_DEPTH = 7;
class CPU {
    #state = CPU_STATES.T1;
    #nextState;
    #clockPeriod = 0;
    #instructionCycle = 0;
    #currentInstruction = {
        type: undefined,
        op1: undefined,
        op2: undefined
    };
    #registers = {
        PC: 0x0,
        SP: 0x0,
        A: 0x0,
        B: 0x0,
        C: 0x0,
        D: 0x0,
        E: 0x0,
        H: 0x0,
        L: 0x0
    };
    #flags = {
        carry: false,
        zero: false,
        sign: false,
        parity: false
    };
    #stack = new Array(STACK_DEPTH).fill(0);
    #signalBus;
    #syncSignal;
    #s0Signal;
    #s1Signal;
    #s2Signal;
    #dataBusSignals;
    constructor(signalBus){
        this.#syncSignal = new (0, _signalSourceJsDefault.default)();
        this.#s0Signal = new (0, _signalSourceJsDefault.default)();
        this.#s1Signal = new (0, _signalSourceJsDefault.default)();
        this.#s2Signal = new (0, _signalSourceJsDefault.default)();
        this.#dataBusSignals = Array.from(Array(8), ()=>new (0, _signalSourceJsDefault.default)());
        this.#signalBus = signalBus;
        signalBus.registerSignalSource("sync", this.#syncSignal);
        signalBus.registerSignalSource("s0", this.#s0Signal);
        signalBus.registerSignalSource("s1", this.#s1Signal);
        signalBus.registerSignalSource("s2", this.#s2Signal);
        this.#dataBusSignals.forEach((dataSignal, idx)=>signalBus.registerSignalSource(`d${idx}`, dataSignal));
        signalBus.onHigh("ph1", ()=>{
            // each t-state contains two clock periods, need to distinguish them
            this.#clockPeriod = this.#clockPeriod === 1 ? 2 : 1;
        });
        signalBus.onLow("ph1", ()=>{
            // update SYNC signal
            this.#syncSignal.state = this.#clockPeriod === 1 ? (0, _signalStatesJsDefault.default).HIGH : (0, _signalStatesJsDefault.default).LOW;
            // read/write data bus due 2nd clock period of t-state
            if (this.#clockPeriod === 2) this.#nextState = this.#stateWorker();
        });
        signalBus.onLow("ph2", ()=>{
            if (this.#clockPeriod === 1) {
                // update Sx signals
                const sX = STATE_TO_NUMERIC[this.#state];
                this.#s2Signal.state = sX & 0x4 ? (0, _signalStatesJsDefault.default).HIGH : (0, _signalStatesJsDefault.default).LOW;
                this.#s1Signal.state = sX & 0x2 ? (0, _signalStatesJsDefault.default).HIGH : (0, _signalStatesJsDefault.default).LOW;
                this.#s0Signal.state = sX & 0x1 ? (0, _signalStatesJsDefault.default).HIGH : (0, _signalStatesJsDefault.default).LOW;
            } else {
                // free data bus
                this.#dataBusSignals.forEach((dataSignal)=>{
                    dataSignal.state = (0, _signalStatesJsDefault.default).FLOATING;
                });
                // update state, based on pending value
                this.#state = this.#nextState;
            }
        });
    }
    #pushPCToStack() {
        this.#stack[this.#registers.SP] = this.#registers.PC;
        this.#registers.SP += 1;
        // XXX: i8008 handles that properly, but it sounds like a bad practice
        if (this.#registers.SP >= STACK_DEPTH) throw Error("Stack overflow!");
    }
    #popPCFromStack() {
        // XXX: i8008 handles that properly, but it sounds like a bad practice
        if (this.#registers.SP <= 0) throw Error("Stack overflow!");
        this.#registers.SP -= 1;
        this.#registers.PC = this.#stack[this.#registers.SP];
    }
    #updateFlags(value, carry) {
        if (carry !== undefined) this.#flags.carry = carry;
        this.#flags.zero = value === 0x0;
        this.#flags.sign = (value & 0x80) === 0x80;
        this.#flags.parity = (value & 0x1) === 0x0;
    }
    #performALUOperation(operation, value) {
        let result = this.#registers.A;
        switch(operation){
            case (0, _cpuInstructionDecoderJs.ALU_OPERATIONS).ADD:
                result += value;
                break;
            case (0, _cpuInstructionDecoderJs.ALU_OPERATIONS).ADC:
                result += value + (this.#flags.carry ? 1 : 0);
                break;
            case (0, _cpuInstructionDecoderJs.ALU_OPERATIONS).SUB:
                result -= value;
                break;
            case (0, _cpuInstructionDecoderJs.ALU_OPERATIONS).SBC:
                result -= value + (this.#flags.carry ? 1 : 0);
                break;
            case (0, _cpuInstructionDecoderJs.ALU_OPERATIONS).AND:
                result &= value;
                break;
            case (0, _cpuInstructionDecoderJs.ALU_OPERATIONS).XOR:
                result ^= value;
                break;
            case (0, _cpuInstructionDecoderJs.ALU_OPERATIONS).OR:
                result |= value;
                break;
            case (0, _cpuInstructionDecoderJs.ALU_OPERATIONS).CMP:
                result -= value;
                break;
            default:
                break;
        }
        this.#updateFlags(result, result > 0xFF || result < 0);
        if (operation !== (0, _cpuInstructionDecoderJs.ALU_OPERATIONS).CMP) this.#registers.A = result < 0 ? result + 0x100 : result & 0xFF;
    }
    #writeValueToDataBus(value) {
        this.#dataBusSignals.forEach((dataSignal, idx)=>{
            dataSignal.state = value & 1 << idx ? (0, _signalStatesJsDefault.default).HIGH : (0, _signalStatesJsDefault.default).LOW;
        });
    }
    #decodingState(instruction) {
        this.#currentInstruction = (0, _cpuInstructionDecoderJsDefault.default)(instruction);
        switch(this.#currentInstruction.type){
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).HLT:
                return CPU_STATES.STOPPED;
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).RLC:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).RRC:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).RAL:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).RAR:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).INr:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).DCr:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).RET:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).ALUr:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).Lrr:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).LMr:
                return CPU_STATES.T4;
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).INP:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).OUT:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).JMP:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).JFc:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).JTc:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).CAL:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).CFc:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).CTc:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).ALUM:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).ALUI:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).LMI:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).LrI:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).LrM:
                this.#instructionCycle += 1;
                return CPU_STATES.T1;
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).RST:
                this.#pushPCToStack();
                return CPU_STATES.T4;
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).RFc:
                return this.#flags[this.#currentInstruction.op1] ? CPU_STATES.T1 : CPU_STATES.T4;
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).RTc:
                return this.#flags[this.#currentInstruction.op1] ? CPU_STATES.T4 : CPU_STATES.T1;
            default:
                return CPU_STATES.STOPPED;
        }
    }
    #firstExecutionStateOnFirstCycle() {
        switch(this.#currentInstruction.type){
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).RLC:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).RRC:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).RAL:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).RAR:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).INr:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).DCr:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).ALUr:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).Lrr:
                return CPU_STATES.T5;
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).RET:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).RFc:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).RTc:
                this.#popPCFromStack();
                return CPU_STATES.T5;
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).RST:
                this.#registers.PC &= 0xFF;
                return CPU_STATES.T5;
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).LMr:
                this.#instructionCycle += 1;
                return CPU_STATES.T1;
            default:
                return CPU_STATES.STOPPED;
        }
    }
    #secondExecutionStateOnFirstCycle() {
        switch(this.#currentInstruction.type){
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).RST:
                this.#registers.PC = this.#currentInstruction.op1 << 3;
                return CPU_STATES.T1;
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).RET:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).RFc:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).RTc:
                return CPU_STATES.T1;
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).Lrr:
                this.#registers[this.#currentInstruction.op1] = this.#registers[this.#currentInstruction.op2];
                return CPU_STATES.T1;
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).RLC:
                this.#flags.carry = (this.#registers.A & 0x80) === 0x80;
                this.#registers.A = this.#registers.A << 1 & 0xFF | (this.#flags.carry ? 1 : 0);
                return CPU_STATES.T1;
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).RRC:
                this.#flags.carry = (this.#registers.A & 0x1) === 0x1;
                this.#registers.A = this.#registers.A >> 1 | (this.#flags.carry ? 0x80 : 0);
                return CPU_STATES.T1;
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).RAL:
                {
                    const originalCarry = this.#flags.carry;
                    this.#flags.carry = (this.#registers.A & 0x80) === 0x80;
                    this.#registers.A = this.#registers.A << 1 & 0xFF | (originalCarry ? 1 : 0);
                    return CPU_STATES.T1;
                }
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).RAR:
                {
                    const originalCarry = this.#flags.carry;
                    this.#flags.carry = (this.#registers.A & 0x1) === 0x1;
                    this.#registers.A = this.#registers.A >> 1 | (originalCarry ? 0x80 : 0);
                    return CPU_STATES.T1;
                }
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).INr:
                this.#registers[this.#currentInstruction.op1] = this.#registers[this.#currentInstruction.op1] + 1 & 0xFF;
                this.#updateFlags(this.#registers[this.#currentInstruction.op1]);
                return CPU_STATES.T1;
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).DCr:
                {
                    const result = this.#registers[this.#currentInstruction.op1] - 1;
                    this.#registers[this.#currentInstruction.op1] = result < 0 ? result + 0x100 : result;
                    this.#updateFlags(this.#registers[this.#currentInstruction.op1]);
                    return CPU_STATES.T1;
                }
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).ALUr:
                this.#performALUOperation(this.#currentInstruction.op1, this.#registers[this.#currentInstruction.op2]);
                return CPU_STATES.T1;
            default:
                return CPU_STATES.STOPPED;
        }
    }
    #stateWorkerForFirstCycle() {
        switch(this.#state){
            case CPU_STATES.T1:
                this.#writeValueToDataBus(this.#registers.PC & 0xFF);
                return CPU_STATES.T2;
            case CPU_STATES.T2:
                this.#writeValueToDataBus(CYCLE_TO_NUMERIC[INSTRUCTION_CYCLES.PCI] << 6 | this.#registers.PC >> 8);
                this.#registers.PC += 1;
                return CPU_STATES.T3;
            case CPU_STATES.T3:
                return this.#decodingState(this.#signalBus.busValue("d", 8));
            case CPU_STATES.T4:
                return this.#firstExecutionStateOnFirstCycle();
            case CPU_STATES.T5:
                return this.#secondExecutionStateOnFirstCycle();
            default:
                return CPU_STATES.STOPPED;
        }
    }
    #firstAddressStateOnSecondCycle() {
        switch(this.#currentInstruction.type){
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).LrM:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).LMr:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).ALUM:
                this.#writeValueToDataBus(this.#registers.L);
                return CPU_STATES.T2;
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).LrI:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).LMI:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).ALUI:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).JMP:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).JFc:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).JTc:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).CAL:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).CFc:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).CTc:
                this.#writeValueToDataBus(this.#registers.PC & 0xFF);
                return CPU_STATES.T2;
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).INP:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).OUT:
                this.#writeValueToDataBus(this.#registers.A);
                return CPU_STATES.T2;
            default:
                return CPU_STATES.STOPPED;
        }
    }
    #secondAddressStateOnSecondCycle() {
        switch(this.#currentInstruction.type){
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).LMr:
                this.#writeValueToDataBus(CYCLE_TO_NUMERIC[INSTRUCTION_CYCLES.PCW] << 6 | this.#registers.H);
                return CPU_STATES.T3;
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).LrM:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).ALUM:
                this.#writeValueToDataBus(CYCLE_TO_NUMERIC[INSTRUCTION_CYCLES.PCR] << 6 | this.#registers.H);
                return CPU_STATES.T3;
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).LrI:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).LMI:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).ALUI:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).JMP:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).JFc:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).JTc:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).CAL:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).CFc:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).CTc:
                this.#writeValueToDataBus(CYCLE_TO_NUMERIC[INSTRUCTION_CYCLES.PCR] << 6 | this.#registers.PC >> 8);
                this.#registers.PC += 1;
                return CPU_STATES.T3;
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).INP:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).OUT:
                this.#writeValueToDataBus(this.#currentInstruction.opcode);
                return CPU_STATES.T3;
            default:
                return CPU_STATES.STOPPED;
        }
    }
    #dataBusOperationOnSecondCycle() {
        switch(this.#currentInstruction.type){
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).LMI:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).JMP:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).JFc:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).JTc:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).CAL:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).CFc:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).CTc:
                this.#currentInstruction.op2 = this.#signalBus.busValue("d", 8);
                this.#instructionCycle += 1;
                return CPU_STATES.T1;
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).LrM:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).LrI:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).ALUM:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).ALUI:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).INP:
                this.#currentInstruction.op2 = this.#signalBus.busValue("d", 8);
                return CPU_STATES.T4;
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).OUT:
                this.#instructionCycle = 0;
                return CPU_STATES.T1;
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).LMr:
                this.#writeValueToDataBus(this.#registers[this.#currentInstruction.op1]);
                this.#instructionCycle = 0;
                return CPU_STATES.T1;
            default:
                return CPU_STATES.STOPPED;
        }
    }
    #executionStateOnSecondCycle() {
        switch(this.#currentInstruction.type){
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).LrM:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).LrI:
                this.#registers[this.#currentInstruction.op1] = this.#currentInstruction.op2;
                return CPU_STATES.T1;
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).ALUM:
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).ALUI:
                this.#performALUOperation(this.#currentInstruction.op1, this.#currentInstruction.op2);
                return CPU_STATES.T1;
            case (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).INP:
                this.#registers.A = this.#currentInstruction.op2;
                return CPU_STATES.T1;
            default:
                return CPU_STATES.STOPPED;
        }
    }
    #stateWorkerForSecondCycle() {
        switch(this.#state){
            case CPU_STATES.T1:
                return this.#firstAddressStateOnSecondCycle();
            case CPU_STATES.T2:
                return this.#secondAddressStateOnSecondCycle();
            case CPU_STATES.T3:
                return this.#dataBusOperationOnSecondCycle();
            case CPU_STATES.T4:
                if (this.#currentInstruction.type === (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).INP) {
                    const { carry, zero, parity, sign } = this.#flags;
                    const flags = (carry ? 0x8 : 0x0) | (parity ? 0x4 : 0x0) | (zero ? 0x2 : 0x0) | (sign ? 0x1 : 0x0);
                    this.#writeValueToDataBus(flags);
                }
                return CPU_STATES.T5;
            case CPU_STATES.T5:
                this.#instructionCycle = 0;
                return this.#executionStateOnSecondCycle();
            default:
                return CPU_STATES.STOPPED;
        }
    }
    #stateWorkerForThirdCycle() {
        const { type } = this.#currentInstruction;
        switch(this.#state){
            case CPU_STATES.T1:
                this.#writeValueToDataBus(type === (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).LMI ? this.#registers.L : this.#registers.PC & 0xFF);
                return CPU_STATES.T2;
            case CPU_STATES.T2:
                if (type === (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).LMI) this.#writeValueToDataBus(CYCLE_TO_NUMERIC[INSTRUCTION_CYCLES.PCW] << 6 | this.#registers.H);
                else {
                    this.#writeValueToDataBus(CYCLE_TO_NUMERIC[INSTRUCTION_CYCLES.PCR] << 6 | this.#registers.PC >> 8);
                    this.#registers.PC += 1;
                }
                return CPU_STATES.T3;
            case CPU_STATES.T3:
                {
                    if (type === (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).LMI) {
                        this.#writeValueToDataBus(this.#currentInstruction.op2);
                        this.#instructionCycle = 0;
                        return CPU_STATES.T1;
                    }
                    this.#currentInstruction.op2 |= this.#signalBus.busValue("d", 8) << 8;
                    const flag = this.#flags[this.#currentInstruction.op1];
                    const falseCondFailed = (type === (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).JFc || type === (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).CFc) && flag;
                    const trueCondFailed = (type === (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).JTc || type === (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).CTc) && !flag;
                    if (falseCondFailed || trueCondFailed) {
                        this.#instructionCycle = 0;
                        return CPU_STATES.T1;
                    }
                    return CPU_STATES.T4;
                }
            case CPU_STATES.T4:
                if (type === (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).CAL || type === (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).CFc || type === (0, _cpuInstructionDecoderJs.INSTRUCTION_TYPES).CTc) this.#pushPCToStack();
                this.#registers.PC = this.#registers.PC & 0xFF | this.#currentInstruction.op2 & 0xFF00;
                return CPU_STATES.T5;
            case CPU_STATES.T5:
                this.#registers.PC = this.#registers.PC & 0xFF00 | this.#currentInstruction.op2 & 0xFF;
                this.#instructionCycle = 0;
                return CPU_STATES.T1;
            default:
                return CPU_STATES.STOPPED;
        }
    }
    #stateWorker() {
        if (this.#state === CPU_STATES.STOPPED) return CPU_STATES.STOPPED;
        switch(this.#instructionCycle){
            case 0:
                return this.#stateWorkerForFirstCycle();
            case 1:
                return this.#stateWorkerForSecondCycle();
            case 2:
                return this.#stateWorkerForThirdCycle();
            default:
                return CPU_STATES.STOPPED;
        }
    }
    get instructionCycle() {
        return this.#instructionCycle;
    }
    get stack() {
        return this.#stack;
    }
    get registers() {
        return this.#registers;
    }
    get flags() {
        return this.#flags;
    }
    get state() {
        return this.#state;
    }
}
exports.default = CPU;

},{"../../signals/signalSource.js":"2pyeY","../../signals/signalStates.js":"dyMPe","./cpuInstructionDecoder.js":"dQOVk","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"dQOVk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "INSTRUCTION_TYPES", ()=>INSTRUCTION_TYPES);
parcelHelpers.export(exports, "ALU_OPERATIONS", ()=>ALU_OPERATIONS);
parcelHelpers.export(exports, "default", ()=>decodeInstruction);
const INSTRUCTION_TYPES = Object.freeze({
    Lrr: Symbol("INSTRUCTIONS/Lrr"),
    LrM: Symbol("INSTRUCTIONS/LrM"),
    LMr: Symbol("INSTRUCTIONS/LMr"),
    LrI: Symbol("INSTRUCTIONS/LrI"),
    LMI: Symbol("INSTRUCTIONS/LMI"),
    INr: Symbol("INSTRUCTIONS/INr"),
    DCr: Symbol("INSTRUCTIONS/DCr"),
    ALUr: Symbol("INSTRUCTIONS/ALUr"),
    ALUM: Symbol("INSTRUCTIONS/ALUM"),
    ALUI: Symbol("INSTRUCTIONS/ALUI"),
    RLC: Symbol("INSTRUCTIONS/RLC"),
    RRC: Symbol("INSTRUCTIONS/RRC"),
    RAL: Symbol("INSTRUCTIONS/RAL"),
    RAR: Symbol("INSTRUCTIONS/RAR"),
    JMP: Symbol("INSTRUCTIONS/JMP"),
    JFc: Symbol("INSTRUCTIONS/JFc"),
    JTc: Symbol("INSTRUCTIONS/JTc"),
    CAL: Symbol("INSTRUCTIONS/CAL"),
    CFc: Symbol("INSTRUCTIONS/CFc"),
    CTc: Symbol("INSTRUCTIONS/CTc"),
    RET: Symbol("INSTRUCTIONS/RET"),
    RFc: Symbol("INSTRUCTIONS/RFc"),
    RTc: Symbol("INSTRUCTIONS/RTc"),
    RST: Symbol("INSTRUCTIONS/RST"),
    INP: Symbol("INSTRUCTIONS/INP"),
    OUT: Symbol("INSTRUCTIONS/OUT"),
    HLT: Symbol("INSTRUCTIONS/HLT")
});
const ALU_OPERATIONS = Object.freeze({
    ADD: Symbol("ALU_OPERATIONS/ADD"),
    ADC: Symbol("ALU_OPERATIONS/ADC"),
    SUB: Symbol("ALU_OPERATIONS/SUB"),
    SBC: Symbol("ALU_OPERATIONS/SBC"),
    AND: Symbol("ALU_OPERATIONS/AND"),
    XOR: Symbol("ALU_OPERATIONS/XOR"),
    OR: Symbol("ALU_OPERATIONS/OR"),
    CMP: Symbol("ALU_OPERATIONS/CMP")
});
const INSTRUCTIONS_MAP = [
    // 0x00
    {
        type: INSTRUCTION_TYPES.HLT
    },
    {
        type: INSTRUCTION_TYPES.HLT
    },
    {
        type: INSTRUCTION_TYPES.RLC
    },
    {
        type: INSTRUCTION_TYPES.RFc,
        op1: "carry"
    },
    {
        type: INSTRUCTION_TYPES.ALUI,
        op1: ALU_OPERATIONS.ADD
    },
    {
        type: INSTRUCTION_TYPES.RST,
        op1: 0
    },
    {
        type: INSTRUCTION_TYPES.LrI,
        op1: "A"
    },
    {
        type: INSTRUCTION_TYPES.RET
    },
    {
        type: INSTRUCTION_TYPES.INr,
        op1: "B"
    },
    {
        type: INSTRUCTION_TYPES.DCr,
        op1: "B"
    },
    {
        type: INSTRUCTION_TYPES.RRC
    },
    {
        type: INSTRUCTION_TYPES.RFc,
        op1: "zero"
    },
    {
        type: INSTRUCTION_TYPES.ALUI,
        op1: ALU_OPERATIONS.ADC
    },
    {
        type: INSTRUCTION_TYPES.RST,
        op1: 1
    },
    {
        type: INSTRUCTION_TYPES.LrI,
        op1: "B"
    },
    {
        type: INSTRUCTION_TYPES.RET
    },
    // 0x10
    {
        type: INSTRUCTION_TYPES.INr,
        op1: "C"
    },
    {
        type: INSTRUCTION_TYPES.DCr,
        op1: "C"
    },
    {
        type: INSTRUCTION_TYPES.RAL
    },
    {
        type: INSTRUCTION_TYPES.RFc,
        op1: "sign"
    },
    {
        type: INSTRUCTION_TYPES.ALUI,
        op1: ALU_OPERATIONS.SUB
    },
    {
        type: INSTRUCTION_TYPES.RST,
        op1: 2
    },
    {
        type: INSTRUCTION_TYPES.LrI,
        op1: "C"
    },
    {
        type: INSTRUCTION_TYPES.RET
    },
    {
        type: INSTRUCTION_TYPES.INr,
        op1: "D"
    },
    {
        type: INSTRUCTION_TYPES.DCr,
        op1: "D"
    },
    {
        type: INSTRUCTION_TYPES.RAR
    },
    {
        type: INSTRUCTION_TYPES.RFc,
        op1: "parity"
    },
    {
        type: INSTRUCTION_TYPES.ALUI,
        op1: ALU_OPERATIONS.SBC
    },
    {
        type: INSTRUCTION_TYPES.RST,
        op1: 3
    },
    {
        type: INSTRUCTION_TYPES.LrI,
        op1: "D"
    },
    {
        type: INSTRUCTION_TYPES.RET
    },
    // 0x20
    {
        type: INSTRUCTION_TYPES.INr,
        op1: "E"
    },
    {
        type: INSTRUCTION_TYPES.DCr,
        op1: "E"
    },
    null,
    {
        type: INSTRUCTION_TYPES.RTc,
        op1: "carry"
    },
    {
        type: INSTRUCTION_TYPES.ALUI,
        op1: ALU_OPERATIONS.AND
    },
    {
        type: INSTRUCTION_TYPES.RST,
        op1: 4
    },
    {
        type: INSTRUCTION_TYPES.LrI,
        op1: "E"
    },
    {
        type: INSTRUCTION_TYPES.RET
    },
    {
        type: INSTRUCTION_TYPES.INr,
        op1: "H"
    },
    {
        type: INSTRUCTION_TYPES.DCr,
        op1: "H"
    },
    null,
    {
        type: INSTRUCTION_TYPES.RTc,
        op1: "zero"
    },
    {
        type: INSTRUCTION_TYPES.ALUI,
        op1: ALU_OPERATIONS.XOR
    },
    {
        type: INSTRUCTION_TYPES.RST,
        op1: 5
    },
    {
        type: INSTRUCTION_TYPES.LrI,
        op1: "H"
    },
    {
        type: INSTRUCTION_TYPES.RET
    },
    // 0x30
    {
        type: INSTRUCTION_TYPES.INr,
        op1: "L"
    },
    {
        type: INSTRUCTION_TYPES.DCr,
        op1: "L"
    },
    null,
    {
        type: INSTRUCTION_TYPES.RTc,
        op1: "sign"
    },
    {
        type: INSTRUCTION_TYPES.ALUI,
        op1: ALU_OPERATIONS.OR
    },
    {
        type: INSTRUCTION_TYPES.RST,
        op1: 6
    },
    {
        type: INSTRUCTION_TYPES.LrI,
        op1: "L"
    },
    {
        type: INSTRUCTION_TYPES.RET
    },
    null,
    null,
    null,
    {
        type: INSTRUCTION_TYPES.RTc,
        op1: "parity"
    },
    {
        type: INSTRUCTION_TYPES.ALUI,
        op1: ALU_OPERATIONS.CMP
    },
    {
        type: INSTRUCTION_TYPES.RST,
        op1: 7
    },
    {
        type: INSTRUCTION_TYPES.LMI
    },
    {
        type: INSTRUCTION_TYPES.RET
    },
    // 0x40
    {
        type: INSTRUCTION_TYPES.JFc,
        op1: "carry"
    },
    {
        type: INSTRUCTION_TYPES.INP,
        op1: 0
    },
    {
        type: INSTRUCTION_TYPES.CFc,
        op1: "carry"
    },
    {
        type: INSTRUCTION_TYPES.INP,
        op1: 1
    },
    {
        type: INSTRUCTION_TYPES.JMP
    },
    {
        type: INSTRUCTION_TYPES.INP,
        op1: 2
    },
    {
        type: INSTRUCTION_TYPES.CAL
    },
    {
        type: INSTRUCTION_TYPES.INP,
        op1: 3
    },
    {
        type: INSTRUCTION_TYPES.JFc,
        op1: "zero"
    },
    {
        type: INSTRUCTION_TYPES.INP,
        op1: 4
    },
    {
        type: INSTRUCTION_TYPES.CFc,
        op1: "zero"
    },
    {
        type: INSTRUCTION_TYPES.INP,
        op1: 5
    },
    {
        type: INSTRUCTION_TYPES.JMP
    },
    {
        type: INSTRUCTION_TYPES.INP,
        op1: 6
    },
    {
        type: INSTRUCTION_TYPES.CAL
    },
    {
        type: INSTRUCTION_TYPES.INP,
        op1: 7
    },
    // 0x50
    {
        type: INSTRUCTION_TYPES.JFc,
        op1: "sign"
    },
    {
        type: INSTRUCTION_TYPES.OUT,
        op1: 8
    },
    {
        type: INSTRUCTION_TYPES.CFc,
        op1: "sign"
    },
    {
        type: INSTRUCTION_TYPES.OUT,
        op1: 9
    },
    {
        type: INSTRUCTION_TYPES.JMP
    },
    {
        type: INSTRUCTION_TYPES.OUT,
        op1: 10
    },
    {
        type: INSTRUCTION_TYPES.CAL
    },
    {
        type: INSTRUCTION_TYPES.OUT,
        op1: 11
    },
    {
        type: INSTRUCTION_TYPES.JFc,
        op1: "parity"
    },
    {
        type: INSTRUCTION_TYPES.OUT,
        op1: 12
    },
    {
        type: INSTRUCTION_TYPES.CFc,
        op1: "parity"
    },
    {
        type: INSTRUCTION_TYPES.OUT,
        op1: 13
    },
    {
        type: INSTRUCTION_TYPES.JMP
    },
    {
        type: INSTRUCTION_TYPES.OUT,
        op1: 14
    },
    {
        type: INSTRUCTION_TYPES.CAL
    },
    {
        type: INSTRUCTION_TYPES.OUT,
        op1: 15
    },
    // 0x60
    {
        type: INSTRUCTION_TYPES.JTc,
        op1: "carry"
    },
    {
        type: INSTRUCTION_TYPES.OUT,
        op1: 16
    },
    {
        type: INSTRUCTION_TYPES.CTc,
        op1: "carry"
    },
    {
        type: INSTRUCTION_TYPES.OUT,
        op1: 17
    },
    {
        type: INSTRUCTION_TYPES.JMP
    },
    {
        type: INSTRUCTION_TYPES.OUT,
        op1: 18
    },
    {
        type: INSTRUCTION_TYPES.CAL
    },
    {
        type: INSTRUCTION_TYPES.OUT,
        op1: 19
    },
    {
        type: INSTRUCTION_TYPES.JTc,
        op1: "zero"
    },
    {
        type: INSTRUCTION_TYPES.OUT,
        op1: 20
    },
    {
        type: INSTRUCTION_TYPES.CTc,
        op1: "zero"
    },
    {
        type: INSTRUCTION_TYPES.OUT,
        op1: 21
    },
    {
        type: INSTRUCTION_TYPES.JMP
    },
    {
        type: INSTRUCTION_TYPES.OUT,
        op1: 22
    },
    {
        type: INSTRUCTION_TYPES.CAL
    },
    {
        type: INSTRUCTION_TYPES.OUT,
        op1: 23
    },
    // 0x70
    {
        type: INSTRUCTION_TYPES.JTc,
        op1: "sign"
    },
    {
        type: INSTRUCTION_TYPES.OUT,
        op1: 24
    },
    {
        type: INSTRUCTION_TYPES.CTc,
        op1: "sign"
    },
    {
        type: INSTRUCTION_TYPES.OUT,
        op1: 25
    },
    {
        type: INSTRUCTION_TYPES.JMP
    },
    {
        type: INSTRUCTION_TYPES.OUT,
        op1: 26
    },
    {
        type: INSTRUCTION_TYPES.CAL
    },
    {
        type: INSTRUCTION_TYPES.OUT,
        op1: 27
    },
    {
        type: INSTRUCTION_TYPES.JTc,
        op1: "parity"
    },
    {
        type: INSTRUCTION_TYPES.OUT,
        op1: 28
    },
    {
        type: INSTRUCTION_TYPES.CTc,
        op1: "parity"
    },
    {
        type: INSTRUCTION_TYPES.OUT,
        op1: 29
    },
    {
        type: INSTRUCTION_TYPES.JMP
    },
    {
        type: INSTRUCTION_TYPES.OUT,
        op1: 30
    },
    {
        type: INSTRUCTION_TYPES.CAL
    },
    {
        type: INSTRUCTION_TYPES.OUT,
        op1: 31
    },
    // 0x80
    {
        type: INSTRUCTION_TYPES.ALUr,
        op1: ALU_OPERATIONS.ADD,
        op2: "A"
    },
    {
        type: INSTRUCTION_TYPES.ALUr,
        op1: ALU_OPERATIONS.ADD,
        op2: "B"
    },
    {
        type: INSTRUCTION_TYPES.ALUr,
        op1: ALU_OPERATIONS.ADD,
        op2: "C"
    },
    {
        type: INSTRUCTION_TYPES.ALUr,
        op1: ALU_OPERATIONS.ADD,
        op2: "D"
    },
    {
        type: INSTRUCTION_TYPES.ALUr,
        op1: ALU_OPERATIONS.ADD,
        op2: "E"
    },
    {
        type: INSTRUCTION_TYPES.ALUr,
        op1: ALU_OPERATIONS.ADD,
        op2: "H"
    },
    {
        type: INSTRUCTION_TYPES.ALUr,
        op1: ALU_OPERATIONS.ADD,
        op2: "L"
    },
    {
        type: INSTRUCTION_TYPES.ALUM,
        op1: ALU_OPERATIONS.ADD
    },
    {
        type: INSTRUCTION_TYPES.ALUr,
        op1: ALU_OPERATIONS.ADC,
        op2: "A"
    },
    {
        type: INSTRUCTION_TYPES.ALUr,
        op1: ALU_OPERATIONS.ADC,
        op2: "B"
    },
    {
        type: INSTRUCTION_TYPES.ALUr,
        op1: ALU_OPERATIONS.ADC,
        op2: "C"
    },
    {
        type: INSTRUCTION_TYPES.ALUr,
        op1: ALU_OPERATIONS.ADC,
        op2: "D"
    },
    {
        type: INSTRUCTION_TYPES.ALUr,
        op1: ALU_OPERATIONS.ADC,
        op2: "E"
    },
    {
        type: INSTRUCTION_TYPES.ALUr,
        op1: ALU_OPERATIONS.ADC,
        op2: "H"
    },
    {
        type: INSTRUCTION_TYPES.ALUr,
        op1: ALU_OPERATIONS.ADC,
        op2: "L"
    },
    {
        type: INSTRUCTION_TYPES.ALUM,
        op1: ALU_OPERATIONS.ADC
    },
    // 0x90
    {
        type: INSTRUCTION_TYPES.ALUr,
        op1: ALU_OPERATIONS.SUB,
        op2: "A"
    },
    {
        type: INSTRUCTION_TYPES.ALUr,
        op1: ALU_OPERATIONS.SUB,
        op2: "B"
    },
    {
        type: INSTRUCTION_TYPES.ALUr,
        op1: ALU_OPERATIONS.SUB,
        op2: "C"
    },
    {
        type: INSTRUCTION_TYPES.ALUr,
        op1: ALU_OPERATIONS.SUB,
        op2: "D"
    },
    {
        type: INSTRUCTION_TYPES.ALUr,
        op1: ALU_OPERATIONS.SUB,
        op2: "E"
    },
    {
        type: INSTRUCTION_TYPES.ALUr,
        op1: ALU_OPERATIONS.SUB,
        op2: "H"
    },
    {
        type: INSTRUCTION_TYPES.ALUr,
        op1: ALU_OPERATIONS.SUB,
        op2: "L"
    },
    {
        type: INSTRUCTION_TYPES.ALUM,
        op1: ALU_OPERATIONS.SUB
    },
    {
        type: INSTRUCTION_TYPES.ALUr,
        op1: ALU_OPERATIONS.SBC,
        op2: "A"
    },
    {
        type: INSTRUCTION_TYPES.ALUr,
        op1: ALU_OPERATIONS.SBC,
        op2: "B"
    },
    {
        type: INSTRUCTION_TYPES.ALUr,
        op1: ALU_OPERATIONS.SBC,
        op2: "C"
    },
    {
        type: INSTRUCTION_TYPES.ALUr,
        op1: ALU_OPERATIONS.SBC,
        op2: "D"
    },
    {
        type: INSTRUCTION_TYPES.ALUr,
        op1: ALU_OPERATIONS.SBC,
        op2: "E"
    },
    {
        type: INSTRUCTION_TYPES.ALUr,
        op1: ALU_OPERATIONS.SBC,
        op2: "H"
    },
    {
        type: INSTRUCTION_TYPES.ALUr,
        op1: ALU_OPERATIONS.SBC,
        op2: "L"
    },
    {
        type: INSTRUCTION_TYPES.ALUM,
        op1: ALU_OPERATIONS.SBC
    },
    // 0xA0
    {
        type: INSTRUCTION_TYPES.ALUr,
        op1: ALU_OPERATIONS.AND,
        op2: "A"
    },
    {
        type: INSTRUCTION_TYPES.ALUr,
        op1: ALU_OPERATIONS.AND,
        op2: "B"
    },
    {
        type: INSTRUCTION_TYPES.ALUr,
        op1: ALU_OPERATIONS.AND,
        op2: "C"
    },
    {
        type: INSTRUCTION_TYPES.ALUr,
        op1: ALU_OPERATIONS.AND,
        op2: "D"
    },
    {
        type: INSTRUCTION_TYPES.ALUr,
        op1: ALU_OPERATIONS.AND,
        op2: "E"
    },
    {
        type: INSTRUCTION_TYPES.ALUr,
        op1: ALU_OPERATIONS.AND,
        op2: "H"
    },
    {
        type: INSTRUCTION_TYPES.ALUr,
        op1: ALU_OPERATIONS.AND,
        op2: "L"
    },
    {
        type: INSTRUCTION_TYPES.ALUM,
        op1: ALU_OPERATIONS.AND
    },
    {
        type: INSTRUCTION_TYPES.ALUr,
        op1: ALU_OPERATIONS.XOR,
        op2: "A"
    },
    {
        type: INSTRUCTION_TYPES.ALUr,
        op1: ALU_OPERATIONS.XOR,
        op2: "B"
    },
    {
        type: INSTRUCTION_TYPES.ALUr,
        op1: ALU_OPERATIONS.XOR,
        op2: "C"
    },
    {
        type: INSTRUCTION_TYPES.ALUr,
        op1: ALU_OPERATIONS.XOR,
        op2: "D"
    },
    {
        type: INSTRUCTION_TYPES.ALUr,
        op1: ALU_OPERATIONS.XOR,
        op2: "E"
    },
    {
        type: INSTRUCTION_TYPES.ALUr,
        op1: ALU_OPERATIONS.XOR,
        op2: "H"
    },
    {
        type: INSTRUCTION_TYPES.ALUr,
        op1: ALU_OPERATIONS.XOR,
        op2: "L"
    },
    {
        type: INSTRUCTION_TYPES.ALUM,
        op1: ALU_OPERATIONS.XOR
    },
    // 0xB0
    {
        type: INSTRUCTION_TYPES.ALUr,
        op1: ALU_OPERATIONS.OR,
        op2: "A"
    },
    {
        type: INSTRUCTION_TYPES.ALUr,
        op1: ALU_OPERATIONS.OR,
        op2: "B"
    },
    {
        type: INSTRUCTION_TYPES.ALUr,
        op1: ALU_OPERATIONS.OR,
        op2: "C"
    },
    {
        type: INSTRUCTION_TYPES.ALUr,
        op1: ALU_OPERATIONS.OR,
        op2: "D"
    },
    {
        type: INSTRUCTION_TYPES.ALUr,
        op1: ALU_OPERATIONS.OR,
        op2: "E"
    },
    {
        type: INSTRUCTION_TYPES.ALUr,
        op1: ALU_OPERATIONS.OR,
        op2: "H"
    },
    {
        type: INSTRUCTION_TYPES.ALUr,
        op1: ALU_OPERATIONS.OR,
        op2: "L"
    },
    {
        type: INSTRUCTION_TYPES.ALUM,
        op1: ALU_OPERATIONS.OR
    },
    {
        type: INSTRUCTION_TYPES.ALUr,
        op1: ALU_OPERATIONS.CMP,
        op2: "A"
    },
    {
        type: INSTRUCTION_TYPES.ALUr,
        op1: ALU_OPERATIONS.CMP,
        op2: "B"
    },
    {
        type: INSTRUCTION_TYPES.ALUr,
        op1: ALU_OPERATIONS.CMP,
        op2: "C"
    },
    {
        type: INSTRUCTION_TYPES.ALUr,
        op1: ALU_OPERATIONS.CMP,
        op2: "D"
    },
    {
        type: INSTRUCTION_TYPES.ALUr,
        op1: ALU_OPERATIONS.CMP,
        op2: "E"
    },
    {
        type: INSTRUCTION_TYPES.ALUr,
        op1: ALU_OPERATIONS.CMP,
        op2: "H"
    },
    {
        type: INSTRUCTION_TYPES.ALUr,
        op1: ALU_OPERATIONS.CMP,
        op2: "L"
    },
    {
        type: INSTRUCTION_TYPES.ALUM,
        op1: ALU_OPERATIONS.CMP
    },
    // 0xC0
    {
        type: INSTRUCTION_TYPES.Lrr,
        op1: "A",
        op2: "A"
    },
    {
        type: INSTRUCTION_TYPES.Lrr,
        op1: "A",
        op2: "B"
    },
    {
        type: INSTRUCTION_TYPES.Lrr,
        op1: "A",
        op2: "C"
    },
    {
        type: INSTRUCTION_TYPES.Lrr,
        op1: "A",
        op2: "D"
    },
    {
        type: INSTRUCTION_TYPES.Lrr,
        op1: "A",
        op2: "E"
    },
    {
        type: INSTRUCTION_TYPES.Lrr,
        op1: "A",
        op2: "H"
    },
    {
        type: INSTRUCTION_TYPES.Lrr,
        op1: "A",
        op2: "L"
    },
    {
        type: INSTRUCTION_TYPES.LrM,
        op1: "A"
    },
    {
        type: INSTRUCTION_TYPES.Lrr,
        op1: "B",
        op2: "A"
    },
    {
        type: INSTRUCTION_TYPES.Lrr,
        op1: "B",
        op2: "B"
    },
    {
        type: INSTRUCTION_TYPES.Lrr,
        op1: "B",
        op2: "C"
    },
    {
        type: INSTRUCTION_TYPES.Lrr,
        op1: "B",
        op2: "D"
    },
    {
        type: INSTRUCTION_TYPES.Lrr,
        op1: "B",
        op2: "E"
    },
    {
        type: INSTRUCTION_TYPES.Lrr,
        op1: "B",
        op2: "H"
    },
    {
        type: INSTRUCTION_TYPES.Lrr,
        op1: "B",
        op2: "L"
    },
    {
        type: INSTRUCTION_TYPES.LrM,
        op1: "B"
    },
    // 0xD0
    {
        type: INSTRUCTION_TYPES.Lrr,
        op1: "C",
        op2: "A"
    },
    {
        type: INSTRUCTION_TYPES.Lrr,
        op1: "C",
        op2: "B"
    },
    {
        type: INSTRUCTION_TYPES.Lrr,
        op1: "C",
        op2: "C"
    },
    {
        type: INSTRUCTION_TYPES.Lrr,
        op1: "C",
        op2: "D"
    },
    {
        type: INSTRUCTION_TYPES.Lrr,
        op1: "C",
        op2: "E"
    },
    {
        type: INSTRUCTION_TYPES.Lrr,
        op1: "C",
        op2: "H"
    },
    {
        type: INSTRUCTION_TYPES.Lrr,
        op1: "C",
        op2: "L"
    },
    {
        type: INSTRUCTION_TYPES.LrM,
        op1: "C"
    },
    {
        type: INSTRUCTION_TYPES.Lrr,
        op1: "D",
        op2: "A"
    },
    {
        type: INSTRUCTION_TYPES.Lrr,
        op1: "D",
        op2: "B"
    },
    {
        type: INSTRUCTION_TYPES.Lrr,
        op1: "D",
        op2: "C"
    },
    {
        type: INSTRUCTION_TYPES.Lrr,
        op1: "D",
        op2: "D"
    },
    {
        type: INSTRUCTION_TYPES.Lrr,
        op1: "D",
        op2: "E"
    },
    {
        type: INSTRUCTION_TYPES.Lrr,
        op1: "D",
        op2: "H"
    },
    {
        type: INSTRUCTION_TYPES.Lrr,
        op1: "D",
        op2: "L"
    },
    {
        type: INSTRUCTION_TYPES.LrM,
        op1: "D"
    },
    // 0xE0
    {
        type: INSTRUCTION_TYPES.Lrr,
        op1: "E",
        op2: "A"
    },
    {
        type: INSTRUCTION_TYPES.Lrr,
        op1: "E",
        op2: "B"
    },
    {
        type: INSTRUCTION_TYPES.Lrr,
        op1: "E",
        op2: "C"
    },
    {
        type: INSTRUCTION_TYPES.Lrr,
        op1: "E",
        op2: "D"
    },
    {
        type: INSTRUCTION_TYPES.Lrr,
        op1: "E",
        op2: "E"
    },
    {
        type: INSTRUCTION_TYPES.Lrr,
        op1: "E",
        op2: "H"
    },
    {
        type: INSTRUCTION_TYPES.Lrr,
        op1: "E",
        op2: "L"
    },
    {
        type: INSTRUCTION_TYPES.LrM,
        op1: "E"
    },
    {
        type: INSTRUCTION_TYPES.Lrr,
        op1: "H",
        op2: "A"
    },
    {
        type: INSTRUCTION_TYPES.Lrr,
        op1: "H",
        op2: "B"
    },
    {
        type: INSTRUCTION_TYPES.Lrr,
        op1: "H",
        op2: "C"
    },
    {
        type: INSTRUCTION_TYPES.Lrr,
        op1: "H",
        op2: "D"
    },
    {
        type: INSTRUCTION_TYPES.Lrr,
        op1: "H",
        op2: "E"
    },
    {
        type: INSTRUCTION_TYPES.Lrr,
        op1: "H",
        op2: "H"
    },
    {
        type: INSTRUCTION_TYPES.Lrr,
        op1: "H",
        op2: "L"
    },
    {
        type: INSTRUCTION_TYPES.LrM,
        op1: "H"
    },
    // 0xF0
    {
        type: INSTRUCTION_TYPES.Lrr,
        op1: "L",
        op2: "A"
    },
    {
        type: INSTRUCTION_TYPES.Lrr,
        op1: "L",
        op2: "B"
    },
    {
        type: INSTRUCTION_TYPES.Lrr,
        op1: "L",
        op2: "C"
    },
    {
        type: INSTRUCTION_TYPES.Lrr,
        op1: "L",
        op2: "D"
    },
    {
        type: INSTRUCTION_TYPES.Lrr,
        op1: "L",
        op2: "E"
    },
    {
        type: INSTRUCTION_TYPES.Lrr,
        op1: "L",
        op2: "H"
    },
    {
        type: INSTRUCTION_TYPES.Lrr,
        op1: "L",
        op2: "L"
    },
    {
        type: INSTRUCTION_TYPES.LrM,
        op1: "L"
    },
    {
        type: INSTRUCTION_TYPES.LMr,
        op1: "A"
    },
    {
        type: INSTRUCTION_TYPES.LMr,
        op1: "B"
    },
    {
        type: INSTRUCTION_TYPES.LMr,
        op1: "C"
    },
    {
        type: INSTRUCTION_TYPES.LMr,
        op1: "D"
    },
    {
        type: INSTRUCTION_TYPES.LMr,
        op1: "E"
    },
    {
        type: INSTRUCTION_TYPES.LMr,
        op1: "H"
    },
    {
        type: INSTRUCTION_TYPES.LMr,
        op1: "L"
    },
    {
        type: INSTRUCTION_TYPES.HLT
    }
];
function decodeInstruction(opcode) {
    const instruction = INSTRUCTIONS_MAP[opcode];
    if (!instruction) throw Error(`Unknown instruction: ${opcode.toString(16)}`);
    return {
        ...instruction,
        opcode
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"gqmCe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _signalSourceJs = require("../signals/signalSource.js");
var _signalSourceJsDefault = parcelHelpers.interopDefault(_signalSourceJs);
var _signalStatesJs = require("../signals/signalStates.js");
var _signalStatesJsDefault = parcelHelpers.interopDefault(_signalStatesJs);
var _cpuJs = require("./cpu/cpu.js");
class Memory {
    #signalBus;
    #dataBusSignals;
    #memory;
    #ioOutputHandler;
    #addressLow;
    #addressHigh;
    constructor(signalBus, dump, ioOutputHandler){
        this.#memory = dump;
        this.#ioOutputHandler = ioOutputHandler;
        this.#signalBus = signalBus;
        this.#dataBusSignals = Array.from(Array(8), ()=>new (0, _signalSourceJsDefault.default)());
        this.#dataBusSignals.forEach((dataSignal, idx)=>signalBus.registerSignalSource(`d${idx}`, dataSignal));
        // write data due ph1_2 raise to data bus if necessary, i8008 reads it around ph1_2 fall
        signalBus.onHigh("ph1", ()=>{
            if (signalBus.signalState("sync") !== (0, _signalStatesJsDefault.default).HIGH) return;
            const tState = (0, _cpuJs.NUMERIC_TO_STATE)[signalBus.busValue("s", 3)];
            if (tState === (0, _cpuJs.CPU_STATES).T3) this.#writeValueFromMemoryToDataBus();
        });
        // read data due ph2_2 raise, we have window between ph1_2 fall and ph2_2 fall
        signalBus.onHigh("ph2", ()=>{
            if (signalBus.signalState("sync") !== (0, _signalStatesJsDefault.default).LOW) return;
            const tState = (0, _cpuJs.NUMERIC_TO_STATE)[signalBus.busValue("s", 3)];
            switch(tState){
                case (0, _cpuJs.CPU_STATES).T1:
                    this.#addressLow = signalBus.busValue("d", 8);
                    break;
                case (0, _cpuJs.CPU_STATES).T2:
                    this.#addressHigh = signalBus.busValue("d", 8);
                    break;
                case (0, _cpuJs.CPU_STATES).T3:
                    this.#writeValueFromDataBusToMemory();
                    break;
                default:
                    break;
            }
        });
        // free data bus due ph2_2 fall, i8008 reads it around ph1_2 fall
        signalBus.onLow("ph2", ()=>{
            if (signalBus.signalState("sync") !== (0, _signalStatesJsDefault.default).LOW) return;
            const tState = (0, _cpuJs.NUMERIC_TO_STATE)[signalBus.busValue("s", 3)];
            if (tState === (0, _cpuJs.CPU_STATES).T3) this.#dataBusSignals.forEach((dataSignal)=>{
                dataSignal.state = (0, _signalStatesJsDefault.default).FLOATING;
            });
        });
    }
    #buildAddress() {
        return {
            address: (this.#addressHigh & 0x3F) << 8 | this.#addressLow,
            instructionCycle: (0, _cpuJs.NUMERIC_TO_CYCLE)[this.#addressHigh >> 6]
        };
    }
    #writeValueFromMemoryToDataBus() {
        const { address, instructionCycle } = this.#buildAddress();
        if (instructionCycle !== (0, _cpuJs.INSTRUCTION_CYCLES).PCI && instructionCycle !== (0, _cpuJs.INSTRUCTION_CYCLES).PCR) return;
        const data = this.#memory[address];
        this.#dataBusSignals.forEach((dataSignal, idx)=>{
            dataSignal.state = data & 1 << idx ? (0, _signalStatesJsDefault.default).HIGH : (0, _signalStatesJsDefault.default).LOW;
        });
    }
    #writeValueFromDataBusToMemory() {
        const { address, instructionCycle } = this.#buildAddress();
        switch(instructionCycle){
            case (0, _cpuJs.INSTRUCTION_CYCLES).PCW:
                this.#memory[address] = this.#signalBus.busValue("d", 8);
                break;
            case (0, _cpuJs.INSTRUCTION_CYCLES).PCC:
                {
                    const deviceNo = this.#addressHigh >> 1 & 0x1F;
                    if (deviceNo >= 8) this.#ioOutputHandler({
                        deviceNo,
                        data: this.#addressLow
                    });
                    break;
                }
            default:
                break;
        }
    }
    get memory() {
        return this.#memory;
    }
}
exports.default = Memory;

},{"../signals/signalSource.js":"2pyeY","../signals/signalStates.js":"dyMPe","./cpu/cpu.js":"ay2kO","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}]},["aWXnx","1gmWp"], "1gmWp", "parcelRequiree242")

//# sourceMappingURL=emulator.f131f5cb.js.map
