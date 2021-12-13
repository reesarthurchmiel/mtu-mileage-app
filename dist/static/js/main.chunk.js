(this["webpackJsonpmtu-mileage-app"] = this["webpackJsonpmtu-mileage-app"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/LogPage/LogBox.css":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/LogPage/LogBox.css ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".logbox {\n    display: flex;\n    /* height: 70vh; */\n    /* min-height: 400px; */\n    --border-color: rgb(88, 88, 88);\n    border: 1px black solid;\n}\n\n.logbox_main {\n    flex-grow: 1;\n}\n\n.logbox_monthYearHeader {\n    font-weight: bold;\n    text-align: center;\n    padding: 10px 0;\n    color: white;\n    background-color: #48CAE4;\n}\n\n.logbox_dateGrid {\n    display: grid;\n    grid-template-columns: auto 1fr;\n}\n\n.logbox_dateGrid_header {\n    font-weight: bold;\n    border-bottom: 1px solid var(--border-color);\n}\n\n.logbox_dateGrid > div {\n    padding: 10px;\n}\n\n/* For the select divs */\n.logbox-no-padding {\n    padding: 0px !important;\n}\n\n.logbox_dateGrid > div:nth-child(even) {\n    border-left: 1px solid var(--border-color);\n}\n\n.logbox-next-month {\n    border-top: 1px solid var(--border-color);\n}\n\n.logbox_buttons {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n\n    border-left: 1px solid var(--border-color);\n}\n\n.logbox_button {\n    width: 50px;\n    padding: 10px;\n    background-color: transparent;\n    border: none;\n\n    flex-grow: 1;\n}\n\n/* .floatingButton {\n    width: 50px;\n    height: 50px;\n    padding: 10px;\n    margin: 0 0 0 20px;\n    position: relative;\n\n    /* background-color: white; *//*\n    background: rgb(255,255,255);\n    background: radial-gradient(circle, rgba(255,255,255,1) 57%, rgba(250,251,255,1) 80%, rgba(215,216,230,1) 100%);\n    border-radius: 50%;\n    border: 1px solid black;\n    \n} */\n\n/* .floatingButton::after {\n    content: \"\";\n    position: absolute;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    box-shadow: 0px 3px 5px 5px rgba(60, 60, 60, 0.1) ;\n} */\n\n.logbox_button:hover {\n    outline: 1px black solid;\n    background-color: #48CAE4;\n}\n\n.logbox_button > img {\n    width: 100%;\n}", "",{"version":3,"sources":["webpack://src/LogPage/LogBox.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,kBAAkB;IAClB,uBAAuB;IACvB,+BAA+B;IAC/B,uBAAuB;AAC3B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,eAAe;IACf,YAAY;IACZ,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,+BAA+B;AACnC;;AAEA;IACI,iBAAiB;IACjB,4CAA4C;AAChD;;AAEA;IACI,aAAa;AACjB;;AAEA,wBAAwB;AACxB;IACI,uBAAuB;AAC3B;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;IACI,yCAAyC;AAC7C;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,6BAA6B;;IAE7B,0CAA0C;AAC9C;;AAEA;IACI,WAAW;IACX,aAAa;IACb,6BAA6B;IAC7B,YAAY;;IAEZ,YAAY;AAChB;;AAEA;;;;;;;iCAOiC,CAAC;;;;;;GAM/B;;AAEH;;;;;;;GAOG;;AAEH;IACI,wBAAwB;IACxB,yBAAyB;AAC7B;;AAEA;IACI,WAAW;AACf","sourcesContent":[".logbox {\n    display: flex;\n    /* height: 70vh; */\n    /* min-height: 400px; */\n    --border-color: rgb(88, 88, 88);\n    border: 1px black solid;\n}\n\n.logbox_main {\n    flex-grow: 1;\n}\n\n.logbox_monthYearHeader {\n    font-weight: bold;\n    text-align: center;\n    padding: 10px 0;\n    color: white;\n    background-color: #48CAE4;\n}\n\n.logbox_dateGrid {\n    display: grid;\n    grid-template-columns: auto 1fr;\n}\n\n.logbox_dateGrid_header {\n    font-weight: bold;\n    border-bottom: 1px solid var(--border-color);\n}\n\n.logbox_dateGrid > div {\n    padding: 10px;\n}\n\n/* For the select divs */\n.logbox-no-padding {\n    padding: 0px !important;\n}\n\n.logbox_dateGrid > div:nth-child(even) {\n    border-left: 1px solid var(--border-color);\n}\n\n.logbox-next-month {\n    border-top: 1px solid var(--border-color);\n}\n\n.logbox_buttons {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n\n    border-left: 1px solid var(--border-color);\n}\n\n.logbox_button {\n    width: 50px;\n    padding: 10px;\n    background-color: transparent;\n    border: none;\n\n    flex-grow: 1;\n}\n\n/* .floatingButton {\n    width: 50px;\n    height: 50px;\n    padding: 10px;\n    margin: 0 0 0 20px;\n    position: relative;\n\n    /* background-color: white; *//*\n    background: rgb(255,255,255);\n    background: radial-gradient(circle, rgba(255,255,255,1) 57%, rgba(250,251,255,1) 80%, rgba(215,216,230,1) 100%);\n    border-radius: 50%;\n    border: 1px solid black;\n    \n} */\n\n/* .floatingButton::after {\n    content: \"\";\n    position: absolute;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    box-shadow: 0px 3px 5px 5px rgba(60, 60, 60, 0.1) ;\n} */\n\n.logbox_button:hover {\n    outline: 1px black solid;\n    background-color: #48CAE4;\n}\n\n.logbox_button > img {\n    width: 100%;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/LogPage/LogPage.css":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/LogPage/LogPage.css ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".summary {\n    width: 100%;\n    border: 1px black solid;\n    border-spacing: 0;\n    \n    \n    margin-top: 20px;\n}\n\n.summary th {\n    background-color: #48CAE4;\n    color: white;\n    font-style: italic;\n}\n\n.summary th, .summary td {\n    padding: 10px;\n}\n\n.summary td:nth-child(2) {\n    text-align: right;\n}", "",{"version":3,"sources":["webpack://src/LogPage/LogPage.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,uBAAuB;IACvB,iBAAiB;;;IAGjB,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,iBAAiB;AACrB","sourcesContent":[".summary {\n    width: 100%;\n    border: 1px black solid;\n    border-spacing: 0;\n    \n    \n    margin-top: 20px;\n}\n\n.summary th {\n    background-color: #48CAE4;\n    color: white;\n    font-style: italic;\n}\n\n.summary th, .summary td {\n    padding: 10px;\n}\n\n.summary td:nth-child(2) {\n    text-align: right;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/PlacesPage/PlacesPage.css":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/PlacesPage/PlacesPage.css ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".places {\n    margin: 0 30px 0 0;\n}\n\n.placesgrid_loadingOverlay {\n    position: absolute;\n    z-index: 9999;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: white;\n    color: black;\n    \n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.places_topHeader {\n    font-weight: bold;\n    text-align: center;\n    color: white;\n\n    padding: 10px;\n    background-color: #48CAE4;\n    border: 1px solid black;\n    border-bottom: none;\n}\n\n.placesgrid {\n    position: relative;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n\n    border: 1px solid black;\n    border-top: none;\n\n    --padding: 20px;\n    --border-color: rgb(88, 88, 88);\n}\n\n.placesgrid_header {\n    font-weight: bold;\n    border-bottom: 1px solid var(--border-color);\n\n    padding: 10px;\n}\n\n.places_addButton {\n    border: 1px solid black;\n    border-top: none;\n    background-color: transparent;\n    padding: 10px;\n\n    font-size: inherit;\n}\n\n.places_addButton:hover {\n    background-color: #48CAE4;\n}\n\n.placesgrid_row {\n    grid-column: 1 / 4;\n    \n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    padding: 0;\n\n    position: relative;\n}\n\n.placesgrid_row_item {\n    padding: 10px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    min-width: 0; /* stop box from growing bigger than 1fr when text overflows */\n    white-space: nowrap;\n}\n\n/* div so the add place inputs doesn't get an extra border added */\ndiv.placesgrid_row_item:nth-child(2), .placesgrid_header:nth-child(2) {\n    border-left: 1px solid var(--border-color);\n    border-right: 1px solid var(--border-color);\n}\n\n.placesgrid_buttonGroup {\n    position: absolute;\n    top: -1px;\n    left: 100%;\n    height: calc(100% + 2px);\n    \n    display: flex;\n    justify-items: center;\n    opacity: 0;\n\n    border: 1px solid black;\n}\n\n.placesgrid_row:hover > .placesgrid_buttonGroup {\n    opacity: 1;\n}\n\n.placesgrid_buttonGroup--show {\n    opacity: 1;\n}\n\n.placesgrid_buttonGroup_button {\n    width: 30px;\n    border: none;\n    background-color: transparent;\n}\n\n.placesgrid_buttonGroup_button:hover {\n    background-color:  #48CAE4;\n    outline: 1px solid black;\n}", "",{"version":3,"sources":["webpack://src/PlacesPage/PlacesPage.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,MAAM;IACN,QAAQ;IACR,SAAS;IACT,OAAO;IACP,uBAAuB;IACvB,YAAY;;IAEZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,YAAY;;IAEZ,aAAa;IACb,yBAAyB;IACzB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,kCAAkC;;IAElC,uBAAuB;IACvB,gBAAgB;;IAEhB,eAAe;IACf,+BAA+B;AACnC;;AAEA;IACI,iBAAiB;IACjB,4CAA4C;;IAE5C,aAAa;AACjB;;AAEA;IACI,uBAAuB;IACvB,gBAAgB;IAChB,6BAA6B;IAC7B,aAAa;;IAEb,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;;IAElB,aAAa;IACb,kCAAkC;IAClC,UAAU;;IAEV,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,gBAAgB;IAChB,YAAY,EAAE,8DAA8D;IAC5E,mBAAmB;AACvB;;AAEA,kEAAkE;AAClE;IACI,0CAA0C;IAC1C,2CAA2C;AAC/C;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,wBAAwB;;IAExB,aAAa;IACb,qBAAqB;IACrB,UAAU;;IAEV,uBAAuB;AAC3B;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,6BAA6B;AACjC;;AAEA;IACI,0BAA0B;IAC1B,wBAAwB;AAC5B","sourcesContent":[".places {\n    margin: 0 30px 0 0;\n}\n\n.placesgrid_loadingOverlay {\n    position: absolute;\n    z-index: 9999;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: white;\n    color: black;\n    \n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.places_topHeader {\n    font-weight: bold;\n    text-align: center;\n    color: white;\n\n    padding: 10px;\n    background-color: #48CAE4;\n    border: 1px solid black;\n    border-bottom: none;\n}\n\n.placesgrid {\n    position: relative;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n\n    border: 1px solid black;\n    border-top: none;\n\n    --padding: 20px;\n    --border-color: rgb(88, 88, 88);\n}\n\n.placesgrid_header {\n    font-weight: bold;\n    border-bottom: 1px solid var(--border-color);\n\n    padding: 10px;\n}\n\n.places_addButton {\n    border: 1px solid black;\n    border-top: none;\n    background-color: transparent;\n    padding: 10px;\n\n    font-size: inherit;\n}\n\n.places_addButton:hover {\n    background-color: #48CAE4;\n}\n\n.placesgrid_row {\n    grid-column: 1 / 4;\n    \n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    padding: 0;\n\n    position: relative;\n}\n\n.placesgrid_row_item {\n    padding: 10px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    min-width: 0; /* stop box from growing bigger than 1fr when text overflows */\n    white-space: nowrap;\n}\n\n/* div so the add place inputs doesn't get an extra border added */\ndiv.placesgrid_row_item:nth-child(2), .placesgrid_header:nth-child(2) {\n    border-left: 1px solid var(--border-color);\n    border-right: 1px solid var(--border-color);\n}\n\n.placesgrid_buttonGroup {\n    position: absolute;\n    top: -1px;\n    left: 100%;\n    height: calc(100% + 2px);\n    \n    display: flex;\n    justify-items: center;\n    opacity: 0;\n\n    border: 1px solid black;\n}\n\n.placesgrid_row:hover > .placesgrid_buttonGroup {\n    opacity: 1;\n}\n\n.placesgrid_buttonGroup--show {\n    opacity: 1;\n}\n\n.placesgrid_buttonGroup_button {\n    width: 30px;\n    border: none;\n    background-color: transparent;\n}\n\n.placesgrid_buttonGroup_button:hover {\n    background-color:  #48CAE4;\n    outline: 1px solid black;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/common.css":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/common.css ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* Document\n * ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n}\n\n/* Sections\n * ========================================================================== */\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Edge, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n * ========================================================================== */\n\n/**\n * Remove the margin on nested lists in Chrome, Edge, IE, and Safari.\n */\n\ndl dl,\ndl ol,\ndl ul,\nol dl,\nul dl {\n  margin: 0;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge 18- and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n * ========================================================================== */\n\n/**\n * Add the correct text decoration in Edge 18-, IE, and Safari.\n */\n\nabbr[title] {\n  text-decoration: underline;\n  text-decoration: underline dotted;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/* Embedded content\n * ========================================================================== */\n\n/* Forms\n * ========================================================================== */\n\n/**\n * Remove the margin on controls in Safari.\n */\n\nbutton,\ninput,\nselect {\n  margin: 0;\n}\n\n/**\n * 1. Show the overflow in IE.\n * 2. Remove the inheritance of text transform in Edge 18-, Firefox, and IE.\n */\n\nbutton {\n  text-transform: none; /* 2 */\n}\n\n/**\n * Correct the inability to style buttons in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Add the correct display in Edge 18- and IE.\n * 2. Add the correct vertical alignment in Chrome, Edge, and Firefox.\n */\n\nprogress {\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Remove the inheritance of text transform in Firefox.\n */\n\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Remove the margin in Firefox and Safari.\n * 2. Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  margin: 0; /* 1 */\n}\n\n/**\n * 1. Correct the odd appearance in Chrome, Edge, and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Safari.\n */\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * Correct the text style of placeholders in Chrome, Edge, and Safari.\n */\n\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54;\n}\n\n/**\n * Remove the inner padding in Chrome, Edge, and Safari on macOS.\n */\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style upload buttons in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/**\n * Remove the inner border and padding of focus outlines in Firefox.\n */\n\n::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus outline styles unset by the previous rule in Firefox.\n */\n\n:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Remove the additional :invalid styles in Firefox.\n */\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/* Interactive\n * ========================================================================== */\n\n/*\n * Add the correct display in Edge 18- and IE.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct styles in Edge 18-, IE, and Safari.\n */\n\ndialog {\n  background-color: white;\n  border: solid;\n  color: black;\n  display: block;\n  height: -moz-fit-content;\n  height: -webkit-fit-content;\n  height: fit-content;\n  left: 0;\n  margin: auto;\n  padding: 1em;\n  position: absolute;\n  right: 0;\n  width: -moz-fit-content;\n  width: -webkit-fit-content;\n  width: fit-content;\n}\n\ndialog:not([open]) {\n  display: none;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n * ========================================================================== */\n\n/* User interaction\n * ========================================================================== */\n\nhtml, body {\n    padding: 0;\n    margin: 0;\n}\n\n*, :before, :after {\n    box-sizing: border-box;\n}\n\nbody {\n    --background: #fff;\n    --accent: #0096C7;\n    --brown: hsl(27, 47%, 43%);\n    --pink: hsl(332, 16%, 52%);\n    \n    --text: hsl(57, 100%, 4%);\n\n    font-family: 'Open Sans', sans-serif;\n    font-size: 20px;\n    color: var(--text);\n    background-color: var(--background);\n    padding: 0 5vw;\n}\n\n.header {\n    background-color: var(--background);\n    text-decoration: var(--accent) underline;\n}\n\n.nav {\n    font-size: 20px;\n    margin: 20px 0px 25px 0px;\n}\n\n.nav_ul {\n    list-style-type: none;\n    padding: 0;\n    margin: 0;\n}\n\n.nav_li {\n    display: inline-block;\n}\n\n.nav_li:not(:first-child) {\n    padding-left: 20px;\n}\n\n.nav_button {\n    font-size: 20px;\n    border: none;\n    background-color: transparent;\n    cursor: pointer;\n    position: relative;\n    padding: 0;\n}\n\n.nav_button:after {\n    content: '';\n    background-color: var(--accent);\n    position: absolute;\n    left: 0px;\n    bottom: -3px;\n    height: 2px;\n    width: 100%;\n    transform: scaleX(0);\n    transition: transform 0.3s ease 0s;\n}\n\n.nav_button:hover:after, .nav_button.selected:after {\n    transform: scaleX(1);\n}", "",{"version":3,"sources":["webpack://node_modules/@csstools/normalize.css/normalize.css","webpack://src/common.css"],"names":[],"mappings":"AAAA;+EAC+E;;AAE/E;;;;EAIE;;AAEF;EACE,iBAAiB,EAAE,MAAM;AAG3B;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;;;;;EAKE,SAAS;AACX;;AAaA;;;EAGE;;AAEF;EACE,uBAAuB,EAAE,MAAM;EAC/B,SAAS,EAAE,MAAM;AAEnB;;AAUA;;;EAGE;;AAEF;EACE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;+EAC+E;;AAU/E;;EAEE;;AAEF;EACE,0BAA0B;EAC1B,iCAAiC;AACnC;;AAEA;;EAEE;;AAEF;;EAEE,mBAAmB;AACrB;;AAEA;;;EAGE;;AAEF;;;EAGE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;+EAC+E;;AAoC/E;+EAC+E;;AAE/E;;EAEE;;AAEF;;;EAGE,SAAS;AACX;;AAEA;;;EAGE;;AAEF;EAEE,oBAAoB,EAAE,MAAM;AAC9B;;AAEA;;EAEE;;AAEF;;;;EAIE,0BAA0B;AAC5B;;AAEA;;EAEE;;AAEF;EACE,8BAA8B;AAChC;;AAuBA;;;EAGE;;AAEF;EAEE,wBAAwB,EAAE,MAAM;AAClC;;AAEA;;EAEE;;AAEF;EACE,oBAAoB;AACtB;;AAEA;;;EAGE;;AAEF;EACE,SAAS,EAAE,MAAM;AAEnB;;AAaA;;;EAGE;;AAEF;EACE,6BAA6B,EAAE,MAAM;EACrC,oBAAoB,EAAE,MAAM;AAC9B;;AAEA;;EAEE;;AAEF;;EAEE,YAAY;AACd;;AAEA;;EAEE;;AAEF;EACE,cAAc;EACd,aAAa;AACf;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;;EAGE;;AAEF;EACE,0BAA0B,EAAE,MAAM;EAClC,aAAa,EAAE,MAAM;AACvB;;AAEA;;EAEE;;AAEF;EACE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;EAEE;;AAEF;EACE,8BAA8B;AAChC;;AAEA;;EAEE;;AAEF;EACE,gBAAgB;AAClB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;EAEE;;AAEF;EACE,uBAAuB;EACvB,aAAa;EACb,YAAY;EACZ,cAAc;EACd,wBAAwB;EACxB,2BAA2B;EAC3B,mBAAmB;EACnB,OAAO;EACP,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,QAAQ;EACR,uBAAuB;EACvB,0BAA0B;EAC1B,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAkB/E;+EAC+E;;ACrZ/E;IACI,UAAU;IACV,SAAS;AACb;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,0BAA0B;IAC1B,0BAA0B;;IAE1B,yBAAyB;;IAEzB,oCAAoC;IACpC,eAAe;IACf,kBAAkB;IAClB,mCAAmC;IACnC,cAAc;AAClB;;AAEA;IACI,mCAAmC;IACnC,wCAAwC;AAC5C;;AAEA;IACI,eAAe;IACf,yBAAyB;AAC7B;;AAEA;IACI,qBAAqB;IACrB,UAAU;IACV,SAAS;AACb;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,6BAA6B;IAC7B,eAAe;IACf,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,WAAW;IACX,+BAA+B;IAC/B,kBAAkB;IAClB,SAAS;IACT,YAAY;IACZ,WAAW;IACX,WAAW;IACX,oBAAoB;IACpB,kCAAkC;AACtC;;AAEA;IACI,oBAAoB;AACxB","sourcesContent":["/* Document\n * ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n * ========================================================================== */\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Edge, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n * ========================================================================== */\n\n/**\n * Remove the margin on nested lists in Chrome, Edge, IE, and Safari.\n */\n\ndl dl,\ndl ol,\ndl ul,\nol dl,\nul dl {\n  margin: 0;\n}\n\n/**\n * Remove the margin on nested lists in Edge 18- and IE.\n */\n\nol ol,\nol ul,\nul ol,\nul ul {\n  margin: 0;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge 18- and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * Add the correct display in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n * ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * Add the correct text decoration in Edge 18-, IE, and Safari.\n */\n\nabbr[title] {\n  text-decoration: underline;\n  text-decoration: underline dotted;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/* Embedded content\n * ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images within links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n * ========================================================================== */\n\n/**\n * Remove the margin on controls in Safari.\n */\n\nbutton,\ninput,\nselect {\n  margin: 0;\n}\n\n/**\n * 1. Show the overflow in IE.\n * 2. Remove the inheritance of text transform in Edge 18-, Firefox, and IE.\n */\n\nbutton {\n  overflow: visible; /* 1 */\n  text-transform: none; /* 2 */\n}\n\n/**\n * Correct the inability to style buttons in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * Show the overflow in Edge 18- and IE.\n */\n\ninput {\n  overflow: visible;\n}\n\n/**\n * 1. Correct the text wrapping in Edge 18- and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * 1. Add the correct display in Edge 18- and IE.\n * 2. Add the correct vertical alignment in Chrome, Edge, and Firefox.\n */\n\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Remove the inheritance of text transform in Firefox.\n */\n\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Remove the margin in Firefox and Safari.\n * 2. Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  margin: 0; /* 1 */\n  overflow: auto; /* 2 */\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * 1. Correct the odd appearance in Chrome, Edge, and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Safari.\n */\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * Correct the text style of placeholders in Chrome, Edge, and Safari.\n */\n\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54;\n}\n\n/**\n * Remove the inner padding in Chrome, Edge, and Safari on macOS.\n */\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style upload buttons in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/**\n * Remove the inner border and padding of focus outlines in Firefox.\n */\n\n::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus outline styles unset by the previous rule in Firefox.\n */\n\n:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Remove the additional :invalid styles in Firefox.\n */\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/* Interactive\n * ========================================================================== */\n\n/*\n * Add the correct display in Edge 18- and IE.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct styles in Edge 18-, IE, and Safari.\n */\n\ndialog {\n  background-color: white;\n  border: solid;\n  color: black;\n  display: block;\n  height: -moz-fit-content;\n  height: -webkit-fit-content;\n  height: fit-content;\n  left: 0;\n  margin: auto;\n  padding: 1em;\n  position: absolute;\n  right: 0;\n  width: -moz-fit-content;\n  width: -webkit-fit-content;\n  width: fit-content;\n}\n\ndialog:not([open]) {\n  display: none;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n * ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n  display: none;\n}\n\n/* User interaction\n * ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n","@import 'normalize.css';\n\nhtml, body {\n    padding: 0;\n    margin: 0;\n}\n\n*, :before, :after {\n    box-sizing: border-box;\n}\n\nbody {\n    --background: #fff;\n    --accent: #0096C7;\n    --brown: hsl(27, 47%, 43%);\n    --pink: hsl(332, 16%, 52%);\n    \n    --text: hsl(57, 100%, 4%);\n\n    font-family: 'Open Sans', sans-serif;\n    font-size: 20px;\n    color: var(--text);\n    background-color: var(--background);\n    padding: 0 5vw;\n}\n\n.header {\n    background-color: var(--background);\n    text-decoration: var(--accent) underline;\n}\n\n.nav {\n    font-size: 20px;\n    margin: 20px 0px 25px 0px;\n}\n\n.nav_ul {\n    list-style-type: none;\n    padding: 0;\n    margin: 0;\n}\n\n.nav_li {\n    display: inline-block;\n}\n\n.nav_li:not(:first-child) {\n    padding-left: 20px;\n}\n\n.nav_button {\n    font-size: 20px;\n    border: none;\n    background-color: transparent;\n    cursor: pointer;\n    position: relative;\n    padding: 0;\n}\n\n.nav_button:after {\n    content: '';\n    background-color: var(--accent);\n    position: absolute;\n    left: 0px;\n    bottom: -3px;\n    height: 2px;\n    width: 100%;\n    transform: scaleX(0);\n    transition: transform 0.3s ease 0s;\n}\n\n.nav_button:hover:after, .nav_button.selected:after {\n    transform: scaleX(1);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/ApiHandler.js":
/*!***************************!*\
  !*** ./src/ApiHandler.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



class ApiHandler {
  getPlaces() {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/places").then(response => response.data);
  }

  getLogs(year) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/logs").then(response => response.data);
  }

  updateLog(date, placeId) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/logs/" + date, {
      placeId: placeId
    });
  }

  deleteLog(date) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete("/logs/" + date);
  }

  savePlace(name, distanceFromBase, distanceFromHome) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/places", {
      name: name,
      distanceFromBase: distanceFromBase,
      distanceFromHome: distanceFromHome
    });
  }

  deletePlace(placeId) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete("/places/" + placeId.toString());
  }

}

const apiHandler = new ApiHandler();
/* harmony default export */ __webpack_exports__["default"] = (apiHandler);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var _Header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.js */ "./src/Header.js");
/* harmony import */ var _Nav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Nav.js */ "./src/Nav.js");
/* harmony import */ var _LogPage_LogPage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LogPage/LogPage.js */ "./src/LogPage/LogPage.js");
/* harmony import */ var _PlacesPage_PlacesPage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PlacesPage/PlacesPage.js */ "./src/PlacesPage/PlacesPage.js");
/* harmony import */ var _ApiHandler_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ApiHandler.js */ "./src/ApiHandler.js");
/* harmony import */ var _PagesEnum_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PagesEnum.js */ "./src/PagesEnum.js");
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Utils.js */ "./src/Utils.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/rees/Documents/HTML/React/mtu-mileage-app/src/App.js";












