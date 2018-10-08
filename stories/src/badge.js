import React from 'react'
import { storiesOf } from '@storybook/react'
import { Reboot, Classes } from 'bootstrap-jss'
import injectSheet, { ThemeProvider } from 'react-jss'

const { badge, badgeInButton, badgePill, badgeThemeColors } = Classes.Badge
const { btn, btnThemeColors, btnOutlineThemeColors, btnInsideLink } = Classes.Buttons

const badgeColors = badgeThemeColors()
const btnColors = btnThemeColors()
const btnOutlineColors = btnOutlineThemeColors()

const HeaderBadge = injectSheet(theme => ({
  active: {},
  disabled: {},
  show: {},
  focus: {},
  dropdownToggle: {},
  badge: {
    ...Reboot.headerMargin,
    ...badge,
    ...badgeColors[theme.color],
  },
})) (
  ({classes, children}) =>
  <div>
    <h1>Example heading <span className={classes.badge}>{children}</span></h1>
    <h2>Example heading <span className={classes.badge}>{children}</span></h2>
    <h3>Example heading <span className={classes.badge}>{children}</span></h3>
    <h4>Example heading <span className={classes.badge}>{children}</span></h4>
    <h5>Example heading <span className={classes.badge}>{children}</span></h5>
    <h6>Example heading <span className={classes.badge}>{children}</span></h6>
  </div>
)

const ButtonBadge = injectSheet( theme => ({
  active: {},
  disabled: {},
  show: {},
  focus: {},
  dropdownToggle: {},
  container: {
    ...Reboot.forms.button,
    ...btn,
    ...btnColors['btnPrimary'],
    margin: '2px'
  },
  button: {
    ...badgeInButton,
    ...badgeColors[theme.color],
  }
})) (
  ({classes, children}) =>
  <button type="button" className={classes.container}>
    Notifications <span className={classes.button}>{children}</span>
  </button>
)

const SpanBadge = injectSheet( theme => ({
  active: {},
  disabled: {},
  show: {},
  focus: {},
  dropdownToggle: {},
  badge: {
    ...Reboot.list,
    ...badge,
    ...badgeColors[theme.color],
    margin: '2px',
  },
})) (
  ({classes, children}) =>
  <span className={classes.badge}>{children}</span>
)

const PillBadge = injectSheet(theme => ({
  active: {},
  disabled: {},
  show: {},
  focus: {},
  dropdownToggle: {},
  badgePill: {
    ...Reboot.list,
    ...badge,
    ...badgePill,
    ...badgeColors[theme.color],
    margin: '2px',
  },
})) (
  ({classes, children}) =>
  <span className={classes.badgePill}>{children}</span>
)

const LinkBadge = injectSheet(theme => ({
  active: {},
  disabled: {},
  show: {},
  focus: {},
  dropdownToggle: {},
  btnInsideLink: {
    ...Reboot.links,
    ...btn,
    ...badgeColors[theme.color],
    ...btnColors[theme.color],
    ...btnOutlineColors[theme.color],
    margin: '2px',
  }
})) (
  ({classes, children}) =>
  <a href="#" className={classes.btnInsideLink}>{children}</a>
)

storiesOf('Badge', module)
  .add('Badge in header', () =>
    <div>
    {
      Object.keys(badgeColors).map(themeColorName => (
        <ThemeProvider key={themeColorName} theme={{ color: themeColorName }}>
          <div>
            <HeaderBadge>123</HeaderBadge>
          </div>
        </ThemeProvider>
      ))
    }
    </div>
  )
  .add('Badge in button', () =>
    <div>
    {
      Object.keys(badgeColors).map(themeColorName => (
        <ThemeProvider key={themeColorName} theme={{ color: themeColorName }}>
          <ButtonBadge>4</ButtonBadge>
        </ThemeProvider>
      ))
    }
    </div>
  )
  .add('Span badges', () =>
    <div>
      {
        Object.keys(badgeColors).map(themeColorName => (
          <ThemeProvider key={themeColorName} theme={{ color: themeColorName }}>
              <SpanBadge>{themeColorName}</SpanBadge>
          </ThemeProvider>
        ))
      }
    </div>
  )
  .add('Pill badges', () =>
    <div>
      {
        Object.keys(badgeColors).map(themeColorName => (
          <ThemeProvider key={themeColorName} theme={{ color: themeColorName }}>
            <PillBadge>{themeColorName}</PillBadge>
          </ThemeProvider>
        ))
      }
    </div>
  )
  .add('Link badges', () =>
    <div>
      {
        Object.keys(badgeColors).map(themeColorName => (
          <ThemeProvider key={themeColorName} theme={{ color: themeColorName }}>
            <LinkBadge>{themeColorName}</LinkBadge>
          </ThemeProvider>
        ))
      }
    </div>
  )