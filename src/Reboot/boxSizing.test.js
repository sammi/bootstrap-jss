import {
  boxSizing
} from './boxSizing'

describe('Reboot', () => {
  it('boxSizing', () => {
    expect(boxSizing).toEqual({
      '*,*::before,*::after': {
        boxSizing: 'border-box'
      }
    })
  })
})
