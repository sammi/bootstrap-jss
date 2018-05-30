import { grays, pink, white } from './Colors'

import {
  codeFontSize,
  codeColor,
  kbdPaddingY,
  kbdPaddingX,
  kbdFontSize,
  kbdColor,
  kbdBg,
  preColor,
  preScrollableMaxHeight
} from './Code'

describe('Code', () => {
  it('Code', () => {
    expect(codeFontSize).toEqual('87.5%')
    expect(codeColor).toEqual(pink)

    expect(kbdPaddingY).toEqual('.2rem')
    expect(kbdPaddingX).toEqual('.4rem')
    expect(kbdFontSize).toEqual(codeFontSize)
    expect(kbdColor).toEqual(white)
    expect(kbdBg).toEqual(grays._900)

    expect(preColor).toEqual(grays._900)
    expect(preScrollableMaxHeight).toEqual('340px')
  })
})
