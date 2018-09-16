import {
  carouselTransition,
  carouselControlWidth,
  carouselControlColor,
  carouselControlOpacity
} from '../Variables/Carousel'

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
  activeCarouselItemRight,
  activeCarouselItemLeft,
  carouselFade,
  carouselControlPrev,
  carouselControlNext,
  carouselControlPrevIcon,
  carouselControlNextIcon,
  carouselIndicators,
  carouselCaption
} from './Carousel'

describe('carousel', () => {
  it('carousel', () => {
    expect(carousel).toEqual({
      position: 'relative'
    })
  })

  it('carousel-inner', () => {
    expect(carouselInner).toEqual({
      position: 'relative',
      width: '100%',
      overflow: 'hidden'
    })
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
    expect(activeCarouselItemRight).toEqual({
      'active.carouselItemRight': {
        ...nextRight
      }
    })
  })

  it('carousel-item-left', () => {
    expect(activeCarouselItemLeft).toEqual({
      'active.carouselItemRight': {
        ...prevLeft
      }
    })
  })

  it('carousel-item-next', () => {
    expect(carouselItemNext).toEqual({
      ...base,
      ...nextPrev,
      ...nextRight,
      '&.carousleItemLeft': {
        ...nextPrevLeftRight
      },
      ...activeCarouselItemRight
    })
  })

  it('carousel-item-prev', () => {
    expect(carouselItemPrev).toEqual({
      ...base,
      ...nextPrev,
      '&.carousleItemRight': {
        ...nextPrevLeftRight
      },
      ...activeCarouselItemLeft
    })
  })

  it('carousel-fade', () => {
    expect(carouselFade).toEqual({
      carouselItem: {
        opacity: 0,
        transitionDuration: '.6s',
        transitionProperty: 'opacity'
      },
      '.carousel-item.active,.carousel-item-next.carousel-item-left,.carousel-item-prev.carousel-item-right': {
        opacity: 1
      },
      '.active.carousel-item-left,.active.carousel-item-right': {
        opacity: 0
      },
      '.carousel-item-next,.carousel-item-prev,.carousel-item.active,.active.carousel-item-left,.active.carousel-item-prev': {
        transform: `translateX(0)`,
        '@supports (transform-style: preserve-3d)': {
          transform: `translate3d(0, 0, 0)`
        }
      }
    })
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

    expect(carouselControlPrev()).toEqual({
      ...carouselControlPrevNext,
      left: 0,
      background: enableGradients ? `linear-gradient(90deg, rgba(${black}, .25), rgba(${black}, .001))` : null
    })
  })

  it('carousel-control-next', () => {
    expect(carouselControlNext(true)).toEqual({
      ...carouselControlPrevNext,
      right: 0,
      background: `linear-gradient(270deg, rgba(${black}, .25), rgba(${black}, .001))`
    })
    expect(carouselControlNext()).toEqual({
      ...carouselControlPrevNext,
      right: 0,
      background: enableGradients ? `linear-gradient(270deg, rgba(${black}, .25), rgba(${black}, .001))` : null
    })
  })

  it('carousel-control-prev-icon', () => {
    expect(carouselControlPrevIcon).toEqual()
  })

  it('carousel-control-next-icon', () => {
    expect(carouselControlNextIcon).toEqual()
  })

  it('carousel-indicators', () => {
    expect(carouselIndicators).toEqual()
  })

  it('carousel-caption', () => {
    expect(carouselCaption).toEqual()
  })
})
