import { navLinkPaddingY } from '../Variables/Navs';
import { navbarPaddingY, navbarPaddingX, navbarBrandPaddingY, navbarBrandFontSize } from '../Variables/Navbar'
import { hoverFocus } from '../Mixins/hover'

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

export {
  navbar,
  navbarBrand,
  navbarNav,
  navbarText,
  navbarCollapse
}