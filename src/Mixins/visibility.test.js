import { invisible } from './visibility'
describe('Visibility', () => {
  it('invisible', () => {
    const visibility = 'visible'
    expect(invisible(visibility)).toEqual({
      visibility: `${visibility} !important`
    })
  })
})
