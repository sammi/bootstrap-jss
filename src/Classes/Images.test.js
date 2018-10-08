import { imgFluid as imgFluidMixin } from '../Mixins/image'
import { thumbnailPadding, thumbnailBg, thumbnailBorderWidth, thumbnailBorderColor, thumbnailBorderRadius, thumbnailBoxShadow } from '../Variables/Imagethumbnails'
import { borderRadius } from '../Mixins/borderRadius'
import { boxShadow } from '../Mixins/boxShadow'
import { size } from '../Functions/size'
import { figureCaptionFontSize, figureCaptionColor } from '../Variables/Figures'
import { spacer } from '../Variables/Spacing'
import { imgFluid, imgThumbnail, figure, figureImg, figureCaption } from './Images'
import jss from 'jss'
import preset from 'jss-preset-default'
jss.setup(preset())

describe('Images', () => {
  it('img-fluid', () => {
    expect(imgFluid).toEqual({ ...imgFluidMixin })
    expect(jss.createStyleSheet({ imgFluid }).toString()).toBeDefined()
  })

  it('img-thumbnail', () => {
    expect(imgThumbnail).toEqual({
      padding: thumbnailPadding,
      backgroundColor: thumbnailBg,
      border: `${thumbnailBorderWidth} solid ${thumbnailBorderColor}`,
      ...borderRadius(thumbnailBorderRadius),
      ...boxShadow(thumbnailBoxShadow),
      ...imgFluidMixin
    })
    expect(jss.createStyleSheet({ imgThumbnail }).toString()).toBeDefined()
  })

  it('figure', () => {
    expect(figure).toEqual({
      display: 'inline-block'
    })
    expect(jss.createStyleSheet({ figure }).toString()).toBeDefined()
  })

  it('figure-img', () => {
    const spacerSize = size(spacer)
    expect(figureImg).toEqual({
      marginBottom: `${spacerSize.value / 2}${spacerSize.unit}`,
      lineHeight: 1
    })
    expect(jss.createStyleSheet({ figureImg }).toString()).toBeDefined()
  })

  it('figure-captio', () => {
    expect(figureCaption).toEqual({
      fontSize: figureCaptionFontSize,
      color: figureCaptionColor
    })
    expect(jss.createStyleSheet({ figureCaption }).toString()).toBeDefined()
  })
})
