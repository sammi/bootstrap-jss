import { dfn } from './dfn'

describe('Reboot', () => {
  it('dfn', () => {
    expect(dfn).toEqual({
      '@global': {
        dfn: {
          fontStyle: 'italic'
        }
      }
    })
  })
})
