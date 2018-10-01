import { borderLeftRadius, borderRightRadius } from './borderRadius'
import { paginationSize } from './pagination'

describe('Pagination', () => {
  it('pagination size', () => {
    const paddingY = 0
    const paddingX = 0
    const fontSize = '12px'
    const lineHeight = '2px'
    const borderRadius = '4px'
    expect(paginationSize(paddingY, paddingX, fontSize, lineHeight, borderRadius)).toEqual({
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
  })
})
