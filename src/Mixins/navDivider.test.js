import { navDividerColor, navDividerMarginY } from '../Variables/Navs'

import { navDivider } from './navDivider'

describe('Horizontal dividers, Dividers (basically an hr) within dropdowns and nav lists', () => {
  const color = 'red'
  const marginY = '2px'

  it('nav divider for default value', () => {
    expect(navDivider()).toEqual({
      height: 0,
      margin: `${navDividerMarginY} 0`,
      overflow: 'hidden',
      borderTop: `1px solid ${navDividerColor}`
    })
  })

  it('nav divider', () => {
    expect(navDivider(color)).toEqual({
      height: 0,
      margin: `${navDividerMarginY} 0`,
      overflow: 'hidden',
      borderTop: `1px solid ${color}`
    })
    expect(navDivider(color, marginY)).toEqual({
      height: 0,
      margin: `${marginY} 0`,
      overflow: 'hidden',
      borderTop: `1px solid ${color}`
    })
  })
})
