import { strong } from './strong'

describe('Reboot', () => {
  it('strong', () => {
    expect(strong).toEqual({
      '@global': {
        'b,strong': {
          fontWeight: 'bolder'
        }
      }
    })
  })
})
