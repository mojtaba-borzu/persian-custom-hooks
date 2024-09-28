"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFormatBankCardNumber = void 0;
// libs
var react_1 = require("react");
var useFormatBankCardNumber = function () {
    // states
    var _a = (0, react_1.useState)(""), formattedValue = _a[0], setFormattedValue = _a[1];
    // function replace new format
    var formatBankCardNumber = function (value) {
        // cleaner
        var cleanValue = value === null || value === void 0 ? void 0 : value.replace(/\D+/g, "");
        // set formatter
        var formatted = cleanValue === null || cleanValue === void 0 ? void 0 : cleanValue.replace(/(\d{4})(?=\d)/g, "$1-");
        setFormattedValue(formatted);
    };
    return { formattedValue: formattedValue, formatBankCardNumber: formatBankCardNumber };
};
exports.useFormatBankCardNumber = useFormatBankCardNumber;
