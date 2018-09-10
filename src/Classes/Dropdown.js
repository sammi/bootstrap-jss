import { caret } from "../Mixins/caret";

const dropdownWrapper = {
    'dropup, dropright, dropdown, dropleft': {
        position: 'relative'  
    }
}

const dropdownToggle = {
    ...caret
}

export {
    dropdownWrapper,
    dropdownToggle
}
