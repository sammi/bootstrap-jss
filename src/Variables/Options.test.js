import {
  enableCaret,
  enableRounded,
  enableShadows,
  enableGradients,
  enableTransitions,
  enableHoverMediaQuery,
  enableGridClasses,
  enablePrintStyles,
  enableValidationIcons
} from './Options'

describe('Options', () => {
  it('Quickly modify global styling by enabling or disabling optional features.', () => {
    expect(enableCaret).toEqual(true)
    expect(enableRounded).toEqual(true)
    expect(enableShadows).toEqual(false)
    expect(enableGradients).toEqual(false)
    expect(enableTransitions).toEqual(true)
    // Deprecated, no longer affects any compiled CSS
    expect(enableHoverMediaQuery).toEqual(false)
    expect(enableGridClasses).toEqual(true)
    expect(enablePrintStyles).toEqual(true)
    expect(enableValidationIcons).toEqual(true)
  })
})
