import { fontFamilyMonospace } from '../Variables/Fonts'

export const code = {
  '@global': {
    'pre,code,kbd,samp': {
      fontFamily: fontFamilyMonospace,
      fontSize: '1em'
    },
    pre: {
      marginTop: 0,
      marginBottom: '1rem',
      overflow: 'auto',
      '-ms-overflow-style': 'scrollbar'
    }
  }
}
