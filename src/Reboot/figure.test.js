import { figure } from './figure'

describe('Reboot', () => {
  it('figure', () => {
    expect(figure).toEqual({
      figure: {
        margin: ['0', '0', '1rem']
      }
    })
  })
})
