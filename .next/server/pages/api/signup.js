"use strict";
(() => {
var exports = {};
exports.id = 964;
exports.ids = [964];
exports.modules = {

/***/ 1982:
/***/ ((module) => {

module.exports = require("ethers");

/***/ }),

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

/***/ 947:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_connectDB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4271);
/* harmony import */ var _models_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4879);



(0,_utils_connectDB__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
async function handler(req, res) {
    if (req.method === "POST") {
        try {
            console.log("Trying");
            const { name , email  } = req.body;
            const existingUser = await _models_schema__WEBPACK_IMPORTED_MODULE_2__/* ["default"].findOne */ .Z.findOne({
                email
            });
            if (existingUser) {
                return res.status(400).json({
                    message: "Email already registered"
                });
            }
            // Generate a new Ethereum wallet
            const wallet = ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.Wallet.createRandom();
            // Get the address and private key of the new wallet
            const blockchainAddress = wallet.address;
            const blockchainPrivateKey = wallet.privateKey;
            console.log(blockchainAddress);
            // Save user data in MongoDB      
            const newUser = new _models_schema__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z({
                name,
                email,
                blockchainAddress
            });
            await newUser.save();
            res.status(200).json({
                message: blockchainPrivateKey
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


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
var __webpack_exports__ = (__webpack_exec__(947));
module.exports = __webpack_exports__;

})();