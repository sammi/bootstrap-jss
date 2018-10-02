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

import {
  card, cardBody, cardTitle, cardSubtitle, cardText, cardLink, cardHeader,
  cardFooter, cardHeaderTabs, cardHeaderPills, cardImgOverlay,
  cardImg, cardImgTop, cardImgBottom, cardDeck, cardGroup, cardColumns,
  accordion
} from './Card'

describe('card', () => {
  it('card', () => {
    expect(card).toEqual({
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
    })
  })

  it('cardBody', () => {
    expect(cardBody).toEqual({
      flex: '1 1 auto',
      padding: cardSpacerX
    })
  })

  it('cardTitle', () => {
    expect(cardTitle).toEqual({
      marginBottom: cardSpacerY
    })
  })

  it('cardSubtitle', () => {
    expect(cardSubtitle).toEqual({
      marginTop: `-${size(cardSpacerY).value / 2}${size(cardSpacerY).unit}`,
      marginBottom: 0
    })
  })

  it('cardText', () => {
    expect(cardText).toEqual({
      '&:last-child': {
        marginBottom: 0
      }
    })
  })

  it('cardLink', () => {
    expect(cardLink).toEqual({
      ...hover({
        textDecoration: 'none'
      }),
      '+ &': {
        marginLeft: cardSpacerX
      }
    })
  })

  it('cardHeader', () => {
    expect(cardHeader).toEqual({
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
    })
  })

  it('cardFooter', () => {
    expect(cardFooter).toEqual({
      padding: `${cardSpacerY} ${cardSpacerX}`,
      backgroundColor: cardCapBg,
      borderdTop: `${cardBorderWidth} solid ${cardBorderColor}`,
      '&:last-child': {
        ...borderRadius(`0 0 ${cardInnerBorderRadius} ${cardInnerBorderRadius}`)
      }
    })
  })

  it('cardHeaderTabs', () => {
    expect(cardHeaderTabs).toEqual({
      marginRight: `-${size(cardSpacerX).value / 2}${size(cardSpacerX).unit}`,
      marginBottom: `-${cardSpacerY}`,
      marginLeft: `-${size(cardSpacerX).value / 2}${size(cardSpacerX).unit}`,
      borderBottom: 0
    })
  })

  it('cardHeaderPills', () => {
    expect(cardHeaderPills).toEqual({
      marginRight: `-${size(cardSpacerX).value / 2}${size(cardSpacerX).unit}`,
      marginLeft: `-${size(cardSpacerX).value / 2}${size(cardSpacerX).unit}`
    })
  })

  it('cardImgOverlay', () => {
    expect(cardImgOverlay).toEqual({
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      padding: cardImgOverlayPadding
    })
  })

  it('cardImg', () => {
    expect(cardImg).toEqual({
      width: '100%',
      ...borderRadius(cardInnerBorderRadius)
    })
  })

  it('cardImgTop', () => {
    expect(cardImgTop).toEqual({
      width: '100%',
      ...borderTopRadius(cardInnerBorderRadius)
    })
  })

  it('cardImgBottom', () => {
    expect(cardImgBottom).toEqual({
      width: '100%',
      ...borderBottomRadius(cardInnerBorderRadius)
    })
  })

  it('cardDeck', () => {
    expect(cardDeck).toEqual({
      card,
      display: 'flex',
      flexDirection: 'column',
      '$card': {
        marginBottom: cardDeckMargin
      },
      ...mediaBreakpointUp('sm', {
        flexFlow: 'row wrap',
        marginRight: `-${cardDeckMargin}`,
        marginLeft: `-${cardDeckMargin}`,
        '$card': {
          display: 'flex',
          flex: '1 0 0%',
          flexDirection: 'column',
          marginRight: cardDeckMargin,
          marginBottom: 0,
          marginLeft: cardDeckMargin
        }
      })
    })
  })

  it('cardGroup', () => {
    const isEenableRounded = enableRounded
    const isEenableRoundedValue = (isEenableRounded) => ({
      cardHeader,
      cardFooter,
      cardImgTop,
      cardImgBottom,
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
      card,
      display: 'flex',
      flexDirection: 'column',
      '> $card': {
        marginBottom: cardGroupMargin
      },
      ...mediaBreakpointUp('sm', {
        flexFlow: 'row wrap',
        '> $card': {
          flex: '1 0 0%',
          marginBottom: 0,
          '+ $card': {
            marginLeft: 0,
            borderLeft: 0
          },
          ...isEenableRoundedValue(isEenableRounded)
        }
      })
    })

    expect(cardGroup()).toEqual(cardGroupValue(enableRounded))
    expect(cardGroup(isEenableRounded)).toEqual(cardGroupValue(enableRounded))
  })

  it('cardColumns', () => {
    expect(cardColumns).toEqual({
      card,
      '$card': {
        marginBottom: cardColumnsMargin
      },
      ...mediaBreakpointUp('sm', {
        columnCount: cardColumnsCount,
        columnGap: cardColumnsGap,
        orphans: 1,
        widows: 1,
        '$card': {
          display: 'inline-block',
          width: '100%'
        }
      })
    })
  })

  it('accordion', () => {
    expect(accordion).toEqual({
      card,
      '$card:not(:first-of-type):not(:last-of-type)': {
        borderBottom: 0,
        borderRadius: 0
      },
      '$card:not(:first-of-type)': {
        'cardHeader:first-child': {
          borderRadius: 0
        }
      },
      '$card:first-of-type': {
        borderBottom: 0,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0
      },
      '$card:last-of-type': {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0
      }
    })
  })
})
