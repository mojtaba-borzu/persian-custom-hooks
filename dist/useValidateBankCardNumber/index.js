"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useValidateBankCardNumber = void 0;
// libs
var react_1 = require("react");
var useValidateBankCardNumber = function () {
    // states
    var _a = (0, react_1.useState)(null), isValid = _a[0], setIsValid = _a[1];
    var validateBankCardNumber = function (cardNumber) {
        var cardStr = cardNumber.toString().trim();
        if (cardStr.length !== 16) {
            setIsValid(false);
            return;
        }
        var sum = 0;
        var shouldDouble = false;
        for (var i = cardStr.length - 1; i >= 0; i--) {
            var digit = parseInt(cardStr[i]);
            if (shouldDouble) {
                digit *= 2;
                if (digit > 9) {
                    digit -= 9;
                }
            }
            sum += digit;
            shouldDouble = !shouldDouble;
        }
        setIsValid(sum % 10 === 0);
    };
    return { isValid: isValid, validateBankCardNumber: validateBankCardNumber };
};
exports.useValidateBankCardNumber = useValidateBankCardNumber;
