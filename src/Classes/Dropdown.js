import { caret } from '../Mixins/caret'
import { zindexDropdown } from '../Variables/Zindex'
import {
  dropdownMinWidth, dropdownPaddingY, dropdownSpacer,
  dropdownBg, dropdownBorderWidth, dropdownBorderColor,
  dropdownBorderRadius, dropdownBoxShadow,
  dropdownDividerBg,
  dropdownItemPaddingY, dropdownItemPaddingX,
  dropdownLinkColor, dropdownLinkHoverColor,
  dropdownLinkHoverBg, dropdownLinkActiveColor, dropdownLinkActiveBg, dropdownLinkDisabledColor,
  dropdownHeaderColor
} from '../Variables/Dropdowns'
import { fontSizeBase, fontWeightNormal, fontSizeSm } from '../Variables/Fonts'
import { bodyColor } from '../Variables/Body'
import { borderRadius } from '../Mixins/borderRadius'
import { boxShadow } from '../Mixins/boxShadow'
import { navDivider } from '../Mixins/navDivider'
import { enableGradients } from '../Variables/Options'
import { hoverFocus } from '../Mixins/hover'
import { gradientBg } from '../Mixins/gradients'

const dropdownPostion = { position: 'relative' }

const dropup = dropdownPostion
const dropright = dropdownPostion
const dropdown = dropdownPostion
const dropleft = dropdownPostion

const dropdownToggle = {
  ...caret()
}

const dropdownMenu = {
  position: 'absolute',
  top: '100%',
  left: 0,
  zIndex: zindexDropdown,
  display: 'none',
  float: 'left',
  minWidth: dropdownMinWidth,
  padding: `${dropdownPaddingY} 0`,
  margin: `${dropdownSpacer} 0 0`,
  fontSize: fontSizeBase,
  color: bodyColor,
  textAlign: 'left',
  listStyle: 'none',
  backgroundColor: dropdownBg,
  backgroundClip: 'padding-box',
  border: `${dropdownBorderWidth} solid ${dropdownBorderColor}`,
  ...borderRadius(dropdownBorderRadius),
  ...boxShadow(dropdownBoxShadow),
  '&[x-placement^="top"],&[x-placement^="right"],&[x-placement^="bottom"],&[x-placement^="left"]': {
    right: 'auto',
    bottom: 'auto'
  },
  '&.show': {
    display: 'block'
  }
}

const dropdownMenuRight = {
  right: 0,
  left: 'auto'
}

const dropUp = {
  dropdownMenu,
  dropdownToggle,
  '$dropdownMenu': {
    top: 'auto',
    bottom: '100%',
    marginTop: 0,
    marginBottom: dropdownSpacer
  },
  '$dropdownToggle': {
    ...caret('up')
  }
}

const dropRight = {
  dropdownMenu,
  dropdownToggle,
  '$dropdownMenu': {
    top: 0,
    right: 'auto',
    left: '100%',
    marginTop: 0,
    marginLeft: dropdownSpacer
  },
  '$dropdownToggle': {
    ...caret('right'),
    '&::after': {
      verticalAlign: 0
    }
  }
}

const dropLeft = {
  dropdownMenu,
  dropdownToggle,
  '$dropdownMenu': {
    top: 0,
    right: '100%',
    left: 'auto',
    marginTop: 0,
    marginRight: dropdownSpacer
  },
  '$dropdownToggle': {
    ...caret('left'),
    '&::before': {
      verticalAlign: 0
    }
  }
}

const dropdownDivider = {
  ...navDivider(dropdownDividerBg)
}

const dropdownItem = (isEnableGradients = enableGradients) => {
  const backgroundImageValue = isEnableGradients ? {
    backgroundImage: 'none'
  } : null

  return {
    display: 'block',
    width: '100%',
    padding: `${dropdownItemPaddingY} ${dropdownItemPaddingX}`,
    clear: 'both',
    fontWeight: fontWeightNormal,
    color: dropdownLinkColor,
    textAlign: 'inherit',
    whiteSpace: 'nowrap',
    backgroundColor: 'transparent',
    border: 0,
    ...hoverFocus({
      color: dropdownLinkHoverColor,
      textDecoration: 'none',
      ...gradientBg(dropdownLinkHoverBg)
    }),
    '&.active,&:active': {
      color: dropdownLinkActiveColor,
      textDecoration: 'none',
      ...gradientBg(dropdownLinkActiveBg)
    },
    '&.disabled,&:disabled': {
      color: dropdownLinkDisabledColor,
      backgroundColor: 'transparent',
      ...backgroundImageValue
    }
  }
}

const dropdownItemText = {
  display: 'block',
  padding: `${dropdownItemPaddingY} ${dropdownItemPaddingX}`,
  color: dropdownLinkColor
}

const dropdownHeader = {
  display: 'block',
  padding: `${dropdownPaddingY} ${dropdownItemPaddingX}`,
  marginBottom: 0,
  fontSize: fontSizeSm,
  color: dropdownHeaderColor,
  whiteSpace: 'nowrap'
}

export {
  dropup, dropdown, dropleft, dropright,
  dropdownToggle,
  dropdownMenu,
  dropdownMenuRight,
  dropUp,
  dropRight,
  dropLeft,
  dropdownDivider,
  dropdownItem,
  dropdownItemText,
  dropdownHeader
}
