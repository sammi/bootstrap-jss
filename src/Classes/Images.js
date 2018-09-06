import { imgFluid as imgFluidMixin } from '../Mixins/image'
import { thumbnailPadding, thumbnailBg, thumbnailBorderWidth, thumbnailBorderColor, thumbnailBorderRadius, thumbnailBoxShadow } from '../Variables/Imagethumbnails'
import { borderRadius } from '../Mixins/borderRadius'
import { boxShadow } from '../Mixins/boxShadow'
import { size } from '../Functions/size'
import { figureCaptionFontSize, figureCaptionColor } from '../Variables/Figures'
import { spacer } from '../Variables/Spacing'

export const imgFluid = { ...imgFluidMixin }

export const imgThumbnail = {
  padding: thumbnailPadding,
  backgroundColor: thumbnailBg,
  border: `${thumbnailBorderWidth} solid ${thumbnailBorderColor}`,
  ...borderRadius(thumbnailBorderRadius),
  ...boxShadow(thumbnailBoxShadow),
  ...imgFluidMixin
}

export const figure = {
  display: 'inline-block'
}

const spacerSize = size(spacer)

export const figureImg = {
  marginBottom: `${spacerSize.value / 2}${spacerSize.unit}`,
  lineHeight: 1
}

export const figureCaption = {
  fontSize: figureCaptionFontSize,
  color: figureCaptionColor
}
