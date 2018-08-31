import { resizable } from './resize'

describe('Resize anything', () => {
  it('resizable by direction', () => {
    const direction = 'horizontal' // Options: horizontal, vertical, both
    expect(resizable(direction)).toEqual({
      overflow: 'auto',
      resize: direction
    })
  })
})
