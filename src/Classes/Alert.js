import format from 'string-format'
import { borderRadius } from '../Mixins/borderRadius'
import { size } from '../Functions/size'
import { closeFontSize } from '../Variables/Close'
import { themeColors } from '../Variables/Colors'
import _ from 'lodash'
import { alertVariant } from '../Mixins/alert'
import { themeColorLevel } from '../Functions/themeColorLevel'
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

export const alert = {
  position: 'relative',
  padding: format('{} {}', alertPaddingY, alertPaddingX),
  marginBottom: alertMarginBottom,
  border: format('{} solid transparent', alertBorderWidth),
  ...borderRadius(alertBorderRadius)
}

export const alertHeading = {color: 'inherit'}

export const alertLink = {fontWeight: alertLinkFontWeight}

export const alertDismissible = {
  paddingRight: format('{}{}', size(closeFontSize).value + size(alertPaddingX).value * 2, size(closeFontSize).unit),
  close: {
    position: 'absolute',
    top: '0',
    right: '0',
    padding: format('{} {}', alertPaddingY, alertPaddingX),
    color: 'inherit'
  }
}

export const alertThemeColors = () => {
  let alertColors = {}
  Object.keys(themeColors).forEach(themeColorName => {
    alertColors['alert' + _.upperFirst(themeColorName)] = alertVariant(
      themeColorLevel(themeColorName, alertBgLevel),
      themeColorLevel(themeColorName, alertBorderLevel),
      themeColorLevel(themeColorName, alertColorLevel)
    )
  })
  return alertColors
}