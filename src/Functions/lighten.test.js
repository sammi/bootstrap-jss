import {lighten} from './lighten'

describe('lighten', () => {
  it('lighten', () => {
    expect(lighten('#FFF', '0%')).toEqual('#FFFFFF')
    expect(lighten('#AAbBCD', '10%')).toEqual('#C2CEDB')
  })
})
