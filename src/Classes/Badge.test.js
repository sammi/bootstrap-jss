import {
  badgePaddingY,
  badgePaddingX,
  badgeFontSize,
  badgeFontWeight,
  badgeBorderRadius,
  badgePillPaddingX,
  badgePillBorderRadius
} from '../Variables/Badges'

import {
  borderRadius
} from '../Mixins/borderRadius'

import {
  badge,
  badgeInButton,
  badgePill
} from './Badge'

describe('Badge classes', () => {

  it('badge', () => {
    expect(badge).toEqual({
      display: 'inline-block',
      padding: `${badgePaddingY} ${badgePaddingX}`,
      fontSize: badgeFontSize,
      fontWeight: badgeFontWeight,
      lineHeight: 1,
      textAlign: 'center',
      whiteSpace: 'nowrap',
      verticalAlign: 'baseline',
      ...borderRadius(badgeBorderRadius),
      '&:empty': {
        display: 'none'
      }
    })
  })

  it('quick fix for badges in buttons', () => {
    //.btn .badge
    expect(badgeInButton).toEqual({
      position: 'relative',
      top: '-1px'
    })
  })

  it('Pill badges, Make them extra rounded with a modifier to replace v3\'s badges.', () => {
    expect(badgePill).toEqual({
      paddingRight: badgePillPaddingX,
      paddingLeft: badgePillPaddingX,
      ...borderRadius(badgePillBorderRadius)
    })
  })

})

// Colors
//
// Contextual variations (linked badges get darker on :hover).

//   @each $color, $value in $theme-colors {
//     .badge-#{$color} {
//       @include badge-variant($value);
//     }
//   }
