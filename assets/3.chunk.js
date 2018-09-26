webpackJsonp([3],{

/***/ 1132:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(39)(true);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * Customized version of bootstrap using variables from _variables.scss.\n * This file is loaded via separate loader thus allowing to use original bootstrap classes (e.g. .btn-default) through out the app.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/*\n * Typography\n * ======================================================================== */\n/*\n * Layout\n * ======================================================================== */\n/*\n * Media queries breakpoints\n * ======================================================================== */\n/* Extra small screen / phone */\n/* Small screen / tablet */\n/* Medium screen / desktop */\n/* Large screen / wide desktop */\n/**\n * Custom application mixins available through out the app\n */\n", "", {"version":3,"sources":["C:/MyProject/React/react-dashboard-master/src/pages/profile/Profile.scss"],"names":[],"mappings":"AAAA,iBAAiB;AACjB;;;;;;;GAOG;AACH;;;GAGG;AACH;;;;;;;GAOG;AACH;;8EAE8E;AAC9E;;8EAE8E;AAC9E;;8EAE8E;AAC9E,gCAAgC;AAChC,2BAA2B;AAC3B,6BAA6B;AAC7B,iCAAiC;AACjC;;GAEG","file":"Profile.scss","sourcesContent":["@charset \"UTF-8\";\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * Customized version of bootstrap using variables from _variables.scss.\n * This file is loaded via separate loader thus allowing to use original bootstrap classes (e.g. .btn-default) through out the app.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/*\n * Typography\n * ======================================================================== */\n/*\n * Layout\n * ======================================================================== */\n/*\n * Media queries breakpoints\n * ======================================================================== */\n/* Extra small screen / phone */\n/* Small screen / tablet */\n/* Medium screen / desktop */\n/* Large screen / wide desktop */\n/**\n * Custom application mixins available through out the app\n */\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1170:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(1132);
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
      module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=!../../../node_modules/sass-loader/lib/loader.js!./Profile.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=!../../../node_modules/sass-loader/lib/loader.js!./Profile.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 942:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Widget__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Profile_scss__ = __webpack_require__(1170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Profile_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Profile_scss__);
var _jsxFileName = 'C:\\MyProject\\React\\react-dashboard-master\\src\\pages\\profile\\Profile.js',
    _this = this;









var Profile = function Profile() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: __WEBPACK_IMPORTED_MODULE_4__Profile_scss___default.a.root, __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: _this
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'ol',
      { className: 'breadcrumb', __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: _this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          },
          __self: _this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          { className: 'text-muted', __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            },
            __self: _this
          },
          'YOU ARE HERE'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        { className: 'active', __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: _this
        },
        'Profile'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h1',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: _this
      },
      'Profile'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["b" /* Row */],
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: _this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["c" /* Col */],
        { sm: 6, __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: _this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3__components_Widget__["a" /* default */],
          {
            title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 20
                },
                __self: _this
              },
              'Edit Profile ',
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { className: 'fw-semi-bold', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                  },
                  __self: _this
                },
                'Form'
              )
            ),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            },
            __self: _this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["s" /* Form */],
            { horizontal: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 25
              },
              __self: _this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["t" /* FormGroup */],
              { controlId: 'formHorizontalEmail', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 26
                },
                __self: _this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["c" /* Col */],
                { componentClass: __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["u" /* ControlLabel */], sm: 2, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                  },
                  __self: _this
                },
                'Username'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["c" /* Col */],
                { sm: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                  },
                  __self: _this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["v" /* FormControl */], { type: 'text', placeholder: 'Username', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                  },
                  __self: _this
                })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["t" /* FormGroup */],
              { controlId: 'formHorizontalEmail', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 34
                },
                __self: _this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["c" /* Col */],
                { componentClass: __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["u" /* ControlLabel */], sm: 2, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                  },
                  __self: _this
                },
                'Email'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["c" /* Col */],
                { sm: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                  },
                  __self: _this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["v" /* FormControl */], { type: 'email', placeholder: 'Email', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                  },
                  __self: _this
                })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["t" /* FormGroup */],
              { controlId: 'formHorizontalPassword', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 42
                },
                __self: _this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["c" /* Col */],
                { componentClass: __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["u" /* ControlLabel */], sm: 2, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                  },
                  __self: _this
                },
                'Password'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["c" /* Col */],
                { sm: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                  },
                  __self: _this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["v" /* FormControl */], { type: 'password', placeholder: 'Password', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                  },
                  __self: _this
                })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["t" /* FormGroup */],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 50
                },
                __self: _this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["c" /* Col */],
                { smOffset: 2, sm: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                  },
                  __self: _this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["w" /* Checkbox */],
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 52
                    },
                    __self: _this
                  },
                  'Remember me'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["t" /* FormGroup */],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 56
                },
                __self: _this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["c" /* Col */],
                { smOffset: 2, sm: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                  },
                  __self: _this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'btn-toolbar pull-right', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 58
                    },
                    __self: _this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["f" /* Button */],
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 59
                      },
                      __self: _this
                    },
                    'Cancel'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["f" /* Button */],
                    { bsStyle: 'danger', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 62
                      },
                      __self: _this
                    },
                    'Save'
                  )
                )
              )
            )
          )
        )
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_4__Profile_scss___default.a)(Profile));

/***/ })

});
//# sourceMappingURL=3.chunk.js.map