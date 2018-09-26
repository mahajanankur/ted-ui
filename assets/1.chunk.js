webpackJsonp([1],{

/***/ 1121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__PostList_scss__ = __webpack_require__(1168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__PostList_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__PostList_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_withMeta__ = __webpack_require__(956);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Widget__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_posts__ = __webpack_require__(160);
var _jsxFileName = 'C:\\MyProject\\React\\react-dashboard-master\\src\\pages\\posts\\list\\PostList.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var PostList = function (_React$Component) {
  _inherits(PostList, _React$Component);

  function PostList() {
    _classCallCheck(this, PostList);

    return _possibleConstructorReturn(this, (PostList.__proto__ || Object.getPrototypeOf(PostList)).apply(this, arguments));
  }

  _createClass(PostList, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__actions_posts__["h" /* fetchPosts */])());
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_4__PostList_scss___default.a.root, __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ol',
          { className: 'breadcrumb', __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 25
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: 'text-muted', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 25
                },
                __self: this
              },
              'YOU ARE HERE'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'active', __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              },
              __self: this
            },
            'Gyms'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            },
            __self: this
          },
          'Gyms'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6__components_Widget__["a" /* default */],
          { title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 30
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'pull-right mt-n-xs', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["a" /* Link */],
                  { to: '/app/posts/new', className: 'btn btn-sm btn-inverse', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 32
                    },
                    __self: this
                  },
                  'Create new'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h5',
                { className: 'mt-0 mb-0', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                  },
                  __self: this
                },
                'Gyms ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  { className: 'fw-semi-bold', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 34
                    },
                    __self: this
                  },
                  'List'
                )
              )
            ), __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'table',
            { className: 'table table-striped', __source: {
                fileName: _jsxFileName,
                lineNumber: 37
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'thead',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 38
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'tr',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'th',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 40
                    },
                    __self: this
                  },
                  'Name'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'th',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 41
                    },
                    __self: this
                  },
                  'Address'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'th',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 42
                    },
                    __self: this
                  },
                  'Description'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'th',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 43
                    },
                    __self: this
                  },
                  'Contact Details'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'tbody',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 46
                },
                __self: this
              },
              this.props.posts && this.props.posts.map(function (post, index) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'tr',
                  { key: post.id, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 48
                    },
                    __self: _this2
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'td',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 49
                      },
                      __self: _this2
                    },
                    post.name
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'td',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 50
                      },
                      __self: _this2
                    },
                    post.address
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'td',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 51
                      },
                      __self: _this2
                    },
                    post.description
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'td',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 52
                      },
                      __self: _this2
                    },
                    post.contactDetail.mobile
                  )
                );
              }),
              this.props.posts && !this.props.posts.length && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'tr',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { colSpan: '100', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 57
                    },
                    __self: this
                  },
                  'No posts yet'
                )
              ),
              this.props.isFetching && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'tr',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { colSpan: '100', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 62
                    },
                    __self: this
                  },
                  'Loading...'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return PostList;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

PostList.meta = {
  title: 'Posts list',
  description: 'About description'
};


function mapStateToProps(state) {
  return {
    isFetching: state.posts.isFetching,
    posts: state.posts.posts
  };
}

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux__["b" /* connect */])(mapStateToProps)(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_4__PostList_scss___default.a)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__core_withMeta__["a" /* default */])(PostList))));

/***/ }),

