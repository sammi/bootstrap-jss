import { headingsMarginBottom } from '../Variables/Fonts'

import { headerMargin } from './headerMargin'

describe('Reboot', () => {
  //
  // Typography
  //

  // Remove top margins from headings
  //
  // By default, `<h1>`-`<h6>` all receive top and bottom margins. We nuke the top
  // margin for easier control within type scales as it avoids margin collapsing.
  // stylelint-disable selector-list-comma-newline-after
  it('headerMargin', () => {
    expect(headerMargin).toEqual({
      'h1, h2, h3, h4, h5, h6': {
        marginTop: 0,
        marginBottom: headingsMarginBottom
      }
    })
  })
})
