import { borderWidth, borderColor, borderRadius } from '../Variables/Components'
import { themeColors, white } from '../Variables/Colors'

import {
  border, borderTop, borderRight, borderBottom, borderLeft,
  borderThemeColors, borderWhite,
  rounded, roundedTop, roundedRight, roundedBottom, roundedLeft, roundedCircle, roundedNone
} from './Borders'

describe('borders', () => {
  const borderValue = `${borderWidth} solid ${borderColor} !important`

  it('border', () => {
    expect(border).toEqual({
      border: borderValue
    })
  })

  it('border-top', () => {
    expect(borderTop).toEqual({
      borderTop: borderValue
    })
  })

  it('border-right', () => {
    expect(borderRight).toEqual({
      borderRight: borderValue
    })
  })

  it('border-bottom', () => {
    expect(borderBottom).toEqual({
      borderBottom: borderValue
    })
  })

  it('border-left', () => {
    expect(borderLeft).toEqual({
      borderLeft: borderValue
    })
  })

  it('border theme colors', () => {
    let borderThemeColorsValue = {}
    for (const [color, value] of Object.entries(themeColors)) {
      borderThemeColorsValue[`border-${color}`] = {
        borderColor: `${value} !important`
      }
    }
    expect(borderThemeColors).toEqual(borderThemeColorsValue)
  })

  it('border-white', () => {
    expect(borderWhite).toEqual({
      borderColor: `${white} !important`
    })
  })

  it('rounded', () => {
    expect(rounded).toEqual({
      borderRadius: `${borderRadius} !important`
    })
  })

  it('rounded-top', () => {
    expect(roundedTop).toEqual({
      borderTopLeftRadius: `${borderRadius} !important`,
      borderTopRightRadius: `${borderRadius} !important`
    })
  })

  it('rounded-right', () => {
    expect(roundedRight).toEqual({
      borderTopRightRadius: `${borderRadius} !important`,
      borderBottomRightRadius: `${borderRadius} !important`
    })
  })

  it('rounded-bottom', () => {
    expect(roundedBottom).toEqual({
      borderBottomRightRadius: `${borderRadius} !important`,
      borderBottomLeftRadius: `${borderRadius} !important`
    })
  })

  it('rounded-left', () => {
    expect(roundedLeft).toEqual({
      borderTopLeftRadius: `${borderRadius} !important`,
      borderBottomLeftRadius: `${borderRadius} !important`
    })
  })

  it('rounded-circle', () => {
    expect(roundedCircle).toEqual({
      borderRadius: '50% !important'
    })
  })

  it('rounded-0', () => {
    expect(roundedNone).toEqual({
      borderRadius: '0 !important'
    })
  })
})
