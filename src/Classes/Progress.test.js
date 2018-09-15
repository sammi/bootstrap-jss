import { progressHeight, progressFontSize, progressBg,
  progressBorderRadius, progressBoxShadow, progressBarColor,
  progressBarBg, progressBarTransition,
  progressBarAnimationTiming
} from '../Variables/Progressbars'
import { borderRadius } from '../Mixins/borderRadius'
import { boxShadow } from '../Mixins/boxShadow'
import { transition } from '../Mixins/transition'
import { gradientStriped } from '../Mixins/gradients'

import { progressBarStripes, progress, progressBar, progressBarStiped, progressBarAnimated } from './Progress'

describe('progress', () => {
  it('progress-bar-strips', () => {
    expect(progressBarStripes).toEqual({
      '@keyframes progressBarStripes': {
        from: {
          backgroundPosition: `${progressHeight} 0`
        },
        to: {
          backgroundPosition: '0 0'
        }
      }
    })
  })

  it('progress', () => {
    expect(progress).toEqual({
      display: 'flex',
      height: progressHeight,
      overflow: 'hidden',
      fontSize: progressFontSize,
      backgroundColor: progressBg,
      ...borderRadius(progressBorderRadius),
      ...boxShadow(progressBoxShadow)
    })
  })

  it('progess-bar', () => {
    expect(progressBar).toEqual({
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      color: progressBarColor,
      textAlign: 'center',
      whiteSpace: 'nowrap',
      backgroundColor: progressBarBg,
      ...transition(progressBarTransition)
    })
  })

  it('progress-bar-striped', () => {
    expect(progressBarStiped).toEqual({
      ...gradientStriped(),
      backgroundSize: `${progressHeight} ${progressHeight}`
    })
  })

  it('progress-bar-animated', () => {
    expect(progressBarAnimated).toEqual({
      animation: `progressBarStripes ${progressBarAnimationTiming}`
    })
  })
})
