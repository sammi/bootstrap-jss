import { black } from '../Variables/Colors'
import { rgba } from '../Functions/rgba'
import { fontFamilyBase, fontSizeBase, fontWeightBase, lineHeightBase, headingsMarginBottom, dtFontWeight, fontFamilyMonospace } from '../Variables/Fonts'
import { bodyColor, bodyBg } from '../Variables/Body'
import { paragraphMarginBottom } from '../Variables/Paragraphs'
import { linkColor, linkDecoration, linkHoverColor, linkHoverDecoration } from '../Variables/Links'
import { hover, hoverFocus } from '../Mixins/hover'
import { tableCellPadding, tableCaptionColor } from '../Variables/Tables'
import { labelMarginBottom } from '../Variables/Forms'

import {
  boxSizing,
  html,
  msViewPort,
  html5ForOldBrowsers,
  body,
  suppressFocusOutline,
  hrContentGrouping,
  headerMargin,
  paragraphMargin,
  abbreviations,
  address,
  list,
  blockquote,
  dfn,
  strong,
  small,
  subSup,
  links,
  code,
  figure,
  image,
  tables,
  forms,
  output,
  summary,
  template,
  hidden
} from './index'

import Reboot from './index'

// Reboot
//
// Normalization of HTML elements, manually forked from Normalize.css to remove
// styles targeting irrelevant browsers while applying new styles.
//
// Normalize is licensed MIT. https://github.com/necolas/normalize.css

// Document
//
// 1. Change from `box-sizing: content-box` so that `width` is not affected by `padding` or `border`.
// 2. Change the default font family in all browsers.
// 3. Correct the line height in all browsers.
// 4. Prevent adjustments of font size after orientation changes in IE on Windows Phone and in iOS.
// 5. Setting @viewport causes scrollbars to overlap content in IE11 and Edge, so
//    we force a non-overlapping, non-auto-hiding scrollbar to counteract.
// 6. Change the default tap highlight to be completely transparent in iOS.

