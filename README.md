# Tree Talk

树形对话AI应用 - 通过树形结构组织对话，让AI对话更加集中和高效。

## 项目结构

```
tree-talk/
├── web/                 # 前端项目 (React + TypeScript)
│   ├── src/
│   │   ├── components/  # 可复用组件
│   │   ├── pages/       # 页面组件
│   │   ├── store/       # 状态管理
│   │   ├── api/         # API请求封装
│   │   ├── types/       # TypeScript类型定义
│   │   └── utils/       # 工具函数
│   └── public/          # 静态资源
└── api/                 # 后端项目 (Golang + Gin)
    ├── config/          # 配置相关
    ├── handler/         # 路由处理器
    ├── models/          # 数据模型
    ├── routes/          # 路由定义
    ├── service/         # 业务逻辑
    └── utils/           # 工具函数
```

## 技术栈

### 前端
- React 18
- TypeScript
- Ant Design
- Redux Toolkit
- React Router
- Axios

### 后端
- Golang
- Gin Web Framework
- MongoDB
- Logrus

## 开发环境

### 前端
```bash
cd web
npm install
npm start
```

### 后端
```bash
cd api
go mod tidy
go run main.go
```

## 功能特性

- 🌳 树形对话结构
- 🔄 分支切换
- 💬 实时对话
- 📱 响应式设计
- 🔍 对话搜索
- 📊 对话统计 