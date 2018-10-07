import { suppressFocusOutline } from './suppressFocusOutline'

describe('Reboot', () => {
  it('suppressFocusOutline', () => {
    expect(suppressFocusOutline).toEqual({
      '@global': {
        '[tabindex="-1"]:focus': {
          outline: '0 !important'
        }
      }
    })
  })
})
