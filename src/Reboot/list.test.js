import { dtFontWeight } from '../Variables/Fonts'

import { list } from './list'

describe('Reboot', () => {
  it('list', () => {
    expect(list).toEqual({
      'ol,ul,dl': {
        marginTop: 0,
        marginBottom: '1rem'
      },
      'ol ol,ul ul,ol ul,ul ol': {
        marginBottom: 0
      },
      dt: {
        fontWeight: dtFontWeight
      },
      dd: {
        marginBottom: '0.5rem',
        marginLeft: 0
      }
    })
  })
})
