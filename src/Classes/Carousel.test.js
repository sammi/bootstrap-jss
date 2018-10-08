import {
  carouselTransition,
  carouselControlWidth,
  carouselControlColor,
  carouselControlOpacity,
  carouselControlIconWidth,
  carouselControlPrevIconBg,
  carouselControlNextIconBg,
  carouselIndicatorWidth,
  carouselIndicatorHeight,
  carouselIndicatorSpacer,
  carouselIndicatorActiveBg,
  carouselCaptionColor,
  carouselCaptionWidth
} from '../Variables/Carousel'
import { rgba } from '../Functions/rgba'
import { size } from '../Functions/size'
import { transition } from '../Mixins/transition'
import { hoverFocus } from '../Mixins/hover'
import { black } from '../Variables/Colors'
import { enableGradients } from '../Variables/Options'

import {
  carousel,
  carouselInner,
  carouselItem,
  carouselItemNext,
  carouselItemPrev,
  carouselItemRight,
  carouselItemLeft,
  carouselFade,
  carouselControlPrev,
  carouselControlNext,
  carouselControlPrevIcon,
  carouselControlNextIcon,
  carouselIndicators,
  carouselCaption
} from './Carousel'
import jss from 'jss'
import preset from 'jss-preset-default'
jss.setup(preset())

