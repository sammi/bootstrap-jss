import { suppressFocusOutline } from './suppressFocusOutline'

describe('Reboot', () => {
  it('suppressFocusOutline', () => {
    expect(suppressFocusOutline).toEqual({
      '[tabindex="-1"]:focus': {
        outline: '0 !important'
      }
    })
  })
})
