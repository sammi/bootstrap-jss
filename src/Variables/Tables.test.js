import format from 'string-format'
import {rgba} from '../Functions/rgba'
import {black, grays, white} from './Colors'
import {borderWidth} from './Components'
import {bodyBg} from './Body'
import {textMuted} from './Fonts'
import {lighten} from '../Functions/lighten'

import {
    tableCellPadding,
    tableCellPaddingSm,
    tableBg,
    tableAccentBg,
    tableHoverBg,
    tableActiveBg,
    tableBorderWidth,
    tableBorderColor,
    tableHeadBg,
    tableHeadColor,
    tableDarkBg,
    tableDarkAccentBg,
    tableDarkHoverBg,
    tableDarkBorderColor,
    tableDarkColor,
    tableStripedOrder,
    tableCaptionColor
} from './Tables'

describe('Tables', () => {
    it('Customizes the `.table` component with basic values, each used across all table variations.', () => {

        expect(tableCellPadding).toEqual('.75rem !default')
        expect(tableCellPaddingSm).toEqual('.3rem !default')

        expect(tableBg).toEqual('transparent !default')
        expect(tableAccentBg).toEqual(format('{} !default', rgba(black, .05)))
        expect(tableHoverBg).toEqual(format('{} !default', rgba(black, .075)))
        expect(tableActiveBg).toEqual(tableHoverBg)


        expect(tableBorderWidth).toEqual(borderWidth)
        expect(tableBorderColor).toEqual(grays._300);

        expect(tableHeadBg).toEqual(grays._200)
        expect(tableHeadColor).toEqual(grays._700)

        expect(tableDarkBg).toEqual(grays._900)
        expect(tableDarkAccentBg).toEqual(format('{} !default', rgba(white, .05)))
        expect(tableDarkHoverBg).toEqual(format('{} !default', rgba(white, .075)));
        expect(tableDarkBorderColor).toEqual(format('{} !default', lighten(grays._900, '7.5%')))
        expect(tableDarkColor).toEqual(bodyBg)

        expect(tableStripedOrder).toEqual('odd !default')

        expect(tableCaptionColor).toEqual(textMuted)


    })
})