class App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.handleNavLogClick = this.handleNavLogClick.bind(this);
    this.handleNavPlacesClick = this.handleNavPlacesClick.bind(this);
    this.updateLog = this.updateLog.bind(this);
    this.deleteLog = this.deleteLog.bind(this);
    this.getLogs = this.getLogs.bind(this);
    this.savePlace = this.savePlace.bind(this);
    this.deletePlace = this.deletePlace.bind(this);
    this.state = {
      selectedPage: _PagesEnum_js__WEBPACK_IMPORTED_MODULE_7__["default"].LOG_PAGE,
      logs: null,
      places: null,
      logsLoading: true,
      placesLoading: true,
      errored: false
    };
  }

  handleNavLogClick() {
    this.setState({
      selectedPage: _PagesEnum_js__WEBPACK_IMPORTED_MODULE_7__["default"].LOG_PAGE
    });
  }

  handleNavPlacesClick() {
    this.setState({
      selectedPage: _PagesEnum_js__WEBPACK_IMPORTED_MODULE_7__["default"].PLACES_PAGE
    });
  }

  componentDidMount() {
    const placesDone = this.getPlaces();
    const logsDone = this.getLogs();
    Promise.all([placesDone, logsDone]).then(() => this.setState({
      placesLoading: false,
      logsLoading: false
    }));
  }

  async updateLog(date, value) {
    this.setState({
      logsLoading: true
    });
    let dateString = _Utils_js__WEBPACK_IMPORTED_MODULE_8__["dateToDateString"](date);
    await _ApiHandler_js__WEBPACK_IMPORTED_MODULE_6__["default"].updateLog(dateString, value).catch(() => this.setState({
      errored: true
    }));
    await this.getLogs();
    this.setState({
      logsLoading: false
    });
  }

  async deleteLog(date, value) {
    this.setState({
      logsLoading: true
    });
    let dateString = _Utils_js__WEBPACK_IMPORTED_MODULE_8__["dateToDateString"](date);
    await _ApiHandler_js__WEBPACK_IMPORTED_MODULE_6__["default"].deleteLog(dateString, value).catch(() => this.setState({
      errored: true
    }));
    await this.getLogs();
    this.setState({
      logsLoading: false
    });
  }

  async getLogs() {
    let newLogs = await _ApiHandler_js__WEBPACK_IMPORTED_MODULE_6__["default"].getLogs().catch(() => this.setState({
      errored: true
    }));
    let newLogsMap = _Utils_js__WEBPACK_IMPORTED_MODULE_8__["convertToMap"](newLogs, "date");
    this.setState({
      logs: newLogsMap
    });
    console.log(newLogsMap);
  }

  async getPlaces() {
    let newPlaces = await _ApiHandler_js__WEBPACK_IMPORTED_MODULE_6__["default"].getPlaces().catch(() => this.setState({
      errored: true
    }));
    let newPlacesMap = _Utils_js__WEBPACK_IMPORTED_MODULE_8__["convertToMap"](newPlaces, "_id");
    this.setState({
      places: newPlacesMap
    });
  }

  async savePlace(name, distanceFromBase, distanceFromHome) {
    this.setState({
      placesLoading: true
    });
    await _ApiHandler_js__WEBPACK_IMPORTED_MODULE_6__["default"].savePlace(name, distanceFromBase, distanceFromHome).catch(() => this.setState({
      errored: true
    }));
    await this.getPlaces();
    this.setState({
      placesLoading: false
    });
  }

  async deletePlace(placeId) {
    this.setState({
      placesLoading: true,
      logsLoading: true // log entries with the deleted place are also deleted

    });
    await _ApiHandler_js__WEBPACK_IMPORTED_MODULE_6__["default"].deletePlace(placeId).catch(() => this.setState({
      errored: true
    }));
    const getPlacesPromise = this.getPlaces();
    const getLogsPromise = this.getLogs();
    await Promise.all([getPlacesPromise, getLogsPromise]);
    this.setState({
      placesLoading: false,
      logsLoading: false
    });
  }

  render() {
    const apiFuncs = {
      updateLog: this.updateLog,
      deleteLog: this.deleteLog,
      getLogs: this.getLogs,
      savePlace: this.savePlace,
      deletePlace: this.deletePlace
    };

    if (this.state.errored) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("p", {
        children: "Coudn't connect to server, please refresh and try again"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 20
      }, this);
    }

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_Header_js__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_Nav_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
        selected: this.state.selectedPage,
        onLogClick: this.handleNavLogClick,
        onPlacesClick: this.handleNavPlacesClick
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 17
      }, this), this.state.selectedPage === _PagesEnum_js__WEBPACK_IMPORTED_MODULE_7__["default"].LOG_PAGE ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_LogPage_LogPage_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
        logs: this.state.logs,
        places: this.state.places,
        apiFuncs: apiFuncs,
        logsLoading: this.state.logsLoading,
        placesLoading: this.state.placesLoading
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 21
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_PlacesPage_PlacesPage_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
        logs: this.state.logs,
        places: this.state.places,
        apiFuncs: apiFuncs,
        placesLoading: this.state.placesLoading
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 21
      }, this)]
    }, void 0, true);
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (App);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Header.js":
/*!***********************!*\
  !*** ./src/Header.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var _common_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.css */ "./src/common.css");
