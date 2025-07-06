# Whut-CST-School-Competition-Platform-Homepage

# 武汉理工大学计算机智能学院校赛平台首页

## 项目简介

本项目是武汉理工大学计算机智能学院校赛平台首页前端，网站提供赛事信息展示、新闻动态、在线报名等功能。

## 技术栈

- **框架**: Next.js 14
- **语言**: TypeScript
- **UI 组件库**: Ant Design
- **样式**: SCSS Modules
- **HTTP 客户端**: Axios
- **部署**: Vercel (计划中)

## 主要功能

- 🎯 赛事信息展示
  - 轮播展示各赛事板块
  - 赛事详细信息查看
  - 赛程时间轴展示

- 📢 校内新闻通知
  - 赛事动态
  - 通知公告
  - 新闻资讯

- 🏆 优秀作品展示
  - 往届赛事总结
  - 优秀作品展示

## 快速开始

### 环境要求

- Node.js 18.0.0 或更高版本
- npm 包管理器

### 安装步骤

1. 克隆项目
```bash
git clone [项目地址]
cd Whut-CS-Competition-Student-Service-Center
```

2. 安装依赖
```bash
npm install
```

3. 运行开发服务器
```bash
npm run dev
```

4. 打开浏览器访问 [http://localhost:3000](http://localhost:3000)

### 构建部署

```bash
# 构建生产环境版本
npm run build

# 运行生产环境版本
npm run start
```

## 项目结构

```
src/
├── app/                 # 页面路由
├── components/          # 可复用组件
│   ├── Banner/         # 首页轮播
│   ├── Header/         # 导航栏
│   ├── Footer/         # 页脚
│   └── ...
├── styles/             # 全局样式
└── types/              # TypeScript 类型定义
```

## 开发规范

- 组件采用 TypeScript 开发，确保类型安全
- 样式使用 SCSS Modules，避免样式冲突
- 遵循 ESLint 规范，保持代码风格统一
- 组件需编写必要的注释和文档

## 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交改动 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request


## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情
