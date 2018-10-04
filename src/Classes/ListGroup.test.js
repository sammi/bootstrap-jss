import {
  listGroupActionColor, listGroupActionHoverColor, listGroupHoverBg,
  listGroupActionActiveColor, listGroupActionActiveBg,
  listGroupItemPaddingY, listGroupItemPaddingX,
  listGroupBorderWidth, listGroupBg, listGroupBorderColor, listGroupBorderRadius,
  listGroupDisabledBg, listGroupActiveColor, listGroupActiveBg, listGroupActiveBorderColor,
  listGroupDisabledColor
} from '../Variables/ListGroup'
import { hoverFocus } from '../Mixins/hover'
import { borderTopRadius, borderBottomRadius, borderRadius } from '../Mixins/borderRadius'
import { themeColorLevel } from '../Functions/themeColorLevel'
import { themeColors } from '../Variables/Colors'
import { listGroupItemVariant } from '../Mixins/listGroup'

import { listGroup, listGroupItemAction, listGroupItem, listGroupFlush, listGroupThemeColors } from './ListGroup'

describe('list-group', () => {
  it('list-group', () => {
    expect(listGroup).toEqual({
      display: 'flex',
      flexDirection: 'column',
      paddingLeft: 0,
      marginBottom: 0
    })
  })

  it('list-group-item-action', () => {
    expect(listGroupItemAction).toEqual({
      width: '100%',
      color: listGroupActionColor,
      textAlign: 'inherit',
      ...hoverFocus({
        color: listGroupActionHoverColor,
        textDecoration: 'none',
        backgroundColor: listGroupHoverBg
      }),
      '&:active': {
        color: listGroupActionActiveColor,
        backgroundColor: listGroupActionActiveBg
      }
    })
  })

  it('list-group-item', () => {
    expect(listGroupItem).toEqual({
      position: 'relative',
      display: 'block',
      padding: `${listGroupItemPaddingY} ${listGroupItemPaddingX}`,
      marginBottom: `-${listGroupBorderWidth}`,
      backgroundColor: listGroupBg,
      border: `${listGroupBorderWidth} solid ${listGroupBorderColor}`,
      '&:first-child': {
        ...borderTopRadius(listGroupBorderRadius)
      },
      '&:last-child': {
        marginBottom: 0,
        ...borderBottomRadius(listGroupBorderRadius)
      },
      ...hoverFocus({
        zIndex: 1,
        textDecoration: 'none'
      }),
      '&.disabled,&:disabled': {
        color: listGroupDisabledColor,
        backgroundColor: listGroupDisabledBg
      },
      '&.active': {
        zIndex: 2,
        color: listGroupActiveColor,
        backgroundColor: listGroupActiveBg,
        borderColor: listGroupActiveBorderColor
      }
    })
  })

  it('list-group-flush', () => {
    expect(listGroupFlush).toEqual({
      listGroupItem,
      '$listGroupItem': {
        borderRight: 0,
        borderLeft: 0,
        ...borderRadius(0)
      },
      '&:first-child': {
        '$listGroupItem:first-child': {
          borderTop: 0
        }
      },
      '&:last-child': {
        '$listGroupItem:last-child': {
          borderBottom: 0
        }
      }
    })
  })

  it('list-group-theme-colors', () => {
    const inputThemeColors = themeColors
    let expectValue = {}
    for (const [color] of Object.entries(inputThemeColors)) {
      expectValue = {
        ...expectValue,
        ...listGroupItemVariant(color, themeColorLevel(color, -9), themeColorLevel(color, 6))
      }
    }
    expect(listGroupThemeColors()).toEqual(expectValue)
    expect(listGroupThemeColors(themeColors)).toEqual(expectValue)
  })
})
