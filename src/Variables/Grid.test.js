import {
  gridBreakpoints,
  containerMaxWidths,
  gridColumns,
  gridGutterWidth
} from './Grid'

describe('Grid breakpoints', () => {
  it('Define the minimum dimensions at which your layout will change, adapting to different screen sizes, for use in media queries.', () => {
    expect(gridBreakpoints).toEqual({
      xs: 0,
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    })
  })
})
describe('Grid containers', () => {
  it('Define the maximum width of `.container` for different screen sizes.', () => {
    expect(containerMaxWidths).toEqual({
      sm: '540px',
      md: '720px',
      lg: '960px',
      xl: '1140px'
    })
  })
})

describe('Grid columns', () => {
  it('Set the number of columns and specify the width of the gutters.', () => {
    expect(gridColumns).toEqual(12)
    expect(gridGutterWidth).toEqual('30px')
  })
})