/* harmony import */ var _common_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_common_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/rees/Documents/HTML/React/mtu-mileage-app/src/Header.js";


function Header() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("header", {
    className: "header",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
      children: "MTU Mileage App"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}
_c = Header;

var _c;

__webpack_require__.$Refresh$.register(_c, "Header");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/LogPage/LogBox.css":
/*!********************************!*\
  !*** ./src/LogPage/LogBox.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./LogBox.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/LogPage/LogBox.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./LogBox.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/LogPage/LogBox.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./LogBox.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/LogPage/LogBox.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/LogPage/LogBox.js":
/*!*******************************!*\
  !*** ./src/LogPage/LogBox.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LogBox; });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var _LogBox_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LogBox.css */ "./src/LogPage/LogBox.css");
/* harmony import */ var _LogBox_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_LogBox_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/rees/Documents/HTML/React/mtu-mileage-app/src/LogPage/LogBox.js";





class LogBox extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    let now = new Date();
    let week = Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["startOfWeek"])(now);
    this.state = {
      week: week,
      selectsLoading: Array(7).fill(false)
    };
  }

  handleClick(delta) {
    let newWeek = Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["add"])(this.state.week, delta);
    this.setState({
      week: newWeek
    });
    this.props.onWeekChange(newWeek);
  }

  handleSelectChange(date, idx, newValue) {
    let selectsLoading = this.state.selectsLoading.slice();
    selectsLoading[idx] = true;
    this.setState({
      selectsLoading: selectsLoading
    });

    if (newValue === null) {
      this.props.apiFuncs.deleteLog(date).then(() => this.setState({
        selectsLoading: Array(7).fill(false)
      }));
    } else {
      this.props.apiFuncs.updateLog(date, newValue.value).then(() => this.setState({
        selectsLoading: Array(7).fill(false)
      }));
    }
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "logbox",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "logbox_main",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "logbox_monthYearHeader",
          children: getHeaderText(this.state.week)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "logbox_dateGrid",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            className: "logbox_dateGrid_header",
            children: "Date"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            className: "logbox_dateGrid_header",
            children: "Location"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Week, {
            logs: this.props.logs,
            places: this.props.places,
            weekStart: this.state.week,
            onChange: this.handleSelectChange,
            selectsLoading: this.state.selectsLoading,
            logsLoading: this.props.logsLoading
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "logbox_buttons",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
          className: "logbox_button",
          onClick: () => this.handleClick({
            weeks: -4
          }),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
            src: "/icons/double-up-arrow.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
          className: "logbox_button",
          onClick: () => this.handleClick({
            weeks: -1
          }),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
            src: "/icons/up-arrow.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
          className: "logbox_button",
          onClick: () => this.handleClick({
            weeks: 1
          }),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
            src: "/icons/down-arrow.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
          className: "logbox_button",
          onClick: () => this.handleClick({
            weeks: 4
          }),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
            src: "/icons/double-down-arrow.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }, this);
  }

}

