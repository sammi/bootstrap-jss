import {grays, white, black} from './Colors'
import {borderWidth, borderRadius, componentActiveColor, componentActiveBg} from './Components'
import {rgba} from '../Functions/rgba'
import format from 'string-format'
import {bodyColor} from './Body'

import {
    listGroupBg,
    listGroupBorderColor,
    listGroupBorderWidth,
    listGroupBorderRadius,    
    listGroupItemPaddingY,
    listGroupItemPaddingX,    
    listGroupHoverBg,
    listGroupActiveColor,
    listGroupActiveBg,
    listGroupActiveBorderColor,    
    listGroupDisabledColor,
    listGroupDisabledBg,    
    listGroupActionColor,
    listGroupActionHoverColor,    
    listGroupActionActiveColor,
    listGroupActionActiveBg
} from './Listgroup'

describe('Listgroup', () => {
    it('Listgroup', () => {
        expect(listGroupBg).toEqual(white)
        expect(listGroupBorderColor).toEqual(format('{}', rgba(black, .125)))
        expect(listGroupBorderWidth).toEqual(borderWidth)
        expect(listGroupBorderRadius).toEqual(borderRadius)
        
        expect(listGroupItemPaddingY).toEqual('.75rem')
        expect(listGroupItemPaddingX).toEqual('1.25rem')
        
        expect(listGroupHoverBg).toEqual(grays._100)
        expect(listGroupActiveColor).toEqual(componentActiveColor)
        expect(listGroupActiveBg).toEqual(componentActiveBg)
        expect(listGroupActiveBorderColor).toEqual(listGroupActiveBg)
        
        expect(listGroupDisabledColor).toEqual(grays._600)
        expect(listGroupDisabledBg).toEqual(listGroupBg)
        
        expect(listGroupActionColor).toEqual(grays._700)
        expect(listGroupActionHoverColor).toEqual(listGroupActionColor)
        
        expect(listGroupActionActiveColor).toEqual(bodyColor)
        expect(listGroupActionActiveBg).toEqual(grays._200)
    })
})
