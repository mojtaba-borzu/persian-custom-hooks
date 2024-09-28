# Persian Custom Hooks

Persian Custom Hooks is a collection of custom React hooks designed for Persian-specific needs, such as converting Persian numbers to English, formatting bank card numbers, and validating Iranian national codes.

Prerequisites
`React 16.8 or higher (due to the use of hooks)`
Familiarity with TypeScript (optional but recommended)

## Installation

Use npm or yarn to install Persian Custom Hooks.

```bash
npm install persian-custom-hooks
```

```bash
yarn add persian-custom-hooks
```

1. useConvertPersianToEnglish

- This hook is used to convert Persian numbers to English.

```
const { englishValue, convertPersianToEnglish } = useConvertPersianToEnglish();
```

2. useFormatBankCardNumber

- This hook is used to format bank card numbers into a readable format.

```
const { formattedValue, formatBankCardNumber } = useFormatBankCardNumber();
```

3. useIranianNationalCodeValidation

- This hook is used to validate Iranian national codes.

```
const { isValid, validateNationalCode } = useIranianNationalCodeValidation();
```

## License

This project is released under the MIT License. For more information, see the LICENSE file.

## Contact Us

- Email: mojtaba.borzu69@gmail.com
- GitHub: https://github.com/mojtaba-borzu/persian-custom-hooks

This package is under development and we are trying to add the most useful functions
