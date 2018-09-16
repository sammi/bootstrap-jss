import {
  carousel,
  carouselInner,
  carouselItem,
  carouselItemNext,
  carouselItemPrev,
  activeCarouselItemRight,
  activeCarouselItemLeft,
  carouselFade,
  carouselControlPrev,
  carouselControlNext,
  carouselControlPrevIcon,
  carouselControlNextIcon,
  carouselIndicators,
  carouselCaption
} from './Carousel'

describe('carousel', () => {
  it('carousel', () => {
    expect(carousel).toEqual({
      position: 'relative'
    })
  })

  it('carousel-inner', () => {
    expect(carouselInner).toEqual()
  })

  it('carousel-item', () => {
    expect(carouselItem).toEqual()
  })

  it('carousel-item-next', () => {
    expect(carouselItemNext).toEqual()
  })

  it('carousel-item-prev', () => {
    expect(carouselItemPrev).toEqual()
  })

  it('carousel-item-right', () => {
    expect(activeCarouselItemRight).toEqual()
  })

  it('carousel-item-left', () => {
    expect(activeCarouselItemLeft).toEqual()
  })

  it('carousel-fade', () => {
    expect(carouselFade).toEqual()
  })

  it('carousel-control-prev', () => {
    expect(carouselControlPrev).toEqual()
  })

  it('carousel-control-next', () => {
    expect(carouselControlNext).toEqual()
  })

  it('carousel-control-prev-icon', () => {
    expect(carouselControlPrevIcon).toEqual()
  })

  it('carousel-control-next-icon', () => {
    expect(carouselControlNextIcon).toEqual()
  })

  it('carousel-indicators', () => {
    expect(carouselIndicators).toEqual()
  })

  it('carousel-caption', () => {
    expect(carouselCaption).toEqual()
  })
})
