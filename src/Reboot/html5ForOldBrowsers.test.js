import {
  html5ForOldBrowsers
} from './html5ForOldBrowsers'

describe('Reboot', () => {
  // Shim for "new" HTML5 structural elements to display correctly (IE10, older browsers)
  it('html5ForOldBrowsers', () => {
    expect(html5ForOldBrowsers).toEqual({
      'article, aside, figcaption, figure, footer, header, hgroup, main, nav, section': {
        display: 'block'
      }
    })
  })
})
