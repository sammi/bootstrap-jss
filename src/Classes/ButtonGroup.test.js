import { hover } from '../Mixins/hover'
import { btnBorderWidth, btnPaddingXSm, btnPaddingXLg, btnPaddingX, btnActiveBoxShadow } from '../Variables/Buttons'
import { borderRightRadius, borderLeftRadius, borderBottomRadius, borderTopRadius } from '../Mixins/borderRadius'
import { btnSm, btnLg } from './Buttons'
import { size } from '../Functions/size'
import { boxShadow } from '../Mixins/boxShadow'

import { btnGroup, dropdownToggleSplit, btnToolbar, btnGroupSm, btnGroupLg, btnGroupVertical, btnGroupToggle } from './ButtonGroup'
import jss from 'jss'
import preset from 'jss-preset-default'
jss.setup(preset())

describe('button group', () => {
  const btnGroupCommonStyle = {
    position: 'relative',
    display: 'inline-flex',
    verticalAlign: 'middle',
    '& > $btn': {
      position: 'relative',
      flex: '0 1 auto',
      ...hover({
        zIndex: 1
      }),
      '&:focus,&:active,&$active': {
        zIndex: 1
      }
    },
    '$btn + $btn, $btn + &, & + $btn, & + &': {
      marginLeft: `-${btnBorderWidth}`
    }
  }

  it('btn-group', () => {
    expect(btnGroup).toEqual({
      ...btnGroupCommonStyle,
      '&> $btn:first-child': {
        marginLeft: 0
      },
      '&> $btn:not(:last-child):not($dropdownToggle),> :not(:last-child) > $btn': {
        ...borderRightRadius(0, false)
      },
      '&> $btn:not(:first-child),> :not(:first-child) > $btn': {
        ...borderLeftRadius(0, false)
      },
      '&$show $dropdownToggle': {
        ...boxShadow(btnActiveBoxShadow),
        '&$btnLink': {
          ...boxShadow('none')
        }
      }
    })

    expect(jss.createStyleSheet({ active: {}, btn: {}, dropdownToggle: {}, show: {}, btnLink: {}, btnGroup }).toString()).toBeDefined()
  })

  it('btn-group-vertical', () => {
    expect(btnGroupVertical).toEqual({
      ...btnGroupCommonStyle,
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      '&$btn,$btnGroup': {
        width: '100%'
      },
      '&> $btn + $btn,> $btn + $btnGroup,> $btnGroup + $btn,> $btnGroup + $btnGroup': {
        marginTop: `-${btnBorderWidth}`,
        marginLeft: 0
      },
      '&> $btn:not(:last-child):not($dropdownToggle),> $btnGroup:not(:last-child) > $btn': {
        ...borderBottomRadius(0, false)
      },
      '&> $btn:not(:first-child),> $btnGroup:not(:first-child) > $btn': {
        ...borderTopRadius(0, false)
      }
    })

    expect(jss.createStyleSheet({ active: {}, btn: {}, dropdownToggle: {}, show: {}, btnGroup: {}, btnGroupVertical }).toString()).toBeDefined()
  })

  it('btn-toolbar', () => {
    expect(btnToolbar).toEqual({
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      '&$inputGroup': {
        width: 'auto'
      }
    })

    expect(jss.createStyleSheet({ inputGroup: {}, btnToolbar }).toString()).toBeDefined()
  })
  it('dropdown-toggle-split', () => {
    expect(dropdownToggleSplit).toEqual({
      paddingRight: `${size(btnPaddingX).value * 0.75}${size(btnPaddingX).unit}`,
      paddingLeft: `${size(btnPaddingX).value * 0.75}${size(btnPaddingX).unit}`,
      '&::after,$dropup &::after,$dropright &::after': {
        marginLeft: 0
      },
      '$dropleft &::before': {
        marginRight: 0
      }
    })

    expect(jss.createStyleSheet({ dropup: {}, dropright: {}, dropleft: {}, dropdownToggleSplit }).toString()).toBeDefined()
  })
  it('btn-group-sm', () => {
    expect(btnGroupSm).toEqual({
      '& > $btn': {
        ...btnSm
      },
      '& + $dropdownToggleSplit': {
        paddingRight: `${size(btnPaddingXSm).value * 0.75}${size(btnPaddingXSm).unit}`,
        paddingLeft: `${size(btnPaddingXSm).value * 0.75}${size(btnPaddingXSm).unit}`
      }
    })

    expect(jss.createStyleSheet({ btn: {}, dropdownToggleSplit: {}, btnGroupSm }).toString()).toBeDefined()
  })
  it('btn-group-lg', () => {
    expect(btnGroupLg).toEqual({
      '& > $btn': {
        ...btnLg
      },
      '& + $dropdownToggleSplit': {
        paddingRight: `${size(btnPaddingXLg).value * 0.75})${size(btnPaddingXLg).unit}`,
        paddingLeft: `${size(btnPaddingXLg).value * 0.75})${size(btnPaddingXLg).unit}`
      }
    })

    expect(jss.createStyleSheet({ btn: {}, dropdownToggleSplit: {}, btnGroupLg }).toString()).toBeDefined()
  })

  it('btn-group-toggle', () => {
    expect(btnGroupToggle).toEqual({
      '& > $btn,& > $btnGroup > $btn': {
        marginBottom: 0,
        '& input[type="radio"],input[type="checkbox"]': {
          position: 'absolute',
          clip: 'rect(0, 0, 0, 0)',
          pointerEvents: 'none'
        }
      }
    })

    expect(jss.createStyleSheet({ btn: {}, btnGroup: {}, btnGroupToggle }).toString()).toBeDefined()
  })
})
