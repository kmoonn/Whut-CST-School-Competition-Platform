export const API_CONFIG = {
    BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || '/api',
    TIMEOUT: 10000,
}

// API 路径配置
export const API_ENDPOINTS = {
    BANNERS: '/banners',
    NEWS: '/news',
    EXHIBITION: '/exhibition/works',
    COMPETITIONS: '/competitions',
}