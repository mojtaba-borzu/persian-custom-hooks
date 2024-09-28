interface UseIranianNationalCodeValidation {
    isValid: boolean | null;
    validateNationalCode: (code: string) => void;
}
export declare const useIranianNationalCodeValidation: () => UseIranianNationalCodeValidation;
export {};
