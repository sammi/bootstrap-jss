import { output } from './output'

describe('Reboot', () => {
  it('output', () => {
    expect(output).toEqual({
      '@global': {
        output: {
          display: 'inline-block'
        }
      }
    })
  })
})
