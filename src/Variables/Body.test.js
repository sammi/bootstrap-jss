import {white, grays} from './Colors'
import {bodyBg, bodyColor} from './Body'

describe('Body', () => {
  it('Settings for the `<body>` element.', () => {
    expect(bodyBg).toEqual(white)
    expect(bodyColor).toEqual(grays._900)
  })
})
