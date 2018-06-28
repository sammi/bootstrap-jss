import React from 'react'
import { storiesOf } from '@storybook/react'
import * as Bootstrap from 'bootstrap-jss'
import injectSheet, { ThemeProvider } from 'react-jss'

const Reboot = Bootstrap.Reboot
const { badge, badgeInButton, badgePill, badgeThemeColors } = Bootstrap.Classes.Badge
const { btn, btnThemeColors, btnOutlineThemeColors } = Bootstrap.Classes.Button


const badgeColors = badgeThemeColors()
const btnColors = btnThemeColors()
const btnOutlineColors = btnOutlineThemeColors()

const styles = theme => ({
  badge: {
    ...Reboot,
    ...badge,
    ...badgeColors[theme.color],
  },
  badgeInButton: {
    ...Reboot,
    ...badgeColors[theme.color],
    ...badgeInButton,
  },
  badgePill: {
    ...Reboot,
    ...badgeColors[theme.color],
    ...badge,
    ...badgePill,
  },
  btn: {
    ...Reboot,
    ...badgeColors[theme.color],
    ...btnColors[theme.color],
    ...btnOutlineColors[theme.color],
    ...btn
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
  <button type="button" className={classes.btn}>
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
          <div>
            <ButtonBadge>4</ButtonBadge>
          </div>
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
            <div>
              <SpanBadge>{themeColorName}</SpanBadge>
            </div>
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
            <div>
              <PillBadge>{themeColorName}</PillBadge>
            </div>
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
            <div>
              <LinkBadge>{themeColorName}</LinkBadge>
            </div>
          </ThemeProvider>
        ))
      }
    </div>
  )
