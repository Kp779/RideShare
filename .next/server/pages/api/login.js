"use strict";
(() => {
var exports = {};
exports.id = 994;
exports.ids = [994];
exports.modules = {

/***/ 1982:
/***/ ((module) => {

module.exports = require("ethers");

/***/ }),

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 1694:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);


const secretKey = process.env.secretKey;
async function handler(req, res) {
    console.log(req.body);
    const { signedMessage , nonce , address  } = req.body;
    const recoveredAddress = ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.utils.verifyMessage(nonce, signedMessage);
    console.log(recoveredAddress);
    if (recoveredAddress !== address) {
        return res.status(401).json({
            error: "Invalid signature"
        });
    }
    // Generate the JWT token
    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().sign({
        address
    }, secretKey, {
        expiresIn: "25s"
    });
    console.log(token);
    // Send the JWT token to the frontend
    res.status(200).json({
        token
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1694));
module.exports = __webpack_exports__;

})();