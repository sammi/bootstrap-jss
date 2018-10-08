import { fontFamilyMonospace } from '../Variables/Fonts'

import { code } from './code'

describe('Reboot', () => {
  it('code', () => {
    expect(code).toEqual({
      'pre,code,kbd,samp': {
        fontFamily: fontFamilyMonospace,
        fontSize: '1em'
      },
      pre: {
        marginTop: 0,
        marginBottom: '1rem',
        overflow: 'auto',
        '-ms-overflow-style': 'scrollbar'
      }
    })
  })
})
