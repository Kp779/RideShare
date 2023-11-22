"use strict";
exports.id = 200;
exports.ids = [200];
exports.modules = {

/***/ 2200:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ about)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(6981);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./assets/images/full-img.png
/* harmony default export */ const full_img = ({"src":"/_next/static/media/full-img.b34d51e4.png","height":300,"width":400,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAFVBMVEX5+Pfz8/Hf6e39/f3o7O3g4+LG3/S0ZIdqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKklEQVR4nBXKsREAMAyDQJDl7D9yzgXVw8BcULUF0mxWMNkEzvLeXSrMBwm+AFv32HLUAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./pages/homepage/about.jsx





const About = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Container, {
            className: "mt-5 bg-1",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Row, {
                    className: " text-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            children: "About"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("hr", {})
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Row, {
                    className: "mt-5",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                            className: "col-5",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                className: "img-fluid",
                                src: full_img,
                                alt: ""
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Col, {
                            className: "col-7 mt-5",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    children: "About"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo tempore distinctio, quisquam dicta harum nisi ducimus molestiae dolor dolorum magnam ipsa debitis est nostrum facilis ea unde non officia corrupti! Nemo neque dignissimos architecto culpa mollitia cum molestias, totam eligendi! Perferendis voluptate eum temporibus ut! Ratione a officia libero, quis dolore minima pariatur voluptates hic quidem enim inventore nulla alias!"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const about = (About);


/***/ })

};
;