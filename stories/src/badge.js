import React from 'react'
import { storiesOf } from '@storybook/react'
import * as Bootstrap from 'bootstrap-jss'
import injectSheet, { ThemeProvider } from 'react-jss'

const Reboot = Bootstrap.Reboot
const { badge, badgeInButton, badgePill, badgeThemeColors } = Bootstrap.Classes.Badge
const { btn, btnThemeColors, btnOutlineThemeColors, btnInsideLink } = Bootstrap.Classes.Button

const badgeColors = badgeThemeColors()
const btnColors = btnThemeColors()
const btnOutlineColors = btnOutlineThemeColors()

const HeaderBadge = injectSheet(theme => ({
  badge: {
    ...Reboot,
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
  container: {
    ...Reboot,
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
  badge: {
    ...Reboot,
    ...badge,
    ...badgeColors[theme.color],
    margin: '2px',
  },
})) (
  ({classes, children}) =>
  <span className={classes.badge}>{children}</span>
)

const PillBadge = injectSheet(theme => ({
  badgePill: {
    ...Reboot,
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
  btnInsideLink: {
    ...Reboot,
    ...btn,
    ...badgeColors[theme.color],
    ...btnColors[theme.color],
    ...btnOutlineColors[theme.color],
    margin: '2px'
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
