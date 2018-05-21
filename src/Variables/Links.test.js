import {themeColors} from './Colors'
import {
  linkColor,
  linkDecoration,
  linkHoverColor,
  linkHoverDecoration
} from './Links'

describe('Links', () => {
  it('Style anchor elements.', () => {
    expect(linkColor).toEqual(themeColors.primary)
    expect(linkDecoration).toEqual('none')
    expect(linkHoverColor).toEqual('#0056b3')
    expect(linkHoverDecoration).toEqual('underline')
  })
})
