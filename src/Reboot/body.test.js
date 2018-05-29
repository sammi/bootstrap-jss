import { fontFamilyBase, fontSizeBase, fontWeightBase, lineHeightBase } from '../Variables/Fonts'
import { bodyColor, bodyBg } from '../Variables/Body'

import {
  body
} from './body'

describe('Reboot', () => {
  // Body
  //
  // 1. Remove the margin in all browsers.
  // 2. As a best practice, apply a default `background-color`.
  // 3. Set an explicit initial text-align value so that we can later use the
  //    the `inherit` value on things like `<th>` elements.
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
