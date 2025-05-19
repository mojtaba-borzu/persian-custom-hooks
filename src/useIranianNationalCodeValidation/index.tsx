import { useState } from "react"

interface UseIranianNationalCodeValidation {
  isValid: boolean | null
  validateNationalCode: (code: string) => boolean
}

export const useIranianNationalCodeValidation =
  (): UseIranianNationalCodeValidation => {
    const [isValid, setIsValid] = useState<boolean | null>(null)

    const validateNationalCode = (code: string): boolean => {
      if (!/^\d{10}$/.test(code)) {
        setIsValid(false)
        return false
      }

      const digits = code.split("").map(Number)

      const allDigitsSame = digits.every((digit) => digit === digits[0])
      if (allDigitsSame) {
        setIsValid(false)
        return false
      }

      const sum =
        digits[0] * 10 +
        digits[1] * 9 +
        digits[2] * 8 +
        digits[3] * 7 +
        digits[4] * 6 +
        digits[5] * 5 +
        digits[6] * 4 +
        digits[7] * 3 +
        digits[8] * 2

      const remainder = sum % 11
      const controlDigit = digits[9]

      const result =
        remainder < 2
          ? controlDigit === remainder
          : controlDigit === 11 - remainder

      setIsValid(result)
      return result
    }

    return { isValid, validateNationalCode }
  }
