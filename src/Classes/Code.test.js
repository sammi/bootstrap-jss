import { codeFontSize, codeColor, kbdPaddingY, kbdPaddingX, kbdFontSize, kbdColor, kbdBg, preColor, preScrollableMaxHeight } from '../Variables/Code'
import { borderRadiusSm } from '../Variables/Components'
import { borderRadius } from '../Mixins/borderRadius'
import { boxShadow } from '../Mixins/boxShadow'
import { kbdBoxShadow, nestedKbdFontWeight } from '../Variables/Fonts'
import { code, kbd, pre, preScrollable } from './Code'
import jss from 'jss'
import preset from 'jss-preset-default'
jss.setup(preset())

describe('Code', () => {
  it('Inline code', () => {
    expect(code).toEqual({
      fontSize: codeFontSize,
      color: codeColor,
      wordBreak: 'break-word',
      '& a > &': {
        color: 'inherit'
      }
    })
    expect(jss.createStyleSheet({ code }).toString()).toBeDefined()
  })

  it('User input typically entered via keyboard', () => {
    expect(kbd).toEqual({
      padding: `${kbdPaddingY} ${kbdPaddingX}`,
      fontSize: kbdFontSize,
      color: kbdColor,
      backgroundColor: kbdBg,
      ...borderRadius(borderRadiusSm),
      ...boxShadow(kbdBoxShadow),
      kbd: {
        padding: 0,
        fontSize: '100%',
        fontWeight: nestedKbdFontWeight,
        ...boxShadow('none')
      }
    })
    expect(jss.createStyleSheet({ kbd }).toString()).toBeDefined()
  })

  it('Blocks of code', () => {
    expect(pre).toEqual({
      code,
      display: 'block',
      fontSize: codeFontSize,
      color: preColor,
      '&$code': {
        fontSize: 'inherit',
        color: 'inherit',
        wordBreak: 'normal'
      }
    })
    expect(jss.createStyleSheet({ code: {}, pre }).toString()).toBeDefined()
  })

  it('pre-scrollable', () => {
    expect(preScrollable).toEqual({
      maxHeight: preScrollableMaxHeight,
      overflowY: 'scroll'
    })
    expect(jss.createStyleSheet({ preScrollable }).toString()).toBeDefined()
  })
})
