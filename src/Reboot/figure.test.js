import {
  figure
} from './figure'

describe('Reboot', () => {
  it('figure', () => {
    expect(figure).toEqual({
      figure: {
        // Apply a consistent margin strategy (matches our type styles).
        margin: ['0', '0', '1rem']
      }
    })
  })
})
