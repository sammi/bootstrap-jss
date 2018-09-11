import { hover } from '../Mixins/hover'
import { btnBorderWidth, btnPaddingXSm, btnPaddingXLg, btnPaddingX, btnActiveBoxShadow } from '../Variables/Buttons'
import { borderRightRadius, borderLeftRadius, borderBottomRadius, borderTopRadius } from '../Mixins/borderRadius'
import { btnSm, btnLg } from './Buttons'
import { size } from '../Functions/size'
import { boxShadow } from '../Mixins/boxShadow'

import { btnGroupVertial, btnGroup, btnToolbar, btnSizing, dropdownToggleSplit, dropdownToggle, btnGroupVertical, btnGroupToggle } from './ButtonGroup'

describe('button group', () => {
  const base = {
    position: 'relative',
    display: 'inline-flex',
    verticalAlign: 'middle',
    '> btn': {
      position: 'relative',
      flex: `0 1 auto`,
      ...hover({
        zIndex: 1
      }),
      '&:focus,&:active,&.active': {
        zIndex: 1
      }
    },
    'btn + btn,btn + btnGroup,btnGroup + btn,btnGroup + btnGroup': {
      marginLeft: `-${btnBorderWidth}`
    }
  }

  it('btn-group-vertial', () => {
    expect(btnGroupVertial).toEqual(base)
  })

  const dropdownToggleExpectValue = {
    ...boxShadow(btnActiveBoxShadow),
    '&btnLink': {
      ...boxShadow('none')
    }
  }

  it('btn-group', () => {
    expect(btnGroup).toEqual({
      ...base,
      '> .btn:first-child': {
        marginLeft: 0
      },
      '> btn:not(:last-child):not(dropdownToggle),> btnGroup:not(:last-child) > btn': {
        ...borderRightRadius(0)
      },
      '> btn:not(:first-child),> btnGroup:not(:first-child) > btn': {
        ...borderLeftRadius(0)
      },
      show: {
        ...dropdownToggleExpectValue
      }
    })
  })

  it('btn-toolbar', () => {
    expect(btnToolbar).toEqual({
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      inputGroup: {
        width: 'auto'
      }
    })
  })

  it('button group sizing', () => {
    expect(btnSizing).toEqual({
      'btnGroupSm > btn': {
        ...btnSm
      },
      'btnGroupLg > btn': {
        ...btnLg
      },
      'btn-sm + .dropdown-toggle-split': {
        paddingRight: `${size(btnPaddingXSm).value * 0.75}${size(btnPaddingXSm).unit}`,
        paddingLeft: `${size(btnPaddingXSm).value * 0.75}${size(btnPaddingXSm).unit}`
      },
      'btnLg + dropdownToggleSplit': {
        paddingRight: `${size(btnPaddingXLg).value * 0.75})${size(btnPaddingXLg).unit}`,
        paddingLeft: `${size(btnPaddingXLg).value * 0.75})${size(btnPaddingXLg).unit}`
      }
    })
  })

  it('dropdown-toggle-split', () => {
    expect(dropdownToggleSplit).toEqual({
      paddingRight: `${size(btnPaddingX).value * 0.75}${size(btnPaddingX).unit}`,
      paddingLeft: `${size(btnPaddingX).value * 0.75}${size(btnPaddingX).unit}`,
      '&::after,dropup &::after,dropright &::after': {
        marginLeft: 0
      },
      'dropleft &::before': {
        marginRight: 0
      }
    })
  })

  it('dropdown-toggle', () => {
    expect(dropdownToggle).toEqual(dropdownToggleExpectValue)
  })

  it('btn-group-vertical', () => {
    expect(btnGroupVertical).toEqual({
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      'btn, btn-group': {
        width: '100%'
      },
      '> btn + btn,> btn + btnGroup,> btnGroup + btn,> btnGroup + btnGroup': {
        marginTop: `-${btnBorderWidth}`,
        marginLeft: 0
      },
      '> .btn:not(:last-child):not(.dropdown-toggle),> .btn-group:not(:last-child) > .btn': {
        ...borderBottomRadius(0)
      },
      '> .btn:not(:first-child),> .btn-group:not(:first-child) > .btn': {
        ...borderTopRadius(0)
      }
    })
  })

  it('btn-group-toggle', () => {
    expect(btnGroupToggle).toEqual({
      '> btn,> btnGroup > btn': {
        marginBottom: 0,
        'input[type="radio"],input[type="checkbox"]': {
          position: 'absolute',
          clip: `rect(0, 0, 0, 0)`,
          pointerEvents: 'none'
        }
      }
    })
  })
})
