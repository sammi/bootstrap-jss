import { summary } from './summary'

describe('Reboot', () => {
  it('summary', () => {
    expect(summary).toEqual({
      '@global': {
        summary: {
          display: 'list-item',
          cursor: 'pointer'
        }
      }
    })
  })
})