describe('Reboot', () => {
  it('boxSizing', () => {
    expect(boxSizing).toEqual({
      '*, *::before, *::after': {
        boxSizing: 'border-box'
      }
    })
  })

  it('html', () => {
    expect(html).toEqual({
      html: {
        fontFamily: 'sans-serif',
        lineHeight: 1.15,
        '-webkit-text-size-adjust': '100%',
        '-ms-text-size-adjust': '100%',
        '-ms-overflow-style': 'scrollbar',
        '-webkit-tap-highlight-color': rgba(black, 0)
      }
    })
  })

  // IE10+ doesn't honor `<meta name="viewport">` in some cases.
  it('msViewPort', () => {
    expect(msViewPort).toEqual({
      '@at-root': {
        '@-ms-viewport': {
          width: 'device-width'
        }
      }
    })
  })

  // Shim for "new" HTML5 structural elements to display correctly (IE10, older browsers)
  it('html5ForOldBrowsers', () => {
    expect(html5ForOldBrowsers).toEqual({
      'article, aside, figcaption, figure, footer, header, hgroup, main, nav, section': {
        display: 'block'
      }
    })
  })

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

  // Suppress the focus outline on elements that cannot be accessed via keyboard.
  // This prevents an unwanted focus outline from appearing around elements that
  // might still respond to pointer events.
  //
  // Credit: https://github.com/suitcss/base
  it('suppressFocusOutline', () => {
    expect(suppressFocusOutline).toEqual({
      '[tabindex="-1"]:focus': {
        outline: '0 !important'
      }
    })
  })

  // Content grouping
  //
  // 1. Add the correct box sizing in Firefox.
  // 2. Show the overflow in Edge and IE.
  it('Horirental line Content grouping', () => {
    expect(hrContentGrouping).toEqual({
      boxSizing: 'content-box',
      height: 0,
      overflow: 'visible'
    })
  })

  //
  // Typography
  //

  // Remove top margins from headings
  //
  // By default, `<h1>`-`<h6>` all receive top and bottom margins. We nuke the top
  // margin for easier control within type scales as it avoids margin collapsing.
  // stylelint-disable selector-list-comma-newline-after
  it('headerMargin', () => {
    expect(headerMargin).toEqual({
      'h1, h2, h3, h4, h5, h6': {marginTop: 0,
        marginBottom: headingsMarginBottom
      }
    })
  })

  // Reset margins on paragraphs
  //
  // Similarly, the top margin on `<p>`s get reset. However, we also reset the
  // bottom margin to use `rem` units instead of `em`.
  it('paragraphMargin', () => {
    expect(paragraphMargin).toEqual({
      'p': {
        marginTop: 0,
        marginBottom: paragraphMarginBottom
      }
    })
  })

  // Abbreviations
  //
  // 1. Remove the bottom border in Firefox 39-.
  // 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
  // 3. Add explicit cursor to indicate changed behavior.
  // 4. Duplicate behavior to the data-* attribute for our tooltip plugin
  it('abbreviations', () => {
    expect(abbreviations).toEqual({
      'abbr[title], abbr[data-original-title]': {
        textDecoration: 'underline dotted',
        fallbacks: {
          textDecoration: 'underline'
        },
        cursor: 'help',
        borderBottom: 0
      }
    })
  })

  it('address', () => {
    expect(address).toEqual({
      marginBottom: '1rem',
      fontStyle: 'normal',
      lineHeight: 'inherit'
    })
  })

  it('list', () => {
    expect(list).toEqual({
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
    })
  })

  it('blockquote', () => {
    expect(blockquote).toEqual({
      margin: ['0', '0', '1rem']
    })
  })

  it('dfn', () => {
    expect(dfn).toEqual({
      fontStyle: 'italic'
    })
  })

  it('strong', () => {
    expect(strong).toEqual({
      fontWeight: 'bolder'
    })
  })

  it('small', () => {
    expect(small).toEqual({
      fontSize: '80%'
    })
  })

  it('subSup', () => {
    expect(subSup).toEqual({
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
    })
  })

  it('links', () => {
    expect(links).toEqual({
      a: {
        color: linkColor,
        textDecoration: linkDecoration,
        backgroundColor: 'transparent', // Remove the gray background on active links in IE 10.
        '-webkit-text-decoration-skip': 'objects', // Remove gaps in links underline in iOS 8+ and Safari 8+.
        ...hover({
          color: linkHoverColor,
          textDecoration: linkHoverDecoration
        })
      },

      // And undo these styles for placeholder links/named anchors (without href)
      // which have not been made explicitly keyboard-focusable (without tabindex).
      // It would be more straightforward to just use a[href] in previous block, but that
      // causes specificity issues in many other styles that are too complex to fix.
      // See https://github.com/twbs/bootstrap/issues/19402

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
    })
  })

  it('code', () => {
    expect(code).toEqual({
      'pre,code,kbd,samp': {
        fontFamily: fontFamilyMonospace,
        fontSize: '1em' // Correct the odd `em` font sizing in all browsers.
      },
      pre: {
        // Remove browser default top margin
        marginTop: 0,
        // Reset browser default of `1em` to use `rem`s
        marginBottom: '1rem',
        // Don't allow content to break outside
        overflow: 'auto',
        // We have @viewport set which causes scrollbars to overlap content in IE11 and Edge, so
        // we force a non-overlapping, non-auto-hiding scrollbar to counteract.
        '-ms-overflow-style': 'scrollbar'
      }
    })
  })

  it('figure', () => {
    expect(figure).toEqual({
      figure: {
        // Apply a consistent margin strategy (matches our type styles).
        margin: ['0', '0', '1rem']
      }
    })
  })

  it('image', () => {
    expect(image).toEqual({
      img: {
        verticalAlign: 'middle',
        borderStyle: 'none' // Remove the border on images inside links in IE 10-.
      },
      'svg:not(:root)': {
        overflow: 'hidden' // Hide the overflow in IE
      }
    })
  })

  it('tables', () => {
    expect(tables).toEqual({
      table: {
        borderCollapse: 'collapse' // Prevent double borders
      },
      caption: {
        paddingTop: tableCellPadding,
        paddingBottom: tableCellPadding,
        color: tableCaptionColor,
        textAlign: 'left',
        captionSide: 'bottom'
      },
      th: {
        // Matches default `<td>` alignment by inheriting from the `<body>`, or the
        // closest parent with a set `text-align`.
        textAlign: 'inherit'
      }
    })
  })

  it('forms', () => {
    expect(forms).toEqual({
      label: {
        // Allow labels to use `margin` for spacing.
        display: 'inline-block',
        marginBottom: labelMarginBottom
      },
      // Remove the default `border-radius` that macOS Chrome adds.
      //
      // Details at https://github.com/twbs/bootstrap/issues/24093
      button: {
        borderRadius: 0
      },
      // Work around a Firefox/IE bug where the transparent `button` background
      // results in a loss of the default `button` focus styles.
      //
      // Credit: https://github.com/suitcss/base/
      'button:focus': {
        outline: ['5px', 'auto', '-webkit-focus-ring-color'],
        fallbacks: {
          outline: ['1px', 'dotted']
        }
      },
      'input,button,select,optgroup,textarea': {
        margin: 0, // Remove the margin in Firefox and Safari
        fontFamily: 'inherit',
        fontSize: 'inherit',
        lineHeight: 'inherit'
      },
      'button,input': {
        overflow: 'visible' // Show the overflow in Edge
      },
      'button,select': {
        textTransform: 'none' // Remove the inheritance of text transform in Firefox
      },
      // 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`
      //    controls in Android 4.
      // 2. Correct the inability to style clickable types in iOS and Safari.
      'button, html [type="button"], [type="reset"], [type="submit"]': {
        '-webkit-appearance': 'button'
      },

      // Remove inner border and padding from Firefox, but don't restore the outline like Normalize.
      'button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner': {
        padding: 0,
        borderStyle: 'none'
      },

      'input[type="radio"],input[type="checkbox"]': {
        boxSizing: 'border-box', // 1. Add the correct box sizing in IE 10-
        padding: 0 // 2. Remove the padding in IE 10-
      },

      'input[type="date"], input[type="time"], input[type="datetime-local"], input[type="month"]': {
        // Remove the default appearance of temporal inputs to avoid a Mobile Safari
        // bug where setting a custom line-height prevents text from being vertically
        // centered within the input.
        // See https://bugs.webkit.org/show_bug.cgi?id=139848
        // and https://github.com/twbs/bootstrap/issues/11266
        '-webkit-appearance': 'listbox'
      },
      textarea: {
        overflow: 'auto', // Remove the default vertical scrollbar in IE.
        // Textareas should really only resize vertically so they don't break their (horizontal) containers.
        resize: 'vertical'
      },
      fieldset: {
        // Browsers set a default `min-width: min-content;` on fieldsets,
        // unlike e.g. `<div>`s, which have `min-width: 0;` by default.
        // So we reset that to ensure fieldsets behave more like a standard block element.
        // See https://github.com/twbs/bootstrap/issues/12359
        // and https://html.spec.whatwg.org/multipage/#the-fieldset-and-legend-elements
        minWidth: 0,
        // Reset the default outline behavior of fieldsets so they don't affect page layout.
        padding: 0,
        margin: 0,
        border: 0
      },

      // 1. Correct the text wrapping in Edge and IE.
      // 2. Correct the color inheritance from `fieldset` elements in IE.
      legend: {
        display: 'block',
        width: '100%',
        maxWidth: '100%', // 1
        padding: 0,
        marginBottom: '0.5rem',
        fontSize: '1.5rem',
        lineHeight: 'inherit',
        color: 'inherit', // 2
        whiteSpace: 'normal' // 1
      },

      progress: {
        verticalAlign: 'baseline' // Add the correct vertical alignment in Chrome, Firefox, and Opera.
      },

      // Correct the cursor style of increment and decrement buttons in Chrome.
      '[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button': {
        height: 'auto'
      },

      '[type="search"]': {
        // This overrides the extra rounded corners on search inputs in iOS so that our
        // `.form-control` class can properly style them. Note that this cannot simply
        // be added to `.form-control` as it's not specific enough. For details, see
        // https://github.com/twbs/bootstrap/issues/11586.
        outlineOffset: '-2px', // 2. Correct the outline style in Safari.
        '-webkit-appearance': 'none'
      },

      //
      // Remove the inner padding and cancel buttons in Chrome and Safari on macOS.
      //

      '[type="search"]::-webkit-search-cancel-button,[type="search"]::-webkit-search-decoration': {
        '-webkit-appearance': 'none'
      },

      //
      // 1. Correct the inability to style clickable types in iOS and Safari.
      // 2. Change font properties to `inherit` in Safari.
      //

      '::-webkit-file-upload-button': {
        font: 'inherit', // 2
        '-webkit-appearance': 'button' // 1
      }
    })
  })

  it('output', () => {
    expect(output).toEqual({
      display: 'inline-block'
    })
  })

  it('summary', () => {
    expect(summary).toEqual({
      display: 'list-item',
      cursor: 'pointer'
    })
  })

  it('template', () => {
    expect(template).toEqual({
      display: 'none'
    })
  })
  it('hidden', () => {
    expect(hidden).toEqual({
      '[hidden]': {
        disable: 'none !important'
      }
    })
  })

  it('All reboot styles', () => {
    expect(Reboot).toEqual({
      '*, *::before, *::after': {
        'boxSizing': 'border-box'
      },
      '::-webkit-file-upload-button': {
        '-webkit-appearance': 'button',
        'font': 'inherit'
      },
      '@at-root': {
        '@-ms-viewport': {
          'width': 'device-width'
        }
      },
      '[hidden]': {
        'disable': 'none !important'
      },
      '[tabindex="-1"]:focus': {
        'outline': '0 !important'
      },
      '[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button': {
        'height': 'auto'
      },
      '[type="search"]': {
        '-webkit-appearance': 'none',
        'outlineOffset': '-2px'
      },
      '[type="search"]::-webkit-search-cancel-button,[type="search"]::-webkit-search-decoration': {
        '-webkit-appearance': 'none'
      },
      'a': {
        '&:hover': {
          'color': '#0056b3',
          'textDecoration': 'underline'
        },
        '-webkit-text-decoration-skip': 'objects',
        'backgroundColor': 'transparent',
        'color': '#007bff',
        'textDecoration': 'none'
      },
      'a:not([href]):not([tabindex])': {
        '&:focus': {
          'outline': 0
        },
        '&:hover, &:focus': {
          'color': 'inherit',
          'textDecoration': 'none'
        },
        'color': 'inherit',
        'textDecoration': 'none'
      },
      'abbr[title], abbr[data-original-title]': {
        'borderBottom': 0,
        'cursor': 'help',
        'fallbacks': {
          'textDecoration': 'underline'
        },
        'textDecoration': 'underline dotted'
      },
      'article, aside, figcaption, figure, footer, header, hgroup, main, nav, section': {
        'display': 'block'
      },
      'body': {
        'backgroundColor': '#fff',
        'color': '#212529',
        'fontFamily': '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        'fontSize': '1rem',
        'fontWeight': 400,
        'lineHeight': 1.5,
        'margin': 0,
        'textAlign': 'left'
      },
      'boxSizing': 'content-box',
      'button': {
        'borderRadius': 0
      },
      'button, html [type="button"], [type="reset"], [type="submit"]': {
        '-webkit-appearance': 'button'
      },
      'button,input': {
        'overflow': 'visible'
      },
      'button,select': {
        'textTransform': 'none'
      },
      'button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner': {
        'borderStyle': 'none',
        'padding': 0
      },
      'button:focus': {
        'fallbacks': {
          'outline': [
            '1px',
            'dotted'
          ]
        },
        'outline': [
          '5px',
          'auto',
          '-webkit-focus-ring-color'
        ]
      },
      'caption': {
        'captionSide': 'bottom',
        'color': '#6c757d',
        'paddingBottom': '.75rem',
        'paddingTop': '.75rem',
        'textAlign': 'left'
      },
      'cursor': 'pointer',
      'dd': {
        'marginBottom': '0.5rem',
        'marginLeft': 0
      },
      'display': 'none',
      'dt': {
        'fontWeight': 700
      },
      'fieldset': {
        'border': 0,
        'margin': 0,
        'minWidth': 0,
        'padding': 0
      },
      'figure': {
        'margin': [
          '0',
          '0',
          '1rem'
        ]
      },
      'fontSize': '80%',
      'fontStyle': 'italic',
      'fontWeight': 'bolder',
      'h1, h2, h3, h4, h5, h6': {
        'marginBottom': '1rem',
        'marginTop': 0
      },
      'height': 0,
      'html': {
        '-ms-overflow-style': 'scrollbar',
        '-ms-text-size-adjust': '100%',
        '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)',
        '-webkit-text-size-adjust': '100%',
        'fontFamily': 'sans-serif',
        'lineHeight': 1.15
      },
      'img': {
        'borderStyle': 'none',
        'verticalAlign': 'middle'
      },
      'input,button,select,optgroup,textarea': {
        'fontFamily': 'inherit',
        'fontSize': 'inherit',
        'lineHeight': 'inherit',
        'margin': 0
      },
      'input[type="date"], input[type="time"], input[type="datetime-local"], input[type="month"]': {
        '-webkit-appearance': 'listbox'
      },
      'input[type="radio"],input[type="checkbox"]': {
        'boxSizing': 'border-box',
        'padding': 0
      },
      'label': {
        'display': 'inline-block',
        'marginBottom': '.5rem'
      },
      'legend': {
        'color': 'inherit',
        'display': 'block',
        'fontSize': '1.5rem',
        'lineHeight': 'inherit',
        'marginBottom': '0.5rem',
        'maxWidth': '100%',
        'padding': 0,
        'whiteSpace': 'normal',
        'width': '100%'
      },
      'lineHeight': 'inherit',
      'margin': [
        '0',
        '0',
        '1rem'
      ],
      'marginBottom': '1rem',
      'ol ol, ul ul, ol ul, ul ol': {
        'marginBottom': 0
      },
      'ol,ul,dl': {
        'marginBottom': '1rem',
        'marginTop': 0
      },
      'overflow': 'visible',
      'p': {
        'marginBottom': '1rem',
        'marginTop': 0
      },
      'pre': {
        '-ms-overflow-style': 'scrollbar',
        'marginBottom': '1rem',
        'marginTop': 0,
        'overflow': 'auto'
      },
      'pre,code,kbd,samp': {
        'fontFamily': 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
        'fontSize': '1em'
      },
      'progress': {
        'verticalAlign': 'baseline'
      },
      'sub': {
        'bottom': '-0.25em'
      },
      'sub, sup': {
        'fontSize': '75%',
        'lineHeight': 0,
        'position': 'relative',
        'verticalAlign': 'baseline'
      },
      'sup': {
        'top': '-0.5em'
      },
      'svg:not(:root)': {
        'overflow': 'hidden'
      },
      'table': {
        'borderCollapse': 'collapse'
      },
      'textarea': {
        'overflow': 'auto',
        'resize': 'vertical'
      },
      'th': {
        'textAlign': 'inherit'
      }
    }
    )
  })
})
