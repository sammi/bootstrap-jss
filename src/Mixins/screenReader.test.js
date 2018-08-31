import { srOnly, srOnlyFocusable } from './screenReader'

describe('screen reader, Only display content to screen readers', () => {
  it('srOnly', () => {
    expect(srOnly).toEqual({
      position: 'absolute',
      width: '1px',
      height: '1px',
      padding: 0,
      overflow: 'hidden',
      clip: 'rect(0, 0, 0, 0)',
      whiteSpace: 'nowrap',
      border: 0
    })
  })

  it('srOnlyFocusable', () => {
    expect(srOnlyFocusable).toEqual({
      '&:active, &:focus': {
        position: 'static',
        width: 'auto',
        height: 'auto',
        overflow: 'visible',
        clip: 'auto',
        whiteSpace: 'normal'
      }
    })
  })
})