/***/ 1122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_withMeta__ = __webpack_require__(956);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Widget__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__PostNew_scss__ = __webpack_require__(1169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__PostNew_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__PostNew_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_posts__ = __webpack_require__(160);
var _jsxFileName = 'C:\\MyProject\\React\\react-dashboard-master\\src\\pages\\posts\\new\\PostNew.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var PostNew = function (_React$Component) {
  _inherits(PostNew, _React$Component);

  function PostNew(props) {
    _classCallCheck(this, PostNew);

    var _this = _possibleConstructorReturn(this, (PostNew.__proto__ || Object.getPrototypeOf(PostNew)).call(this, props));

    _this.state = {
      title: '',
      content: ''
    };
    return _this;
  }

  _createClass(PostNew, [{
    key: 'changeTitle',
    value: function changeTitle(event) {
      this.setState({ title: event.target.value });
    }
  }, {
    key: 'changeContent',
    value: function changeContent(event) {
      this.setState({ content: event.target.value });
    }
  }, {
    key: 'doCreatePost',
    value: function doCreatePost(e) {
      var _this2 = this;

      this.props.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__actions_posts__["i" /* createPost */])({ title: this.state.title, content: this.state.content })).then(function () {
        return _this2.setState({ title: '', content: '' });
      });
      e.preventDefault();
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_6__PostNew_scss___default.a.root, __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ol',
          { className: 'breadcrumb', __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 45
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: 'text-muted', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 45
                },
                __self: this
              },
              'YOU ARE HERE'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'active', __source: {
                fileName: _jsxFileName,
                lineNumber: 46
              },
              __self: this
            },
            'New Post'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            },
            __self: this
          },
          'Create new post'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["b" /* Row */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["c" /* Col */],
            { sm: 6, __source: {
                fileName: _jsxFileName,
                lineNumber: 50
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_5__components_Widget__["a" /* default */],
              {
                title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 53
                    },
                    __self: this
                  },
                  'Add Post ',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'fw-semi-bold', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 54
                      },
                      __self: this
                    },
                    'Form'
                  )
                ),
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 51
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["s" /* Form */],
                { horizontal: true, onSubmit: this.doCreatePost.bind(this), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                  },
                  __self: this
                },
                this.props.message && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["d" /* Alert */],
                  { className: 'alert-sm', bsStyle: 'info', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 61
                    },
                    __self: this
                  },
                  this.props.message
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["t" /* FormGroup */],
                  { controlId: 'formHorizontalEmail', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 66
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["c" /* Col */],
                    { componentClass: __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["u" /* ControlLabel */], sm: 2, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 67
                      },
                      __self: this
                    },
                    'Title'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["c" /* Col */],
                    { sm: 10, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 70
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["v" /* FormControl */], { type: 'text', placeholder: 'Title', value: this.state.title,
                      required: true,
                      onChange: this.changeTitle.bind(this), __source: {
                        fileName: _jsxFileName,
                        lineNumber: 71
                      },
                      __self: this
                    })
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["t" /* FormGroup */],
                  { controlId: 'formHorizontalEmail', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 76
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["c" /* Col */],
                    { componentClass: __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["u" /* ControlLabel */], sm: 2, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 77
                      },
                      __self: this
                    },
                    'Content'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["c" /* Col */],
                    { sm: 10, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 80
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', { className: 'form-control', placeholder: 'Post Content',
                      value: this.state.content,
                      required: true,
                      onChange: this.changeContent.bind(this), __source: {
                        fileName: _jsxFileName,
                        lineNumber: 81
                      },
                      __self: this
                    })
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["t" /* FormGroup */],
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 90
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["c" /* Col */],
                    { smOffset: 2, sm: 10, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 91
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'btn-toolbar pull-right', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 92
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["f" /* Button */],
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 93
                          },
                          __self: this
                        },
                        'Cancel'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["f" /* Button */],
                        { bsStyle: 'danger', type: 'submit', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 96
                          },
                          __self: this
                        },
                        this.props.isFetching ? 'Creating...' : 'Create'
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return PostNew;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

PostNew.meta = {
  title: 'Create new post',
  description: 'About description'
};


function mapStateToProps(state) {
  return {
    isFetching: state.posts.isFetching,
    message: state.posts.message
  };
}

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux__["b" /* connect */])(mapStateToProps)(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_6__PostNew_scss___default.a)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__core_withMeta__["a" /* default */])(PostNew))));

/***/ }),

