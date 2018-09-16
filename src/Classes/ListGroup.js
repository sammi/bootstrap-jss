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

const listGroup = {
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: 0,
  marginBottom: 0
}

const listGroupItemAction = {
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
}

const listGroupItem = {
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
}

const listGroupFlush = {
  listGroupItem: {
    borderRight: 0,
    borderLeft: 0,
    ...borderRadius(0)
  },
  '&:first-child': {
    'listGroupItem:first-child': {
      borderTop: 0
    }
  },
  '&:last-child': {
    'listGroupItem:last-child': {
      borderBottom: 0
    }
  }
}

const listGroupThemeColors = (inputThemeColors = themeColors) => {
  let expectValue = {}
  for (const [color] of Object.entries(inputThemeColors)) {
    expectValue = {
      ...expectValue,
      ...listGroupItemVariant(color, themeColorLevel(color, -9), themeColorLevel(color, 6))
    }
  }
  return expectValue
}

export {
  listGroup,
  listGroupItemAction,
  listGroupItem,
  listGroupFlush,
  listGroupThemeColors
}
