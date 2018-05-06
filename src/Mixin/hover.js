
export const hover = content => ({
    '&:hover': content
})

export const hoverFocus = content => ({
    '&:hover, &:focus': content
})

export const plainHoverFocus = content => ({
    '&, &:hover, &:focus': content
})

export const hoverFocusActive = content => ({
    '&:hover, &:focus, &:active': content
})
