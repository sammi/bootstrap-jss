import { white } from './Colors'
import format from 'string-format'
import _ from 'lodash'

export const carouselControlColor = white
export const carouselControlWidth = '15%'
export const carouselControlOpacity = 0.5

export const carouselIndicatorWidth = '30px'
export const carouselIndicatorHeight = '3px'
export const carouselIndicatorSpacer = '3px'
export const carouselIndicatorActiveBg = white

export const carouselCaptionWidth = '70%'
export const carouselCaptionColor = white

export const carouselControlIconWidth = '20px'

export const carouselControlPrevIconBg =
  format("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='{}' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E",
    _.replace(carouselControlColor, '', '').trim()
  )

export const carouselControlNextIconBg =
  format("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='{}' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E",
    _.replace(carouselControlColor, '', '').trim()
  )

export const carouselTransition = 'transform .6s ease' // Define transform transition first if using multiple transitons (e.g., `transform 2s ease, opacity .5s easeOut`