function getHeaderText(weekStart) {
  let weekEnd = Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["lastDayOfWeek"])(weekStart);
  let text;

  if (!Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["isSameYear"])(weekStart, weekEnd)) {
    text = `${Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["format"])(weekStart, "MMMM yyyy")} / ${Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["format"])(weekEnd, "MMMM yyyy")}`;
  } else if (!Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["isSameMonth"])(weekStart, weekEnd)) {
    text = `${Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["format"])(weekStart, "MMMM")} / ${Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["format"])(weekEnd, "MMMM yyyy")}`;
  } else {
    text = Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["format"])(weekStart, "MMMM yyyy");
  }

  return text;
}

function Week(props) {
  let logs = props.logs;
  let places = props.places;
  let selectOptions = placesToOptions(places);
  let elms = [];
  let key = 0;
  let prev = props.weekStart;

  for (const [idx, day] of getDaysOfWeek(props.weekStart).entries()) {
    let className = Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["isSameMonth"])(day, prev) ? "" : "logbox-next-month";
    elms.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: className,
      children: Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["format"])(day, "EEEE do")
    }, key++, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }, this));
    elms.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: className + " logbox-no-padding",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(LogSelect, {
        value: getSelectValue(day, logs, places),
        options: selectOptions,
        onChange: newValue => props.onChange(day, idx, newValue),
        loading: props.selectsLoading[idx],
        logsLoading: props.logsLoading
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 13
      }, this)
    }, key++, false, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 19
    }, this));
    prev = day;
  }

  return elms;
}

