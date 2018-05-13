import format from 'string-format'
import {alertPaddingY, alertPaddingX, alertMarginBottom, alertBorderWidth, alertBorderRadius, alertLinkFontWeight} from '../Variables/Alerts'
import {borderRadius} from '../Mixins/borderRadius'
import {size} from '../Functions/size'
import {closeFontSize} from '../Variables/Close'

import {alert, alertHeading, alertLink, alertDismissible} from './Alert'

describe('Alert classes', () => {
  it('alert', () => {
    expect(alert).toEqual({
      position: 'relative',
      padding: format('{} {}', alertPaddingY, alertPaddingX),
      marginBottom: alertMarginBottom,
      border: format('{} solid transparent', alertBorderWidth),
      ...borderRadius(alertBorderRadius)
    })
  })

  it('alertHeading', () => {
    expect(alertHeading).toEqual({
      color: 'inherit'
    })
  })

  it('alertLink', () => {
    expect(alertLink).toEqual({
      fontWeight: alertLinkFontWeight
    })
  })

  it('alertDismissible', () => {
    expect(alertDismissible).toEqual({
      paddingRight: format('{}{}', size(closeFontSize).value + size(alertPaddingX).value * 2, size(closeFontSize).unit),
      close: {
        position: 'absolute',
        top: '0',
        right: '0',
        padding: format('{} {}', alertPaddingY, alertPaddingX),
        color: 'inherit'
      }
    })
  })
})
