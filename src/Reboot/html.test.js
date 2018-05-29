import { black } from '../Variables/Colors'
import { rgba } from '../Functions/rgba'
import {
  html
} from './html'

describe('Reboot', () => {
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
})
