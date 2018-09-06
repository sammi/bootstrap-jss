import { codeFontSize, codeColor, kbdPaddingY, kbdPaddingX, kbdFontSize, kbdColor, kbdBg, preColor, preScrollableMaxHeight } from '../Variables/Code'
import { borderRadiusSm } from '../Variables/Components'
import { borderRadius } from '../Mixins/borderRadius'
import { boxShadow } from '../Mixins/boxShadow'
import { kbdBoxShadow, nestedKbdFontWeight } from '../Variables/Fonts'

export const code = {
  fontSize: codeFontSize,
  color: codeColor,
  wordBreak: 'break-word',
  'a > &': {
    color: 'inherit'
  }
}

export const kbd = {
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
}

export const pre = {
  display: 'block',
  fontSize: codeFontSize,
  color: preColor,
  code: {
    fontSize: 'inherit',
    color: 'inherit',
    wordBreak: 'normal'
  }
}

export const preScrollable = {
  maxHeight: preScrollableMaxHeight,
  overflowY: 'scroll'
}
