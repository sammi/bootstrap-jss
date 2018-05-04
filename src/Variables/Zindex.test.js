import {
    zindexDropdown,
    zindexSticky,
    zindexFixed,
    zindexModalBackdrop,
    zindexModal,
    zindexPopover,
    zindexTooltip
} from './Zindex'

describe('Z-index master list', () => {

    it('Warning: Avoid customizing these values. They\'re used for a bird\'s eye view of components dependent on the z-axis and are designed to all work together.', () => {
        expect(zindexDropdown).toEqual(1000)
        expect(zindexSticky).toEqual(1020)
        expect(zindexFixed).toEqual(1030)
        expect(zindexModalBackdrop).toEqual(1040)
        expect(zindexModal).toEqual(1050)
        expect(zindexPopover).toEqual(1060)
        expect(zindexTooltip).toEqual(1070)
    })
})
