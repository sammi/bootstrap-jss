import {
  inputBorderWidth,
  inputPaddingY,
  inputPaddingX,
  inputLineHeight,
  inputGroupAddonColor,
  inputGroupAddonBg,
  inputGroupAddonBorderColor,
  inputBorderRadius,
  inputHeightLg,
  inputPaddingYLg,
  inputPaddingXLg,
  inputLineHeightLg,
  inputBorderRadiusLg,
  inputHeightSm,
  inputPaddingYSm,
  inputPaddingXSm,
  inputLineHeightSm,
  inputBorderRadiusSm
} from '../Variables/Forms'
import { borderRightRadius, borderLeftRadius, borderRadius } from '../Mixins/borderRadius'
import { fontSizeBase, fontWeightNormal, fontSizeLg, fontSizeSm } from '../Variables/Fonts'
import { customSelect, customFile, customFileInput, customFileLabel, customControl } from './CustomForms'
import { btn } from './Buttons'
import { dropdownToggle } from './Dropdown'
import { formControl } from './Form'
import {
  inputGroup,
  inputGroupPrepend,
  inputGroupAppend,
  inputGroupText,
  inputGroupLg,
  inputGroupSm,
  inputGroupRadius
} from './InputGroup'
import jss from 'jss'
import preset from 'jss-preset-default'
jss.setup(preset())