_c = Week;

function getDaysOfWeek(weekStart) {
  let days = [];

  for (let i = 0; i < 7; i++) {
    days.push(Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["add"])(weekStart, {
      days: i
    }));
  }

  return days;
}

function placesToOptions(places) {
  if (places === null) {
    return [];
  }

  let options = [];

  for (let place of places.values()) {
    options.push({
      value: place._id,
      label: place.name
    });
  }

  return options;
}

function getSelectValue(date, logs, places) {
  let logEntry = dateToLogEntry(date, logs);

  if (logEntry) {
    return {
      value: logEntry.placeId,
      label: places.get(logEntry.placeId).name
    };
  } else {
    return null;
  }
}

function dateToLogEntry(date, logs) {
  let entry = Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["format"])(date, "yyyy-MM-dd");

  if (logs && logs.has(entry)) {
    return logs.get(entry);
  } else {
    return null;
  }
}

function LogSelect(props) {
  const customStyles = {
    control: provided => ({ ...provided,
      borderRadius: 0,
      backgroundColor: "var(--background)",
      width: "100%",
      height: "100%",
      border: "none"
    }),
    container: provided => ({ ...provided,
      width: "100%",
      height: "100%"
    }),
    dropdownIndicator: (provided, state) => ({
      display: "none"
    }),
    indicatorSeparator: (provided, state) => ({
      display: "none"
    })
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_select__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: props.value,
    placeholder: "...",
    styles: customStyles,
    options: props.options,
    isClearable: true,
    onChange: props.onChange,
    isLoading: props.loading || props.logsLoading
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 218,
    columnNumber: 12
  }, this);
}

