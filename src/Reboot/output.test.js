import {
  output
} from './output'

describe('Reboot', () => {
  it('output', () => {
    expect(output).toEqual({
      output: {
        display: 'inline-block'
      }
    })
  })
})
