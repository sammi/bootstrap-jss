import {
  blockquote
} from './blockquote'

describe('Reboot', () => {
  it('blockquote', () => {
    expect(blockquote).toEqual({
      blockquote: {
        margin: ['0', '0', '1rem']
      }
    })
  })
})
