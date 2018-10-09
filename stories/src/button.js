import React from 'react'
import { storiesOf } from '@storybook/react'
import { Reboot, Classes } from 'bootstrap-jss'
import { replace } from 'lodash'
import injectSheet, { ThemeProvider } from 'react-jss'
const { btn, btnLg, btnSm, btnLink, btnThemeColors, btnBlock, btnOutlineThemeColors } = Classes.Buttons
const { btnGroup, btnGroupToggle, btnToolbar } = Classes.ButtonGroup

const themeColors = btnThemeColors()
const themeOutlineColors = btnOutlineThemeColors()

const Button = injectSheet(theme => ({
  active: {},
  disabled: {},
  show: {},
  focus: {},
  dropdownToggle: {},
  btn: {
    ...Reboot.forms,
    ...btn,
    ...themeColors[theme.color],
    marginRight: '0.25rem'
  }
}))(({ themeKey, classes }) =>
  <button className={classes.btn}>{themeKey}</button>
)

const OutlineButton = injectSheet(theme => ({
  active: {},
  disabled: {},
  show: {},
  focus: {},
  dropdownToggle: {},
  btn: {
    ...Reboot.forms,
    ...btn,
    ...themeOutlineColors[theme.color],
    marginRight: '0.25rem'
  }
}))(({ themeKey, classes }) =>
  <button className={classes.btn}>{themeKey}</button>
)

const ButtonGroups = injectSheet(theme => ({
  btn,
  btnGroup,
  btnGroupToggle,
  btnLink,
  dropdownToggle: {},
  reboot: {
    ...Reboot.forms
  },
  themeColor: {
    ...themeColors[theme.color],
    borderRadius: 0
  },
  active: {},
  disabled: {},
  show: {},
  focus: {},
  btnContainer: {
    composes: ['$reboot', '$btnGroup', '$btnGroupToggle'],
    display: 'block',
    margin: '0.25rem'
  },
  btnActivethemeColor: {
    composes: ['$btn', '$themeColor', '$active']
  },
  btnThemeColor: {
    composes: ['$btn', '$themeColor']
  }
}))(({ classes }) =>
  <div className={classes.btnContainer} >
    <label className={classes.btnActivethemeColor}>
      <input type="radio" name="options" id="option1" /> checked
    </label>

    <label className={classes.btnThemeColor}>
      <input type="radio" name="options" id="option2" /> Radio
    </label>

    <label className={classes.btnThemeColor}>
      <input type="radio" name="options" id="option3" /> Radio
    </label>
  </div>
)

const ButtonSizes = injectSheet({
  btn,
  btnBlock,
  btnLg,
  btnSm,
  reboot: {
    ...Reboot.forms
  },
  primaryColor: {
    ...themeColors.btnPrimary
  },
  secondaryColor: {
    ...themeColors.btnSecondary
  },
  active: {},
  disabled: {},
  show: {},
  focus: {},
  dropdownToggle: {},
  btnMargin: {
    display: 'block',
    margin: '0.25rem'
  },
  btnPrimaryLarge: {
    composes: ['$btnMargin', '$reboot', '$btn', '$btnLg', '$primaryColor'],
  },
  btnSecondaryLarge: {
    composes: ['$btnMargin', '$reboot', '$btn', '$btnLg', '$secondaryColor'],
  },
  btnPrimarySmall: {
    composes: ['$btnMargin', '$reboot', '$btn', '$btnSm', '$primaryColor'],
  },
  btnSecondarySmall: {
    composes: ['$btnMargin', '$reboot', '$btn', '$btnSm', '$secondaryColor'],
  },
  btnPrimaryBlock: {
    composes: ['$btnMargin', '$reboot', '$btn', '$btnBlock', '$primaryColor'],
  },
  btnSecondaryBlock: {
    composes: ['$btnMargin', '$reboot', '$btn', '$btnBlock', '$secondaryColor'],
  },
})( ({ classes }) => (
  <div>
    <button type="button" className={classes.btnPrimaryLarge}>Primary Large</button>
    <button type="button" className={classes.btnSecondaryLarge}>Secondary Large</button>
    <button type="button" className={classes.btnPrimarySmall}>Primary Small</button>
    <button type="button" className={classes.btnSecondarySmall}>Secondary Small</button>
    <button type="button" className={classes.btnPrimaryBlock}>Primary Block</button>
    <button type="button" className={classes.btnSecondaryBlock}>Secondar Block</button>
  </div>
))

