import { linkColor, linkDecoration, linkHoverColor, linkHoverDecoration } from '../Variables/Links'
import { hover, hoverFocus } from '../Mixins/hover'

export const links = {
  '@global': {
    a: {
      color: linkColor,
      textDecoration: linkDecoration,
      backgroundColor: 'transparent',
      '-webkit-text-decoration-skip': 'objects',
      ...hover({
        color: linkHoverColor,
        textDecoration: linkHoverDecoration
      })
    },
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
  }
}