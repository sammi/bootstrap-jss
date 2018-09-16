import {
  carouselTransition,
  carouselControlWidth,
  carouselControlColor,
  carouselControlOpacity
} from '../Variables/Carousel'

import { transition } from '../Mixins/transition'
import { hoverFocus } from '../Mixins/hover'
import { black } from '../Variables/Colors'
import { enableGradients } from '../Variables/Options';

const carousel = {
  position: 'relative'
}

const carouselInner = {
  position: 'relative',
  width: '100%',
  overflow: 'hidden'
}

const carouselItem = {
  position: 'relative',
  display: 'none',
  alignItems: 'center',
  width: '100%',
  ...transition(carouselTransition),
  backfaceVisibility: 'hidden',
  perspective: '1000px'
}

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

const prevLeft = {
  transform: `translateX('-100%')`,
  '@supports (transform-style: preserve-3d)': {
    transform: `translate3d('-100%', 0, 0)`
  }
}

const nextPrevLeftRight = {
  transform: 'translateX(0)',
  '@supports (transform-style: preserve-3d)': {
    transform: 'translate3d(0, 0, 0)'
  }
}

const activeCarouselItemRight = {
  'active.carouselItemRight': {
    ...nextRight
  }
}

const activeCarouselItemLeft = {
  'active.carouselItemRight': {
    ...prevLeft
  }
}

const carouselItemNext = {
  ...base,
  ...nextPrev,
  ...nextRight,
  '&.carousleItemLeft': {
    ...nextPrevLeftRight
  },
  ...activeCarouselItemRight
}

const carouselItemPrev = {
  ...base,
  ...nextPrev,
  '&.carousleItemRight': {
    ...nextPrevLeftRight
  },
  ...activeCarouselItemLeft
}

const carouselFade = {
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
}

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

const carouselControlPrev = (isEnableGradients = enableGradients) => {
  return {
    ...carouselControlPrevNext,
    left: 0,
    background: isEnableGradients ? `linear-gradient(90deg, rgba(${black}, .25), rgba(${black}, .001))` : null
  }
}

const carouselControlNext = (isEnableGradients = enableGradients) => {
  return {
    ...carouselControlPrevNext,
    right: 0,
    background: isEnableGradients ? `linear-gradient(270deg, rgba(${black}, .25), rgba(${black}, .001))` : null
  }
}

export {
  carousel,
  carouselInner,
  carouselItem,
  activeCarouselItemRight,
  activeCarouselItemLeft,
  carouselItemNext,
  carouselItemPrev,
  carouselFade,
  carouselControlPrev,
  carouselControlNext
}
