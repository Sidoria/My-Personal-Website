"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/voxel-ghost.js":
/*!***********************************!*\
  !*** ./components/voxel-ghost.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var _libs_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../libs/model */ \"./libs/model.js\");\n/* harmony import */ var _voxel_ghost_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./voxel-ghost-loader */ \"./components/voxel-ghost-loader.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nfunction easeOutCirc(x) {\n    return Math.sqrt(1 - Math.pow(x - 1, 4));\n}\nvar VoxelGhost = function() {\n    _s();\n    var refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), loading = ref[0], setLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), renderer = ref1[0], setRenderer = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _camera = ref2[0], setCamera = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_5__.Vector3(-0.5, 1.2, 0)), target = ref3[0];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_5__.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI))), initialCameraPosition = ref4[0];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_5__.Scene()), scene = ref5[0];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _controls = ref6[0], setControls = ref6[1];\n    var handleWindowResize = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {\n        var container = refContainer.current;\n        if (container && renderer) {\n            var scW = container.clientWidth;\n            var scH = container.clientHeight;\n            renderer.setSize(scW, scH);\n        }\n    }, [\n        renderer\n    ]);\n    /* eslint-disable react-hooks/exhaustive-deps */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var container = refContainer.current;\n        if (container && !renderer) {\n            var scW = container.clientWidht;\n            var scH = container.clientHeight;\n            var renderer1 = new three__WEBPACK_IMPORTED_MODULE_5__.WebGLRenderer({\n                antialias: true,\n                alpha: true\n            });\n            renderer1.setPixelRatio(window.devicePixelRatio);\n            renderer1.setSize(scW, scH);\n            renderer1.outputEncoding = three__WEBPACK_IMPORTED_MODULE_5__.sRGBEncoding;\n            container.appendChild(renderer1.domElement);\n            setRenderer(renderer1);\n            // 640 -> 240\n            // 8 -> 6\n            var scale = scH * 0.005 + 4.8;\n            var camera = new three__WEBPACK_IMPORTED_MODULE_5__.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000);\n            camera.position.copy(initialCameraPosition);\n            camera.lookAt(target);\n            setCamera(camera);\n            var ambientLight = new three__WEBPACK_IMPORTED_MODULE_5__.AmbientLight(13421772, 1);\n            scene.add(ambientLight);\n            var controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__.OrbitControls(camera, renderer1.domElement);\n            controls.autoRotate = true;\n            controls.target = target;\n            setControls(controls);\n            (0,_libs_model__WEBPACK_IMPORTED_MODULE_3__.loadGLTFModel)(scene, './ghost/sadghost.glb', {\n                receiveShadow: false,\n                castShadow: false\n            }).then(function() {\n                animate();\n                setLoading(false);\n            });\n            var req = null;\n            var frame = 0;\n            var animate = function() {\n                req = requestAnimationFrame(animate);\n                frame = frame <= 100 ? frame + 1 : frame;\n                if (frame <= 100) {\n                    var p = initialCameraPosition;\n                    var rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;\n                    camera.position.y = 10;\n                    camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);\n                    camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);\n                    camera.lookAt(target);\n                } else {\n                    controls.update();\n                }\n                renderer1.render(scene, camera);\n            };\n            return function() {\n                console.log('unmount');\n                cancelAnimationFrame(req);\n                renderer1.dispose();\n            };\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        window.addEventListener('resize', handleWindowResize, false);\n        return function() {\n            window.removeEventListener('resize', handleWindowResize, false);\n        };\n    }, [\n        renderer,\n        handleWindowResize\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_voxel_ghost_loader__WEBPACK_IMPORTED_MODULE_4__.GhostContainer, {\n        ref: refContainer,\n        __source: {\n            fileName: \"C:\\\\Users\\\\47435664871\\\\Desktop\\\\My-Personal-Website\\\\components\\\\voxel-ghost.js\",\n            lineNumber: 128\n        },\n        __self: _this,\n        children: loading && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_voxel_ghost_loader__WEBPACK_IMPORTED_MODULE_4__.GhostSpinner, {\n            __source: {\n                fileName: \"C:\\\\Users\\\\47435664871\\\\Desktop\\\\My-Personal-Website\\\\components\\\\voxel-ghost.js\",\n                lineNumber: 128\n            },\n            __self: _this\n        })\n    }));\n};\n_s(VoxelGhost, \"8aSUegmjHvm3OZ9MtQAWzCHz8XI=\");\n_c = VoxelGhost;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VoxelGhost);\nvar _c;\n$RefreshReg$(_c, \"VoxelGhost\");\n\n\n;\r\n    var _a, _b;\r\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n    // to extract CSS. For backwards compatibility, we need to check we're in a\r\n    // browser context before continuing.\r\n    if (typeof self !== 'undefined' &&\r\n        // AMP / No-JS mode does not inject these helpers:\r\n        '$RefreshHelpers$' in self) {\r\n        var currentExports = module.__proto__.exports;\r\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n        // This cannot happen in MainTemplate because the exports mismatch between\r\n        // templating and execution.\r\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n        // A module can be accepted automatically based on its exports, e.g. when\r\n        // it is a Refresh Boundary.\r\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n            // Save the previous exports on update so we can compare the boundary\r\n            // signatures.\r\n            module.hot.dispose(function (data) {\r\n                data.prevExports = currentExports;\r\n            });\r\n            // Unconditionally accept an update to this module, we'll check if it's\r\n            // still a Refresh Boundary later.\r\n            module.hot.accept();\r\n            // This field is set when the previous version of this module was a\r\n            // Refresh Boundary, letting us know we need to check for invalidation or\r\n            // enqueue an update.\r\n            if (prevExports !== null) {\r\n                // A boundary can become ineligible if its exports are incompatible\r\n                // with the previous exports.\r\n                //\r\n                // For example, if you add/remove/change exports, we'll want to\r\n                // re-execute the importing modules, and force those components to\r\n                // re-render. Similarly, if you convert a class component to a\r\n                // function, we want to invalidate the boundary.\r\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                    module.hot.invalidate();\r\n                }\r\n                else {\r\n                    self.$RefreshHelpers$.scheduleUpdate();\r\n                }\r\n            }\r\n        }\r\n        else {\r\n            // Since we just executed the code for the module, it's possible that the\r\n            // new exports made it ineligible for being a boundary.\r\n            // We only care about the case when we were _previously_ a boundary,\r\n            // because we already accepted this update (accidental side effect).\r\n            var isNoLongerABoundary = prevExports !== null;\r\n            if (isNoLongerABoundary) {\r\n                module.hot.invalidate();\r\n            }\r\n        }\r\n    }\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3ZveGVsLWdob3N0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWdFO0FBQ2xDO0FBQzJDO0FBQzVCO0FBQ3NCOzs7U0FLMURTLFdBQVcsQ0FBQ0MsQ0FBQyxFQUFFLENBQUM7SUFDckIsTUFBTSxDQUFDQyxJQUFJLENBQUNDLElBQUksQ0FBQyxDQUFDLEdBQUdELElBQUksQ0FBQ0UsR0FBRyxDQUFDSCxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7QUFDMUMsQ0FBQztBQUVELEdBQUssQ0FBQ0ksVUFBVSxHQUFHLFFBQVEsR0FBRixDQUFDOztJQUN0QixHQUFLLENBQUNDLFlBQVksR0FBR2IsNkNBQU07SUFDM0IsR0FBSyxDQUF5QkYsR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksR0FBcENnQixPQUFPLEdBQWdCaEIsR0FBYyxLQUE1QmlCLFVBQVUsR0FBSWpCLEdBQWM7SUFDNUMsR0FBSyxDQUEyQkEsSUFBVSxHQUFWQSwrQ0FBUSxJQUFqQ2tCLFFBQVEsR0FBaUJsQixJQUFVLEtBQXpCbUIsV0FBVyxHQUFJbkIsSUFBVTtJQUMxQyxHQUFLLENBQXdCQSxJQUFVLEdBQVZBLCtDQUFRLElBQTlCb0IsT0FBTyxHQUFlcEIsSUFBVSxLQUF2QnFCLFNBQVMsR0FBSXJCLElBQVU7SUFDdkMsR0FBSyxDQUFZQSxJQUF5QyxHQUF6Q0EsK0NBQVEsQ0FBQyxHQUFHLENBQUNJLDBDQUFhLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQWpEbUIsTUFBTSxHQUFJdkIsSUFBeUM7SUFDMUQsR0FBSyxDQUEyQkEsSUFNL0IsR0FOK0JBLCtDQUFRLENBQ3BDLEdBQUcsQ0FBQ0ksMENBQWEsQ0FDYixFQUFFLEdBQUdPLElBQUksQ0FBQ2EsR0FBRyxDQUFDLEdBQUcsR0FBR2IsSUFBSSxDQUFDYyxFQUFFLEdBQzNCLEVBQUUsRUFDRixFQUFFLEdBQUdkLElBQUksQ0FBQ2UsR0FBRyxDQUFDLEdBQUcsR0FBR2YsSUFBSSxDQUFDYyxFQUFFLEtBSjVCRSxxQkFBcUIsR0FBSTNCLElBTS9CO0lBRUQsR0FBSyxDQUFXQSxJQUEyQixHQUEzQkEsK0NBQVEsQ0FBQyxHQUFHLENBQUNJLHdDQUFXLEtBQWpDeUIsS0FBSyxHQUFJN0IsSUFBMkI7SUFDM0MsR0FBSyxDQUE0QkEsSUFBVSxHQUFWQSwrQ0FBUSxJQUFsQzhCLFNBQVMsR0FBaUI5QixJQUFVLEtBQXpCK0IsV0FBVyxHQUFJL0IsSUFBVTtJQUUzQyxHQUFLLENBQUNnQyxrQkFBa0IsR0FBRzdCLGtEQUFXLENBQUMsUUFBUSxHQUFGLENBQUM7UUFDMUMsR0FBSyxDQUFZOEIsU0FBUyxHQUFLbEIsWUFBWSxDQUFuQ21CLE9BQU87UUFDZixFQUFFLEVBQUVELFNBQVMsSUFBSWYsUUFBUSxFQUFFLENBQUM7WUFDMUIsR0FBSyxDQUFDaUIsR0FBRyxHQUFHRixTQUFTLENBQUNHLFdBQVc7WUFDakMsR0FBSyxDQUFDQyxHQUFHLEdBQUdKLFNBQVMsQ0FBQ0ssWUFBWTtZQUVsQ3BCLFFBQVEsQ0FBQ3FCLE9BQU8sQ0FBQ0osR0FBRyxFQUFFRSxHQUFHO1FBQzNCLENBQUM7SUFDSCxDQUFDLEVBQUUsQ0FBQ25CO1FBQUFBLFFBQVE7SUFBQSxDQUFDO0lBRWYsRUFBZ0QsK0NBQ2hEakIsZ0RBQVMsQ0FBQyxRQUFRLEdBQUYsQ0FBQztRQUNiLEdBQUssQ0FBWWdDLFNBQVMsR0FBSWxCLFlBQVksQ0FBbENtQixPQUFPO1FBQ2YsRUFBRSxFQUFFRCxTQUFTLEtBQUtmLFFBQVEsRUFBRSxDQUFDO1lBQ3pCLEdBQUssQ0FBQ2lCLEdBQUcsR0FBR0YsU0FBUyxDQUFDTyxXQUFXO1lBQ2pDLEdBQUssQ0FBQ0gsR0FBRyxHQUFHSixTQUFTLENBQUNLLFlBQVk7WUFFbEMsR0FBSyxDQUFDcEIsU0FBUSxHQUFHLEdBQUcsQ0FBQ2QsZ0RBQW1CLENBQUMsQ0FBQztnQkFDdENzQyxTQUFTLEVBQUUsSUFBSTtnQkFDZkMsS0FBSyxFQUFFLElBQUk7WUFDZixDQUFDO1lBQ0R6QixTQUFRLENBQUMwQixhQUFhLENBQUNDLE1BQU0sQ0FBQ0MsZ0JBQWdCO1lBQzlDNUIsU0FBUSxDQUFDcUIsT0FBTyxDQUFDSixHQUFHLEVBQUVFLEdBQUc7WUFDekJuQixTQUFRLENBQUM2QixjQUFjLEdBQUczQywrQ0FBa0I7WUFDNUM2QixTQUFTLENBQUNnQixXQUFXLENBQUMvQixTQUFRLENBQUNnQyxVQUFVO1lBQ3pDL0IsV0FBVyxDQUFDRCxTQUFRO1lBRXBCLEVBQWE7WUFDYixFQUFTO1lBQ1QsR0FBSyxDQUFDaUMsS0FBSyxHQUFHZCxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUc7WUFDL0IsR0FBSyxDQUFDZSxNQUFNLEdBQUcsR0FBRyxDQUFDaEQscURBQXdCLEVBQ3RDK0MsS0FBSyxFQUNOQSxLQUFLLEVBQ0xBLEtBQUssR0FDSkEsS0FBSyxFQUNOLElBQUksRUFDSixLQUFLO1lBRVRDLE1BQU0sQ0FBQ0UsUUFBUSxDQUFDQyxJQUFJLENBQUM1QixxQkFBcUI7WUFDMUN5QixNQUFNLENBQUNJLE1BQU0sQ0FBQ2pDLE1BQU07WUFDcEJGLFNBQVMsQ0FBQytCLE1BQU07WUFFaEIsR0FBSyxDQUFDSyxZQUFZLEdBQUcsR0FBRyxDQUFDckQsK0NBQWtCLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDdkR5QixLQUFLLENBQUM4QixHQUFHLENBQUNGLFlBQVk7WUFFdEIsR0FBSyxDQUFDRyxRQUFRLEdBQUcsR0FBRyxDQUFDdkQsb0ZBQWEsQ0FBRStDLE1BQU0sRUFBRWxDLFNBQVEsQ0FBQ2dDLFVBQVU7WUFDL0RVLFFBQVEsQ0FBQ0MsVUFBVSxHQUFHLElBQUk7WUFDMUJELFFBQVEsQ0FBQ3JDLE1BQU0sR0FBR0EsTUFBTTtZQUN4QlEsV0FBVyxDQUFDNkIsUUFBUTtZQUVwQnRELDBEQUFhLENBQUN1QixLQUFLLEVBQUUsQ0FBc0IsdUJBQUUsQ0FBQztnQkFDMUNpQyxhQUFhLEVBQUUsS0FBSztnQkFDcEJDLFVBQVUsRUFBRSxLQUFLO1lBQ3JCLENBQUMsRUFBRUMsSUFBSSxDQUFDLFFBQVEsR0FBRixDQUFDO2dCQUNYQyxPQUFPO2dCQUNQaEQsVUFBVSxDQUFDLEtBQUs7WUFDcEIsQ0FBQztZQUVELEdBQUcsQ0FBQ2lELEdBQUcsR0FBRyxJQUFJO1lBQ2QsR0FBRyxDQUFDQyxLQUFLLEdBQUcsQ0FBQztZQUNiLEdBQUssQ0FBQ0YsT0FBTyxHQUFJLFFBQVEsR0FBRixDQUFDO2dCQUNwQkMsR0FBRyxHQUFHRSxxQkFBcUIsQ0FBQ0gsT0FBTztnQkFFbkNFLEtBQUssR0FBR0EsS0FBSyxJQUFJLEdBQUcsR0FBR0EsS0FBSyxHQUFHLENBQUMsR0FBR0EsS0FBSztnQkFFeEMsRUFBRSxFQUFDQSxLQUFLLElBQUksR0FBRyxFQUFFLENBQUM7b0JBQ2QsR0FBSyxDQUFDRSxDQUFDLEdBQUcxQyxxQkFBcUI7b0JBQy9CLEdBQUssQ0FBQzJDLFFBQVEsSUFBSTdELFdBQVcsQ0FBQzBELEtBQUssR0FBRyxHQUFHLElBQUl4RCxJQUFJLENBQUNjLEVBQUUsR0FBRyxFQUFFO29CQUV6RDJCLE1BQU0sQ0FBQ0UsUUFBUSxDQUFDaUIsQ0FBQyxHQUFHLEVBQUU7b0JBQ3RCbkIsTUFBTSxDQUFDRSxRQUFRLENBQUM1QyxDQUFDLEdBQUcyRCxDQUFDLENBQUMzRCxDQUFDLEdBQUdDLElBQUksQ0FBQ2UsR0FBRyxDQUFDNEMsUUFBUSxJQUFJRCxDQUFDLENBQUNHLENBQUMsR0FBRzdELElBQUksQ0FBQ2EsR0FBRyxDQUFDOEMsUUFBUTtvQkFDdEVsQixNQUFNLENBQUNFLFFBQVEsQ0FBQ2tCLENBQUMsR0FBR0gsQ0FBQyxDQUFDRyxDQUFDLEdBQUc3RCxJQUFJLENBQUNlLEdBQUcsQ0FBQzRDLFFBQVEsSUFBSUQsQ0FBQyxDQUFDM0QsQ0FBQyxHQUFHQyxJQUFJLENBQUNhLEdBQUcsQ0FBQzhDLFFBQVE7b0JBQ3RFbEIsTUFBTSxDQUFDSSxNQUFNLENBQUNqQyxNQUFNO2dCQUN4QixDQUFDLE1BQU0sQ0FBQztvQkFDSnFDLFFBQVEsQ0FBQ2EsTUFBTTtnQkFDbkIsQ0FBQztnQkFFRHZELFNBQVEsQ0FBQ3dELE1BQU0sQ0FBQzdDLEtBQUssRUFBRXVCLE1BQU07WUFDakMsQ0FBQztZQUVELE1BQU0sQ0FBQyxRQUFRLEdBQUYsQ0FBQztnQkFDVnVCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQVM7Z0JBQ3JCQyxvQkFBb0IsQ0FBQ1gsR0FBRztnQkFDeEJoRCxTQUFRLENBQUM0RCxPQUFPO1lBQ3BCLENBQUM7UUFFTCxDQUFDO0lBQ0wsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVMN0UsZ0RBQVMsQ0FBQyxRQUFRLEdBQUYsQ0FBQztRQUNiNEMsTUFBTSxDQUFDa0MsZ0JBQWdCLENBQUMsQ0FBUSxTQUFFL0Msa0JBQWtCLEVBQUUsS0FBSztRQUMzRCxNQUFNLENBQUMsUUFBUSxHQUFGLENBQUM7WUFDWmEsTUFBTSxDQUFDbUMsbUJBQW1CLENBQUMsQ0FBUSxTQUFFaEQsa0JBQWtCLEVBQUUsS0FBSztRQUNoRSxDQUFDO0lBQ0gsQ0FBQyxFQUFFLENBQUNkO1FBQUFBLFFBQVE7UUFBRWMsa0JBQWtCO0lBQUEsQ0FBQztJQUVqQyxNQUFNLHNFQUNIeEIsK0RBQWM7UUFBQ3lFLEdBQUcsRUFBRWxFLFlBQVk7Ozs7OztrQkFBR0MsT0FBTyx5RUFBS1QsNkRBQVk7Ozs7Ozs7O0FBRWhFLENBQUM7R0FwSENPLFVBQVU7S0FBVkEsVUFBVTtBQXNIWiwrREFBZUEsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3ZveGVsLWdob3N0LmpzPzUzNTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSdcclxuaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzJ1xyXG5pbXBvcnQgeyBsb2FkR0xURk1vZGVsIH0gZnJvbSBcIi4uL2xpYnMvbW9kZWxcIjtcclxuaW1wb3J0IHsgR2hvc3RTcGlubmVyLCBHaG9zdENvbnRhaW5lciB9IGZyb20gXCIuL3ZveGVsLWdob3N0LWxvYWRlclwiO1xyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZWFzZU91dENpcmMoeCkge1xyXG4gICAgcmV0dXJuIE1hdGguc3FydCgxIC0gTWF0aC5wb3coeCAtIDEsIDQpKVxyXG59XHJcblxyXG5jb25zdCBWb3hlbEdob3N0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcmVmQ29udGFpbmVyID0gdXNlUmVmKClcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgICBjb25zdCBbcmVuZGVyZXIsIHNldFJlbmRlcmVyXSA9IHVzZVN0YXRlKClcclxuICAgIGNvbnN0IFtfY2FtZXJhLCBzZXRDYW1lcmFdID0gdXNlU3RhdGUoKVxyXG4gICAgY29uc3QgW3RhcmdldF0gPSB1c2VTdGF0ZShuZXcgVEhSRUUuVmVjdG9yMygtMC41LCAxLjIsIDApKVxyXG4gICAgY29uc3QgW2luaXRpYWxDYW1lcmFQb3NpdGlvbl0gPSB1c2VTdGF0ZShcclxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMyhcclxuICAgICAgICAgICAgMjAgKiBNYXRoLnNpbigwLjIgKiBNYXRoLlBJKSxcclxuICAgICAgICAgICAgMTAsXHJcbiAgICAgICAgICAgIDIwICogTWF0aC5jb3MoMC4yICogTWF0aC5QSSlcclxuICAgICAgICApXHJcbiAgICApXHJcblxyXG4gICAgY29uc3QgW3NjZW5lXSA9IHVzZVN0YXRlKG5ldyBUSFJFRS5TY2VuZSgpKVxyXG4gICAgY29uc3QgW19jb250cm9scywgc2V0Q29udHJvbHNdID0gdXNlU3RhdGUoKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVdpbmRvd1Jlc2l6ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBjb25zdCB7IGN1cnJlbnQ6IGNvbnRhaW5lciB9ID0gcmVmQ29udGFpbmVyXHJcbiAgICAgICAgaWYgKGNvbnRhaW5lciAmJiByZW5kZXJlcikge1xyXG4gICAgICAgICAgY29uc3Qgc2NXID0gY29udGFpbmVyLmNsaWVudFdpZHRoXHJcbiAgICAgICAgICBjb25zdCBzY0ggPSBjb250YWluZXIuY2xpZW50SGVpZ2h0XHJcbiAgICBcclxuICAgICAgICAgIHJlbmRlcmVyLnNldFNpemUoc2NXLCBzY0gpXHJcbiAgICAgICAgfVxyXG4gICAgICB9LCBbcmVuZGVyZXJdKVxyXG5cclxuICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwcyAqL1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCB7IGN1cnJlbnQ6IGNvbnRhaW5lcn0gPSByZWZDb250YWluZXJcclxuICAgICAgICBpZiAoY29udGFpbmVyICYmICFyZW5kZXJlcikge1xyXG4gICAgICAgICAgICBjb25zdCBzY1cgPSBjb250YWluZXIuY2xpZW50V2lkaHRcclxuICAgICAgICAgICAgY29uc3Qgc2NIID0gY29udGFpbmVyLmNsaWVudEhlaWdodFxyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7XHJcbiAgICAgICAgICAgICAgICBhbnRpYWxpYXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhbHBoYTogdHJ1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKVxyXG4gICAgICAgICAgICByZW5kZXJlci5zZXRTaXplKHNjVywgc2NIKVxyXG4gICAgICAgICAgICByZW5kZXJlci5vdXRwdXRFbmNvZGluZyA9IFRIUkVFLnNSR0JFbmNvZGluZ1xyXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyZXIuZG9tRWxlbWVudClcclxuICAgICAgICAgICAgc2V0UmVuZGVyZXIocmVuZGVyZXIpXHJcblxyXG4gICAgICAgICAgICAvLyA2NDAgLT4gMjQwXHJcbiAgICAgICAgICAgIC8vIDggLT4gNlxyXG4gICAgICAgICAgICBjb25zdCBzY2FsZSA9IHNjSCAqIDAuMDA1ICsgNC44XHJcbiAgICAgICAgICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEoXHJcbiAgICAgICAgICAgICAgICAtc2NhbGUsXHJcbiAgICAgICAgICAgICAgICBzY2FsZSxcclxuICAgICAgICAgICAgICAgIHNjYWxlLFxyXG4gICAgICAgICAgICAgICAgLXNjYWxlLFxyXG4gICAgICAgICAgICAgICAgMC4wMSxcclxuICAgICAgICAgICAgICAgIDUwMDAwXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLmNvcHkoaW5pdGlhbENhbWVyYVBvc2l0aW9uKVxyXG4gICAgICAgICAgICBjYW1lcmEubG9va0F0KHRhcmdldClcclxuICAgICAgICAgICAgc2V0Q2FtZXJhKGNhbWVyYSlcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFtYmllbnRMaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHhjY2NjY2MsIDEpXHJcbiAgICAgICAgICAgIHNjZW5lLmFkZChhbWJpZW50TGlnaHQpXHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb250cm9scyA9IG5ldyBPcmJpdENvbnRyb2xzIChjYW1lcmEsIHJlbmRlcmVyLmRvbUVsZW1lbnQpXHJcbiAgICAgICAgICAgIGNvbnRyb2xzLmF1dG9Sb3RhdGUgPSB0cnVlXHJcbiAgICAgICAgICAgIGNvbnRyb2xzLnRhcmdldCA9IHRhcmdldFxyXG4gICAgICAgICAgICBzZXRDb250cm9scyhjb250cm9scylcclxuXHJcbiAgICAgICAgICAgIGxvYWRHTFRGTW9kZWwoc2NlbmUsICcuL2dob3N0L3NhZGdob3N0LmdsYicsIHtcclxuICAgICAgICAgICAgICAgIHJlY2VpdmVTaGFkb3c6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2FzdFNoYWRvdzogZmFsc2VcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRlKClcclxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBsZXQgcmVxID0gbnVsbFxyXG4gICAgICAgICAgICBsZXQgZnJhbWUgPSAwXHJcbiAgICAgICAgICAgIGNvbnN0IGFuaW1hdGUgID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVxID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpXHJcblxyXG4gICAgICAgICAgICAgICAgZnJhbWUgPSBmcmFtZSA8PSAxMDAgPyBmcmFtZSArIDEgOiBmcmFtZVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKGZyYW1lIDw9IDEwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHAgPSBpbml0aWFsQ2FtZXJhUG9zaXRpb25cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3RTcGVlZCA9IC1lYXNlT3V0Q2lyYyhmcmFtZSAvIDEyMCkgKiBNYXRoLlBJICogMjBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnkgPSAxMFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi54ID0gcC54ICogTWF0aC5jb3Mocm90U3BlZWQpICsgcC56ICogTWF0aC5zaW4ocm90U3BlZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnogPSBwLnogKiBNYXRoLmNvcyhyb3RTcGVlZCkgLSBwLnggKiBNYXRoLnNpbihyb3RTcGVlZClcclxuICAgICAgICAgICAgICAgICAgICBjYW1lcmEubG9va0F0KHRhcmdldClcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbHMudXBkYXRlKClcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1bm1vdW50JylcclxuICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcSlcclxuICAgICAgICAgICAgICAgIHJlbmRlcmVyLmRpc3Bvc2UoKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVdpbmRvd1Jlc2l6ZSwgZmFsc2UpXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVXaW5kb3dSZXNpemUsIGZhbHNlKVxyXG4gICAgICAgIH1cclxuICAgICAgfSwgW3JlbmRlcmVyLCBoYW5kbGVXaW5kb3dSZXNpemVdKVxyXG4gICAgXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPEdob3N0Q29udGFpbmVyIHJlZj17cmVmQ29udGFpbmVyfT57bG9hZGluZyAmJiA8R2hvc3RTcGlubmVyIC8+fTwvR2hvc3RDb250YWluZXI+XHJcbiAgICAgIClcclxuICAgIH1cclxuICAgIFxyXG4gICAgZXhwb3J0IGRlZmF1bHQgVm94ZWxHaG9zdCJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZUNhbGxiYWNrIiwiVEhSRUUiLCJPcmJpdENvbnRyb2xzIiwibG9hZEdMVEZNb2RlbCIsIkdob3N0U3Bpbm5lciIsIkdob3N0Q29udGFpbmVyIiwiZWFzZU91dENpcmMiLCJ4IiwiTWF0aCIsInNxcnQiLCJwb3ciLCJWb3hlbEdob3N0IiwicmVmQ29udGFpbmVyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyZW5kZXJlciIsInNldFJlbmRlcmVyIiwiX2NhbWVyYSIsInNldENhbWVyYSIsIlZlY3RvcjMiLCJ0YXJnZXQiLCJzaW4iLCJQSSIsImNvcyIsImluaXRpYWxDYW1lcmFQb3NpdGlvbiIsIlNjZW5lIiwic2NlbmUiLCJfY29udHJvbHMiLCJzZXRDb250cm9scyIsImhhbmRsZVdpbmRvd1Jlc2l6ZSIsImNvbnRhaW5lciIsImN1cnJlbnQiLCJzY1ciLCJjbGllbnRXaWR0aCIsInNjSCIsImNsaWVudEhlaWdodCIsInNldFNpemUiLCJjbGllbnRXaWRodCIsIldlYkdMUmVuZGVyZXIiLCJhbnRpYWxpYXMiLCJhbHBoYSIsInNldFBpeGVsUmF0aW8iLCJ3aW5kb3ciLCJkZXZpY2VQaXhlbFJhdGlvIiwib3V0cHV0RW5jb2RpbmciLCJzUkdCRW5jb2RpbmciLCJhcHBlbmRDaGlsZCIsImRvbUVsZW1lbnQiLCJzY2FsZSIsImNhbWVyYSIsIk9ydGhvZ3JhcGhpY0NhbWVyYSIsInBvc2l0aW9uIiwiY29weSIsImxvb2tBdCIsImFtYmllbnRMaWdodCIsIkFtYmllbnRMaWdodCIsImFkZCIsImNvbnRyb2xzIiwiYXV0b1JvdGF0ZSIsInJlY2VpdmVTaGFkb3ciLCJjYXN0U2hhZG93IiwidGhlbiIsImFuaW1hdGUiLCJyZXEiLCJmcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInAiLCJyb3RTcGVlZCIsInkiLCJ6IiwidXBkYXRlIiwicmVuZGVyIiwiY29uc29sZSIsImxvZyIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiZGlzcG9zZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/voxel-ghost.js\n");

/***/ })

});