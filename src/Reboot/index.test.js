import reboot, {
  boxSizing,
  html,
  msViewPort,
  html5ForOldBrowsers,
  body,
  suppressFocusOutline,
  hrContentGrouping,
  headerMargin,
  paragraphMargin,
  abbreviations,
  address,
  list,
  blockquote,
  dfn,
  strong,
  small,
  subSup,
  links,
  code,
  figure,
  image,
  tables,
  forms,
  output,
  summary,
  template,
  hidden,
  checkExported
} from './index'

// Reboot
//
// Normalization of HTML elements, manually forked from Normalize.css to remove
// styles targeting irrelevant browsers while applying new styles.
//
// Normalize is licensed MIT. https://github.com/necolas/normalize.css

// Document
//
// 1. Change from `box-sizing: content-box` so that `width` is not affected by `padding` or `border`.
// 2. Change the default font family in all browsers.
// 3. Correct the line height in all browsers.
// 4. Prevent adjustments of font size after orientation changes in IE on Windows Phone and in iOS.
// 5. Setting @viewport causes scrollbars to overlap content in IE11 and Edge, so
//    we force a non-overlapping, non-auto-hiding scrollbar to counteract.
// 6. Change the default tap highlight to be completely transparent in iOS.

describe('Reboot', () => {
  it('all reboot classes', () => {
    expect(boxSizing !== undefined).toBe(true)
    expect(html !== undefined).toBe(true)
    expect(msViewPort !== undefined).toBe(true)
    expect(html5ForOldBrowsers !== undefined).toBe(true)
    expect(body !== undefined).toBe(true)
    expect(suppressFocusOutline !== undefined).toBe(true)
    expect(hrContentGrouping !== undefined).toBe(true)
    expect(headerMargin !== undefined).toBe(true)
    expect(paragraphMargin !== undefined).toBe(true)
    expect(abbreviations !== undefined).toBe(true)
    expect(address !== undefined).toBe(true)
    expect(list !== undefined).toBe(true)
    expect(blockquote !== undefined).toBe(true)
    expect(dfn !== undefined).toBe(true)
    expect(strong !== undefined).toBe(true)
    expect(small !== undefined).toBe(true)
    expect(subSup !== undefined).toBe(true)
    expect(links !== undefined).toBe(true)
    expect(code !== undefined).toBe(true)
    expect(figure !== undefined).toBe(true)
    expect(image !== undefined).toBe(true)
    expect(tables !== undefined).toBe(true)
    expect(forms !== undefined).toBe(true)
    expect(output !== undefined).toBe(true)
    expect(template !== undefined).toBe(true)
    expect(hidden !== undefined).toBe(true)
    expect(summary !== undefined).toBe(true)
    expect(reboot !== undefined).toBe(true)

    expect(checkExported).toBe(true)
  })
})
