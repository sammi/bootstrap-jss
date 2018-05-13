import {alertVariant, bgVariant, bgGradientVariant} from './variant'
import {darken} from '../Functions/darken'
import {hoverFocus} from './hover'
import format from 'string-format'
import {bodyBg} from '../Variables/Body'
import {mix} from '../Functions/mix'

describe('variant', () => {
  it('alertVariant', () => {
    expect(alertVariant('#fff', '#000', '#0F0', false)).toEqual({
      'alertLink': {
        'color': '#00E600'
      },
      'borderColor': '#000',
      'color': '#0F0',
      'extend': {
        'backgroundColor': '#fff'
      },
      'hr': {
        'borderTopColor': '#000000'
      }
    })

    expect(alertVariant('#fff', '#000', '#0F0', true)).toEqual({
      'alertLink': {
        'color': '#00E600'
      },
      'borderColor': '#000',
      'color': '#0F0',
      'extend': {
        'background': '#fff linear-gradient(180deg, #FFFFFF, #fff) repeat-x'
      },
      'hr': {
        'borderTopColor': '#000000'
      }
    })

    expect(alertVariant('#fff', '#000', '#0F0')).toEqual({
      'alertLink': {
        'color': '#00E600'
      },
      'borderColor': '#000',
      'color': '#0F0',
      'extend': {
        'backgroundColor': '#fff'
      },
      'hr': {
        'borderTopColor': '#000000'
      }
    })
  })
})

describe('Contextual backgrounds', () => {
  const parent = 'parentClass'
  const color = '#abc'

  it('bgVariant', () => {
    expect(bgVariant(parent, color)).toEqual({
      'parentClass': {backgroundColor: format('{} !important', color)},
      'a.parentClass, button.parentClass': {
        extend: hoverFocus({
          backgroundColor: format('{} !important', darken(color, '10%'))
        })
      }
    })
  })

  it('bgGradientVariant', () => {
    expect(bgGradientVariant(parent, color)).toEqual({
      'parentClass': {backgroundColor: format(
        '{} {} {} repeat-x !important',
        color,
        format('linear-gradient(180deg, {}', mix(bodyBg, color, '15%')),
        color
      )}
    })
  })
})
