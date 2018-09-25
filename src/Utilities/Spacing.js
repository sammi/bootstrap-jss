import { gridBreakpoints } from '../Variables/Grid'
import { spacers } from '../Variables/Spacing'
import { mediaBreakpointUp, breakpointInfix } from '../Mixins/breakpoints'

let spacingExpectValue = {}

for (const [name] of Object.entries(gridBreakpoints)) {
  const infix = breakpointInfix(name, gridBreakpoints)
  let styleValue = {}
  for (const [prop, abbrev] of Object.entries({ margin: 'm', padding: 'p' })) {
    for (let [size, length] of Object.entries(spacers)) {
      size = size.replace('_', '')
      let spacerValues = {}
      let spacerValue = {}
      spacerValue[prop] = `${length} !important`
      spacerValues[`${abbrev}${infix}-${size}`] = spacerValue

      spacerValue = {}
      spacerValue[`${prop}-top`] = `${length} !important`
      spacerValues[`${abbrev}t${infix}-${size},${abbrev}y${infix}-${size}`] = spacerValue

      spacerValue = {}
      spacerValue[`${prop}-right`] = `${length} !important`
      spacerValues[`${abbrev}r${infix}-${size},${abbrev}x${infix}-${size}`] = spacerValue

      spacerValue = {}
      spacerValue[`${prop}-bottom`] = `${length} !important`
      spacerValues[`${abbrev}b${infix}-${size},${abbrev}y${infix}-${size}`] = spacerValue

      spacerValue = {}
      spacerValue[`${prop}-left`] = `${length} !important`
      spacerValues[`${abbrev}l${infix}-${size},${abbrev}x${infix}-${size}`] = spacerValue

      styleValue = {
        ...styleValue,
        ...spacerValues
      }
    }
  }

  spacingExpectValue = {
    ...spacingExpectValue,
    ...mediaBreakpointUp(name, gridBreakpoints, styleValue)
  }

  for (let [size, length] of Object.entries(spacers)) {
    size = size.replace('_', '')
    let infixValue = {}
    if (size !== 0) {
      infixValue[`m${infix}-n${size}`] = { margin: `-${length} !important` }
      infixValue[`mt${infix}-n${size},my${infix}-n${size}`] = { marginTop: `-${length} !important` }
      infixValue[`mr${infix}-n${size},mx${infix}-n${size}`] = { marginRight: `-${length} !important` }
      infixValue[`mb${infix}-n${size},my${infix}-n${size}`] = { marginBottom: `-${length} !important` }
      infixValue[`ml${infix}-n${size},mx${infix}-n${size}`] = { marginLeft: `-${length} !important` }
    }

    spacingExpectValue = {
      ...spacingExpectValue,
      ...infixValue
    }
  }

  let marginUtilsValue = {}
  marginUtilsValue[`m${infix}-auto`] = { margin: 'auto !important' }
  marginUtilsValue[`mt${infix}-auto,my${infix}-auto`] = { marginTop: 'auto !important' }
  marginUtilsValue[`mr${infix}-auto,mx${infix}-auto`] = { marginRight: 'auto !important' }
  marginUtilsValue[`mb${infix}-auto,my${infix}-auto`] = { marginBottom: 'auto !important' }
  marginUtilsValue[`ml${infix}-auto,mx${infix}-auto`] = { marginLeft: 'auto !important' }

  spacingExpectValue = {
    ...spacingExpectValue,
    ...marginUtilsValue
  }
}

const spacing = spacingExpectValue

export {
  spacing
}