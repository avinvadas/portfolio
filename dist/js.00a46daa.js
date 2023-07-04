// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/index.js":[function(require,module,exports) {
/*var section__headings = document.getElementsByClassName("section__heading");*/
var controller = new ScrollMagic.Controller();
var scene_heading_services = new ScrollMagic.Scene({
  triggerElement: "#section_heading-services"
}).setClassToggle("#section_heading-services", "section__heading--reveal").triggerHook("onEnter").addTo(controller);
var scene_heading_work = new ScrollMagic.Scene({
  triggerElement: "#section_heading-work"
}).setClassToggle("#section_heading-work", "section__heading--reveal").triggerHook("onEnter").addTo(controller);
var scene_heading_testimonials = new ScrollMagic.Scene({
  triggerElement: "#section_heading-testimonials"
}).setClassToggle("#section_heading-testimonials", "section__heading--reveal").triggerHook("onEnter").addTo(controller);
var scene_heading_testimonials = new ScrollMagic.Scene({
  triggerElement: "#section_heading-testimonials"
});
var scene_heading_testimonials = new ScrollMagic.Scene({
  triggerElement: "#section_heading-publications"
}).setClassToggle("#section_heading-publications", "section__heading--reveal").triggerHook("onEnter").addTo(controller);
var scene_heading_testimonials = new ScrollMagic.Scene({
  triggerElement: "#section_heading-publications"
}).setClassToggle("#section_heading-testimonials", "section__heading--reveal").triggerHook("onEnter").addTo(controller);
var scene_heading_work = new ScrollMagic.Scene({
  triggerElement: "#section_heading-contact"
}).setClassToggle("#section_heading-contact", "section__heading--reveal").triggerHook("onEnter").addTo(controller);
var scene_heading_work = new ScrollMagic.Scene({
  triggerElement: "#section_heading-sideGig"
}).setClassToggle("#section_heading-sideGig", "section__heading--reveal").triggerHook("onEnter").addTo(controller);
var scene_proj01_image = new ScrollMagic.Scene({
  triggerElement: "#project01_image"
}).setClassToggle("#project01_image", "project_li__image--reveal").triggerHook("onEnter").addTo(controller);
var scene_proj02_image = new ScrollMagic.Scene({
  triggerElement: "#project02_image"
}).setClassToggle("#project02_image", "project_li__image--reveal").triggerHook("onEnter").addTo(controller);
var scene_proj03_image = new ScrollMagic.Scene({
  triggerElement: "#project03_image"
}).setClassToggle("#project03_image", "project_li__image--reveal").triggerHook("onEnter").addTo(controller);
var scene_button_email = new ScrollMagic.Scene({
  triggerElement: "#hero__contact",
  reverse: true
}).setClassToggle("#nav__button_meeting", "nav_icon--revealed").triggerHook("onLeave").addTo(controller);
/*#nav__button_email*/

/*
var scene_hero_title = new ScrollMagic.Scene({
  triggerElement: "#logotype",
  reverse: true
})
  .setClassToggle("#hero_heading", "hero_heading--hidden")
  .triggerHook("onLeave")
  .addTo(controller);
*/
//timelines//

/*
var tl_hero_in = new TimelineMax();
tl_hero_in.to("#your", 1, {
textIndent: "0%"
}).to("#product", 1, {
textIndent: "0%"
}).to("#clearer", 1, {
textIndent: "0%"
});
*/

var tl_hero_out = new TimelineMax(); //tl_hero_out.to("#word1", 1, {textIndent: "100%", autoAlpha:0},0)
//.to("#word2", 1, {textIndent: "-100%", autoAlpha:0},0.1)
//.to("#word3", 1, {textIndent: "100%", autoAlpha:0},0.1);

var scene_heading_leave = new ScrollMagic.Scene({
  triggerElement: "#hero_content",
  duration: '10%',
  triggerHook: 'onLeave',
  triggerOffset: 300,
  reverse: true
}).addTo(controller).setTween(tl_hero_out);
var tl_heroBG_out = new TimelineMax(); //tl_heroBG_out.to("#hero_background",1,{css:{transform:"rotate(-30deg) translateX(-2vw) scale(0.1)", opacity:0}, scale:1, autoAlpha:0},0);
//tl_heroBG_out.to("#hero_bg",1,{scale:1},0);

var scene_heading_leave = new ScrollMagic.Scene({
  triggerElement: ".section_hero",
  duration: '100%',
  triggerHook: 'onLeave',
  reverse: true
}).addTo(controller).setTween(tl_heroBG_out);
/*

var scene_heading_enter = new ScrollMagic.Scene({
  triggerElement: "#hero_content",

  duration: 400,
  reverse: true
})
  .addTo(controller)
  .setTween(tl_hero_in);
*/
},{}],"../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60164" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map