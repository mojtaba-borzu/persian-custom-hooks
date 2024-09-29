// libs
import { useState } from "react"

export const useExtractBankCardNumber = () => {
  // states
  const [cardNumber, setCardNumber] = useState<string | null>(null)

  const convertPersianToEnglish = (str: string): string => {
    const persianNumbers = [
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
    ]
    const englishNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

    for (let i = 0; i < 10; i++) {
      str = str.replace(persianNumbers[i], englishNumbers[i])
    }
    return str
  }

  const extractBankCardNumber = async (text: string) => {
    if (!text) return null

    const cardNumberRegex = /(?:\d|[۰-۹]){16}/g

    const match = text?.match(cardNumberRegex)

    if (match && match?.length > 0) {
      let extractedNumber = match?.[0]

      extractedNumber = convertPersianToEnglish(extractedNumber)

      setCardNumber(extractedNumber)
    } else {
      setCardNumber(null)
    }
  }

  return { cardNumber, extractBankCardNumber }
}
