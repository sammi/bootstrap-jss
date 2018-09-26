import { size } from './size'
describe('size', () => {
  it('size', () => {
    expect(size('1rem !default')).toEqual({ value: 1, unit: 'rem' })
    expect(size('1.5rem !default')).toEqual({ value: 1.5, unit: 'rem' })
    expect(size('.5rem !default')).toEqual({ value: 0.5, unit: 'rem' })
    expect(size('.15px !default')).toEqual({ value: 0.15, unit: 'px' })
  })
})
