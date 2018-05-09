
const hover = content => ({
    '&:hover': content
})

const hoverFocus = content => ({
    '&:hover, &:focus': content
})

const plainHoverFocus = content => ({
    '&, &:hover, &:focus': content
})

const hoverFocusActive = content => ({
    '&:hover, &:focus, &:active': content
})

export {
    hover,
    hoverFocus,
    plainHoverFocus,
    hoverFocusActive
}