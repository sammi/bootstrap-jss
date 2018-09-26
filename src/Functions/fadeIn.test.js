import { fadeIn } from './fadeIn'

describe('fadeIn', () => {
  it('fadeIn', () => {
    expect(fadeIn('#0FF', 0.1)).toEqual('rgba(0, 255, 255, 0.9)')
  })
})
