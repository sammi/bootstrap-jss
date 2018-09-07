import { size } from '../Functions/size'
import { spacer } from '../Variables/Spacing'
import { tableBg, tableCellPadding, tableBorderWidth, tableBorderColor, tableCellPaddingSm, tableStripedOrder, tableAccentBg, tableHoverBg } from '../Variables/Tables'
import { bodyBg } from '../Variables/Body'
import { hover } from '../Mixins/hover'

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

export {
    table,
    tableSm,
    tableBordered,
    tableBorderLess,
    tableStriped,
    tableHover
}
