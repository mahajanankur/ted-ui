webpackJsonp([5],{

/***/ 943:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_facebook_login__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_facebook_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_facebook_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Widget__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Footer__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__actions_user__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Register_scss__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Register_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__Register_scss__);
var _jsxFileName = 'C:\\MyProject\\React\\react-dashboard-master\\src\\pages\\register\\Register.js';

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










// import s from './Login.scss'; // eslint-disable-line



var Register = function (_React$Component) {
  _inherits(Register, _React$Component);

  function Register(props) {
    _classCallCheck(this, Register);

    var _this = _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).call(this, props));

    _this.state = {
      login: '',
      mobile: '',
      password: '',
      type: ''
    };
    return _this;
  }

  // static propTypes = {
  //   title: PropTypes.string.isRequired,
  // };

  _createClass(Register, [{
    key: 'changeLogin',
    value: function changeLogin(event) {
      this.setState({ login: event.target.value });
    }
  }, {
    key: 'changeMobile',
    value: function changeMobile(event) {
      this.setState({ mobile: event.target.value });
    }
  }, {
    key: 'changePassword',
    value: function changePassword(event) {
      this.setState({ password: event.target.value });
    }
  }, {
    key: 'changeType',
    value: function changeType(event) {
      this.setState({ type: event.target.value });
    }
  }, {
    key: 'doRegister',
    value: function doRegister(e) {
      this.props.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__actions_user__["h" /* registerUser */])({ email: this.state.login, password: this.state.password, mobile: this.state.mobile }, this.state.type));
      e.preventDefault();
    }
  }, {
    key: 'responseFacebook',
    value: function responseFacebook(response) {
      if (response.status != "not_authorized" && response.status != "unknown") {
        if (response) {
          // console.log("facebook", response);
          this.props.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__actions_user__["i" /* loginUserWithFacebook */])(response, this.state.type));
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var userType = this.props.userType;

      var _ref = this.props.location.state || { from: { pathname: '/login' } },
          from = _ref.from;

      if (this.props.isRegistered) {
        // cant access login page while logged in
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_router__["c" /* Redirect */], { to: from, __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        });
      }

      if (this.props.isAuthenticated && userType === 'ROLE_GYM') {
        // cant access login page while logged in
        var _from2 = { from: { pathname: '/app/gym' } },
            _from = _from2.from;

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_router__["c" /* Redirect */], { to: _from, __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        });
      }

      if (this.props.isAuthenticated && userType === 'ROLE_CUSTOMER') {
        // cant access login page while logged in
        var _from4 = { from: { pathname: '/app/customer' } },
            _from3 = _from4.from;

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_router__["c" /* Redirect */], { to: _from3, __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        });
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_9__Register_scss___default.a.root, __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["a" /* Grid */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 97
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["b" /* Row */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 98
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["c" /* Col */],
              { xs: 10, xsOffset: 1, sm: 6, smOffset: 3, lg: 4, lgOffset: 4, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 99
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'p',
                { className: 'text-center', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 100
                  },
                  __self: this
                },
                'React Dashboard'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_6__components_Widget__["a" /* default */],
                { className: __WEBPACK_IMPORTED_MODULE_9__Register_scss___default.a.widget, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 101
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h4',
                  { className: 'mt-0', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 102
                    },
                    __self: this
                  },
                  'Sign Up'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'form',
                  { className: 'mt', onSubmit: this.doRegister.bind(this), __source: {
                      fileName: _jsxFileName,
                      lineNumber: 103
                    },
                    __self: this
                  },
                  this.props.errorMessage && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["d" /* Alert */],
                    { className: 'alert-sm', bsStyle: 'danger', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 106
                      },
                      __self: this
                    },
                    this.props.errorMessage
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'form-group', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 111
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'form-control no-border', value: this.state.login, onChange: this.changeLogin.bind(this), type: 'text', required: true, name: 'username', placeholder: 'Email', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 112
                      },
                      __self: this
                    })
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'form-group', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 114
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'form-control no-border', value: this.state.mobile, onChange: this.changeMobile.bind(this), type: 'text', required: true, name: 'mobile', placeholder: 'Mobile No', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 115
                      },
                      __self: this
                    })
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'form-group', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 117
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'form-control no-border', value: this.state.password, onChange: this.changePassword.bind(this), type: 'password', required: true, name: 'password', placeholder: 'Password', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 118
                      },
                      __self: this
                    })
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'form-group', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 120
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'radio', name: 'type', value: 'gym', onChange: this.changeType.bind(this), __source: {
                        fileName: _jsxFileName,
                        lineNumber: 121
                      },
                      __self: this
                    }),
                    ' Gym',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'radio', name: 'type', value: 'customer', onChange: this.changeType.bind(this), __source: {
                        fileName: _jsxFileName,
                        lineNumber: 122
                      },
                      __self: this
                    }),
                    ' Customer'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'clearfix', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 124
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'btn-toolbar pull-right', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 125
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'button',
                        { type: 'submit', className: 'btn btn-success btn-sm', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 126
                          },
                          __self: this
                        },
                        this.props.isFetching ? 'Loading...' : 'Register'
                      )
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 130
                  },
                  __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_facebook_login___default.a, {
                  appId: '345501322630290',
                  autoLoad: false,
                  icon: 'fa-facebook',
                  fields: 'name,email,picture',
                  scope: 'public_profile,user_friends',
                  textButton: 'Or Sign up with Facebook',
                  disableMobileRedirect: true,
                  callback: this.responseFacebook.bind(this),
                  size: "small",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 131
                  },
                  __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'clearfix', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 143
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'a',
                    { className: 'mt-sm pull-right fs-sm', href: '/login', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 144
                      },
                      __self: this
                    },
                    'Already have a account Sign in?'
                  )
                )
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_Footer__["a" /* default */], { className: 'text-center', __source: {
            fileName: _jsxFileName,
            lineNumber: 150
          },
          __self: this
        })
      );
    }
  }]);

  return Register;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

function mapStateToProps(state) {
  return {
    isFetching: state.auth.isFetching,
    isRegistered: state.auth.isRegistered,
    isAuthenticated: state.auth.isAuthenticated,
    userType: state.auth.userType,
    errorMessage: state.auth.errorMessage
  };
}

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react_router__["e" /* withRouter */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux__["b" /* connect */])(mapStateToProps)(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_9__Register_scss___default.a)(Register))));

/***/ })

});
//# sourceMappingURL=5.chunk.js.map