import {
  badgePaddingY,
  badgePaddingX,
  badgeFontSize,
  badgeFontWeight,
  badgeBorderRadius,
  badgePillPaddingX,
  badgePillBorderRadius
} from '../Variables/Badges'
import _ from 'lodash'
import { themeColors } from '../Variables/Colors'
import { borderRadius } from '../Mixins/borderRadius'
import { badgeVariant } from '../Mixins/badge'

import { badge, badgeInButton, badgePill, badgeThemeColors } from './Badge'
import jss from 'jss'
import preset from 'jss-preset-default'
jss.setup(preset())

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
    expect(jss.createStyleSheet({ badge }).toString()).toBeDefined()
  })

  it('quick fix for badges in buttons', () => {
    expect(badgeInButton).toEqual({
      position: 'relative',
      top: '-1px'
    })
    expect(jss.createStyleSheet({ badgeInButton }).toString()).toBeDefined()
  })

  it('Pill badges, Make them extra rounded with a modifier to replace v3\'s badges.', () => {
    expect(badgePill).toEqual({
      paddingRight: badgePillPaddingX,
      paddingLeft: badgePillPaddingX,
      ...borderRadius(badgePillBorderRadius)
    })
    expect(jss.createStyleSheet({ badgePill }).toString()).toBeDefined()
  })

  it('badgeThemeColors', () => {
    const badgeColors = badgeThemeColors()
    Object.keys(themeColors).forEach(themeColorName => {
      expect(badgeColors[`badge${_.upperFirst(themeColorName)}`]).toEqual(
        badgeVariant(themeColors[themeColorName])
      )
    })
    expect(jss.createStyleSheet({ badgeColors }).toString()).toBeDefined()
  })
})