describe('input group', () => {
  it('input-group', () => {
    expect(inputGroup).toEqual({
      formControl: {
        ...formControl()
      },
      customSelect: {
        ...customSelect()
      },
      position: 'relative',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'stretch',
      width: '100%',
      '& > $formControl, & > $customSelect, & > $customFile': {
        position: 'relative',
        flex: '1 1 auto',
        width: '1%',
        marginBottom: 0,
        '& + $formControl, & + $customSelect, & + $customFile': {
          marginLeft: `-${inputBorderWidth}`
        }
      },
      '& > $formControl:focus, & > $customSelect:focus, & > $customFile $customFileInput:focus ~ $customFileLabel': {
        zIndex: 3
      },
      '& > $customFile $customFileInput:focus': {
        zIndex: 4
      },
      '& > $formControl, & > $customSelect': {
        '&:not(:last-child)': {
          ...borderRightRadius(0)
        },
        '&:not(:first-child)': {
          ...borderLeftRadius(0)
        }
      },
      '& > $customFile': {
        display: 'flex',
        alignItems: 'center',
        '&:not(:last-child) $customFileLabel, &:not(:last-child) $customFileLabel::after': {
          ...borderRightRadius(0)
        },
        '&:not(:first-child) $customFileLabel': {
          ...borderLeftRadius(0)
        }
      }
    })
    expect(jss.createStyleSheet({
      formControl: {},
      customFile: {},
      customFileLabel: {},
      customSelect: {},
      customFileInput: {},
      inputGroup
    }).toString()).toBeDefined()
  })

  const inputGroupPrependAppend = {
    display: 'flex',
    '&$btn': {
      position: 'relative',
      zIndex: 2
    },
    '&$btn + $btn, &$btn + $inputGroupText, &$inputGroupText + $inputGroupText, &$inputGroupText + $btn': {
      marginLeft: `-${inputBorderWidth}`
    }
  }

  it('input-group-prepend', () => {
    expect(inputGroupPrepend).toEqual({
      ...inputGroupPrependAppend,
      marginRight: `-${inputBorderWidth}`
    })
    expect(jss.createStyleSheet({ btn: {}, inputGroupText: {}, inputGroupPrepend }).toString()).toBeDefined()
  })

  it('input-group-append', () => {
    expect(inputGroupAppend).toEqual({
      ...inputGroupPrependAppend,
      marginLeft: `-${inputBorderWidth}`
    })
    expect(jss.createStyleSheet({ btn: {}, inputGroupText: {}, inputGroupAppend }).toString()).toBeDefined()
  })

  it('input-group-text', () => {
    expect(inputGroupText).toEqual({
      display: 'flex',
      alignItems: 'center',
      padding: `${inputPaddingY} ${inputPaddingX}`,
      marginBottom: 0,
      fontSize: fontSizeBase,
      fontWeight: fontWeightNormal,
      lineHeight: inputLineHeight,
      color: inputGroupAddonColor,
      textAlign: 'center',
      whiteSpace: 'nowrap',
      backgroundColor: inputGroupAddonBg,
      border: `${inputBorderWidth} solid ${inputGroupAddonBorderColor}`,
      ...borderRadius(inputBorderRadius),
      '& input[type="radio"],input[type="checkbox"]': {
        marginTop: 0
      }
    })
    expect(jss.createStyleSheet({ inputGroupText }).toString()).toBeDefined()
  })

  it('input-group-lg', () => {
    expect(inputGroupLg).toEqual({
      '& > $formControl,& > $inputGroupPrepend > $inputGroupText,& > $inputGroupAppend  > $inputGroupText,& > $inputGroupPrepend > $btn,& > $inputGroupAppend  > $btn': {
        height: inputHeightLg,
        padding: `${inputPaddingYLg} ${inputPaddingXLg}`,
        fontSize: fontSizeLg,
        lineHeight: inputLineHeightLg,
        ...borderRadius(inputBorderRadiusLg)
      }
    })
    expect(jss.createStyleSheet({
      btn: {},
      formControl: {},
      inputGroupAppend: {},
      inputGroupPrepend: {},
      inputGroupText: {},
      inputGroupLg
    }).toString()).toBeDefined()
  })

  it('intput-group-sm', () => {
    expect(inputGroupSm).toEqual({
      '& > $formControl,& > $inputGroupPrepend > $inputGroupText,& > $inputGroupPrepend > $btn,& > $inputGroupAppend  > $btn': {
        height: inputHeightSm,
        padding: `${inputPaddingYSm} ${inputPaddingXSm}`,
        fontSize: fontSizeSm,
        lineHeight: inputLineHeightSm,
        ...borderRadius(inputBorderRadiusSm)
      }
    })
    expect(jss.createStyleSheet({
      btn: {},
      formControl: {},
      inputGroupAppend: {},
      inputGroupPrepend: {},
      inputGroupText: {},
      inputGroupSm
    }).toString()).toBeDefined()
  })

  it('input-group-radius', () => {
    expect(inputGroupRadius).toEqual({
      '$inputGroup > $inputGroupPrepend > $btn,$inputGroup > $inputGroupPrepend > $inputGroupText,$inputGroup > $inputGroupAppend:not(:last-child) > $btn,$inputGroup > $inputGroupAppend:not(:last-child) >$inputGroupText, $inputGroup > $inputGroupAppend:last-child > $btn:not(:last-child):not($dropdownToggle),$inputGroup > $inputGroupAppend:last-child > $inputGroupText:not(:last-child)': {
        ...borderRightRadius(0)
      },
      '$inputGroup > $inputGroupPrepend > $btn,$inputGroup > $inputGroupPrepend > $inputGroupText,$inputGroup > $inputGroupAppend:not(:first-child) > $btn,$inputGroup > $inputGroupAppend:not(:first-child) > $inputGroupText,$inputGroup > $inputGroupAppend:first-child > $btn:not(:first-child):not($dropdownToggle),$inputGroup > $inputGroupAppend:first-child > $inputGroupText:not(:first-child)': {
        ...borderLeftRadius(0)
      }
    })
    expect(jss.createStyleSheet({
      formControl: {},
      inputGroup: {},
      inputGroupAppend: {},
      inputGroupPrepend: {},
      inputGroupText: {},
      dropdownToggle: {},
      btn: {},
      inputGroupRadius
    }).toString()).toBeDefined()
  })
})
