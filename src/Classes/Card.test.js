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
import { gridBreakpoints } from '../Variables/Grid'
import { listGroup, listGroupItem } from './ListGroup'

import {
  card, cardBody, cardTitle, cardSubtitle, cardText, cardLink, cardHeader,
  cardFooter, cardHeaderTabs, cardHeaderPills, cardImgOverlay,
  cardImg, cardImgTop, cardImgBottom, cardDeck, cardGroup, cardColumns,
  accordion
} from './Card'
import jss from 'jss'
import preset from 'jss-preset-default'
jss.setup(preset())

describe('card', () => {
  it('card', () => {
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
      '& > hr': {
        marginRight: 0,
        marginLeft: 0
      },
      '& > $listGroup:first-child': {
        '&$listGroupItem:first-child': {
          ...borderTopRadius(cardBorderRadius)
        }
      },
      '& > $listGroup:last-child': {
        '&$listGroupItem:last-child': {
          ...borderBottomRadius(cardBorderRadius)
        }
      }
    })
    expect(jss.createStyleSheet({ listGroup: {}, listGroupItem: {}, card }).toString()).toBeDefined()
  })

  it('cardBody', () => {
    expect(cardBody).toEqual({
      flex: '1 1 auto',
      padding: cardSpacerX
    })
    expect(jss.createStyleSheet({ cardBody }).toString()).toBeDefined()
  })

  it('cardTitle', () => {
    expect(cardTitle).toEqual({
      marginBottom: cardSpacerY
    })
    expect(jss.createStyleSheet({ cardTitle }).toString()).toBeDefined()
  })

  it('cardSubtitle', () => {
    expect(cardSubtitle).toEqual({
      marginTop: `-${size(cardSpacerY).value / 2}${size(cardSpacerY).unit}`,
      marginBottom: 0
    })
    expect(jss.createStyleSheet({ cardSubtitle }).toString()).toBeDefined()
  })

  it('cardText', () => {
    expect(cardText).toEqual({
      '&:last-child': {
        marginBottom: 0
      }
    })
    expect(jss.createStyleSheet({ cardText }).toString()).toBeDefined()
  })

  it('cardLink', () => {
    expect(cardLink).toEqual({
      ...hover({
        textDecoration: 'none'
      }),
      '& + &': {
        marginLeft: cardSpacerX
      }
    })
    expect(jss.createStyleSheet({ cardLink }).toString()).toBeDefined()
  })

  it('cardHeader', () => {
    expect(cardHeader).toEqual({
      listGroup,
      listGroupItem,
      padding: `${cardSpacerY} ${cardSpacerX}`,
      marginBottom: 0,
      backgroundColor: cardCapBg,
      borderBottom: `${cardBorderWidth} solid ${cardBorderColor}`,
      '&:first-child': {
        ...borderRadius(`${cardInnerBorderRadius} ${cardInnerBorderRadius} 0 0`)
      },
      '& + $listGroup': {
        '&$listGroupItem:first-child': {
          borderTop: 0
        }
      }
    })
    expect(jss.createStyleSheet({ listGroup: {}, listGroupItem: {}, cardHeader }).toString()).toBeDefined()
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
    expect(jss.createStyleSheet({ cardFooter }).toString()).toBeDefined()
  })

  it('cardHeaderTabs', () => {
    expect(cardHeaderTabs).toEqual({
      marginRight: `-${size(cardSpacerX).value / 2}${size(cardSpacerX).unit}`,
      marginBottom: `-${cardSpacerY}`,
      marginLeft: `-${size(cardSpacerX).value / 2}${size(cardSpacerX).unit}`,
      borderBottom: 0
    })
    expect(jss.createStyleSheet({ cardHeaderTabs }).toString()).toBeDefined()
  })

  it('cardHeaderPills', () => {
    expect(cardHeaderPills).toEqual({
      marginRight: `-${size(cardSpacerX).value / 2}${size(cardSpacerX).unit}`,
      marginLeft: `-${size(cardSpacerX).value / 2}${size(cardSpacerX).unit}`
    })
    expect(jss.createStyleSheet({ cardHeaderPills }).toString()).toBeDefined()
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
    expect(jss.createStyleSheet({ cardImgOverlay }).toString()).toBeDefined()
  })

  it('cardImg', () => {
    expect(cardImg).toEqual({
      width: '100%',
      ...borderRadius(cardInnerBorderRadius)
    })
    expect(jss.createStyleSheet({ cardImg }).toString()).toBeDefined()
  })

  it('cardImgTop', () => {
    expect(cardImgTop).toEqual({
      width: '100%',
      ...borderTopRadius(cardInnerBorderRadius)
    })
    expect(jss.createStyleSheet({ cardImgTop }).toString()).toBeDefined()
  })

  it('cardImgBottom', () => {
    expect(cardImgBottom).toEqual({
      width: '100%',
      ...borderBottomRadius(cardInnerBorderRadius)
    })
    expect(jss.createStyleSheet({ cardImgBottom }).toString()).toBeDefined()
  })

  it('cardDeck', () => {
    expect(cardDeck).toEqual({
      display: 'flex',
      flexDirection: 'column',
      '&$card': {
        marginBottom: cardDeckMargin
      },
      ...mediaBreakpointUp('sm', gridBreakpoints, {
        flexFlow: 'row wrap',
        marginRight: `-${cardDeckMargin}`,
        marginLeft: `-${cardDeckMargin}`,
        '&$card': {
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
    const isEnableRounded = enableRounded
    const isEnableRoundedValue = (isEnableRounded) => ({
      '&:first-child': {
        ...borderRightRadius(0),
        '&$cardImgTop,&$cardHeader': {
          borderTopRightRadius: 0
        },
        '&$cardImgBottom,&$cardFooter': {
          borderBottomRightRadius: 0
        }
      },
      '&:last-child': {
        ...borderLeftRadius(0),
        '&$cardImgTop,&$cardHeader': {
          borderTopLeftRadius: 0
        },
        '&$cardImgBottom,&$cardFooter': {
          borderBottomLeftRadius: 0
        }
      },
      '&:only-child': {
        ...borderRadius(cardBorderRadius),
        '&$cardImgTop,&$cardHeader': {
          ...borderTopRadius(cardBorderRadius)
        },
        '&$cardImgBottom,&$cardFooter': {
          ...borderBottomRadius(cardBorderRadius)
        }
      },
      '&:not(:first-child):not(:last-child):not(:only-child)': {
        ...borderRadius(0),
        '&$cardImgTop,&$cardImgBottom,&$cardHeader,&$cardFooter': {
          ...borderRadius(0)
        }
      }
    })

    const cardGroupValue = (isEnableRounded) => ({
      display: 'flex',
      flexDirection: 'column',
      '& > $card': {
        marginBottom: cardGroupMargin
      },
      ...mediaBreakpointUp('sm', gridBreakpoints, {
        flexFlow: 'row wrap',
        '& > $card': {
          flex: '1 0 0%',
          marginBottom: 0,
          '& + $card': {
            marginLeft: 0,
            borderLeft: 0
          },
          ...isEnableRoundedValue(isEnableRounded)
        }
      })
    })

    expect(cardGroup()).toEqual(cardGroupValue(enableRounded))
    expect(cardGroup(isEnableRounded)).toEqual(cardGroupValue(enableRounded))
  })

  it('cardColumns', () => {
    expect(cardColumns).toEqual({
      '&$card': {
        marginBottom: cardColumnsMargin
      },
      ...mediaBreakpointUp('sm', gridBreakpoints, {
        columnCount: cardColumnsCount,
        columnGap: cardColumnsGap,
        orphans: 1,
        widows: 1,
        '&$card': {
          display: 'inline-block',
          width: '100%'
        }
      })
    })
  })

  it('accordion', () => {
    expect(accordion).toEqual({
      '&$card:not(:first-of-type):not(:last-of-type)': {
        borderBottom: 0,
        borderRadius: 0
      },
      '&$card:not(:first-of-type)': {
        'cardHeader:first-child': {
          borderRadius: 0
        }
      },
      '&$card:first-of-type': {
        borderBottom: 0,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0
      },
      '&$card:last-of-type': {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0
      }
    })
    expect(jss.createStyleSheet({ card: {}, accordion }).toString()).toBeDefined()
  })
})
