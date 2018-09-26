import {
  headingsMarginBottom,
  headingsFontFamily,
  headingsFontWeight,
  headingsLineHeight,
  headingsColor,
  h1FontSize,
  h2FontSize,
  h3FontSize,
  h4FontSize,
  h5FontSize,
  h6FontSize,
  leadFontSize,
  leadFontWeight,
  display1Size,
  display1Weight,
  displayLineHeight,
  display2Size,
  display2Weight,
  display3Size,
  display3Weight,
  display4Size,
  display4Weight,
  hrMarginY,
  hrBorderWidth,
  hrBorderColor,
  smallFontSize,
  fontWeightNormal,
  markPadding,
  markBg,
  listInlinePadding,
  blockquoteFontSize,
  blockquoteSmallColor
} from '../Variables/Fonts'

import { lists } from '../Mixins/lists'
import { spacer } from '../Variables/Spacing'

import type from './index'

describe('type', () => {
  it('Headings', () => {
    expect(type.headings).toEqual({
      'h1,h2,h3,h4,h5,h6,.h1,.h2,.h3,.h4,.h5,.h6': {
        marginBottom: headingsMarginBottom,
        fontFamily: headingsFontFamily,
        fontWeight: headingsFontWeight,
        lineHeight: headingsLineHeight,
        color: headingsColor
      },
      'h1,.h1': { fontSize: h1FontSize },
      'h2,.h2': { fontSize: h2FontSize },
      'h3,.h3': { fontSize: h3FontSize },
      'h4,.h4': { fontSize: h4FontSize },
      'h5,.h5': { fontSize: h5FontSize },
      'h6,.h6': { fontSize: h6FontSize },
      '.lead': {
        fontSize: leadFontSize,
        fontWeight: leadFontWeight
      }
    })
  })

  it('Type display classes', () => {
    expect(type.display).toEqual({
      '.display-1': {
        fontSize: display1Size,
        fontWeight: display1Weight,
        lineHeight: displayLineHeight
      },
      '.display-2': {
        fontSize: display2Size,
        fontWeight: display2Weight,
        lineHeight: displayLineHeight
      },
      '.display-3': {
        fontSize: display3Size,
        fontWeight: display3Weight,
        lineHeight: displayLineHeight
      },
      '.display-4': {
        fontSize: display4Size,
        fontWeight: display4Weight,
        lineHeight: displayLineHeight
      }
    })
  })

  it('Horizontal rules', () => {
    expect(type.hr).toEqual({
      hr: {
        marginTop: hrMarginY,
        marginBottom: hrMarginY,
        border: 0,
        borderTop: [hrBorderWidth, 'solid', hrBorderColor]
      }
    })
  })

  it('Emphasis', () => {
    expect(type.emphasis).toEqual({
      'small,.small': {
        fontSize: smallFontSize,
        fontWeight: fontWeightNormal
      },
      'mark,.mark': {
        padding: markPadding,
        backgroundColor: markBg
      }
    })
  })

  it('Lists', () => {
    expect(type.lists).toEqual({
      '.list-unstyled': {
        ...(lists.listUnstyled)
      },
      '.list-inline': {
        ...(lists.listUnstyled)
      },
      '.list-inline-item': {
        display: 'inline-block',
        '&:not(:last-child)': {
          marginRight: listInlinePadding
        }
      }
    })
  })

  it('Misc', () => {
    expect(type.misc).toEqual({
      '.initialism': {
        fontSize: '90%',
        textTransform: 'uppercase'
      },
      '.blockquote': {
        marginBottom: spacer,
        fontSize: blockquoteFontSize
      },
      '.blockquote-footer': {
        display: 'block',
        fontSize: '80%',
        color: blockquoteSmallColor,
        '&::before': {
          content: `\\2014 \\00A0`
        }
      }
    })
  })

  it('checkExported', () => {
    expect(type.checkExported).toBe(true)
  })
})
