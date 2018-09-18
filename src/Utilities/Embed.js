import percentValue from 'percent-value'

const embedResponsive = {
  position: 'relative',
  display: 'block',
  width: '100%',
  padding: 0,
  overflow: 'hidden',
  '&::before': {
    display: 'block',
    content: ''
  },
  'embedResponsiveItem,iframe,embed,object,video': {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 0
  }
}

const embedResponsive21by9 = {
  '&::before': {
    paddingTop: `${percentValue(9.0 / 21.0).of(1).toFixed(2)}%`
  }
}

const embedResponsive16by9 = {
  '&::before': {
    paddingTop: `${percentValue(9.0 / 16.0).of(1).toFixed(2)}%`
  }
}

const embedResponsive4by3 = {
  '&::before': {
    paddingTop: `${percentValue(3.0 / 4.0).of(1).toFixed(2)}%`
  }
}

const embedResponsive1by1 = {
  '&::before': {
    paddingTop: '100%'
  }
}

export {
  embedResponsive,
  embedResponsive21by9,
  embedResponsive16by9,
  embedResponsive4by3,
  embedResponsive1by1,
}
