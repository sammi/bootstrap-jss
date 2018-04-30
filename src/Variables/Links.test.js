import {themeColors} from './Colors'
import {
    linkColor,
    linkDecoration,
    linkHoverColor,
    linkHoverDecoration
} from './Links'

describe('Links', () => {

    it('Style anchor elements.', () => {
        expect(linkColor).toEqual(themeColors.primary)
        expect(linkDecoration).toEqual('none !default')
        expect(linkHoverColor).toEqual(themeColors.primary)
        expect(linkHoverDecoration).toEqual('underline !default')
    })

})