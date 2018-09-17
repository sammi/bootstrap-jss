import { alignBaseline, alignTop, alignMiddle, alignBottom, alignTextBottom, alignTextTop } from './Align'
describe('', () => {
  it('align-baseline', () => {
    expect(alignBaseline).toEqual({
      verticalAlign: 'baseline !important'
    })
  })

  it('align-top', () => {
    expect(alignTop).toEqual({
      verticalAlign: 'top !important'
    })
  })

  it('align-middle', () => {
    expect(alignMiddle).toEqual({
      verticalAlign: 'middle !important'
    })
  })

  it('align-bottom', () => {
    expect(alignBottom).toEqual({
      verticalAlign: 'bottom !important'
    })
  })

  it('align-text-bottom', () => {
    expect(alignTextBottom).toEqual({
      verticalAlign: 'text-bottom !important'
    })
  })

  it('align-text-top', () => {
    expect(alignTextTop).toEqual({
      verticalAlign: 'text-top !important'
    })
  })
})
