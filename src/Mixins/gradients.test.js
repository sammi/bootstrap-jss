import {gradientBg} from './gradients'
describe('Gradients', () => {
  it('Gradients', () => {
    expect(gradientBg('#000')).toEqual({'backgroundColor': '#000'})
    expect(gradientBg('#000', true)).toEqual({'background': '#000 linear-gradient(180deg, #262626, #000) repeat-x'})
  })
})
