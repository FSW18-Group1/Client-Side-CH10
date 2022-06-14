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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Profile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _redux_actions_authenticated__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions/authenticated */ \"./redux/actions/authenticated.js\");\n/* harmony import */ var _redux_actions_profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/actions/profile */ \"./redux/actions/profile.js\");\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Profile() {\n    _s();\n    var profile = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function(state) {\n        return state;\n    });\n    var ref = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function(state) {\n        return state.authenticatedReducer;\n    }), token = ref.token, data = ref.data;\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var id = data.id;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), name = ref1[0], setName = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), email = ref2[0], setEmail = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        dispatch((0,_redux_actions_authenticated__WEBPACK_IMPORTED_MODULE_4__.authenticatedAction)());\n    // dispatch(putProfile(bodyUpdate));\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        setName(data.username);\n        setEmail(data.email);\n    // dispatch(putProfile(bodyUpdate));\n    }, [\n        data\n    ]);\n    var onSubmit = function() {\n        e.preventDefault();\n        var bodyUpdate = {\n            name: name,\n            email: email,\n            id: id\n        };\n        var config = {\n            headers: {\n                Authorization: \"Bearer \".concat(token)\n            }\n        };\n        var url = \"https://challenge-chapter-9.herokuapp.com/profile/\".concat(id);\n        axios.put(url, bodyUpdate, config).then(function(res) {\n            console.log(\"3. berhasil: \" + res.data);\n            localStorage.removeItem(\"data\");\n            localStorage.setItem(\"data\", bodyUpdate);\n            router.push(\"/\");\n        }).catch(function(err) {\n            console.log(\"3. gagal: \" + err.message);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"section\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form, {\n                onSubmit: onSubmit,\n                className: \"container profile-form\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"profile-picture\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\centro\\\\Desktop\\\\Client-Side-CH10\\\\pages\\\\profile\\\\index.js\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"py-4\",\n                        children: \"Edit Profile\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\centro\\\\Desktop\\\\Client-Side-CH10\\\\pages\\\\profile\\\\index.js\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form.Group, {\n                        className: \"mb-3\",\n                        controlId: \"formBasicEmail\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form.Label, {\n                                children: \"Email\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\centro\\\\Desktop\\\\Client-Side-CH10\\\\pages\\\\profile\\\\index.js\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form.Control, {\n                                type: \"email\",\n                                value: email,\n                                onChange: function(e) {\n                                    return setEmail(e.target.value);\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\centro\\\\Desktop\\\\Client-Side-CH10\\\\pages\\\\profile\\\\index.js\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\centro\\\\Desktop\\\\Client-Side-CH10\\\\pages\\\\profile\\\\index.js\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form.Group, {\n                        className: \"mb-3\",\n                        controlId: \"formBasicEmail\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form.Label, {\n                                children: \"Username\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\centro\\\\Desktop\\\\Client-Side-CH10\\\\pages\\\\profile\\\\index.js\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form.Control, {\n                                type: \"text\",\n                                value: name,\n                                onChange: function(e) {\n                                    return setName(e.target.value);\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\centro\\\\Desktop\\\\Client-Side-CH10\\\\pages\\\\profile\\\\index.js\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\centro\\\\Desktop\\\\Client-Side-CH10\\\\pages\\\\profile\\\\index.js\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"d-flex justify-content-start\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"me-4 btn btn-danger\",\n                                children: \"\\xab back\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\centro\\\\Desktop\\\\Client-Side-CH10\\\\pages\\\\profile\\\\index.js\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                variant: \"primary\",\n                                type: \"submit\",\n                                children: \"Edit data\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\centro\\\\Desktop\\\\Client-Side-CH10\\\\pages\\\\profile\\\\index.js\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\centro\\\\Desktop\\\\Client-Side-CH10\\\\pages\\\\profile\\\\index.js\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\centro\\\\Desktop\\\\Client-Side-CH10\\\\pages\\\\profile\\\\index.js\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\centro\\\\Desktop\\\\Client-Side-CH10\\\\pages\\\\profile\\\\index.js\",\n            lineNumber: 53,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n};\n_s(Profile, \"aSCQR1IMhSC/AOfJjpCkEQFdbuM=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Profile;\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0dBNUV1QjFDLE9BQU87O1FBQ2JOLG9EQUFXO1FBQ0hBLG9EQUFXO1FBQ2xCRCxvREFBVztRQUNiRSxrREFBUzs7O0FBSkZLLEtBQUFBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS9pbmRleC5qcz83ZTlhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm0sIEJ1dHRvbiwgRHJvcGRvd24gfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBhdXRoZW50aWNhdGVkQWN0aW9uIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvYXV0aGVudGljYXRlZFwiO1xyXG5pbXBvcnQgeyBwdXRQcm9maWxlIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvcHJvZmlsZVwiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9maWxlKCkge1xyXG4gIGNvbnN0IHByb2ZpbGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlKTtcclxuICBjb25zdCB7IHRva2VuLCBkYXRhIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmF1dGhlbnRpY2F0ZWRSZWR1Y2VyKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgaWQgPSBkYXRhLmlkO1xyXG5cclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goYXV0aGVudGljYXRlZEFjdGlvbigpKTtcclxuICAgIC8vIGRpc3BhdGNoKHB1dFByb2ZpbGUoYm9keVVwZGF0ZSkpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldE5hbWUoZGF0YS51c2VybmFtZSk7XHJcbiAgICBzZXRFbWFpbChkYXRhLmVtYWlsKTtcclxuICAgIC8vIGRpc3BhdGNoKHB1dFByb2ZpbGUoYm9keVVwZGF0ZSkpO1xyXG4gIH0sIFtkYXRhXSk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgYm9keVVwZGF0ZSA9IHtcclxuICAgICAgbmFtZSxcclxuICAgICAgZW1haWwsXHJcbiAgICAgIGlkLFxyXG4gICAgfTtcclxuICAgIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCB9LFxyXG4gICAgfTtcclxuICAgIGNvbnN0IHVybCA9IGBodHRwczovL2NoYWxsZW5nZS1jaGFwdGVyLTkuaGVyb2t1YXBwLmNvbS9wcm9maWxlLyR7aWR9YDtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5wdXQodXJsLCBib2R5VXBkYXRlLCBjb25maWcpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIjMuIGJlcmhhc2lsOiBcIiArIHJlcy5kYXRhKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImRhdGFcIik7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJkYXRhXCIsIGJvZHlVcGRhdGUpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIjMuIGdhZ2FsOiBcIiArIGVyci5tZXNzYWdlKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XHJcbiAgICAgICAgPEZvcm0gb25TdWJtaXQ9e29uU3VibWl0fSBjbGFzc05hbWU9XCJjb250YWluZXIgcHJvZmlsZS1mb3JtXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtcGljdHVyZVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInB5LTRcIj5FZGl0IFByb2ZpbGU8L2gxPlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1CYXNpY0VtYWlsXCI+XHJcbiAgICAgICAgICAgIDxGb3JtLkxhYmVsPkVtYWlsPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybUJhc2ljRW1haWxcIj5cclxuICAgICAgICAgICAgPEZvcm0uTGFiZWw+VXNlcm5hbWU8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1zdGFydFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1lLTQgYnRuIGJ0bi1kYW5nZXJcIj4mbGFxdW87IGJhY2s8L2J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICBFZGl0IGRhdGFcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiRm9ybSIsIkJ1dHRvbiIsIkRyb3Bkb3duIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXV0aGVudGljYXRlZEFjdGlvbiIsInB1dFByb2ZpbGUiLCJQcm9maWxlIiwicHJvZmlsZSIsInN0YXRlIiwiYXV0aGVudGljYXRlZFJlZHVjZXIiLCJ0b2tlbiIsImRhdGEiLCJkaXNwYXRjaCIsInJvdXRlciIsImlkIiwibmFtZSIsInNldE5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwidXNlcm5hbWUiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImJvZHlVcGRhdGUiLCJjb25maWciLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInVybCIsImF4aW9zIiwicHV0IiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwic2V0SXRlbSIsInB1c2giLCJjYXRjaCIsImVyciIsIm1lc3NhZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIkdyb3VwIiwiY29udHJvbElkIiwiTGFiZWwiLCJDb250cm9sIiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJidXR0b24iLCJ2YXJpYW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/profile/index.js\n");

/***/ })

});