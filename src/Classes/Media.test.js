import { media, mediaBody } from './Media'
import jss from 'jss'
import preset from 'jss-preset-default'
jss.setup(preset())

describe('media', () => {
  it('media', () => {
    expect(media).toEqual({
      display: 'flex',
      alignItems: 'flex-start'
    })
    expect(jss.createStyleSheet({ media }).toString()).toBeDefined()
  })

  it('media-body', () => {
    expect(mediaBody).toEqual({
      flex: 1
    })
    expect(jss.createStyleSheet({ mediaBody }).toString()).toBeDefined()
  })
})
