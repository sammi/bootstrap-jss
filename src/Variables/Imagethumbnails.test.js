import {bodyBg} from './Body'
import {borderWidth, borderRadius} from './Components'
import {grays, black} from './Colors'
import {rgba} from '../Functions/rgba'
import format from 'string-format'

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
        expect(thumbnailPadding).toEqual('.25rem !default')
        expect(thumbnailBg).toEqual(bodyBg)
        expect(thumbnailBorderWidth).toEqual(borderWidth)
        expect(thumbnailBorderColor).toEqual(grays._300)
        expect(thumbnailBorderRadius).toEqual(borderRadius)
        expect(thumbnailBoxShadow).toEqual(format('0 1px 2px {} !default', rgba(black, .075)))
    })

})