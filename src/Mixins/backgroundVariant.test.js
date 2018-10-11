import { bgVariant, bgGradientVariant } from './backgroundVariant'
import { darken } from '../Functions/darken'
import { hoverFocus } from './hover'
import { bodyBg } from '../Variables/Body'
import { mix } from '../Functions/mix'

describe('Contextual backgrounds', () => {
  const parent = 'parentClass'
  const color = '#abc'

  it('bgVariant', () => {
    expect(bgVariant(parent, color)).toEqual({
      '$parentClass': { backgroundColor: `${color} !important` },
      '& a$parentClass, & button$parentClass': {
        ...hoverFocus({
          backgroundColor: `${darken(color, '10%')} !important`
        })
      }
    })
  })

  it('bgGradientVariant', () => {
    expect(bgGradientVariant(parent, color)).toEqual({
      '&$parentClass': {
        backgroundColor: `${color} ${`linear-gradient(180deg, ${mix(bodyBg, color, '15%')})`} ${color} repeat-x !important`
      }
    })
  })
})
