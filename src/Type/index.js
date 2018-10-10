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

import { listUnstyled } from '../Mixins/lists'
import { spacer } from '../Variables/Spacing'

const checkExported = true

export default {
  headings: {
    'h1,h2,h3,h4,h5,h6,$h1,$h2,$h3,$h4,$h5,$h6': {
      marginBottom: headingsMarginBottom,
      fontFamily: headingsFontFamily,
      fontWeight: headingsFontWeight,
      lineHeight: headingsLineHeight,
      color: headingsColor
    },
    'h1,$h1': { fontSize: h1FontSize },
    'h2,$h2': { fontSize: h2FontSize },
    'h3,$h3': { fontSize: h3FontSize },
    'h4,$h4': { fontSize: h4FontSize },
    'h5,$h5': { fontSize: h5FontSize },
    'h6,$h6': { fontSize: h6FontSize },
    '$lead': {
      fontSize: leadFontSize,
      fontWeight: leadFontWeight
    }
  },
  display: {
    '$display1': {
      fontSize: display1Size,
      fontWeight: display1Weight,
      lineHeight: displayLineHeight
    },
    '$display2': {
      fontSize: display2Size,
      fontWeight: display2Weight,
      lineHeight: displayLineHeight
    },
    '$display3': {
      fontSize: display3Size,
      fontWeight: display3Weight,
      lineHeight: displayLineHeight
    },
    '$display4': {
      fontSize: display4Size,
      fontWeight: display4Weight,
      lineHeight: displayLineHeight
    }
  },
  hr: {
    hr: {
      marginTop: hrMarginY,
      marginBottom: hrMarginY,
      border: 0,
      borderTop: [hrBorderWidth, 'solid', hrBorderColor]
    }
  },
  emphasis: {
    'small,$small': {
      fontSize: smallFontSize,
      fontWeight: fontWeightNormal
    },
    'mark,$mark': {
      padding: markPadding,
      backgroundColor: markBg
    }
  },
  lists: {
    '$listUnstyled': {
      ...listUnstyled
    },
    '$listInline': {
      ...listUnstyled
    },
    '$listInlineItem': {
      display: 'inline-block',
      '&:not(:last-child)': {
        marginRight: listInlinePadding
      }
    }
  },
  'misc': {
    '$initialism': {
      fontSize: '90%',
      textTransform: 'uppercase'
    },
    '$blockquote': {
      marginBottom: spacer,
      fontSize: blockquoteFontSize
    },
    '$blockquoteFooter': {
      display: 'block',
      fontSize: '80%',
      color: blockquoteSmallColor,
      '&::before': {
        content: `\\2014 \\00A0`
      }
    }
  },
  checkExported
}
