// lins
import { useState } from "react"

// inter
interface UseIranianNationalCodeValidation {
  isValid: boolean | null
  validateNationalCode: (code: string) => void
}

export const useIranianNationalCodeValidation =
  (): UseIranianNationalCodeValidation => {
    //states
    const [isValid, setIsValid] = useState<boolean | null>(null)

    // function validation
    const validateNationalCode = (code: string): void => {
      if (!/^\d{10}$/.test(code)) {
        setIsValid(false)
        return
      }

      const digits: number[] = code.split("").map(Number)

      const allDigitsSame: boolean = digits.every(
        (digit) => digit === digits[0]
      )
      if (allDigitsSame) {
        setIsValid(false)
        return
      }

      const sum: number =
        digits[0] * 10 +
        digits[1] * 9 +
        digits[2] * 8 +
        digits[3] * 7 +
        digits[4] * 6 +
        digits[5] * 5 +
        digits[6] * 4 +
        digits[7] * 3 +
        digits[8] * 2

      const remainder: number = sum % 11

      const controlDigit: number = digits[9]
      if (remainder < 2) {
        setIsValid(controlDigit === remainder)
      } else {
        setIsValid(controlDigit === 11 - remainder)
      }
    }

    return { isValid, validateNationalCode }
  }
