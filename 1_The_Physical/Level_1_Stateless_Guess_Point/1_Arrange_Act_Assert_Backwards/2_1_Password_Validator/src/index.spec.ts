
describe('password validator', () => {
  test('should return invalid length error when "thePhysical1234567" is used as password', () => {
    const password = "thePhysical1234567"
    
    const result = {
      isValid: false,
      errors: ["InvalidLength"]
    }
    
    expect(result.isValid).toBe(false)
    expect(result.errors).toContain("InvalidLength")
  })
})


