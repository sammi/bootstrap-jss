import { size } from '../Functions/size'

export const spacer = '1rem'
export const spacers = {
  _0: 0,
  _1: `${size(spacer).value * 0.25}${size(spacer).unit}`,
  _2: `${size(spacer).value * 0.5}${size(spacer).unit}`,
  _3: spacer,
  _4: `${size(spacer).value * 1.5}${size(spacer).unit}`,
  _5: `${size(spacer).value * 3}${size(spacer).unit}`,
}

// This variable affects the `.h-*` and `.w-*` classes.
export const sizes = {
  _25: '25%',
  _50: '50%',
  _75: '75%',
  _100: '100%',
  auto: 'auto'
}
