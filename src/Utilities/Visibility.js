import { invisible as invisibleMixin } from '../Mixins/visibility'

const visible = {
  ...invisibleMixin('visible')  
}

const invisible = {
  ...invisibleMixin('hidden')
}

export {
  visible,
  invisible
}