(self["webpackChunksnack_pack"] = self["webpackChunksnack_pack"] || []).push([[179],{

/***/ 575:
/***/ ((module) => {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ 913:
/***/ ((module) => {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ 657:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss
var styles = __webpack_require__(922);
// CONCATENATED MODULE: ./src/styles/index.scss

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(styles/* default */.Z, options);



/* harmony default export */ const src_styles = (styles/* default.locals */.Z.locals || {});
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(575);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(913);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);
// CONCATENATED MODULE: ./src/js/button.js


var canvas = document.querySelector('#canvas');
var ctx = canvas.getContext('2d');

var Button = /*#__PURE__*/function () {
  function Button(text, x, y, width, height, fn) {
    var fillColor = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 'red';
    var textColor = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : '#000000';

    classCallCheck_default()(this, Button);

    this.text = text;
    this.base = {
      x: x,
      y: y,
      width: width,
      height: height
    };
    this.scaled = {
      x: x,
      y: y,
      width: width,
      height: height
    };
    this.fn = fn;
    this.fillColor = fillColor;
    this.textColor = textColor;
    this.setScale(canvas.width / 400); // this.clicked = false;
    // this.hovered = false;
  }

  createClass_default()(Button, [{
    key: "setScale",
    value: function setScale(scaleFactor) {
      this.scaled.x = this.base.x * scaleFactor;
      this.scaled.y = this.base.y * scaleFactor;
      this.scaled.width = this.base.width * scaleFactor;
      this.scaled.height = this.base.height * scaleFactor;
    }
  }, {
    key: "draw",
    value: function draw() {
      // draw button
      ctx.fillStyle = this.fillColor;
      ctx.fillRect(this.base.x, this.base.y, this.base.width, this.base.height); // text options

      var fontSize = 12;
      ctx.fillStyle = this.textColor;
      ctx.font = "".concat(fontSize, "px sans-serif"); // center the text

      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle'; // draw the text

      ctx.fillText(this.text, this.base.x + this.base.width / 2, this.base.y + this.base.height / 2, this.base.width);
    }
  }, {
    key: "clicked",
    value: function clicked(pos) {
      return pos.x >= this.scaled.x && pos.x <= this.scaled.x + this.scaled.width && pos.y >= this.scaled.y && pos.y <= this.scaled.y + this.scaled.height;
    }
  }, {
    key: "mouseDown",
    value: function mouseDown(pos) {
      var clicked = this.clicked(pos);

      if (clicked) {
        console.log("button clicked with fn: ".concat(this.fn));
        this.fn();
      }

      return clicked;
    }
  }]);

  return Button;
}();

/* harmony default export */ const js_button = (Button);
// CONCATENATED MODULE: ./src/js/transitions.js
var transitions_canvas = document.querySelector('#canvas');
var transitions_ctx = transitions_canvas.getContext('2d');

function fade() {
  var alpha = 0;

  function transition() {
    if (alpha < 1) {
      alpha += 0.01;
      transitions_ctx.globalAlpha = alpha;
      transitions_ctx.fillStyle = 'black';
      transitions_ctx.fillRect(0, 0, transitions_canvas.width, transitions_canvas.height);
      requestAnimationFrame(transition);
    }
  }

  transition();
}

/* harmony default export */ const transitions = (fade);
// CONCATENATED MODULE: ./src/index.js



var src_canvas = document.querySelector('#canvas');
var src_ctx = src_canvas.getContext('2d');
var buttons = [];

function resizeGame() {
  var gameWindow = document.querySelector('#main');
  var cw = window.innerWidth;
  var ch = window.innerHeight;
  var goalAspectRatio = 4 / 3;
  var currentAspectRatio = cw / ch; // resize, taking into account screen orientation

  if (currentAspectRatio > goalAspectRatio) {
    cw = ch * goalAspectRatio;
    gameWindow.style.height = "".concat(ch, "px");
    gameWindow.style.width = "".concat(cw, "px");
  } else {
    ch = cw / goalAspectRatio;
    gameWindow.style.width = "".concat(cw, "px");
    gameWindow.style.height = "".concat(ch, "px");
  } // set margins to center canvas


  gameWindow.style.marginTop = "".concat(-ch / 2, "px");
  gameWindow.style.marginLeft = "".concat(-cw / 2, "px"); // set new canvas size

  src_canvas.width = cw;
  src_canvas.height = ch; // scale all canvas elements to new size

  var scaleFactor = cw / 400;
  src_ctx.scale(scaleFactor, scaleFactor);
  buttons.forEach(function (button) {
    button.setScale(scaleFactor);
  });
}

function clear() {
  src_ctx.clearRect(0, 0, src_canvas.width, src_canvas.height);
}

function play() {
  buttons = [];
  buttons.push(new js_button('back', 30, 70, 80, 30, function () {
    transitions(); // eslint-disable-next-line no-use-before-define

    mainMenu();
  }));

  function animate() {
    clear();
    src_ctx.fillStyle = 'green';
    src_ctx.fillRect(0, 0, src_canvas.width, src_canvas.height);
    src_ctx.fillStyle = 'black';
    src_ctx.fillText('playing game', src_canvas.width / 2, src_canvas.height / 4, src_canvas.width);
    buttons.forEach(function (button) {
      button.draw();
    });
    requestAnimationFrame(animate);
  }

  animate();
}

function instructions() {
  buttons = [];
  buttons.push(new js_button('back', 30, 70, 80, 30, function () {
    transitions(); // eslint-disable-next-line no-use-before-define

    mainMenu();
  }));

  function animate() {
    clear();
    src_ctx.fillStyle = 'aqua';
    src_ctx.fillRect(0, 0, src_canvas.width, src_canvas.height);
    src_ctx.fillStyle = 'black';
    src_ctx.textAlign = 'center';
    src_ctx.textBaseline = 'middle';
    src_ctx.fillText('instructions go here', src_canvas.width / 4, src_canvas.height / 4, src_canvas.width);
    buttons.forEach(function (button) {
      button.draw();
    });
    requestAnimationFrame(animate);
  }

  animate();
}

function mainMenu() {
  buttons = [];
  buttons.push(new js_button('play', 30, 30, 80, 30, function () {
    transitions();
    play();
  }));
  buttons.push(new js_button('instructions', 30, 70, 80, 30, function () {
    transitions();
    instructions();
  }));

  function animate() {
    clear();
    src_ctx.fillStyle = 'gray';
    src_ctx.fillRect(0, 0, src_canvas.width, src_canvas.height);
    buttons.forEach(function (button) {
      button.draw();
    });
    requestAnimationFrame(animate);
  }

  animate();
}
/* event listeners */


window.addEventListener('load', function () {
  mainMenu();
  resizeGame();
});
window.addEventListener('resize', function () {
  resizeGame();
});
src_canvas.addEventListener('click', function (e) {
  var el = src_canvas.getBoundingClientRect();
  var pos = {
    x: e.clientX - el.left,
    y: e.clientY - el.top
  };
  buttons.forEach(function (button) {
    return button.mouseDown(pos);
  });
});

/***/ }),

/***/ 922:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 15:
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ 379:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

},
0,[[657,666]]]);