_c2 = LogSelect;

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "Week");
__webpack_require__.$Refresh$.register(_c2, "LogSelect");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/LogPage/LogPage.css":
/*!*********************************!*\
  !*** ./src/LogPage/LogPage.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./LogPage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/LogPage/LogPage.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./LogPage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/LogPage/LogPage.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./LogPage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/LogPage/LogPage.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/LogPage/LogPage.js":
/*!********************************!*\
  !*** ./src/LogPage/LogPage.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _LogPage_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LogPage.css */ "./src/LogPage/LogPage.css");
/* harmony import */ var _LogPage_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_LogPage_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LogBox_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LogBox.js */ "./src/LogPage/LogBox.js");
/* harmony import */ var _Summary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Summary.js */ "./src/LogPage/Summary.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/rees/Documents/HTML/React/mtu-mileage-app/src/LogPage/LogPage.js";







class LogPage extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  constructor(props) {
    super(props);
    this.handleWeekChange = this.handleWeekChange.bind(this);
    this.state = {
      month: Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["startOfMonth"])(new Date())
    };
  }

  handleWeekChange(newWeek) {
    let newMonth = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["startOfMonth"])(newWeek);

    if (newMonth !== this.state.month) {
      this.setState({
        month: newMonth
      });
    }
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      className: "logpage",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_LogBox_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
        logs: this.props.logs,
        places: this.props.places,
        apiFuncs: this.props.apiFuncs,
        onWeekChange: this.handleWeekChange,
        logsLoading: this.props.logsLoading
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_Summary_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
        logs: this.props.logs,
        places: this.props.places,
        month: this.state.month,
        logsLoading: this.props.logsLoading,
        placesLoading: this.props.placesLoading
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (LogPage);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/LogPage/Summary.js":
/*!********************************!*\
  !*** ./src/LogPage/Summary.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Summary; });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils */ "./src/Utils.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/rees/Documents/HTML/React/mtu-mileage-app/src/LogPage/Summary.js";



