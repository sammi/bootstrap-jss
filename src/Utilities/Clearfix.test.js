import { clearfix as clearfixMixin } from '../Mixins/clearfix'

import { clearfix } from './Clearfix'
describe('clearfix', () => {
  it('clearfix', () => {
    expect(clearfix).toEqual({
      ...clearfixMixin
    })
  })
})
