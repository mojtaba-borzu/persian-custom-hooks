"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useConvertPersianToEnglish = void 0;
// states
var react_1 = require("react");
var useConvertPersianToEnglish = function () {
    var _a = (0, react_1.useState)(""), convertedStr = _a[0], setConvertedStr = _a[1];
    var convertPersianToEnglish = function (str) {
        var persianNumbers = [
            /۰/g,
            /۱/g,
            /۲/g,
            /۳/g,
            /۴/g,
            /۵/g,
            /۶/g,
            /۷/g,
            /۸/g,
            /۹/g,
        ];
        var englishNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        for (var i = 0; i < 10; i++) {
            str = str.replace(persianNumbers[i], englishNumbers[i]);
        }
        setConvertedStr(str);
    };
    return { convertedStr: convertedStr, convertPersianToEnglish: convertPersianToEnglish };
};
exports.useConvertPersianToEnglish = useConvertPersianToEnglish;
