import { html5ForOldBrowsers } from './html5ForOldBrowsers'

describe('Reboot', () => {
  it('html5ForOldBrowsers', () => {
    expect(html5ForOldBrowsers).toEqual({
      '@global': {
        'article, aside, figcaption, figure, footer, header, hgroup, main, nav, section': {
          display: 'block'
        }
      }
    })
  })
})