describe('carousel', () => {
  it('carousel', () => {
    expect(carousel).toEqual({
      position: 'relative'
    })
    expect(jss.createStyleSheet({ carousel }).toString()).toBeDefined()
  })

  it('carousel-inner', () => {
    expect(carouselInner).toEqual({
      position: 'relative',
      width: '100%',
      overflow: 'hidden'
    })
    expect(jss.createStyleSheet({ carouselInner }).toString()).toBeDefined()
  })

  it('carousel-item', () => {
    expect(carouselItem).toEqual({
      position: 'relative',
      display: 'none',
      alignItems: 'center',
      width: '100%',
      ...transition(carouselTransition),
      backfaceVisibility: 'hidden',
      perspective: '1000px'
    })
    expect(jss.createStyleSheet({ carouselItem }).toString()).toBeDefined()
  })

  const base = {
    display: 'block'
  }

  const nextPrev = {
    position: 'absolute',
    top: 0
  }

  const nextRight = {
    transform: `translateX('100%')`,
    '@supports (transform-style: preserve-3d)': {
      transform: `translate3d('100%', 0, 0)`
    }
  }

  const nextPrevLeftRight = {
    transform: 'translateX(0)',
    '@supports (transform-style: preserve-3d)': {
      transform: 'translate3d(0, 0, 0)'
    }
  }

  const prevLeft = {
    transform: `translateX('-100%')`,
    '@supports (transform-style: preserve-3d)': {
      transform: `translate3d('-100%', 0, 0)`
    }
  }

  it('carousel-item-right', () => {
    expect(carouselItemRight).toEqual({
      '&active.&': {
        ...nextRight
      }
    })
    expect(jss.createStyleSheet({ carouselItemRight }).toString()).toBeDefined()
  })

  it('carousel-item-left', () => {
    expect(carouselItemLeft).toEqual({
      '&active.&': {
        ...prevLeft
      }
    })
    expect(jss.createStyleSheet({ carouselItemRight }).toString()).toBeDefined()
  })

  it('carousel-item-next', () => {
    expect(carouselItemNext).toEqual({
      ...base,
      ...nextPrev,
      ...nextRight,
      '&$carouselItemLeft': {
        ...nextPrevLeftRight
      },
      ...carouselItemRight
    })
    expect(jss.createStyleSheet({ carouselItemLeft: {}, carouselItemNext }).toString()).toBeDefined()
  })

  it('carousel-item-prev', () => {
    expect(carouselItemPrev).toEqual({
      ...base,
      ...nextPrev,
      '&$carouselItemRight': {
        ...nextPrevLeftRight
      },
      ...carouselItemLeft
    })
    expect(jss.createStyleSheet({ carouselItemRight: {}, carouselItemPrev }).toString()).toBeDefined()
  })

  it('carousel-fade', () => {
    expect(carouselFade).toEqual({
      '&$carouselItem': {
        opacity: 0,
        transitionDuration: '.6s',
        transitionProperty: 'opacity'
      },
      '&$carouselItem$active,&$carouselItemNext$carouselItemLeft,&$carouselItemPrev$carouselItemRight': {
        opacity: 1
      },
      '&$active$carouselItemLeft,&$active$carouselItemRight': {
        opacity: 0
      },
      '&$carouselItemNext,&$carouselItemPrev,&$carouselItem$active,&$active$carouselItemLeft,&$active$carouselItemPrev': {
        transform: `translateX(0)`,
        '@supports (transform-style: preserve-3d)': {
          transform: `translate3d(0, 0, 0)`
        }
      }
    })
    expect(jss.createStyleSheet({
      active: {},
      carouselItem: {},
      carouselItemNext: {},
      carouselItemPrev: {},
      carouselItemLeft: {},
      carouselItemRight: {},
      carouselFade
    }).toString()).toBeDefined()
  })

  const carouselControlPrevNext = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: carouselControlWidth,
    color: carouselControlColor,
    textAlign: 'center',
    opacity: carouselControlOpacity,
    ...hoverFocus({
      color: carouselControlColor,
      textDecoration: 'none',
      outline: 0,
      opacity: 0.9
    })
  }

  it('carousel-control-prev', () => {
    expect(carouselControlPrev(true)).toEqual({
      ...carouselControlPrevNext,
      left: 0,
      background: `linear-gradient(90deg, rgba(${black}, .25), rgba(${black}, .001))`
    })
    expect(jss.createStyleSheet({ carouselControlPrev: { ...carouselControlPrev(true) } }).toString()).toBeDefined()

    expect(carouselControlPrev()).toEqual({
      ...carouselControlPrevNext,
      left: 0,
      ...(enableGradients ? { background: `linear-gradient(90deg, rgba(${black}, .25), rgba(${black}, .001))` } : null)
    })
    expect(jss.createStyleSheet({ carouselControlPrev: { ...carouselControlPrev() } }).toString()).toBeDefined()
  })

  it('carousel-control-next', () => {
    expect(carouselControlNext(true)).toEqual({
      ...carouselControlPrevNext,
      right: 0,
      background: `linear-gradient(270deg, rgba(${black}, .25), rgba(${black}, .001))`
    })
    expect(jss.createStyleSheet({ carouselControlNext: { ...carouselControlNext(true) } }).toString()).toBeDefined()

    expect(carouselControlNext()).toEqual({
      ...carouselControlPrevNext,
      right: 0,
      ...(enableGradients ? { background: `linear-gradient(270deg, rgba(${black}, .25), rgba(${black}, .001))` } : null)
    })
    expect(jss.createStyleSheet({ carouselControlNext: { ...carouselControlNext() } }).toString()).toBeDefined()
  })

  const carouselControlPrevNextIcon = {
    display: 'inline-block',
    width: carouselControlIconWidth,
    height: carouselControlIconWidth,
    background: 'transparent no-repeat center center',
    backgroundSize: '100% 100%'
  }

  it('carousel-control-prev-icon', () => {
    expect(carouselControlPrevIcon).toEqual({
      ...carouselControlPrevNextIcon,
      backgroundImage: carouselControlPrevIconBg
    })
    expect(jss.createStyleSheet({ carouselControlPrevIcon }).toString()).toBeDefined()
  })

  it('carousel-control-next-icon', () => {
    expect(carouselControlNextIcon).toEqual({
      ...carouselControlPrevNextIcon,
      backgroundImage: carouselControlNextIconBg
    })
    expect(jss.createStyleSheet({ carouselControlPrevIcon }).toString()).toBeDefined()
  })

  it('carousel-indicators', () => {
    expect(carouselIndicators).toEqual({
      position: 'absolute',
      right: 0,
      bottom: '10px',
      left: 0,
      zIndex: 15,
      display: 'flex',
      justifyContent: 'center',
      paddingLeft: 0,
      marginRight: carouselControlWidth,
      marginLeft: carouselControlWidth,
      listStyle: 'none',
      li: {
        position: 'relative',
        flex: '0 1 auto',
        width: carouselIndicatorWidth,
        height: carouselIndicatorHeight,
        marginRight: carouselIndicatorSpacer,
        marginLeft: carouselIndicatorSpacer,
        textIndent: '-999px',
        cursor: 'pointer',
        backgroundColor: rgba(carouselIndicatorActiveBg, 0.5),
        '&::before': {
          position: 'absolute',
          top: '-10px',
          left: 0,
          display: 'inline-block',
          width: '100%',
          height: '10px',
          content: ''
        },
        '&::after': {
          position: 'absolute',
          bottom: '-10px',
          left: 0,
          display: 'inline-block',
          width: '100%',
          height: '10px',
          content: ''
        }
      },
      '&active': {
        backgroundColor: carouselIndicatorActiveBg
      }
    })
    expect(jss.createStyleSheet({ carouselIndicators }).toString()).toBeDefined()
  })

  it('carousel-caption', () => {
    expect(carouselCaption).toEqual({
      position: 'absolute',
      right: `${100 - size(carouselCaptionWidth).value / 2}${size(carouselCaptionWidth).unit}`,
      bottom: '20px',
      left: `${100 - size(carouselCaptionWidth).value / 2}${size(carouselCaptionWidth).unit}`,
      zIndex: 10,
      paddingTop: '20px',
      paddingBottom: '20px',
      color: carouselCaptionColor,
      textAlign: 'center'
    })
  })
  expect(jss.createStyleSheet({ carouselCaption }).toString()).toBeDefined()
})
