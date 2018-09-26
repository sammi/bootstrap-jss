import { abbreviations } from './abbreviations'

describe('Reboot', () => {
  // Abbreviations
  //
  // 1. Remove the bottom border in Firefox 39-.
  // 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
  // 3. Add explicit cursor to indicate changed behavior.
  // 4. Duplicate behavior to the data-* attribute for our tooltip plugin
  it('abbreviations', () => {
    expect(abbreviations).toEqual({
      'abbr[title],abbr[data-original-title]': {
        textDecoration: 'underline dotted',
        fallbacks: {
          textDecoration: 'underline'
        },
        cursor: 'help',
        borderBottom: 0
      }
    })
  })
})
