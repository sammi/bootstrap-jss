import { imgFluid, imgRetina } from './image'

describe('image', () => {
  it('Responsive image, Keep images from scaling beyond the width of their parents.', () => {
    expect(imgFluid).toEqual({
      maxWidth: '100%',
      height: 'auto'
    })
  })

  it('Retina image, short retina mixin for setting background-image and -size', () => {
    const file1x = '1.png'
    const file2x = '2.png'
    const width1x = '100px'
    const height1x = '100px'

    expect(imgRetina(file1x, file2x, width1x, height1x)).toEqual({
      backgroupImage: `url(${file1x})`,
      '@media only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)': {
        backgrondImage: `url${file2x}`,
        backgroundSize: `${width1x} ${height1x}`
      }
    })
  })
})
