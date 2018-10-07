import {
  template
} from './template'

describe('Reboot', () => {
  it('template', () => {
    expect(template).toEqual({
      '@global': {
        template: {
          display: 'none'
        }
      }
    })
  })
})
