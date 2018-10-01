import { hover, hoverFocus, plainHoverFocus, hoverFocusActive } from './hover'
describe('hover', () => {
  it('hover', () => {
    const content = { color: 'red' }

    expect(hover(content)).toEqual({ '&:hover': { color: 'red' } })

    expect(hoverFocus(content)).toEqual({
      '&:hover, &:focus': { color: 'red' }
    })

    expect(plainHoverFocus(content)).toEqual({
      '&, &:hover, &:focus': { color: 'red' }
    })

    expect(hoverFocusActive(content)).toEqual({
      '&:hover, &:focus, &:active': { color: 'red' }
    })
  })
})
