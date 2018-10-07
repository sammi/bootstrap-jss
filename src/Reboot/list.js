import { dtFontWeight } from '../Variables/Fonts'

export const list = {
  '@global': {
    'ol,ul,dl': {
      marginTop: 0,
      marginBottom: '1rem'
    },
    'ol ol,ul ul,ol ul,ul ol': {
      marginBottom: 0
    },
    dt: {
      fontWeight: dtFontWeight
    },
    dd: {
      marginBottom: '0.5rem',
      marginLeft: 0
    }
  }
}