import { borderRadius as defaultBorderRadius } from '../Variables/Components'
import { enableRounded as defaultEnableRounded } from '../Variables/Options'

const borderRadius = (radius = defaultBorderRadius, enableRounded = defaultEnableRounded) => enableRounded ? { borderRadius: defaultBorderRadius } : null

const borderTopRadius = (radius = defaultBorderRadius, enableRounded = defaultEnableRounded) =>
  enableRounded ? { borderTopLeftRadius: defaultBorderRadius, borderTopRightRadius: defaultBorderRadius } : null

const borderRightRadius = (radius = defaultBorderRadius, enableRounded = defaultEnableRounded) =>
  enableRounded ? { borderTopRightRadius: defaultBorderRadius, borderBottomRightRadius: defaultBorderRadius } : null

const borderBottomRadius = (radius = defaultBorderRadius, enableRounded = defaultEnableRounded) =>
  enableRounded ? { borderBottomRightRadius: defaultBorderRadius, borderBottomLeftRadius: defaultBorderRadius } : null

const borderLeftRadius = (radius = defaultBorderRadius, enableRounded = defaultEnableRounded) =>
  enableRounded ? { borderTopLeftRadius: defaultBorderRadius, borderBottomLeftRadius: defaultBorderRadius } : null

export {
  borderRadius,
  borderTopRadius,
  borderRightRadius,
  borderBottomRadius,
  borderLeftRadius
}
