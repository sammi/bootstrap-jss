import { sizes } from '../Variables/Spacing'

import { sizing, mw100, mh100 } from './Sizing'

describe('sizing', () => {
  it('sizing', () => {

    const sizingValue = {}
    for (const [prop, abbrev] of Object.entries({ width: 'w', height: 'h' })) {
      for (const [size, length] of Object.entries(sizes)) {
        const propValue = {}
        propValue[`${prop}`] = `${length} !important`
        sizingValue[`${abbrev}-${size.replace('_', '')}`] = { ...propValue }
      }
    }

    expect(sizing).toEqual(sizingValue)
  })

  it('mw-100', () => {
    expect(mw100).toEqual({
      maxWidth: '100% !important'
    })
  })

  it('mh-100', () => {
    expect(mh100).toEqual({
      maxHeight: '100% !important'
    })
  })
})
