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
import jss from 'jss'
import preset from 'jss-preset-default'
jss.setup(preset())

describe('list-group', () => {
  it('list-group', () => {
    expect(listGroup).toEqual({
      display: 'flex',
      flexDirection: 'column',
      paddingLeft: 0,
      marginBottom: 0
    })
    expect(jss.createStyleSheet({ listGroup }).toString()).toBeDefined()
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
    expect(jss.createStyleSheet({ listGroupItemAction }).toString()).toBeDefined()
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
      '&$disabled,&:disabled': {
        color: listGroupDisabledColor,
        backgroundColor: listGroupDisabledBg
      },
      '&$active': {
        zIndex: 2,
        color: listGroupActiveColor,
        backgroundColor: listGroupActiveBg,
        borderColor: listGroupActiveBorderColor
      }
    })
    expect(jss.createStyleSheet({ active: {}, disabled: {}, listGroupItem }).toString()).toBeDefined()
  })

  it('list-group-flush', () => {
    expect(listGroupFlush).toEqual({
      '&$listGroupItem': {
        borderRight: 0,
        borderLeft: 0,
        ...borderRadius(0)
      },
      '&:first-child': {
        '&$listGroupItem:first-child': {
          borderTop: 0
        }
      },
      '&:last-child': {
        '&$listGroupItem:last-child': {
          borderBottom: 0
        }
      }
    })
    expect(jss.createStyleSheet({ listGroupItem: {}, listGroupFlush }).toString()).toBeDefined()
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
    expect(jss.createStyleSheet({ listGroupThemeColors: { ...listGroupThemeColors() } }).toString()).toBeDefined()
    expect(listGroupThemeColors(themeColors)).toEqual(expectValue)
    expect(jss.createStyleSheet({ listGroupThemeColors: { ...listGroupThemeColors(themeColors) } }).toString()).toBeDefined()
  })
})
