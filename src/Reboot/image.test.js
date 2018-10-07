import { image } from './image'

describe('Reboot', () => {
  it('image', () => {
    expect(image).toEqual({
      '@global': {
        img: {
          verticalAlign: 'middle',
          borderStyle: 'none'
        },
        'svg:not(:root)': {
          overflow: 'hidden'
        }
      }
    })
  })
})
