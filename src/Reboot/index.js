import { black } from '../Variables/Colors'
import { rgba } from '../Functions/rgba'
import { fontFamilyBase, fontSizeBase, fontWeightBase, lineHeightBase, headingsMarginBottom, dtFontWeight, fontFamilyMonospace } from '../Variables/Fonts'
import { bodyColor, bodyBg } from '../Variables/Body'
import { paragraphMarginBottom } from '../Variables/Paragraphs'
import { linkColor, linkDecoration, linkHoverColor, linkHoverDecoration } from '../Variables/Links'
import { hover, hoverFocus } from '../Mixins/hover'
import { tableCellPadding, tableCaptionColor } from '../Variables/Tables'
import { labelMarginBottom } from '../Variables/Forms'

export const boxSizing = {
  '*, *::before, *::after': {
    boxSizing: 'border-box'
  }
}

export const html = {
  html: {
    fontFamily: 'sans-serif',
    lineHeight: 1.15,
    '-webkit-text-size-adjust': '100%',
    '-ms-text-size-adjust': '100%',
    '-ms-overflow-style': 'scrollbar',
    '-webkit-tap-highlight-color': rgba(black, 0)
  }
}

export const msViewPort = {
  '@at-root': {
    '@-ms-viewport': {
      width: 'device-width'
    }
  }
}

export const html5ForOldBrowsers = {
  'article, aside, figcaption, figure, footer, header, hgroup, main, nav, section': {
    display: 'block'
  }
}

export const body = {
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
}

export const suppressFocusOutline = {
  '[tabindex="-1"]:focus': {
    outline: '0 !important'
  }
}

export const hrContentGrouping = {
  boxSizing: 'content-box',
  height: 0,
  overflow: 'visible'
}

export const headerMargin = {
  'h1, h2, h3, h4, h5, h6': {
    marginTop: 0,
    marginBottom: headingsMarginBottom
  }
}

export const paragraphMargin = {
  'p': {
    marginTop: 0,
    marginBottom: paragraphMarginBottom
  }
}

export const abbreviations = {
  'abbr[title], abbr[data-original-title]': {
    textDecoration: 'underline dotted',
    fallbacks: {
      textDecoration: 'underline'
    },
    cursor: 'help',
    borderBottom: 0
  }
}

export const address = {
  marginBottom: '1rem',
  fontStyle: 'normal',
  lineHeight: 'inherit'
}

export const list = {
  'ol,ul,dl': {
    marginTop: 0,
    marginBottom: '1rem'
  },
  'ol ol, ul ul, ol ul, ul ol': {
    marginBottom: 0
  },
  dt: {
    fontWeight: dtFontWeight
  },
  dd: {
    marginBottom: '0.5rem',
    marginLeft: 0
  }
}

export const blockquote = {
  margin: ['0', '0', '1rem']
}

export const dfn = {
  fontStyle: 'italic'
}

export const strong = {
  fontWeight: 'bolder'
}

export const small = {
  fontSize: '80%'
}

export const subSup = {
  'sub, sup': {
    position: 'relative',
    fontSize: '75%',
    lineHeight: 0,
    verticalAlign: 'baseline'
  },
  sub: {
    bottom: '-0.25em'
  },
  sup: {
    top: '-0.5em'
  }
}

export const links = {
  a: {
    color: linkColor,
    textDecoration: linkDecoration,
    backgroundColor: 'transparent',
    '-webkit-text-decoration-skip': 'objects',
    ...hover({
      color: linkHoverColor,
      textDecoration: linkHoverDecoration
    })
  },
  'a:not([href]):not([tabindex])': {
    color: 'inherit',
    textDecoration: 'none',
    ...hoverFocus({
      color: 'inherit',
      textDecoration: 'none'
    }),
    '&:focus': {
      outline: 0
    }
  }
}

export const code = {
  'pre,code,kbd,samp': {
    fontFamily: fontFamilyMonospace,
    fontSize: '1em'
  },
  pre: {
    marginTop: 0,
    marginBottom: '1rem',
    overflow: 'auto',
    '-ms-overflow-style': 'scrollbar'
  }
}

export const figure = {
  figure: {
    margin: ['0', '0', '1rem']
  }
}

export const image = {
  img: {
    verticalAlign: 'middle',
    borderStyle: 'none'
  },
  'svg:not(:root)': {
    overflow: 'hidden'
  }
}

export const tables = {
  table: {
    borderCollapse: 'collapse'
  },
  caption: {
    paddingTop: tableCellPadding,
    paddingBottom: tableCellPadding,
    color: tableCaptionColor,
    textAlign: 'left',
    captionSide: 'bottom'
  },
  th: {
    textAlign: 'inherit'
  }
}

export const forms = {
  label: {
    display: 'inline-block',
    marginBottom: labelMarginBottom
  },
  button: {
    borderRadius: 0
  },
  'button:focus': {
    outline: ['5px', 'auto', '-webkit-focus-ring-color'],
    fallbacks: {
      outline: ['1px', 'dotted']
    }
  },
  'input,button,select,optgroup,textarea': {
    margin: 0,
    fontFamily: 'inherit',
    fontSize: 'inherit',
    lineHeight: 'inherit'
  },
  'button,input': {
    overflow: 'visible'
  },
  'button,select': {
    textTransform: 'none'
  },
  'button, html [type="button"], [type="reset"], [type="submit"]': {
    '-webkit-appearance': 'button'
  },
  'button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner': {
    padding: 0,
    borderStyle: 'none'
  },
  'input[type="radio"],input[type="checkbox"]': {
    boxSizing: 'border-box',
    padding: 0
  },
  'input[type="date"], input[type="time"], input[type="datetime-local"], input[type="month"]': {
    '-webkit-appearance': 'listbox'
  },
  textarea: {
    overflow: 'auto',
    resize: 'vertical'
  },
  fieldset: {
    minWidth: 0,
    padding: 0,
    margin: 0,
    border: 0
  },
  legend: {
    display: 'block',
    width: '100%',
    maxWidth: '100%',
    padding: 0,
    marginBottom: '0.5rem',
    fontSize: '1.5rem',
    lineHeight: 'inherit',
    color: 'inherit',
    whiteSpace: 'normal'
  },
  progress: {
    verticalAlign: 'baseline'
  },
  '[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button': {
    height: 'auto'
  },
  '[type="search"]': {
    outlineOffset: '-2px',
    '-webkit-appearance': 'none'
  },
  '[type="search"]::-webkit-search-cancel-button,[type="search"]::-webkit-search-decoration': {
    '-webkit-appearance': 'none'
  },
  '::-webkit-file-upload-button': {
    font: 'inherit',
    '-webkit-appearance': 'button'
  }
}

export const output = {
  display: 'inline-block'
}

export const summary = {
  display: 'list-item',
  cursor: 'pointer'
}

export const template = {
  display: 'none'
}

export const hidden = {
  '[hidden]': {
    disable: 'none !important'
  }
}

export default {
  ...boxSizing,
  ...html,
  ...msViewPort,
  ...html5ForOldBrowsers,
  ...body,
  ...suppressFocusOutline,
  ...hrContentGrouping,
  ...headerMargin,
  ...paragraphMargin,
  ...abbreviations,
  ...address,
  ...list,
  ...blockquote,
  ...dfn,
  ...strong,
  ...small,
  ...subSup,
  ...links,
  ...code,
  ...figure,
  ...image,
  ...tables,
  ...forms,
  ...output,
  ...summary,
  ...template,
  ...hidden
}
