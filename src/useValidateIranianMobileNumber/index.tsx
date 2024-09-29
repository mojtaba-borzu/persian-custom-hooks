// libs
import { useState } from "react"

export const useValidateIranianMobileNumber = () => {
  // states
  const [isValid, setIsValid] = useState<boolean | null>(null)

  const validateIranianMobileNumber = (number: string): void => {
    const regex = /^09[0-9]{9}$/
    setIsValid(regex.test(number))
  }

  return { isValid, validateIranianMobileNumber }
}