/***/ 1130:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(39)(true);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/**\n * Customized version of bootstrap using variables from _variables.scss.\n * This file is loaded via separate loader thus allowing to use original bootstrap classes (e.g. .btn-default) through out the app.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/*\n * Typography\n * ======================================================================== */\n/*\n * Layout\n * ======================================================================== */\n/*\n * Media queries breakpoints\n * ======================================================================== */\n/* Extra small screen / phone */\n/* Small screen / tablet */\n/* Medium screen / desktop */\n/* Large screen / wide desktop */\n/**\n * Custom application mixins available through out the app\n */\n", "", {"version":3,"sources":["C:/MyProject/React/react-dashboard-master/src/pages/posts/list/PostList.scss"],"names":[],"mappings":"AAAA,iBAAiB;AACjB;;;GAGG;AACH;;;;;;;GAOG;AACH;;8EAE8E;AAC9E;;8EAE8E;AAC9E;;8EAE8E;AAC9E,gCAAgC;AAChC,2BAA2B;AAC3B,6BAA6B;AAC7B,iCAAiC;AACjC;;GAEG","file":"PostList.scss","sourcesContent":["@charset \"UTF-8\";\n/**\n * Customized version of bootstrap using variables from _variables.scss.\n * This file is loaded via separate loader thus allowing to use original bootstrap classes (e.g. .btn-default) through out the app.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/*\n * Typography\n * ======================================================================== */\n/*\n * Layout\n * ======================================================================== */\n/*\n * Media queries breakpoints\n * ======================================================================== */\n/* Extra small screen / phone */\n/* Small screen / tablet */\n/* Medium screen / desktop */\n/* Large screen / wide desktop */\n/**\n * Custom application mixins available through out the app\n */\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1131:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(39)(true);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/**\n * Customized version of bootstrap using variables from _variables.scss.\n * This file is loaded via separate loader thus allowing to use original bootstrap classes (e.g. .btn-default) through out the app.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/*\n * Typography\n * ======================================================================== */\n/*\n * Layout\n * ======================================================================== */\n/*\n * Media queries breakpoints\n * ======================================================================== */\n/* Extra small screen / phone */\n/* Small screen / tablet */\n/* Medium screen / desktop */\n/* Large screen / wide desktop */\n/**\n * Custom application mixins available through out the app\n */\n", "", {"version":3,"sources":["C:/MyProject/React/react-dashboard-master/src/pages/posts/new/PostNew.scss"],"names":[],"mappings":"AAAA,iBAAiB;AACjB;;;GAGG;AACH;;;;;;;GAOG;AACH;;8EAE8E;AAC9E;;8EAE8E;AAC9E;;8EAE8E;AAC9E,gCAAgC;AAChC,2BAA2B;AAC3B,6BAA6B;AAC7B,iCAAiC;AACjC;;GAEG","file":"PostNew.scss","sourcesContent":["@charset \"UTF-8\";\n/**\n * Customized version of bootstrap using variables from _variables.scss.\n * This file is loaded via separate loader thus allowing to use original bootstrap classes (e.g. .btn-default) through out the app.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/*\n * Typography\n * ======================================================================== */\n/*\n * Layout\n * ======================================================================== */\n/*\n * Media queries breakpoints\n * ======================================================================== */\n/* Extra small screen / phone */\n/* Small screen / tablet */\n/* Medium screen / desktop */\n/* Large screen / wide desktop */\n/**\n * Custom application mixins available through out the app\n */\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1168:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(1130);
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
      module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=!../../../../node_modules/sass-loader/lib/loader.js!./PostList.scss", function() {
        content = require("!!../../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=!../../../../node_modules/sass-loader/lib/loader.js!./PostList.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 1169:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(1131);
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
      module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=!../../../../node_modules/sass-loader/lib/loader.js!./PostNew.scss", function() {
        content = require("!!../../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=!../../../../node_modules/sass-loader/lib/loader.js!./PostNew.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 940:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_PostList__ = __webpack_require__(1121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__new_PostNew__ = __webpack_require__(1122);
var _jsxFileName = 'C:\\MyProject\\React\\react-dashboard-master\\src\\pages\\posts\\Posts.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Posts = function (_React$Component) {
  _inherits(Posts, _React$Component);

  function Posts() {
    _classCallCheck(this, Posts);

    return _possibleConstructorReturn(this, (Posts.__proto__ || Object.getPrototypeOf(Posts)).apply(this, arguments));
  }

  _createClass(Posts, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_router__["d" /* Switch */],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["b" /* Route */], { path: '/app/posts/new', exact: true, component: __WEBPACK_IMPORTED_MODULE_3__new_PostNew__["a" /* default */], __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["b" /* Route */], { path: '/app/posts', exact: true, component: __WEBPACK_IMPORTED_MODULE_2__list_PostList__["a" /* default */], __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        })
      );
    }
  }]);

  return Posts;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_router__["e" /* withRouter */])(Posts));

/***/ }),

/***/ 956:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_hoist_non_react_statics__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_hoist_non_react_statics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_hoist_non_react_statics__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DOMUtils__ = __webpack_require__(959);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(960);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__config__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'C:\\MyProject\\React\\react-dashboard-master\\src\\core\\withMeta.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






