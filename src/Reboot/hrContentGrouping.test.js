import {
  hrContentGrouping
} from './hrContentGrouping'

describe('Reboot', () => {
  // Content grouping
  //
  // 1. Add the correct box sizing in Firefox.
  // 2. Show the overflow in Edge and IE.
  it('Horirental line Content grouping', () => {
    expect(hrContentGrouping).toEqual({
      hr: {
        boxSizing: 'content-box',
        height: 0,
        overflow: 'visible'
      }
    })
  })
})
