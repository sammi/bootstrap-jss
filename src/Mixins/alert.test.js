import { alertVariant } from './alert'
import jss from 'jss'
import preset from 'jss-preset-default'
jss.setup(preset())

describe('variant', () => {
  it('alertVariant', () => {
    expect(alertVariant('#fff', '#000', '#0F0', false)).toEqual({
      'borderColor': '#000',
      'color': '#0F0',
      'backgroundColor': '#fff',
      '& hr': {
        'borderTopColor': '#000000'
      },
      '&$alertLink': {
        'color': '#00cc00'
      }
    })

    expect(jss.createStyleSheet({
      hr: {},
      alertLink: {},
      alertVariant: {
        ...alertVariant('#fff', '#000', '#0F0', false)
      }
    }).toString()).toBeDefined()

    expect(alertVariant('#fff', '#000', '#0F0', true)).toEqual({
      '&$alertLink': {
        'color': '#00cc00'
      },
      'borderColor': '#000',
      'color': '#0F0',
      'background': '#fff linear-gradient(180deg, #FFFFFF, #fff) repeat-x',
      '& hr': {
        'borderTopColor': '#000000'
      }
    })

    expect(jss.createStyleSheet({
      hr: {},
      alertLink: {},
      alertVariant: {
        ...alertVariant('#fff', '#000', '#0F0', true)
      }
    }).toString()).toBeDefined()

    expect(alertVariant('#fff', '#000', '#0F0')).toEqual({
      '&$alertLink': {
        'color': '#00cc00'
      },
      'borderColor': '#000',
      'color': '#0F0',
      'backgroundColor': '#fff',
      '& hr': {
        'borderTopColor': '#000000'
      }
    })

    expect(jss.createStyleSheet({
      hr: {},
      alertLink: {},
      alertVariant: {
        ...alertVariant('#fff', '#000', '#0F0')
      }
    }).toString()).toBeDefined()
  })
})
