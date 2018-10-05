import { listUnstyled } from './lists'
describe('lists', () => {
  it('listUnstyled', () => {
    expect(listUnstyled).toEqual({
      paddingLeft: 0,
      listStyle: 'none'
    })
  })
})
