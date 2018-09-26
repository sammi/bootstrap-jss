import { msViewPort } from './msViewPort'

describe('Reboot', () => {
  // IE10+ doesn't honor `<meta name="viewport">` in some cases.
  it('msViewPort', () => {
    expect(msViewPort).toEqual({
      'at-root': {
        '-ms-viewport': {
          width: 'device-width'
        }
      }
    })
  })
})
