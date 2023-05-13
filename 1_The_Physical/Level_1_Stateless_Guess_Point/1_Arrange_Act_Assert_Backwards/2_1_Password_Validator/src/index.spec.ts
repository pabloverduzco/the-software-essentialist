import { PasswordValidator } from "./index";

let passwordValidator: PasswordValidator;

beforeEach(() => {
  passwordValidator = new PasswordValidator()
})

describe('password validator', () => {
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


