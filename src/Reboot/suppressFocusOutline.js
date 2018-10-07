export const suppressFocusOutline = {
  '@global': {
    '[tabindex="-1"]:focus': {
      outline: '0 !important'
    }
  }
}