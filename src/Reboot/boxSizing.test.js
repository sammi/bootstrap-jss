import { boxSizing } from './boxSizing'

describe('Reboot', () => {
  it('boxSizing', () => {
    expect(boxSizing).toEqual({
      '@global': {
        '*,*::before,*::after': {
          boxSizing: 'border-box'
        }
      }
    })
  })
})
