import { labelMarginBottom } from '../Variables/Forms'

import {
  forms
} from './forms'

describe('Reboot', () => {
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
      'button,html [type="button"],[type="reset"],[type="submit"]': {
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

      'input[type="date"],input[type="time"],input[type="datetime-local"],input[type="month"]': {
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
})
