import { alertVariant } from './alert'

describe('variant', () => {
  it('alertVariant', () => {
    expect(alertVariant('#fff', '#000', '#0F0', false)).toEqual({
      '$alertLink': {
        'color': '#00cc00'
      },
      'borderColor': '#000',
      'color': '#0F0',
      'backgroundColor': '#fff',
      'hr': {
        'borderTopColor': '#000000'
      }
    })

    expect(alertVariant('#fff', '#000', '#0F0', true)).toEqual({
      '$alertLink': {
        'color': '#00cc00'
      },
      'borderColor': '#000',
      'color': '#0F0',
      'background': '#fff linear-gradient(180deg, #FFFFFF, #fff) repeat-x',
      'hr': {
        'borderTopColor': '#000000'
      }
    })

    expect(alertVariant('#fff', '#000', '#0F0')).toEqual({
      '$alertLink': {
        'color': '#00cc00'
      },
      'borderColor': '#000',
      'color': '#0F0',
      'backgroundColor': '#fff',
      'hr': {
        'borderTopColor': '#000000'
      }
    })
  })
})
