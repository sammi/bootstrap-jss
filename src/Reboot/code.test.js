import { fontFamilyMonospace } from '../Variables/Fonts'

import {
  code
} from './code'

describe('Reboot', () => {
  it('code', () => {
    expect(code).toEqual({
      'pre,code,kbd,samp': {
        fontFamily: fontFamilyMonospace,
        fontSize: '1em' // Correct the odd `em` font sizing in all browsers.
      },
      pre: {
        // Remove browser default top margin
        marginTop: 0,
        // Reset browser default of `1em` to use `rem`s
        marginBottom: '1rem',
        // Don't allow content to break outside
        overflow: 'auto',
        // We have @viewport set which causes scrollbars to overlap content in IE11 and Edge, so
        // we force a non-overlapping, non-auto-hiding scrollbar to counteract.
        '-ms-overflow-style': 'scrollbar'
      }
    })
  })
})
