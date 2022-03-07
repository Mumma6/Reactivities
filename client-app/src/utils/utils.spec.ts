import { capitilizeFirstChar } from './utils'

describe('Utils', () => {
  it('capitilize first letter', () => {
    const string = 'hello'
    const res = capitilizeFirstChar(string)
    expect(res).toBe('Hello')
  })
})