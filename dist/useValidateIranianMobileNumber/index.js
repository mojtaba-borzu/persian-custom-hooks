"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useValidateIranianMobileNumber = void 0;
// libs
var react_1 = require("react");
var useValidateIranianMobileNumber = function () {
    // states
    var _a = (0, react_1.useState)(null), isValid = _a[0], setIsValid = _a[1];
    var validateIranianMobileNumber = function (number) {
        var regex = /^09[0-9]{9}$/;
        setIsValid(regex.test(number));
    };
    return { isValid: isValid, validateIranianMobileNumber: validateIranianMobileNumber };
};
exports.useValidateIranianMobileNumber = useValidateIranianMobileNumber;
