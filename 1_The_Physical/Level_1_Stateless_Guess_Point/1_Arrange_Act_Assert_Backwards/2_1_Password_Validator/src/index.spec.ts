import { PasswordValidator } from "./index";

describe('password validator', () => {
  test('should return invalid length error when "maxwell1_c" is used as password due a lack of uppercase characters', () => {
    const password = "maxwell1_c"
    
    const passwordValidator = new PasswordValidator();
    const result = passwordValidator.validate(password)
    
    expect(result.isValid).toBe(false)
    expect(result.errors).toHaveLength(1)
    expect(result.errors).toContain("NotUppercaseCharacters")
  })

  test('should return invalid length error when "maxwellTheBe" is used as password because a lack of digits', () => {
    const password = "maxwellTheBe"
    
    const passwordValidator = new PasswordValidator();
    const result = passwordValidator.validate(password)
    
    expect(result.isValid).toBe(false)
    expect(result.errors).toHaveLength(1)
    expect(result.errors).toContain("NotDigits")
  })

  test('should return invalid length error when "thePhysical1234567" is used as password', () => {
    const password = "thePhysical1234567"
    
    const passwordValidator = new PasswordValidator();
    const result = passwordValidator.validate(password)
    
    expect(result.isValid).toBe(false)
    expect(result.errors).toHaveLength(1)
    expect(result.errors).toContain("InvalidLength")
  })
})


