
export const boxShadow = (isEnableShadow, ...shadow) => isEnableShadow ? { boxShadow: [...shadow] } : null
