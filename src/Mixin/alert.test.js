import {alertVariant} from './alert'
describe('Alert', () => {
    it('Alert', () => {

        expect(alertVariant('#fff', '#000', '#0F0', false)).toEqual({
            "alertLink": {
                "color": "#00E600"
            },
            "borderColor": "#000",
            "color": "#0F0",
            "extend": {
                "backgroundColor": "#fff"
            },
            "hr": {
                "borderTopColor": "#000000"
            }
        })

        expect(alertVariant('#fff', '#000', '#0F0', true)).toEqual({
            "alertLink": {
                "color": "#00E600"
            },
            "borderColor": "#000",
            "color": "#0F0",
            "extend": {
                "background": "#fff linear-gradient(180deg, #FFFFFF, #fff) repeat-x"
            },
            "hr": {
                "borderTopColor": "#000000"
            }
        })
        
    })
})
