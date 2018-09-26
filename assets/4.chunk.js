webpackJsonp([4],{

/***/ 1129:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(39)(true);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * Customized version of bootstrap using variables from _variables.scss.\n * This file is loaded via separate loader thus allowing to use original bootstrap classes (e.g. .btn-default) through out the app.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/*\n * Typography\n * ======================================================================== */\n/*\n * Layout\n * ======================================================================== */\n/*\n * Media queries breakpoints\n * ======================================================================== */\n/* Extra small screen / phone */\n/* Small screen / tablet */\n/* Medium screen / desktop */\n/* Large screen / wide desktop */\n/**\n * Custom application mixins available through out the app\n */\n.PqZ3o_gb0TbwP6zf5npKp {\n  padding-top: 20vh;\n  text-align: center; }\n\n.gH52SioGyZilHaHmDxJFw {\n  font-size: 80px; }\n", "", {"version":3,"sources":["C:/MyProject/React/react-dashboard-master/src/pages/notFound/NotFound.scss"],"names":[],"mappings":"AAAA,iBAAiB;AACjB;;;;;;;GAOG;AACH;;;GAGG;AACH;;;;;;;GAOG;AACH;;8EAE8E;AAC9E;;8EAE8E;AAC9E;;8EAE8E;AAC9E,gCAAgC;AAChC,2BAA2B;AAC3B,6BAA6B;AAC7B,iCAAiC;AACjC;;GAEG;AACH;EACE,kBAAkB;EAClB,mBAAmB,EAAE;;AAEvB;EACE,gBAAgB,EAAE","file":"NotFound.scss","sourcesContent":["@charset \"UTF-8\";\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * Customized version of bootstrap using variables from _variables.scss.\n * This file is loaded via separate loader thus allowing to use original bootstrap classes (e.g. .btn-default) through out the app.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/*\n * Typography\n * ======================================================================== */\n/*\n * Layout\n * ======================================================================== */\n/*\n * Media queries breakpoints\n * ======================================================================== */\n/* Extra small screen / phone */\n/* Small screen / tablet */\n/* Medium screen / desktop */\n/* Large screen / wide desktop */\n/**\n * Custom application mixins available through out the app\n */\n.root {\n  padding-top: 20vh;\n  text-align: center; }\n\n.title {\n  font-size: 80px; }\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "PqZ3o_gb0TbwP6zf5npKp",
	"title": "gH52SioGyZilHaHmDxJFw"
};

/***/ }),

/***/ 1167:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(1129);
    var insertCss = __webpack_require__(43);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=!../../../node_modules/sass-loader/lib/loader.js!./NotFound.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=!../../../node_modules/sass-loader/lib/loader.js!./NotFound.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 939:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NotFound_scss__ = __webpack_require__(1167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NotFound_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__NotFound_scss__);
var _jsxFileName = 'C:\\MyProject\\React\\react-dashboard-master\\src\\pages\\notFound\\NotFound.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





var NotFound = function (_React$Component) {
  _inherits(NotFound, _React$Component);

  function NotFound() {
    _classCallCheck(this, NotFound);

    return _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).apply(this, arguments));
  }

  _createClass(NotFound, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_2__NotFound_scss___default.a.root, __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          { className: __WEBPACK_IMPORTED_MODULE_2__NotFound_scss___default.a.title, __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            },
            __self: this
          },
          '404'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            },
            __self: this
          },
          'Sorry, the page you were trying to view does not exist.'
        )
      );
    }
  }]);

  return NotFound;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__NotFound_scss___default.a)(NotFound));

/***/ })

});
//# sourceMappingURL=4.chunk.js.map