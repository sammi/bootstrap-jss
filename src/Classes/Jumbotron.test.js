import { jumbotronPadding, jumbotronBg } from '../Variables/Jumbotron'
import { borderRadiusLg } from '../Variables/Components'
import { borderRadius } from '../Mixins/borderRadius'
import { mediaBreakpointUp } from '../Mixins/breakpoints'
import { size } from '../Functions/size'

import { jumbotron, jumbotronFluid } from './Jumbotron'
describe('jumbotron', () => {
  it('jumbotron', () => {
    expect(jumbotron).toEqual({
      padding: `${jumbotronPadding} ${size(jumbotronPadding).value / 2}${size(jumbotronPadding).unit}`,
      marginBottom: jumbotronPadding,
      backgroundColor: jumbotronBg,
      ...borderRadius(borderRadiusLg),
      ...mediaBreakpointUp('sm', {
        padding: `${size(jumbotronPadding).value * 2}${size(jumbotronPadding).unit} ${jumbotronPadding}`
      })
    })
  })

  it('jumbotron-fluid', () => {
    expect(jumbotronFluid).toEqual({
      paddingRight: 0,
      paddingLeft: 0,
      ...borderRadius(0)
    })
  })
})
