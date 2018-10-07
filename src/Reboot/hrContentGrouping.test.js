import { hrContentGrouping } from './hrContentGrouping'

describe('Reboot', () => {
  it('Horirental line Content grouping', () => {
    expect(hrContentGrouping).toEqual({
      '@global': {
        hr: {
          boxSizing: 'content-box',
          height: 0,
          overflow: 'visible'
        }
      }
    })
  })
})
