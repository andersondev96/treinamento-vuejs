import {
  validateEmptyAndEmail,
  validateEmptyAndLength3
} from './validators'

describe('Validators utils', () => {
  it('Should give an error with empty payload', () => {
    expect(validateEmptyAndLength3()).toBe('*Este campo é obrigatório')
  })

  it('Should give an error with less then 3 character payload', () => {
    expect(validateEmptyAndLength3('12')).toBe('*Este campo precisa de no mínimo 3 caracteres')
  })

  it('should returns the when pass a correct param', () => {
    expect(validateEmptyAndLength3('1234')).toBe(true)
  })

  it('Should give an error with empty payload', () => {
    expect(validateEmptyAndEmail()).toBe('*Este campo é obrigatório')
  })

  it('should give an error with a invalid param', () => {
    expect(validateEmptyAndEmail('myemail@')).toBe('*Este campo precisa ser um e-mail')
  })

  it('Should returns true when pass a correct param', () => {
    expect(validateEmptyAndEmail('igor@igor.me')).toBe(true)
  })
})
