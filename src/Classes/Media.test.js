import { media, mediaBody } from './Media'

describe('media', () => {
  it('media', () => {
    expect(media).toEqual({
      display: 'flex',
      alignItems: 'flex-start'
    })
  })

  it('media-body', () => {
    expect(mediaBody).toEqual({
      flex: 1
    })
  })
})
