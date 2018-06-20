
import {badgePaddingY, badgePaddingX, badgeFontSize, badgeFontWeight, badgeBorderRadius} from '../Variables/Badges'
import { borderRadius } from '../Mixins/borderRadius'

import {badge} from './Badge'

describe('Badge classes', () => {

    it('badge', () => {
        expect(badge).toEqual({
            display: 'inline-block',
            padding: `${badgePaddingY} ${badgePaddingX}`,
            fontSize: badgeFontSize,
            fontWeight: badgeFontWeight,
            lineHeight: 1,
            textAlign: 'center',
            whiteSpace: 'nowrap',
            verticalAlign: 'baseline',
            ...borderRadius(badgeBorderRadius),
            '&:empty': {
              display: 'none'
            }
        })
    })
})