import { address } from './address'

describe('Reboot', () => {
  it('address', () => {
    expect(address).toEqual({
      '@global': {
        address: {
          marginBottom: '1rem',
          fontStyle: 'normal',
          lineHeight: 'inherit'
        }
      }
    })
  })
})
