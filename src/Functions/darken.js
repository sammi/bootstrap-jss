import Color from 'color'
import _ from 'lodash'
import percentValue from 'percent-value'

export const darken = (rawColor, percent) => {

    const rgbColor = _.replace(rawColor, '!default', '').trim()

    const ratio = percentValue(percent).from(1)

    const darkenColor = Color(rgbColor).darken(ratio)

    return darkenColor.hex()
    
}