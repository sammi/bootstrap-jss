import { jumbotronPadding, jumbotronBg } from '../Variables/Jumbotron'
import { borderRadiusLg } from '../Variables/Components'
import { borderRadius } from '../Mixins/borderRadius'
import { mediaBreakpointUp } from '../Mixins/breakpoints'

const jumbotron = {
  padding: `$jumbotron-padding ($jumbotron-padding / 2)`,
  marginBottom: jumbotronPadding,
  backgroundColor: jumbotronBg,
  ...borderRadius(borderRadiusLg),
  ...mediaBreakpointUp('sm', {
    padding: '($jumbotron-padding * 2) $jumbotron-padding'
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
