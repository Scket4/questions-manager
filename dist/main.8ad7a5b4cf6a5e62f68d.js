/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n;\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  box-sizing: border-box;\\r\\n  font-family: Arial, Helvetica, sans-serif;\\r\\n  font-size: 14px;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  position: relative;\\r\\n  background: #F5FFFA;\\r\\n}\\r\\n\\r\\n.header {\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n  align-items: center;\\r\\n  height: 50px;\\r\\n  border-bottom: 1px solid blueviolet;\\r\\n\\r\\n}\\r\\n\\r\\n.header__title {\\r\\n  color: rgba(black, black, black, .4);\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\n.header__navigation {\\r\\n  width: 200px;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.header__navigation li {\\r\\n  list-style: none;\\r\\n  cursor: pointer;\\r\\n  color: rgba(black, black, black, 0.4);\\r\\n  transition: all ease .2s;\\r\\n  color: darkblue;\\r\\n  text-decoration: underline;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.header__navigation li:hover {\\r\\n  transform: scale(1.03);\\r\\n}\\r\\n\\r\\n.main {\\r\\n  margin-top: 50px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  padding-left: 20px;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  height: auto;\\r\\n  /* border: 1px solid rgb(104, 104, 126); */\\r\\n  padding: 100px;\\r\\n}\\r\\n\\r\\n.main__title {\\r\\n  color: cadetblue;\\r\\n  font-size: 25px;\\r\\n  margin-bottom: 25px;\\r\\n}\\r\\n\\r\\n.main__question {\\r\\n  width: 200px;\\r\\n  height: 30px;\\r\\n  outline: none;\\r\\n  border: none;\\r\\n  border-bottom: 1px solid darkblue;\\r\\n  padding-left: 15px;\\r\\n  margin-bottom: 20px;\\r\\n  font-weight: 200;\\r\\n  transition: all ease .2s;\\r\\n  background: #F5FFFA;\\r\\n}\\r\\n\\r\\n.main__question:focus {\\r\\n  transform: scale(1.02);\\r\\n}\\r\\n\\r\\n.main__current-questions {\\r\\n  color: rgba(32, 178, 170, 0.5);\\r\\n}\\r\\n\\r\\n\\r\\n.main__form {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  height: 100px;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  margin-bottom: 50px;\\r\\n}\\r\\n\\r\\n.main__button {\\r\\n  width: 200px;\\r\\n  height: 30px;\\r\\n  background: none;\\r\\n  border-radius: 10px;\\r\\n  border: 1px solid cadetblue;\\r\\n  transition: all ease .2s;\\r\\n  color: darkblue;\\r\\n  outline: none;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.main__button:disabled {\\r\\n  filter: blur(2px);\\r\\n}\\r\\n\\r\\n.main__button:hover {\\r\\n  transform: scale(1.03);\\r\\n}\\r\\n\\r\\n\\r\\n.login {\\r\\n  width: 550px;\\r\\n  height: 300px;\\r\\n  padding: 20px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  position: absolute;\\r\\n  top: 25%;\\r\\n  left: 350%;\\r\\n  background: darkblue;\\r\\n  z-index: 200;\\r\\n  transition: all ease .2s;\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n.login__form {\\r\\n  height: 80%;\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.login__form input {\\r\\n  background: darkblue;\\r\\n  outline: none;\\r\\n  border: none;\\r\\n  border-bottom: 1px solid aliceblue;\\r\\n  color: aliceblue;\\r\\n  padding-left: 10px;\\r\\n  padding-bottom: 2px;\\r\\n}\\r\\n\\r\\n.login__button {\\r\\n  width: 100%;\\r\\n  background: darkblue;\\r\\n  border: none;\\r\\n  outline: none;\\r\\n  border: 1px solid aliceblue;\\r\\n  color: aliceblue;\\r\\n  border-radius: 5px;\\r\\n  padding: 5px;\\r\\n  cursor: pointer;\\r\\n  transition: all ease .3s;\\r\\n}\\r\\n\\r\\n.login__button:hover {\\r\\n  transform: scale(1.02);\\r\\n}\\r\\n\\r\\n.login__form input::placeholder {\\r\\n  color: rgba(240, 248, 255, .5);\\r\\n}\\r\\n\\r\\n.login__p {\\r\\n  color: aliceblue;\\r\\n  font-size: 25px;\\r\\n}\\r\\n\\r\\n.visible {\\r\\n  left: 35%;\\r\\n}\\r\\n\\r\\n.filter {\\r\\n  filter: blur(5px);\\r\\n}\\r\\n\\r\\n.question {\\r\\n  border-radius: 5px;\\r\\n  border: 1px solid darkblue;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: flex-start;\\r\\n  justify-content: space-around;\\r\\n  margin-bottom: 15px;\\r\\n  padding: 10px;\\r\\n  color: darkblue;\\r\\n}\\r\\n\\r\\n.question__question {\\r\\n  font-weight: 600;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://questions-manager/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://questions-manager/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n;\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://questions-manager/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.nc, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://questions-manager/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/auth.js":
/*!*********************!*\
  !*** ./src/auth.js ***!
  \*********************/
