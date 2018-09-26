import { mix } from './mix'

describe('mix', () => {
  it('mix', () => {
    expect(mix('#f00', '#000', '15%')).toEqual('#260000')
    expect(mix('#f00', '#00f', '25%')).toEqual('#4000BF')
  })
})