function Summary(props) {
  let totalMilesFromBase = 0;
  let totalMilesFromHome = 0;

  if (!props.logsLoading && !props.placesLoading) {
    for (let date of getDaysOfMonth(props.month)) {
      let dateString = Object(_Utils__WEBPACK_IMPORTED_MODULE_1__["dateToDateString"])(date);

      if (!props.logs.has(dateString)) {
        continue;
      }

      let placeId = props.logs.get(dateString).placeId;
      console.log(placeId);
      totalMilesFromBase += +props.places.get(placeId).distanceFromBase;
      totalMilesFromHome += +props.places.get(placeId).distanceFromHome;
    }
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("table", {
    className: "summary",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tbody", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tr", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
          colSpan: "2",
          children: ["Summary for ", Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["format"])(props.month, "MMMM yyyy")]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tr", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
          children: "Total miles from base"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
          children: props.logsLoading ? "..." : totalMilesFromBase
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tr", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
          children: "Total miles from home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
          children: props.logsLoading ? "..." : totalMilesFromHome
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tr", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
          children: "Money earned"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
          children: ["\xA3", props.logsLoading ? "..." : (totalMilesFromBase * 0.45).toFixed(2)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }, this);
}
_c = Summary;

function getDaysOfMonth(monthStart) {
  let days = [];

  for (let i = 0; i < Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["getDaysInMonth"])(monthStart); i++) {
    days.push(Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["add"])(monthStart, {
      days: i
    }));
  }

  return days;
}

var _c;

__webpack_require__.$Refresh$.register(_c, "Summary");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Nav.js":
/*!********************!*\
  !*** ./src/Nav.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Nav; });
/* harmony import */ var _common_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.css */ "./src/common.css");
/* harmony import */ var _common_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_common_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PagesEnum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PagesEnum */ "./src/PagesEnum.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/rees/Documents/HTML/React/mtu-mileage-app/src/Nav.js";



