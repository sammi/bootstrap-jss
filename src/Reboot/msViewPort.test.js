import { msViewPort } from './msViewPort'

describe('Reboot', () => {
  it('msViewPort', () => {
    expect(msViewPort).toEqual({
      '@global': {
        'at-root': {
          '-ms-viewport': {
            width: 'device-width'
          }
        }
      }
    })
  })
})
