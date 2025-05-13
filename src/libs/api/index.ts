import axios from 'axios';
import { API_CONFIG, API_ENDPOINTS } from './config';
import type { Banner, NewsItem, ExhibitionWork, Competition } from '@/types/api';

// 创建 axios 实例
const api = axios.create({
    baseURL: API_CONFIG.BASE_URL,
    timeout: API_CONFIG.TIMEOUT,
    headers: {
        'Content-Type': 'application/json',
    },
});

// 请求拦截器
api.interceptors.request.use(
    (config) => {
        // 可以在这里添加认证信息等
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 响应拦截器
api.interceptors.response.use(
    (response) => {
        // 可以在这里统一处理响应数据
        return response.data;
    },
    (error) => {
        // 统一错误处理
        console.error('API Error:', error);
        return Promise.reject(error);
    }
);

// API 方法
export const competitionApi = {
    // 获取轮播图数据
    getBanners: () =>
        api.get<Banner[]>(API_ENDPOINTS.BANNERS),

    // 获取新闻列表
    getNews: (params?: { category?: 'news' | 'notification' }) =>
        api.get<NewsItem[]>(API_ENDPOINTS.NEWS, { params }),

    // 获取优秀作品展示
    getExhibitionWorks: () =>
        api.get<ExhibitionWork[]>(API_ENDPOINTS.EXHIBITION),

    // 获取竞赛列表
    getCompetitions: () =>
        api.get<Competition[]>(API_ENDPOINTS.COMPETITIONS),
};