import React from 'react'
import { storiesOf } from '@storybook/react'
import { Classes } from 'bootstrap-jss'
import injectSheet, { ThemeProvider } from 'react-jss'

const { btn, btnSm, btnThemeColors, btnOutlineThemeColors } = Classes.Buttons

const simpleButtonColors = btnThemeColors()
const outlineButtonColors = btnOutlineThemeColors()

const SimpleButton = injectSheet(theme => ({
  btn: {
    ...btn,
    ...btnSm,
    ...simpleButtonColors[theme.color],
    marginRight: '2px'
  },
}))(
  ({ classes, children }) =>
      <button type="button" className={classes.btn}>{children}</button>
)

const OutlineButton = injectSheet(theme => ({
  btn: {
    ...btn,
    ...btnSm,
    ...outlineButtonColors[theme.color],
    marginRight: '2px'
  },
}))(
  ({ classes, children }) =>
      <button type="button" className={classes.btn}>{children}</button>
)

storiesOf('Buttons', module)
  .add('Simple Buttons', () =>
    <div>
      {
        Object.keys(simpleButtonColors).map(themeColorName => (
          <ThemeProvider key={themeColorName} theme={{ color: themeColorName }}>
              <SimpleButton>{themeColorName}</SimpleButton>
          </ThemeProvider>
        ))
      }
    </div>
  )
  .add('Outline Buttons', () =>
  <div>
  {
    Object.keys(outlineButtonColors).map(themeColorName => (
      <ThemeProvider key={themeColorName} theme={{ color: themeColorName }}>
          <OutlineButton>{themeColorName}</OutlineButton>
      </ThemeProvider>
    ))
  }
</div>
)
