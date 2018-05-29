import {
  summary
} from './summary'

describe('Reboot', () => {
  it('summary', () => {
    expect(summary).toEqual({
      summary: {
        display: 'list-item',
        cursor: 'pointer'
      }
    })
  })
})
