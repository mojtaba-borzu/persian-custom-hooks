// libs
import { useState } from "react"

export const useFormatBankCardNumber = () => {
  // states
  const [formattedValue, setFormattedValue] = useState("")

  // function replace new format
  const formatBankCardNumber = (value: string) => {
    // cleaner
    const cleanValue = value?.replace(/\D+/g, "")
    // set formatter
    const formatted = cleanValue?.replace(/(\d{4})(?=\d)/g, "$1-")

    setFormattedValue(formatted)
  }

  return { formattedValue, formatBankCardNumber }
}
