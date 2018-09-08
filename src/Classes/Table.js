import { size } from '../Functions/size'
import { spacer } from '../Variables/Spacing'
import { tableBg, tableCellPadding, tableBorderWidth, tableBorderColor, tableCellPaddingSm, tableStripedOrder, tableAccentBg, tableHoverBg, tableActiveBg } from '../Variables/Tables'
import { bodyBg } from '../Variables/Body'
import { hover } from '../Mixins/hover'
import { themeColors } from '../Variables/Colors'
import { tableRowVariant } from '../Mixins/tableRow';
import { themeColorLevel } from '../Functions/themeColorLevel'

const tableBorderWidthSize = size(tableBorderWidth)

const table = {
    width: '100%',
    marginBottom: spacer,
    backgroundColor: tableBg,
    'th,td': {
        padding: tableCellPadding,
        verticalAlign: 'top',
        borderTop: `${tableBorderWidth} solid ${tableBorderColor}`
    },
    'thead th': {
        verticalAlign: 'bottom',
        borderBottom: `${2 * tableBorderWidthSize.value}${tableBorderWidthSize.unit} solid ${tableBorderColor}`
    },
    'tbody + tbody': {
        borderTop: `${2 * tableBorderWidthSize.value}${tableBorderWidthSize.unit} solid ${tableBorderColor}`
    },
    'table': {
        backgroundColor: bodyBg
    }
}

const tableSm = {
    'th,td': {
        padding: tableCellPaddingSm
    }
}

const tableBordered = {
    border: `${tableBorderWidth} solid ${tableBorderColor}`,
    'th,td': {
        border: `${tableBorderWidth} solid ${tableBorderColor}`
    },
    'thead': {
        'th,td': {
            borderBottomWidth: `${2 * tableBorderWidthSize.value}${tableBorderWidthSize.unit}`
        }
    }
}

const tableBorderLess = {
    'th,td,thead th,tbody + tbody': {
        border: 0
    }
}

const tableStriped = {}
tableStriped[`tbody tr:nth-of-type(${tableStripedOrder})`] = {
    backgroundColor: tableAccentBg
}

const tableHover = {
    'tbody tr': {
        ...hover({
            backgroundColor: tableHoverBg
        })
    }
}

let expectValue = {}
for (const [color] of Object.entries(themeColors)) {
    expectValue = {
        ...tableRowVariant(color, themeColorLevel(color, -9))
    }
}
expectValue = {
    ...expectValue,
    ...tableRowVariant('active', tableActiveBg)
}
const tableBackgrounds = expectValue

export {
    table,
    tableSm,
    tableBordered,
    tableBorderLess,
    tableStriped,
    tableHover,
    tableBackgrounds
}
