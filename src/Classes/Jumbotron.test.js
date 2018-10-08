import { jumbotronPadding, jumbotronBg } from '../Variables/Jumbotron'
import { borderRadiusLg } from '../Variables/Components'
import { borderRadius } from '../Mixins/borderRadius'
import { mediaBreakpointUp } from '../Mixins/breakpoints'
import { size } from '../Functions/size'
import { jumbotron, jumbotronFluid } from './Jumbotron'
import jss from 'jss'
import preset from 'jss-preset-default'
jss.setup(preset())

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
    expect(jss.createStyleSheet({ jumbotron }).toString()).toBeDefined()
  })

  it('jumbotron-fluid', () => {
    expect(jumbotronFluid).toEqual({
      paddingRight: 0,
      paddingLeft: 0,
      ...borderRadius(0)
    })
    expect(jss.createStyleSheet({ jumbotronFluid }).toString()).toBeDefined()
  })
})
