"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/profile",{

/***/ "./pages/profile/index.js":
/*!********************************!*\
  !*** ./pages/profile/index.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Profile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _redux_actions_authenticated__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions/authenticated */ \"./redux/actions/authenticated.js\");\n/* harmony import */ var _redux_actions_profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/actions/profile */ \"./redux/actions/profile.js\");\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Profile() {\n    _s();\n    var profile = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function(state) {\n        return state;\n    });\n    var ref = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function(state) {\n        return state.authenticatedReducer;\n    }), token = ref.token, data = ref.data;\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var id = data.id;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(data.username), name = ref1[0], setName = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(data.email), email = ref2[0], setEmail = ref2[1];\n    var bodyUpdate = {\n        name: name,\n        email: email,\n        id: id\n    };\n    console.log(\"cek\", data);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        dispatch((0,_redux_actions_authenticated__WEBPACK_IMPORTED_MODULE_4__.authenticatedAction)());\n    // dispatch(putProfile(bodyUpdate));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"section\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form, {\n                className: \"container profile-form\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"profile-picture\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\centro\\\\Desktop\\\\Client-Side-CH10\\\\pages\\\\profile\\\\index.js\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"py-4\",\n                        children: \"Edit Profile\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\centro\\\\Desktop\\\\Client-Side-CH10\\\\pages\\\\profile\\\\index.js\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form.Group, {\n                        className: \"mb-3\",\n                        controlId: \"formBasicEmail\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form.Label, {\n                                children: \"Email\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\centro\\\\Desktop\\\\Client-Side-CH10\\\\pages\\\\profile\\\\index.js\",\n                                lineNumber: 35,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form.Control, {\n                                type: \"email\",\n                                value: email,\n                                onChange: function(e) {\n                                    return setEmail(e.target.value);\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\centro\\\\Desktop\\\\Client-Side-CH10\\\\pages\\\\profile\\\\index.js\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\centro\\\\Desktop\\\\Client-Side-CH10\\\\pages\\\\profile\\\\index.js\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form.Group, {\n                        className: \"mb-3\",\n                        controlId: \"formBasicEmail\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form.Label, {\n                                children: \"Username\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\centro\\\\Desktop\\\\Client-Side-CH10\\\\pages\\\\profile\\\\index.js\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form.Control, {\n                                type: \"text\",\n                                value: name,\n                                onChange: function(e) {\n                                    return setName(e.target.value);\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\centro\\\\Desktop\\\\Client-Side-CH10\\\\pages\\\\profile\\\\index.js\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\centro\\\\Desktop\\\\Client-Side-CH10\\\\pages\\\\profile\\\\index.js\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"d-flex justify-content-start\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"me-4 btn btn-danger\",\n                                children: \"\\xab back\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\centro\\\\Desktop\\\\Client-Side-CH10\\\\pages\\\\profile\\\\index.js\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                variant: \"primary\",\n                                type: \"submit\",\n                                children: \"Edit data\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\centro\\\\Desktop\\\\Client-Side-CH10\\\\pages\\\\profile\\\\index.js\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\centro\\\\Desktop\\\\Client-Side-CH10\\\\pages\\\\profile\\\\index.js\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\centro\\\\Desktop\\\\Client-Side-CH10\\\\pages\\\\profile\\\\index.js\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\centro\\\\Desktop\\\\Client-Side-CH10\\\\pages\\\\profile\\\\index.js\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n};\n_s(Profile, \"QPgS7vlwCA9orcXpZObcE1l71F4=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Profile;\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9maWxlL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBeUQ7QUFDRjtBQUNmO0FBQ0k7QUFDNEI7QUFDZjs7QUFDMUMsU0FBU1UsT0FBTyxHQUFHOztJQUNoQyxJQUFNQyxPQUFPLEdBQUdQLHdEQUFXLENBQUMsU0FBQ1EsS0FBSztlQUFLQSxLQUFLO0tBQUEsQ0FBQztJQUM3QyxJQUF3QlIsR0FBa0QsR0FBbERBLHdEQUFXLENBQUMsU0FBQ1EsS0FBSztlQUFLQSxLQUFLLENBQUNDLG9CQUFvQjtLQUFBLENBQUMsRUFBbEVDLEtBQUssR0FBV1YsR0FBa0QsQ0FBbEVVLEtBQUssRUFBRUMsSUFBSSxHQUFLWCxHQUFrRCxDQUEzRFcsSUFBSTtJQUNuQixJQUFNQyxRQUFRLEdBQUdiLHdEQUFXLEVBQUU7SUFDOUIsSUFBTWMsTUFBTSxHQUFHWixzREFBUyxFQUFFO0lBQzFCLElBQU1hLEVBQUUsR0FBR0gsSUFBSSxDQUFDRyxFQUFFO0lBRWxCLElBQXdCWCxJQUF1QixHQUF2QkEsK0NBQVEsQ0FBQ1EsSUFBSSxDQUFDSSxRQUFRLENBQUMsRUFiakQsSUFhYSxHQUFhWixJQUF1QixHQUFwQyxFQWJiLE9BYXNCLEdBQUlBLElBQXVCLEdBQTNCO0lBQ3BCLElBQTBCQSxJQUFvQixHQUFwQkEsK0NBQVEsQ0FBQ1EsSUFBSSxDQUFDTyxLQUFLLENBQUMsRUFkaEQsS0FjYyxHQUFjZixJQUFvQixHQUFsQyxFQWRkLFFBY3dCLEdBQUlBLElBQW9CLEdBQXhCO0lBRXRCLElBQU1pQixVQUFVLEdBQUc7UUFDakJKLElBQUksRUFBSkEsSUFBSTtRQUNKRSxLQUFLLEVBQUxBLEtBQUs7UUFDTEosRUFBRSxFQUFGQSxFQUFFO0tBQ0g7SUFDRE8sT0FBTyxDQUFDQyxHQUFHLENBQUMsS0FBSyxFQUFFWCxJQUFJLENBQUMsQ0FBQztJQUN6QlQsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RVLFFBQVEsQ0FBQ1IsaUZBQW1CLEVBQUUsQ0FBQyxDQUFDO0lBQ2hDLG9DQUFvQztLQUNyQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAscUJBQ0U7a0JBQ0UsNEVBQUNtQixLQUFHO1lBQUNDLFNBQVMsRUFBQyxTQUFTO3NCQUN0Qiw0RUFBQzVCLGlEQUFJO2dCQUFDNEIsU0FBUyxFQUFDLHdCQUF3Qjs7a0NBQ3RDLDhEQUFDRCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsaUJBQWlCOzs7Ozs0QkFBTztrQ0FDdkMsOERBQUNDLElBQUU7d0JBQUNELFNBQVMsRUFBQyxNQUFNO2tDQUFDLGNBQVk7Ozs7OzRCQUFLO2tDQUN0Qyw4REFBQzVCLHVEQUFVO3dCQUFDNEIsU0FBUyxFQUFDLE1BQU07d0JBQUNHLFNBQVMsRUFBQyxnQkFBZ0I7OzBDQUNyRCw4REFBQy9CLHVEQUFVOzBDQUFDLE9BQUs7Ozs7O29DQUFhOzBDQUM5Qiw4REFBQ0EseURBQVk7Z0NBQ1hrQyxJQUFJLEVBQUMsT0FBTztnQ0FDWkMsS0FBSyxFQUFFYixLQUFLO2dDQUNaYyxRQUFRLEVBQUUsU0FBQ0MsQ0FBQzsyQ0FBS2QsUUFBUSxDQUFDYyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0gsS0FBSyxDQUFDO2lDQUFBOzs7OztvQ0FDekM7Ozs7Ozs0QkFDUztrQ0FDYiw4REFBQ25DLHVEQUFVO3dCQUFDNEIsU0FBUyxFQUFDLE1BQU07d0JBQUNHLFNBQVMsRUFBQyxnQkFBZ0I7OzBDQUNyRCw4REFBQy9CLHVEQUFVOzBDQUFDLFVBQVE7Ozs7O29DQUFhOzBDQUNqQyw4REFBQ0EseURBQVk7Z0NBQ1hrQyxJQUFJLEVBQUMsTUFBTTtnQ0FDWEMsS0FBSyxFQUFFZixJQUFJO2dDQUNYZ0IsUUFBUSxFQUFFLFNBQUNDLENBQUM7MkNBQUtoQixPQUFPLENBQUNnQixDQUFDLENBQUNDLE1BQU0sQ0FBQ0gsS0FBSyxDQUFDO2lDQUFBOzs7OztvQ0FDeEM7Ozs7Ozs0QkFDUztrQ0FDYiw4REFBQ1IsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLDhCQUE4Qjs7MENBQzNDLDhEQUFDVyxRQUFNO2dDQUFDWCxTQUFTLEVBQUMscUJBQXFCOzBDQUFDLFdBQVk7Ozs7O29DQUFTOzBDQUM3RCw4REFBQzNCLG1EQUFNO2dDQUFDdUMsT0FBTyxFQUFDLFNBQVM7Z0NBQUNOLElBQUksRUFBQyxRQUFROzBDQUFDLFdBRXhDOzs7OztvQ0FBUzs7Ozs7OzRCQUNMOzs7Ozs7b0JBQ0Q7Ozs7O2dCQUNIO3FCQUNMLENBQ0g7Q0FDSDtHQXJEdUJ4QixPQUFPOztRQUNiTixvREFBVztRQUNIQSxvREFBVztRQUNsQkQsb0RBQVc7UUFDYkUsa0RBQVM7OztBQUpGSyxLQUFBQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2ZpbGUvaW5kZXguanM/N2U5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtLCBCdXR0b24sIERyb3Bkb3duIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgYXV0aGVudGljYXRlZEFjdGlvbiB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL2F1dGhlbnRpY2F0ZWRcIjtcclxuaW1wb3J0IHsgcHV0UHJvZmlsZSB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL3Byb2ZpbGVcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZmlsZSgpIHtcclxuICBjb25zdCBwcm9maWxlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZSk7XHJcbiAgY29uc3QgeyB0b2tlbiwgZGF0YSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hdXRoZW50aWNhdGVkUmVkdWNlcik7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGlkID0gZGF0YS5pZDtcclxuXHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoZGF0YS51c2VybmFtZSk7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShkYXRhLmVtYWlsKTtcclxuXHJcbiAgY29uc3QgYm9keVVwZGF0ZSA9IHtcclxuICAgIG5hbWUsXHJcbiAgICBlbWFpbCxcclxuICAgIGlkLFxyXG4gIH07XHJcbiAgY29uc29sZS5sb2coXCJjZWtcIiwgZGF0YSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKGF1dGhlbnRpY2F0ZWRBY3Rpb24oKSk7XHJcbiAgICAvLyBkaXNwYXRjaChwdXRQcm9maWxlKGJvZHlVcGRhdGUpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cclxuICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJjb250YWluZXIgcHJvZmlsZS1mb3JtXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtcGljdHVyZVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInB5LTRcIj5FZGl0IFByb2ZpbGU8L2gxPlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1CYXNpY0VtYWlsXCI+XHJcbiAgICAgICAgICAgIDxGb3JtLkxhYmVsPkVtYWlsPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybUJhc2ljRW1haWxcIj5cclxuICAgICAgICAgICAgPEZvcm0uTGFiZWw+VXNlcm5hbWU8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1zdGFydFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1lLTQgYnRuIGJ0bi1kYW5nZXJcIj4mbGFxdW87IGJhY2s8L2J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICBFZGl0IGRhdGFcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiRm9ybSIsIkJ1dHRvbiIsIkRyb3Bkb3duIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXV0aGVudGljYXRlZEFjdGlvbiIsInB1dFByb2ZpbGUiLCJQcm9maWxlIiwicHJvZmlsZSIsInN0YXRlIiwiYXV0aGVudGljYXRlZFJlZHVjZXIiLCJ0b2tlbiIsImRhdGEiLCJkaXNwYXRjaCIsInJvdXRlciIsImlkIiwidXNlcm5hbWUiLCJuYW1lIiwic2V0TmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJib2R5VXBkYXRlIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiR3JvdXAiLCJjb250cm9sSWQiLCJMYWJlbCIsIkNvbnRyb2wiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJ2YXJpYW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/profile/index.js\n");

/***/ })

});