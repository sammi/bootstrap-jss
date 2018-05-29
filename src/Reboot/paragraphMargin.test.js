import { paragraphMarginBottom } from '../Variables/Paragraphs'

import {
  paragraphMargin
} from './paragraphMargin'

describe('Reboot', () => {
  // Reset margins on paragraphs
  //
  // Similarly, the top margin on `<p>`s get reset. However, we also reset the
  // bottom margin to use `rem` units instead of `em`.
  it('paragraphMargin', () => {
    expect(paragraphMargin).toEqual({
      p: {
        marginTop: 0,
        marginBottom: paragraphMarginBottom
      }
    })
  })
})
