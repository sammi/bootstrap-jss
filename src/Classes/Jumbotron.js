import { jumbotronPadding, jumbotronBg } from '../Variables/Jumbotron'
import { borderRadiusLg } from '../Variables/Components'
import { borderRadius } from '../Mixins/borderRadius'
import { mediaBreakpointUp } from '../Mixins/breakpoints'
import { size } from '../Functions/size'

const jumbotron = {
  padding: `${jumbotronPadding} ${size(jumbotronPadding).value / 2}${size(jumbotronPadding).unit}`,
  marginBottom: jumbotronPadding,
  backgroundColor: jumbotronBg,
  ...borderRadius(borderRadiusLg),
  ...mediaBreakpointUp('sm', {
    padding: `${size(jumbotronPadding).value * 2}${size(jumbotronPadding).unit} ${jumbotronPadding}`
  })
}

const jumbotronFluid = {
  paddingRight: 0,
  paddingLeft: 0,
  ...borderRadius(0)
}

export {
  jumbotron,
  jumbotronFluid
}
