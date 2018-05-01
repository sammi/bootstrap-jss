import _ from 'lodash'
import format from 'string-format'

export const size = (rawSize) => {

    const sizeString = _.replace(rawSize, '!default', '').trim()

    const remString = _.replace(sizeString, 'rem', '')

    return {
        value: parseFloat(remString),
        unit: 'rem'
    }
}