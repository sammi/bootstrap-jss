import { borderRadius } from '../Mixins/borderRadius'
import { size } from '../Functions/size'
import { closeFontSize } from '../Variables/Close'
import { themeColors } from '../Variables/Colors'
import { upperFirst } from 'lodash'
import { alertVariant } from '../Mixins/alert'
import { themeColorLevel } from '../Functions/themeColorLevel'
import { close } from './Close'
import {
  alertPaddingY,
  alertPaddingX,
  alertMarginBottom,
  alertBorderWidth,
  alertBorderRadius,
  alertLinkFontWeight,
  alertBgLevel,
  alertBorderLevel,
  alertColorLevel
} from '../Variables/Alerts'

import { alert, alertHeading, alertLink, alertDismissible, alertThemeColors } from './Alert'
import jss from 'jss'
import preset from 'jss-preset-default'
jss.setup(preset())

describe('Alert classes', () => {
  it('alert', () => {
    expect(alert).toEqual({
      position: 'relative',
      padding: `${alertPaddingY} ${alertPaddingX}`,
      marginBottom: alertMarginBottom,
      border: `${alertBorderWidth} solid transparent`,
      ...borderRadius(alertBorderRadius)
    })
    expect(jss.createStyleSheet({ alert }).toString()).toBeDefined()
  })

  it('alertHeading', () => {
    expect(alertHeading).toEqual({
      color: 'inherit'
    })
    expect(jss.createStyleSheet({ alertHeading }).toString()).toBeDefined()
  })

  it('alertLink', () => {
    expect(alertLink).toEqual({
      fontWeight: alertLinkFontWeight
    })
    expect(jss.createStyleSheet({ alertLink }).toString()).toBeDefined()
  })

  it('alertDismissible', () => {
    expect(alertDismissible).toEqual({
      close,
      paddingRight: `${size(closeFontSize).value + size(alertPaddingX).value * 2}${size(closeFontSize).unit}`,
      '$close': {
        position: 'absolute',
        top: '0',
        right: '0',
        padding: `${alertPaddingY} ${alertPaddingX}`,
        color: 'inherit'
      }
    })
    expect(jss.createStyleSheet({ alertDismissible }).toString()).toBeDefined()
  })

  it('alert-theme-colors', () => {
    const alertColors = alertThemeColors()
    Object.keys(themeColors).forEach(themeColorName => {
      expect(alertColors[`alert${upperFirst(themeColorName)}`]).toEqual(
        alertVariant(
          themeColorLevel(themeColorName, alertBgLevel),
          themeColorLevel(themeColorName, alertBorderLevel),
          themeColorLevel(themeColorName, alertColorLevel)
        )
      )
    })
  })
})
