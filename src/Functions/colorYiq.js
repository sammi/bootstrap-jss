import Color from 'color'
import {yiqContrastedThreshold, yiqTextDark, yiqTextLight} from '../Variables/Colors'

export const colorYiq = rawColor => {
  const rgbColor = Color(rawColor)

  const r = rgbColor.red()
  const g = rgbColor.green()
  const b = rgbColor.blue()

  const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000
  return yiq >= yiqContrastedThreshold ? yiqTextDark : yiqTextLight
}
