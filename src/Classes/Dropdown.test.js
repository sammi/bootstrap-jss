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

import {
  dropdownWrapper,
  dropdownToggle, dropdownMenu, dropdownMenuRight,
  dropUp, dropRight, dropLeft, dropdownDivider,
  dropdownItem,
  dropdownItemText,
  dropdownHeader
} from './Dropdown'

describe('dropdown', () => {
  it('dropdownWrapper', () => {
    expect(dropdownWrapper).toEqual({
      'dropup, dropright, dropdown, dropleft': {
        position: 'relative'
      }
    })
  })

  it('dropdown-toggle', () => {
    expect(dropdownToggle).toEqual({
      ...caret
    })
  })

  it('dropdown-menu', () => {
    expect(dropdownMenu).toEqual({
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
    })
  })

  it('dropdown-menu-right', () => {
    expect(dropdownMenuRight).toEqual({
      right: 0,
      left: 'auto'
    })
  })

  it('dropup', () => {
    expect(dropUp).toEqual({
      dropdownMenu: {
        top: 'auto',
        bottom: '100%',
        marginTop: 0,
        marginBottom: dropdownSpacer
      },
      dropdownToggle: {
        ...caret('up')
      }
    })
  })

  it('dropright', () => {
    expect(dropRight).toEqual({
      dropdownMenu: {
        top: 0,
        right: 'auto',
        left: '100%',
        marginTop: 0,
        marginLeft: dropdownSpacer
      },
      dropdownToggle: {
        ...caret('right'),
        '&::after': {
          verticalAlign: 0
        }
      }
    })
  })

  it('dropleft', () => {
    expect(dropLeft).toEqual({
      dropdownMenu: {
        top: 0,
        right: '100%',
        left: 'auto',
        marginTop: 0,
        marginRight: dropdownSpacer
      },
      dropdownToggle: {
        ...caret('left'),
        '&::before': {
          verticalAlign: 0
        }
      }
    })
  })

  it('dropdown-divider', () => {
    expect(dropdownDivider).toEqual({
      ...navDivider(dropdownDividerBg)
    })
  })

  it('dropdown-item', () => {
    const backgroundImageValue = enableGradients ? {
      backgroundImage: 'none'
    } : null

    expect(dropdownItem()).toEqual({
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
    })

    expect(dropdownItem(true)).toEqual({
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
        backgroundImage: 'none'
      }
    })
  })

  it('dropdown-item-text', () => {
    expect(dropdownItemText).toEqual({
      display: 'block',
      padding: `${dropdownItemPaddingY} ${dropdownItemPaddingX}`,
      color: dropdownLinkColor
    })
  })

  it('dropdown-header', () => {
    expect(dropdownHeader).toEqual({
      display: 'block',
      padding: `${dropdownPaddingY} ${dropdownItemPaddingX}`,
      marginBottom: 0,
      fontSize: fontSizeSm,
      color: dropdownHeaderColor,
      whiteSpace: 'nowrap'
    })
  })
})