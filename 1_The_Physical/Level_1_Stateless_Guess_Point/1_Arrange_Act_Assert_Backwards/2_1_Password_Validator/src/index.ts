export class PasswordValidator {

    public validate(password: string): {isValid: boolean, errors: Array<string> | null} {
        return {
            isValid: false,
            errors: ["InvalidLength"]
        }
    }
}