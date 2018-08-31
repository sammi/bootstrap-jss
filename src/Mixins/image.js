const imgFluid = {
  maxWidth: '100%',
  height: 'auto'
}

const imgRetina = (file1x, file2x, width1x, height1x) => ({
  backgroupImage: `url(${file1x})`,
  '@media only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)': {
    backgrondImage: `url${file2x}`,
    backgroundSize: `${width1x} ${height1x}`
  }
})

export {
  imgFluid,
  imgRetina
}
