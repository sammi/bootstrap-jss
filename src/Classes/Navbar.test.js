import { navLinkPaddingY } from '../Variables/Navs';
import { navbarPaddingY, navbarPaddingX, navbarBrandPaddingY, navbarBrandFontSize } from '../Variables/Navbar'
import { hoverFocus } from '../Mixins/hover'

import { navbar, navbarBrand, navbarNav, navbarText, navbarCollapse } from './Navbar'

describe('Navbar', () => {
  it('navbar', () => {
    expect(navbar).toEqual({
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
    })
  })

  it('navbar-brand', () => {
    expect(navbarBrand).toEqual({
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
    })
  })

  it('navbar-nav', () => {
    expect(navbarNav).toEqual({
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
    })
  })

  it('navbar-text', () => {
    expect(navbarText).toEqual({
      display: 'inline-block',
      paddingTop: navLinkPaddingY,
      paddingBottom: navLinkPaddingY
    })
  })

  it('navbar-collapse', () => {
    expect(navbarCollapse).toEqual({
      flexBasis: '100%',
      flexGrow: 1,
      alignItems: 'center'
    })
  })
})
