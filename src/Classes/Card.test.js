import {
  cardBg, cardBorderWidth, cardBorderColor,
  cardBorderRadius, cardSpacerX, cardSpacerY,
  cardCapBg, cardInnerBorderRadius
} from '../Variables/Cards'
import { size } from '../Functions/size'
import { hover } from '../Mixins/hover'
import { borderRadius, borderTopRadius, borderBottomRadius } from '../Mixins/borderRadius'

import {
  card, cardBody, cardTitle, cardSubtitle, cardText, cardLink, cardHeader,
  cardFooter, cardHeaderTabs, cardHeaderPills, cardImgOverlay,
  cardImg, cardImgTop, cardImgBottom, cardDeck, cardGroup, cardColumns,
  accordion
} from './Card'

describe('card', () => {
  expect(card).toEqual({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    minWidth: 0,
    wordWrap: 'break-word',
    backgroundColor: cardBg,
    backgroundClip: 'border-box',
    border: `${cardBorderWidth} solid ${cardBorderColor}`,
    ...borderRadius(cardBorderRadius),
    '> hr': {
      marginRight: 0,
      marginLeft: 0
    },
    '> listGroup:first-child': {
      'listGroupItem:first-child': {
        ...borderTopRadius(cardBorderRadius)
      }
    },
    '> listGroup:last-child': {
      'listGroupItem:last-child': {
        ...borderBottomRadius(cardBorderRadius)
      }
    }
  })

  expect(cardBody).toEqual({
    flex: '1 1 auto',
    padding: cardSpacerX
  })

  expect(cardTitle).toEqual({
    marginBottom: cardSpacerY
  })

  expect(cardSubtitle).toEqual({
    marginTop: `-${size(cardSpacerY).value / 2}${size(cardSpacerY).unit}`,
    marginBottom: 0
  })

  expect(cardText).toEqual({
    '&:last-child': {
      marginBottom: 0
    }
  })

  expect(cardLink).toEqual({
    ...hover({
      textDecoration: 'none'
    }),
    '+ cardLink': {
      marginLeft: cardSpacerX
    }
  })

  expect(cardHeader).toEqual({
    padding: `${cardSpacerY} ${cardSpacerX}`,
    marginBottom: 0,
    backgroundColor: cardCapBg,
    borderBottom: `${cardBorderWidth} solid ${cardBorderColor}`,
    '&:first-child': {
      ...borderRadius(`${cardInnerBorderRadius} ${cardInnerBorderRadius} 0 0`)
    },
    '+ listGroup': {
      'listGroupItem:first-child': {
        borderTop: 0
      }
    }
  })

  expect(cardFooter).toEqual({
    padding: `${cardSpacerY} ${cardSpacerX}`,
    backgroundColor: cardCapBg,
    borderdTop: `${cardBorderWidth} solid ${cardBorderColor}`,
    '&:last-child': {
      ...borderRadius(`0 0 ${cardInnerBorderRadius} ${cardInnerBorderRadius}`)
    }
  })

  expect(cardHeaderTabs).toEqual({})

  expect(cardHeaderPills).toEqual({})

  expect(cardImgOverlay).toEqual({})

  expect(cardImg).toEqual({})

  expect(cardImgTop).toEqual({})

  expect(cardImgBottom).toEqual({})

  expect(cardDeck).toEqual({})

  expect(cardGroup).toEqual({})

  expect(cardColumns).toEqual({})

  expect(accordion).toEqual({})
})