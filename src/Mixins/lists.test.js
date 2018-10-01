import { lists } from './lists'
describe('lists', () => {
  it('listUnstyled', () => {
    expect(lists.listUnstyled).toEqual({
      paddingLeft: 0,
      listStyle: 'none'
    })
  })
})
