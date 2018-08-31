export const size = (width, height) => {
  const heightValue = height || width
  return {
    width: width,
    height: heightValue
  }
}
