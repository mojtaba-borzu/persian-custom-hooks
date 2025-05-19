"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useIranianNationalCodeValidation = void 0;
var react_1 = require("react");
var useIranianNationalCodeValidation = function () {
    var _a = (0, react_1.useState)(null), isValid = _a[0], setIsValid = _a[1];
    var validateNationalCode = function (code) {
        if (!/^\d{10}$/.test(code)) {
            setIsValid(false);
            return false;
        }
        var digits = code.split("").map(Number);
        var allDigitsSame = digits.every(function (digit) { return digit === digits[0]; });
        if (allDigitsSame) {
            setIsValid(false);
            return false;
        }
        var sum = digits[0] * 10 +
            digits[1] * 9 +
            digits[2] * 8 +
            digits[3] * 7 +
            digits[4] * 6 +
            digits[5] * 5 +
            digits[6] * 4 +
            digits[7] * 3 +
            digits[8] * 2;
        var remainder = sum % 11;
        var controlDigit = digits[9];
        var result = remainder < 2
            ? controlDigit === remainder
            : controlDigit === 11 - remainder;
        setIsValid(result);
        return result;
    };
    return { isValid: isValid, validateNationalCode: validateNationalCode };
};
exports.useIranianNationalCodeValidation = useIranianNationalCodeValidation;
