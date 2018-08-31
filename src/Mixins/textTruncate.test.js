import { textTruncate } from './textTruncate'

// Text truncate
// Requires inline-block or block for proper styling
describe('textTruncate', () => {
  it('textTruncate', () => {
    expect(textTruncate).toEqual({
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    })
  })
})
