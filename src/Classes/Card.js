import {
  cardBg, cardBorderWidth, cardBorderColor,
  cardBorderRadius, cardSpacerX, cardSpacerY,
  cardCapBg, cardInnerBorderRadius
} from '../Variables/Cards'
import { size } from '../Functions/size'
import { hover } from '../Mixins/hover'
import { borderRadius, borderTopRadius, borderBottomRadius } from '../Mixins/borderRadius'

const card = {
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
}

const cardBody = {
  flex: '1 1 auto',
  padding: cardSpacerX
}

const cardTitle = {
  marginBottom: cardSpacerY
}

const cardSubtitle = {
  marginTop: `-${size(cardSpacerY).value / 2}${size(cardSpacerY).unit}`,
  marginBottom: 0
}

const cardText = {
  '&:last-child': {
    marginBottom: 0
  }
}

const cardLink = {
  ...hover({
    textDecoration: 'none'
  }),
  '+ cardLink': {
    marginLeft: cardSpacerX
  }
}

const cardHeader = {
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
}

const cardFooter = {
  padding: `${cardSpacerY} ${cardSpacerX}`,
  backgroundColor: cardCapBg,
  borderdTop: `${cardBorderWidth} solid ${cardBorderColor}`,
  '&:last-child': {
    ...borderRadius(`0 0 ${cardInnerBorderRadius} ${cardInnerBorderRadius}`)
  }
}

export {
  card,
  cardBody,
  cardTitle,
  cardSubtitle,
  cardText,
  cardLink,
  cardHeader,
  cardFooter
}