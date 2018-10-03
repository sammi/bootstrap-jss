import percentValue from 'percent-value'

import {
  embedResponsive,
  embedResponsive21by9,
  embedResponsive16by9,
  embedResponsive4by3,
  embedResponsive1by1
} from './Embed'

describe('embed', () => {
  it('embed-responsive', () => {
    const embedResponsiveItem = {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      width: '100%',
      height: '100%',
      border: 0
    }
    expect(embedResponsive).toEqual({
      position: 'relative',
      display: 'block',
      width: '100%',
      padding: 0,
      overflow: 'hidden',
      '&::before': {
        display: 'block',
        content: ''
      },
      embedResponsiveItem,
      '$embedResponsiveItem,iframe,embed,object,video': embedResponsiveItem
    })
  })

  it('embed-responsive-21by9', () => {
    expect(embedResponsive21by9).toEqual({
      '&::before': {
        paddingTop: `${percentValue(9.0 / 21.0).of(1).toFixed(2)}%`
      }
    })
  })

  it('embed-responsive-16by9', () => {
    expect(embedResponsive16by9).toEqual({
      '&::before': {
        paddingTop: `${percentValue(9.0 / 16.0).of(1).toFixed(2)}%`
      }
    })
  })

  it('embed-responsive-4by3', () => {
    expect(embedResponsive4by3).toEqual({
      '&::before': {
        paddingTop: `${percentValue(3.0 / 4.0).of(1).toFixed(2)}%`
      }
    })
  })

  it('embed-responsive-4by3', () => {
    expect(embedResponsive1by1).toEqual({
      '&::before': {
        paddingTop: '100%'
      }
    })
  })
})
