
export const HOST = process.env.HOST || '0.0.0.0'
export const PORT = process.env.PORT || 3000
export const IS_DEV = process.env.NODE_ENV !== 'production'
export const IS_CLIENT = typeof window !== 'undefined'
export const SERVER_BASE = IS_CLIENT ? '' : `http://localhost:${PORT}`
