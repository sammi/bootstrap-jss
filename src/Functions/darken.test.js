import {darken} from './darken'

describe('darken', () => {
  it('darken', () => {
    expect(darken('#FFF', '0%')).toEqual('#ffffff')
    expect(darken('#AAbBCD', '10%')).toEqual('#8aa1ba')
    expect(darken('#abc', '10%')).toEqual('#8aa2b9')
    expect(darken('#def', '10%')).toEqual('#aad4ff')
    expect(darken('#000', '10%')).toEqual('#000000')
    expect(darken('#fff', '10%')).toEqual('#e6e6e6')
    expect(darken('#bdcdef', '70%')).toEqual('#0e1c39')
  })
})
