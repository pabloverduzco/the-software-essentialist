import { PasswordValidator } from "./index";

let passwordValidator: PasswordValidator;

beforeEach(() => {
  passwordValidator = new PasswordValidator()
})

describe('password validator', () => {
  test('should return that "Admin123" is a valid password because containts at least one digit, uppercase characters is in a valid length range', () => {
    const password = "Admin123"

    const result = passwordValidator.validate(password)
    
    expect(result.isValid).toBe(true)
    expect(result.errors).toHaveLength(0)
  })

  test('should return not uppercase characters, invalid length and no digits errors when empty value is used as password', () => {
    const password = ""

    const result = passwordValidator.validate(password)
    
    expect(result.isValid).toBe(false)
    expect(result.errors).toHaveLength(3)
    expect(result.errors).toContain("NotDigits")
    expect(result.errors).toContain("NotUppercaseCharacters")
    expect(result.errors).toContain("InvalidLength")
  })

  test('should return not uppercase characters and invalid length error when "pwd1" is used as password due a lack of uppercase characters and containing just 4 chars', () => {
    const password = "pwd1"

    const result = passwordValidator.validate(password)
    
    expect(result.isValid).toBe(false)
    expect(result.errors).toHaveLength(2)
    expect(result.errors).toContain("NotUppercaseCharacters")
    expect(result.errors).toContain("InvalidLength")
  })

  test('should return not uppercase characters error when "maxwell1_c" is used as password due a lack of uppercase characters', () => {
    const password = "maxwell1_c"

    const result = passwordValidator.validate(password)
    
    expect(result.isValid).toBe(false)
    expect(result.errors).toHaveLength(1)
    expect(result.errors).toContain("NotUppercaseCharacters")
  })

  test('should return not uppercase characters error when "maxwell1_c" is used as password due a lack of uppercase characters', () => {
    const password = "maxwell1_c"

    const result = passwordValidator.validate(password)
    
    expect(result.isValid).toBe(false)
    expect(result.errors).toHaveLength(1)
    expect(result.errors).toContain("NotUppercaseCharacters")
  })

  test('should return not digits error when "maxwellTheBe" is used as password because a lack of digits', () => {
    const password = "maxwellTheBe"
    
    const result = passwordValidator.validate(password)
    
    expect(result.isValid).toBe(false)
    expect(result.errors).toHaveLength(1)
    expect(result.errors).toContain("NotDigits")
  })

  test('should return invalid length error when "thePhysical1234567" is used as password due the exceeding characters length', () => {
    const password = "thePhysical1234567"
    
    const result = passwordValidator.validate(password)
    
    expect(result.isValid).toBe(false)
    expect(result.errors).toHaveLength(1)
    expect(result.errors).toContain("InvalidLength")
  })
})


