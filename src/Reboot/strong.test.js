import {
  strong
} from './strong'

describe('Reboot', () => {
  it('strong', () => {
    expect(strong).toEqual({
      'b,strong': {
        fontWeight: 'bolder'
      }
    })
  })
})
