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
import jss from 'jss'
import preset from 'jss-preset-default'
jss.setup(preset())

describe('progress', () => {
  it('progress-bar-strips', () => {
    expect(progressBarStripes).toEqual({
      '@keyframes progress-bar-stripes': {
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
    expect(jss.createStyleSheet({ progress }).toString()).toBeDefined()
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
    expect(jss.createStyleSheet({ progressBar }).toString()).toBeDefined()
  })

  it('progress-bar-striped', () => {
    expect(progressBarStiped).toEqual({
      ...gradientStriped(),
      backgroundSize: `${progressHeight} ${progressHeight}`
    })
    expect(jss.createStyleSheet({ progressBarStiped }).toString()).toBeDefined()
  })

  it('progress-bar-animated', () => {
    expect(progressBarAnimated).toEqual({
      animation: `progress-bar-stripes ${progressBarAnimationTiming}`
    })
    expect(jss.createStyleSheet({ progressBarAnimated }).toString()).toBeDefined()
  })
})
