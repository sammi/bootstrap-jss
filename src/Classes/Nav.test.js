import {
  navTabsBorderWidth,
  navTabsBorderColor,
  navTabsBorderRadius,
  navTabsLinkHoverBorderColor,
  navLinkDisabledColor,
  navTabsLinkActiveColor,
  navTabsLinkActiveBg,
  navTabsLinkActiveBorderColor,
  navPillsBorderRadius,
  navPillsLinkActiveColor,
  navPillsLinkActiveBg,
  navLinkPaddingY,
  navLinkPaddingX
} from '../Variables/Navs'
import { borderTopRadius, borderRadius } from '../Mixins/borderRadius'
import { hoverFocus } from '../Mixins/hover'
import { nav, navLink, navTabs, navPills, navPill, navFill, navJustified, tabContent } from './Nav'
import jss from 'jss'
import preset from 'jss-preset-default'
jss.setup(preset())

describe('nav', () => {
  it('nav', () => {
    expect(nav).toEqual({
      display: 'flex',
      flexWrap: 'wrap',
      paddingLeft: 0,
      marginBottom: 0,
      listStyle: 'none'
    })
    expect(jss.createStyleSheet({ nav }).toString()).toBeDefined()
  })

  it('nav-link', () => {
    expect(navLink).toEqual({
      display: 'block',
      padding: `${navLinkPaddingY} ${navLinkPaddingX}`,
      ...hoverFocus({
        textDecoration: 'none'
      }),
      '&$disabled': {
        color: navLinkDisabledColor
      }
    })
    expect(jss.createStyleSheet({ disabled: {}, navLink }).toString()).toBeDefined()
  })

  it('nav-tabs', () => {
    expect(navTabs).toEqual({
      borderBottom: `${navTabsBorderWidth} solid ${navTabsBorderColor}`,
      '&$navItem': {
        marginBottom: `-${navTabsBorderWidth}`
      },
      '&$navLink': {
        border: `${navTabsBorderWidth} solid transparent`,
        ...borderTopRadius(navTabsBorderRadius),
        ...hoverFocus({
          borderColor: navTabsLinkHoverBorderColor
        }),
        '&$disabled': {
          color: navLinkDisabledColor,
          backgroundColor: 'transparent',
          borderColor: 'transparent'
        }
      },
      '&$navLink$active,&$navItem$show $navLink': {
        color: navTabsLinkActiveColor,
        backgroundColor: navTabsLinkActiveBg,
        borderColor: navTabsLinkActiveBorderColor
      },
      dropdownMenu: {
        marginTop: `-${navTabsBorderWidth}`,
        ...borderTopRadius(0)
      }
    })
    expect(jss.createStyleSheet({
      active: {},
      show: {},
      disabled: {},
      navItem: {},
      navLink: {},
      navTabs
    }).toString()).toBeDefined()
  })

  it('nav-pills', () => {
    expect(navPills).toEqual({
      '&$navLink': {
        ...borderRadius(navPillsBorderRadius)
      },
      '&$navLink$active,&$show > $navLink': {
        color: navPillsLinkActiveColor,
        backgroundColor: navPillsLinkActiveBg
      }
    })
    expect(jss.createStyleSheet({
      active: {},
      show: {},
      navLink: {},
      navPills
    }).toString()).toBeDefined()
  })

  it('nav-pill', () => {
    expect(navPill).toEqual({
      '&$navItem': {
        flex: '1 1 auto',
        textAlign: 'center'
      }
    })
    expect(jss.createStyleSheet({ navItem: {}, navPill }).toString()).toBeDefined()
  })

  it('nav-fill', () => {
    expect(navFill).toEqual({
      '&$navItem': {
        flex: '1 1 auto',
        textAlign: 'center'
      }
    })
    expect(jss.createStyleSheet({ navItem: {}, navFill }).toString()).toBeDefined()
  })

  it('nav-justified', () => {
    expect(navJustified).toEqual({
      '&$navItem': {
        flexBasis: 0,
        flexGrow: 1,
        textAlign: 'center'
      }
    })
    expect(jss.createStyleSheet({ navItem: {}, navJustified }).toString()).toBeDefined()
  })

  it('tab-content', () => {
    expect(tabContent).toEqual({
      '& > $tabPane': {
        display: 'none'
      },
      '& > $active': {
        display: 'block'
      }
    })
    expect(jss.createStyleSheet({ tabPane: {}, active: {}, tabContent }).toString()).toBeDefined()
  })
})