/*! namespace exports */
/*! export authWithEmailAndPass [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authWithEmailAndPass\": () => /* binding */ authWithEmailAndPass\n/* harmony export */ });\nfunction authWithEmailAndPass(email, password) {\r\n  const apiKey = 'AIzaSyCMXAaYNHE4PBdQapGcBgJxZhpJxbR7kBU'\r\n  return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {\r\n    method: 'POST',\r\n    body: JSON.stringify({\r\n      email, password,\r\n      returnSecureToken: true\r\n    }),\r\n    headers: {\r\n      'Content-Type': 'application/json'\r\n    }\r\n  })\r\n  .then(response => response.json())\r\n  .then(data => data.idToken)\r\n}\n\n//# sourceURL=webpack://questions-manager/./src/auth.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth */ \"./src/auth.js\");\n/* harmony import */ var _question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question */ \"./src/question.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n;\r\n\r\n\r\n\r\n\r\nconst form = document.getElementById('form')\r\nconst input = form.querySelector('#question')\r\nconst button = form.querySelector('#button')\r\nconst alertButton = document.querySelector('.alert__button')\r\nconst loginButton = document.getElementById('login')\r\nconst loginForm = document.querySelector('.login')\r\n\r\nbutton.disabled = true\r\n\r\nwindow.addEventListener('load', _question__WEBPACK_IMPORTED_MODULE_1__.Question.renderList)\r\nform.addEventListener('submit', submitFormHandler)\r\ninput.addEventListener('input', () => {\r\n  button.disabled = !(0,_utils__WEBPACK_IMPORTED_MODULE_3__.isValid)(input.value)\r\n})\r\nloginButton.addEventListener('click', _utils__WEBPACK_IMPORTED_MODULE_3__.login)\r\nloginForm.addEventListener('submit', loginSubmitFn)\r\n\r\nfunction submitFormHandler(event) {\r\n  event.preventDefault()\r\n  const valid = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.isValid)(input.value)\r\n  button.disabled = true\r\n\r\n  if (valid) {\r\n    const question = {\r\n      text: input.value.trim(),\r\n      date: new Date().toJSON()\r\n    }\r\n\r\n    _question__WEBPACK_IMPORTED_MODULE_1__.Question.create(question).then(() => {\r\n      input.value = ''\r\n    })    \r\n  }\r\n}\r\n\r\nfunction loginSubmitFn(event) {\r\n  event.preventDefault()\r\n\r\n  const email = event.target.querySelector('#mail').value\r\n  const pass = event.target.querySelector('#pass').value\r\n  console.log(email, pass);\r\n  (0,_auth__WEBPACK_IMPORTED_MODULE_0__.authWithEmailAndPass)(email, pass)\r\n  .then(_question__WEBPACK_IMPORTED_MODULE_1__.Question.fetch)\r\n}\n\n//# sourceURL=webpack://questions-manager/./src/index.js?");

/***/ }),

/***/ "./src/question.js":
/*!*************************!*\
  !*** ./src/question.js ***!
  \*************************/
/*! namespace exports */
/*! export Question [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Question\": () => /* binding */ Question\n/* harmony export */ });\nclass Question {\r\n  static create(text) {\r\n    return fetch('https://question-manager-a28e1.firebaseio.com/questions.json', {\r\n      method: 'POST',\r\n      body: JSON.stringify(text),\r\n      headers: {\r\n        'Content-Type': 'application/json'\r\n      }\r\n    })\r\n    .then(response => response.json())\r\n    .then(response => {\r\n      text.id = response.name\r\n      return text\r\n    })\r\n    .then(addToStorage)\r\n    .then(Question.renderList)\r\n  }\r\n\r\n  static renderList() {\r\n    const questions = getQuestionsFromLocalstorage()\r\n\r\n    const html = questions.length \r\n    ? questions.map(toCard).join('')\r\n    : '<p>У вас вопросов нет</p>'\r\n\r\n    const list = document.querySelector('.current-questions')\r\n    list.innerHTML = html\r\n  }\r\n\r\n  static fetch(token) {\r\n    return fetch(`https://question-manager-a28e1.firebaseio.com/questions.json?auth=${token}`)\r\n      .then(response => response.json())\r\n      .then(q => console.log(q))\r\n  }\r\n}\r\n\r\nfunction addToStorage(text) {\r\n  const all = getQuestionsFromLocalstorage()\r\n  all.push(text)\r\n  localStorage.setItem('questions', JSON.stringify(all))\r\n}\r\n\r\nfunction getQuestionsFromLocalstorage() {\r\n  return JSON.parse(localStorage.getItem('questions') || '[]')\r\n}\r\n\r\nfunction toCard(text) {\r\n  return `\r\n  <div class=\"question\">\r\n  <p class=\"question__question\">Ваш вопрос:</p>\r\n  <div>${new Date(text.date).toLocaleDateString()}</div>\r\n  <p class=\"question__text\">${text.text}</p>\r\n  </div>\r\n  <br>\r\n  `\r\n}\n\n//# sourceURL=webpack://questions-manager/./src/question.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! namespace exports */
/*! export clearLoginModal [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isValid [provided] [no usage info] [missing usage info prevents renaming] */
/*! export login [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isValid\": () => /* binding */ isValid,\n/* harmony export */   \"login\": () => /* binding */ login,\n/* harmony export */   \"clearLoginModal\": () => /* binding */ clearLoginModal\n/* harmony export */ });\nconst loginModal = document.querySelector('.login')\r\nconst alertText = document.querySelector('.alert__message')\r\nconst header = document.querySelector('.header')\r\nconst main = document.querySelector('.main')\r\nconst footer = document.querySelector('.footer')\r\n\r\nfunction isValid(val) {\r\n  return val.length >= 10\r\n}\r\n\r\nfunction login() {\r\n  loginModal.classList.add('visible')\r\n  header.classList.add('filter')\r\n  main.classList.add('filter')\r\n  footer.classList.add('filter')\r\n  main.addEventListener('click', clearLoginModal)\r\n}\r\n\r\nfunction clearLoginModal() {\r\n  header.classList.remove('filter')\r\n  main.classList.remove('filter')\r\n  footer.classList.remove('filter')\r\n  loginModal.classList.remove('visible')\r\n}\n\n//# sourceURL=webpack://questions-manager/./src/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;