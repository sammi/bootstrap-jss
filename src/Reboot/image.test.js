import { image } from './image'

describe('Reboot', () => {
  it('image', () => {
    expect(image).toEqual({
      img: {
        verticalAlign: 'middle',
        borderStyle: 'none' // Remove the border on images inside links in IE 10-.
      },
      'svg:not(:root)': {
        overflow: 'hidden' // Hide the overflow in IE
      }
    })
  })
})
