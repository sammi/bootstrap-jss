import {white} from './Colors'
import format from 'string-format'
import _ from 'lodash'

import {
    carouselControlColor,
    carouselControlWidth,
    carouselControlOpacity,    
    carouselIndicatorWidth,
    carouselIndicatorHeight,
    carouselIndicatorSpacer,
    carouselIndicatorActiveBg,    
    carouselCaptionWidth,
    carouselCaptionColor,    
    carouselControlIconWidth,    
    carouselControlPrevIconBg,
    carouselControlNextIconBg,    
    carouselTransition
} from './Carousel'

describe('Carousel', () => {
    it('Carousel', () => {
        expect(carouselControlColor).toEqual(white)
        expect(carouselControlWidth).toEqual('15% !default')
        expect(carouselControlOpacity).toEqual('.5 !default')
        
        expect(carouselIndicatorWidth).toEqual('30px !default')
        expect(carouselIndicatorHeight).toEqual('3px !default')
        expect(carouselIndicatorSpacer).toEqual('3px !default')
        expect(carouselIndicatorActiveBg).toEqual(white)
        
        expect(carouselCaptionWidth).toEqual('70% !default')
        expect(carouselCaptionColor).toEqual(white)
        
        expect(carouselControlIconWidth).toEqual('20px !default')
        
        expect(carouselControlPrevIconBg).toEqual(
            format("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='{}' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E",
            _.replace(carouselControlColor, '!default', '').trim()
        ))

        expect(carouselControlNextIconBg).toEqual(
            format("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='{}' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E",
            _.replace(carouselControlColor, '!default', '').trim()
        ))
        
        expect(carouselTransition).toEqual('transform .6s ease !default') // Define transform transition first if using multiple transitons (e.g., `transform 2s ease, opacity .5s easeOut`)
    })
})
