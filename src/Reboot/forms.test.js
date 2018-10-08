import { labelMarginBottom } from '../Variables/Forms'

import { forms } from './forms'

describe('Reboot', () => {
  it('forms', () => {
    expect(forms).toEqual({
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
      'button,html [type="button"],[type="reset"],[type="submit"]': {
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

      'input[type="date"],input[type="time"],input[type="datetime-local"],input[type="month"]': {
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
        maxWidth: '100%', // 1
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
    })
  })
})
