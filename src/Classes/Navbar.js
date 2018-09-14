import { navLinkPaddingY } from '../Variables/Navs'
import { borderWidth } from '../Variables/Components'
import { borderRadius } from '../Mixins/borderRadius'
import {
  navbarPaddingY, navbarPaddingX, navbarBrandPaddingY, navbarBrandFontSize,
  navbarTogglerPaddingY, navbarTogglerPaddingX, navbarTogglerFontSize,
  navbarTogglerBorderRadius, navbarNavLinkPaddingX,
  navbarLightActiveColor, navbarLightColor, navbarLightHoverColor, navbarLightDisabledColor,
  navbarLightTogglerBorderColor, navbarLightTogglerIconBg,
  navbarDarkActiveColor, navbarDarkColor, navbarDarkHoverColor, navbarDarkDisabledColor, navbarDarkTogglerBorderColor,
  navbarDarkTogglerIconBg
} from '../Variables/Navbar'
import { hoverFocus } from '../Mixins/hover'
import { mediaBreakpointDown, mediaBreakpointUp, breakpointNext, breakpointInfix } from '../Mixins/breakpoints'
import { gridBreakpoints } from '../Variables/Grid'

const navbar = {
  position: 'relative',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: `${navbarPaddingY} ${navbarPaddingX}`,
  '> container, > containerFluid': {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
}

const navbarBrand = {
  display: 'inline-block',
  paddingTop: navbarBrandPaddingY,
  paddingBottom: navbarBrandPaddingY,
  marginRight: navbarPaddingX,
  fontSize: navbarBrandFontSize,
  lineHeight: 'inherit',
  whiteSpace: 'nowrap',
  ...hoverFocus({
    textDecoration: 'none'
  })
}

const navbarNav = {
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: 0,
  marginBottom: 0,
  listStyle: 'none',
  navLink: {
    paddingRight: 0,
    paddingLeft: 0
  },
  dropdownMenu: {
    position: 'static',
    float: 'none'
  }
}

const navbarText = {
  display: 'inline-block',
  paddingTop: navLinkPaddingY,
  paddingBottom: navLinkPaddingY
}

const navbarCollapse = {
  flexBasis: '100%',
  flexGrow: 1,
  alignItems: 'center'
}

const navbarToggle = {
  padding: `${navbarTogglerPaddingY} ${navbarTogglerPaddingX}`,
  fontSize: navbarTogglerFontSize,
  lineHeight: 1,
  backgroundColor: 'transparent',
  border: `${borderWidth} solid transparent`,
  ...borderRadius(navbarTogglerBorderRadius),
  ...hoverFocus({
    textDecoration: 'none'
  }),
  '&:not(:disabled):not(.disabled)': {
    cursor: 'pointer'
  }
}

const navbarToggleIcon = {
  display: 'inline-block',
  width: '1.5em',
  height: '1.5em',
  verticalAlign: 'middle',
  content: '',
  background: 'no-repeat center center',
  backgroundSize: '100% 100%'
}

const navbarExpand = () => {
  const navbarExpandValue = {}
  for (const [breakpoint] of Object.entries(gridBreakpoints)) {
    const next = breakpointNext(breakpoint, gridBreakpoints)
    const infix = breakpointInfix(next, gridBreakpoints)
    navbarExpandValue[`&${infix}`] = {
      ...mediaBreakpointDown(breakpoint, gridBreakpoints, {
        '> container, > containerFluid': {
          paddingRight: 0,
          paddingLeft: 0
        }
      }),
      ...mediaBreakpointUp(next, gridBreakpoints, {
        flexFlow: 'row nowrap',
        justifyContent: 'flex-start',
        navbarNav: {
          flexDirection: 'row',
          dropdownMenu: {
            position: 'absolute'
          },
          navLink: {
            paddingRight: navbarNavLinkPaddingX,
            paddingLeft: navbarNavLinkPaddingX
          }
        },
        '> container,> containerFluid': {
          flexWrap: 'nowrap'
        },
        navbarCollapse: {
          display: 'flex !important',
          flexBasis: 'auto'
        },
        navbarToggler: {
          display: 'none'
        }
      })
    }
  }

  return navbarExpandValue
}

const navbarLight = {
  navbarBrand: {
    color: navbarLightActiveColor,
    ...hoverFocus({
      color: navbarLightActiveColor
    })
  },
  navbarNav: {
    navLink: {
      color: navbarLightColor,
      ...hoverFocus({
        color: navbarLightHoverColor
      }),
      '&.disabled': {
        color: navbarLightDisabledColor
      }
    },
    'show > navLink,active > navLink,navLink.show,navLink.active': {
      color: navbarLightActiveColor
    }
  },
  navbarToggler: {
    color: navbarLightColor,
    borderColor: navbarLightTogglerBorderColor
  },
  navbarTogglerIcon: {
    backgroundImage: navbarLightTogglerIconBg
  },
  navbarText: {
    color: navbarLightColor,
    a: {
      color: navbarLightActiveColor,
      ...hoverFocus({
        color: navbarLightActiveColor
      })
    }
  }
}

const navbarDark = {
  navbarBrand: {
    color: navbarDarkActiveColor,
    ...hoverFocus({
      color: navbarDarkActiveColor
    })
  },
  navbarNav: {
    navLink: {
      color: navbarDarkColor,
      ...hoverFocus({
        color: navbarDarkHoverColor
      }),
      '&.disabled': {
        color: navbarDarkDisabledColor
      }
    },
    'show > navLink, active > navLink,navLink.show,navLink.active': {
      color: navbarDarkActiveColor
    }
  },
  navbarToggler: {
    color: navbarDarkColor,
    borderColor: navbarDarkTogglerBorderColor
  },
  navbarTogglerIcon: {
    backgroundImage: navbarDarkTogglerIconBg
  },
  navbarText: {
    color: navbarDarkColor,
    a: {
      color: navbarDarkActiveColor,
      ...hoverFocus({
        color: navbarDarkActiveColor
      })
    }
  }
}

export {
  navbar,
  navbarBrand,
  navbarNav,
  navbarText,
  navbarCollapse,
  navbarToggle,
  navbarToggleIcon,
  navbarExpand,
  navbarLight,
  navbarDark
}
