import { blockquote } from './blockquote'

describe('Reboot', () => {
  it('blockquote', () => {
    expect(blockquote).toEqual({
      '@global': {
        blockquote: {
          margin: ['0', '0', '1rem']
        }
      }
    })
  })
})
