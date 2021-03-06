import { bodyBg } from './Body'
import { borderWidth, borderRadius } from './Components'
import { grays, black } from './Colors'
import { rgba } from '../Functions/rgba'

import {
  thumbnailPadding,
  thumbnailBg,
  thumbnailBorderWidth,
  thumbnailBorderColor,
  thumbnailBorderRadius,
  thumbnailBoxShadow
} from './Imagethumbnails'

describe('Imagethumbnails', () => {
  it('Imagethumbnails', () => {
    expect(thumbnailPadding).toEqual('.25rem')
    expect(thumbnailBg).toEqual(bodyBg)
    expect(thumbnailBorderWidth).toEqual(borderWidth)
    expect(thumbnailBorderColor).toEqual(grays._300)
    expect(thumbnailBorderRadius).toEqual(borderRadius)
    expect(thumbnailBoxShadow).toEqual(`0 1px 2px ${rgba(black, 0.075)}`)
  })
})
