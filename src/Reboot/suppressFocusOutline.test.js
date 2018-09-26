import { suppressFocusOutline } from './suppressFocusOutline'

describe('Reboot', () => {
  // Suppress the focus outline on elements that cannot be accessed via keyboard.
  // This prevents an unwanted focus outline from appearing around elements that
  // might still respond to pointer events.
  //
  // Credit: https://github.com/suitcss/base
  it('suppressFocusOutline', () => {
    expect(suppressFocusOutline).toEqual({
      '[tabindex="-1"]:focus': {
        outline: '0 !important'
      }
    })
  })
})
