import {
  badgePaddingY,
  badgePaddingX,
  badgeFontSize,
  badgeFontWeight,
  badgeBorderRadius,
  badgePillPaddingX,
  badgePillBorderRadius
} from '../Variables/Badges'

import { upperFirst } from 'lodash'
import { borderRadius } from '../Mixins/borderRadius'
import { themeColors } from '../Variables/Colors'
import { badgeVariant } from '../Mixins/badge'

export const badge = {
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
}

export const badgeInButton = {
  position: 'relative',
  top: '-1px'
}

export const badgePill = {
  paddingRight: badgePillPaddingX,
  paddingLeft: badgePillPaddingX,
  ...borderRadius(badgePillBorderRadius)
}

export const badgeThemeColors = () => {
  let badgeColors = {}
  Object.keys(themeColors).forEach(themeColorName => {
    badgeColors['badge' + upperFirst(themeColorName)] = badgeVariant(themeColors[themeColorName])
  })
  return badgeColors
}
