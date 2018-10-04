import { hover } from '../Mixins/hover'
import { btnBorderWidth, btnPaddingXSm, btnPaddingXLg, btnPaddingX, btnActiveBoxShadow } from '../Variables/Buttons'
import { borderRightRadius, borderLeftRadius, borderBottomRadius, borderTopRadius } from '../Mixins/borderRadius'
import { btn, btnLink, btnSm, btnLg } from './Buttons'
import { size } from '../Functions/size'
import { boxShadow } from '../Mixins/boxShadow'
import { inputGroup } from './InputGroup'
import { dropup, dropright, dropleft } from './Dropdown'

const dropdownToggle = {
  btnLink,
  ...boxShadow(btnActiveBoxShadow),
  '&$btnLink': {
    ...boxShadow('none')
  }
}

const btnGroup = {
  btn,
  dropdownToggle,
  position: 'relative',
  display: 'inline-flex',
  verticalAlign: 'middle',
  '> $btn': {
    position: 'relative',
    flex: '0 1 auto',
    ...hover({
      zIndex: 1
    }),
    '&:focus,&:active,&.active': {
      zIndex: 1
    }
  },
  '> $btn:first-child': {
    marginLeft: 0
  },
  '> $btn:not(:last-child):not($dropdownToggle), & > &:not(:last-child) > $btn': {
    ...borderRightRadius(0)
  },
  '> $btn:not(:first-child), & > &:not(:first-child) > $btn': {
    ...borderLeftRadius(0)
  },
  show: {
    ...dropdownToggle
  }
}

const btnGroupVertial = {
  btn,
  btnGroup,
  position: 'relative',
  display: 'inline-flex',
  verticalAlign: 'middle',
  '> $btn': {
    position: 'relative',
    flex: `0 1 auto`,
    ...hover({
      zIndex: 1
    }),
    '&:focus,&:active,&.active': {
      zIndex: 1
    }
  },
  '$btn + $btn,$btn + $btnGroup,$btnGroup + $btn,$btnGroup + $btnGroup': {
    marginLeft: `-${btnBorderWidth}`
  }
}

const btnToolbar = {
  inputGroup,
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  '$inputGroup': {
    width: 'auto'
  }
}

const dropdownToggleSplit = {
  dropup,
  dropright,
  dropleft,
  paddingRight: `${size(btnPaddingX).value * 0.75}${size(btnPaddingX).unit}`,
  paddingLeft: `${size(btnPaddingX).value * 0.75}${size(btnPaddingX).unit}`,
  '&::after,$dropup &::after,$dropright &::after': {
    marginLeft: 0
  },
  '$dropleft &::before': {
    marginRight: 0
  }
}

const btnSizing = {
  btn,
  btnSm,
  btnLg,
  dropdownToggleSplit,
  btnGroupSm: btnSm,
  btnGroupLg: btnLg,
  '$btnGroupSm > $btn': {
    ...btnSm
  },
  '$btnGroupLg > $btn': {
    ...btnLg
  },
  '$btnSm + $dropdownToggleSplit': {
    paddingRight: `${size(btnPaddingXSm).value * 0.75}${size(btnPaddingXSm).unit}`,
    paddingLeft: `${size(btnPaddingXSm).value * 0.75}${size(btnPaddingXSm).unit}`
  },
  '$btnLg + $dropdownToggleSplit': {
    paddingRight: `${size(btnPaddingXLg).value * 0.75})${size(btnPaddingXLg).unit}`,
    paddingLeft: `${size(btnPaddingXLg).value * 0.75})${size(btnPaddingXLg).unit}`
  }
}

const btnGroupVertical = {
  btn,
  btnGroup,
  dropdownToggle,
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  '$btn, $btnGroup': {
    width: '100%'
  },
  '> $btn + $btn,> $btn + $btnGroup,> $btnGroup + $btn,> $btnGroup + $btnGroup': {
    marginTop: `-${btnBorderWidth}`,
    marginLeft: 0
  },
  '> $btn:not(:last-child):not($dropdownToggle),> $btnGroup:not(:last-child) > $btn': {
    ...borderBottomRadius(0)
  },
  '> $btn:not(:first-child),> $btnGroup:not(:first-child) > .btn': {
    ...borderTopRadius(0)
  }
}

const btnGroupToggle = {
  btn,
  btnGroup,
  '> $btn,> $btnGroup > $btn': {
    marginBottom: 0,
    'input[type="radio"],input[type="checkbox"]': {
      position: 'absolute',
      clip: 'rect(0, 0, 0, 0)',
      pointerEvents: 'none'
    }
  }
}

export {
  btnGroup,
  btnGroupVertial,
  btnToolbar,
  dropdownToggleSplit,
  btnSizing,
  dropdownToggle,
  btnGroupVertical,
  btnGroupToggle
}
