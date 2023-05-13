export class PasswordValidator {

    private rules = [
        {
            "regex": /[A-Z]/g,
            "message": "NotUppercaseCharacters",
        },
        {
            "regex": /^.{5,15}$/g,
            "message": "InvalidLength"
        },
        {
            "regex": /[0-9]/g,
            "message": "NotDigits"
        }
    ]

    public validate(password: string): {isValid: boolean, errors: Array<string> | null} {
        const errors = []

        for (let i = 0; i < this.rules.length; i++) {

            if (password.match(this.rules[i].regex)) continue;

            errors.push(this.rules[i].message)
        } 
        
        return {
            isValid: errors.length == 0,
            errors: errors
        }
    }
}