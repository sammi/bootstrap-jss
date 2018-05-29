import {
  template
} from './template'

describe('Reboot', () => {
  it('template', () => {
    expect(template).toEqual({
      template: {
        display: 'none'
      }
    })
  })
})
