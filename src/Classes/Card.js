import {
  cardBg, cardBorderWidth, cardBorderColor,
  cardBorderRadius, cardSpacerX, cardSpacerY,
  cardCapBg, cardInnerBorderRadius,
  cardImgOverlayPadding,
  cardDeckMargin,
  cardGroupMargin,
  cardColumnsMargin,
  cardColumnsCount,
  cardColumnsGap
} from '../Variables/Cards'
import { size } from '../Functions/size'
import { hover } from '../Mixins/hover'
import { borderRadius, borderTopRadius, borderBottomRadius, borderRightRadius, borderLeftRadius } from '../Mixins/borderRadius'
import { mediaBreakpointUp } from '../Mixins/breakpoints'
import { enableRounded } from '../Variables/Options'
import { listGroup, listGroupItem } from './ListGroup'

const card = {
  listGroup: listGroup,
  listGroupItem: listGroupItem,
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
  '> $listGroup:first-child': {
    '$listGroupItem:first-child': {
      ...borderTopRadius(cardBorderRadius)
    }
  },
  '> $listGroup:last-child': {
    '$listGroupItem:last-child': {
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
  listGroup: listGroup,
  listGroupItem: listGroupItem,
  padding: `${cardSpacerY} ${cardSpacerX}`,
  marginBottom: 0,
  backgroundColor: cardCapBg,
  borderBottom: `${cardBorderWidth} solid ${cardBorderColor}`,
  '&:first-child': {
    ...borderRadius(`${cardInnerBorderRadius} ${cardInnerBorderRadius} 0 0`)
  },
  '+ $listGroup': {
    '$listGroupItem:first-child': {
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

const cardHeaderTabs = {
  marginRight: `-${size(cardSpacerX).value /2 }${size(cardSpacerX).unit}`,
  marginBottom: `-${cardSpacerY}`,
  marginLeft: `-${size(cardSpacerX).value / 2}${size(cardSpacerX).unit}`,
  borderBottom: 0
}

const cardHeaderPills = {
  marginRight: `-${size(cardSpacerX).value / 2}${size(cardSpacerX).unit}`,
  marginLeft: `-${size(cardSpacerX).value / 2}${size(cardSpacerX).unit}`
}

const cardImgOverlay = {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  padding: cardImgOverlayPadding
}

const cardImg = {
  width: '100%',
  ...borderRadius(cardInnerBorderRadius)
}

const cardImgTop = {
  width: '100%',
  ...borderTopRadius(cardInnerBorderRadius)
}

const cardImgBottom = {
  width: '100%',
  ...borderBottomRadius(cardInnerBorderRadius)
}

const cardDeck = {
  display: 'flex',
  flexDirection: 'column',
  card: {
    marginBottom: cardDeckMargin
  },
  ...mediaBreakpointUp('sm', {
    flexFlow: 'row wrap',
    marginRight: `-${cardDeckMargin}`,
    marginLeft: `-${cardDeckMargin}`,
    card: {
      display: 'flex',
      flex: '1 0 0%',
      flexDirection: 'column',
      marginRight: cardDeckMargin,
      marginBottom: 0,
      marginLeft: cardDeckMargin
    }
  })
}

const cardGroup = (isEenableRounded = enableRounded) => {
  const isEenableRoundedValue = (isEenableRounded) => ({
    cardImgTop,
    cardHeader,
    cardImgBottom,
    cardFooter,
    '&:first-child': {
      ...borderRightRadius(0),
      '$cardImgTop,$cardHeader': {
        borderTopRightRadius: 0
      },
      '$cardImgBottom,$cardFooter': {
        borderBottomRightRadius: 0
      }
    },
    '&:last-child': {
      ...borderLeftRadius(0),
      '$cardImgTop,$cardHeader': {
        borderTopLeftRadius: 0
      },
      '$cardImgBottom,$cardFooter': {
        borderBottomLeftRadius: 0
      }
    },
    '&:only-child': {
      ...borderRadius(cardBorderRadius),
      '$cardImgTop,$cardHeader': {
        ...borderTopRadius(cardBorderRadius)
      },
      '$cardImgBottom,$cardFooter': {
        ...borderBottomRadius(cardBorderRadius)
      }
    },
    '&:not(:first-child):not(:last-child):not(:only-child)': {
      ...borderRadius(0),
      '$cardImgTop,$cardImgBottom,$cardHeader,$cardFooter': {
        ...borderRadius(0)
      }
    }
  })

  const cardGroupValue = (isEenableRounded) => ({
    display: 'flex',
    flexDirection: 'column',
    '> card': {
      marginBottom: cardGroupMargin
    },
    ...mediaBreakpointUp('sm', {
      flexFlow: 'row wrap',
      '> card': {
        flex: '1 0 0%',
        marginBottom: 0,
        '+ card': {
          marginLeft: 0,
          borderLeft: 0
        },
        ...isEenableRoundedValue(isEenableRounded)
      }
    })
  })

  return cardGroupValue(isEenableRounded)
}

const cardColumns = {
  'card': {
    marginBottom: cardColumnsMargin
  },
  ...mediaBreakpointUp('sm', {
    columnCount: cardColumnsCount,
    columnGap: cardColumnsGap,
    orphans: 1,
    widows: 1,
    card: {
      display: 'inline-block',
      width: '100%'
    }
  })
}

const accordion = {
  'card:not(:first-of-type):not(:last-of-type)': {
    borderBottom: 0,
    borderRadius: 0
  },
  'card:not(:first-of-type)': {
    'cardHeader:first-child': {
      borderRadius: 0
    }
  },
  'card:first-of-type': {
    borderBottom: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
  },
  'card:last-of-type': {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0
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
  cardFooter,
  cardHeaderTabs,
  cardHeaderPills,
  cardImgOverlay,
  cardImg,
  cardImgTop,
  cardImgBottom,
  cardDeck,
  cardGroup,
  cardColumns,
  accordion
}