const ButtonStates = injectSheet({
  btn,
  btnBlock,
  btnLg,
  btnLink: {
    ...btnLink,
    textDecoration: 'none'
  },
  primaryColor: {
    ...themeColors.btnPrimary
  },
  secondaryColor: {
    ...themeColors.btnSecondary
  },
  active: {},
  disabled: {},
  show: {},
  focus: {},
  dropdownToggle: {},
  btnMargin: {
    display: 'block',
    margin: '0.25rem'
  },
  btnPrimaryLarge: {
    composes: ['$btnMargin', '$btn', '$btnLg', '$primaryColor'],
  },
  btnSecondaryLarge: {
    composes: ['$btnMargin', '$btn', '$btnLg', '$secondaryColor'],
  },
  btnPrimaryLargeDisabled: {
    composes: ['$btnMargin', '$btn', '$btnLg', '$primaryColor', '$disabled', '$btnLink'],
  },
  btnSecondaryLargeDisabled: {
    composes: ['$btnMargin', '$btn', '$btnLg', '$secondaryColor', '$disabled', '$btnLink'],
  }
})( ({ classes }) => (
  <div>
    <button type="button" className={classes.btnPrimaryLarge} disabled>Primary Large</button>
    <button type="button" className={classes.btnSecondaryLarge} disabled>Secondary Large</button>
    <a href="#" className={classes.btnPrimaryLargeDisabled}>Primary link</a>
    <a href="#" className={classes.btnSecondaryLargeDisabled}>Link</a>
  </div>
))

const ButtonToolbar = injectSheet({
  btnToolbar,
  btn,
  btnGroup: {
    ...btnGroup,
    marginRight: '0.25rem'
  },
  primaryColor: {
    ...themeColors.btnPrimary,
    borderRadius: 0
  },
  secondaryColor: {
    ...themeColors.btnSecondary,
    borderRadius: 0
  },
  dangerColor: {
    ...themeColors.btnDanger,
    borderRadius: 0
  },
  inputGroup: {},
  btnLink: {},
  active: {},
  disabled: {},
  show: {},
  focus: {},
  dropdownToggle: {},
  btnPrimary: {
    composes: ['$btn', '$primaryColor']
  },
  btnSecondary: {
    composes: ['$btn', '$secondaryColor']
  }
})( ({ classes }) => (
  <div className={classes.btnToolbar}>
    <div className={classes.btnGroup}>
      <button type="button" className={classes.btnPrimary}>1</button>
      <button type="button" className={classes.btnPrimary}>2</button>
      <button type="button" className={classes.btnPrimary}>3</button>
      <button type="button" className={classes.btnPrimary}>4</button>
    </div>
    <div className={classes.btnGroup}>
      <button type="button" className={classes.btnSecondary}>5</button>
      <button type="button" className={classes.btnSecondary}>6</button>
      <button type="button" className={classes.btnSecondary}>7</button>
    </div>
    <div className={classes.btnGroup}>
      <button type="button" className={classes.dangerColor}>8</button>
    </div>
</div>
))

storiesOf('Button', module)
  .add('button', () => 
    <div>
        {
          Object.keys(themeColors).map(themeColorName => (
            <ThemeProvider key={themeColorName} theme={{ color: themeColorName }}>
              <Button themeKey={replace(themeColorName, 'btn', '')}/>
            </ThemeProvider>
          ))
        }
    </div>
  )
  .add('outline', () => 
    <div>
        {
          Object.keys(themeOutlineColors).map(themeColorName => (
            <ThemeProvider key={themeColorName} theme={{ color: themeColorName }}>
              <OutlineButton themeKey={replace(themeColorName, 'btnOutline', '')}/>
            </ThemeProvider>
          ))
        }
    </div>
  )
  .add('groups', () =>
    <div>
      {
        Object.keys(themeColors).map(themeColorName => (
          <ThemeProvider key={themeColorName} theme={{ color: themeColorName }}>
            <ButtonGroups />
          </ThemeProvider>
        ))
      }
    </div>
  )
  .add('sizes', () => <ButtonSizes/>)
  .add('states', () => <ButtonStates/>)
  .add('toolbar', () => <ButtonToolbar/>)
