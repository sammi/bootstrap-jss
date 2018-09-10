import {caret} from '../Mixins/caret'
import {dropdownWrapper, dropdownToggle} from './Dropdown'

describe('dropdown', () => {
    it('dropdownWrapper', () => {
        expect(dropdownWrapper).toEqual({
            'dropup, dropright, dropdown, dropleft': {
                position: 'relative'  
            }
        })
    })

    it('dropdown-toggle', () => {
        expect(dropdownToggle).toEqual({
            ...caret
        })
    })
})



