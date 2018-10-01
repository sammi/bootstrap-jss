import { textHide } from './textHide'
describe('text hide', () => {
  it('text-hide', () => {
    expect(textHide()).toEqual({
      font: '0/0 a',
      color: 'transparent',
      textShadow: 'none',
      backgroundColor: 'transparent',
      border: 0
    })
  })
})
