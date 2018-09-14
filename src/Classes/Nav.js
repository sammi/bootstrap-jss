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
  navPillsLinkActiveBg
} from '../Variables/Navs'
import { borderTopRadius, borderRadius } from '../Mixins/borderRadius'
import { hoverFocus } from '../Mixins/hover'

const nav = {
  display: 'flex',
  flexWrap: 'wrap',
  paddingLeft: 0,
  marginBottom: 0,
  listStyle: 'none'
}

const navLink = {
  borderBottom: `${navTabsBorderWidth} solid ${navTabsBorderColor}`,
  navItem: {
    marginBottom: `-${navTabsBorderWidth}`
  },
  navLink: {
    border: `${navTabsBorderWidth} solid transparent`,
    ...borderTopRadius(navTabsBorderRadius),
    ...hoverFocus({ borderColor: navTabsLinkHoverBorderColor }),
    '&.disabled': {
      color: navLinkDisabledColor,
      backgroundColor: 'transparent',
      borderColor: 'transparent'
    }
  },
  'navLink.active,navItem.show navLink': {
    color: navTabsLinkActiveColor,
    backgroundColor: navTabsLinkActiveBg,
    borderColor: navTabsLinkActiveBorderColor
  },
  dropdownMenu: {
    marginTop: `-${navTabsBorderWidth}`,
    ...borderTopRadius(0)
  }
}

const navTabs = {
  borderBottom: `${navTabsBorderWidth} solid ${navTabsBorderColor}`,
  navItem: {
    marginBottom: `-${navTabsBorderWidth}`
  },
  navLink: {
    border: `${navTabsBorderWidth} solid transparent`,
    ...borderTopRadius(navTabsBorderRadius),
    ...hoverFocus({
      borderColor: navTabsLinkHoverBorderColor
    }),
    '&.disabled': {
      color: navLinkDisabledColor,
      backgroundColor: 'transparent',
      borderColor: 'transparent'
    }
  },
  'navLink.active,navItem.show navLink': {
    color: navTabsLinkActiveColor,
    backgroundColor: navTabsLinkActiveBg,
    borderColor: navTabsLinkActiveBorderColor
  },
  dropdownMenu: {
    marginTop: `-${navTabsBorderWidth}`,
    ...borderTopRadius(0)
  }
}

const navPills = {
  navLink: {
    ...borderRadius(navPillsBorderRadius)
  },
  'navLink.active,show > navLink': {
    color: navPillsLinkActiveColor,
    backgroundColor: navPillsLinkActiveBg
  }
}

const navPill = {
  navItem: {
    flex: '1 1 auto',
    textAlign: 'center'
  }
}

const navFill = {
  navItem: {
    flex: '1 1 auto',
    textAlign: 'center'
  }
}

const navJustified = {
  navItem: {
    flexBasis: 0,
    flexGrow: 1,
    textAlign: 'center'
  }
}

const tabContent = {
  '> tab-pane': {
    display: 'none'
  },
  '> active': {
    display: 'block'
  }
}

export {
  nav,
  navLink,
  navTabs,
  navPills,
  navPill,
  navFill,
  navJustified,
  tabContent
}
