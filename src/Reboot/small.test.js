import { small } from './small'

describe('Reboot', () => {
  it('small', () => {
    expect(small).toEqual({
      small: {
        fontSize: '80%'
      }
    })
  })
})
