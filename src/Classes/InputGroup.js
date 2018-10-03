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
import { customSelect, customFile, customFileInput, customFileLabel } from './CustomForms'
import { btn } from './Buttons'
import { dropdownToggle } from './Dropdown'
import { formControl } from './Form'

const inputGroup = {
  formControl,
  customSelect,
  customFile,
  customFileInput,
  customFileLabel,
  position: 'relative',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'stretch',
  width: '100%',
  '> $formControl,> $customSelect, > $customFile': {
    position: 'relative',
    flex: '1 1 auto',
    width: '1%',
    marginBottom: 0,
    '+ $formControl, + $customSelect, + $customFile': {
      marginLeft: `-${inputBorderWidth}`
    }
  },
  '> $formControl:focus,> $customSelect:focus,> $customFile $customFileInput:focus ~ $customFileLabel': {
    zIndex: 3
  },
  '> $customFile $customFileInput:focus': {
    zIndex: 4
  },
  '> $formControl,> $customSelect': {
    '&:not(:last-child)': {
      ...borderRightRadius(0)
    },
    '&:not(:first-child)': {
      ...borderLeftRadius(0)
    }
  },
  '> $customFile': {
    display: 'flex',
    alignItems: 'center',
    '&:not(:last-child) $customFileLabel,&:not(:last-child) $customFileLabel::after': {
      ...borderRightRadius(0)
    },
    '&:not(:first-child) $customFileLabel': {
      ...borderLeftRadius(0)
    }
  }
}

const inputGroupText = {
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
  'input[type="radio"],input[type="checkbox"]': {
    marginTop: 0
  }
}

const inputGroupPrependAppend = {
  inputGroupText,
  btn,
  display: 'flex',
  '$btn': {
    position: 'relative',
    zIndex: 2
  },
  '$btn + $btn, $btn + $inputGroupText, $inputGroupText + $inputGroupText, $inputGroupText + $btn': {
    marginLeft: `-${inputBorderWidth}`
  }
}

const inputGroupPrepend = {
  ...inputGroupPrependAppend,
  marginRight: `-${inputBorderWidth}`
}

const inputGroupAppend = {
  ...inputGroupPrependAppend,
  marginLeft: `-${inputBorderWidth}`
}

const inputGroupLg = {
  formControl,
  inputGroupAppend,
  inputGroupText,
  [`& > $formControl,& > $inputGroupPrepend > $inputGroupText,& > $inputGroupAppend  > $inputGroupText,& > $inputGroupPrepend > $btn,& > $inputGroupAppend  > $btn`]: {
    height: inputHeightLg,
    padding: `${inputPaddingYLg} ${inputPaddingXLg}`,
    fontSize: fontSizeLg,
    lineHeight: inputLineHeightLg,
    ...borderRadius(inputBorderRadiusLg)
  }
}

const inputGroupSm = {
  formControl,
  inputGroupAppend,
  inputGroupText,
  [`& > $formControl,& > $inputGroupPrepend > $inputGroupText,& > $inputGroupPrepend > $btn,& > $inputGroupAppend  > $btn`]: {
    height: inputHeightSm,
    padding: `${inputPaddingYSm} ${inputPaddingXSm}`,
    fontSize: fontSizeSm,
    lineHeight: inputLineHeightSm,
    ...borderRadius(inputBorderRadiusSm)
  }
}

const inputGroupRadius = {
  formControl,
  inputGroup,
  inputGroupAppend,
  inputGroupPrepend,
  inputGroupText,
  dropdownToggle,
  btn,
  [`$inputGroup > $inputGroupPrepend > $btn,$inputGroup > $inputGroupPrepend > $inputGroupText,$inputGroup > $inputGroupAppend:not(:last-child) > $btn,$inputGroup > $inputGroupAppend:not(:last-child) >$inputGroupText, $inputGroup > $inputGroupAppend:last-child > $btn:not(:last-child):not($dropdownToggle),$inputGroup > $inputGroupAppend:last-child > $inputGroupText:not(:last-child)`]: {
    ...borderRightRadius(0)
  },
  [`$inputGroup > $inputGroupPrepend > $btn,$inputGroup > $inputGroupPrepend > $inputGroupText,$inputGroup > $inputGroupAppend:not(:first-child) > $btn,$inputGroup > $inputGroupAppend:not(:first-child) > $inputGroupText,$inputGroup > $inputGroupAppend:first-child > $btn:not(:first-child):not($dropdownToggle),$inputGroup > $inputGroupAppend:first-child > $inputGroupText:not(:first-child)`]: {
    ...borderLeftRadius(0)
  }
}

export {
  inputGroup,
  inputGroupPrepend,
  inputGroupAppend,
  inputGroupText,
  inputGroupLg,
  inputGroupSm,
  inputGroupRadius
}
