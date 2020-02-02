import css from 'styled-jsx/css'

export const button = css`button { color: hotpink; }`

// Global styles
export const body = css.global`body { margin: 0; }`

// Resolved styles
export const link = css.resolve`a { color: green; }`
