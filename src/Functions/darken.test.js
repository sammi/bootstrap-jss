import {darken} from './darken'

describe('darken', () => {
  it('darken', () => {
    expect(darken('#FFF', '0%')).toEqual('#FFFFFF')
    expect(darken('#AAbBCD', '10%')).toEqual('#92A8BF')
  })
})
