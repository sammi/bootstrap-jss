import { borderLeftRadius, borderRightRadius } from './borderRadius'

export const paginationSize = (paddingY, paddingX, fontSize, lineHeight, borderRadius) => ({
    'pageLink': {
        padding: `${paddingY} ${paddingX}`,
        fontSize: fontSize,
        lineHeight: lineHeight
    },
    'pageItem': {
        '&:first-child': {
            'pageLink': {
                ...borderLeftRadius(borderRadius)
            }
        },
        '&:last-child': {
            'pageLink': {
                ...borderRightRadius(borderRadius)
            }
        }
    }
})