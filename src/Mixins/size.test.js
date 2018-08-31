import { size } from './size'

describe('Sizing shortcuts', () => {
  it('size', () => {
    const width = '10px'
    expect(size(width)).toEqual({
      width: width,
      height: width
    })
    const height = '20px'
    expect(size(width, height)).toEqual({
      width: width,
      height: height
    })
  })
})
