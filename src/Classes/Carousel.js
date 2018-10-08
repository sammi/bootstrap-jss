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

const carouselItemRight = {
  '&active.&': {
    ...nextRight
  }
}

const carouselItemLeft = {
  '&active.&': {
    ...prevLeft
  }
}

const carouselItemNext = {
  ...base,
  ...nextPrev,
  ...nextRight,
  '&$carouselItemLeft': {
    ...nextPrevLeftRight
  },
  ...carouselItemRight
}

const carouselItemPrev = {
  ...base,
  ...nextPrev,
  '&$carouselItemRight': {
    ...nextPrevLeftRight
  },
  ...carouselItemLeft
}

const carouselFade = {
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
    ...(isEnableGradients ? { background: `linear-gradient(90deg, rgba(${black}, .25), rgba(${black}, .001))` } : null)
  }
}

const carouselControlNext = (isEnableGradients = enableGradients) => {
  return {
    ...carouselControlPrevNext,
    right: 0,
    ...(isEnableGradients ? { background: `linear-gradient(270deg, rgba(${black}, .25), rgba(${black}, .001))` } : null)
  }
}

const carouselControlPrevNextIcon = {
  display: 'inline-block',
  width: carouselControlIconWidth,
  height: carouselControlIconWidth,
  background: 'transparent no-repeat center center',
  backgroundSize: '100% 100%'
}

const carouselControlPrevIcon = {
  ...carouselControlPrevNextIcon,
  backgroundImage: carouselControlPrevIconBg
}

const carouselControlNextIcon = {
  ...carouselControlPrevNextIcon,
  backgroundImage: carouselControlNextIconBg
}

const carouselIndicators = {
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
    backgroundColor: rgba(carouselIndicatorActiveBg, .5),
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
}

const carouselCaption = {
  position: 'absolute',
  right: `${100 - size(carouselCaptionWidth).value / 2}${size(carouselCaptionWidth).unit}`,
  bottom: '20px',
  left: `${100 - size(carouselCaptionWidth).value / 2}${size(carouselCaptionWidth).unit}`,
  zIndex: 10,
  paddingTop: '20px',
  paddingBottom: '20px',
  color: carouselCaptionColor,
  textAlign: 'center'
}

export {
  carousel,
  carouselInner,
  carouselItem,
  carouselItemRight,
  carouselItemLeft,
  carouselItemNext,
  carouselItemPrev,
  carouselFade,
  carouselControlPrev,
  carouselControlNext,
  carouselControlPrevIcon,
  carouselControlNextIcon,
  carouselIndicators,
  carouselCaption
}
