import { size } from '../Functions/size'

import {
  spacer,
  spacers,
  sizes
} from './Spacing'

// Control the default styling of most Bootstrap elements by modifying these variables. Mostly focused on spacing.
describe('Spacing', () => {
  it('Quickly modify global styling by enabling or disabling optional features.', () => {
    expect(spacer).toEqual('1rem')

    // You can add more entries to the $spacers map, should you need more variation.
    expect(spacers).toEqual({
      _0: 0,
      _1: `${size(spacer).value * 0.25}${size(spacer).unit}`,
      _2: `${size(spacer).value * 0.5}${size(spacer).unit}`,
      _3: spacer,
      _4: `${size(spacer).value * 1.5}${size(spacer).unit}`,
      _5: `${size(spacer).value * 3}${size(spacer).unit}`,
    })

    // This variable affects the `.h-*` and `.w-*` classes.
    expect(sizes).toEqual({
      _25: '25%',
      _50: '50%',
      _75: '75%',
      _100: '100%',
      auto: 'auto'
    })
  })
})
