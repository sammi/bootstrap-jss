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
        expect(zindexDropdown).toEqual('1000 !default')
        expect(zindexSticky).toEqual('1020 !default')
        expect(zindexFixed).toEqual('1030 !default')
        expect(zindexModalBackdrop).toEqual('1040 !default')
        expect(zindexModal).toEqual('1050 !default')
        expect(zindexPopover).toEqual('1060 !default')
        expect(zindexTooltip).toEqual('1070 !default')
    })
})
