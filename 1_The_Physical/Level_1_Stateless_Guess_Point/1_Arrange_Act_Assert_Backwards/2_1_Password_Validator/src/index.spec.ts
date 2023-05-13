import { PasswordValidator } from "./index";

describe('password validator', () => {
  test('should return invalid length error when "thePhysical1234567" is used as password', () => {
    const password = "thePhysical1234567"
    
    const passwordValidator = new PasswordValidator();
    const result = passwordValidator.validate(password)
    
    expect(result.isValid).toBe(false)
    expect(result.errors).toContain("InvalidLength")
  })
})


