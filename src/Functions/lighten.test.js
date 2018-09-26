import { lighten } from './lighten'

describe('lighten', () => {
  it('lighten', () => {
    expect(lighten('#FFF', '0%')).toEqual('#ffffff')
    expect(lighten('#000', '35%')).toEqual('#595959')
  })
})
