import { linkColor, linkDecoration, linkHoverColor, linkHoverDecoration } from '../Variables/Links'
import { hover, hoverFocus } from '../Mixins/hover'

import { links } from './links'

describe('Reboot', () => {
  it('links', () => {
    expect(links).toEqual({
      a: {
        color: linkColor,
        textDecoration: linkDecoration,
        backgroundColor: 'transparent', // Remove the gray background on active links in IE 10.
        '-webkit-text-decoration-skip': 'objects', // Remove gaps in links underline in iOS 8+ and Safari 8+.
        ...hover({
          color: linkHoverColor,
          textDecoration: linkHoverDecoration
        })
      },

      // And undo these styles for placeholder links/named anchors (without href)
      // which have not been made explicitly keyboard-focusable (without tabindex).
      // It would be more straightforward to just use a[href] in previous block, but that
      // causes specificity issues in many other styles that are too complex to fix.
      // See https://github.com/twbs/bootstrap/issues/19402

      'a:not([href]):not([tabindex])': {
        color: 'inherit',
        textDecoration: 'none',
        ...hoverFocus({
          color: 'inherit',
          textDecoration: 'none'
        }),
        '&:focus': {
          outline: 0
        }
      }
    })
  })
})
