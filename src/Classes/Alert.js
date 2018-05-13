import format from 'string-format'
import {alertPaddingY, alertPaddingX, alertMarginBottom, alertBorderWidth, alertBorderRadius, alertLinkFontWeight} from '../Variables/Alerts'
import {borderRadius} from '../Mixins/borderRadius'
import {size} from '../Functions/size'
import {closeFontSize} from '../Variables/Close'

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
