interface UseIranianNationalCodeValidation {
    isValid: boolean | null;
    validateNationalCode: (code: string) => boolean;
}
export declare const useIranianNationalCodeValidation: () => UseIranianNationalCodeValidation;
export {};
