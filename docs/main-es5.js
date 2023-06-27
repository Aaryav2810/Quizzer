function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p-card>\r\n  <h3>QuizME</h3>\r\n  <router-outlet></router-outlet>\r\n</p-card>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/quiz/quiz.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/quiz/quiz.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppQuizQuizComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <p-paginator [rows]=\"1\" [totalRecords]=\"quizQueries.length\"> </p-paginator> -->\r\n<div class=\"top-section\">\r\n  <p-button label=\"Submit\" (click)=\"submitQuiz()\"></p-button>\r\n</div>\r\n<div class=\"question-section\">\r\n  <p-dialog\r\n    header=\"QuizME\"\r\n    [modal]=\"true\"\r\n    [(visible)]=\"submitConfirm\"\r\n    [style]=\"{ width: '50vw' }\"\r\n    [baseZIndex]=\"10000\"\r\n  >\r\n    {{ confirmationContent }}\r\n    <p-footer>\r\n      <button\r\n        type=\"button\"\r\n        pButton\r\n        icon=\"pi pi-check\"\r\n        (click)=\"onYes()\"\r\n        label=\"Yes\"\r\n      ></button>\r\n      <button\r\n        type=\"button\"\r\n        pButton\r\n        icon=\"pi pi-times\"\r\n        (click)=\"submitConfirm = false\"\r\n        label=\"No\"\r\n        class=\"ui-button-secondary\"\r\n      ></button>\r\n    </p-footer>\r\n  </p-dialog>\r\n\r\n  <p-fieldset legend=\"Question-{{ questionNo + 1 }}\">\r\n    <div class=\"p-grid\" style=\"margin-bottom: 10px;\">\r\n      <h3>{{ quizQueries[questionNo].question | sanitizeHtml }}</h3>\r\n      <div class=\"p-col-12\" *ngFor=\"let opt of quizQueries[questionNo].options\">\r\n        <p-radioButton\r\n          name=\"answers\"\r\n          [value]=\"opt | sanitizeHtml\"\r\n          [label]=\"opt | sanitizeHtml\"\r\n          [(ngModel)]=\"quizQueries[questionNo].selectedAnswer\"\r\n          inputId=\"opt1\"\r\n        ></p-radioButton>\r\n      </div>\r\n    </div>\r\n  </p-fieldset>\r\n</div>\r\n\r\n<div class=\"nav-section\">\r\n  <p-button\r\n    label=\"Prev\"\r\n    icon=\"pi pi-chevron-left\"\r\n    iconPos=\"left\"\r\n    (click)=\"prevQuestion()\"\r\n  ></p-button>\r\n\r\n  <p-button\r\n    label=\"Next\"\r\n    icon=\"pi pi-chevron-right\"\r\n    iconPos=\"right\"\r\n    (click)=\"nextQuestion()\"\r\n  ></p-button>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/result/result.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/result/result.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppResultResultComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p-virtualScroller\r\n  [value]=\"quizAnsweredQueries\"\r\n  scrollHeight=\"450px\"\r\n  [rows]=\"10\"\r\n>\r\n  <p-header>\r\n    <h2>Score - {{ finalScore }}/{{ quizAnsweredQueries.length }}</h2>\r\n  </p-header>\r\n  <ng-template let-quiz pTemplate=\"item\" let-i=\"index\">\r\n    <div class=\"quiz\">\r\n      <b>{{ quiz.questionID }}.) {{ quiz.question | sanitizeHtml }}</b>\r\n      <div>\r\n        <b style=\"color: #107d11;\">Correct Answer : </b>\r\n        <span>{{ quiz.answer }}</span>\r\n      </div>\r\n      <div>\r\n        <b\r\n          [ngStyle]=\"{\r\n            color: quiz.selectedAnswer === quiz.answer ? '#107d11' : '#c01120'\r\n          }\"\r\n          >Your Answer :\r\n        </b>\r\n        <span>{{ quiz.selectedAnswer || \"NOT ANSWERED\" }}</span>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n</p-virtualScroller>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWelcomeWelcomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n<form\r\n  [formGroup]=\"quizForm\"\r\n  (ngSubmit)=\"onSubmit(quizForm.value)\"\r\n\r\n>\r\n  <div class=\"ui-fluid p-formgrid p-grid p-dir-col\">\r\n    <div class=\"p-field p-col-12\">\r\n      <label for=\"Username\">Username</label>\r\n      <input\r\n        id=\"Username\"\r\n        type=\"text\"\r\n        name=\"Username\"\r\n        autocomplete=\"off\"\r\n        formControlName=\"userName\"\r\n        pInputText\r\n      />\r\n    </div>\r\n    <div class=\"p-field p-col-12\">\r\n      <label for=\"state\">Category</label>\r\n      <p-dropdown\r\n        inputId=\"state\"\r\n        [options]=\"quizCategory\"\r\n        placeholder=\"Select\"\r\n        optionLabel=\"name\"\r\n        [showClear]=\"true\"\r\n        formControlName=\"category\"\r\n      ></p-dropdown>\r\n    </div>\r\n    <div class=\"p-field p-col-12\">\r\n      <label for=\"difficulty\">Difficulty</label>\r\n      <p-selectButton\r\n        [options]=\"quizDifficilty\"\r\n        formControlName=\"difficulty\"\r\n      ></p-selectButton>\r\n    </div>\r\n    <div class=\"p-offset-4\">\r\n      <p-button\r\n        label=\"Start Quiz\"\r\n        type=\"submit\"\r\n        [disabled]=\"!quizForm.valid\"\r\n        styleClass=\"ui-button-info\"\r\n      ></p-button>\r\n    </div>\r\n  </div>\r\n</form>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./quiz/quiz.component */
    "./src/app/quiz/quiz.component.ts");
    /* harmony import */


    var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./welcome/welcome.component */
    "./src/app/welcome/welcome.component.ts");
    /* harmony import */


    var _route_resolver_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./route-resolver.service */
    "./src/app/route-resolver.service.ts");
    /* harmony import */


    var _result_result_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./result/result.component */
    "./src/app/result/result.component.ts");

    var routes = [{
      path: "",
      component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"]
    }, {
      path: "question",
      component: _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_3__["QuizComponent"],
      resolve: {
        quizQueries: _route_resolver_service__WEBPACK_IMPORTED_MODULE_5__["RouteResolverService"]
      }
    }, {
      path: "results",
      component: _result_result_component__WEBPACK_IMPORTED_MODULE_6__["ResultComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* .quiz-card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: absolute;\r\n  box-shadow: 10px 19px 38px 10px rgba(0, 0, 0, 0.3);\r\n  border-radius: 6px;\r\n  width: 75%;\r\n  margin: auto;\r\n  height: 95vh;\r\n} */\r\n\r\n:host >>> .ui-card {\r\n  background: #f1f3f6;\r\n  box-shadow: 10px 19px 38px 10px rgba(0, 0, 0, 0.3);\r\n  border-radius: 10px;\r\n  height: 95vh;\r\n  min-width: 75%;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  margin-right: -50%;\r\n  transform: translate(-50%, -50%);\r\n  margin: auto;\r\n}\r\n\r\nh3 {\r\n  margin-top: 20px;\r\n  color: #2a9d8f;\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0dBV0c7O0FBRUg7RUFDRSxtQkFBbUI7RUFDbkIsa0RBQWtEO0VBQ2xELG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5xdWl6LWNhcmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3gtc2hhZG93OiAxMHB4IDE5cHggMzhweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgaGVpZ2h0OiA5NXZoO1xyXG59ICovXHJcblxyXG46aG9zdCA+Pj4gLnVpLWNhcmQge1xyXG4gIGJhY2tncm91bmQ6ICNmMWYzZjY7XHJcbiAgYm94LXNoYWRvdzogMTBweCAxOXB4IDM4cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBoZWlnaHQ6IDk1dmg7XHJcbiAgbWluLXdpZHRoOiA3NSU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBtYXJnaW4tcmlnaHQ6IC01MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBjb2xvcjogIzJhOWQ4ZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'quizME';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./welcome/welcome.component */
    "./src/app/welcome/welcome.component.ts");
    /* harmony import */


    var _primeNG_primeng_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./primeNG/primeng.module */
    "./src/app/primeNG/primeng.module.ts");
    /* harmony import */


    var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./quiz/quiz.component */
    "./src/app/quiz/quiz.component.ts");
    /* harmony import */


    var _sanitize_html_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./sanitize-html.pipe */
    "./src/app/sanitize-html.pipe.ts");
    /* harmony import */


    var _result_result_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./result/result.component */
    "./src/app/result/result.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_6__["WelcomeComponent"], _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_8__["QuizComponent"], _sanitize_html_pipe__WEBPACK_IMPORTED_MODULE_9__["SanitizeHtmlPipe"], _result_result_component__WEBPACK_IMPORTED_MODULE_10__["ResultComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _primeNG_primeng_module__WEBPACK_IMPORTED_MODULE_7__["PrimengModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/primeNG/primeng.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/primeNG/primeng.module.ts ***!
    \*******************************************/

  /*! exports provided: primengComponents, PrimengModule */

  /***/
  function srcAppPrimeNGPrimengModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "primengComponents", function () {
      return primengComponents;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrimengModule", function () {
      return PrimengModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! primeng/inputtext */
    "./node_modules/primeng/fesm2015/primeng-inputtext.js");
    /* harmony import */


    var primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! primeng/dropdown */
    "./node_modules/primeng/fesm2015/primeng-dropdown.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/selectbutton */
    "./node_modules/primeng/fesm2015/primeng-selectbutton.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! primeng/button */
    "./node_modules/primeng/fesm2015/primeng-button.js");
    /* harmony import */


    var primeng_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! primeng/paginator */
    "./node_modules/primeng/fesm2015/primeng-paginator.js");
    /* harmony import */


    var primeng_fieldset__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! primeng/fieldset */
    "./node_modules/primeng/fesm2015/primeng-fieldset.js");
    /* harmony import */


    var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! primeng/radiobutton */
    "./node_modules/primeng/fesm2015/primeng-radiobutton.js");
    /* harmony import */


    var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! primeng/confirmdialog */
    "./node_modules/primeng/fesm2015/primeng-confirmdialog.js");
    /* harmony import */


    var primeng_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! primeng/dialog */
    "./node_modules/primeng/fesm2015/primeng-dialog.js");
    /* harmony import */


    var _result_result_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../result/result.component */
    "./src/app/result/result.component.ts");
    /* harmony import */


    var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! primeng/dynamicdialog */
    "./node_modules/primeng/fesm2015/primeng-dynamicdialog.js");
    /* harmony import */


    var primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! primeng/virtualscroller */
    "./node_modules/primeng/fesm2015/primeng-virtualscroller.js");
    /* harmony import */


    var primeng_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! primeng/card */
    "./node_modules/primeng/fesm2015/primeng-card.js");

    var primengComponents = [primeng_inputtext__WEBPACK_IMPORTED_MODULE_3__["InputTextModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__["DropdownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], primeng_selectbutton__WEBPACK_IMPORTED_MODULE_7__["SelectButtonModule"], primeng_button__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"], primeng_paginator__WEBPACK_IMPORTED_MODULE_9__["PaginatorModule"], primeng_fieldset__WEBPACK_IMPORTED_MODULE_10__["FieldsetModule"], primeng_radiobutton__WEBPACK_IMPORTED_MODULE_11__["RadioButtonModule"], primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_12__["ConfirmDialogModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_13__["DialogModule"], primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_15__["DynamicDialogModule"], primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_16__["VirtualScrollerModule"], primeng_card__WEBPACK_IMPORTED_MODULE_17__["CardModule"]];

    var PrimengModule = function PrimengModule() {
      _classCallCheck(this, PrimengModule);
    };

    PrimengModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [primengComponents],
      entryComponents: [_result_result_component__WEBPACK_IMPORTED_MODULE_14__["ResultComponent"]]
    })], PrimengModule);
    /***/
  },

  /***/
  "./src/app/quiz.service.ts":
  /*!*********************************!*\
    !*** ./src/app/quiz.service.ts ***!
    \*********************************/

  /*! exports provided: QuizService */

  /***/
  function srcAppQuizServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuizService", function () {
      return QuizService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var QuizService = /*#__PURE__*/function () {
      function QuizService(http) {
        _classCallCheck(this, QuizService);

        this.http = http;
        this._url = "https://opentdb.com/api.php";
      }

      _createClass(QuizService, [{
        key: "shuffleArray",
        value: function shuffleArray(array) {
          for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var _ref = [array[j], array[i]];
            array[i] = _ref[0];
            array[j] = _ref[1];
          }
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error("An error occurred:", error.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code ".concat(error.status, ", ") + "body was: ".concat(error.error));
          } // return an observable with a user-facing error message


          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])("Something bad happened; please try again later.");
        }
        /**
         *
         * @param optionsSelected Object of user selected values to be passed as query params to api
         */

      }, {
        key: "getQuizQuestions",
        value: function getQuizQuestions(optionsSelected) {
          //constructing query params object to pass to HttpParams
          var queryParams = {
            category: optionsSelected.category.code,
            difficulty: optionsSelected.difficulty,
            amount: function amountCalc() {
              if (optionsSelected.difficulty === "easy") return "10";else if (optionsSelected.difficulty === "medium") return "20";else return "30";
            }(),
            encode: "base64"
          };
          var httpParam = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({
            fromObject: queryParams
          });
          return this.http.get(this._url, {
            params: httpParam
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (apiData) {
            return apiData.results.map(function (data, index) {
              return {
                questionID: index + 1,
                question: data.question,
                options: function options() {
                  data.incorrect_answers.push(data.correct_answer);
                  var array = data.incorrect_answers;

                  for (var i = array.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var _ref2 = [array[j], array[i]];
                    array[i] = _ref2[0];
                    array[j] = _ref2[1];
                  }

                  return data.incorrect_answers;
                }(),
                answer: atob(data.correct_answer)
              };
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
      }]);

      return QuizService;
    }();

    QuizService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    QuizService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], QuizService);
    /***/
  },

  /***/
  "./src/app/quiz/quiz.component.css":
  /*!*****************************************!*\
    !*** ./src/app/quiz/quiz.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppQuizQuizComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host >>> .ui-button {\r\n  border-radius: 0;\r\n}\r\n\r\n.top-section {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.question-section {\r\n  height: 400px;\r\n  position: relative;\r\n}\r\n\r\n:host >>> .ui-fieldset {\r\n  background-color: #f1f3f6;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  margin-right: -50%;\r\n  transform: translate(-50%, -50%);\r\n  width: 100%;\r\n  height: 300px;\r\n}\r\n\r\n:host >>> .ui-fieldset-legend {\r\n  text-transform: uppercase;\r\n  font-weight: 700;\r\n}\r\n\r\n:host >>> .ui-radiobutton .ui-radiobutton-box {\r\n  background-color: #f1f3f6;\r\n}\r\n\r\n.nav-section {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex: 1;\r\n}\r\n\r\n.nav-section > p-button\r\n{\r\n  margin: 0 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVpei9xdWl6LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsZ0NBQWdDO0VBQ2hDLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixPQUFPO0FBQ1Q7O0FBRUE7O0VBRUUsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvcXVpei9xdWl6LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA+Pj4gLnVpLWJ1dHRvbiB7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG5cclxuLnRvcC1zZWN0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5xdWVzdGlvbi1zZWN0aW9uIHtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuOmhvc3QgPj4+IC51aS1maWVsZHNldCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjNmNjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIG1hcmdpbi1yaWdodDogLTUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG59XHJcblxyXG46aG9zdCA+Pj4gLnVpLWZpZWxkc2V0LWxlZ2VuZCB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG46aG9zdCA+Pj4gLnVpLXJhZGlvYnV0dG9uIC51aS1yYWRpb2J1dHRvbi1ib3gge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYzZjY7XHJcbn1cclxuXHJcbi5uYXYtc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4ubmF2LXNlY3Rpb24gPiBwLWJ1dHRvblxyXG57XHJcbiAgbWFyZ2luOiAwIDVweDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/quiz/quiz.component.ts":
  /*!****************************************!*\
    !*** ./src/app/quiz/quiz.component.ts ***!
    \****************************************/

  /*! exports provided: QuizComponent */

  /***/
  function srcAppQuizQuizComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuizComponent", function () {
      return QuizComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _quiz_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../quiz.service */
    "./src/app/quiz.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/fesm2015/primeng-api.js");
    /* harmony import */


    var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/dynamicdialog */
    "./node_modules/primeng/fesm2015/primeng-dynamicdialog.js");

    var QuizComponent = /*#__PURE__*/function () {
      function QuizComponent(quizService, route, router, confirmationService, dialogService) {
        var _this = this;

        _classCallCheck(this, QuizComponent);

        this.quizService = quizService;
        this.route = route;
        this.router = router;
        this.confirmationService = confirmationService;
        this.dialogService = dialogService;
        this.questionNo = 0;
        this.score = 0;
        this.route.data.subscribe(function (data) {
          _this.quizQueries = data["quizQueries"].Quiz;
        });
      }

      _createClass(QuizComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "prevQuestion",
        value: function prevQuestion() {
          this.questionNo = this.questionNo - 1 < 0 ? 0 : this.questionNo - 1;
        }
      }, {
        key: "nextQuestion",
        value: function nextQuestion() {
          this.questionNo = this.questionNo + 1 > this.quizQueries.length - 1 ? 0 : this.questionNo + 1;
          this.quizQueries[this.questionNo].selectedAnswer;
        }
      }, {
        key: "submitQuiz",
        value: function submitQuiz() {
          // Calculate unanswered questions count
          // let this.quizQueries = Array.from(this.quizQueries);
          var unAnsweredCnt = this.quizQueries.length;
          this.quizQueries.forEach(function (quiz) {
            quiz.selectedAnswer ? unAnsweredCnt-- : unAnsweredCnt;
          }); // console.log(unAnsweredCnt);
          // Dialog confirmation Prompt on Submit

          this.submitConfirm = true;
          this.confirmationContent = unAnsweredCnt === 0 ? "Are you sure to submit your Quiz ?" : "Hey! you have ".concat(unAnsweredCnt, " unanswered ").concat(unAnsweredCnt === 1 ? "question" : "questions", ". Are you sure to Submit ?"); // this.confirmationService.confirm({
          //   header: "QuizMe",
          //   message:
          //     unAnsweredCnt === 0
          //       ? "Are you sure to submit your Quiz ?"
          //       : `Hey! you have ${unAnsweredCnt} unanswered ${
          //           unAnsweredCnt === 1 ? "question" : "questions"
          //         }. Are you sure to Submit ?`,
          //   accept: () => {
          //     this.quizQueries.forEach((quiz) => {
          //       atob(quiz.answer.toString()) === quiz.selectedAnswer
          //         ? this.score++
          //         : this.score;
          //       this.ref = this.dialogService.open(ResultComponent, {
          //         header: "QuizME Results",
          //         width: "70%",
          //         data: {
          //           finalScore: this.score,
          //           quizAnsweredQueries: this.quizQueries,
          //         },
          //       });
          //     });
          //   },
          // });
        }
      }, {
        key: "onYes",
        value: function onYes() {
          sessionStorage.setItem("quizResults", JSON.stringify(this.quizQueries));
          this.router.navigate(["/results"]);
        }
      }]);

      return QuizComponent;
    }();

    QuizComponent.ctorParameters = function () {
      return [{
        type: _quiz_service__WEBPACK_IMPORTED_MODULE_2__["QuizService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"]
      }, {
        type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_5__["DialogService"]
      }];
    };

    QuizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-quiz",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./quiz.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/quiz/quiz.component.html"))["default"],
      providers: [primeng_api__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"], primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_5__["DialogService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./quiz.component.css */
      "./src/app/quiz/quiz.component.css"))["default"]]
    })], QuizComponent);
    /***/
  },

  /***/
  "./src/app/result/result.component.css":
  /*!*********************************************!*\
    !*** ./src/app/result/result.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppResultResultComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h2 {\r\n  text-align: center;\r\n  color: #2a9d8f;\r\n}\r\n\r\n.quiz {\r\n  margin: auto 0;\r\n  padding: 10px;\r\n  line-height: 1.5rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdWx0L3Jlc3VsdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VsdC9yZXN1bHQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICMyYTlkOGY7XHJcbn1cclxuXHJcbi5xdWl6IHtcclxuICBtYXJnaW46IGF1dG8gMDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/result/result.component.ts":
  /*!********************************************!*\
    !*** ./src/app/result/result.component.ts ***!
    \********************************************/

  /*! exports provided: ResultComponent */

  /***/
  function srcAppResultResultComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResultComponent", function () {
      return ResultComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ResultComponent = /*#__PURE__*/function () {
      function ResultComponent(route) {
        var _this2 = this;

        _classCallCheck(this, ResultComponent);

        this.route = route;
        this.finalScore = 0;
        this.quizAnsweredQueries = JSON.parse(sessionStorage.getItem("quizResults"));
        this.quizAnsweredQueries.forEach(function (quiz) {
          if (quiz.selectedAnswer) {
            quiz.selectedAnswer.toString().toLowerCase() === quiz.answer.toString().toLowerCase() ? _this2.finalScore++ : _this2.finalScore;
          }
        });
      }

      _createClass(ResultComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          sessionStorage.removeItem("quizResults");
        }
      }]);

      return ResultComponent;
    }();

    ResultComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    ResultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-result",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./result.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/result/result.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./result.component.css */
      "./src/app/result/result.component.css"))["default"]]
    })], ResultComponent);
    /***/
  },

  /***/
  "./src/app/route-resolver.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/route-resolver.service.ts ***!
    \*******************************************/

  /*! exports provided: RouteResolverService */

  /***/
  function srcAppRouteResolverServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RouteResolverService", function () {
      return RouteResolverService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _quiz_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./quiz.service */
    "./src/app/quiz.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var RouteResolverService = /*#__PURE__*/function () {
      function RouteResolverService(quizService) {
        _classCallCheck(this, RouteResolverService);

        this.quizService = quizService;
      }

      _createClass(RouteResolverService, [{
        key: "resolve",
        value: function resolve(route, state) {
          var value = JSON.parse(sessionStorage.getItem("userSelection"));
          return this.quizService.getQuizQuestions(value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (quiz) {
            return {
              Quiz: quiz
            };
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
              Quiz: null,
              error: "Oops !!! Error in resolver ".concat(error)
            });
          }));
        }
      }]);

      return RouteResolverService;
    }();

    RouteResolverService.ctorParameters = function () {
      return [{
        type: _quiz_service__WEBPACK_IMPORTED_MODULE_3__["QuizService"]
      }];
    };

    RouteResolverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], RouteResolverService);
    /***/
  },

  /***/
  "./src/app/sanitize-html.pipe.ts":
  /*!***************************************!*\
    !*** ./src/app/sanitize-html.pipe.ts ***!
    \***************************************/

  /*! exports provided: SanitizeHtmlPipe */

  /***/
  function srcAppSanitizeHtmlPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SanitizeHtmlPipe", function () {
      return SanitizeHtmlPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    var SanitizeHtmlPipe = /*#__PURE__*/function () {
      function SanitizeHtmlPipe(sanitizer) {
        _classCallCheck(this, SanitizeHtmlPipe);

        this.sanitizer = sanitizer;
      }

      _createClass(SanitizeHtmlPipe, [{
        key: "transform",
        value: function transform(value) {
          return atob(value); // var textArea = document.createElement("textarea");
          // textArea.innerHTML = atob(value);
          // return textArea.value;
        }
      }]);

      return SanitizeHtmlPipe;
    }();

    SanitizeHtmlPipe.ctorParameters = function () {
      return [{
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
      }];
    };

    SanitizeHtmlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: "sanitizeHtml"
    })], SanitizeHtmlPipe);
    /***/
  },

  /***/
  "./src/app/welcome/welcome.component.css":
  /*!***********************************************!*\
    !*** ./src/app/welcome/welcome.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppWelcomeWelcomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: relative;\r\n  min-height: 90vh;\r\n}\r\n\r\ninput,\r\n:host >>> .ui-dropdown,\r\n:host >>> .ui-dropdown-label,\r\n:host >>> .ui-dropdown .ui-dropdown-trigger,\r\n:host >>> .ui-dropdown-items-wrapper,\r\n:host >>> .ui-button {\r\n  border-radius: 0;\r\n  background-color: #f1f3f6;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBOzs7Ozs7RUFNRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1pbi1oZWlnaHQ6IDkwdmg7XHJcbn1cclxuXHJcbmlucHV0LFxyXG46aG9zdCA+Pj4gLnVpLWRyb3Bkb3duLFxyXG46aG9zdCA+Pj4gLnVpLWRyb3Bkb3duLWxhYmVsLFxyXG46aG9zdCA+Pj4gLnVpLWRyb3Bkb3duIC51aS1kcm9wZG93bi10cmlnZ2VyLFxyXG46aG9zdCA+Pj4gLnVpLWRyb3Bkb3duLWl0ZW1zLXdyYXBwZXIsXHJcbjpob3N0ID4+PiAudWktYnV0dG9uIHtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYzZjY7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/welcome/welcome.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/welcome/welcome.component.ts ***!
    \**********************************************/

  /*! exports provided: WelcomeComponent */

  /***/
  function srcAppWelcomeWelcomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function () {
      return WelcomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _quiz_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../quiz.service */
    "./src/app/quiz.service.ts");

    var WelcomeComponent = /*#__PURE__*/function () {
      function WelcomeComponent(fb, quizService, router) {
        _classCallCheck(this, WelcomeComponent);

        this.fb = fb;
        this.quizService = quizService;
        this.router = router;
        this.quizCategory = [{
          name: "Movies",
          code: 11
        }, {
          name: "Technology",
          code: 18
        }, {
          name: "Sports",
          code: 21
        }, {
          name: "History",
          code: 23
        }, {
          name: "Politics",
          code: 24
        }, {
          name: "Mathematics",
          code: 19
        }];
        this.quizDifficilty = [{
          label: "Easy",
          value: "easy"
        }, {
          label: "Medium",
          value: "medium"
        }, {
          label: "Hard",
          value: "hard"
        }];
      }

      _createClass(WelcomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.quizForm = this.fb.group({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            difficulty: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(value) {
          sessionStorage.setItem("userSelection", JSON.stringify(value));
          this.router.navigate(["/question"]);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {//Called once, before the instance is destroyed.
          //Add 'implements OnDestroy' to the class.
          // sessionStorage.removeItem("userSelection");
        }
      }]);

      return WelcomeComponent;
    }();

    WelcomeComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _quiz_service__WEBPACK_IMPORTED_MODULE_4__["QuizService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-welcome",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./welcome.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./welcome.component.css */
      "./src/app/welcome/welcome.component.css"))["default"]]
    })], WelcomeComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Journel app\QuizMe\quizME\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map