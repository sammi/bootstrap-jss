import { jumbotronPadding, jumbotronBg } from '../Variables/Jumbotron'
import { borderRadiusLg } from '../Variables/Components'
import { borderRadius } from '../Mixins/borderRadius'
import { mediaBreakpointUp } from '../Mixins/breakpoints'

import { jumbotron, jumbotronFluid } from './Jumbotron'
describe('jumbotron', () => {
  it('jumbotron', () => {
    expect(jumbotron).toEqual({
      padding: `$jumbotron-padding ($jumbotron-padding / 2)`,
      marginBottom: jumbotronPadding,
      backgroundColor: jumbotronBg,
      ...borderRadius(borderRadiusLg),
      ...mediaBreakpointUp('sm', {
        padding: '($jumbotron-padding * 2) $jumbotron-padding'
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
