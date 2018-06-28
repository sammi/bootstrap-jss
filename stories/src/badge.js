import React from 'react'
import { storiesOf } from '@storybook/react'
import * as Bootstrap from 'bootstrap-jss'
import injectSheet, { ThemeProvider } from 'react-jss'

const Reboot = Bootstrap.Reboot
const { badge, badgeInButton, badgePill, badgeThemeColors } = Bootstrap.Classes.Badge

const themeColors = badgeThemeColors()

const styles = theme => ({
  badge: {
    ...Reboot,
    ...badge,
    ...themeColors[theme.color],
  },
  badgeInButton: {
    ...Reboot,
    ...themeColors[theme.color],
    ...badgeInButton,
  },
  badgePill: {
    ...Reboot,
    ...themeColors[theme.color],
    ...badge,
    ...badgePill,
  }
})

const HeaderBadge = injectSheet(styles) (
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

const ButtonBadge = injectSheet(styles) (
  ({classes, children}) =>
  <button type="button">
    Notifications <span className={classes.badgeInButton}>{children}</span>
  </button>
)

const SpanBadge = injectSheet(styles) (
  ({classes, children}) =>
  <span className={classes.badge}>{children}</span>
)

const PillBadge = injectSheet(styles) (
  ({classes, children}) =>
  <span className={classes.badgePill}>{children}</span>
)

const LinkBadge = injectSheet(styles) (
  ({classes, children}) =>
  <a href="#" className={classes.badge}>{children}</a>
)

storiesOf('Badge', module)
  .add('Badge in header', () =>
    <div>
    {
      Object.keys(themeColors).map(themeColorName => (
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
      Object.keys(themeColors).map(themeColorName => (
        <ThemeProvider key={themeColorName} theme={{ color: themeColorName }}>
          <div>
            <ButtonBadge>4</ButtonBadge>
          </div>
        </ThemeProvider>
      ))
    }
    </div>
  )
  .add('Pill badges', () =>
    <div>
      {
        Object.keys(themeColors).map(themeColorName => (
          <ThemeProvider key={themeColorName} theme={{ color: themeColorName }}>
            <div>
              <SpanBadge>{themeColorName}</SpanBadge>
              <PillBadge>{themeColorName}</PillBadge>
              <LinkBadge>{themeColorName}</LinkBadge>
            </div>
          </ThemeProvider>
        ))
      }
    </div>
  )
