"use strict";
(() => {
var exports = {};
exports.id = 353;
exports.ids = [353];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 4879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    blockchainAddress: {
        type: String,
        required: true
    }
});
const User = mongoose__WEBPACK_IMPORTED_MODULE_0__.mongoose.models.User || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)("User", userSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);


/***/ }),

/***/ 1058:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ nonce)
});

;// CONCATENATED MODULE: external "crypto"
const external_crypto_namespaceObject = require("crypto");
var external_crypto_default = /*#__PURE__*/__webpack_require__.n(external_crypto_namespaceObject);
// EXTERNAL MODULE: ./utils/connectDB.js
var connectDB = __webpack_require__(4271);
// EXTERNAL MODULE: ./models/schema.js
var schema = __webpack_require__(4879);
;// CONCATENATED MODULE: ./pages/api/nonce.js



(0,connectDB/* default */.Z)();
async function handler(req, res) {
    if (req.method === "POST") {
        const { address  } = req.body;
        const stringAddress = address.toString();
        try {
            const addressExists = await schema/* default.findOne */.Z.findOne({
                blockchainAddress: stringAddress
            });
            console.log(addressExists);
            if (!addressExists) {
                return res.status(400).json({
                    message: "Please register first"
                });
            }
            const nonce = external_crypto_default().randomBytes(32).toString("hex");
            res.status(200).json({
                message: nonce
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: "An error occurred"
            });
        }
    } else {
        res.status(405).json({
            message: "Method not allowed"
        });
    }
}
/* harmony default export */ const nonce = (handler);


/***/ }),

/***/ 4271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const mongoose = __webpack_require__(1185);
const uri = "mongodb+srv://admin:admin1234@cluster0.cd5oxal.mongodb.net/?retryWrites=true&w=majority";
const connectDB = async ()=>{
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB Connected");
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1058));
module.exports = __webpack_exports__;

})();