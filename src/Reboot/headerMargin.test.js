import { headingsMarginBottom } from '../Variables/Fonts'

import { headerMargin } from './headerMargin'

describe('Reboot', () => {
  it('headerMargin', () => {
    expect(headerMargin).toEqual({
      '@global': {
        'h1, h2, h3, h4, h5, h6': {
          marginTop: 0,
          marginBottom: headingsMarginBottom
        }
      }
    })
  })
})
