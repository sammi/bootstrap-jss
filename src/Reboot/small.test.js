import { small } from './small'

describe('Reboot', () => {
  it('small', () => {
    expect(small).toEqual({
      '@global': {
        small: {
          fontSize: '80%'
        }
      }
    })
  })
})
