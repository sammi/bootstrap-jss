import { gridBreakpoints } from './Grid'

import {
  printPageSize,
  printBodyMinWidth
} from './Printing'

describe('Printing', () => {
  it('Printing', () => {
    expect(printPageSize).toEqual('a3')
    expect(printBodyMinWidth).toEqual(gridBreakpoints.lg)
  })
})
