import { paragraphMarginBottom } from '../Variables/Paragraphs'

import { paragraphMargin } from './paragraphMargin'

describe('Reboot', () => {
  it('paragraphMargin', () => {
    expect(paragraphMargin).toEqual({
      '@global': {
        p: {
          marginTop: 0,
          marginBottom: paragraphMarginBottom
        }
      }
    })
  })
})
