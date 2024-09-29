// libs
import { useState } from "react"

export const useValidateBankCardNumber = () => {
  // states
  const [isValid, setIsValid] = useState<boolean | null>(null)

  const validateBankCardNumber = (cardNumber: string | number): void => {
    let cardStr = cardNumber.toString().trim()

    if (cardStr.length !== 16) {
      setIsValid(false)
      return
    }

    let sum = 0
    let shouldDouble = false

    for (let i = cardStr.length - 1; i >= 0; i--) {
      let digit = parseInt(cardStr[i])

      if (shouldDouble) {
        digit *= 2
        if (digit > 9) {
          digit -= 9
        }
      }

      sum += digit
      shouldDouble = !shouldDouble
    }

    setIsValid(sum % 10 === 0)
  }

  return { isValid, validateBankCardNumber }
}
