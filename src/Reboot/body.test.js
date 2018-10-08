import { fontFamilyBase, fontSizeBase, fontWeightBase, lineHeightBase } from '../Variables/Fonts'
import { bodyColor, bodyBg } from '../Variables/Body'

import { body } from './body'

describe('Reboot', () => {
  it('body', () => {
    expect(body).toEqual({
      body: {
        margin: 0,
        fontFamily: fontFamilyBase,
        fontSize: fontSizeBase,
        fontWeight: fontWeightBase,
        lineHeight: lineHeightBase,
        color: bodyColor,
        textAlign: 'left',
        backgroundColor: bodyBg
      }
    })
  })
})
