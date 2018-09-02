import { navDividerColor, navDividerMarginY } from '../Variables/Navs'

export const navDivider = (color = navDividerColor, marginY = navDividerMarginY) => ({
    height: 0,
    margin: `${marginY} 0`,
    overflow: 'hidden',
    borderTop: `1px solid ${color}`
})
