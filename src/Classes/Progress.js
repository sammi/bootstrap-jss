import { progressHeight, progressFontSize, progressBg,
  progressBorderRadius, progressBoxShadow, progressBarColor,
  progressBarBg, progressBarTransition,
  progressBarAnimationTiming
} from '../Variables/Progressbars'
import { borderRadius } from '../Mixins/borderRadius'
import { boxShadow } from '../Mixins/boxShadow'
import { transition } from '../Mixins/transition'
import { gradientStriped } from '../Mixins/gradients'

const progressBarStripes = {
  '@keyframes progressBarStripes': {
    from: {
      backgroundPosition: `${progressHeight} 0`
    },
    to: {
      backgroundPosition: '0 0'
    }
  }
}

const progress = {
  display: 'flex',
  height: progressHeight,
  overflow: 'hidden',
  fontSize: progressFontSize,
  backgroundColor: progressBg,
  ...borderRadius(progressBorderRadius),
  ...boxShadow(progressBoxShadow)
}

const progressBar = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  color: progressBarColor,
  textAlign: 'center',
  whiteSpace: 'nowrap',
  backgroundColor: progressBarBg,
  ...transition(progressBarTransition)
}

const progressBarStiped = {
  ...gradientStriped(),
  backgroundSize: `${progressHeight} ${progressHeight}`
}

const progressBarAnimated = {
  animation: `progressBarStripes ${progressBarAnimationTiming}`
}

export {
  progressBarStripes,
  progress,
  progressBar,
  progressBarStiped,
  progressBarAnimated
}
