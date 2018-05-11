import { grays } from './Colors'

import { jumbotronPadding, jumbotronBg } from './Jumbotron'

describe('Jumbotron', () => {
  it('Jumbotron', () => {
    expect(jumbotronPadding).toEqual('2rem')
    expect(jumbotronBg).toEqual(grays._200)
  })
})