function Nav(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("nav", {
    className: "nav",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ul", {
      className: "nav_ul",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
        className: "nav_li",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
          className: 'nav_button' + (props.selected === _PagesEnum__WEBPACK_IMPORTED_MODULE_1__["default"].LOG_PAGE ? ' selected' : ''),
          onClick: props.onLogClick,
          children: "Log"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
        className: "nav_li",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
          className: 'nav_button' + (props.selected === _PagesEnum__WEBPACK_IMPORTED_MODULE_1__["default"].PLACES_PAGE ? ' selected' : ''),
          onClick: props.onPlacesClick,
          children: "Places"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 22
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);
}
_c = Nav;

var _c;

__webpack_require__.$Refresh$.register(_c, "Nav");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/PagesEnum.js":
/*!**************************!*\
  !*** ./src/PagesEnum.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

class PagesEnum {}

PagesEnum.LOG_PAGE = Symbol();
PagesEnum.PLACES_PAGE = Symbol();
/* harmony default export */ __webpack_exports__["default"] = (PagesEnum);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/PlacesPage/PlacesPage.css":
/*!***************************************!*\
  !*** ./src/PlacesPage/PlacesPage.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./PlacesPage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/PlacesPage/PlacesPage.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./PlacesPage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/PlacesPage/PlacesPage.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./PlacesPage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/PlacesPage/PlacesPage.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/PlacesPage/PlacesPage.js":
/*!**************************************!*\
  !*** ./src/PlacesPage/PlacesPage.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlacesPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.css");
/* harmony import */ var _fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PlacesPage_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlacesPage.css */ "./src/PlacesPage/PlacesPage.css");
/* harmony import */ var _PlacesPage_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_PlacesPage_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/rees/Documents/HTML/React/mtu-mileage-app/src/PlacesPage/PlacesPage.js";




class PlacesPage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleSavePlace = this.handleSavePlace.bind(this);
    this.handleDeletePlace = this.handleDeletePlace.bind(this);
    this.state = {
      adding: false
    };
  }

  handleAddClick() {
    this.setState({
      adding: true
    });
  }

  handleSavePlace(name, distanceFromBase, distanceFromHome) {
    this.setState({
      adding: false
    });
    this.props.apiFuncs.savePlace(name, distanceFromBase, distanceFromHome);
  }

  handleDeletePlace(placeId) {
    this.props.apiFuncs.deletePlace(placeId);
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "places",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: "places_topHeader",
        children: "Places"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: "placesgrid",
        children: [this.props.placesLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "placesgrid_loadingOverlay",
          children: "Loading..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "placesgrid_header",
          children: "Place name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "placesgrid_header",
          children: "Distance from base (mi)"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "placesgrid_header",
          children: "Distance from home (mi)"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Rows, {
          places: this.props.places,
          onDeletePlace: this.handleDeletePlace
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, this), !this.props.placesLoading && this.state.adding && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(EditRow, {
          onClick: this.handleSavePlace
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 72
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, this), !this.props.placesLoading && !this.state.adding && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
        className: "places_addButton",
        onClick: this.handleAddClick,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("i", {
          className: "fas fa-plus"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 25
        }, this), " Add place"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, this);
  }

}

function Rows(props) {
  let places = props.places;
  let elms = [];

  for (let place of places.values()) {
    elms.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Row, {
      placeId: place._id,
      name: place.name,
      distanceFromBase: place.distanceFromBase,
      distanceFromHome: place.distanceFromHome,
      onDeletePlace: props.onDeletePlace
    }, place._id, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 19
    }, this));
  }

  return elms;
}

_c = Rows;

function Row(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    className: "placesgrid_row",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "placesgrid_row_item",
      children: props.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "placesgrid_row_item",
      children: props.distanceFromBase
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "placesgrid_row_item",
      children: props.distanceFromHome
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "placesgrid_buttonGroup",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
        onClick: () => props.onDeletePlace(props.placeId),
        className: "placesgrid_buttonGroup_button",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("i", {
          className: "fas fa-trash-alt"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 84,
    columnNumber: 9
  }, this);
}

_c2 = Row;

class EditRow extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleBaseChange = this.handleBaseChange.bind(this);
    this.handleHomeChange = this.handleHomeChange.bind(this);
    this.state = {
      nameValue: '',
      distanceFromBaseValue: '',
      distanceFromHomeValue: ''
    };
  }

  handleNameChange(evt) {
    this.setState({
      nameValue: evt.target.value
    });
  }

  handleBaseChange(evt) {
    this.setState({
      distanceFromBaseValue: evt.target.value
    });
  }

  handleHomeChange(evt) {
    this.setState({
      distanceFromHomeValue: evt.target.value
    });
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "placesgrid_row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
        className: "placesgrid_row_item",
        type: "text",
        value: this.state.nameValue,
        onChange: this.handleNameChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
        className: "placesgrid_row_item",
        type: "number",
        value: this.state.distanceFromBaseValue,
        onChange: this.handleBaseChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
        className: "placesgrid_row_item",
        type: "number",
        value: this.state.distanceFromHomeValue,
        onChange: this.handleHomeChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: "placesgrid_buttonGroup placesgrid_buttonGroup--show",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
          className: "placesgrid_buttonGroup_button",
          onClick: () => this.props.onClick(this.state.nameValue, this.state.distanceFromBaseValue, this.state.distanceFromHomeValue),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("i", {
            className: "fas fa-save"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }, this);
  }

}

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "Rows");
__webpack_require__.$Refresh$.register(_c2, "Row");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Utils.js":
/*!**********************!*\
  !*** ./src/Utils.js ***!
  \**********************/
/*! exports provided: convertToMap, dateToDateString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertToMap", function() { return convertToMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateToDateString", function() { return dateToDateString; });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

 // Converts [{date: "2021-12-12", placeId: 1}, {date: "2021-12-13", placeId: 2}]
// to {"2021-12-12": {placeId: 1}, "2021-12-13": {placeId: 2}}

function convertToMap(arrayOfObjs, key) {
  let map = new Map();

  for (let obj of arrayOfObjs) {
    map.set(obj[key], obj);
  }

  return map;
}
function dateToDateString(date) {
  return Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["format"])(date, "yyyy-MM-dd");
}

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/common.css":
/*!************************!*\
  !*** ./src/common.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./common.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/common.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./common.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/common.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./common.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/common.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/rees/Documents/HTML/React/mtu-mileage-app/src/index.js";




react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 6,
  columnNumber: 3
}, undefined), document.getElementById('root'));

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ 0:
/*!******************************************************************************************************************************************************************!*\
  !*** multi ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/rees/Documents/HTML/React/mtu-mileage-app/node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js */"./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js");
__webpack_require__(/*! /Users/rees/Documents/HTML/React/mtu-mileage-app/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/rees/Documents/HTML/React/mtu-mileage-app/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime-main","vendors~main"]]]);
//# sourceMappingURL=main.chunk.js.map