function withMeta(ComposedComponent) {
  var WithMeta = function (_Component) {
    _inherits(WithMeta, _Component);

    function WithMeta() {
      _classCallCheck(this, WithMeta);

      return _possibleConstructorReturn(this, (WithMeta.__proto__ || Object.getPrototypeOf(WithMeta)).apply(this, arguments));
    }

    _createClass(WithMeta, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        if (ComposedComponent.meta) {
          Object.keys(ComposedComponent.meta).forEach(function (metaKey) {
            if (metaKey === 'title') {
              document.title = ComposedComponent.meta[metaKey] + ' - ' + __WEBPACK_IMPORTED_MODULE_3__config__["defaultMeta"][metaKey];
              return;
            }
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__DOMUtils__["a" /* updateMeta */])(metaKey, ComposedComponent.meta[metaKey]);
          });
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        Object.keys(__WEBPACK_IMPORTED_MODULE_3__config__["defaultMeta"]).forEach(function (metaKey) {
          if (metaKey === 'title') {
            document.title = __WEBPACK_IMPORTED_MODULE_3__config__["defaultMeta"][metaKey];
            return;
          }
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__DOMUtils__["a" /* updateMeta */])(metaKey, __WEBPACK_IMPORTED_MODULE_3__config__["defaultMeta"][metaKey]);
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ComposedComponent, _extends({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }));
      }
    }]);

    return WithMeta;
  }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

  WithMeta.ComposedComponent = ComposedComponent;
  return __WEBPACK_IMPORTED_MODULE_1_hoist_non_react_statics___default()(WithMeta, ComposedComponent);
}

/* harmony default export */ __webpack_exports__["a"] = (withMeta);

/***/ }),

/***/ 959:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export updateTag */
/* harmony export (immutable) */ __webpack_exports__["a"] = updateMeta;
/* unused harmony export updateCustomMeta */
/* unused harmony export updateLink */
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

function updateTag(tagName, keyName, keyValue, attrName, attrValue) {
  var node = document.head.querySelector(tagName + '[' + keyName + '="' + keyValue + '"]');
  if (node && node.getAttribute(attrName) === attrValue) return;

  // Remove and create a new tag in order to make it work with bookmarks in Safari
  if (node) {
    node.parentNode.removeChild(node);
  }
  if (typeof attrValue === 'string') {
    var nextNode = document.createElement(tagName);
    nextNode.setAttribute(keyName, keyValue);
    nextNode.setAttribute(attrName, attrValue);
    document.head.appendChild(nextNode);
  }
}

function updateMeta(name, content) {
  updateTag('meta', 'name', name, 'content', content);
}

function updateCustomMeta(property, content) {
  updateTag('meta', 'property', property, 'content', content);
}

function updateLink(rel, href) {
  updateTag('link', 'rel', rel, 'href', href);
}

/***/ }),

/***/ 960:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable max-len */

module.exports = {
  // Node.js app
  port: process.env.PORT || 3000,

  // API Gateway
  api: {
    // API URL to be used in the client-side code
    clientUrl: process.env.API_CLIENT_URL || '',
    // API URL to be used in the server-side code
    serverUrl: process.env.API_SERVER_URL || 'http://localhost:' + (process.env.PORT || 3000)
  },

  // Database
  databaseUrl: process.env.DATABASE_URL || 'sqlite:database.sqlite',

  // Web analytics
  analytics: {
    // https://analytics.google.com/
    googleTrackingId: process.env.GOOGLE_TRACKING_ID },

  defaultMeta: {
    title: 'React Dashboard',
    description: 'React Dashboard Starter project based on react-router 4, redux, graphql, bootstrap'
  },

  // Authentication
  auth: {
    jwt: { secret: process.env.JWT_SECRET || 'React Dashboard' },

    // https://developers.facebook.com/
    facebook: {
      id: process.env.FACEBOOK_APP_ID || '186244551745631',
      secret: process.env.FACEBOOK_APP_SECRET || 'a970ae3240ab4b9b8aae0f9f0661c6fc'
    },

    // https://cloud.google.com/console/project
    google: {
      id: process.env.GOOGLE_CLIENT_ID || '251410730550-ahcg0ou5mgfhl8hlui1urru7jn5s12km.apps.googleusercontent.com',
      secret: process.env.GOOGLE_CLIENT_SECRET || 'Y8yR9yZAhm9jQ8FKAL8QIEcd'
    },

    // https://apps.twitter.com/
    twitter: {
      key: process.env.TWITTER_CONSUMER_KEY || 'Ie20AZvLJI2lQD5Dsgxgjauns',
      secret: process.env.TWITTER_CONSUMER_SECRET || 'KTZ6cxoKnEakQCeSpZlaUCJWGAlTEBJj0y2EMkUBujA7zWSvaQ'
    }
  }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(107)))

/***/ })

});
//# sourceMappingURL=1.chunk.js.map