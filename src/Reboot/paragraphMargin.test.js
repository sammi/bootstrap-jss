import { paragraphMarginBottom } from '../Variables/Paragraphs'

import { paragraphMargin } from './paragraphMargin'

describe('Reboot', () => {
  it('paragraphMargin', () => {
    expect(paragraphMargin).toEqual({
      p: {
        marginTop: 0,
        marginBottom: paragraphMarginBottom
      }
    })
  })
})
